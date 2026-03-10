import type { Locale } from '../i18n/translations';
import {
  getLandingContent,
  landingSlugsByLocale,
  resolveLandingKeyByRoute
} from '../content/landingPages';

const SITE_URL = 'https://tgapps.dev';

interface SeoConfig {
  title: string;
  description: string;
  robots: string;
  localizedRoutePaths: Record<Locale, string>;
}

const LEGAL_ROUTES = new Set([
  '/my_business_idea_privacy',
  '/privacy_policy',
  '/my_business_idea_delete_account',
  '/account_deletion'
]);

const HOME_SEO: Record<Locale, Omit<SeoConfig, 'robots' | 'localizedRoutePaths'>> = {
  en: {
    title: 'US Small Business App Development | Android, iOS, Pods | TG Apps',
    description:
      'Founder-led Android and iOS app development pod for US small businesses. Zero upfront payment, contract-first delivery, weekly releases, and LLM/RAG integrations.'
  },
  pt: {
    title: 'Desenvolvimento de Apps para PMEs dos EUA | Android, iOS e Pods | TG Apps',
    description:
      'Pod liderado pelo fundador para apps Android e iOS de pequenas empresas dos EUA. Contrato primeiro, zero adiantamento, releases semanais e integracoes LLM/RAG.'
  }
};

const normalizeRoutePath = (routePath: string): string => {
  if (!routePath || routePath === '/') {
    return '/';
  }
  const trimmed = routePath.replace(/\/+$/, '');
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
};

const buildLocalizedPath = (locale: Locale, routePath: string): string => {
  const normalizedRoutePath = normalizeRoutePath(routePath);
  const localePrefix = locale === 'pt' ? '/pt-br' : '';
  if (normalizedRoutePath === '/') {
    return localePrefix ? `${localePrefix}/` : '/';
  }
  return `${localePrefix}${normalizedRoutePath}`;
};

const buildAbsoluteUrl = (path: string): string => {
  if (path === '/') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${path}`;
};

export const getSeoConfigForRoute = (routePath: string, locale: Locale): SeoConfig => {
  const normalizedRoutePath = normalizeRoutePath(routePath);
  const landingKey = resolveLandingKeyByRoute(normalizedRoutePath);

  if (landingKey) {
    const localizedRoutePaths = {
      en: landingSlugsByLocale.en[landingKey],
      pt: landingSlugsByLocale.pt[landingKey]
    };
    const content = getLandingContent(locale, landingKey);
    return {
      title: `${content.title} | TG Apps`,
      description: content.intro,
      robots: 'index,follow',
      localizedRoutePaths
    };
  }

  if (LEGAL_ROUTES.has(normalizedRoutePath)) {
    return {
      title: locale === 'pt' ? 'Documento legal | TG Apps' : 'Legal document | TG Apps',
      description:
        locale === 'pt'
          ? 'Documento legal hospedado pela TG Apps para compliance de aplicativo.'
          : 'Legal document hosted by TG Apps for app compliance.',
      robots: 'noindex,follow',
      localizedRoutePaths: { en: normalizedRoutePath, pt: normalizedRoutePath }
    };
  }

  return {
    title: HOME_SEO[locale].title,
    description: HOME_SEO[locale].description,
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

  upsertLinkTag('canonical', canonicalUrl);
  upsertLinkTag('alternate', englishUrl, 'en');
  upsertLinkTag('alternate', portugueseUrl, 'pt-br');
  upsertLinkTag('alternate', englishUrl, 'x-default');
};

