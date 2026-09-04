import type { Locale } from '../i18n/translations';

export type CampaignLandingPageKey =
  | 'adsAppRescue'
  | 'adsCustomCrm'
  | 'adsMobileApps'
  | 'adsAiIntegrations'
  | 'adsStartupSoftware'
  | 'adsOperationalSoftware';

export interface CampaignLandingPageLink {
  label: string;
  href: string;
}

export interface CampaignLandingPageContent {
  key: CampaignLandingPageKey;
  badge: string;
  title: string;
  intro: string;
  painHeading: string;
  painItems: string[];
  offerHeading: string;
  offerItems: string[];
  proofHeading: string;
  proofDescription: string;
  proofItems: string[];
  processHeading: string;
  processItems: string[];
  notFitHeading: string;
  notFitItems: string[];
  ctaLabel: string;
  ctaSubject: string;
  ctaNote: string;
  relatedHeading: string;
  relatedLinks: CampaignLandingPageLink[];
}

type CampaignContentByLocale = Record<CampaignLandingPageKey, CampaignLandingPageContent>;

const EN_CONTENT: CampaignContentByLocale = {
  adsAppRescue: {
    key: 'adsAppRescue',
    badge: 'App rescue for stalled products',
    title: 'Your app is almost done. We help finish and launch it.',
    intro:
      'Tg Apps helps founders and startup teams recover unfinished mobile and web products, fix release blockers, reconnect backend pieces, and define one practical first milestone before long-term commitment.',
    painHeading: 'This is usually the situation',
    painItems: [
      'The app exists, but the build, backend, store release, or critical flow is blocking launch.',
      'A previous developer, freelancer, or agency left the product without a clear next step.',
      'You need a technical read on what to rescue, what to rebuild, and what can ship first.'
    ],
    offerHeading: 'What we can do first',
    offerItems: [
      'Audit the existing codebase, build setup, app store status, backend dependencies, and release risks.',
      'Choose one first milestone, such as restoring the build, fixing a core flow, reconnecting an API, or preparing store submission.',
      'Deliver a working demo, written notes, and a practical continuation plan for month-to-month product delivery.'
    ],
    proofHeading: 'What we review in the first call',
    proofDescription:
      'For an unfinished app, the first call separates quick fixes, launch-critical work, backend and store blockers, and the cleanest path to one useful demo.',
    proofItems: [
      'A comparable app rescue path for unfinished apps, broken builds, backend gaps, and store release blockers.',
      'How we separate quick fixes, launch-critical work, and month-to-month product continuity.',
      'The first milestone, acceptance criteria, required access, risks, and next recommendation for your app.'
    ],
    processHeading: 'How the first milestone works',
    processItems: [
      'Scope: we review what exists, what is blocked, required access, and acceptance criteria.',
      'Build: we focus on the smallest useful release path instead of rewriting everything blindly.',
      'Demo: you see the result, risks, and next recommendation before continuing month to month.'
    ],
    notFitHeading: 'Good fit when',
    notFitItems: [
      'You have an app, prototype, or codebase that needs a practical launch path.',
      'You can provide the required access and product context for a scoped first milestone.',
      'You want a working demo and continuation plan before committing long term.'
    ],
    ctaLabel: 'Request a first milestone review',
    ctaSubject: 'App rescue first milestone',
    ctaNote: 'No upfront payment for the agreed first milestone if it is not delivered.',
    relatedHeading: 'Useful internal links',
    relatedLinks: [
      { label: 'Full App Rescue page', href: '/app-rescue-and-launch-acceleration/' },
      { label: 'First Milestone Guarantee', href: '/first-milestone-guarantee/' },
      { label: 'Company profile', href: '/company-profile/' },
      { label: 'Due diligence', href: '/due-diligence/' }
    ]
  },
  adsCustomCrm: {
    key: 'adsCustomCrm',
    badge: 'Custom CRM and internal tools',
    title: 'Still running your business on spreadsheets and disconnected tools?',
    intro:
      'Tg Apps builds custom CRM, dashboards, workflow automation, customer portals, employee apps, and internal tools for teams that need software shaped around the real operation.',
    painHeading: 'The pain we usually see',
    painItems: [
      'Leads, schedules, customer history, documents, and follow-up live in separate spreadsheets or message threads.',
      'Generic SaaS tools help part of the process but force manual workarounds around the rest.',
      'Managers lack one reliable dashboard for pipeline, operations, workload, and exceptions.'
    ],
    offerHeading: 'What we can build first',
    offerItems: [
      'One focused internal workflow, such as lead intake, scheduling, customer history, reporting, or admin approvals.',
      'A custom CRM layer with roles, records, statuses, reminders, dashboards, and integrations.',
      'A month-to-month delivery path that can expand into portals, apps, automations, and operational software.'
    ],
    proofHeading: 'What we review in the first call',
    proofDescription:
      'For CRM and internal tools, the first call maps the workflow, where manual work creates friction, and which focused operating layer would create visible value first.',
    proofItems: [
      'The current workflow across spreadsheets, messages, forms, customer records, and approvals.',
      'Which process should become the first source of truth: leads, scheduling, reporting, or admin operations.',
      'The first milestone, acceptance criteria, required access, risks, and next recommendation for your operation.'
    ],
    processHeading: 'How we reduce risk',
    processItems: [
      'Map the current workflow and where manual work is costing time or visibility.',
      'Pick one valuable process to ship first, with clear acceptance criteria.',
      'Demo weekly, adjust priorities, and keep the client able to own the system.'
    ],
    notFitHeading: 'Good fit when',
    notFitItems: [
      'A standard CRM does not cover the real workflow without too many manual workarounds.',
      'Your team can define process rules, roles, and operational priorities.',
      'You have an internal owner available to validate the first workflow.'
    ],
    ctaLabel: 'Map my CRM milestone',
    ctaSubject: 'Custom CRM first milestone',
    ctaNote: 'Start with one useful workflow before committing to a broader platform.',
    relatedHeading: 'Useful internal links',
    relatedLinks: [
      { label: 'Full CRM and internal tools page', href: '/custom-crm-and-internal-tools/' },
      { label: 'Custom software for SMBs', href: '/custom-software-for-smbs/' },
      { label: 'Delivery models', href: '/delivery-models/' },
      { label: 'Due diligence', href: '/due-diligence/' }
    ]
  },
  adsMobileApps: {
    key: 'adsMobileApps',
    badge: 'Mobile app delivery',
    title: 'Build, ship, and keep your mobile app moving.',
    intro:
      'Tg Apps supports Android, iOS, Flutter, React Native, backend, dashboards, App Store and Play Store release, maintenance, and continuous product delivery for founders and growing teams.',
    painHeading: 'Where mobile projects get stuck',
    painItems: [
      'The app idea is clear, but backend, admin dashboard, release process, and store submission are unresolved.',
      'A prototype exists, but it is not stable enough for customers, investors, or internal users.',
      'The team needs mobile delivery plus backend and release support in one practical loop.'
    ],
    offerHeading: 'What we can deliver',
    offerItems: [
      'Android and iOS implementation with backend, database, authentication, analytics, and admin tooling when needed.',
      'Store preparation, release checklist, staged rollout, bug triage, and maintenance after launch.',
      'A first milestone that proves one user flow, one release blocker, or one backend-connected feature.'
    ],
    proofHeading: 'What we review in the first call',
    proofDescription:
      'For mobile app work, the first call identifies the user flow, backend and admin dependencies, release path, and what should be proven before broader development.',
    proofItems: [
      'The first mobile flow that needs to work end to end for customers, staff, or internal users.',
      'Backend, environment, store, analytics, monitoring, and support requirements around that flow.',
      'The first milestone, acceptance criteria, required access, risks, and next recommendation for your app.'
    ],
    processHeading: 'How we work',
    processItems: [
      'Define one mobile-first flow that should work end to end.',
      'Build the app, backend, and release checklist together instead of separating them into disconnected vendors.',
      'Demo the result and continue month to month if the delivery model fits.'
    ],
    notFitHeading: 'Good fit when',
    notFitItems: [
      'You need mobile delivery connected to backend, release, and product continuity.',
      'You can provide required accounts, APIs, product decisions, or existing code when needed.',
      'You want to prove one real app flow before expanding the roadmap.'
    ],
    ctaLabel: 'Scope my mobile milestone',
    ctaSubject: 'Mobile app first milestone',
    ctaNote: 'We focus on the smallest useful mobile delivery first.',
    relatedHeading: 'Useful internal links',
    relatedLinks: [
      { label: 'Full mobile app development page', href: '/mobile-app-development-for-startups-and-smbs/' },
      { label: 'Backend and integrations', href: '/backend-api-development-and-integrations/' },
      { label: 'App Rescue', href: '/app-rescue-and-launch-acceleration/' },
      { label: 'Company profile', href: '/company-profile/' }
    ]
  },
  adsAiIntegrations: {
    key: 'adsAiIntegrations',
    badge: 'AI inside real workflows',
    title: 'Add AI to CRM, internal tools, and business workflows.',
    intro:
      'Tg Apps integrates LLM features into real products: extraction, classification, summaries, support triage, document search, assistants, automations, and human-review workflows.',
    painHeading: 'The wrong way to buy AI',
    painItems: [
      'Generic AI demos do not connect to your CRM, permissions, data model, workflow, or approval process.',
      'The team needs automation, but cannot risk blind AI output changing business records without review.',
      'Documents, messages, tickets, or leads need extraction and classification inside an existing product.'
    ],
    offerHeading: 'What we can implement',
    offerItems: [
      'Document extraction, lead classification, CRM summaries, support triage, and internal assistants.',
      'RAG and search workflows connected to the knowledge stack, files, or APIs the client already trusts.',
      'Human review, fallback states, observability, and clear limits so AI becomes a controlled product feature.'
    ],
    proofHeading: 'What we review in the first call',
    proofDescription:
      'A useful AI milestone is usually narrow: one workflow with repetitive reading, extraction, classification, or summarization, connected to real records with clear review rules.',
    proofItems: [
      'We do not sell AI as magic. We put LLMs inside product flows with constraints, logging, and fallback behavior.',
      'Whether AI should automate, assist, classify, summarize, search, or stay out of the workflow.',
      'The first milestone, data boundaries, human review points, risks, and next recommendation for your product.'
    ],
    processHeading: 'How we control the risk',
    processItems: [
      'Choose one workflow and define what the AI is allowed to read, write, suggest, or block.',
      'Add evaluation rules, fallback behavior, audit-friendly logs, and human approval where needed.',
      'Ship a focused integration before expanding to broader automation.'
    ],
    notFitHeading: 'Good fit when',
    notFitItems: [
      'You have a real workflow where reading, classification, summarization, search, or triage is repetitive.',
      'Your team can define data access, privacy boundaries, and human review rules.',
      'You want AI as a controlled product feature with acceptance criteria and monitoring.'
    ],
    ctaLabel: 'Scope my AI workflow',
    ctaSubject: 'AI integration first milestone',
    ctaNote: 'AI is treated as a product feature, not a buzzword.',
    relatedHeading: 'Useful internal links',
    relatedLinks: [
      { label: 'Full AI integrations page', href: '/ai-integrations-for-crm-and-internal-tools/' },
      { label: 'CRM and internal tools', href: '/custom-crm-and-internal-tools/' },
      { label: 'Backend and integrations', href: '/backend-api-development-and-integrations/' },
      { label: 'Due diligence', href: '/due-diligence/' }
    ]
  },
  adsStartupSoftware: {
    key: 'adsStartupSoftware',
    badge: 'Startup product delivery',
    title: 'Turn one startup milestone into working software.',
    intro:
      'Tg Apps helps founders build MVPs, existing products, backend systems, dashboards, mobile apps, AI integrations, and release-ready features through a clear first milestone and month-to-month continuity.',
    painHeading: 'Where founders usually need help',
    painItems: [
      'The product direction exists, but the first useful release is still too broad or undefined.',
      'A prototype needs backend, analytics, admin tooling, app release, or integration work before it can be used.',
      'The founder needs a delivery partner, not just disconnected design, development, and deployment tasks.'
    ],
    offerHeading: 'What we can start with',
    offerItems: [
      'Define one product milestone with acceptance criteria, required access, and a realistic first delivery.',
      'Build the useful slice across app, web, backend, dashboard, integrations, or release support.',
      'Show the result, document the next steps, and continue monthly only if the delivery model fits.'
    ],
    proofHeading: 'What we review in the first call',
    proofDescription:
      'For early products, the strongest first milestone is often not the full MVP. It is one working flow that proves the team can turn product context into usable software, then iterate from real feedback.',
    proofItems: [
      'Which product flow should become the first useful release instead of trying to build everything at once.',
      'How the first milestone reduces execution risk before a broader roadmap.',
      'Whether full ownership, one product area, embedded support, or co-delivery fits the current stage.'
    ],
    processHeading: 'The delivery loop',
    processItems: [
      'Scope the smallest useful milestone.',
      'Build with direct communication, written updates, and practical technical decisions.',
      'Demo, hand off, and decide whether to continue month to month.'
    ],
    notFitHeading: 'Good fit when',
    notFitItems: [
      'You want one working product milestone before expanding the roadmap.',
      'You need app, web, backend, dashboard, integration, or release execution in one delivery loop.',
      'You can make product decisions and provide the access needed to move.'
    ],
    ctaLabel: 'Define my first milestone',
    ctaSubject: 'Startup software first milestone',
    ctaNote: 'Useful for MVP, existing product, app rescue, backend, or release execution.',
    relatedHeading: 'Useful internal links',
    relatedLinks: [
      { label: 'Custom software for startups', href: '/custom-software-for-startups/' },
      { label: 'First Milestone Guarantee', href: '/first-milestone-guarantee/' },
      { label: 'How we fit your team', href: '/how-we-fit-your-team/' },
      { label: 'Delivery models', href: '/delivery-models/' }
    ]
  },
  adsOperationalSoftware: {
    key: 'adsOperationalSoftware',
    badge: 'Operational software for growing teams',
    title: 'Replace manual operations with software your team can actually use.',
    intro:
      'Tg Apps builds operational software for growing companies: internal systems, CRM, dashboards, automation, portals, mobile workflows, backend APIs, and integrations around the way work really happens.',
    painHeading: 'The operational bottleneck',
    painItems: [
      'The company is growing, but work still depends on spreadsheets, WhatsApp, manual status updates, daily exceptions, and scattered tools.',
      'Managers cannot see pipeline, workload, exceptions, service status, or customer context in one place.',
      'Existing software covers part of the workflow but leaves the most important operational rules outside the system.'
    ],
    offerHeading: 'What we can build',
    offerItems: [
      'A focused operating layer for one critical workflow, then expansion into CRM, dashboards, portals, and automations.',
      'Role-based access, records, statuses, reminders, reporting, API integrations, and mobile-friendly workflows.',
      'Clean handoff with repositories, credentials, runbooks, and support after launch.'
    ],
    proofHeading: 'What we review in the first call',
    proofDescription:
      'Operational projects work best when the first milestone is tied to a business bottleneck. For example: one workflow moves from spreadsheet and manual messages into records, status changes, responsible owners, and a dashboard managers can trust.',
    proofItems: [
      'The workflow, users, records, permissions, and handoffs that create the most operational friction.',
      'Which operational flow should become usable first before expanding the platform.',
      'The first milestone, acceptance criteria, required access, risks, and next recommendation for your team.'
    ],
    processHeading: 'How we start',
    processItems: [
      'Map the workflow, users, records, permissions, and highest-friction handoffs.',
      'Define one first milestone that creates visible operational value.',
      'Ship, demo, document, and continue month to month if the fit is right.'
    ],
    notFitHeading: 'Good fit when',
    notFitItems: [
      'Manual work is costing visibility, speed, or consistency across the operation.',
      'A spreadsheet or off-the-shelf tool no longer handles the real business rules.',
      'Someone inside the business can validate workflows and edge cases.'
    ],
    ctaLabel: 'Map my operational workflow',
    ctaSubject: 'Operational software first milestone',
    ctaNote: 'Best for companies with real process complexity, manual handoffs, and a clear operational owner.',
    relatedHeading: 'Useful internal links',
    relatedLinks: [
      { label: 'Custom software for SMBs', href: '/custom-software-for-smbs/' },
      { label: 'CRM and internal tools', href: '/custom-crm-and-internal-tools/' },
      { label: 'Backend and integrations', href: '/backend-api-development-and-integrations/' },
      { label: 'Company profile', href: '/company-profile/' }
    ]
  }
};

