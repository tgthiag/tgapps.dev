import { ArrowRight, Check, Play, Star } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { trackCtaClick } from '../utils/analytics';

const Hero = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const proofPoints = t.hero.stats.map((stat) => stat.label).filter(Boolean);
  const heroCard =
    language === 'pt'
      ? {
          eyebrow: 'Plano mais escolhido',
          line: 'Growth, US$ 2.000/mês, com entregas contínuas e revisão semanal'
        }
      : {
          eyebrow: 'Most selected plan',
          line: 'Growth, USD 2,000/mo, with continuous delivery and weekly review'
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
            <span className="block">{t.hero.titleLine1}{' '}</span>
            {t.hero.titleHighlight && (
              <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            )}
            {t.hero.titleLine2 && <span className="mt-2 block sm:mt-3">{t.hero.titleLine2}</span>}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">{t.hero.subtitle}</p>

          <div className="mb-10 flex flex-wrap gap-x-5 gap-y-3 border-y border-white/10 py-4">
            {proofPoints.map((label) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-white/80">
                <Check className="h-4 w-4 text-cyan-300" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => {
                trackCtaClick('hero_primary', t.hero.primaryCta, {
                  destination: '#contato',
                  language
                });
                scrollToSection('contato');
              }}
              className="group flex items-center space-x-2 rounded-full bg-blue-500 px-6 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105 hover:bg-blue-400"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                trackCtaClick('hero_secondary', t.hero.secondaryCta, {
                  destination: '#cases',
                  language
                });
                scrollToSection('cases');
              }}
              className="group flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              <Play className="w-5 h-5" />
              <span>{t.hero.secondaryCta}</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/hero-product-delivery-1200.webp"
              srcSet="/hero-product-delivery-768.webp 768w, /hero-product-delivery-1200.webp 1200w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Tg Apps product delivery dashboard with mobile app and workflow automation"
              width={1200}
              height={800}
              decoding="async"
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
