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
        'Got an idea, a stalled app, or an internal workflow that needs software? Tg Apps builds and ships mobile, web, CRM, backend, and AI with a First Milestone Guarantee, weekly demos, and month-to-month continuity after the first delivery, with no upfront payment to start.',
      stats: [
        { label: 'D-U-N-S® 651029828' },
        { label: 'Growth plan: USD 2,000/mo' },
        { label: 'First Milestone Guarantee' },
        { label: 'No upfront payment to start' }
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
            'Native apps built for real users and real stores.',
          features: [
            'Play Store, App Store, private MDM, phased rollout, and release support handled by us.'
          ],
          cta: 'Plan my app'
        },
        {
          title: 'CRM, dashboards and internal tools',
          subtitle: 'Scheduling, lead operations, portals',
          description:
            'Replace spreadsheets with custom CRM, dashboards, workflow automation, and admin systems.',
          features: [
            'Built around the way your business actually works.'
          ],
          cta: 'Plan my system'
        },
        {
          title: 'App rescue and release execution',
          subtitle: 'Audit, fix, ship, iterate',
          description:
            'Unfinished apps, stalled codebases, or outdated builds turned into usable products with a clear release path.',
          features: [
            'We audit, fix, rebuild, and ship.'
          ],
          cta: 'Finish my app'
        },
        {
          title: 'Backend, APIs and integrations',
          subtitle: 'Data, auth, billing, infrastructure',
          description:
            'REST or GraphQL, Supabase, Firebase, MySQL, or Postgres.',
          features: [
            'AWS infrastructure, runbooks, and release checklists so your team can own the stack after handoff.'
          ],
          cta: 'Scope my integration'
        },
        {
          title: 'AI and LLM integrations',
          subtitle: 'Useful workflows, guardrails, documentation',
          description:
            'LLM workflows connected to your CRM, search, or knowledge stack.',
          features: [
            'Guardrails, structured outputs, and documentation that separates model from business logic.'
          ],
          cta: 'Add AI to my product'
        },
        {
          title: 'Born-global apps',
          subtitle: 'Multilingual, cultural, international-ready',
          description:
            'Apps built for more than one market from day one.',
          features: [
            'Contextual translation, locale-aware UX, and app store preparation for global iteration.'
          ],
          cta: 'Plan my global app'
        }
      ],
      bottomCta: {
        title: 'Need your app built with clear scope and delivery ownership?',
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
        'We adopt your stack: Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub, or any channel you already use, or bring ours. Expect direct communication whenever needed, visible progress during the week, and a weekly demo with timing, risks, and budgets.',
        'Because product, engineering, release, and ops stay together, you do not need extra vendors for monitoring, analytics, or training. When we pause, you keep every repo, design file, and runbook.'
      ],
      missionHeading: 'How we protect your roadmap',
      missionDescription:
        'Signed agreement, D-U-N-S record, and Brazilian LLC paperwork keep finance and legal comfortable while delivery keeps moving.',
      clientHeading: 'Direct leadership, lean bureaucracy',
      clientTypes: [],
      valuesHeading: 'Safeguards baked into every contract',
      values: [
        {
          title: 'D-U-N-S® 651029828',
          description: 'CIAL Dun and Bradstreet verified on Jan 28 2026 so you can add us to procurement portals without delays.'
        },
        {
          title: 'Signed before kickoff',
          description: 'Statement of work and NDA are signed digitally before kickoff, with billing aligned to the agreed delivery path.'
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
        { number: 'Weekly demo', label: 'Weekly demo with risks, decisions, and metrics.' }
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
        'Tg Apps builds and ships mobile apps, CRM, internal tools, backend, and AI integrations for founders and growing teams. Monthly plans from USD 1,500, First Milestone Guarantee, and month-to-month continuity after the first delivery.',
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
        'Tem uma ideia, um app parado ou uma operação que precisa de software? A Tg Apps entrega mobile, web, CRM, backend e IA com Garantia da Primeira Entrega, demonstrações semanais e continuidade mês a mês após a primeira entrega, sem pagamento antecipado para começar.',
      stats: [
        { label: 'D-U-N-S® 651029828' },
        { label: 'Growth US$ 2.000/mês' },
        { label: 'Garantia da Primeira Entrega' },
        { label: 'Sem pagamento antecipado para começar' }
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
            'Apps nativos feitos para usuários reais e lojas reais.',
          features: [
            'Play Store, App Store, distribuicao interna, deploy gradual e suporte de release ficam com a gente.'
          ],
          cta: 'Planejar meu app'
        },
        {
          title: 'CRM, dashboards e ferramentas internas',
          subtitle: 'Agendamento, operação de leads e portais',
          description:
            'Troque planilhas por CRM, dashboards, automacoes e sistemas administrativos.',
          features: [
            'Construidos em torno do jeito que sua operacao realmente funciona.'
          ],
          cta: 'Planejar meu sistema'
        },
        {
          title: 'Resgate de app e execução de deploy',
          subtitle: 'Auditar, corrigir, publicar e iterar',
          description:
            'Apps inacabados, bases travadas ou builds antigas viram produtos utilizaveis com caminho claro de release.',
          features: [
            'A gente audita, corrige, reconstrói e publica.'
          ],
          cta: 'Finalizar meu app'
        },
        {
          title: 'Backend, APIs e integrações',
          subtitle: 'Dados, autenticação, cobrança e infraestrutura',
          description:
            'REST ou GraphQL, Supabase, Firebase, MySQL ou Postgres.',
          features: [
            'Infraestrutura AWS, runbooks e checklist de release para seu time assumir a stack depois.'
          ],
          cta: 'Escopar integração'
        },
        {
          title: 'Integrações de IA e LLM',
          subtitle: 'Fluxos úteis, controles e documentação',
          description:
            'Fluxos de LLM conectados ao seu CRM, busca ou base de conhecimento.',
          features: [
            'Guardrails, saidas estruturadas e documentacao separando modelo de regra de negocio.'
          ],
          cta: 'Adicionar IA ao produto'
        },
        {
          title: 'Apps born global',
          subtitle: 'Multilíngue, cultural, pronto para o mundo',
          description:
            'Apps feitos para mais de um mercado desde o primeiro dia.',
          features: [
            'Traducao contextual, UX sensivel ao idioma e preparo de loja para iteracao global.'
          ],
          cta: 'Planejar app global'
        }
      ],
      bottomCta: {
        title: 'Precisa construir seu app com escopo claro e responsabilidade de entrega?',
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
        'Entramos nas ferramentas que você já usa (Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub etc.) ou oferecemos as nossas. Mantemos comunicação direta sempre que necessário, progresso visível ao longo da semana e demonstração semanal com riscos e custos.',
        'Engenharia de deploy e operação ficam no mesmo time, então você não precisa de outros fornecedores para monitoramento, analytics ou treinamento. Ao finalizar, tudo fica com você.'
      ],
      missionHeading: 'Como protegemos seu plano de evolução',
      missionDescription:
        'Contrato assinado, registro D-U-N-S, empresa brasileira regularizada e escopo claro desde o início. Finanças, jurídico e o time de produto ficam tranquilos.',
      clientHeading: 'Liderança direta e baixa burocracia',
      clientTypes: [],
      valuesHeading: 'Garantias em todo contrato',
      values: [
        {
          title: 'D-U-N-S® 651029828',
          description: 'Validado pela Dun and Bradstreet em 28/01/2026. Útil para marketplaces e cadastros de fornecedores.'
        },
        {
          title: 'Assinado antes do kickoff',
          description: 'Assinamos NDA e escopo de trabalho digitalmente antes do início do projeto, com a cobrança alinhada ao caminho de entrega combinado.'
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
        { number: 'Demonstração semanal', label: 'Demonstração semanal com riscos, decisões e métricas.' }
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
        'A Tg Apps constrói e entrega apps mobile, CRM, ferramentas internas, backend e integrações de IA para fundadores e times em crescimento. Planos mensais a partir de US$ 1.500, Garantia da Primeira Entrega e continuidade mês a mês após a primeira entrega.',
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
