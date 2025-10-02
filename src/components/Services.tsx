import React from 'react';
import { Globe, Smartphone, Palette, Code, Zap, Shield, ArrowRight } from 'lucide-react';
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

  return (
    <section id="servicos" className="py-24 bg-gray-50">
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

        {/* Services Grid */}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
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