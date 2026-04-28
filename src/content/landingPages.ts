import type { Locale } from '../i18n/translations';
import { getPublicRouteById, resolvePublicRoute } from './publicRoutes';

export type LandingPageKey =
  | 'androidIosSmb'
  | 'customSoftwareSmbs'
  | 'customSoftwareStartups'
  | 'customCrmInternalTools'
  | 'monthlyPod'
  | 'zeroUpfront'
  | 'llmRagIntegrations';

export interface LandingPageSection {
  title: string;
  description?: string;
  items: string[];
}

export interface LandingPagePricing {
  label: string;
  title: string;
  description: string;
  highlights: string[];
  note: string;
}

export interface LandingPageContent {
  key: LandingPageKey;
  slug: string;
  badge: string;
  title: string;
  intro: string;
  heroHighlights?: string[];
  ctaLabel: string;
  ctaSubject: string;
  proofHeading: string;
  proofItems: string[];
  deliverablesHeading: string;
  deliverables: string[];
  fitHeading: string;
  fitItems: string[];
  sections?: LandingPageSection[];
  pricing?: LandingPagePricing;
  finalNote?: {
    title: string;
    description: string;
  };
}

type LandingContentByLocale = Record<LandingPageKey, LandingPageContent>;

const LANDING_PAGE_KEYS: LandingPageKey[] = [
  'customSoftwareSmbs',
  'customSoftwareStartups',
  'customCrmInternalTools',
  'androidIosSmb',
  'llmRagIntegrations',
  'monthlyPod',
  'zeroUpfront'
];

const getLandingSlug = (locale: Locale, key: LandingPageKey): string => {
  const route = getPublicRouteById(key);
  if (!route || route.page !== 'landing') {
    throw new Error(`Public landing route not found for "${key}".`);
  }
  return route.localizedPaths[locale];
};

const EN_INTRODUCTORY_PRICING: LandingPagePricing = {
  label: 'Introductory monthly rate',
  title: 'Current introductory rate: USD 2,000/month',
  description:
    'Limited-time pricing for new engagements. If you join at this rate, it stays fixed for your account while the engagement remains active.',
  highlights: [
    'No upfront payment before work begins.',
    'Month-to-month engagement with no lock-in.',
    'Design, backend, frontend, database, integrations, and release support included in the same team.'
  ],
  note: 'Final scope still depends on complexity, security needs, and required integrations, but the introductory monthly rate is locked for clients who start under this offer.'
};

const PT_INTRODUCTORY_PRICING: LandingPagePricing = {
  label: 'Valor mensal introdutorio',
  title: 'Valor atual: US$ 2.000/mês',
  description:
    'Preco por tempo limitado para novos contratos. Quem entrar nessa faixa mantém o valor fixo enquanto o engajamento permanecer ativo.',
  highlights: [
    'Sem pagamento antecipado antes do trabalho comecar.',
    'Contrato mes a mes, sem lock-in.',
    'Design, backend, frontend, banco de dados, integracoes e suporte de release no mesmo time.'
  ],
  note: 'O escopo final ainda depende da complexidade, seguranca e integracoes necessarias, mas o valor mensal introdutorio fica travado para clientes que iniciarem nessa oferta.'
};

