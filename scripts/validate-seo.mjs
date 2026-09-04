import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const manifestPath = path.join(root, 'src', 'content', 'publicRoutes.json');
const robotsPath = path.join(root, 'public', 'robots.txt');
const sitemapPath = path.join(distDir, 'sitemap.xml');
const locales = ['en', 'pt'];

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const robotsTxt = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
const failures = [];

const normalizeRoutePath = (routePath) => {
  if (!routePath || routePath === '/') {
    return '/';
  }

  const [pathOnly] = routePath.split(/[?#]/);
  const trimmed = pathOnly.replace(/\/+$/, '');

  if (!trimmed) {
    return '/';
  }

  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
};

const hasFileExtension = (pathname) => /\/[^/]+\.[^/]+$/.test(pathname);

const addTrailingSlashToPagePath = (pathname) => {
  if (!pathname || pathname === '/' || pathname.endsWith('/') || hasFileExtension(pathname)) {
    return pathname || '/';
  }

  return `${pathname}/`;
};

const buildLocalizedPath = (locale, routePath) => {
  const normalizedRoutePath = normalizeRoutePath(routePath);
  const localePrefix = manifest.localePrefixes[locale];

  if (!localePrefix) {
    return addTrailingSlashToPagePath(normalizedRoutePath);
  }

  if (normalizedRoutePath === '/') {
    return `/${localePrefix}/`;
  }

  return addTrailingSlashToPagePath(`/${localePrefix}${normalizedRoutePath}`);
};

const buildAbsoluteUrl = (pathname) =>
  pathname === '/' ? `${manifest.siteUrl}/` : `${manifest.siteUrl}${addTrailingSlashToPagePath(pathname)}`;

const getOutputPath = (pathname) => {
  if (pathname === '/') {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, ...pathname.replace(/^\/+/, '').split('/').filter(Boolean), 'index.html');
};

const stripTags = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ');

const countWords = (html) => stripTags(html).split(/\s+/).filter(Boolean).length;
const hasRootStaticFallback = (html) =>
  /<div id="root">\s*<!-- static-seo-fallback:start -->[\s\S]*?<!-- static-seo-fallback:end -->\s*<\/div>/i.test(html);
const hasNoscriptBeforeStaticFallback = (html) =>
  html.includes('<noscript>') && html.indexOf('<noscript>') < html.indexOf('<!-- static-seo-fallback:start -->');

const sitemapUrls = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));

const getGlobalDisallowRules = (robots) => {
  const rules = [];
  let inGlobalUserAgent = false;

  for (const rawLine of robots.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line.startsWith('#')) {
      continue;
    }

    const [rawKey, ...rawValueParts] = line.split(':');
    const key = rawKey.trim().toLowerCase();
    const value = rawValueParts.join(':').trim();

    if (key === 'user-agent') {
      inGlobalUserAgent = value === '*';
      continue;
    }

    if (inGlobalUserAgent && key === 'disallow' && value) {
      rules.push(value);
    }
  }

  return rules;
};

const wildcardToRegExp = (value) => {
  const escaped = value.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
  return new RegExp(`^${escaped}`);
};

const matchesDisallow = (pathname, rule) => {
  if (!rule || rule === '/') {
    return rule === '/';
  }

  if (rule.includes('*')) {
    return wildcardToRegExp(rule).test(pathname);
  }

  const normalizedRule = rule.endsWith('$') ? rule.slice(0, -1) : rule;
  return pathname === normalizedRule || pathname.startsWith(`${normalizedRule}/`);
};

const globalDisallowRules = getGlobalDisallowRules(robotsTxt);

