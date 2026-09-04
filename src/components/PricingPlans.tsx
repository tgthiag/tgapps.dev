import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { plansByLocale, pricingCopyByLocale, type Plan } from '../content/pricingPlans';
import { trackCtaClick, trackPricingPlanClick } from '../utils/analytics';

const PricingPlans = () => {
  const { language } = useLanguage();
  const copy = pricingCopyByLocale[language];
  const plans = plansByLocale[language];
  const notesLabel = language === 'pt' ? 'Notas comerciais' : 'Commercial notes';
  const planFitLabel = language === 'pt' ? 'Encaixe do plano:' : 'Plan fit:';
  const billingLabel = language === 'pt' ? 'Cobrança:' : 'Billing:';

  const scrollToContact = (plan: Plan) => {
    trackPricingPlanClick(plan.name, 'pricing_section', {
      plan_price: plan.price,
      language
    });
    trackCtaClick('pricing_plan_cta', plan.cta, {
      destination: '#contato',
      language,
      plan_name: plan.name,
      plan_price: plan.price
    });
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plans" className="relative overflow-hidden bg-slate-950 py-24 text-white scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.20),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            <Sparkles className="h-4 w-4 text-blue-300" />
            {copy.eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            {copy.title}{' '}
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {copy.highlight}
            </span>
          </h2>
          <p className="mt-5 text-base leading-8 text-white/72">{copy.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const isFeatured = plan.name === 'Growth';
            return (
              <article
                key={plan.name}
                className={`relative flex min-h-full flex-col rounded-[1.75rem] border p-6 shadow-2xl transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  isFeatured
                    ? 'border-blue-300/70 bg-white text-slate-950 shadow-blue-950/30'
                    : 'border-white/12 bg-white/[0.08] text-white shadow-slate-950/25 backdrop-blur-xl'
                }`}
              >
                {plan.badge && (
                  <div
                    className={`mb-6 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                      isFeatured ? 'bg-blue-600 text-white' : 'border border-white/12 bg-white/10 text-white/72'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className={`mt-3 text-4xl font-black ${isFeatured ? 'text-slate-950' : 'text-white'}`}>
                    {plan.price}
                  </p>
                  <p className={`mt-5 text-sm leading-7 ${isFeatured ? 'text-slate-600' : 'text-white/66'}`}>
                    {plan.audience}
                  </p>
                  <p className={`mt-4 text-sm leading-7 ${isFeatured ? 'text-slate-700' : 'text-white/78'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                      <CheckCircle
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          isFeatured ? 'text-blue-600' : 'text-emerald-300'
                        }`}
                      />
                      <span className={isFeatured ? 'text-slate-700' : 'text-white/76'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollToContact(plan)}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                    isFeatured
                      ? 'bg-slate-950 text-white hover:bg-slate-800'
                      : 'border border-white/15 bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">{notesLabel}</p>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-white/68 md:grid-cols-2">
            <p>
              <strong className="font-semibold text-white/86">{planFitLabel}</strong> {copy.note}
            </p>
            <p>
              <strong className="font-semibold text-white/86">{billingLabel}</strong> {copy.currencyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