const EN_CONTENT: LandingContentByLocale = {
  customSoftwareSmbs: {
    key: 'customSoftwareSmbs',
    slug: getLandingSlug('en', 'customSoftwareSmbs'),
    badge: 'Custom software for SMB operations',
    title: 'Custom software for SMBs that outgrew spreadsheets and disconnected tools',
    intro:
      'TG Apps builds CRM, internal tools, dashboards, workflow automation, portals, employee apps, mobile apps, APIs, and integrations for SMB teams that need software shaped around the way the business actually works.',
    heroHighlights: [
      'Replace spreadsheets, manual handoffs, and disconnected SaaS.',
      'Build CRM, scheduling, lead operations, dashboards, and portals.',
      'Launch with one product team covering design, backend, frontend, mobile, and release.'
    ],
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Custom software for SMBs',
    proofHeading: 'When SMBs call us',
    proofItems: [
      'The team is losing time because customer data, scheduling, finance, and operations live in separate places.',
      'Off-the-shelf software helps part of the workflow but forces manual workarounds everywhere else.',
      'The business needs one operating system for the process, not another disconnected subscription.'
    ],
    deliverablesHeading: 'What we can build',
    deliverables: [
      'Custom CRM, lead management, follow-up workflows, and sales pipeline visibility.',
      'Scheduling, dispatch, admin dashboards, financial workflows, customer portals, and employee apps.',
      'APIs, databases, automations, AI integrations, and mobile apps connected to the same operating layer.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'Service businesses, field operations, agencies, local operators, and B2B SMBs with real process complexity.',
      'Owners who know the business workflow but need a technical team to turn it into software.',
      'Companies that want a system they own, can evolve, and can potentially turn into a vertical product later.'
    ],
    sections: [
      {
        title: 'Software around the operation, not the other way around',
        description:
          'The goal is not to force your company into a generic CRM. The goal is to model the process, then build the system around it.',
        items: [
          'Map lead capture, conversion, scheduling, service delivery, billing, and reporting before implementation.',
          'Define roles, permissions, statuses, automations, notifications, and dashboards from the real workflow.',
          'Ship weekly demos so operators can validate the software while it is being built.'
        ]
      },
      {
        title: 'Internal system today, business asset tomorrow',
        description:
          'A strong internal system can become more than operational infrastructure. In some verticals, it can become a product your company sells or licenses.',
        items: [
          'Build the first version for your team while keeping productization options open.',
          'Separate company-specific workflow from reusable platform logic where it makes sense.',
          'Design data, permissions, and interfaces with future customers, partners, or franchise units in mind.'
        ]
      }
    ],
    pricing: EN_INTRODUCTORY_PRICING,
    finalNote: {
      title: 'The best SMB software usually starts inside the business',
      description:
        'The strongest systems come from real operational pressure: missed follow-ups, disconnected data, slow scheduling, fragile spreadsheets, and teams that need one source of truth.'
    }
  },
  customSoftwareStartups: {
    key: 'customSoftwareStartups',
    slug: getLandingSlug('en', 'customSoftwareStartups'),
    badge: 'Custom software for startups',
    title: 'Custom software for startups that need product delivery without building a full team first',
    intro:
      'TG Apps helps founders and startup teams ship MVPs, mobile apps, backend systems, dashboards, internal tools, AI integrations, and product iterations with one execution team and weekly delivery cadence.',
    heroHighlights: [
      'MVP, mobile app, backend, dashboard, and launch support.',
      'Weekly demos, clear scope, and production-minded delivery.',
      'Useful when you need traction before hiring a full product team.'
    ],
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Custom software for startups',
    proofHeading: 'When startups use this model',
    proofItems: [
      'The founder needs a working product, not another strategy deck.',
      'The startup needs app, backend, admin tools, integrations, and release support from one team.',
      'The roadmap is still evolving, so delivery needs to be structured but flexible.'
    ],
    deliverablesHeading: 'What we can ship',
    deliverables: [
      'MVPs, mobile apps, web apps, admin dashboards, APIs, databases, and customer portals.',
      'Feature iterations, onboarding flows, payment flows, AI features, analytics, and operational tooling.',
      'Launch support, app store preparation, production monitoring, bug triage, and handoff documentation.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'Founders validating a product before committing to a permanent engineering team.',
      'Startup teams replacing fragmented freelancers or slow agency loops.',
      'Operators turning a proven internal workflow into a sellable product or vertical SaaS.'
    ],
    sections: [
      {
        title: 'From idea to a product people can use',
        description:
          'The early product phase needs speed, but it still needs enough structure to avoid creating throwaway software.',
        items: [
          'Clarify the first useful version, acceptance criteria, and technical risks before sprint one.',
          'Build the app, backend, database, and admin controls together so the product can operate after launch.',
          'Use weekly demos to decide what to cut, improve, or prioritize next.'
        ]
      },
      {
        title: 'Built for iteration after launch',
        description:
          'Startups rarely need a frozen scope. They need a delivery system that can keep learning without losing technical control.',
        items: [
          'Plan for staged releases, feedback loops, analytics, and production support.',
          'Keep repos, environments, documentation, and credentials organized from the beginning.',
          'Move from MVP to version two without rebuilding the whole foundation.'
        ]
      }
    ],
    pricing: EN_INTRODUCTORY_PRICING,
    finalNote: {
      title: 'A startup does not always need a big team to start shipping',
      description:
        'A focused execution team can cover product, app, backend, integrations, and release until the business has enough signal to scale engineering deliberately.'
    }
  },
  androidIosSmb: {
    key: 'androidIosSmb',
    slug: getLandingSlug('en', 'androidIosSmb'),
    badge: 'Mobile app development for startups and SMBs',
    title: 'Android and iOS app development for startups and SMB teams',
    intro:
      'Founder-led mobile app development for startups and SMBs that need native or cross-platform delivery with backend, database, release support, no upfront payment, and weekly demos.',
    heroHighlights: [
      'Android, iOS, Flutter, or React Native.',
      'Backend, database, admin dashboard, and release support included.',
      'Built for startup launches and SMB operations that need a real app, not only a prototype.'
    ],
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Mobile app development for startups and SMBs',
    proofHeading: 'Proof before kickoff',
    proofItems: [
      'D-U-N-S 651029828 (issued Jan 28, 2026).',
      'Contract + NDA signed before any coding starts.',
      'Kickoff call in one business day, first deliverable in about five days.'
    ],
    deliverablesHeading: 'What your team ships',
    deliverables: [
      'Android and iOS apps in Kotlin, Swift, Flutter, or React Native.',
      'Admin dashboard, API, database, and release ops in the same sprint.',
      'Weekly demo + deploy cadence with blue/green or staged rollouts.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'Startup and SMB teams replacing slow agency handoffs.',
      'Founders who need one partner for app + backend + releases.',
      'Teams that want month-to-month flexibility without headcount overhead.'
    ],
    sections: [
      {
        title: 'Mobile plus the system behind it',
        description:
          'Most business apps fail when the mobile screen is treated separately from the backend, database, admin workflow, and release process.',
        items: [
          'Customer apps, employee apps, field apps, booking apps, dashboards, and admin portals.',
          'APIs, authentication, payments, notifications, files, analytics, and operational reporting.',
          'App Store and Play Store preparation with staged releases and support after launch.'
        ]
      },
      {
        title: 'Useful for both product and operations',
        description:
          'The same mobile capability can support a startup product, a customer-facing SMB app, or an internal employee workflow.',
        items: [
          'Launch a new product with mobile-first customer experience.',
          'Give customers a portal instead of support threads and spreadsheets.',
          'Give employees a task, schedule, status, or field-service app connected to the same backend.'
        ]
      }
    ],
    pricing: EN_INTRODUCTORY_PRICING,
    finalNote: {
      title: 'The app is only one part of the delivery',
      description:
        'For commercial outcomes, the mobile app needs the backend, operational dashboard, release process, and support model to move together.'
    }
  },
  customCrmInternalTools: {
    key: 'customCrmInternalTools',
    slug: getLandingSlug('en', 'customCrmInternalTools'),
    badge: 'Internal tools, CRM, and business systems',
    title: 'Custom internal tools, CRM, and business systems built around your operation',
    intro:
      'If your business has outgrown spreadsheets, disconnected tools, or software that only partially fits the way you work, TG Apps can design and build the operational system behind your next stage.',
    heroHighlights: [
      'Custom CRM, dashboards, workflows, and automations.',
      'Scheduling, lead operations, customer apps, and employee apps.',
      'Your software, your codebase, your roadmap.'
    ],
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Custom internal tools and CRM',
    proofHeading: 'When this is the right fit',
    proofItems: [
      'Your team already has a working process, but it is scattered across spreadsheets, messages, and disconnected SaaS tools.',
      'You need one system for lead capture, conversion, scheduling, operations, customer visibility, or employee workflows.',
      'You want a system that can keep running internally today and potentially become a sellable product later.'
    ],
    deliverablesHeading: 'What we can build',
    deliverables: [
      'Custom CRM, pipeline, lead management, and follow-up workflows.',
      'Scheduling, dispatch, financial workflows, admin dashboards, and reporting.',
      'Customer portals, employee apps, APIs, databases, and integrations with the tools you already use.'
    ],
    fitHeading: 'Built for',
    fitItems: [
      'SMB operators replacing fragile spreadsheets and manual handoffs.',
      'Startups that need operational software before hiring a full product team.',
      'Founders who see an internal system as a future product, marketplace, or vertical SaaS.'
    ],
    sections: [
      {
        title: 'More than a CRM',
        description:
          'CRM is often the entry point, but the real value is the complete operating layer around it.',
        items: [
          'Lead capture, qualification, conversion, and follow-up routines.',
          'Scheduling, task assignment, route or service workflows, and status visibility.',
          'Customer-facing app surfaces and employee tools connected to the same backend.'
        ]
      },
      {
        title: 'Built to match how your company actually works',
        description:
          'We map the workflow first, then build the screens, database, permissions, automations, and release path around the real operation.',
        items: [
          'Discovery call, workflow map, and clear acceptance criteria before implementation.',
          'Weekly demos so your team can correct priorities while the system is being built.',
          'Clean handoff with repos, credentials, runbooks, and support after launch.'
        ]
      }
    ],
    pricing: {
      label: 'Introductory monthly rate',
      title: 'Current introductory rate: USD 2,000/month',
      description:
        'Limited-time pricing for new engagements. If you join at this rate, it stays fixed for your account while the engagement remains active.',
      highlights: [
        'No upfront payment before work begins.',
        'Month-to-month engagement with no lock-in.',
        'Design, backend, frontend, database, integrations, and release support included in the same team.'
      ],
      note: 'Final scope still depends on complexity, security needs, and required integrations, but the introductory monthly rate is locked for clients who start under this offer.'
    },
    finalNote: {
      title: 'Your internal system can become a business asset',
      description:
        'Some companies start by solving their own operational problem and later turn that system into a product for customers, partners, or even competitors in the same vertical. We can help you build with that path in mind from the beginning.'
    }
  },
  monthlyPod: {
    key: 'monthlyPod',
    slug: getLandingSlug('en', 'monthlyPod'),
    badge: 'Month-to-month dedicated development team',
    title: 'Dedicated development team with month-to-month control',
    intro:
      'Use TG Apps as a dedicated software team for internal tools, mobile apps, backend, integrations, and release management. No retainers, no penalties, and no long notice periods.',
    heroHighlights: [
      'One execution team for backend, frontend, mobile, data, integrations, and releases.',
      'Monthly engagement with no long-term lock-in.',
      'Useful when hiring is too slow but the roadmap cannot wait.'
    ],
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Month-to-month dedicated development team',
    proofHeading: 'How this model works',
    proofItems: [
      'Introductory rate: USD 2,000/mo, fixed while the engagement remains active.',
      'Cancel any month with no penalties or hidden transition fees.',
      'Monthly billing, no upfront payment, and runbooks plus handoff docs delivered continuously.'
    ],
    deliverablesHeading: 'Included in the team',
    deliverables: [
      'Kanban-based execution with backend, frontend, database, internal tools, and mobile in parallel.',
      'Loom updates plus weekly demos in Teams, Jira, Linear, Notion, or your stack.',
      'Bug triage within 24 hours and weekend standby during launch windows.'
    ],
    fitHeading: 'Best fit',
    fitItems: [
      'Companies that need speed without full-time hiring.',
      'Teams that need release reliability and production support.',
      'Agencies, startups, and SMBs that want predictable shipping velocity every week.'
    ],
    sections: [
      {
        title: 'A practical alternative to hiring before you are ready',
        description:
          'This model works when you need software execution now but do not want to commit to multiple full-time roles before the work has stabilized.',
        items: [
          'Plan, build, demo, release, and support in one monthly engagement.',
          'Keep scope visible through weekly demos, decision logs, and handoff documentation.',
          'Scale up, pause, or transition without long cancellation windows.'
        ]
      }
    ],
    pricing: EN_INTRODUCTORY_PRICING
  },
  zeroUpfront: {
    key: 'zeroUpfront',
    slug: getLandingSlug('en', 'zeroUpfront'),
    badge: 'Zero upfront custom software development',
    title: 'Zero upfront custom software development with contract-first delivery',
    intro:
      'Finance-friendly setup for startups and SMBs: sign contract and NDA first, then build internal tools, apps, dashboards, CRM workflows, and integrations without paying upfront before work begins.',
    heroHighlights: [
      'Contract and NDA before implementation starts.',
      'No upfront payment before work begins.',
      'Built for custom software, not only app screens.'
    ],
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'Zero upfront custom software development',
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
    ],
    sections: [
      {
        title: 'Lower risk without lowering execution quality',
        description:
          'Zero upfront should not mean vague scope or weak process. It works only when the project starts with clear terms and clear acceptance criteria.',
        items: [
          'Define the first deliverable, risks, dependencies, and approvals before sprint one.',
          'Start with the operating system your business needs: CRM, dashboard, app, portal, backend, or integration.',
          'Continue month to month only while the partnership remains useful for your business.'
        ]
      }
    ],
    pricing: EN_INTRODUCTORY_PRICING
  },
  llmRagIntegrations: {
    key: 'llmRagIntegrations',
    slug: getLandingSlug('en', 'llmRagIntegrations'),
    badge: 'AI integrations for CRM and internal tools',
    title: 'AI and LLM integrations for CRM, internal tools, apps, and business workflows',
    intro:
      'Production-ready AI and LLM integrations for CRM, internal tools, dashboards, support workflows, operations software, mobile apps, and web products, delivered with guardrails, observability, and release coverage.',
    heroHighlights: [
      'AI features connected to real business data and workflows.',
      'Prompt, context, fallback, and admin controls documented.',
      'Built for production software, not isolated demos.'
    ],
    ctaLabel: 'Schedule a discovery call',
    ctaSubject: 'AI integrations for CRM and internal tools',
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
    ],
    sections: [
      {
        title: 'AI inside the workflow, not beside it',
        description:
          'Useful AI features need context, permissions, fallback behavior, monitoring, and an interface that fits the operation.',
        items: [
          'Connect AI to CRM records, support history, knowledge bases, files, dashboards, or operational data.',
          'Create admin controls for prompts, thresholds, model choices, indexing, and review workflows.',
          'Build mobile, web, or dashboard surfaces where users can act on the output.'
        ]
      },
      {
        title: 'Production guardrails from the beginning',
        description:
          'The risk is not only whether the model answers. The risk is whether the feature behaves safely inside your business process.',
        items: [
          'Fallback paths for low-confidence answers, missing data, or restricted actions.',
          'Logs and observability for prompts, responses, latency, costs, and user feedback.',
          'Release checklists so AI features can ship without surprising the operations team.'
        ]
      }
    ],
    pricing: EN_INTRODUCTORY_PRICING,
    finalNote: {
      title: 'AI should make the existing system more useful',
      description:
        'The strongest AI integrations usually improve a CRM, internal tool, support flow, dashboard, or customer app that already carries business context.'
    }
  }
};