for (const route of manifest.routes) {
  if (route.sitemap?.include) {
    for (const locale of locales) {
      const localizedPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
      const absoluteUrl = buildAbsoluteUrl(localizedPath);

      if (!sitemapUrls.has(absoluteUrl)) {
        failures.push(`Missing sitemap URL: ${absoluteUrl}`);
      }

      const absoluteUrlPathname = new URL(absoluteUrl).pathname;
      if (!hasFileExtension(absoluteUrlPathname) && !absoluteUrlPathname.endsWith('/')) {
        failures.push(`Sitemap page URL must use trailing slash: ${absoluteUrl}`);
      }

      if (absoluteUrl.includes('#')) {
        failures.push(`Sitemap URL must not include anchors: ${absoluteUrl}`);
      }

      if (/noindex/i.test(route.robots ?? '')) {
        failures.push(`Noindex route must not be included in sitemap: ${route.id} ${absoluteUrl}`);
      }

      const disallowRule = globalDisallowRules.find((rule) => matchesDisallow(localizedPath, rule));
      if (disallowRule) {
        failures.push(`Sitemap URL is blocked by robots.txt rule "${disallowRule}": ${absoluteUrl}`);
      }
    }
  }

  for (const locale of locales) {
    for (const aliasPath of route.aliasesByLocale?.[locale] ?? []) {
      const aliasUrl = buildAbsoluteUrl(buildLocalizedPath(locale, aliasPath));

      if (sitemapUrls.has(aliasUrl)) {
        failures.push(`Alias must not be included in sitemap: ${aliasUrl}`);
      }
    }
  }

  if (!route.staticHtml) {
    continue;
  }

  for (const locale of locales) {
    const outputVariants = new Set([route.localizedPaths[locale], ...(route.aliasesByLocale?.[locale] ?? [])]);

    for (const routePath of outputVariants) {
      const localizedPath = buildLocalizedPath(locale, routePath);
      const canonicalPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
      const canonicalUrl = buildAbsoluteUrl(canonicalPath);
      const outputPath = getOutputPath(localizedPath);

      if (!fs.existsSync(outputPath)) {
        failures.push(`Missing static HTML output for ${route.id}: ${localizedPath}`);
        continue;
      }

      const html = fs.readFileSync(outputPath, 'utf8');

      if (!html.includes(`<link rel="canonical" href="${canonicalUrl}"`)) {
        failures.push(`Static HTML canonical mismatch for ${route.id}: ${localizedPath} expected ${canonicalUrl}`);
      }

      if (!html.includes(`<meta property="og:url" content="${canonicalUrl}"`)) {
        failures.push(`Static HTML og:url mismatch for ${route.id}: ${localizedPath} expected ${canonicalUrl}`);
      }
    }
  }
}

const requiredLandingTerms = {
  appRescueLaunch: ['codebase', 'release', 'handoff', 'App Store', 'Play Store'],
  customCrmInternalTools: ['spreadsheets', 'dashboards', 'workflow', 'customer', 'employee'],
  llmRagIntegrations: ['LLM', 'CRM', 'fallback', 'observability', 'support'],
  companyProfile: ['CNPJ', 'D-U-N-S', 'support@tgapps.dev', 'official'],
  dueDiligence: ['legal entity', 'contract', 'handoff', 'security']
};

const requiredCampaignLandingTerms = {
  adsAppRescue: ['unfinished', 'codebase', 'backend', 'store', 'first milestone'],
  adsCustomCrm: ['spreadsheets', 'CRM', 'dashboards', 'workflow', 'manual'],
  adsMobileApps: ['Android', 'iOS', 'backend', 'App Store', 'Play Store'],
  adsAiIntegrations: ['AI', 'CRM', 'classification', 'human review', 'fallback'],
  adsStartupSoftware: ['startup', 'MVP', 'first milestone', 'backend', 'release'],
  adsOperationalSoftware: ['spreadsheets', 'CRM', 'dashboards', 'workflow', 'operations']
};

const requiredHomeTerms = {
  en: [
    'custom software',
    'mobile apps',
    'CRM',
    'app rescue',
    'AI',
    'D-U-N-S',
    'First Milestone Guarantee',
    'Start without paying upfront',
    'USD 2,000/mo'
  ],
  pt: [
    'apps',
    'CRM',
    'resgate',
    'IA',
    'D-U-N-S',
    'Garantia da Primeira Entrega',
    'Sem pagamento antecipado',
    'US$ 2.000/mês'
  ]
};

const serviceSchemaRouteIds = new Set([
  'customSoftwareSmbs',
  'customSoftwareStartups',
  'androidIosSmb',
  'appRescueLaunch',
  'bornGlobalApps',
  'customCrmInternalTools',
  'backendApiIntegrations',
  'devAsAService',
  'monthlyPod',
  'llmRagIntegrations',
  'howWeFitYourTeam'
]);

for (const route of manifest.routes.filter((item) => item.page === 'home' && item.staticHtml)) {
  for (const locale of locales) {
    const localizedPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
    const outputPath = getOutputPath(localizedPath);

    if (!fs.existsSync(outputPath)) {
      continue;
    }

    const html = fs.readFileSync(outputPath, 'utf8');
    const h1Count = (html.match(/<h1\b/gi) ?? []).length;
    const wordCount = countWords(html);
    const minimumWords = locale === 'en' ? 900 : 820;

    if (!hasRootStaticFallback(html)) {
      failures.push(`Home route must include rich static content inside #root: ${localizedPath}`);
    }

    if (hasNoscriptBeforeStaticFallback(html)) {
      failures.push(`Home route static content must not be noscript-only: ${localizedPath}`);
    }

    if (!html.includes('data-static-route-schema="true"')) {
      failures.push(`Home route is missing static route schema: ${localizedPath}`);
    }

    if (h1Count !== 1) {
      failures.push(`Home route must have exactly one H1 in generated HTML: ${localizedPath} found ${h1Count}`);
    }

    if (wordCount < minimumWords) {
      failures.push(`Home route generated HTML is too thin: ${localizedPath} has ${wordCount} words, expected at least ${minimumWords}`);
    }

    for (const term of requiredHomeTerms[locale]) {
      if (!html.toLowerCase().includes(term.toLowerCase())) {
        failures.push(`Home route ${localizedPath} is missing term "${term}" in generated HTML`);
      }
    }
  }
}

