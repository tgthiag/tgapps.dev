import { ArrowRight, Check, CheckCircle, Clock3, ShieldCheck } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { landingSlugsByLocale } from '../content/landingPages';
import { trackCtaClick } from '../utils/analytics';

const icons = [ShieldCheck, Clock3, CheckCircle];

const FirstMilestoneGuarantee = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const href = landingSlugsByLocale[language].firstMilestoneGuarantee;
  const trustPoints = language === 'pt'
    ? ['Contrato e NDA antes do início', 'D-U-N-S® 651029828', 'Repositórios, documentação e handoff', 'Continuidade mês a mês, sem multa']
    : ['Agreement and NDA before kickoff', 'D-U-N-S® 651029828', 'Repositories, documentation, and handoff', 'Month-to-month continuity, no penalties'];

  return (
    <section className="relative overflow-hidden bg-[#f8f7f4] py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-stone-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {t.firstMilestone.badge}
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                {t.firstMilestone.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{t.firstMilestone.description}</p>
              <a
                href={href}
                onClick={() => trackCtaClick('first_milestone_details', language === 'pt' ? 'Ver detalhes da garantia' : 'See guarantee details', {
                  destination: href,
                  language
                })}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
              >
                <span>{language === 'pt' ? 'Ver detalhes da garantia' : 'See guarantee details'}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {t.firstMilestone.cards.map((card, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <article key={card.title} className="grid gap-4 py-5 sm:grid-cols-[auto_1fr]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold leading-5 text-slate-950">{card.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{card.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="mt-9 grid gap-3 border-t border-stone-200 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <p key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-600" />
                <span>{point}</span>
              </p>
            ))}
          </div>
          <p className="mt-7 text-center text-sm font-semibold text-slate-950">
            {language === 'pt'
              ? 'Você continua porque a parceria funciona, não porque o contrato obriga.'
              : 'You continue because the partnership works, not because a contract forces you to.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstMilestoneGuarantee;
