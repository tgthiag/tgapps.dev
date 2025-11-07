import React from 'react';
import { Users, Target, Lightbulb, Award, TrendingUp, Heart, CheckCircle } from 'lucide-react';
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

  const expectationHighlights = [
    stats[0]?.number && stats[0]?.label
      ? `We cap ourselves at ${stats[0].number} ${stats[0].label.toLowerCase()} – typically a blend of frontends, dashboards, and pragmatic backends – so attention stays high. Scope counts adjust with complexity, and it is all included in the flat monthly pod.`
      : null,
    stats[1]?.number && stats[1]?.label
      ? `Expect replies within ${stats[1].number} (${stats[1].label.toLowerCase()}) during the week, plus lighter weekend coverage when something cannot wait – all included in the flat pod cost.`
      : null,
    stats[3]?.number
      ? `Demos and deploys follow a ${stats[3].number.toLowerCase()} cadence so stakeholders stay synced, with adjustments based on complexity and parallel work – always aligned together.`
      : null
  ].filter(Boolean);

  const clientIcons = [Lightbulb, TrendingUp];
  const clientTypes = clientIcons.map((IconComponent, index) => ({
    icon: IconComponent,
    title: t.about.clientTypes[index]?.title ?? '',
    description: t.about.clientTypes[index]?.description ?? ''
  }));

  return (
    <section id="sobre" className="py-24 bg-gray-50 overflow-hidden">
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

            {clientTypes.some((client) => client.title) && (
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{t.about.clientHeading}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clientTypes.map((client, index) => {
                    const IconComponent = client.icon;
                    return (
                      <div key={index} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900">{client.title}</h5>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{client.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tg Apps team collaborating"
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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                {t.about.statsHeading}
              </div>
              <h3 className="text-3xl font-bold">{t.about.headingLine1}</h3>
              <p className="text-white/80 leading-relaxed">{t.about.description}</p>
              <ul className="space-y-3 text-sm text-white/80">
                {expectationHighlights.slice(0, 3).map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-1 text-emerald-300 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-3xl font-bold">{stat.number}</div>
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_55%)]"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
