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
      audience: 'For small apps, maintenance, fixes, landing pages, light backend work, or stalled projects with tightly scoped monthly priorities.',
      description:
        'A focused entry plan for founders and teams that need useful software movement without opening a larger product cycle yet.',
      features: [
        'Can start with a clearly scoped first milestone',
        'Small monthly software scope',
        'Bug fixes and focused improvements',
        'Simple frontend, backend, or app tasks',
        'Scheduled deliveries and deploys within a controlled monthly scope',
        'Biweekly meeting to collect and prioritize demands',
        'Direct communication whenever needed during execution',
        'No upfront payment'
      ],
      cta: 'Discuss Starter'
    },
    {
      name: 'Growth',
      price: 'USD 2,000/mo',
      badge: 'Most selected',
      audience: 'For founders, startups, and growing teams that need weekly software delivery without hiring a full product team.',
      description:
        'The main Tg Apps plan: intelligent allocation across the part of the product that needs the most attention each week, usually starting with a clear first milestone.',
      features: [
        'Clear first delivery available before expanding the monthly plan',
        'Continuous deliveries and deploys with intelligent allocation across mobile, web, backend, CRM, internal tools, and integrations',
        'Weekly meeting to collect demands, review priorities, and show progress',
        'Direct communication whenever needed during execution',
        'Continuous delivery and deploy rhythm while the plan is active',
        'App rescue, product evolution, dashboards, and workflow improvements',
        'Direct access to delivery leadership',
        'Documentation and handoff when applicable',
        'Rate fixed while active'
      ],
      cta: 'Choose Growth'
    },
    {
      name: 'Dedicated',
      price: 'USD 3,500+/mo',
      badge: 'More capacity',
      audience: 'For companies with more urgency, multiple workstreams, active operations, or a product that needs stronger weekly throughput.',
      description:
        'A higher-capacity engagement starting at USD 3,500/mo for clients that need more structured planning, priority support, and collaborators allocated when scope requires it.',
      features: [
        'First milestone scoped before larger workstreams begin',
        'Larger monthly delivery capacity',
        'Multiple workstreams when needed',
        'Mobile, web, backend, database, CRM, AI, and integrations',
        'Priority support and release coverage',
        'Direct communication whenever needed during execution',
        'Flexible coordination that can reach a daily rhythm when needed',
        'Additional collaborators when scope requires',
        'Structured weekly planning'
      ],
      cta: 'Discuss Dedicated'
    }
  ],
  pt: [
    {
      name: 'Starter',
      price: 'US$ 1.500/mês',
      badge: 'Escopo controlado',
      audience: 'Para apps pequenos, manutenção, ajustes, landing pages, backend leve ou projetos parados com prioridades mensais bem controladas.',
      description:
        'Plano de entrada para fundadores e times que precisam de movimento útil em software sem abrir ainda um ciclo maior de produto.',
      features: [
        'Pode começar com uma primeira entrega bem definida',
        'Escopo mensal pequeno',
        'Correções e melhorias focadas',
        'Tarefas simples de frontend, backend ou app',
        'Entregas e deploys programados dentro de um escopo mensal controlado',
        'Reunião quinzenal para coletar e priorizar demandas',
        'Comunicação direta sempre que necessário durante a execução',
        'Sem pagamento inicial'
      ],
      cta: 'Falar sobre Starter'
    },
    {
      name: 'Growth',
      price: 'US$ 2.000/mês',
      badge: 'Mais escolhido',
      audience: 'Para fundadores, startups e times em crescimento que precisam de entrega semanal sem contratar um time completo de produto.',
      description:
        'O plano principal da Tg Apps: alocação inteligente na parte do produto que mais precisa de atenção a cada semana, normalmente começando por uma primeira entrega clara.',
      features: [
        'Primeira entrega clara antes de expandir o plano mensal',
        'Entregas e deploys contínuos com alocação inteligente entre mobile, web, backend, CRM, ferramentas internas e integrações',
        'Reunião semanal para coletar demandas, revisar prioridades e mostrar progresso',
        'Comunicação direta sempre que necessário durante a execução',
        'Ritmo contínuo de entregas e deploys enquanto o plano estiver ativo',
        'Resgate de app, evolução de produto, dashboards e melhorias de fluxo',
        'Acesso direto à liderança de entrega',
        'Documentação e transferência técnica quando aplicável',
        'Valor fixo enquanto ativo'
      ],
      cta: 'Escolher Growth'
    },
    {
      name: 'Dedicated',
      price: 'US$ 3.500+/mês',
      badge: 'Mais capacidade',
      audience: 'Para empresas com mais urgência, múltiplas frentes, operação ativa ou produto que exige mais throughput semanal.',
      description:
        'Engajamento com mais capacidade a partir de US$ 3.500/mês para clientes que precisam de planejamento mais estruturado, suporte prioritário e colaboradores alocados quando o escopo exigir.',
      features: [
        'Primeira entrega definida antes de frentes maiores começarem',
        'Maior capacidade mensal de entrega',
        'Múltiplas frentes quando necessário',
        'Mobile, web, backend, banco, CRM, IA e integrações',
        'Suporte prioritário e cobertura de deploy',
        'Comunicação direta sempre que necessário durante a execução',
        'Coordenação flexível, podendo chegar a um ritmo diário quando necessário',
        'Colaboradores adicionais quando o escopo exigir',
        'Planejamento semanal estruturado'
      ],
      cta: 'Falar sobre Dedicated'
    }
  ]
};

const copyByLocale = {
  en: {
    eyebrow: 'Monthly plans',
    title: 'Clear software delivery plans',
    highlight: 'without hiring first',
    subtitle:
      'Choose the level of support you need now. Start with a clear first milestone, then continue month to month with no upfront payment, a cadence that matches the selected plan, and a fixed rate while your plan remains active.',
    note:
      'Plans define monthly delivery capacity and operating rhythm. For the first step, we align scope, access, timeline, and acceptance criteria so you can evaluate real delivery before expanding.',
    footer: 'Need more capacity or a custom scope? We can structure a focused monthly plan around your current app, backlog, team, or release deadline.'
  },
  pt: {
    eyebrow: 'Planos mensais',
    title: 'Planos claros para entrega de software',
    highlight: 'sem contratar primeiro',
    subtitle:
      'Escolha o nível de suporte que você precisa agora. Comece por uma primeira entrega clara e continue mês a mês sem pagamento inicial, com a cadência compatível com o plano escolhido e valor fixo enquanto o plano permanecer ativo.',
    note:
      'Os planos definem capacidade mensal de entrega e ritmo operacional. Na primeira etapa, alinhamos escopo, acessos, prazo e critérios de aceite para você avaliar uma entrega real antes de expandir.',
    footer: 'Precisa de mais capacidade ou um escopo diferente? Podemos montar um plano mensal focado no seu app, backlog, time ou prazo de deploy.'
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
            <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
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

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <p className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm leading-7 text-white/70">
            {copy.note}
          </p>
          <p className="rounded-2xl border border-blue-300/20 bg-blue-400/10 p-5 text-sm leading-7 text-blue-50">
            {copy.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
