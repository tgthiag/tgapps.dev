import React from 'react';
import { Smartphone, Cpu, Cable, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { useTranslations } from '../context/LanguageContext';

const Services = () => {
  const t = useTranslations();
  const iconPalette = [Smartphone, Cpu, Cable];
  const colorPalette = [
    { bg: 'bg-blue-50', gradient: 'from-blue-500 to-indigo-500', icon: 'text-blue-700' },
    { bg: 'bg-purple-50', gradient: 'from-purple-500 to-pink-500', icon: 'text-purple-700' },
    { bg: 'bg-emerald-50', gradient: 'from-emerald-500 to-cyan-500', icon: 'text-emerald-700' }
  ];
  const serviceCards = (t.services.items ?? []).map((item, index) => ({
    ...item,
    IconComponent: iconPalette[index % iconPalette.length],
    ...colorPalette[index % colorPalette.length]
  }));
  const pillars = t.services.pillars ?? [];
  const processSteps = t.services.process ?? [];
  const processLabel = t.services.processLabel ?? 'Stage';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='what-you-get' className='py-24 bg-white scroll-mt-24'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-2 lg:items-center'>
          <div>
            <div className='inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4'>
              <Zap className='w-4 h-4' />
              <span>{t.services.badge}</span>
            </div>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
              {t.services.headingLine1}
              <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2'>
                {t.services.headingHighlight}
              </span>
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed mb-6'>{t.services.description}</p>
            {pillars.length > 0 && (
              <ul className='space-y-3 mb-8'>
                {pillars.map((pillar) => (
                  <li key={pillar} className='flex items-start gap-3 text-sm text-gray-700'>
                    <CheckCircle className='w-4 h-4 text-emerald-500 mt-1 flex-shrink-0' />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={() => scrollToSection('contato')}
                className='bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors'
              >
                {t.services.bottomCta.button}
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className='border border-slate-300 text-slate-700 px-8 py-3 rounded-full font-semibold hover:border-slate-500 transition-colors'
              >
                {t.hero.secondaryCta}
              </button>
            </div>
          </div>
          <div className='relative'>
            <div className='rounded-3xl overflow-hidden shadow-2xl'>
              <img
                src='https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200'
                alt='Product team reviewing Android and iOS mockups'
                className='w-full h-[420px] object-cover'
              />
            </div>
            <div className='absolute -bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4 max-w-sm'>
              <p className='text-xs uppercase tracking-[0.25em] text-gray-500 mb-1'>Release kit</p>
              <p className='text-sm font-semibold text-gray-900'>Deploys and support hours already included in every pod.</p>
            </div>
          </div>
        </div>

        <div className='mt-20'>
          {(t.services.gridHeading || t.services.gridDescription) && (
            <div className='text-center mb-10'>
              {t.services.gridHeading && <h3 className='text-2xl font-bold text-gray-900'>{t.services.gridHeading}</h3>}
              {t.services.gridDescription && (
                <p className='text-gray-600 mt-3 max-w-3xl mx-auto'>{t.services.gridDescription}</p>
              )}
            </div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {serviceCards.map((service, index) => {
              const IconComponent = service.IconComponent;
              const badgeClasses = 'w-16 h-16 ' + service.bg + ' rounded-2xl flex items-center justify-center mb-6';
              const iconClasses = 'w-8 h-8 ' + service.icon;
              return (
                <div
                  key={service.title + '-' + index}
                  className='group bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
                >
                  <div className={badgeClasses}>
                    <IconComponent className={iconClasses} />
                  </div>
                  <div className='space-y-1 mb-4'>
                    {service.subtitle && <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>{service.subtitle}</p>}
                    <h3 className='text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>{service.title}</h3>
                  </div>
                  <p className='text-sm text-gray-600 mb-5 leading-relaxed'>{service.description}</p>
                  <ul className='space-y-2 mb-6 text-sm text-gray-700'>
                    {service.features?.map((feature, featureIndex) => (
                      <li key={feature + '-' + featureIndex} className='flex items-start gap-2'>
                        <span className='mt-1 h-1.5 w-1.5 rounded-full bg-slate-400'></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type='button'
                    onClick={() => scrollToSection('contato')}
                    className='group/btn inline-flex items-center text-blue-600 font-semibold'
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1' />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {processSteps.length > 0 && (
          <div id='process' className='mt-20 scroll-mt-24'>
            <div className='text-center mb-10'>
              <h3 className='text-3xl font-bold text-gray-900 mb-4'>{t.services.processHeading}</h3>
              <p className='text-gray-600 max-w-3xl mx-auto'>{t.services.processDescription}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {processSteps.map((stage, index) => (
                <div key={stage.title + '-' + index} className='border border-gray-100 rounded-2xl p-6 shadow-sm bg-gray-50'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center font-semibold text-blue-600'>
                      {index + 1}
                    </div>
                    <div>
                      <p className='text-xs uppercase tracking-wide text-gray-400'>{processLabel}</p>
                      <h4 className='text-lg font-semibold text-gray-900'>{stage.title}</h4>
                    </div>
                  </div>
                  <p className='text-sm text-gray-600 mb-4'>{stage.description}</p>
                  <ul className='space-y-2 text-sm text-gray-700'>
                    {stage.highlights?.map((highlight, highlightIndex) => (
                      <li key={highlight + '-' + highlightIndex} className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-emerald-500 mt-0.5' />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='mt-20'>
          <div className='bg-slate-900 rounded-3xl px-8 py-10 text-white text-center'>
            <h3 className='text-2xl font-bold mb-3'>{t.services.bottomCta.title}</h3>
            <p className='text-white/80 max-w-2xl mx-auto mb-6'>{t.services.bottomCta.description}</p>
            <button
              onClick={() => scrollToSection('contato')}
              className='bg-white text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors'
            >
              {t.services.bottomCta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
