import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale, TranslationSchema } from '../i18n/translations';
import { translations } from '../i18n/translations';
import {
  buildLocalizedPath,
  DEFAULT_PUBLIC_LOCALE,
  resolvePublicRoute,
  splitLocaleAndRoute
} from '../content/publicRoutes';

interface LanguageContextValue {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const detectLocaleFromPath = (): Locale => {
  if (typeof window === 'undefined') {
    return DEFAULT_PUBLIC_LOCALE;
  }
  return splitLocaleAndRoute(window.location.pathname).locale;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Locale>(() => detectLocaleFromPath());

  const updatePathForLocale = useCallback((locale: Locale) => {
    if (typeof window === 'undefined') {
      return;
    }
    const routePath = splitLocaleAndRoute(window.location.pathname).routePath;
    const publicRoute = resolvePublicRoute(routePath);
    const localizedRoutePath = publicRoute?.localizedPaths[locale] ?? routePath;
    const desiredPath = buildLocalizedPath(locale, localizedRoutePath);
    const currentPath = window.location.pathname;
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
    [language, setLanguage]
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
