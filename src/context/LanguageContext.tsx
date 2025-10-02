import React, { createContext, useContext, useMemo, useState } from 'react';
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

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Locale>('en');

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
