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

const detectLocaleFromPath = (): Locale => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }
  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0] ?? '';
  const entry = (Object.entries(LOCALE_SEGMENTS) as [Locale, string][]).find(([, segment]) => segment === firstSegment);
  return entry?.[0] ?? DEFAULT_LOCALE;
};

const buildPathForLocale = (locale: Locale) => {
  const segment = LOCALE_SEGMENTS[locale];
  return segment ? `/${segment}/` : '/';
};

const normalizePathname = (pathname: string) => {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Locale>(() => detectLocaleFromPath());

  const updatePathForLocale = useCallback((locale: Locale) => {
    if (typeof window === 'undefined') {
      return;
    }
    const desiredPath = buildPathForLocale(locale);
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
