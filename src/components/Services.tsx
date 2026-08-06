import { Smartphone, Cpu, Cable, ArrowRight, Zap, Globe2 } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { landingSlugsByLocale } from '../content/landingPages';
import { trackCtaClick } from '../utils/analytics';

const Services = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const serviceLandingHrefs: (string | undefined)[] = [
    landingSlugsByLocale[language].androidIosSmb,
    landingSlugsByLocale[language].customCrmInternalTools,
    landingSlugsByLocale[language].appRescueLaunch,
    landingSlugsByLocale[language].backendApiIntegrations,
    landingSlugsByLocale[language].llmRagIntegrations,
    landingSlugsByLocale[language].bornGlobalApps
  ];
  const iconPalette = [Smartphone, Cpu, Zap, Cable, Cable, Globe2];
  const colorPalette = [
    { bg: 'bg-blue-50', icon: 'text-blue-700' },
    { bg: 'bg-purple-50', icon: 'text-purple-700' },
    { bg: 'bg-amber-50', icon: 'text-amber-700' },
    { bg: 'bg-emerald-50', icon: 'text-emerald-700' },
    { bg: 'bg-cyan-50', icon: 'text-cyan-700' },
    { bg: 'bg-rose-50', icon: 'text-rose-700' }
  ];

  const serviceCards = (t.services.items ?? []).map((item, index) => ({
    ...item,
    IconComponent: iconPalette[index % iconPalette.length],
    ...colorPalette[index % colorPalette.length]
  }));
  const scenarioCards = t.services.process ?? [];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='what-you-get' className='bg-white py-20 scroll-mt-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 max-w-3xl'>
          <div className='mb-4 inline-flex items-center space-x-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700'>
            <Zap className='h-4 w-4' />
            <span>{t.services.badge}</span>
          </div>
          <h2 className='mb-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl'>
            {t.services.headingLine1}
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text pb-2 text-transparent'>
              {t.services.headingHighlight}
            </span>
          </h2>
          <p className='text-lg leading-relaxed text-gray-600'>{t.services.description}</p>
        </div>

        {scenarioCards.length > 0 && (
          <div className='mb-14 rounded-[2rem] border border-slate-200 bg-slate-50/70 p-6 sm:p-8'>
            <div className='max-w-3xl'>
              {t.services.gridHeading && <h3 className='text-2xl font-bold text-slate-950 sm:text-3xl'>{t.services.gridHeading}</h3>}
              {t.services.gridDescription && (
                <p className='mt-3 text-base leading-relaxed text-slate-600'>{t.services.gridDescription}</p>
              )}
            </div>

            <div className='mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3'>
              {scenarioCards.map((scenario, index) => (
                <article
                  key={scenario.title + '-' + index}
                  className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
                >
                  <div className='mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600'>
                    {t.services.processLabel} {index + 1}
                  </div>
                  <h4 className='text-xl font-bold text-slate-950'>{scenario.title}</h4>
                  <p className='mt-3 text-sm leading-7 text-slate-600'>{scenario.description}</p>
                  <ul className='mt-5 space-y-2 text-sm leading-6 text-slate-700'>
                    {scenario.highlights.map((highlight) => (
                      <li key={highlight} className='flex items-start gap-2'>
                        <span className='mt-2 h-1.5 w-1.5 rounded-full bg-slate-400'></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {serviceCards.map((service, index) => {
            const IconComponent = service.IconComponent;
            const badgeClasses = 'mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ' + service.bg;
            const iconClasses = 'h-6 w-6 ' + service.icon;
            const landingHref = serviceLandingHrefs[index];

            return (
              <div
                key={service.title + '-' + index}
                className='group rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
              >
                <div className={badgeClasses}>
                  <IconComponent className={iconClasses} />
                </div>

                <div className='mb-4 space-y-1'>
                  {service.subtitle && (
                    <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>{service.subtitle}</p>
                  )}
                  <h3 className='text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600'>
                    {service.title}
                  </h3>
                </div>

                <p className='mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600'>{service.description}</p>

                <ul className='mb-6 space-y-2 text-sm text-gray-700'>
                  {service.features?.slice(0, 1).map((feature, featureIndex) => (
                    <li key={feature + '-' + featureIndex} className='flex items-start gap-2'>
                      <span className='mt-1 h-1.5 w-1.5 rounded-full bg-slate-400'></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {landingHref ? (
                  <a
                    href={landingHref}
                    onClick={() => trackCtaClick('services_card', service.cta, {
                      destination: landingHref,
                      language,
                      service_title: service.title
                    })}
                    className='group/btn inline-flex items-center font-semibold text-blue-600'
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1' />
                  </a>
                ) : (
                  <button
                    type='button'
                    onClick={() => {
                      trackCtaClick('services_contact_cta', service.cta, {
                        destination: '#contato',
                        language,
                        service_title: service.title
                      });
                      scrollToSection('contato');
                    }}
                    className='group/btn inline-flex items-center font-semibold text-blue-600'
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1' />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
