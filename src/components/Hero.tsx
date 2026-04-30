import { ArrowRight, Award, Play, ShieldCheck, Star, Users, Zap } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const statsIcons = [Award, Users, ShieldCheck, Zap];
  const stats = statsIcons.map((IconComponent, index) => ({
    IconComponent,
    label: t.hero.stats[index]?.label ?? ''
  })).filter((stat) => stat.label);
  const heroCard =
    language === 'pt'
      ? {
          eyebrow: 'Valor mensal atual',
          line: 'US$ 2.000/mês · fixo enquanto ativo'
        }
      : {
          eyebrow: 'Current monthly rate',
          line: 'USD 2,000/mo · fixed while active'
        };

  return (
    <section id="inicio" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">{t.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">{t.hero.titleLine1}</span>
            {t.hero.titleHighlight && (
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            )}
            {t.hero.titleLine2 && <span className="mt-2 block sm:mt-3">{t.hero.titleLine2}</span>}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">{t.hero.subtitle}</p>

          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            {stats.map(({ IconComponent, label }, index) => (
              <div key={label} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white/90">
                <IconComponent
                  className={`w-5 h-5 ${
                    index === 0 ? 'text-blue-400' : index === 1 ? 'text-purple-400' : 'text-pink-400'
                  }`}
                />
                <span className="font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => scrollToSection('contato')}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('process')}
              className="group bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>{t.hero.secondaryCta}</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Tg Apps team collaborating"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 bg-white/90 text-slate-900 rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-sm font-semibold">{heroCard.eyebrow}</p>
            <p className="text-xs text-slate-500">{heroCard.line}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