const PT_CONTENT: LandingContentByLocale = {
  customSoftwareSmbs: {
    key: 'customSoftwareSmbs',
    slug: getLandingSlug('pt', 'customSoftwareSmbs'),
    badge: 'Software sob medida para operacoes SMB',
    title: 'Software sob medida para empresas que cresceram alem de planilhas e ferramentas desconectadas',
    intro:
      'A TG Apps constrói CRM, ferramentas internas, dashboards, automacoes, portais, apps de equipe, apps mobile, APIs e integracoes para empresas que precisam de software adaptado ao jeito real da operacao.',
    heroHighlights: [
      'Substitua planilhas, handoffs manuais e SaaS desconectados.',
      'Construa CRM, agendamento, operacao de leads, dashboards e portais.',
      'Lance com um time cobrindo design, backend, frontend, mobile e release.'
    ],
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Software sob medida para empresas',
    proofHeading: 'Quando empresas nos procuram',
    proofItems: [
      'O time perde tempo porque dados de clientes, agenda, financeiro e operacao vivem em lugares separados.',
      'Softwares prontos ajudam uma parte do fluxo, mas criam atalhos manuais no restante da operacao.',
      'A empresa precisa de um sistema operacional para o processo, nao de mais uma assinatura desconectada.'
    ],
    deliverablesHeading: 'O que podemos construir',
    deliverables: [
      'CRM sob medida, gestao de leads, follow-up e visibilidade de pipeline.',
      'Agendamento, despacho, dashboards administrativos, fluxos financeiros, portais de cliente e apps de equipe.',
      'APIs, bancos de dados, automacoes, integracoes de IA e apps mobile conectados a mesma camada operacional.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Empresas de servico, operacoes de campo, agencias, negocios locais e B2B SMBs com complexidade operacional real.',
      'Donos que conhecem o fluxo do negocio, mas precisam de um time tecnico para transformar isso em software.',
      'Empresas que querem possuir, evoluir e talvez transformar seu sistema em produto vertical no futuro.'
    ],
    sections: [
      {
        title: 'Software em torno da operacao, nao o contrario',
        description:
          'O objetivo nao e forcar sua empresa dentro de um CRM generico. O objetivo e modelar o processo e construir o sistema em torno dele.',
        items: [
          'Mapear captacao de leads, conversao, agenda, entrega de servico, cobranca e relatorios antes da implementacao.',
          'Definir papeis, permissoes, status, automacoes, notificacoes e dashboards a partir do fluxo real.',
          'Entregar demos semanais para operadores validarem o software enquanto ele esta sendo construido.'
        ]
      },
      {
        title: 'Sistema interno hoje, ativo de negocio amanhã',
        description:
          'Um sistema interno forte pode virar mais do que infraestrutura operacional. Em alguns mercados, pode se tornar produto vendido ou licenciado.',
        items: [
          'Construir a primeira versao para seu time mantendo abertas as opcoes de produto.',
          'Separar fluxo especifico da empresa de logica reutilizavel quando fizer sentido.',
          'Desenhar dados, permissoes e interfaces pensando em futuros clientes, parceiros ou unidades.'
        ]
      }
    ],
    pricing: PT_INTRODUCTORY_PRICING,
    finalNote: {
      title: 'O melhor software SMB geralmente nasce dentro da operacao',
      description:
        'Os sistemas mais fortes surgem de pressao operacional real: follow-up perdido, dados desconectados, agendamento lento, planilhas frageis e times que precisam de uma fonte unica de verdade.'
    }
  },
  customSoftwareStartups: {
    key: 'customSoftwareStartups',
    slug: getLandingSlug('pt', 'customSoftwareStartups'),
    badge: 'Software sob medida para startups',
    title: 'Software sob medida para startups que precisam entregar produto sem montar um time completo primeiro',
    intro:
      'A TG Apps ajuda fundadores e times de startup a entregar MVPs, apps mobile, backend, dashboards, ferramentas internas, integracoes de IA e iteracoes de produto com um time de execucao e cadencia semanal.',
    heroHighlights: [
      'MVP, app mobile, backend, dashboard e suporte de lancamento.',
      'Demos semanais, escopo claro e entrega pensada para producao.',
      'Util quando voce precisa de tracao antes de contratar um time completo.'
    ],
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Software sob medida para startups',
    proofHeading: 'Quando startups usam esse modelo',
    proofItems: [
      'O fundador precisa de um produto funcionando, nao de mais uma apresentacao estrategica.',
      'A startup precisa de app, backend, painel admin, integracoes e release em um parceiro so.',
      'O roadmap ainda esta evoluindo, entao a entrega precisa ser estruturada sem ficar engessada.'
    ],
    deliverablesHeading: 'O que podemos entregar',
    deliverables: [
      'MVPs, apps mobile, web apps, dashboards administrativos, APIs, bancos de dados e portais.',
      'Iteracoes de feature, onboarding, pagamentos, IA, analytics e ferramentas operacionais.',
      'Suporte de lancamento, preparacao para app stores, monitoramento, triage de bugs e documentacao de handoff.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Fundadores validando produto antes de contratar engenharia permanente.',
      'Startups substituindo freelancers fragmentados ou ciclos lentos de agencia.',
      'Operadores transformando um fluxo interno validado em produto vendavel ou SaaS vertical.'
    ],
    sections: [
      {
        title: 'Da ideia para um produto que pessoas conseguem usar',
        description:
          'A fase inicial precisa de velocidade, mas ainda precisa de estrutura suficiente para evitar software descartavel.',
        items: [
          'Clarificar primeira versao util, criterios de aceite e riscos tecnicos antes do primeiro sprint.',
          'Construir app, backend, banco e controles administrativos juntos para o produto operar apos o lancamento.',
          'Usar demos semanais para decidir o que cortar, melhorar ou priorizar em seguida.'
        ]
      },
      {
        title: 'Construido para iterar depois do lancamento',
        description:
          'Startups raramente precisam de escopo congelado. Elas precisam de um sistema de entrega que aprenda sem perder controle tecnico.',
        items: [
          'Planejar releases graduais, feedback loops, analytics e suporte de producao.',
          'Manter repositorios, ambientes, documentacao e credenciais organizados desde o comeco.',
          'Sair do MVP para a versao dois sem reconstruir toda a fundacao.'
        ]
      }
    ],
    pricing: PT_INTRODUCTORY_PRICING,
    finalNote: {
      title: 'Uma startup nao precisa sempre de um time grande para comecar a entregar',
      description:
        'Um time de execucao focado pode cobrir produto, app, backend, integracoes e release ate o negocio ter sinal suficiente para escalar engenharia de forma deliberada.'
    }
  },
  androidIosSmb: {
    key: 'androidIosSmb',
    slug: getLandingSlug('pt', 'androidIosSmb'),
    badge: 'Desenvolvimento de apps mobile para startups e empresas',
    title: 'Desenvolvimento de apps Android, iOS, Flutter e React Native para startups e empresas',
    intro:
      'Time mobile liderado pelo fundador para startups e empresas que precisam de entrega nativa ou cross-platform com backend, banco de dados, dashboard, release support, contrato primeiro, sem adiantamento e demos semanais.',
    heroHighlights: [
      'Android, iOS, Flutter ou React Native.',
      'Backend, banco, dashboard admin e suporte de release incluidos.',
      'Para lancamento de startups e operacoes SMB que precisam de app real, nao so prototipo.'
    ],
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Desenvolvimento de apps mobile para startups e empresas',
    proofHeading: 'Provas antes do kickoff',
    proofItems: [
      'D-U-N-S 651029828 (emitido em 28/01/2026).',
      'Contrato + NDA assinados antes do inicio do desenvolvimento.',
      'Call inicial em 1 dia útil e primeira entrega em cerca de 5 dias.'
    ],
    deliverablesHeading: 'O que o time entrega',
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
    ],
    sections: [
      {
        title: 'Mobile junto com o sistema por tras',
        description:
          'A maioria dos apps de negocio falha quando a tela mobile e tratada separada do backend, banco, dashboard e processo de release.',
        items: [
          'Apps de cliente, apps de equipe, apps de campo, booking apps, dashboards e portais admin.',
          'APIs, autenticacao, pagamentos, notificacoes, arquivos, analytics e relatorios operacionais.',
          'Preparacao para App Store e Play Store com releases graduais e suporte apos o lancamento.'
        ]
      },
      {
        title: 'Util para produto e operacao',
        description:
          'A mesma capacidade mobile pode sustentar um produto de startup, um app de cliente para SMB ou um fluxo interno de employee app.',
        items: [
          'Lancar um produto novo com experiencia mobile-first.',
          'Dar aos clientes um portal em vez de conversas soltas e planilhas.',
          'Dar aos employees um app de tarefas, agenda, status ou campo conectado ao mesmo backend.'
        ]
      }
    ],
    pricing: PT_INTRODUCTORY_PRICING,
    finalNote: {
      title: 'O app e apenas uma parte da entrega',
      description:
        'Para gerar resultado comercial, o app mobile precisa andar junto com backend, dashboard operacional, processo de release e modelo de suporte.'
    }
  },
  customCrmInternalTools: {
    key: 'customCrmInternalTools',
    slug: getLandingSlug('pt', 'customCrmInternalTools'),
    badge: 'Ferramentas internas, CRM e sistemas de negocio',
    title: 'CRM, ferramentas internas e sistemas sob medida para sua operacao',
    intro:
      'Se sua empresa cresceu alem das planilhas, ferramentas desconectadas ou softwares que so atendem parte do processo, a TG Apps desenha e constrói o sistema operacional por tras da sua proxima fase.',
    heroHighlights: [
      'CRM, dashboards, workflows e automacoes sob medida.',
      'Agendamento, operacao de leads, apps de cliente e apps de equipe.',
      'Seu software, seu codigo, seu roadmap.'
    ],
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'CRM e ferramentas internas sob medida',
    proofHeading: 'Quando faz sentido',
    proofItems: [
      'Seu time ja tem um processo que funciona, mas ele esta espalhado entre planilhas, mensagens e SaaS desconectados.',
      'Voce precisa de um sistema para captacao, conversao, agendamento, operacao, visibilidade do cliente ou fluxo da equipe.',
      'Voce quer um sistema que rode internamente agora e possa virar produto vendavel depois.'
    ],
    deliverablesHeading: 'O que podemos construir',
    deliverables: [
      'CRM, pipeline, gestao de leads e rotinas de follow-up sob medida.',
      'Agendamento, despacho, fluxos financeiros, dashboards administrativos e relatorios.',
      'Portais de cliente, apps de equipe, APIs, bancos de dados e integracoes com ferramentas ja usadas.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Operacoes SMB substituindo planilhas frageis e handoffs manuais.',
      'Startups que precisam de software operacional antes de contratar um time de produto completo.',
      'Fundadores que enxergam um sistema interno como futuro produto, marketplace ou SaaS vertical.'
    ],
    sections: [
      {
        title: 'Mais do que um CRM',
        description:
          'CRM costuma ser a porta de entrada, mas o valor real esta na camada operacional completa em volta dele.',
        items: [
          'Captacao, qualificacao, conversao e follow-up de leads.',
          'Agendamento, atribuicao de tarefas, fluxo de servico e visibilidade de status.',
          'Apps para clientes e ferramentas para equipe conectados ao mesmo backend.'
        ]
      },
      {
        title: 'Construido para o jeito que sua empresa realmente opera',
        description:
          'Mapeamos o fluxo primeiro e depois construimos telas, banco, permissoes, automacoes e release em torno da operacao real.',
        items: [
          'Discovery call, mapa de fluxo e criterios de aceite antes da implementacao.',
          'Demos semanais para ajustar prioridades enquanto o sistema esta sendo construído.',
          'Handoff com repositorios, credenciais, runbooks e suporte apos o lancamento.'
        ]
      }
    ],
    pricing: {
      label: 'Valor mensal introdutorio',
      title: 'Valor atual: US$ 2.000/mês',
      description:
        'Preco por tempo limitado para novos contratos. Quem entrar nessa faixa mantém o valor fixo enquanto o engajamento permanecer ativo.',
      highlights: [
        'Sem pagamento antecipado antes do trabalho começar.',
        'Contrato mes a mes, sem lock-in.',
        'Design, backend, frontend, banco de dados, integracoes e suporte de release no mesmo time.'
      ],
      note: 'O escopo final ainda depende da complexidade, seguranca e integracoes necessarias, mas o valor mensal introdutorio fica travado para clientes que iniciarem nessa oferta.'
    },
    finalNote: {
      title: 'Seu sistema interno pode virar ativo de negocio',
      description:
        'Algumas empresas comecam resolvendo a propria operacao e depois transformam esse sistema em produto para clientes, parceiros ou ate concorrentes do mesmo mercado. Podemos construir desde o inicio considerando esse caminho.'
    }
  },
  monthlyPod: {
    key: 'monthlyPod',
    slug: getLandingSlug('pt', 'monthlyPod'),
    badge: 'Time dedicado mensal com liberdade de saída',
    title: 'Time dedicado de desenvolvimento com controle mês a mês',
    intro:
      'Use a TG Apps como time dedicado para ferramentas internas, apps mobile, backend, integrações e gerenciamento de release. Sem retainer, sem multa e sem prazo de aviso longo.',
    heroHighlights: [
      'Um time de execucao para backend, frontend, mobile, dados, integracoes e releases.',
      'Contrato mensal sem lock-in de longo prazo.',
      'Util quando contratar esta lento, mas o roadmap nao pode esperar.'
    ],
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Time mensal de desenvolvimento',
    proofHeading: 'Como esse modelo funciona',
    proofItems: [
      'Valor introdutório de US$ 2.000/mês, fixo enquanto o engajamento permanecer ativo.',
      'Cancelamento em qualquer mês sem multa ou taxa surpresa.',
      'Cobrança mensal, sem adiantamento, e runbooks com handoff entregues continuamente.'
    ],
    deliverablesHeading: 'O que já vem com o time',
    deliverables: [
      'Execução em Kanban com backend, frontend, banco, ferramentas internas e mobile em paralelo.',
      'Atualizações em Loom e demo semanal no Teams, Jira, Linear, Notion ou no seu stack.',
      'Triage de bugs em até 24h e cobertura de fim de semana em janelas de lançamento.'
    ],
    fitHeading: 'Melhor encaixe',
    fitItems: [
      'Empresas que precisam acelerar sem contratar time fixo completo.',
      'Times que precisam de confiabilidade operacional e suporte de produção.',
      'Startups e agências que querem previsibilidade de entrega toda semana.'
    ],
    sections: [
      {
        title: 'Alternativa pratica a contratar antes da hora',
        description:
          'Esse modelo funciona quando voce precisa de execucao agora, mas nao quer assumir varias contratacoes full-time antes do trabalho estabilizar.',
        items: [
          'Planejar, construir, demonstrar, publicar e dar suporte em um engajamento mensal.',
          'Manter escopo visivel com demos semanais, log de decisoes e documentacao de handoff.',
          'Escalar, pausar ou transicionar sem janelas longas de cancelamento.'
        ]
      }
    ],
    pricing: PT_INTRODUCTORY_PRICING
  },
  zeroUpfront: {
    key: 'zeroUpfront',
    slug: getLandingSlug('pt', 'zeroUpfront'),
    badge: 'Desenvolvimento de software sem adiantamento',
    title: 'Desenvolvimento de software sob medida sem pagamento antecipado com contrato primeiro',
    intro:
      'Modelo comercial amigavel para startups e empresas: contrato e NDA primeiro, depois desenvolvimento de ferramentas internas, apps, dashboards, CRM e integracoes sem pagamento antecipado antes do trabalho comecar.',
    heroHighlights: [
      'Contrato e NDA antes da implementacao.',
      'Sem pagamento antecipado antes do trabalho comecar.',
      'Pensado para software sob medida, nao apenas telas de app.'
    ],
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Desenvolvimento de software sem adiantamento',
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
    ],
    sections: [
      {
        title: 'Menos risco sem baixar a qualidade da execucao',
        description:
          'Sem adiantamento nao pode significar escopo vago ou processo fraco. O modelo so funciona com termos claros e criterios de aceite claros.',
        items: [
          'Definir primeira entrega, riscos, dependencias e aprovacoes antes do primeiro sprint.',
          'Comecar pelo sistema que a empresa precisa: CRM, dashboard, app, portal, backend ou integracao.',
          'Continuar mes a mes somente enquanto a parceria fizer sentido para o negocio.'
        ]
      }
    ],
    pricing: PT_INTRODUCTORY_PRICING
  },
  llmRagIntegrations: {
    key: 'llmRagIntegrations',
    slug: getLandingSlug('pt', 'llmRagIntegrations'),
    badge: 'Integrações de IA para CRM e ferramentas internas',
    title: 'Integrações de IA e LLM para CRM, ferramentas internas, apps e fluxos de negocio',
    intro:
      'Integrações de IA e LLM prontas para producao em CRM, ferramentas internas, dashboards, atendimento, operacao, apps mobile e produtos web, com guardrails, observabilidade e cobertura de release.',
    heroHighlights: [
      'Features de IA conectadas a dados e fluxos reais do negocio.',
      'Prompt, contexto, fallback e controles administrativos documentados.',
      'Construido para producao, nao para demos isoladas.'
    ],
    ctaLabel: 'Agendar discovery call',
    ctaSubject: 'Integracoes de IA para CRM e ferramentas internas',
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
    ],
    sections: [
      {
        title: 'IA dentro do fluxo, nao ao lado dele',
        description:
          'Features uteis de IA precisam de contexto, permissoes, fallback, monitoramento e interface que encaixe na operacao.',
        items: [
          'Conectar IA a registros de CRM, historico de suporte, bases de conhecimento, arquivos, dashboards ou dados operacionais.',
          'Criar controles administrativos para prompts, limites, modelos, indexacao e revisao.',
          'Construir telas mobile, web ou dashboard onde usuarios possam agir a partir da resposta.'
        ]
      },
      {
        title: 'Guardrails de producao desde o inicio',
        description:
          'O risco nao e so o modelo responder. O risco e a feature se comportar bem dentro do processo da empresa.',
        items: [
          'Fallback para baixa confianca, dados ausentes ou acoes restritas.',
          'Logs e observabilidade de prompts, respostas, latencia, custos e feedback dos usuarios.',
          'Checklist de release para publicar IA sem surpreender o time operacional.'
        ]
      }
    ],
    pricing: PT_INTRODUCTORY_PRICING,
    finalNote: {
      title: 'IA deve tornar o sistema existente mais util',
      description:
        'As melhores integracoes de IA geralmente melhoram um CRM, ferramenta interna, fluxo de suporte, dashboard ou app que ja carrega contexto do negocio.'
    }
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
