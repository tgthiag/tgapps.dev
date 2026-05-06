import { ArrowRight, CheckCircle, Clock3, ShieldCheck } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { landingSlugsByLocale } from '../content/landingPages';

const icons = [ShieldCheck, Clock3, CheckCircle];

const FirstMilestoneGuarantee = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const href = landingSlugsByLocale[language].firstMilestoneGuarantee;

  return (
    <section className="relative overflow-hidden bg-white py-10">
      <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.35fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 ring-1 ring-blue-100">
                {t.firstMilestone.badge}
              </p>
              <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                {t.firstMilestone.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{t.firstMilestone.description}</p>
              <a
                href={href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
              >
                <span>{language === 'pt' ? 'Ver detalhes da garantia' : 'See guarantee details'}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {t.firstMilestone.cards.map((card, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-semibold leading-5 text-slate-950">{card.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstMilestoneGuarantee;
