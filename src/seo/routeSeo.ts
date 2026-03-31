import type { Locale } from '../i18n/translations';
import {
  buildAbsoluteUrl,
  buildLocalizedPath,
  resolvePublicRoute
} from '../content/publicRoutes';

interface SeoConfig {
  title: string;
  description: string;
  image: string;
  robots: string;
  localizedRoutePaths: Record<Locale, string>;
}

const LEGAL_ROUTES = new Set([
  '/my_business_idea_privacy',
  '/privacy_policy',
  '/my_business_idea_delete_account',
  '/account_deletion'
]);

export const getSeoConfigForRoute = (routePath: string, locale: Locale): SeoConfig => {
  const publicRoute = resolvePublicRoute(routePath);

  if (publicRoute) {
    return {
      title: publicRoute.seo[locale].title,
      description: publicRoute.seo[locale].description,
      image: publicRoute.seo[locale].ogImage,
      robots: publicRoute.robots,
      localizedRoutePaths: publicRoute.localizedPaths
    };
  }

  if (LEGAL_ROUTES.has(routePath)) {
    return {
      title: locale === 'pt' ? 'Documento legal | TG Apps' : 'Legal document | TG Apps',
      description:
        locale === 'pt'
          ? 'Documento legal hospedado pela TG Apps para compliance de aplicativo.'
          : 'Legal document hosted by TG Apps for app compliance.',
      image: 'https://tgapps.dev/og-home.png',
      robots: 'noindex,follow',
      localizedRoutePaths: { en: routePath, pt: routePath }
    };
  }

  return {
    title:
      locale === 'pt'
        ? 'Desenvolvimento Global de Apps | Android, iOS e Pods | TG Apps'
        : 'US Small Business App Development | Android, iOS, Pods | TG Apps',
    description:
      locale === 'pt'
        ? 'Startup global liderada pelo fundador para apps Android e iOS, produtos born global, contrato primeiro, zero adiantamento, releases semanais e integrações LLM.'
        : 'Founder-led Android and iOS app development pod for US small businesses. Zero upfront payment, contract-first delivery, weekly releases, and LLM integrations.',
    image: 'https://tgapps.dev/og-home.png',
    robots: 'index,follow',
    localizedRoutePaths: { en: '/', pt: '/' }
  };
};

const upsertMetaTag = (selector: string, attrName: 'name' | 'property', attrValue: string, content: string): void => {
  let tag = document.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertLinkTag = (rel: string, href: string, hreflang?: string): void => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let tag = document.querySelector<HTMLLinkElement>(selector);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    if (hreflang) {
      tag.setAttribute('hreflang', hreflang);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

export const applyRouteSeo = (routePath: string, locale: Locale): void => {
  const config = getSeoConfigForRoute(routePath, locale);
  const canonicalPath = buildLocalizedPath(locale, config.localizedRoutePaths[locale]);
  const englishPath = buildLocalizedPath('en', config.localizedRoutePaths.en);
  const portuguesePath = buildLocalizedPath('pt', config.localizedRoutePaths.pt);
  const canonicalUrl = buildAbsoluteUrl(canonicalPath);
  const englishUrl = buildAbsoluteUrl(englishPath);
  const portugueseUrl = buildAbsoluteUrl(portuguesePath);

  document.title = config.title;
  document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';

  upsertMetaTag('meta[name="description"]', 'name', 'description', config.description);
  upsertMetaTag('meta[name="robots"]', 'name', 'robots', config.robots);
  upsertMetaTag('meta[property="og:title"]', 'property', 'og:title', config.title);
  upsertMetaTag('meta[property="og:description"]', 'property', 'og:description', config.description);
  upsertMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  upsertMetaTag('meta[property="og:image"]', 'property', 'og:image', config.image);
  upsertMetaTag(
    'meta[property="og:locale"]',
    'property',
    'og:locale',
    locale === 'pt' ? 'pt_BR' : 'en_US'
  );
  upsertMetaTag(
    'meta[property="og:locale:alternate"]',
    'property',
    'og:locale:alternate',
    locale === 'pt' ? 'en_US' : 'pt_BR'
  );
  upsertMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', config.title);
  upsertMetaTag(
    'meta[name="twitter:description"]',
    'name',
    'twitter:description',
    config.description
  );
  upsertMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', config.image);

  upsertLinkTag('canonical', canonicalUrl);
  upsertLinkTag('alternate', englishUrl, 'en');
  upsertLinkTag('alternate', portugueseUrl, 'pt-br');
  upsertLinkTag('alternate', englishUrl, 'x-default');
};
