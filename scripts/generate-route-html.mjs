import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build as esbuildBuild } from 'esbuild';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const indexPath = path.join(distDir, 'index.html');
const manifestPath = path.join(root, 'src', 'content', 'publicRoutes.json');
const landingContentEntryPath = path.join(root, 'src', 'content', 'landingPages.ts');
const landingContentBundlePath = path.join(distDir, '.landing-content.generated.mjs');

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

const loadLandingContentModule = async () => {
  await esbuildBuild({
    entryPoints: [landingContentEntryPath],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: landingContentBundlePath,
    logLevel: 'silent'
  });

  try {
    return await import(`${pathToFileURL(landingContentBundlePath).href}?v=${Date.now()}`);
  } finally {
    fs.rmSync(landingContentBundlePath, { force: true });
  }
};

const { getLandingContent } = await loadLandingContentModule();

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

const renderList = (items, className = '') => {
  if (!items?.length) {
    return '';
  }

  const classAttribute = className ? ` class="${escapeHtml(className)}"` : '';

  return `<ul${classAttribute}>
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('\n          ')}
        </ul>`;
};

const renderLandingSection = (title, items, description = '') => {
  if (!title || !items?.length) {
    return '';
  }

  return `<section>
          <h2>${escapeHtml(title)}</h2>
          ${description ? `<p>${escapeHtml(description)}</p>` : ''}
          ${renderList(items)}
        </section>`;
};

const renderLandingContentSections = (sections) => {
  if (!sections?.length) {
    return '';
  }

  return sections
    .map((section) => renderLandingSection(section.title, section.items, section.description))
    .filter(Boolean)
    .join('\n');
};

const renderLandingPricing = (pricing) => {
  if (!pricing) {
    return '';
  }

  return `<section>
          <p>${escapeHtml(pricing.label)}</p>
          <h2>${escapeHtml(pricing.title)}</h2>
          <p>${escapeHtml(pricing.description)}</p>
          ${renderList(pricing.highlights)}
          <p>${escapeHtml(pricing.note)}</p>
        </section>`;
};

const renderLandingFaq = (faq, locale) => {
  if (!faq?.length) {
    return '';
  }

  const heading = locale === 'pt' ? 'Perguntas frequentes' : 'Frequently asked questions';

  return `<section>
          <h2>${heading}</h2>
          ${faq
            .map(
              (item) => `<article>
            <h3>${escapeHtml(item.question)}</h3>
            <p>${escapeHtml(item.answer)}</p>
          </article>`
            )
            .join('\n          ')}
        </section>`;
};

const renderLandingFinalNote = (finalNote) => {
  if (!finalNote) {
    return '';
  }

  return `<section>
          <h2>${escapeHtml(finalNote.title)}</h2>
          <p>${escapeHtml(finalNote.description)}</p>
        </section>`;
};

const buildLandingStaticSeoFallback = (route, locale) => {
  const content = getLandingContent(locale, route.landingKey);
  const serviceLinks = buildLinkList(serviceRouteIds, locale);
  const trustLinks = buildLinkList(trustRouteIds, locale);
  const homeHref = locale === 'pt' ? '/pt-br/' : '/';
  const homeLabel = locale === 'pt' ? 'Página inicial' : 'Home';
  const serviceHeading = locale === 'pt' ? 'Páginas de serviços' : 'Service pages';
  const trustHeading = locale === 'pt' ? 'Confiança e validação' : 'Trust and validation';
  const responseNote = locale === 'pt' ? 'Resposta em até 1 dia útil.' : 'Reply within one business day.';
  const ctaHref = `mailto:support@tgapps.dev?subject=${encodeURIComponent(content.ctaSubject)}`;

  return `<!-- static-seo-fallback:start -->
      <main class="static-seo-fallback" style="font-family:Arial,sans-serif;max-width:1120px;margin:0 auto;padding:48px 24px;line-height:1.58;color:#0f172a;background:#ffffff">
        <article>
          <header>
            <a href="${homeHref}">${homeLabel}</a>
            <p>${escapeHtml(content.badge)}</p>
            <h1>${escapeHtml(content.title)}</h1>
            <p>${escapeHtml(content.intro)}</p>
            ${renderList(content.heroHighlights)}
            <p><a href="${escapeHtml(ctaHref)}">${escapeHtml(content.ctaLabel)}</a> ${escapeHtml(responseNote)}</p>
          </header>
          ${renderLandingSection(content.proofHeading, content.proofItems)}
          ${renderLandingSection(content.deliverablesHeading, content.deliverables)}
          ${renderLandingSection(content.fitHeading, content.fitItems)}
          ${renderLandingContentSections(content.sections)}
          ${renderLandingFaq(content.faq, locale)}
          ${renderLandingPricing(content.pricing)}
          ${renderLandingFinalNote(content.finalNote)}
        </article>
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
      </main>
    <!-- static-seo-fallback:end -->`;
};

