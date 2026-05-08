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
      badge: 'Controlled scope',
      audience:
        'For smaller scopes, controlled monthly priorities, and teams that need useful delivery without opening a larger product cadence too early.',
      description:
        'A compact monthly plan for founders and operators who need scheduled deliveries, deploys, and a lighter coordination rhythm.',
      features: [
        'Controlled monthly scope for app, frontend, backend, or rescue tasks',
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
        'For founders and growing teams that need weekly software delivery with a cadence they can rely on.',
      description:
        'The main Tg Apps plan: weekly progress for the part of the product that needs the most attention right now.',
      features: [
        'Continuous deliveries and deploys across mobile, web, backend, CRM, and integrations',
        'Weekly planning meeting',
        'Product evolution, app rescue, and workflow improvements',
        'Direct communication whenever needed'
      ],
      cta: 'Choose Growth'
    },
    {
      name: 'Dedicated',
      price: 'USD 3,500+/mo',
      badge: 'More capacity',
      audience:
        'For companies with tighter delivery windows, multiple priorities moving at once, or products that need closer coordination around the work.',
      description:
        'A higher-capacity monthly plan for accounts that need steadier follow-through, faster decision loops, and more room around critical delivery.',
      features: [
        'More delivery capacity across parallel fronts when needed',
        'More room around releases, rescue work, and critical priorities',
        'Weekly planning, with room to reach a daily cadence when the delivery requires it',
        'Direct communication whenever needed'
      ],
      cta: 'Discuss Dedicated'
    }
  ],
  pt: [
    {
      name: 'Starter',
      price: 'US$ 1.500/mês',
      badge: 'Escopo controlado',
      audience:
        'Para escopos menores, prioridades mensais controladas e times que precisam de entrega útil sem abrir cedo demais uma cadência maior de produto.',
      description:
        'Um plano mensal enxuto para fundadores e operadores que precisam de entregas programadas, deploys e uma coordenação mais leve.',
      features: [
        'Escopo mensal controlado para app, frontend, backend ou resgate',
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
        'Para fundadores e times em crescimento que precisam de entrega semanal com uma cadência confiável.',
      description:
        'O plano principal da Tg Apps: avanço semanal na parte do produto que mais precisa de atenção agora.',
      features: [
        'Entrega semanal entre mobile, web, backend, CRM e IA',
        'Reunião semanal para revisar prioridades e mostrar progresso',
        'Resgate de app, evolução de produto e melhorias de fluxo',
        'Comunicação direta sempre que necessário'
      ],
      cta: 'Escolher Growth'
    },
    {
      name: 'Dedicated',
      price: 'US$ 3.500+/mês',
      badge: 'Mais capacidade',
      audience:
        'Para empresas com janelas mais apertadas de entrega, múltiplas prioridades ao mesmo tempo ou produtos que precisam de coordenação mais próxima ao redor do trabalho.',
      description:
        'Um plano mensal de maior capacidade para contas que precisam de acompanhamento mais firme, ciclos mais rápidos de decisão e mais espaço em entrega crítica.',
      features: [
        'Mais capacidade de entrega em frentes paralelas quando necessário',
        'Mais espaço para releases, resgate de app e prioridades críticas',
        'Planejamento semanal, podendo chegar ao ritmo diário quando a entrega exigir',
        'Comunicação direta sempre que necessário'
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
      'Choose the plan that fits the current delivery load, the cadence you need, and the level of continuity the account requires. Every plan starts with the First Milestone Guarantee, lets you start without paying upfront, and then continues month to month with the operating rhythm that fits the work.',
    note:
      'Every plan starts with the First Milestone Guarantee, continues month to month, and keeps communication close to the work. Billing can be in USD or BRL, with procurement documents ready when needed.',
    footer: ''
  },
  pt: {
    eyebrow: 'Planos mensais',
    title: 'Planos de entrega de software',
    highlight: 'com escopo claro e uma cadência de entrega confiável',
    subtitle:
      'Escolha o plano que combina com a carga de entrega do momento, a cadência necessária e o nível de continuidade que a conta pede. Todo plano começa com a Garantia da Primeira Entrega, sem pagamento antecipado para começar, e depois segue mês a mês com o ritmo operacional que faz sentido para o trabalho.',
    note:
      'Todo plano começa com a Garantia da Primeira Entrega, segue mês a mês e mantém a comunicação perto do trabalho. A cobrança pode ser em USD ou BRL, com a documentação necessária pronta quando for preciso.',
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
      </div>
    </section>
  );
};

export default PricingPlans;
