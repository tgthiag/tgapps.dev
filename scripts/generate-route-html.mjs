import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const indexPath = path.join(distDir, 'index.html');
const manifestPath = path.join(root, 'src', 'content', 'publicRoutes.json');

if (!fs.existsSync(indexPath)) {
  throw new Error(`dist/index.html not found at ${indexPath}`);
}

if (!fs.existsSync(manifestPath)) {
  throw new Error(`public route manifest not found at ${manifestPath}`);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const siteUrl = manifest.siteUrl;
const defaultLocale = manifest.defaultLocale;
const localePrefixes = manifest.localePrefixes;
const routes = manifest.routes;
const baseHtml = fs.readFileSync(indexPath, 'utf8');
const buildDate = new Date().toISOString().slice(0, 10);
const locales = ['en', 'pt'];

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

const buildLocalizedPath = (locale, routePath) => {
  const normalizedRoutePath = normalizeRoutePath(routePath);
  const localePrefix = localePrefixes[locale];

  if (!localePrefix) {
    return normalizedRoutePath;
  }

  if (normalizedRoutePath === '/') {
    return `/${localePrefix}/`;
  }

  return `/${localePrefix}${normalizedRoutePath}`;
};

const buildAbsoluteUrl = (pathname) => {
  if (pathname === '/') {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${pathname}`;
};

const getOutputPath = (pathname) => {
  if (pathname === '/') {
    return path.join(distDir, 'index.html');
  }

  const segments = pathname.replace(/^\/+/, '').split('/').filter(Boolean);
  return path.join(distDir, ...segments, 'index.html');
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const serviceRouteIds = [
  'androidIosSmb',
  'customCrmInternalTools',
  'backendApiIntegrations',
  'appRescueLaunch',
  'devAsAService',
  'llmRagIntegrations',
  'bornGlobalApps',
  'customSoftwareStartups',
  'clearFirstMilestone'
];

const trustRouteIds = [
  'whyTgApps',
  'firstMilestoneGuarantee',
  'companyProfile',
  'dueDiligence',
  'aiProfile',
  'appsDirectory',
  'anyLanguage'
];

const routeById = new Map(routes.map((route) => [route.id, route]));

const stripBrandFromTitle = (title) =>
  title
    .replace(/\s*\|\s*Tg Apps.*$/i, '')
    .replace(/\s*\|\s*Tg Apps.*$/i, '')
    .trim();

const buildRouteLink = (routeId, locale) => {
  const targetRoute = routeById.get(routeId);
  if (!targetRoute || !targetRoute.localizedPaths?.[locale] || !targetRoute.seo?.[locale]) {
    return '';
  }

  const href = buildAbsoluteUrl(buildLocalizedPath(locale, targetRoute.localizedPaths[locale]));
  const label = stripBrandFromTitle(targetRoute.seo[locale].title);
  return `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`;
};

const buildLinkList = (routeIds, locale) =>
  routeIds
    .map((routeId) => buildRouteLink(routeId, locale))
    .filter(Boolean)
    .join('\n');

const buildStaticSeoFallback = (route, locale) => {
  const localeSeo = route.seo[locale];
  const serviceLinks = buildLinkList(serviceRouteIds, locale);
  const trustLinks = buildLinkList(trustRouteIds, locale);
  const contactHref = locale === 'pt' ? '/pt-br/#contato' : '/#contato';
  const homeHref = locale === 'pt' ? '/pt-br/' : '/';
  const title = escapeHtml(stripBrandFromTitle(localeSeo.title));
  const description = escapeHtml(localeSeo.description);
  const serviceHeading = locale === 'pt' ? 'Páginas de serviços' : 'Service pages';
  const trustHeading = locale === 'pt' ? 'Confiança e validação' : 'Trust and validation';
  const intro =
    locale === 'pt'
      ? 'Tg Apps constrói e entrega apps mobile, web, CRM, backend, integrações de IA, ferramentas internas e sistemas sob medida.'
      : 'Tg Apps builds and ships mobile apps, web platforms, CRM, backend, AI integrations, internal tools, and custom business systems.';
  const contactLabel = locale === 'pt' ? 'Fale com a Tg Apps' : 'Contact Tg Apps';
  const homeLabel = locale === 'pt' ? 'Página inicial' : 'Home';

  return `<!-- static-seo-fallback:start -->
      <div class="static-seo-fallback" style="font-family:Arial,sans-serif;max-width:1120px;margin:0 auto;padding:48px 24px;line-height:1.55;color:#0f172a">
        <header>
          <a href="${homeHref}">${homeLabel}</a>
          <h1>${title}</h1>
          <p>${description}</p>
          <p>${escapeHtml(intro)}</p>
          <p><a href="${contactHref}">${contactLabel}</a></p>
        </header>
        <nav aria-label="${serviceHeading}">
          <h2>${serviceHeading}</h2>
          <ul>
            ${serviceLinks}
          </ul>
        </nav>
        <nav aria-label="${trustHeading}">
          <h2>${trustHeading}</h2>
          <ul>
            ${trustLinks}
          </ul>
        </nav>
      </div>
    <!-- static-seo-fallback:end -->`;
};

const injectStaticSeoFallback = (html, route, locale) => {
  const fallback = buildStaticSeoFallback(route, locale);
  const replacement = `<div id="root"></div>\n    <noscript>\n    ${fallback}\n    </noscript>`;
  const pattern =
    /<div id="root">(?:\s*<!-- static-seo-fallback:start -->[\s\S]*?<!-- static-seo-fallback:end -->\s*)?<\/div>(?:\s*<noscript>\s*<!-- static-seo-fallback:start -->[\s\S]*?<!-- static-seo-fallback:end -->\s*<\/noscript>)?/i;

  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</body>', `${replacement}\n  </body>`);
};

const replaceMeta = (html, selector, content) => {
  const selectorPattern = escapeRegExp(selector);
  const pattern = new RegExp(`<meta[^>]*${selectorPattern}[^>]*>`, 'i');
  const replacement = `    <meta ${selector} content="${content}" />`;

  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</head>', `${replacement}\n  </head>`);
};

const replaceLink = (html, rel, href, hreflang) => {
  const selector = hreflang
    ? `<link rel="${rel}" hreflang="${hreflang}" href="[^"]*" ?/?>`
    : `<link rel="${rel}" href="[^"]*" ?/?>`;
  const replacement = hreflang
    ? `    <link rel="${rel}" hreflang="${hreflang}" href="${href}" />`
    : `    <link rel="${rel}" href="${href}" />`;
  const pattern = new RegExp(selector, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</head>', `${replacement}\n  </head>`);
};

const ensureMeta = (html, attrName, attrValue, content) => {
  const selector = `${attrName}="${attrValue}"`;
  return replaceMeta(html, selector, content);
};

const writeRouteHtml = (route, locale, routePath) => {
  let html = baseHtml;
  const localeSeo = route.seo[locale];
  const canonicalPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
  const englishPath = buildLocalizedPath('en', route.localizedPaths.en);
  const portuguesePath = buildLocalizedPath('pt', route.localizedPaths.pt);
  const outputPath = getOutputPath(buildLocalizedPath(locale, routePath));

  html = html.replace(/<html lang="[^"]+">/i, `<html lang="${locale === 'pt' ? 'pt-BR' : 'en'}">`);
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${localeSeo.title}</title>`);

  html = ensureMeta(html, 'name', 'description', localeSeo.description);
  html = ensureMeta(html, 'name', 'robots', route.robots);
  html = ensureMeta(html, 'property', 'og:title', localeSeo.title);
  html = ensureMeta(html, 'property', 'og:description', localeSeo.description);
  html = ensureMeta(html, 'property', 'og:type', 'website');
  html = ensureMeta(html, 'property', 'og:url', buildAbsoluteUrl(canonicalPath));
  html = ensureMeta(html, 'property', 'og:locale', locale === 'pt' ? 'pt_BR' : 'en_US');
  html = ensureMeta(html, 'property', 'og:locale:alternate', locale === 'pt' ? 'en_US' : 'pt_BR');
  html = ensureMeta(html, 'property', 'og:image', localeSeo.ogImage);
  html = ensureMeta(html, 'property', 'og:site_name', 'Tg Apps');
  html = ensureMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = ensureMeta(html, 'name', 'twitter:title', localeSeo.title);
  html = ensureMeta(html, 'name', 'twitter:description', localeSeo.description);
  html = ensureMeta(html, 'name', 'twitter:image', localeSeo.ogImage);

  html = replaceLink(html, 'canonical', buildAbsoluteUrl(canonicalPath));
  html = replaceLink(html, 'alternate', buildAbsoluteUrl(englishPath), 'en');
  html = replaceLink(html, 'alternate', buildAbsoluteUrl(portuguesePath), 'pt-br');
  html = replaceLink(html, 'alternate', buildAbsoluteUrl(buildLocalizedPath(defaultLocale, route.localizedPaths[defaultLocale])), 'x-default');
  html = injectStaticSeoFallback(html, route, locale);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
};

for (const route of routes.filter((item) => item.staticHtml)) {
  for (const locale of locales) {
    const localizedVariants = new Set([
      route.localizedPaths[locale],
      ...(route.aliasesByLocale?.[locale] ?? [])
    ]);

    for (const routePath of localizedVariants) {
      writeRouteHtml(route, locale, routePath);
    }
  }
}

const sitemapEntries = [];

for (const route of routes.filter((item) => item.sitemap?.include)) {
  const englishHref = buildAbsoluteUrl(buildLocalizedPath('en', route.localizedPaths.en));
  const portugueseHref = buildAbsoluteUrl(buildLocalizedPath('pt', route.localizedPaths.pt));
  const defaultHref = buildAbsoluteUrl(buildLocalizedPath(defaultLocale, route.localizedPaths[defaultLocale]));

  for (const locale of locales) {
    const localizedPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
    sitemapEntries.push(`  <url>
    <loc>${buildAbsoluteUrl(localizedPath)}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${route.sitemap.changefreq}</changefreq>
    <priority>${route.sitemap.priorities[locale]}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${englishHref}" />
    <xhtml:link rel="alternate" hreflang="pt-br" href="${portugueseHref}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultHref}" />
  </url>`);
  }
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);

console.log(
  `Generated static HTML for ${routes.filter((route) => route.staticHtml).length} route definitions and sitemap entries for ${sitemapEntries.length} localized URLs.`
);
