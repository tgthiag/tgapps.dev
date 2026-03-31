import type { Locale } from '../i18n/translations';
import { getPublicRouteById, resolvePublicRoute } from './publicRoutes';

export type LandingPageKey =
  | 'androidIosSmb'
  | 'monthlyPod'
  | 'zeroUpfront'
  | 'llmRagIntegrations';

export interface LandingPageContent {
  key: LandingPageKey;
  slug: string;
  badge: string;
  title: string;
  intro: string;
  ctaLabel: string;
  ctaSubject: string;
  proofHeading: string;
  proofItems: string[];
  deliverablesHeading: string;
  deliverables: string[];
  fitHeading: string;
  fitItems: string[];
}

type LandingContentByLocale = Record<LandingPageKey, LandingPageContent>;

const LANDING_PAGE_KEYS: LandingPageKey[] = [
  'androidIosSmb',
  'monthlyPod',
  'zeroUpfront',
  'llmRagIntegrations'
];

const getLandingSlug = (locale: Locale, key: LandingPageKey): string => {
  const route = getPublicRouteById(key);
  if (!route || route.page !== 'landing') {
    throw new Error(`Public landing route not found for "${key}".`);
  }
  return route.localizedPaths[locale];
};

const EN_CONTENT: LandingContentByLocale = {
  androidIosSmb: {
    key: 'androidIosSmb',
    slug: getLandingSlug('en', 'androidIosSmb'),
    badge: 'US small business app development',
    title: 'Android and iOS app development for US small businesses',
    intro:
      'Founder-led mobile pod for US SMBs that need native or cross-platform delivery with contract-first billing, no upfront payment, and weekly releases.',
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Android+iOS development for US SMB',
    proofHeading: 'Proof before kickoff',
    proofItems: [
      'D-U-N-S 651029828 (issued Jan 28, 2026).',
      'Contract + NDA signed before any coding starts.',
      'Kickoff call in one business day, first deliverable in about five days.'
    ],
    deliverablesHeading: 'What your pod ships',
    deliverables: [
      'Android and iOS apps in Kotlin, Swift, Flutter, or React Native.',
      'Admin dashboard, API, database, and release ops in the same sprint.',
      'Weekly demo + deploy cadence with blue/green or staged rollouts.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'US SMB teams replacing slow agency handoffs.',
      'Founders who need one partner for app + backend + releases.',
      'Teams that want month-to-month flexibility without headcount overhead.'
    ]
  },
  monthlyPod: {
    key: 'monthlyPod',
    slug: getLandingSlug('en', 'monthlyPod'),
    badge: 'Month-to-month mobile development pod',
    title: 'Dedicated mobile development pod with month-to-month control',
    intro:
      'Use TG Apps as a parallel delivery squad for Android, iOS, backend, and release management. No retainers, no penalties, and no long notice periods.',
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Month-to-month mobile development pod',
    proofHeading: 'How this model works',
    proofItems: [
      'Temporary offer: USD 1,900/mo for the next 3 companies.',
      'Cancel any month with no penalties or hidden transition fees.',
      'Monthly billing, no upfront payment, and runbooks plus handoff docs delivered continuously.'
    ],
    deliverablesHeading: 'Included in the pod',
    deliverables: [
      'Kanban-based execution with backend, frontend, database, and mobile in parallel.',
      'Loom updates plus weekly demos in Teams, Jira, Linear, Notion, or your stack.',
      'Bug triage within 24 hours and weekend standby during launch windows.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'Companies that need speed without full-time hiring.',
      'Teams that need release reliability and production support.',
      'Agencies/startups that want predictable shipping velocity every week.'
    ]
  },
  zeroUpfront: {
    key: 'zeroUpfront',
    slug: getLandingSlug('en', 'zeroUpfront'),
    badge: 'Zero upfront app development',
    title: 'Zero upfront app development with contract-first delivery',
    intro:
      'Finance-friendly setup for US teams: sign contract and NDA first, then start implementation without paying upfront before work begins.',
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Zero upfront app development',
    proofHeading: 'Commercial terms',
    proofItems: [
      'No upfront payment required before kickoff.',
      'W8-BEN-E available with USD or BRL invoicing.',
      'TG Applications Desenvolvimento Ltda handles contracts and billing.'
    ],
    deliverablesHeading: 'Delivery guarantees',
    deliverables: [
      'Clear scope and acceptance criteria before sprint 1.',
      'Weekly releases, stakeholder demos, and decision logs.',
      'Month-to-month continuation or clean handoff at any time.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'SMB operators under tight cash control or approval workflows.',
      'Teams that need legal/procurement trust signals from day one.',
      'Founders who want output and accountability before scale commitments.'
    ]
  },
  llmRagIntegrations: {
    key: 'llmRagIntegrations',
    slug: getLandingSlug('en', 'llmRagIntegrations'),
    badge: 'LLM integrations for apps',
    title: 'LLM integrations for mobile and web applications',
    intro:
      'Production-ready LLM integrations we deliver with guardrails, observability, and release coverage, using the vector, search, or knowledge stack your team already trusts.',
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'LLM integration services',
    proofHeading: 'Integration model',
    proofItems: [
      'API-first delivery over REST or GraphQL for existing products.',
      'Prompt, context, and fallback flows documented for operations teams.',
      'Monitoring, release checklist, and handoff runbooks included.'
    ],
    deliverablesHeading: 'Typical deliverables',
    deliverables: [
      'LLM workflows connected to CRM, logistics, payments, or support data.',
      'Admin controls for prompts, indexes, and safety thresholds.',
      'Mobile and dashboard surfaces to expose answers, actions, and analytics.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'Teams that need AI features with auditability and operational control.',
      'Products that already rely on search, knowledge, or structured data layers.',
      'Leaders who need weekly production progress, not experimental demos.'
    ]
  }
};

