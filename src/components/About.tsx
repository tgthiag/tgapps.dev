import React from 'react';
import { Users, Target, Lightbulb, Award, TrendingUp, Heart } from 'lucide-react';
import { useTranslations } from '../context/LanguageContext';

const About = () => {
  const t = useTranslations();
  const valuesConfig = [Target, Lightbulb, Award, TrendingUp];
  const values = valuesConfig.map((IconComponent, index) => ({
    icon: IconComponent,
    title: t.about.values[index]?.title ?? '',
    description: t.about.values[index]?.description ?? ''
  }));

  const statsIcons = [Award, Users, TrendingUp, Heart];
  const stats = statsIcons.map((IconComponent, index) => ({
    icon: IconComponent,
    number: t.about.stats[index]?.number ?? '',
    label: t.about.stats[index]?.label ?? ''
  }));

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.about.headingLine1}
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {t.about.headingHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.about.description}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t.about.timelineHeading}
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{t.about.missionHeading}</h4>
              <p className="text-gray-700 italic">{t.about.missionDescription}</p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="TG Apps team collaborating"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{t.about.passionTitle}</h5>
                    <p className="text-sm text-gray-600">{t.about.passionDescription}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{t.about.valuesHeading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{t.about.statsHeading}</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;