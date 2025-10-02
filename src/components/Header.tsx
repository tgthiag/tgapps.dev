import { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Check } from 'lucide-react';
import type { Locale } from '../i18n/translations';
import { useLanguage, useTranslations } from '../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const languageOptions: { code: Locale; flag: string; label: string }[] = [
    { code: 'en', flag: 'EN', label: 'English' },
    { code: 'pt', flag: 'PT', label: 'Português' }
  ];

  const renderLanguageSwitcher = (variant: 'desktop' | 'mobile') => (
    <div
      className={`flex items-center gap-2 ${
        variant === 'desktop'
          ? isScrolled
            ? 'bg-gray-100 border border-gray-200'
            : 'bg-white/10 border border-white/20 backdrop-blur-sm'
          : 'bg-gray-100 border border-gray-200'
      } rounded-full px-2 py-1`}
    >
      {languageOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLanguage(option.code)}
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
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Smartphone className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              TG Apps
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {t.header.navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
            {renderLanguageSwitcher('desktop')}
            <button
              onClick={() => scrollToSection(t.header.contactId)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {t.header.contactCta}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-xl rounded-b-2xl border-t">
            <nav className="px-4 py-6 space-y-4">
              {t.header.navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">{renderLanguageSwitcher('mobile')}</div>
              <button
                onClick={() => scrollToSection(t.header.contactId)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                {t.header.contactCta}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;