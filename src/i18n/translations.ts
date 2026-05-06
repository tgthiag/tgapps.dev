export type Locale = 'en' | 'pt';

export interface NavigationItem {
  id: string;
  label: string;
}

export interface TranslationSchema {
  header: {
    navItems: NavigationItem[];
    contactCta: string;
    contactId: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    stats: { label: string }[];
    primaryCta: string;
    secondaryCta: string;
  };
  socialProof: {
    heading: string;
    description: string;
  };
  firstMilestone: {
    badge: string;
    heading: string;
    description: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  services: {
    badge: string;
    headingLine1: string;
    headingHighlight: string;
    description: string;
    pillars?: string[];
    partnershipHeading?: string;
    partnershipDescription?: string;
    gridHeading?: string;
    gridDescription?: string;
    processHeading?: string;
    processDescription?: string;
    processLabel?: string;
    process?: {
      title: string;
      description: string;
      highlights: string[];
    }[];
    items: {
      title: string;
      subtitle?: string;
      description: string;
      features: string[];
      cta: string;
    }[];
    bottomCta: {
      title: string;
      description: string;
      button: string;
    };
  };
  about: {
    badge: string;
    headingLine1: string;
    headingHighlight: string;
    description: string;
    timelineHeading: string;
    paragraphs: string[];
    missionHeading: string;
    missionDescription: string;
    clientHeading: string;
    clientTypes: {
      title: string;
      description: string;
    }[];
    valuesHeading: string;
    values: {
      title: string;
      description: string;
    }[];
    statsHeading: string;
    stats: {
      number: string;
      label: string;
    }[];
    passionTitle: string;
    passionDescription: string;
  };
  contact: {
    badge: string;
    headingLine1: string;
    headingHighlight: string;
    description: string;
    infoHeading: string;
    info: {
      title: string;
      value: string;
      description: string;
    }[];
    whatsappCta?: {
      title: string;
      description: string;
    };
    formHeading: string;
    formDescription: string;
    callout: {
      title: string;
      description: string;
      bullets: string[];
    };
    successTitle: string;
    successMessage: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      guaranteeLabel: string;
      guaranteePlaceholder: string;
      firstMilestoneLabel: string;
      firstMilestonePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      policy: string;
    };
    services: string[];
    guaranteeOptions: string[];
  };
  footer: {
    description: string;
    navigationHeading?: string;
    navigation?: NavigationItem[];
    servicesHeading?: string;
    services?: string[];
    contactHeading?: string;
    contact?: {
      emailLabel: string;
      phoneLabel: string;
      location: string;
    };
    cta: string;
    bottom: {
      copyright: string;
      privacy: string;
      terms: string;
    };
  };
}

