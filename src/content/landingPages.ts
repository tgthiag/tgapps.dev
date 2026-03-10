import type { Locale } from '../i18n/translations';

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

const EN_SLUGS: Record<LandingPageKey, string> = {
  androidIosSmb: '/android-ios-development-for-us-smb',
  monthlyPod: '/mobile-development-pod-month-to-month',
  zeroUpfront: '/zero-upfront-app-development',
  llmRagIntegrations: '/llm-rag-integrations-for-apps'
};

const PT_SLUGS: Record<LandingPageKey, string> = {
  androidIosSmb: '/desenvolvimento-android-ios-para-pequenas-empresas',
  monthlyPod: '/pod-mobile-mensal-cancelamento-livre',
  zeroUpfront: '/desenvolvimento-app-sem-adiantamento',
  llmRagIntegrations: '/integracoes-llm-rag-para-apps'
};

const EN_CONTENT: LandingContentByLocale = {
  androidIosSmb: {
    key: 'androidIosSmb',
    slug: EN_SLUGS.androidIosSmb,
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
    slug: EN_SLUGS.monthlyPod,
    badge: 'Month-to-month mobile development pod',
    title: 'Dedicated mobile development pod with month-to-month control',
    intro:
      'Use TG Apps as a parallel delivery squad for Android, iOS, backend, and release management. No retainers, no penalties, and no long notice periods.',
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Month-to-month mobile development pod',
    proofHeading: 'How this model works',
    proofItems: [
      'Flat monthly pod, typically USD 12k to 18k.',
      'Cancel any month with no penalties or hidden transition fees.',
      'Runbooks and handoff docs are delivered continuously, not only at the end.'
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
    slug: EN_SLUGS.zeroUpfront,
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
    slug: EN_SLUGS.llmRagIntegrations,
    badge: 'LLM/RAG integrations for apps',
    title: 'LLM and RAG integrations for mobile and web applications',
    intro:
      'Production-ready LLM/RAG integrations we deliver with guardrails, observability, and release coverage, using the vector/search stack your team already trusts.',
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'LLM RAG integration services',
    proofHeading: 'Integration model',
    proofItems: [
      'API-first delivery over REST or GraphQL for existing products.',
      'Prompt, retrieval, and fallback flows documented for operations teams.',
      'Monitoring, release checklist, and handoff runbooks included.'
    ],
    deliverablesHeading: 'Typical deliverables',
    deliverables: [
      'RAG pipelines connected to CRM, logistics, payments, or support data.',
      'Admin controls for prompts, indexes, and safety thresholds.',
      'Mobile and dashboard surfaces to expose answers, actions, and analytics.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'Teams that need AI features with auditability and operational control.',
      'Products that already run on existing vector stores or search engines.',
      'Leaders who need weekly production progress, not experimental demos.'
    ]
  }
};

const PT_CONTENT: LandingContentByLocale = {
  androidIosSmb: {
    key: 'androidIosSmb',
    slug: PT_SLUGS.androidIosSmb,
    badge: 'Desenvolvimento de apps para PMEs dos EUA',
    title: 'Desenvolvimento Android e iOS para pequenas empresas dos EUA',
    intro:
      'Pod mobile liderado pelo fundador para empresas norte-americanas que precisam de entrega nativa ou cross-platform com contrato primeiro, sem adiantamento, e releases semanais.',
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Desenvolvimento Android iOS para PMEs dos EUA',
    proofHeading: 'Provas antes do kickoff',
    proofItems: [
      'D-U-N-S 651029828 (emitido em 28/01/2026).',
      'Contrato + NDA assinados antes do inicio do desenvolvimento.',
      'Call inicial em 1 dia util e primeira entrega em cerca de 5 dias.'
    ],
    deliverablesHeading: 'O que o pod entrega',
    deliverables: [
      'Apps Android e iOS em Kotlin, Swift, Flutter ou React Native.',
      'Dashboard administrativo, API, banco de dados e release ops no mesmo sprint.',
      'Cadencia semanal de demo + deploy com rollout gradual ou blue/green.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'PMEs dos EUA que precisam substituir handoffs lentos de agencia.',
      'Fundadores que querem app + backend + release em um parceiro so.',
      'Times que precisam de flexibilidade mes a mes sem aumentar headcount.'
    ]
  },
  monthlyPod: {
    key: 'monthlyPod',
    slug: PT_SLUGS.monthlyPod,
    badge: 'Pod mobile mensal com liberdade de saida',
    title: 'Pod dedicado de desenvolvimento mobile com controle mes a mes',
    intro:
      'Use a TG Apps como squad paralelo para Android, iOS, backend e gerenciamento de release. Sem retainer, sem multa e sem prazo de aviso longo.',
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Pod mensal de desenvolvimento mobile',
    proofHeading: 'Como esse modelo funciona',
    proofItems: [
      'Pod mensal fixo, normalmente entre USD 12k e 18k.',
      'Cancelamento em qualquer mes sem multa ou taxa surpresa.',
      'Runbooks e handoff sao entregues continuamente, nao so no encerramento.'
    ],
    deliverablesHeading: 'O que ja vem no pod',
    deliverables: [
      'Execucao em Kanban com backend, frontend, banco e mobile em paralelo.',
      'Atualizacoes em Loom e demo semanal no Teams, Jira, Linear, Notion ou no seu stack.',
      'Triage de bugs em ate 24h e cobertura de fim de semana em janelas de lancamento.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Empresas que precisam acelerar sem contratar time fixo completo.',
      'Times que precisam de confiabilidade operacional e suporte de producao.',
      'Startups e agencias que querem previsibilidade de entrega toda semana.'
    ]
  },
  zeroUpfront: {
    key: 'zeroUpfront',
    slug: PT_SLUGS.zeroUpfront,
    badge: 'Desenvolvimento de app sem adiantamento',
    title: 'Desenvolvimento de app sem pagamento antecipado com contrato primeiro',
    intro:
      'Modelo comercial amigavel para times dos EUA: contrato e NDA primeiro, implementacao em seguida, sem adiantamento antes de iniciar o trabalho.',
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Desenvolvimento de app sem adiantamento',
    proofHeading: 'Termos comerciais',
    proofItems: [
      'Nenhum pagamento antecipado antes do kickoff.',
      'W8-BEN-E disponivel com faturamento em USD ou BRL.',
      'Contratos e cobranca emitidos pela TG Applications Desenvolvimento Ltda.'
    ],
    deliverablesHeading: 'Garantias de entrega',
    deliverables: [
      'Escopo e criterios de aceite definidos antes do sprint 1.',
      'Releases semanais, demos para stakeholders e log de decisoes.',
      'Continuacao mes a mes ou handoff limpo quando necessario.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Operacoes SMB com controle de caixa ou aprovacao financeira rigorosa.',
      'Times que precisam de sinais de confianca para juridico e compras.',
      'Fundadores que querem resultado e accountability antes de escalar custos.'
    ]
  },
  llmRagIntegrations: {
    key: 'llmRagIntegrations',
    slug: PT_SLUGS.llmRagIntegrations,
    badge: 'Integracoes LLM/RAG para apps',
    title: 'Integracoes LLM e RAG para aplicativos mobile e web',
    intro:
      'Integracoes LLM/RAG entregues em producao com guardrails, observabilidade e cobertura de release, usando o stack de vetor/busca que seu time ja confia.',
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Servico de integracoes LLM RAG',
    proofHeading: 'Modelo de integracao',
    proofItems: [
      'Entrega API-first em REST ou GraphQL para produtos existentes.',
      'Fluxos de prompt, retrieval e fallback documentados para operacao.',
      'Monitoramento, checklist de release e runbook de handoff incluidos.'
    ],
    deliverablesHeading: 'Entregas tipicas',
    deliverables: [
      'Pipelines RAG conectados a CRM, logistica, pagamentos ou suporte.',
      'Controles administrativos para prompts, indices e limiares de seguranca.',
      'Superficies mobile e dashboards para expor respostas, acoes e metricas.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Times que precisam de features de AI com rastreabilidade e controle.',
      'Produtos que ja operam com vector stores ou search engines existentes.',
      'Liderancas que exigem progresso semanal em producao, nao demo experimental.'
    ]
  }
};

export const landingContentByLocale: Record<Locale, LandingContentByLocale> = {
  en: EN_CONTENT,
  pt: PT_CONTENT
};

export const landingSlugsByLocale: Record<Locale, Record<LandingPageKey, string>> = {
  en: EN_SLUGS,
  pt: PT_SLUGS
};

const LANDING_ROUTE_ALIASES: Record<string, LandingPageKey> = {};

Object.entries(EN_SLUGS).forEach(([key, slug]) => {
  LANDING_ROUTE_ALIASES[slug] = key as LandingPageKey;
});
Object.entries(PT_SLUGS).forEach(([key, slug]) => {
  LANDING_ROUTE_ALIASES[slug] = key as LandingPageKey;
});

export const resolveLandingKeyByRoute = (routePath: string): LandingPageKey | null =>
  LANDING_ROUTE_ALIASES[routePath] ?? null;

export const getLandingContent = (locale: Locale, key: LandingPageKey): LandingPageContent =>
  landingContentByLocale[locale][key];

