import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale, TranslationSchema } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface LanguageContextValue {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const DEFAULT_LOCALE: Locale = 'en';
const LOCALE_SEGMENTS: Record<Locale, string> = {
  en: '',
  pt: 'pt-br'
};

const normalizePathname = (pathname: string) => {
  if (!pathname || pathname === '/') {
    return '/';
  }
  const [pathOnly] = pathname.split(/[?#]/);
  const trimmed = pathOnly.replace(/\/+$/, '');
  if (!trimmed) {
    return '/';
  }
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
};

const splitLocaleAndRoute = (pathname: string): { locale: Locale; routePath: string } => {
  const normalized = normalizePathname(pathname);
  const segments = normalized.split('/').filter(Boolean);
  if (segments.length === 0) {
    return { locale: DEFAULT_LOCALE, routePath: '/' };
  }

  const localizedEntry = (Object.entries(LOCALE_SEGMENTS) as [Locale, string][])
    .find(([, segment]) => segment && segment === segments[0]);

  if (!localizedEntry) {
    return { locale: DEFAULT_LOCALE, routePath: `/${segments.join('/')}` };
  }

  const routeSegments = segments.slice(1);
  return {
    locale: localizedEntry[0],
    routePath: routeSegments.length > 0 ? `/${routeSegments.join('/')}` : '/'
  };
};

const detectLocaleFromPath = (): Locale => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }
  return splitLocaleAndRoute(window.location.pathname).locale;
};

const buildPathForLocale = (locale: Locale, routePath: string) => {
  const normalizedRoutePath = normalizePathname(routePath);
  const segment = LOCALE_SEGMENTS[locale];
  if (!segment) {
    return normalizedRoutePath;
  }
  return normalizedRoutePath === '/' ? `/${segment}` : `/${segment}${normalizedRoutePath}`;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Locale>(() => detectLocaleFromPath());

  const updatePathForLocale = useCallback((locale: Locale) => {
    if (typeof window === 'undefined') {
      return;
    }
    const routePath = splitLocaleAndRoute(window.location.pathname).routePath;
    const desiredPath = buildPathForLocale(locale, routePath);
    const currentPath = normalizePathname(window.location.pathname);
    if (currentPath !== desiredPath) {
      window.history.replaceState({}, '', desiredPath);
    }
  }, []);

  useEffect(() => {
    updatePathForLocale(language);
  }, [language, updatePathForLocale]);

  const setLanguage = useCallback(
    (locale: Locale) => {
      setLanguageState(locale);
    },
    []
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};

export const useTranslations = () => {
  const { t } = useLanguage();
  return t;
};
