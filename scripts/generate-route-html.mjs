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
  html = ensureMeta(html, 'property', 'og:site_name', 'TG Apps');
  html = ensureMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = ensureMeta(html, 'name', 'twitter:title', localeSeo.title);
  html = ensureMeta(html, 'name', 'twitter:description', localeSeo.description);
  html = ensureMeta(html, 'name', 'twitter:image', localeSeo.ogImage);

  html = replaceLink(html, 'canonical', buildAbsoluteUrl(canonicalPath));
  html = replaceLink(html, 'alternate', buildAbsoluteUrl(englishPath), 'en');
  html = replaceLink(html, 'alternate', buildAbsoluteUrl(portuguesePath), 'pt-br');
  html = replaceLink(html, 'alternate', buildAbsoluteUrl(buildLocalizedPath(defaultLocale, route.localizedPaths[defaultLocale])), 'x-default');

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