const PT_CONTENT: LandingContentByLocale = {
  androidIosSmb: {
    key: 'androidIosSmb',
    slug: getLandingSlug('pt', 'androidIosSmb'),
    badge: 'Desenvolvimento global de apps',
    title: 'Desenvolvimento Android e iOS para startups e empresas globais',
    intro:
      'Pod mobile liderado pelo fundador para startups e empresas que precisam de entrega nativa ou cross-platform com contrato primeiro, sem adiantamento, releases semanais e visão de produto born global.',
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Desenvolvimento Android iOS para startup global',
    proofHeading: 'Provas antes do kickoff',
    proofItems: [
      'D-U-N-S 651029828 (emitido em 28/01/2026).',
      'Contrato + NDA assinados antes do inicio do desenvolvimento.',
      'Call inicial em 1 dia útil e primeira entrega em cerca de 5 dias.'
    ],
    deliverablesHeading: 'O que o pod entrega',
    deliverables: [
      'Apps Android e iOS em Kotlin, Swift, Flutter ou React Native.',
      'Dashboard administrativo, API, banco de dados e release ops no mesmo sprint.',
      'Cadência semanal de demo + deploy com rollout gradual ou blue/green.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Startups e empresas que precisam substituir handoffs lentos de agência.',
      'Fundadores que querem app + backend + release em um parceiro só.',
      'Times que precisam de flexibilidade mês a mês sem aumentar headcount.'
    ]
  },
  monthlyPod: {
    key: 'monthlyPod',
    slug: getLandingSlug('pt', 'monthlyPod'),
    badge: 'Pod mobile mensal com liberdade de saída',
    title: 'Pod dedicado de desenvolvimento mobile com controle mês a mês',
    intro:
      'Use a TG Apps como squad paralelo para Android, iOS, backend e gerenciamento de release. Sem retainer, sem multa e sem prazo de aviso longo.',
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Pod mensal de desenvolvimento mobile',
    proofHeading: 'Como esse modelo funciona',
    proofItems: [
      'US$ 1.900/mês fixos para as próximas 3 empresas.',
      'Cancelamento em qualquer mês sem multa ou taxa surpresa.',
      'Cobrança mensal, sem adiantamento, e runbooks com handoff entregues continuamente.'
    ],
    deliverablesHeading: 'O que já vem no pod',
    deliverables: [
      'Execução em Kanban com backend, frontend, banco e mobile em paralelo.',
      'Atualizações em Loom e demo semanal no Teams, Jira, Linear, Notion ou no seu stack.',
      'Triage de bugs em até 24h e cobertura de fim de semana em janelas de lançamento.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Empresas que precisam acelerar sem contratar time fixo completo.',
      'Times que precisam de confiabilidade operacional e suporte de produção.',
      'Startups e agências que querem previsibilidade de entrega toda semana.'
    ]
  },
  zeroUpfront: {
    key: 'zeroUpfront',
    slug: getLandingSlug('pt', 'zeroUpfront'),
    badge: 'Desenvolvimento de app sem adiantamento',
    title: 'Desenvolvimento de app sem pagamento antecipado com contrato primeiro',
    intro:
      'Modelo comercial amigável para empresas de qualquer mercado: contrato e NDA primeiro, implementação em seguida, sem adiantamento antes de iniciar o trabalho.',
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Desenvolvimento de app sem adiantamento',
    proofHeading: 'Termos comerciais',
    proofItems: [
      'Nenhum pagamento antecipado antes do kickoff.',
      'W8-BEN-E disponível com faturamento em USD ou BRL.',
      'Contratos e cobrança emitidos pela TG Applications Desenvolvimento Ltda.'
    ],
    deliverablesHeading: 'Garantias de entrega',
    deliverables: [
      'Escopo e critérios de aceite definidos antes do sprint 1.',
      'Releases semanais, demos para stakeholders e log de decisões.',
      'Continuação mês a mês ou handoff limpo quando necessário.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Operações SMB com controle de caixa ou aprovação financeira rigorosa.',
      'Times que precisam de sinais de confiança para jurídico e compras.',
      'Fundadores que querem resultado e accountability antes de escalar custos.'
    ]
  },
  llmRagIntegrations: {
    key: 'llmRagIntegrations',
    slug: getLandingSlug('pt', 'llmRagIntegrations'),
    badge: 'Integrações LLM para apps',
    title: 'Integrações LLM para aplicativos mobile e web',
    intro:
      'Integrações LLM entregues em produção com guardrails, observabilidade e cobertura de release, usando o stack de vetor, busca ou conhecimento que seu time já confia.',
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Serviço de integrações LLM',
    proofHeading: 'Modelo de integração',
    proofItems: [
      'Entrega API-first em REST ou GraphQL para produtos existentes.',
      'Fluxos de prompt, contexto e fallback documentados para operação.',
      'Monitoramento, checklist de release e runbook de handoff incluídos.'
    ],
    deliverablesHeading: 'Entregas típicas',
    deliverables: [
      'Fluxos de LLM conectados a CRM, logística, pagamentos ou suporte.',
      'Controles administrativos para prompts, índices e limiares de segurança.',
      'Superfícies mobile e dashboards para expor respostas, ações e métricas.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Times que precisam de features de AI com rastreabilidade e controle.',
      'Produtos que já operam com busca, conhecimento ou dados estruturados.',
      'Lideranças que exigem progresso semanal em produção, não demo experimental.'
    ]
  }
};

export const landingContentByLocale: Record<Locale, LandingContentByLocale> = {
  en: EN_CONTENT,
  pt: PT_CONTENT
};

export const landingSlugsByLocale: Record<Locale, Record<LandingPageKey, string>> = {
  en: LANDING_PAGE_KEYS.reduce<Record<LandingPageKey, string>>((accumulator, key) => {
    accumulator[key] = getLandingSlug('en', key);
    return accumulator;
  }, {} as Record<LandingPageKey, string>),
  pt: LANDING_PAGE_KEYS.reduce<Record<LandingPageKey, string>>((accumulator, key) => {
    accumulator[key] = getLandingSlug('pt', key);
    return accumulator;
  }, {} as Record<LandingPageKey, string>)
};

export const resolveLandingKeyByRoute = (routePath: string): LandingPageKey | null =>
  (resolvePublicRoute(routePath)?.landingKey as LandingPageKey | undefined) ?? null;

export const getLandingContent = (locale: Locale, key: LandingPageKey): LandingPageContent =>
  landingContentByLocale[locale][key];
