import { useState, useEffect } from 'react';
import { Menu, X, Check } from 'lucide-react';
import type { Locale } from '../i18n/translations';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { trackCtaClick, trackLanguageSwitch, trackNavigationClick } from '../utils/analytics';

interface HeaderProps {
  variant?: 'home' | 'landing';
  ctaHref?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const Header = ({ variant = 'home', ctaHref, ctaLabel, onCtaClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();
  const appsHref = language === 'pt' ? '/pt-br/apps' : '/apps';
  const homeHref = language === 'pt' ? '/pt-br/' : '/';
  const isLanding = variant === 'landing';
  const isSolid = isLanding || isScrolled;
  const resolvedCtaLabel = ctaLabel ?? t.header.contactCta;

  useEffect(() => {
    if (isLanding) {
      setIsScrolled(true);
      return undefined;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLanding]);

  const scrollToSection = (sectionId: string, source?: string, label?: string) => {
    if (source && label) {
      trackNavigationClick(source, label, `#${sectionId}`);
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageClick = (nextLanguage: Locale) => {
    trackLanguageSwitch(language, nextLanguage, `header_${variant}`);
    setLanguage(nextLanguage);
  };

  const trackHeaderCta = (source: string) => {
    trackCtaClick(source, resolvedCtaLabel, {
      destination: ctaHref ?? `#${t.header.contactId}`,
      language,
      surface: variant
    });
  };

  const handleHeaderCta = (source: string) => {
    trackHeaderCta(source);

    if (onCtaClick) {
      onCtaClick();
      setIsMenuOpen(false);
      return;
    }

    scrollToSection(t.header.contactId);
  };

  const languageOptions: { code: Locale; flag: string; label: string }[] = [
    { code: 'en', flag: 'EN', label: 'English' },
    { code: 'pt', flag: 'PT', label: 'Português' }
  ];

  const renderLanguageSwitcher = (variant: 'desktop' | 'mobile') => (
    <div
      className={`flex items-center gap-2 ${
        variant === 'desktop'
          ? isSolid
            ? 'bg-gray-100 border border-gray-200'
            : 'bg-white/10 border border-white/20 backdrop-blur-sm'
          : 'bg-gray-100 border border-gray-200'
      } rounded-full px-2 py-1`}
    >
      {languageOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => handleLanguageClick(option.code)}
          className={`relative flex h-8 w-8 items-center justify-center rounded-full text-lg transition-colors ${
            language === option.code
              ? 'bg-white shadow-md'
              : variant === 'desktop' && !isScrolled
                ? 'text-white/80 hover:bg-white/10'
                : 'text-gray-600 hover:bg-white'
          }`}
          aria-label={option.label}
        >
          <span className="text-xs font-bold">{option.flag}</span>
          {language === option.code && (
            <span className="absolute -bottom-1 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white">
              <Check className="h-3 w-3" />
            </span>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSolid ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href={homeHref} className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Tg Apps logo"
              className="h-11 w-11 rounded-xl object-contain shadow-lg shadow-blue-500/30 bg-black/40 p-1"
            />
            <span className={`text-xl font-bold transition-colors ${
              isSolid ? 'text-gray-900' : 'text-white'
            }`}>
              Tg Apps
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isLanding &&
              t.header.navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, 'header_desktop_nav', item.label)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isSolid ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            {!isLanding && (
              <a
                href={appsHref}
                onClick={() => trackNavigationClick('header_desktop_nav', 'Apps', appsHref)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isSolid ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                Apps
              </a>
            )}
            {isLanding && (
              <a
                href={homeHref}
                onClick={() => trackNavigationClick('header_desktop_nav', language === 'pt' ? 'Site principal' : 'Main site', homeHref)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-500"
              >
                {language === 'pt' ? 'Site principal' : 'Main site'}
              </a>
            )}
            {renderLanguageSwitcher('desktop')}
            {isLanding && onCtaClick ? (
              <button
                type="button"
                onClick={() => handleHeaderCta('header_desktop_cta')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {resolvedCtaLabel}
              </button>
            ) : isLanding && ctaHref ? (
              <a
                href={ctaHref}
                onClick={() => trackHeaderCta('header_desktop_cta')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {resolvedCtaLabel}
              </a>
            ) : (
              <button
                onClick={() => handleHeaderCta('header_desktop_cta')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {resolvedCtaLabel}
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isSolid ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-xl rounded-b-2xl border-t">
            <nav className="px-4 py-6 space-y-4">
              {isLanding ? (
                <a
                  href={homeHref}
                  onClick={() => trackNavigationClick('header_mobile_nav', language === 'pt' ? 'Site principal' : 'Main site', homeHref)}
                  className="block w-full text-left text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors"
                >
                  {language === 'pt' ? 'Site principal' : 'Main site'}
                </a>
              ) : (
                <>
                  {t.header.navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id, 'header_mobile_nav', item.label)}
                      className="block w-full text-left text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <a
                    href={appsHref}
                    onClick={() => trackNavigationClick('header_mobile_nav', 'Apps', appsHref)}
                    className="block w-full text-left text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors"
                  >
                    Apps
                  </a>
                </>
              )}
              <div className="pt-2">{renderLanguageSwitcher('mobile')}</div>
              {isLanding && onCtaClick ? (
                <button
                  type="button"
                  onClick={() => {
                    handleHeaderCta('header_mobile_cta');
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  {resolvedCtaLabel}
                </button>
              ) : isLanding && ctaHref ? (
                <a
                  href={ctaHref}
                  onClick={() => trackHeaderCta('header_mobile_cta')}
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg transition-all duration-300"
                >
                  {resolvedCtaLabel}
                </a>
              ) : (
                <button
                  onClick={() => handleHeaderCta('header_mobile_cta')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  {resolvedCtaLabel}
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
