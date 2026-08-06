import type { Locale } from '../i18n/translations';
import rawManifest from './publicRoutes.json';

export type PublicRoutePage = 'home' | 'landing' | 'appsDirectory' | 'appDetail';

interface PublicRouteSeo {
  title: string;
  description: string;
  ogImage: string;
}

interface PublicRouteSitemap {
  include: boolean;
  changefreq: string;
  priorities: Record<Locale, number>;
}

export interface PublicRoute {
  id: string;
  page: PublicRoutePage;
  landingKey?: string;
  appKey?: string;
  localizedPaths: Record<Locale, string>;
  aliasesByLocale?: Partial<Record<Locale, string[]>>;
  seo: Record<Locale, PublicRouteSeo>;
  robots: string;
  staticHtml: boolean;
  sitemap: PublicRouteSitemap;
}

interface PublicRoutesManifest {
  siteUrl: string;
  defaultLocale: Locale;
  localePrefixes: Record<Locale, string>;
  routes: PublicRoute[];
}

const manifest = rawManifest as PublicRoutesManifest;

export const SITE_URL = manifest.siteUrl;
export const DEFAULT_PUBLIC_LOCALE = manifest.defaultLocale;
export const LOCALE_PREFIXES = manifest.localePrefixes;
export const publicRoutes = manifest.routes;

export const normalizeRoutePath = (routePath: string): string => {
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

const hasFileExtension = (pathname: string): boolean => /\/[^/]+\.[^/]+$/.test(pathname);

export const addTrailingSlashToPagePath = (pathname: string): string => {
  if (!pathname || pathname === '/' || pathname.endsWith('/') || hasFileExtension(pathname)) {
    return pathname || '/';
  }

  return `${pathname}/`;
};

export const splitLocaleAndRoute = (pathname: string): { locale: Locale; routePath: string } => {
  const normalizedPath = normalizeRoutePath(pathname);
  const segments = normalizedPath.split('/').filter(Boolean);
  if (segments.length === 0) {
    return { locale: DEFAULT_PUBLIC_LOCALE, routePath: '/' };
  }

  const localizedEntry = (Object.entries(LOCALE_PREFIXES) as [Locale, string][])
    .find(([, segment]) => segment && segment === segments[0]);

  if (!localizedEntry) {
    return { locale: DEFAULT_PUBLIC_LOCALE, routePath: `/${segments.join('/')}` };
  }

  const routeSegments = segments.slice(1);
  return {
    locale: localizedEntry[0],
    routePath: routeSegments.length > 0 ? `/${routeSegments.join('/')}` : '/'
  };
};

export const buildLocalizedPath = (locale: Locale, routePath: string): string => {
  const normalizedRoutePath = normalizeRoutePath(routePath);
  const localePrefix = LOCALE_PREFIXES[locale];

  if (!localePrefix) {
    return addTrailingSlashToPagePath(normalizedRoutePath);
  }

  if (normalizedRoutePath === '/') {
    return `/${localePrefix}/`;
  }

  return addTrailingSlashToPagePath(`/${localePrefix}${normalizedRoutePath}`);
};

export const buildAbsoluteUrl = (path: string): string => {
  if (path === '/') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${addTrailingSlashToPagePath(path)}`;
};

export const getPublicRouteById = (routeId: string): PublicRoute | undefined =>
  publicRoutes.find((route) => route.id === routeId);

const routeLookup = new Map<string, PublicRoute>();

for (const route of publicRoutes) {
  for (const localizedPath of Object.values(route.localizedPaths)) {
    routeLookup.set(normalizeRoutePath(localizedPath), route);
  }

  for (const aliases of Object.values(route.aliasesByLocale ?? {})) {
    for (const aliasPath of aliases ?? []) {
      routeLookup.set(normalizeRoutePath(aliasPath), route);
    }
  }
}

export const resolvePublicRoute = (routePath: string): PublicRoute | null =>
  routeLookup.get(normalizeRoutePath(routePath)) ?? null;

export const getStaticHtmlRoutes = (): PublicRoute[] =>
  publicRoutes.filter((route) => route.staticHtml);

export const getSitemapRoutes = (): PublicRoute[] =>
  publicRoutes.filter((route) => route.sitemap.include);
