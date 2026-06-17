import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { landingSlugsByLocale } from '../content/landingPages';
import type { LandingPageKey } from '../content/landingPages';
import { buildLocalizedPath } from '../content/publicRoutes';
import { trackLeadContact } from '../utils/analytics';

interface FooterProps {
  variant?: 'home' | 'landing';
  ctaHref?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const Footer = ({ variant = 'home', ctaHref, ctaLabel, onCtaClick }: FooterProps) => {
  const { language } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();
  const t = useTranslations();
  const isLanding = variant === 'landing';
  const homeHref = language === 'pt' ? '/pt-br/' : '/';
  const navigationLinks = t.footer.navigation ?? [];
  const servicesList = t.footer.services ?? [];
  const hasNavigation = navigationLinks.length > 0;
  const hasServices = servicesList.length > 0 && Boolean(t.footer.servicesHeading);
  const contactInfo = t.footer.contact;
  const copyright = t.footer.bottom.copyright.replace('{year}', currentYear.toString());
  const resolvedCtaLabel = ctaLabel ?? t.footer.cta;
  const localizedLandingHref = (landingPath: string) => buildLocalizedPath(language, landingPath);
  const serviceLinkKeys: LandingPageKey[] = [
    'appRescueLaunch',
    'bornGlobalApps',
    'customCrmInternalTools',
    'customSoftwareSmbs',
    'androidIosSmb',
    'backendApiIntegrations',
    'llmRagIntegrations',
    'appRescueLaunch'
  ];
  const serviceLinks = servicesList.map((service, index) => {
    const landingKey = serviceLinkKeys[index] ?? 'customSoftwareSmbs';
    return {
      label: service,
      href: localizedLandingHref(landingSlugsByLocale[language][landingKey])
    };
  });
  const trustLinks = [
    {
      label: language === 'pt' ? 'Por que Tg Apps' : 'Why Tg Apps',
      href: localizedLandingHref(landingSlugsByLocale[language].whyTgApps)
    },
    {
      label: language === 'pt' ? 'Como nos encaixamos no seu time' : 'How we fit your team',
      href: localizedLandingHref(landingSlugsByLocale[language].howWeFitYourTeam)
    },
    {
      label: language === 'pt' ? 'Garantia da primeira entrega' : 'First Milestone Guarantee',
      href: localizedLandingHref(landingSlugsByLocale[language].firstMilestoneGuarantee)
    },
    {
      label: language === 'pt' ? 'Perfil da empresa' : 'Company profile',
      href: localizedLandingHref(landingSlugsByLocale[language].companyProfile)
    },
    {
      label: language === 'pt' ? 'Due diligence' : 'Due diligence',
      href: localizedLandingHref(landingSlugsByLocale[language].dueDiligence)
    },
    {
      label: language === 'pt' ? 'LinkedIn do fundador' : 'Founder LinkedIn',
      href: 'https://www.linkedin.com/in/tgthiag/'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href={homeHref} className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Tg Apps" className="h-11 w-11 rounded-xl object-contain shadow-lg shadow-blue-500/30 bg-black/40 p-1" />
              <span className="text-xl font-bold">Tg Apps</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">{t.footer.description}</p>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                {language === 'pt' ? 'Confiança' : 'Trust'}
              </p>
              {trustLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="block text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {hasNavigation && (
            <div>
              <h3 className="text-lg font-semibold mb-6">{t.footer.navigationHeading}</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    {isLanding ? (
                      <a
                        href={`${homeHref}#${link.id}`}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Services */}
          {hasServices && (
            <div>
              <h3 className="text-lg font-semibold mb-6">{t.footer.servicesHeading}</h3>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Info */}
          {contactInfo && (
            <div>
              <h3 className="text-lg font-semibold mb-6">{t.footer.contactHeading}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a
                    href={`mailto:${contactInfo.emailLabel}`}
                    onClick={() => trackLeadContact('email', 'footer_email')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {contactInfo.emailLabel}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <a href={`tel:${contactInfo.phoneLabel}`} className="text-gray-400 hover:text-white transition-colors">
                    {contactInfo.phoneLabel}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400">{contactInfo.location}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                {isLanding && onCtaClick ? (
                  <button
                    type="button"
                    onClick={onCtaClick}
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {resolvedCtaLabel}
                  </button>
                ) : isLanding ? (
                  <a
                    href={ctaHref ?? `${homeHref}#contato`}
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {resolvedCtaLabel}
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToSection('contato')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {resolvedCtaLabel}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">{copyright}</div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t.footer.bottom.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t.footer.bottom.terms}
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
