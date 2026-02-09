import React from 'react';
import { ShieldCheck, FileText, Clock3, MapPin, CheckCircle } from 'lucide-react';
import { useTranslations } from '../context/LanguageContext';

const About = () => {
  const t = useTranslations();
  const highlightIcons = [ShieldCheck, FileText, Clock3];
  const highlights = (t.about.values ?? []).map((value, index) => ({
    ...value,
    IconComponent: highlightIcons[index % highlightIcons.length]
  }));
  const proofPoints = t.about.stats ?? [];
  const supportingParagraphs = t.about.paragraphs ?? [];

  return (
    <section id='sobre' className='py-24 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4'>
            <MapPin className='w-4 h-4' />
            <span>{t.about.badge}</span>
          </div>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            {t.about.headingLine1}
            <span className='block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent'>
              {t.about.headingHighlight}
            </span>
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{t.about.description}</p>
        </div>

        <div className='grid gap-12 lg:grid-cols-2 items-center'>
          <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>{t.about.timelineHeading}</h3>
            <div className='space-y-4 text-gray-700 leading-relaxed'>
              {supportingParagraphs.slice(0, 3).map((paragraph, index) => (
                <p key={paragraph + '-' + index}>{paragraph}</p>
              ))}
            </div>

            {proofPoints.length > 0 && (
              <div className='mt-8 space-y-4'>
                {proofPoints.map((point, index) => (
                  <div key={point.number + '-' + index} className='flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100'>
                    <CheckCircle className='w-5 h-5 text-emerald-500 mt-1' />
                    <div>
                      <p className='text-sm uppercase tracking-wide text-gray-500'>{point.number}</p>
                      <p className='text-base text-gray-800'>{point.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className='mt-8 p-6 bg-white rounded-2xl border border-gray-100'>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>{t.about.missionHeading}</h4>
              <p className='text-gray-600'>{t.about.missionDescription}</p>
            </div>
          </div>

          <div className='relative'>
            <div className='rounded-3xl overflow-hidden shadow-2xl'>
              <img
                src='https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200'
                alt='TG Apps pod preparing a delivery roadmap'
                className='w-full h-[420px] object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-2xl'>
                <p className='text-xs uppercase tracking-[0.3em] text-gray-500 mb-1'>{t.about.passionTitle}</p>
                <p className='text-sm text-gray-700'>{t.about.passionDescription}</p>
              </div>
            </div>
            <div className='absolute -top-6 -right-6 w-36 h-36 bg-emerald-500/20 blur-3xl rounded-full' aria-hidden='true'></div>
            <div className='absolute -bottom-8 -left-4 bg-white rounded-2xl shadow-xl p-4 max-w-xs'>
              <p className='text-sm font-semibold text-gray-900 mb-1'>{t.about.clientHeading}</p>
              <p className='text-xs text-gray-600'>{t.about.missionHeading}</p>
            </div>
          </div>
        </div>

        {highlights.length > 0 && (
          <div className='mt-16'>
            <h3 className='text-2xl font-bold text-gray-900 text-center mb-10'>{t.about.valuesHeading}</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.IconComponent;
                return (
                  <div
                    key={highlight.title + '-' + index}
                    className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-shadow'
                  >
                    <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mb-4'>
                      <IconComponent className='w-6 h-6 text-white' />
                    </div>
                    <h4 className='text-lg font-semibold text-gray-900 mb-2'>{highlight.title}</h4>
                    <p className='text-sm text-gray-600 leading-relaxed'>{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