const buildGenericStaticSeoFallback = (route, locale) => {
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

const buildStaticSeoFallback = (route, locale) => {
  if (route.page === 'landing' && route.landingKey) {
    return buildLandingStaticSeoFallback(route, locale);
  }

  return buildGenericStaticSeoFallback(route, locale);
};

const injectStaticSeoFallback = (html, route, locale) => {
  const fallback = buildStaticSeoFallback(route, locale);
  const replacement =
    route.page === 'landing' && route.landingKey
      ? `<div id="root">\n    ${fallback}\n    </div>`
      : `<div id="root"></div>\n    <noscript>\n    ${fallback}\n    </noscript>`;
  const pattern =
    /<div id="root">(?:\s*<!-- static-seo-fallback:start -->[\s\S]*?<!-- static-seo-fallback:end -->\s*)?<\/div>(?:\s*<noscript>\s*<!-- static-seo-fallback:start -->[\s\S]*?<!-- static-seo-fallback:end -->\s*<\/noscript>)?/i;

  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</body>', `${replacement}\n  </body>`);
};

const buildOrganizationNode = () => ({
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#organization`,
  name: 'Tg Apps',
  legalName: 'TG APPLICATIONS DESENVOLVIMENTO LTDA',
  taxID: 'BR CNPJ 56.918.851/0001-72',
  duns: '651029828',
  url: siteUrl,
  email: 'support@tgapps.dev',
  telephone: '+55 11 97971-7703'
});

const buildRouteStructuredData = (route, locale) => {
  const localeSeo = route.seo[locale];
  const canonicalPath = buildLocalizedPath(locale, route.localizedPaths[locale]);
  const canonicalUrl = buildAbsoluteUrl(canonicalPath);
  const pageName = stripBrandFromTitle(localeSeo.title);
  const inLanguage = locale === 'pt' ? 'pt-BR' : 'en';
  const organizationNode = buildOrganizationNode();
  const graph = [
    organizationNode,
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageName,
      description: localeSeo.description,
      inLanguage,
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Tg Apps',
        url: siteUrl
      },
      publisher: {
        '@id': organizationNode['@id']
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'pt' ? 'Início' : 'Home',
          item: `${siteUrl}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: pageName,
          item: canonicalUrl
        }
      ]
    }
  ];

  const content = route.page === 'landing' && route.landingKey ? getLandingContent(locale, route.landingKey) : null;

  if (content && route.page === 'landing') {
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: content.title,
      description: content.intro,
      serviceType: content.badge,
      provider: {
        '@id': organizationNode['@id']
      },
      areaServed: ['United States', 'Brazil', 'Global'],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 1500,
          priceCurrency: 'USD',
          unitText: 'month'
        }
      }
    });
  }

  if (content?.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: content.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
};

const injectRouteStructuredData = (html, route, locale) => {
  const json = JSON.stringify(buildRouteStructuredData(route, locale), null, 2).replace(/</g, '\\u003c');
  const script = `    <script type="application/ld+json" data-static-route-schema="true">\n${json}\n    </script>`;
  const pattern = /\s*<script type="application\/ld\+json" data-static-route-schema="true">[\s\S]*?<\/script>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, `\n${script}`);
  }

  return html.replace('</head>', `${script}\n  </head>`);
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
  html = injectRouteStructuredData(html, route, locale);
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
