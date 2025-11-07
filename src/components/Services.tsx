import React from 'react';
import { Globe, Smartphone, Palette, Code, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslations } from '../context/LanguageContext';

const Services = () => {
  const t = useTranslations();
  const serviceConfigs = [
    {
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  const services = serviceConfigs.map((config, index) => ({
    ...config,
    ...t.services.items[index]
  }));
  const processLabel = t.services.processLabel ?? 'Stage';
  const partnershipReasons = t.contact?.whyUs ?? [];
  const partnershipHeading = t.services.partnershipHeading ?? t.contact?.whyUsHeading ?? '';
  const partnershipDescription = t.services.partnershipDescription ?? '';
  const accentColors = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-amber-500', 'bg-emerald-500'];
  const favoriteIndex =
    partnershipReasons.findIndex((reason) => {
      const normalized = reason.toLowerCase();
      return normalized.includes('no surprise fees') || normalized.includes('orçamentos transparentes');
    }) ?? -1;
  const highlightedReasonIndex = favoriteIndex >= 0 ? favoriteIndex : 0;

  return (
    <section id="what-you-get" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.services.headingLine1}
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.services.headingHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.services.description}</p>
        </div>

        {partnershipReasons.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              {partnershipHeading && <h3 className="text-3xl font-bold text-gray-900">{partnershipHeading}</h3>}
              {partnershipDescription && (
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">{partnershipDescription}</p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnershipReasons.map((reason, index) => {
                const isHero = index === highlightedReasonIndex;
                const dotColor = accentColors[index % accentColors.length];
                return (
                  <div
                    key={`${reason}-${index}`}
                    className={`relative overflow-hidden rounded-2xl p-7 transition-all duration-300 ${
                      isHero
                        ? 'lg:col-span-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl border border-transparent hover:shadow-blue-500/40'
                        : 'bg-white border border-gray-100 text-gray-800 shadow-sm hover:-translate-y-1 hover:shadow-xl'
                    }`}
                  >
                    {isHero && (
                      <>
                        <div
                          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_60%)]"
                          aria-hidden="true"
                        ></div>
                        <div className="relative inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 mb-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                          Client favorite
                        </div>
                      </>
                    )}
                    <div className="relative flex items-start gap-3">
                      <span className={`mt-1 inline-flex h-3 w-3 rounded-full ${isHero ? 'bg-white/90' : dotColor}`}></span>
                      <p className={`text-base leading-relaxed ${isHero ? 'text-white/90' : 'text-gray-800'}`}>{reason}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {t.services.process && t.services.process.length > 0 && (
          <div id="process" className="mt-20 mb-16 scroll-mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t.services.processHeading}</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.services.processDescription}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.services.process.map((stage, index) => (
                <div
                  key={stage.title ?? index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold text-blue-600">{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400">{processLabel}</p>
                      <h4 className="text-xl font-semibold text-gray-900">{stage.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 mb-6">{stage.description}</p>
                  <ul className="space-y-3">
                    {stage.highlights?.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="mt-12">
          {(t.services.gridHeading || t.services.gridDescription) && (
            <div className="text-center mb-10">
              {t.services.gridHeading && <h3 className="text-2xl font-bold text-gray-900">{t.services.gridHeading}</h3>}
              {t.services.gridDescription && (
                <p className="text-gray-600 mt-3 max-w-3xl mx-auto">{t.services.gridDescription}</p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-1 mb-4">
                  {service.subtitle && <p className="text-sm font-semibold text-blue-500">{service.subtitle}</p>}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="group/btn flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t.services.bottomCta.title}</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{t.services.bottomCta.description}</p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
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
