import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  throw new Error(`dist/index.html not found at ${indexPath}`);
}

const siteUrl = 'https://tgapps.dev';
const baseHtml = fs.readFileSync(indexPath, 'utf8');

const routes = [
  {
    outDir: path.join(distDir, 'apps', 'anylanguage'),
    lang: 'en',
    title: 'AnyLanguage Conversations | Voice-first language practice app',
    description:
      'See the AnyLanguage Conversations app: natural voice practice, Phone Call mode, vocabulary flows, and polished mobile screens across 50+ languages.',
    canonical: `${siteUrl}/apps/anylanguage/`,
    alternates: {
      en: `${siteUrl}/apps/anylanguage/`,
      pt: `${siteUrl}/pt-br/apps/anylanguage/`,
      default: `${siteUrl}/apps/anylanguage/`
    },
    ogLocale: 'en_US',
    ogAlternate: 'pt_BR',
    image: `${siteUrl}/app-media/anylanguage/screen-home-en.png`
  },
  {
    outDir: path.join(distDir, 'pt-br', 'apps', 'anylanguage'),
    lang: 'pt-BR',
    title: 'AnyLanguage Conversations | App de prática de idiomas com foco em voz',
    description:
      'Veja o AnyLanguage Conversations: prática natural de fala, Phone Call mode, vocabulário e telas mobile refinadas em mais de 50 idiomas.',
    canonical: `${siteUrl}/pt-br/apps/anylanguage/`,
    alternates: {
      en: `${siteUrl}/apps/anylanguage/`,
      pt: `${siteUrl}/pt-br/apps/anylanguage/`,
      default: `${siteUrl}/apps/anylanguage/`
    },
    ogLocale: 'pt_BR',
    ogAlternate: 'en_US',
    image: `${siteUrl}/app-media/anylanguage/screen-home.png`
  }
];

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

for (const route of routes) {
  let html = baseHtml;

  html = html.replace(/<html lang="[^"]+">/i, `<html lang="${route.lang}">`);
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${route.title}</title>`);

  html = ensureMeta(html, 'name', 'description', route.description);
  html = ensureMeta(html, 'name', 'robots', 'index,follow');
  html = ensureMeta(html, 'property', 'og:title', route.title);
  html = ensureMeta(html, 'property', 'og:description', route.description);
  html = ensureMeta(html, 'property', 'og:type', 'website');
  html = ensureMeta(html, 'property', 'og:url', route.canonical);
  html = ensureMeta(html, 'property', 'og:locale', route.ogLocale);
  html = ensureMeta(html, 'property', 'og:locale:alternate', route.ogAlternate);
  html = ensureMeta(html, 'property', 'og:image', route.image);
  html = ensureMeta(html, 'property', 'og:site_name', 'TG Apps');
  html = ensureMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = ensureMeta(html, 'name', 'twitter:title', route.title);
  html = ensureMeta(html, 'name', 'twitter:description', route.description);
  html = ensureMeta(html, 'name', 'twitter:image', route.image);

  html = replaceLink(html, 'canonical', route.canonical);
  html = replaceLink(html, 'alternate', route.alternates.en, 'en');
  html = replaceLink(html, 'alternate', route.alternates.pt, 'pt-br');
  html = replaceLink(html, 'alternate', route.alternates.default, 'x-default');

  fs.mkdirSync(route.outDir, { recursive: true });
  fs.writeFileSync(path.join(route.outDir, 'index.html'), html);
}

console.log(`Generated static route HTML for ${routes.length} routes.`);