const PT_CONTENT: CampaignContentByLocale = {
  adsAppRescue: {
    ...EN_CONTENT.adsAppRescue,
    badge: 'Resgate de app travado',
    title: 'Seu app está quase pronto. A gente ajuda a finalizar e publicar.',
    intro:
      'A Tg Apps ajuda fundadores e startups a recuperar produtos mobile e web inacabados, corrigir bloqueios de release, reconectar backend e definir uma primeira entrega prática antes de assumir uma continuidade mensal.',
    painHeading: 'Normalmente o cenário é este',
    painItems: [
      'O app existe, mas build, backend, loja ou fluxo crítico estão impedindo o lançamento.',
      'Um dev, freelancer ou agência anterior deixou o produto sem próximo passo claro.',
      'Você precisa entender o que vale resgatar, o que vale reconstruir e o que pode ir para produção primeiro.'
    ],
    offerHeading: 'O que podemos fazer primeiro',
    offerItems: [
      'Auditar código existente, build, situação nas lojas, dependências de backend e riscos de release.',
      'Escolher uma primeira entrega: restaurar build, corrigir fluxo crítico, reconectar API ou preparar publicação.',
      'Entregar uma demonstração funcional, notas técnicas e um plano prático de continuidade mês a mês.'
    ],
    proofHeading: 'O que avaliamos na primeira conversa',
    proofDescription:
      'Para um app inacabado, a primeira conversa separa correções rápidas, trabalho crítico de lançamento, bloqueios de backend e loja, e o caminho mais limpo para uma demo útil.',
    proofItems: [
      'Um caminho comparável de resgate para apps inacabados, builds quebrados, lacunas de backend e bloqueios de publicação.',
      'Como separamos correções rápidas, trabalho crítico de lançamento e continuidade mês a mês.',
      'Primeiro marco, critérios de aceite, acessos necessários, riscos e próxima recomendação para o seu app.'
    ],
    processHeading: 'Como funciona a primeira entrega',
    processItems: [
      'Escopo: revisamos o que existe, o que trava, acessos necessários e critérios de aceite.',
      'Build: focamos no menor caminho útil de release, sem reescrever tudo no escuro.',
      'Demo: você vê o resultado, os riscos e a recomendação de próximo passo antes de continuar.'
    ],
    notFitHeading: 'Bom encaixe quando',
    notFitItems: [
      'Você tem app, protótipo ou código que precisa de um caminho prático de lançamento.',
      'Você consegue fornecer os acessos e o contexto de produto necessários para uma primeira entrega com escopo claro.',
      'Você quer ver uma entrega funcionando e ter um plano de continuidade antes de assumir um compromisso maior.'
    ],
    ctaLabel: 'Solicitar análise da primeira entrega',
    ctaSubject: 'Primeiro marco para resgate de app',
    ctaNote: 'Sem pagamento antecipado se a primeira entrega combinada não for concluída.',
    relatedHeading: 'Links úteis',
    relatedLinks: [
      { label: 'Página completa de resgate de app', href: '/pt-br/finalizar-e-publicar-app-rapido/' },
      { label: 'Garantia da Primeira Entrega', href: '/pt-br/garantia-da-primeira-entrega/' },
      { label: 'Perfil da empresa', href: '/pt-br/perfil-da-empresa/' },
      { label: 'Due diligence', href: '/pt-br/due-diligence/' }
    ]
  },
  adsCustomCrm: {
    ...EN_CONTENT.adsCustomCrm,
    badge: 'CRM e ferramentas internas',
    title: 'Sua operação ainda depende de planilhas e ferramentas desconectadas?',
    intro:
      'A Tg Apps cria CRM sob medida, dashboards, automações, portais, apps de equipe e ferramentas internas para empresas que precisam de software adaptado à operação real.',
    painHeading: 'A dor que normalmente aparece',
    painItems: [
      'Leads, agenda, histórico de clientes, documentos e follow-up ficam em planilhas ou conversas separadas.',
      'Ferramentas prontas ajudam parte do processo, mas deixam muito trabalho manual em volta.',
      'Gestores não têm um painel confiável para pipeline, operação, carga de trabalho e exceções.'
    ],
    offerHeading: 'O que podemos construir primeiro',
    offerItems: [
      'Um fluxo interno focado, como entrada de leads, agenda, histórico de cliente, relatórios ou aprovações.',
      'Uma camada de CRM com permissões, registros, status, lembretes, dashboards e integrações.',
      'Um caminho mês a mês que pode evoluir para portais, apps, automações e software operacional.'
    ],
    proofHeading: 'O que avaliamos na primeira conversa',
    proofDescription:
      'Para CRM e ferramentas internas, a primeira conversa mapeia o fluxo, onde o trabalho manual cria atrito e qual camada operacional focada geraria valor visível primeiro.',
    proofItems: [
      'O fluxo atual entre planilhas, mensagens, formulários, registros de clientes e aprovações.',
      'Qual processo deve virar a primeira fonte confiável: leads, agenda, relatórios ou operação administrativa.',
      'Primeiro marco, critérios de aceite, acessos necessários, riscos e próxima recomendação para a sua operação.'
    ],
    processHeading: 'Como reduzimos risco',
    processItems: [
      'Mapeamos o processo atual e onde o trabalho manual custa tempo ou visibilidade.',
      'Escolhemos um processo valioso para entregar primeiro, com critérios claros.',
      'Demonstramos semanalmente, ajustamos prioridades e mantemos o cliente capaz de operar o sistema.'
    ],
    notFitHeading: 'Bom encaixe quando',
    notFitItems: [
      'Um CRM pronto não cobre o fluxo real sem muitas adaptações manuais.',
      'Seu time consegue definir regras de processo, papéis e prioridades operacionais.',
      'Existe uma pessoa interna disponível para validar o primeiro fluxo.'
    ],
    ctaLabel: 'Planejar a primeira entrega do CRM',
    ctaSubject: 'Primeira entrega de CRM sob medida',
    ctaNote: 'Comece com um fluxo útil antes de assumir uma plataforma maior.',
    relatedHeading: 'Links úteis',
    relatedLinks: [
      { label: 'Página completa de CRM e ferramentas internas', href: '/pt-br/crm-e-ferramentas-internas-sob-medida/' },
      { label: 'Software sob medida para empresas', href: '/pt-br/software-sob-medida-para-empresas/' },
      { label: 'Modelos de atuação', href: '/pt-br/modelos-de-atuacao/' },
      { label: 'Due diligence', href: '/pt-br/due-diligence/' }
    ]
  },
  adsMobileApps: {
    ...EN_CONTENT.adsMobileApps,
    badge: 'Entrega de apps mobile',
    title: 'Construa, publique e mantenha seu app mobile evoluindo.',
    intro:
      'A Tg Apps apoia Android, iOS, Flutter, React Native, backend, dashboards, publicação na App Store e Play Store, manutenção e continuidade de produto para fundadores e empresas em crescimento.',
    painHeading: 'Onde projetos mobile travam',
    painItems: [
      'A ideia do app está clara, mas backend, painel administrativo, release e publicação ainda não estão resolvidos.',
      'Existe um protótipo, mas ele ainda não está estável para clientes, investidores ou uso interno.',
      'O time precisa de app mobile, backend e suporte de release no mesmo ciclo prático.'
    ],
    offerHeading: 'O que podemos entregar',
    offerItems: [
      'Implementação Android e iOS com backend, banco, autenticação, analytics e painel quando necessário.',
      'Preparação de loja, checklist de release, publicação gradual, triagem de bugs e manutenção pós-lançamento.',
      'Uma primeira entrega que prova um fluxo de usuário, um bloqueio de release ou uma feature conectada ao backend.'
    ],
    proofHeading: 'O que avaliamos na primeira conversa',
    proofDescription:
      'Para trabalho mobile, a primeira conversa identifica o fluxo de usuário, dependências de backend e admin, caminho de release e o que precisa ser provado antes de expandir o desenvolvimento.',
    proofItems: [
      'O primeiro fluxo mobile que precisa funcionar de ponta a ponta para clientes, equipe ou usuários internos.',
      'Dependências de backend, ambiente, lojas, analytics, monitoramento e suporte em volta desse fluxo.',
      'Primeiro marco, critérios de aceite, acessos necessários, riscos e próxima recomendação para o seu app.'
    ],
    processHeading: 'Como trabalhamos',
    processItems: [
      'Definimos um fluxo mobile-first que precisa funcionar de ponta a ponta.',
      'Construímos app, backend e checklist de release juntos, sem separar tudo em fornecedores desconectados.',
      'Demonstramos o resultado e continuamos mês a mês se o modelo fizer sentido.'
    ],
    notFitHeading: 'Bom encaixe quando',
    notFitItems: [
      'Você precisa de entrega mobile conectada a backend, release e continuidade de produto.',
      'Você consegue fornecer contas, APIs, decisões de produto ou código existente quando necessário.',
      'Você quer provar um fluxo real do app antes de expandir o roadmap.'
    ],
    ctaLabel: 'Planejar a primeira entrega do app',
    ctaSubject: 'Primeiro marco de app mobile',
    ctaNote: 'Focamos primeiro na menor entrega mobile útil.',
    relatedHeading: 'Links úteis',
    relatedLinks: [
      { label: 'Página completa de desenvolvimento mobile', href: '/pt-br/desenvolvimento-de-apps-mobile-para-startups-e-empresas/' },
      { label: 'Backend e integrações', href: '/pt-br/desenvolvimento-backend-apis-e-integracoes/' },
      { label: 'Resgate de app', href: '/pt-br/finalizar-e-publicar-app-rapido/' },
      { label: 'Perfil da empresa', href: '/pt-br/perfil-da-empresa/' }
    ]
  },
  adsAiIntegrations: {
    ...EN_CONTENT.adsAiIntegrations,
    badge: 'IA dentro de fluxos reais',
    title: 'Adicione IA ao CRM, ferramentas internas e fluxos do negócio.',
    intro:
      'A Tg Apps integra recursos de LLM em produtos reais: extração, classificação, resumos, triagem de atendimento, busca em documentos, assistentes, automações e revisão humana.',
    painHeading: 'O jeito errado de comprar IA',
    painItems: [
      'Demos genéricas de IA não conectam com CRM, permissões, dados, processo ou aprovação.',
      'O time quer automação, mas não pode deixar IA alterar registros de negócio sem revisão.',
      'Documentos, mensagens, tickets ou leads precisam de extração e classificação dentro de um produto existente.'
    ],
    offerHeading: 'O que podemos implementar',
    offerItems: [
      'Extração de documentos, classificação de leads, resumos de CRM, triagem de suporte e assistentes internos.',
      'RAG e busca conectados à stack de conhecimento, arquivos ou APIs que o cliente já usa.',
      'Revisão humana, fallback, observabilidade e limites claros para IA funcionar como feature controlada.'
    ],
    proofHeading: 'O que avaliamos na primeira conversa',
    proofDescription:
      'Um marco útil de IA normalmente é estreito: pegar um fluxo repetitivo de leitura, extração, classificação ou resumo, conectar a registros reais e manter revisão humana onde o risco do negócio exige.',
    proofItems: [
      'Não vendemos IA como mágica. Colocamos LLMs em fluxos de produto com limites, logs e fallback.',
      'Se a IA deve automatizar, assistir, classificar, resumir, buscar informação ou ficar fora do fluxo.',
      'Primeiro marco, limites de dados, pontos de revisão humana, riscos e próxima recomendação para o produto.'
    ],
    processHeading: 'Como controlamos o risco',
    processItems: [
      'Escolhemos um fluxo e definimos o que a IA pode ler, escrever, sugerir ou bloquear.',
      'Adicionamos critérios de avaliação, fallback, logs e aprovação humana quando necessário.',
      'Entregamos uma integração focada antes de expandir a automação.'
    ],
    notFitHeading: 'Bom encaixe quando',
    notFitItems: [
      'Existe um fluxo real em que leitura, classificação, resumo, busca ou triagem se repetem.',
      'Seu time consegue definir acesso a dados, limites de privacidade e regras de revisão humana.',
      'Você quer IA como feature controlada, com critérios de aceite e monitoramento.'
    ],
    ctaLabel: 'Definir meu fluxo com IA',
    ctaSubject: 'Primeiro marco de integração com IA',
    ctaNote: 'IA tratada como feature de produto, não como buzzword.',
    relatedHeading: 'Links úteis',
    relatedLinks: [
      { label: 'Página completa de integrações com IA', href: '/pt-br/integracoes-ia-para-crm-e-ferramentas-internas/' },
      { label: 'CRM e ferramentas internas', href: '/pt-br/crm-e-ferramentas-internas-sob-medida/' },
      { label: 'Backend e integrações', href: '/pt-br/desenvolvimento-backend-apis-e-integracoes/' },
      { label: 'Due diligence', href: '/pt-br/due-diligence/' }
    ]
  },
  adsStartupSoftware: {
    ...EN_CONTENT.adsStartupSoftware,
    badge: 'Entrega de produto para startups',
    title: 'Transforme a primeira entrega da sua startup em software funcionando.',
    intro:
      'A Tg Apps ajuda fundadores a construir MVPs, produtos existentes, backend, dashboards, apps mobile, integrações com IA e features prontas para release com uma primeira entrega clara e continuidade mês a mês.',
    painHeading: 'Onde fundadores normalmente precisam de apoio',
    painItems: [
      'A direção do produto existe, mas a primeira entrega útil ainda está ampla ou indefinida.',
      'Um protótipo precisa de backend, analytics, painel, release ou integração antes de ser usado.',
      'O fundador precisa de um parceiro de entrega, não tarefas soltas de design, desenvolvimento e deploy.'
    ],
    offerHeading: 'Por onde podemos começar',
    offerItems: [
      'Definir um marco de produto com critérios de aceite, acessos necessários e entrega realista.',
      'Construir o recorte útil em app, web, backend, dashboard, integrações ou suporte de release.',
      'Mostrar resultado, documentar próximos passos e continuar mensalmente só se o modelo fizer sentido.'
    ],
    proofHeading: 'O que avaliamos na primeira conversa',
    proofDescription:
      'Em produtos iniciais, a melhor primeira entrega muitas vezes não é o MVP inteiro. É um fluxo funcionando que mostra a capacidade do time de transformar contexto de produto em software utilizável e evoluir com feedback real.',
    proofItems: [
      'Qual fluxo de produto deve virar a primeira entrega útil em vez de tentar construir tudo de uma vez.',
      'Como a primeira entrega reduz risco de execução antes de um roadmap maior.',
      'Se entrega completa, uma área de produto, apoio embarcado ou co-delivery combina com o estágio atual.'
    ],
    processHeading: 'Ciclo de entrega',
    processItems: [
      'Definir a menor entrega útil.',
      'Construir com comunicação direta, updates escritos e decisões técnicas práticas.',
      'Demonstrar, transferir e decidir se continua mês a mês.'
    ],
    notFitHeading: 'Bom encaixe quando',
    notFitItems: [
      'Você quer uma entrega funcionando antes de expandir o roadmap.',
      'Você precisa de app, web, backend, dashboard, integração ou release no mesmo ciclo de entrega.',
      'Você consegue tomar decisões de produto e fornecer os acessos necessários para avançar.'
    ],
    ctaLabel: 'Definir minha primeira entrega',
    ctaSubject: 'Primeira entrega de software para startup',
    ctaNote: 'Útil para MVP, produto existente, resgate de app, backend ou release.',
    relatedHeading: 'Links úteis',
    relatedLinks: [
      { label: 'Software sob medida para startups', href: '/pt-br/software-sob-medida-para-startups/' },
      { label: 'Garantia da Primeira Entrega', href: '/pt-br/garantia-da-primeira-entrega/' },
      { label: 'Como nos encaixamos no seu time', href: '/pt-br/como-nos-encaixamos-no-seu-time/' },
      { label: 'Modelos de atuação', href: '/pt-br/modelos-de-atuacao/' }
    ]
  },
  adsOperationalSoftware: {
    ...EN_CONTENT.adsOperationalSoftware,
    badge: 'Software operacional para empresas',
    title: 'Troque operação manual por software que seu time realmente usa.',
    intro:
      'A Tg Apps constrói software operacional para empresas em crescimento: sistemas internos, CRM, dashboards, automação, portais, fluxos mobile, APIs e integrações alinhadas ao trabalho real.',
    painHeading: 'O gargalo operacional',
    painItems: [
      'A empresa cresce, mas ainda depende de planilhas, WhatsApp, atualizações manuais e ferramentas espalhadas.',
      'Gestores não enxergam pipeline, carga de trabalho, exceções, status de serviço ou contexto do cliente em um lugar.',
      'O software atual cobre parte do fluxo, mas deixa as regras mais importantes fora do sistema.'
    ],
    offerHeading: 'O que podemos construir',
    offerItems: [
      'Uma camada operacional focada em um fluxo crítico, depois expansão para CRM, dashboards, portais e automações.',
      'Permissões, registros, status, lembretes, relatórios, integrações por API e fluxos mobile-friendly.',
      'Handoff limpo com repositórios, credenciais, runbooks e suporte após lançamento.'
    ],
    proofHeading: 'O que avaliamos na primeira conversa',
    proofDescription:
      'Projetos operacionais funcionam melhor quando a primeira entrega está ligada a um gargalo do negócio. Por exemplo: um fluxo sai de planilha e mensagens manuais para registros, mudanças de status, responsáveis e um dashboard confiável.',
    proofItems: [
      'Fluxo, usuários, registros, permissões e pontos de passagem que criam mais atrito operacional.',
      'Qual fluxo operacional deve ficar utilizável primeiro antes de expandir a plataforma.',
      'Primeiro marco, critérios de aceite, acessos necessários, riscos e próxima recomendação para o seu time.'
    ],
    processHeading: 'Como começamos',
    processItems: [
      'Mapeamos fluxo, usuários, registros, permissões e passagens manuais com mais atrito.',
      'Definimos uma primeira entrega que cria valor operacional visível.',
      'Entregamos, demonstramos, documentamos e continuamos mês a mês se fizer sentido.'
    ],
    notFitHeading: 'Bom encaixe quando',
    notFitItems: [
      'Trabalho manual está custando visibilidade, velocidade ou consistência na operação.',
      'Planilha ou ferramenta pronta não cobre mais as regras reais do negócio.',
      'Existe alguém interno para validar fluxos e exceções.'
    ],
    ctaLabel: 'Mapear meu fluxo operacional',
    ctaSubject: 'Primeiro marco de software operacional',
    ctaNote: 'Melhor para empresas com complexidade real de processo e dono operacional claro.',
    relatedHeading: 'Links úteis',
    relatedLinks: [
      { label: 'Software sob medida para empresas', href: '/pt-br/software-sob-medida-para-empresas/' },
      { label: 'CRM e ferramentas internas', href: '/pt-br/crm-e-ferramentas-internas-sob-medida/' },
      { label: 'Backend e integrações', href: '/pt-br/desenvolvimento-backend-apis-e-integracoes/' },
      { label: 'Perfil da empresa', href: '/pt-br/perfil-da-empresa/' }
    ]
  }
};

export const campaignLandingContentByLocale: Record<Locale, CampaignContentByLocale> = {
  en: EN_CONTENT,
  pt: PT_CONTENT
};

export const getCampaignLandingContent = (
  locale: Locale,
  key: CampaignLandingPageKey
): CampaignLandingPageContent => campaignLandingContentByLocale[locale][key];