for (const route of manifest.routes.filter((item) => item.page === 'landing' && item.staticHtml)) {
  for (const locale of locales) {
    const localizedPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
    const canonicalPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
    const canonicalUrl = buildAbsoluteUrl(canonicalPath);
    const outputPath = getOutputPath(localizedPath);

    if (!fs.existsSync(outputPath)) {
      continue;
    }

    const html = fs.readFileSync(outputPath, 'utf8');
    const h1Count = (html.match(/<h1\b/gi) ?? []).length;
    const wordCount = countWords(html);
    const minimumWords = locale === 'en' && requiredLandingTerms[route.id] ? 450 : 260;

    if (!hasRootStaticFallback(html)) {
      failures.push(`Landing route does not include static root content: ${localizedPath}`);
    }

    if (!html.includes('data-static-route-schema="true"')) {
      failures.push(`Landing route is missing static route schema: ${localizedPath}`);
    }

    if (hasNoscriptBeforeStaticFallback(html)) {
      failures.push(`Landing route static content is still noscript-only: ${localizedPath}`);
    }

    if (serviceSchemaRouteIds.has(route.id) && !html.includes(`${canonicalUrl}#service`)) {
      failures.push(`Commercial landing route is missing Service schema: ${localizedPath}`);
    }

    if (!serviceSchemaRouteIds.has(route.id) && html.includes(`${canonicalUrl}#service`)) {
      failures.push(`Non-service landing route should not include Service schema: ${localizedPath}`);
    }

    if (h1Count !== 1) {
      failures.push(`Landing route must have exactly one H1 in generated HTML: ${localizedPath} found ${h1Count}`);
    }

    if (wordCount < minimumWords) {
      failures.push(`Landing route generated HTML is too thin: ${localizedPath} has ${wordCount} words, expected at least ${minimumWords}`);
    }

    if (locale === 'en') {
      for (const term of requiredLandingTerms[route.id] ?? []) {
        if (!html.toLowerCase().includes(term.toLowerCase())) {
          failures.push(`Priority landing route ${localizedPath} is missing term "${term}" in generated HTML`);
        }
      }
    }
  }
}

for (const route of manifest.routes.filter((item) => item.page === 'campaignLanding' && item.staticHtml)) {
  if (route.sitemap?.include) {
    failures.push(`Campaign landing route must not be included in sitemap: ${route.id}`);
  }

  if (!/noindex/i.test(route.robots ?? '')) {
    failures.push(`Campaign landing route must be noindex,follow: ${route.id}`);
  }

  for (const locale of locales) {
    const localizedPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
    const canonicalPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
    const canonicalUrl = buildAbsoluteUrl(canonicalPath);
    const outputPath = getOutputPath(localizedPath);

    if (!fs.existsSync(outputPath)) {
      failures.push(`Missing campaign landing static HTML output for ${route.id}: ${localizedPath}`);
      continue;
    }

    const html = fs.readFileSync(outputPath, 'utf8');
    const h1Count = (html.match(/<h1\b/gi) ?? []).length;
    const wordCount = countWords(html);
    const minimumWords = locale === 'en' ? 320 : 300;

    if (!hasRootStaticFallback(html)) {
      failures.push(`Campaign landing route does not include static root content: ${localizedPath}`);
    }

    if (!html.includes('data-static-route-schema="true"')) {
      failures.push(`Campaign landing route is missing static route schema: ${localizedPath}`);
    }

    if (html.includes(`${canonicalUrl}#service`)) {
      failures.push(`Campaign landing route should not include Service schema: ${localizedPath}`);
    }

    if (sitemapUrls.has(canonicalUrl)) {
      failures.push(`Campaign landing route must not appear in sitemap: ${canonicalUrl}`);
    }

    if (h1Count !== 1) {
      failures.push(`Campaign landing route must have exactly one H1 in generated HTML: ${localizedPath} found ${h1Count}`);
    }

    if (wordCount < minimumWords) {
      failures.push(`Campaign landing route generated HTML is too thin: ${localizedPath} has ${wordCount} words, expected at least ${minimumWords}`);
    }

    if (locale === 'en') {
      for (const term of requiredCampaignLandingTerms[route.id] ?? []) {
        if (!html.toLowerCase().includes(term.toLowerCase())) {
          failures.push(`Campaign landing route ${localizedPath} is missing term "${term}" in generated HTML`);
        }
      }
    }
  }
}

if (failures.length) {
  console.error(`SEO validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SEO validation passed for ${manifest.routes.length} route definitions and ${sitemapUrls.size} sitemap URLs.`);