export const translations: Record<Locale, TranslationSchema> = {
  en: {
    header: {
      navItems: [
        { id: 'inicio', label: 'Overview' },
        { id: 'what-you-get', label: 'Capabilities' },
        { id: 'process', label: 'Process' },
        { id: 'cases', label: 'Proof' },
        { id: 'plans', label: 'Plans' },
        { id: 'contato', label: 'Contact' }
      ],
      contactCta: 'Book a call',
      contactId: 'contato',
      languageLabel: 'Language'
    },
    hero: {
      badge: 'Custom software · Dev as a Service',
      titleLine1: 'Your app, built',
      titleHighlight: 'and shipped.',
      titleLine2: '',
      subtitle:
        'Got an idea, a stalled app, or an internal workflow that needs software? Tg Apps builds and ships mobile, web, CRM, backend, and AI with weekly demos, no upfront payment, and a First Milestone Guarantee.',
      stats: [
        { label: 'D-U-N-S® 651029828' },
        { label: 'Growth plan: USD 2,000/mo' },
        { label: 'First milestone guarantee' },
        { label: 'Zero upfront' }
      ],
      primaryCta: 'Start your first milestone',
      secondaryCta: 'See how it works'
    },
    socialProof: {
      heading: 'Trusted by founders and operators',
      description:
        'A few brands and operators we support across custom software delivery, product execution, and ongoing operations.'
    },
    firstMilestone: {
      badge: 'Real first delivery',
      heading: 'See working delivery before moving forward',
      description:
        'We align one small, objective first delivery, build it, and show it working. If the agreed scope is not delivered, that step is not invoiced.',
      cards: [
        {
          title: 'First Milestone Guarantee',
          description: 'Evaluate real delivery before continuing.'
        },
        {
          title: '7-Day Proof Sprint',
          description: 'A small, practical first delivery designed to be demonstrated within 7 business days.'
        },
        {
          title: 'Month-to-month after that',
          description: 'If it makes sense, continue month to month. If not, pause or stop without long lock-in.'
        }
      ]
    },
    services: {
      badge: 'Custom software capabilities',
      headingLine1: 'What we build',
      headingHighlight: 'when your product or operation needs to move',
      description:
        'Use us for a complete build, an app rescue, or a focused product push. Mobile, CRM, backend, AI, integrations, infrastructure, and release support stay connected inside one accountable software team.',
      pillars: [
        'Mobile-first delivery for Android, iOS, Play Store, App Store, private MDM, and phased releases.',
        'Operational systems built around the way the business actually works, not around generic SaaS limits.',
        'Clear scope, weekly demos, release support, documentation, and handoff when applicable.'
      ],
      partnershipHeading: '',
      partnershipDescription: '',
      gridHeading: 'Use us for the problem you actually have',
      gridDescription:
        'Most clients need one of six outcomes: a mobile app, a real internal system, a rescue, a backend, an AI workflow, or a product ready for more than one market.',
      processHeading: 'How we collaborate in three tight loops',
      processDescription:
        'Lean structure: align, ship, support. Each loop keeps decision-makers involved without draining their calendar.',
      processLabel: 'Loop',
      process: [
        {
          title: 'Scope the first milestone',
          description: 'Start with one useful deliverable, clear acceptance criteria, and the access needed to build it.',
          highlights: [
            'Free 30-45 minute call within one business day.',
            'Statement of work plus D-U-N-S contract signed digitally.',
            'First milestone scope, demo criteria, required access, and timeline agreed before kickoff.'
          ]
        },
        {
          title: 'Build the proof sprint',
          description: 'Design, engineering, and release management run together while you see progress early.',
          highlights: [
            'First milestone usually designed for a 7 business day proof sprint when the scope allows it.',
            'Blue or green releases, staged rollouts, and monitoring included.',
            'Work inside your repos or ours with clean documentation.'
          ]
        },
        {
          title: 'Demo, continue, or hand off',
          description: 'You judge a working demo, then continue month to month, pause, stop, or hand off the work.',
          highlights: [
            'Runbooks, dashboards, and credentials handed over.',
            'Bug triage within 24 hours with weekend standby for launches.',
            'If the agreed scope is not delivered, that step is not invoiced.'
          ]
        }
      ],
      items: [
        {
          title: 'Mobile apps',
          subtitle: 'Android, iOS, stores, private releases',
          description:
            'Native or cross-platform apps built for real users, real stores, and real release constraints. Play Store, App Store, private MDM, phased rollout, monitoring, and support can be handled by us.',
          features: [
            'Android and iOS product flows connected to backend, database, analytics, and admin panels.',
            'Release preparation, store assets, privacy links, review fixes, and staged rollout support.',
            'Practical app architecture your team can keep evolving after handoff.'
          ],
          cta: 'Plan my app'
        },
        {
          title: 'CRM, dashboards and internal tools',
          subtitle: 'Scheduling, lead operations, portals',
          description:
            'Replace spreadsheets and disconnected tools with custom CRM, dashboards, workflow automation, scheduling, lead operations, portals, and admin systems built around the way your company works.',
          features: [
            'Lead capture, conversion, follow-up, and operational visibility.',
            'Permissions, data models, reports, and integrations designed from the real workflow.',
            'Customer portals and employee tools connected to the same backend.'
          ],
          cta: 'Plan my system'
        },
        {
          title: 'App rescue and release execution',
          subtitle: 'Audit, fix, ship, iterate',
          description:
            'Take unfinished apps, rough prototypes, outdated builds, or stalled codebases and turn them into usable products with a clear release path, backend, database, store release, and iteration plan defined together.',
          features: [
            'Audit the current app, codebase, stores, backend, and deployment blockers.',
            'Fix, rebuild, or complete the core flows required by the agreed release plan.',
            'Publish when the plan calls for it, validate with users when applicable, monitor results, and keep improving.'
          ],
          cta: 'Finish my app'
        },
        {
          title: 'Backend, APIs and integrations',
          subtitle: 'Data, auth, billing, infrastructure',
          description:
            'Build the operational layer behind your app: APIs, databases, auth, billing, logistics, CRM integrations, dashboards, AWS infrastructure, runbooks, and release checklists.',
          features: [
            'REST or GraphQL plus Supabase, Firebase, MySQL, MariaDB, or dedicated Postgres.',
            'Payment, logistics, CRM, analytics, email, and internal workflow integrations.',
            'Infrastructure and documentation designed so your team can own the stack after handoff.'
          ],
          cta: 'Scope my integration'
        },
        {
          title: 'AI and LLM integrations',
          subtitle: 'Useful workflows, guardrails, documentation',
          description:
            'Add LLM workflows to real products and internal tools without turning the app into a demo. We connect AI to the search, vector, CRM, or knowledge stack your team already trusts.',
          features: [
            'Structured outputs, approval flows, logs, fallback behavior, and practical guardrails.',
            'AI copilots, document workflows, CRM assistance, search, triage, and automation layers.',
            'Documentation that separates model behavior, business rules, and human review.'
          ],
          cta: 'Add AI to my product'
        },
        {
          title: 'Born-global apps',
          subtitle: 'Multilingual, cultural, international-ready',
          description:
            'Build apps that can serve more than one market from day one, with contextual translation, locale-aware UX, app store preparation, and content structure ready for global iteration.',
          features: [
            'Multilingual onboarding, notifications, support flows, and product copy.',
            'Translation adapted to user intent, tone, examples, and cultural context.',
            'Analytics, release checklists, fallback language behavior, and market-by-market iteration.'
          ],
          cta: 'Plan my global app'
        }
      ],
      bottomCta: {
        title: 'Need your app built without hiring a full product team?',
        description:
          'Send us the current app, repo, spreadsheet, process, or product idea. We respond in under one business day with blockers, risks, next steps, or an honest referral.',
        button: 'Plan the build'
      }
    },
    about: {
      badge: 'Proof and operating model',
      headingLine1: 'Trusted delivery partner',
      headingHighlight: 'for founders and operators',
      description:
        'We are a bilingual studio in São Paulo working with startups, SMB operators, agencies, and IT leaders who need dependable custom software delivery.',
      timelineHeading: 'What working with us feels like',
      paragraphs: [
        'You always speak with someone able to make decisions. We keep the team compact so context, accountability, and product sense stay intact from kickoff to handoff.',
        'We adopt your stack: Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub, or any channel you already use, or bring ours. Expect written notes plus short Loom videos three times per week and a weekly demo with timing, risks, and budgets.',
        'Because product, engineering, release, and ops stay together, you do not need extra vendors for monitoring, analytics, or training. When we pause, you keep every repo, design file, and runbook.'
      ],
      missionHeading: 'How we protect your roadmap',
      missionDescription:
        'Signed agreement, D-U-N-S record, Brazilian LLC paperwork, and zero upfront payment keep finance and legal happy without slowing delivery.',
      clientHeading: 'Direct leadership, lean bureaucracy',
      clientTypes: [],
      valuesHeading: 'Safeguards baked into every contract',
      values: [
        {
          title: 'D-U-N-S® 651029828',
          description: 'CIAL Dun and Bradstreet verified on Jan 28 2026 so you can add us to procurement portals without delays.'
        },
        {
          title: 'Contract-first, zero upfront',
          description: 'Statement of work and NDA signed digitally before kickoff; invoices arrive only after we start shipping.'
        },
        {
          title: 'US timezone coverage',
          description: '9 a.m. to 6 p.m. ET overlap with extended coverage during launches and incidents.'
        }
      ],
      statsHeading: 'How we operate',
      stats: [
        { number: '≤2 hours', label: 'Average weekday response time on your chosen channel or email.' },
        { number: '5 days', label: 'Average time from contract signature to first branch and design artifact.' },
        { number: 'Weekly demo', label: 'Live call or Loom update with risks, decisions, and metrics.' }
      ],
      passionTitle: 'D-U-N-S® 651029828',
      passionDescription:
        'Issued Jan 28 2026 by Dun and Bradstreet. Use the record for banking, marketplace, or vendor onboarding without extra paperwork.'
    },
    contact: {
      badge: 'Ready to start',
      headingLine1: 'Tell us what you need',
      headingHighlight: 'and get an honest read',
      description:
        'Fill the form or ping us on WhatsApp. We reply within one business day with a direct read on scope, budget, kickoff timing, blockers, and fit.',
      infoHeading: 'Direct channels',
      info: [
        {
          title: 'Email',
          value: 'support@tgapps.dev',
          description: 'Best for scopes, contracts, and procurement steps.'
        },
        {
          title: 'WhatsApp / Phone',
          value: '+55 11 97971-7703',
          description: 'Voice, SMS, or WhatsApp with US-friendly hours.'
        },
        {
          title: 'Operating base',
          value: 'São Paulo, Brazil · US overlap: ET/CT friendly',
          description: 'Remote software delivery for US and international clients.'
        }
      ],
      whatsappCta: {
        title: 'Prefer WhatsApp?',
        description: 'Open a direct chat with Tg Apps and tell us what you want to build.'
      },
      formHeading: 'Share a few details',
      formDescription: 'We only ask for what we need to reply with a plan and calendar.',
      callout: {
        title: 'What happens next',
        description: 'No spam or endless steps, just a tight process.',
        bullets: [
          'We reply within one business day with clarifying questions.',
          'We schedule a 30-45 minute call to align budgets, deadlines, and access.',
          'You receive the statement of work, onboarding checklist, and kickoff date.'
        ]
      },
      successTitle: 'Thanks for reaching out!',
      successMessage: 'We just received your note and will reply shortly.',
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        emailLabel: 'Work email',
        emailPlaceholder: 'you@company.com',
        phoneLabel: 'Phone or WhatsApp',
        phonePlaceholder: '+1 (555) 000-0000',
        serviceLabel: 'What do you need help with?',
        servicePlaceholder: 'Select an option',
        guaranteeLabel: 'How would you like to start?',
        guaranteePlaceholder: 'Select a starting point',
        firstMilestoneLabel: 'Useful first milestone',
        firstMilestonePlaceholder: 'Example: login flow, release blocker, dashboard screen, API endpoint, app store build, or rescue milestone.',
        messageLabel: 'Notes',
        messagePlaceholder: 'Tell us about platforms, deadlines, or blockers.',
        submit: 'Start the conversation',
        submitting: 'Opening email...',
        policy: 'We only use these details to contact you about this request.'
      },
      services: [
        'Mobile app development',
        'Custom CRM / internal tools',
        'App rescue / release execution',
        'Backend / API / integrations',
        'AI / LLM integration',
        'Born-global app',
        'Product discovery'
      ],
      guaranteeOptions: [
        'I want to start with a First Milestone Guarantee',
        'I want to discuss the full monthly plan',
        'I am not sure yet'
      ]
    },
    footer: {
      description:
        'Tg Apps builds and ships mobile apps, CRM, internal tools, backend, and AI integrations for founders and growing teams. Plans from USD 1,500/mo, no upfront, First Milestone Guarantee.',
      navigationHeading: 'Sections',
      navigation: [
        { id: 'inicio', label: 'Overview' },
        { id: 'what-you-get', label: 'Capabilities' },
        { id: 'process', label: 'Process' },
        { id: 'cases', label: 'Proof' },
        { id: 'plans', label: 'Plans' },
        { id: 'contato', label: 'Contact' }
      ],
      servicesHeading: 'Popular requests',
      services: [
        'App rescue and release execution',
        'Born-global apps',
        'Custom CRM and internal tools',
        'Business systems and dashboards',
        'Android + iOS builds',
        'Backend, APIs and integrations',
        'LLM integrations',
        'Release and store coverage'
      ],
      contactHeading: 'Contact',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 11 97971-7703',
        location: 'São Paulo · serving US and global clients'
      },
      cta: 'Schedule a discovery call',
      bottom: {
        copyright: '© {year} TG APPLICATIONS DESENVOLVIMENTO LTDA. All rights reserved.',
        privacy: 'Privacy',
        terms: 'Terms'
      }
    }
  },
  pt: {
    header: {
      navItems: [
        { id: 'inicio', label: 'Início' },
        { id: 'what-you-get', label: 'Serviços' },
        { id: 'process', label: 'Processo' },
        { id: 'cases', label: 'Provas' },
        { id: 'plans', label: 'Planos' },
        { id: 'contato', label: 'Contato' }
      ],
      contactCta: 'Fale com a gente',
      contactId: 'contato',
      languageLabel: 'Idioma'
    },
    hero: {
      badge: 'Software sob medida · time sob demanda',
      titleLine1: 'Seu app, construído',
      titleHighlight: 'e entregue.',
      titleLine2: '',
      subtitle:
        'Tem uma ideia, um app parado ou uma operação que precisa de software? A Tg Apps constrói mobile, web, CRM, backend e IA com demonstrações semanais, sem pagamento inicial e Garantia da Primeira Entrega.',
      stats: [
        { label: 'D-U-N-S® 651029828' },
        { label: 'Growth US$ 2.000/mês' },
        { label: 'Garantia da primeira entrega' },
        { label: 'Sem pagamento inicial' }
      ],
      primaryCta: 'Começar pela primeira entrega',
      secondaryCta: 'Ver como funciona'
    },
    socialProof: {
      heading: 'Confiança de fundadores e operadores',
      description:
        'Algumas marcas e operações que apoiamos em software sob medida, execução de produto e operação contínua.'
    },
    firstMilestone: {
      badge: 'Primeira entrega real',
      heading: 'Veja uma entrega funcionando antes de avançar',
      description:
        'Alinhamos uma primeira entrega pequena e objetiva, construímos e mostramos funcionando. Se o combinado não for entregue, essa etapa não é cobrada.',
      cards: [
        {
          title: 'Garantia da Primeira Entrega',
          description: 'Você avalia uma entrega real antes de continuar.'
        },
        {
          title: 'Sprint inicial de 7 dias',
          description: 'Uma primeira entrega pequena, prática e demonstrável, pensada para até 7 dias úteis quando o escopo permitir.'
        },
        {
          title: 'Depois, mês a mês',
          description: 'Se fizer sentido, seguimos mês a mês. Se não fizer, você pode pausar ou encerrar sem multa.'
        }
      ]
    },
      services: {
      badge: 'Capacidades de software sob medida',
      headingLine1: 'O que construímos',
      headingHighlight: 'quando seu produto ou operação precisa andar',
      description:
        'Conte com a Tg Apps para construir do zero, resgatar um app parado ou avançar uma parte específica do produto. Mobile, CRM, backend, IA, integrações, infraestrutura e deploy ficam conectados em um único time responsável.',
      pillars: [
        'Entrega com prioridade para mobile: Android, iOS, Play Store, App Store, distribuição interna e deploys graduais.',
        'Sistemas operacionais feitos para o jeito que a empresa realmente trabalha, não para limites de SaaS genérico.',
        'Escopo claro, demonstrações semanais, suporte de deploy, documentação e transferência técnica quando aplicável.'
      ],
      partnershipHeading: '',
      partnershipDescription: '',
      gridHeading: 'Use a gente para o problema real',
      gridDescription:
        'Normalmente o cliente precisa de um destes seis resultados: app mobile, sistema interno, resgate, backend, fluxo de IA ou produto pronto para mais de um mercado.',
      processHeading: 'Como trabalhamos em três ciclos',
      processDescription:
        'Estrutura enxuta: alinhamento, construção e suporte. Cada ciclo mantém decisores próximos sem roubar agenda.',
      processLabel: 'Ciclo',
      process: [
        {
          title: 'Escopo da primeira entrega',
          description: 'Começamos com uma entrega útil, critérios de aceite claros e acessos necessários para construir.',
          highlights: [
            'Conversa gratuita de 30 a 45 minutos em até 1 dia útil.',
            'Contrato e D-U-N-S assinados digitalmente.',
            'Escopo, critério da demonstração, acessos e prazo da primeira entrega combinados antes do início do projeto.'
          ]
        },
        {
          title: 'Construção da primeira entrega',
          description: 'Design, engenharia e deploy caminham juntos enquanto você acompanha o progresso desde cedo.',
          highlights: [
            'Primeira entrega normalmente desenhada para uma sprint inicial de até 7 dias úteis quando o escopo permite.',
            'Publicação azul/verde ou gradual com monitoramento incluído.',
            'Trabalhamos nos seus repositórios ou hospedamos por aqui.'
          ]
        },
        {
          title: 'Demonstração, continuidade ou transferência',
          description: 'Você avalia uma demonstração funcional, depois continua mês a mês, coloca em pausa, encerra ou recebe a transferência técnica.',
          highlights: [
            'Guias operacionais, dashboards e credenciais entregues ao seu time.',
            'Triagem em até 24 horas e plantão de deploys nos fins de semana.',
            'Se o combinado não for entregue, essa etapa não é cobrada.'
          ]
        }
      ],
      items: [
        {
          title: 'Apps mobile',
          subtitle: 'Android, iOS, lojas e publicações privadas',
          description:
            'Apps nativos ou multiplataforma feitos para usuários reais, lojas reais e regras reais de publicação. Play Store, App Store, distribuição interna, deploy gradual, monitoramento e suporte podem ficar com a gente.',
          features: [
            'Fluxos Android e iOS conectados a backend, banco de dados, analytics e painéis administrativos.',
            'Preparação de publicação, materiais de loja, links de privacidade, correções de revisão e deploy gradual.',
            'Arquitetura prática para seu time continuar evoluindo depois da transferência técnica.'
          ],
          cta: 'Planejar meu app'
        },
        {
          title: 'CRM, dashboards e ferramentas internas',
          subtitle: 'Agendamento, operação de leads e portais',
          description:
            'Substituímos planilhas e ferramentas desconectadas por CRM, dashboards, automações, agendamento, operação de leads, portais e sistemas administrativos feitos para o jeito que sua empresa trabalha.',
          features: [
            'Captação, conversão, follow-up e visibilidade operacional.',
            'Permissões, dados, relatórios e integrações desenhados a partir do fluxo real.',
            'Portais de cliente e ferramentas de equipe conectados ao mesmo backend.'
          ],
          cta: 'Planejar meu sistema'
        },
        {
          title: 'Resgate de app e execução de deploy',
          subtitle: 'Auditar, corrigir, publicar e iterar',
          description:
            'Pegamos apps inacabados, protótipos, builds antigas ou bases de código travadas e transformamos em produtos utilizáveis com caminho claro de deploy, backend, banco, publicação em lojas e plano de iteração definidos juntos.',
          features: [
            'Auditoria do app, código, lojas, backend e bloqueios de publicação.',
            'Correção, reconstrução ou finalização dos fluxos centrais exigidos pelo plano de deploy combinado.',
            'Publicação quando o plano pedir, validação com usuários quando aplicável, monitoramento e melhoria contínua.'
          ],
          cta: 'Finalizar meu app'
        },
        {
          title: 'Backend, APIs e integrações',
          subtitle: 'Dados, autenticação, cobrança e infraestrutura',
          description:
            'Construímos a camada operacional por trás do app: APIs, bancos, autenticação, cobrança, logística, integrações com CRM, dashboards, infraestrutura AWS, guias operacionais e checklists de deploy.',
          features: [
            'REST ou GraphQL com Supabase, Firebase, MySQL, MariaDB ou Postgres dedicado.',
            'Integrações com pagamentos, logística, CRM, analytics, email e fluxos internos.',
            'Infraestrutura e documentação pensadas para seu time assumir a base técnica depois da transferência.'
          ],
          cta: 'Escopar integração'
        },
        {
          title: 'Integrações de IA e LLM',
          subtitle: 'Fluxos úteis, controles e documentação',
          description:
            'Adicionamos fluxos de LLM a produtos e ferramentas reais sem transformar o app em uma vitrine sem uso real. Conectamos IA à busca, vetores, CRM ou base de conhecimento que o seu time já usa.',
          features: [
            'Saídas estruturadas, aprovação humana, logs, alternativas quando a IA falha e controles práticos.',
            'Copilotos, documentos, apoio a CRM, busca, triagem e automações internas.',
            'Documentação separando comportamento do modelo, regras de negócio e revisão humana.'
          ],
          cta: 'Adicionar IA ao produto'
        },
        {
          title: 'Apps born global',
          subtitle: 'Multilíngue, cultural, pronto para o mundo',
          description:
            'Construímos apps que podem atender mais de um mercado desde o primeiro deploy, com tradução contextualizada, UX adaptada ao idioma, preparação de lojas e estrutura de conteúdo pronta para evolução global.',
          features: [
            'Onboarding, notificações, suporte e texto de produto preparados para múltiplos idiomas.',
            'Tradução adaptada à intenção do usuário, tom, exemplos e contexto cultural.',
            'Analytics, checklist de deploy, idioma alternativo e evolução mercado por mercado.'
          ],
          cta: 'Planejar app global'
        }
      ],
      bottomCta: {
        title: 'Precisa construir seu app sem contratar um time interno completo?',
        description:
          'Envie o app atual, repositório, processo, planilha ou ideia de produto. Respondemos em até 1 dia útil com bloqueios, riscos, próximos passos ou uma indicação honesta.',
        button: 'Planejar a construção'
      }
    },
    about: {
      badge: 'Provas e operação',
      headingLine1: 'Time confiável',
      headingHighlight: 'para fundadores e gestores',
      description:
        'Somos um estúdio bilíngue em São Paulo, construindo software sob medida, produtos digitais e sistemas operacionais para empresas de diferentes mercados desde 2019.',
      timelineHeading: 'Como é trabalhar conosco',
      paragraphs: [
        'Você fala direto com quem decide. Mantemos o time compacto para preservar contexto, responsabilidade e visão de produto.',
        'Entramos nas ferramentas que você já usa (Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub etc.) ou oferecemos as nossas. Mandamos notas escritas e vídeos curtos no Loom três vezes por semana, além de demonstração semanal com riscos e custos.',
        'Engenharia de deploy e operação ficam no mesmo time, então você não precisa de outros fornecedores para monitoramento, analytics ou treinamento. Ao finalizar, tudo fica com você.'
      ],
      missionHeading: 'Como protegemos seu plano de evolução',
      missionDescription:
        'Contrato assinado, registro D-U-N-S, empresa brasileira regularizada e zero pagamento antecipado. Finanças, jurídico e o time de produto ficam tranquilos.',
      clientHeading: 'Liderança direta e baixa burocracia',
      clientTypes: [],
      valuesHeading: 'Garantias em todo contrato',
      values: [
        {
          title: 'D-U-N-S® 651029828',
          description: 'Validado pela Dun and Bradstreet em 28/01/2026. Útil para marketplaces e cadastros de fornecedores.'
        },
        {
          title: 'Contrato primeiro, pagamento depois',
          description: 'Assinamos NDA e escopo de trabalho digitalmente antes do início do projeto. A cobrança só começa após as primeiras entregas.'
        },
        {
          title: 'Cobertura global de fuso',
          description: 'Atuação diária com sobreposição para Américas e coordenação remota para outros mercados.'
        }
      ],
      statsHeading: 'Como operamos',
      stats: [
        { number: '≤2h', label: 'Tempo médio de resposta no canal escolhido ou e-mail em dias úteis.' },
        { number: '5 dias', label: 'Tempo médio entre assinatura e primeiro código no repositório ou entrega de design.' },
        { number: 'Demonstração semanal', label: 'Reunião ou Loom com riscos, decisões e métricas.' }
      ],
      passionTitle: 'D-U-N-S® 651029828',
      passionDescription:
        'Emitido em 28/01/2026 pela Dun and Bradstreet. Use o registro em bancos, marketplaces ou cadastros sem papelada extra.'
    },
    contact: {
      badge: 'Pronto para começar',
      headingLine1: 'Conte o que você precisa',
      headingHighlight: 'e receba uma leitura honesta',
      description:
        'Envie o formulário ou mande mensagem no WhatsApp. Respondemos em até 1 dia útil com uma leitura direta de escopo, orçamento, início do projeto, bloqueios e encaixe.',
      infoHeading: 'Canais diretos',
      info: [
        {
          title: 'Email',
          value: 'support@tgapps.dev',
          description: 'Melhor caminho para escopos, contratos e compliance.'
        },
        {
          title: 'WhatsApp / Telefone',
          value: '+55 11 97971-7703',
          description: 'Chamadas, SMS ou WhatsApp com janelas alinhadas ao fuso do cliente.'
        },
        {
          title: 'Base de operação',
          value: 'São Paulo, Brasil · operação global com sobreposição de fuso',
          description: 'Startup brasileira com atuação global desde 2019.'
        }
      ],
      whatsappCta: {
        title: 'Prefere WhatsApp?',
        description: 'Abra uma conversa direta com a Tg Apps e conte o que você quer construir.'
      },
      formHeading: 'Conte um pouco do projeto',
      formDescription: 'Só pedimos o necessário para responder com plano e datas.',
      callout: {
        title: 'O que acontece depois',
        description: 'Processo leve e sem spam.',
        bullets: [
          'Respondemos em até 1 dia útil com dúvidas pontuais.',
          'Marcamos uma conversa de 30 a 45 minutos para alinhar orçamento, prazo e acessos.',
          'Enviamos contrato, checklist e data de início.'
        ]
      },
      successTitle: 'Recebemos sua mensagem!',
      successMessage: 'Já estamos lendo os detalhes e retornaremos em breve.',
      form: {
        nameLabel: 'Nome completo',
        namePlaceholder: 'Seu nome',
        emailLabel: 'Email corporativo',
        emailPlaceholder: 'você@empresa.com',
        phoneLabel: 'Telefone ou WhatsApp',
        phonePlaceholder: '+55 (11) 99999-0000',
        serviceLabel: 'Do que você precisa?',
        servicePlaceholder: 'Selecione uma opção',
        guaranteeLabel: 'Como você gostaria de começar?',
        guaranteePlaceholder: 'Selecione um ponto de partida',
        firstMilestoneLabel: 'Primeira entrega útil',
        firstMilestonePlaceholder: 'Exemplo: fluxo de login, bloqueio de deploy, tela de painel, endpoint de API, versão para loja de aplicativos ou etapa de resgate.',
        messageLabel: 'Notas',
        messagePlaceholder: 'Compartilhe prazos, lojas ou dores atuais.',
        submit: 'Iniciar conversa',
        submitting: 'Abrindo e-mail...',
        policy: 'Usaremos essas informações apenas para retornar seu contato.'
      },
      services: [
        'Desenvolvimento de app mobile',
        'CRM / ferramentas internas',
        'Resgate de app / publicação',
        'Backend / API / integrações',
        'Integração de IA / LLM',
        'App born global',
        'Descoberta de produto'
      ],
      guaranteeOptions: [
        'Quero começar com a Garantia da Primeira Entrega',
        'Quero discutir o plano mensal completo',
        'Ainda não tenho certeza'
      ]
    },
    footer: {
      description:
        'A Tg Apps constrói e entrega apps mobile, CRM, ferramentas internas, backend e integrações de IA para fundadores e times em crescimento. Planos desde US$ 1.500/mês, sem pagamento inicial, Garantia da Primeira Entrega.',
      navigationHeading: 'Sessões',
      navigation: [
        { id: 'inicio', label: 'Início' },
        { id: 'what-you-get', label: 'Serviços' },
        { id: 'process', label: 'Processo' },
        { id: 'cases', label: 'Provas' },
        { id: 'plans', label: 'Planos' },
        { id: 'contato', label: 'Contato' }
      ],
      servicesHeading: 'Pedidos frequentes',
      services: [
        'Resgate de app e deploy',
        'Apps born global',
        'CRM e ferramentas internas',
        'Sistemas de negócio e dashboards',
        'Apps Android e iOS',
        'Backend, APIs e integrações',
        'Integrações LLM',
        'Cobertura de deploys'
      ],
      contactHeading: 'Contato',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 11 97971-7703',
        location: 'São Paulo · operação global'
      },
      cta: 'Agendar conversa',
      bottom: {
        copyright: '© {year} TG APPLICATIONS DESENVOLVIMENTO LTDA. Todos os direitos reservados.',
        privacy: 'Privacidade',
        terms: 'Termos'
      }
    }
  }
};
