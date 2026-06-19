import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Plan = {
  name: string;
  price: string;
  badge?: string;
  audience: string;
  description: string;
  features: string[];
  cta: string;
};

const plansByLocale: Record<'en' | 'pt', Plan[]> = {
  en: [
    {
      name: 'Starter',
      price: 'USD 1,500/mo',
      badge: 'Biweekly rhythm',
      audience:
        'For founders, operators, and small teams building in parallel who need a controlled biweekly rhythm, useful delivery, and a lower monthly entry point without limiting the type of software we can work on.',
      description:
        'A compact monthly plan for founders and operators who want scheduled deliveries, deploys, and biweekly planning for the next set of tasks.',
      features: [
        'Biweekly rhythm for app, frontend, backend, or rescue tasks',
        'Scheduled deliveries and deploys',
        'Biweekly planning meeting',
        'Direct communication whenever needed'
      ],
      cta: 'Discuss Starter'
    },
    {
      name: 'Growth',
      price: 'USD 2,000/mo',
      badge: 'Most selected',
      audience:
        'For founders and growing teams that want steady software delivery without daily management overhead.',
      description:
        'The main Tg Apps plan: weekly delivery rhythm, smart allocation, and one weekly planning/demo call to review what shipped, realign priorities, and choose what matters next.',
      features: [
        'Smart allocation across mobile, web, backend, CRM, and integrations',
        'Weekly planning/demo meeting to review progress and set priorities',
        'Async communication for normal questions and blockers',
        'Best balance between delivery, focus, and monthly cost'
      ],
      cta: 'Choose Growth'
    },
    {
      name: 'Dedicated',
      price: 'USD 3,500+/mo',
      badge: 'Higher availability',
      audience:
        'For teams that need the same delivery capabilities as Growth, with higher availability, faster reprioritization, and closer coordination.',
      description:
        'Dedicated is for clients that want a closer cadence: we join your daily meetings when that is the chosen workflow, handle urgent priorities at any time within the agreement, and keep more room for fast decisions.',
      features: [
        'Same capabilities as Growth, with higher availability',
        'We join your daily meetings when that cadence is requested',
        'Urgent priority handling at any time within the agreement',
        'More room for interruptions, fast decisions, and closer coordination'
      ],
      cta: 'Discuss Dedicated'
    }
  ],
  pt: [
    {
      name: 'Starter',
      price: 'US$ 1.500/mês',
      badge: 'Ritmo quinzenal',
      audience:
        'Para fundadores, operadores e times pequenos construindo em paralelo que precisam de um ritmo quinzenal controlado, entrega útil e um valor mensal de entrada menor sem limitar o tipo de software que podemos trabalhar.',
      description:
        'Um plano mensal enxuto para fundadores e operadores que querem entregas programadas, deploys e planejamento quinzenal das próximas demandas.',
      features: [
        'Ritmo quinzenal para app, frontend, backend ou resgate',
        'Entregas e deploys programados',
        'Reunião quinzenal de planejamento',
        'Comunicação direta sempre que necessário'
      ],
      cta: 'Falar sobre Starter'
    },
    {
      name: 'Growth',
      price: 'US$ 2.000/mês',
      badge: 'Mais escolhido',
      audience:
        'Para fundadores e times em crescimento que querem entrega constante sem gestão diária.',
      description:
        'O plano principal da Tg Apps: ritmo semanal de entrega, alocação inteligente e uma reunião semanal para revisar o que saiu, realinhar prioridades e escolher o próximo foco.',
      features: [
        'Alocação inteligente entre mobile, web, backend, CRM e integrações',
        'Reunião semanal para revisar progresso e priorizar próximas demandas',
        'Comunicação assíncrona para dúvidas e bloqueios normais',
        'Melhor equilíbrio entre entrega, foco e custo mensal'
      ],
      cta: 'Escolher Growth'
    },
    {
      name: 'Dedicated',
      price: 'US$ 3.500+/mês',
      badge: 'Maior disponibilidade',
      audience:
        'Para empresas que precisam das mesmas capacidades do Growth, com mais disponibilidade, priorização rápida e acompanhamento mais próximo.',
      description:
        'Dedicated é para quem quer uma cadência mais próxima: participamos das dailies do cliente quando essa for a rotina escolhida, tratamos prioridades urgentes a qualquer hora dentro do acordo e mantemos mais espaço para decisões rápidas.',
      features: [
        'Mesmas capacidades do Growth, com maior disponibilidade',
        'Participação nas dailies do cliente, se essa for a cadência escolhida',
        'Prioridades urgentes a qualquer hora dentro do acordo',
        'Mais espaço para interrupções, decisões rápidas e acompanhamento próximo'
      ],
      cta: 'Falar sobre Dedicated'
    }
  ]
};

const copyByLocale = {
  en: {
    eyebrow: 'Monthly plans',
    title: 'Software delivery plans',
    highlight: 'with clear scope and a delivery cadence you can rely on',
    subtitle:
      'Choose the plan that fits the current delivery load, the cadence you need, and the level of continuity the account requires. These plans are built for founders, startups, SMBs, and operators who need to keep building in parallel without carrying full-time headcount too early. In many US and international markets, this gives you practical product delivery capacity for less than hiring one senior engineer. Every plan starts with the First Milestone Guarantee, lets you start without paying upfront, and then continues month to month with the operating rhythm that fits the work.',
    note:
      'Most teams start with Growth. Dedicated is for accounts that truly need higher availability, participation in your daily meetings when requested, urgent priorities at any time within the agreement, and more room for fast decisions. Every plan starts with the First Milestone Guarantee and continues month to month.',
    currencyNote:
      'USD prices are public references. Before kickoff, the monthly amount is fixed in your agreed billing currency, such as USD, BRL, or another mutually accepted currency, and stays fixed while the engagement remains active.',
    footer: ''
  },
  pt: {
    eyebrow: 'Planos mensais',
    title: 'Planos de entrega de software',
    highlight: 'com escopo claro e uma cadência de entrega confiável',
    subtitle:
      'Escolha o plano que combina com a carga de entrega do momento, a cadência necessária e o nível de continuidade que a conta pede. Em muitos mercados, isso coloca uma equipe compacta de entrega de produto por menos do que contratar um desenvolvedor sênior sozinho. Todo plano começa com a Garantia da Primeira Entrega, sem pagamento antecipado para começar, e depois segue mês a mês com o ritmo operacional que faz sentido para o trabalho.',
    note:
      'A maioria dos clientes começa pelo Growth. Dedicated é para contas que realmente precisam de mais disponibilidade, participação em dailies quando solicitada, prioridades urgentes a qualquer hora dentro do acordo e mais espaço para decisões rápidas. Todo plano começa com a Garantia da Primeira Entrega e segue mês a mês.',
    currencyNote:
      'Os valores em US$ são referências públicas. Antes do início, o valor mensal é fixado na moeda combinada com o cliente, como USD, BRL ou outra moeda aceita pelas partes, e permanece fixo enquanto o plano estiver ativo.',
    footer: ''
  }
} as const;

const PricingPlans = () => {
  const { language } = useLanguage();
  const copy = copyByLocale[language];
  const plans = plansByLocale[language];

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plans" className="relative overflow-hidden bg-slate-950 py-24 text-white scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.24),transparent_30%),radial-gradient(circle_at_88%_55%,rgba(168,85,247,0.22),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            <Sparkles className="h-4 w-4 text-blue-300" />
            {copy.eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            {copy.title}
            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
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
                  onClick={scrollToContact}
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

        <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm leading-7 text-white/70">
          {copy.note}
        </p>
        <p className="mt-4 rounded-2xl border border-blue-300/20 bg-blue-400/[0.08] p-5 text-sm leading-7 text-blue-50/80">
          {copy.currencyNote}
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;

