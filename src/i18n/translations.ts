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
    whyUsHeading: string;
    whyUs: string[];
    costSection?: {
      badge: string;
      title: string;
      description: string;
      highlights?: string[];
      note?: string;
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
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      policy: string;
    };
    services: string[];
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
        { id: 'sobre', label: 'Proof' },
        { id: 'contato', label: 'Contact' }
      ],
      contactCta: 'Book a call',
      contactId: 'contato',
      languageLabel: 'Language'
    },
    hero: {
      badge: 'Custom software for startups & SMBs',
      titleLine1: 'Custom apps, CRM, and internal tools',
      titleHighlight: 'for founders and SMB teams',
      titleLine2: 'built by one product team',
      subtitle:
        'Founder-led LatAm studio in São Paulo building custom software, apps, CRM, internal tools, dashboards, workflow automation, customer portals, employee apps, APIs, databases, and AI integrations for founders, startups, and SMBs. We follow the agreed client plan strictly, execute with practical discipline, and share delivery insights when our experience can help.',
      stats: [
        { label: 'D-U-N-S® 651029828 · issued Jan 28 2026' },
        { label: 'Client-led plan · strict execution · experienced delivery insights when useful' },
        { label: 'Introductory USD 2,000/mo rate · fixed while your engagement stays active' }
      ],
      primaryCta: 'Schedule a discovery call',
      secondaryCta: 'Review the 3-step plan'
    },
    socialProof: {
      heading: 'Some of the companies we work with',
      description:
        'A few brands and operators we support across delivery, product execution, and ongoing operations.'
    },
    services: {
      badge: 'Custom software capabilities',
      headingLine1: 'Apps, operational software, and integrations',
      headingHighlight: 'built around your business',
      description:
        'We partner with founders, startups, SMB operators, agencies, and IT leaders who need a practical software team without full-time hiring overhead. We build, finish, rescue, launch, and evolve apps, CRM, internal systems, backend, dashboards, automations, and AI integrations according to the agreed plan, while offering implementation insights when useful.',
      pillars: [
        'Contract and NDA signed before kickoff; zero upfront payment.',
        'Client-led execution: we follow the plan strictly and flag risks, tradeoffs, and improvements when experience helps.',
        'Play Store, App Store, private MDM, and phased releases handled by us.'
      ],
      partnershipHeading: '',
      partnershipDescription: '',
      gridHeading: 'What we ship',
      gridDescription:
        'Use us for a complete build, an app rescue, or a focused product push. Strategy, design, backend, frontend, mobile, integrations, infrastructure, and release support stay connected inside one accountable team.',
      processHeading: 'How we collaborate in three tight loops',
      processDescription:
        'Lean structure: align, ship, support. Each loop keeps decision-makers involved without draining their calendar.',
      processLabel: 'Loop',
      process: [
        {
          title: 'Intake and briefing',
          description: '48-hour intake with sanitized references, backlog templates, and access checklist.',
          highlights: [
            'Free 30-45 minute call within one business day.',
            'Statement of work plus D-U-N-S contract signed digitally.',
            'Share Play Console, App Store, or internal tools, or let us set them up.'
          ]
        },
        {
          title: 'Build and release',
          description: 'Design, engineering, and release management run together with weekly progress demos while you direct priorities.',
          highlights: [
            'Weekly Kanban notes in your preferred channel plus a recorded Loom or full video call with the squad every week.',
            'Blue or green releases, staged rollouts, and monitoring included.',
            'Work inside your repos or ours with clean documentation.'
          ]
        },
        {
          title: 'Support and handoff',
          description: 'We stay on-call for incidents, training, and follow-up scope so nothing is left hanging.',
          highlights: [
            'Runbooks, dashboards, and credentials handed over.',
            'Bug triage within 24 hours with weekend standby for launches.',
            'Month-to-month extensions or clean exit without penalties.'
          ]
        }
      ],
      items: [
        {
          title: 'Internal tools and business systems',
          subtitle: 'CRM, dashboards, scheduling, lead operations',
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
          subtitle: 'Finish, release, validate when needed',
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
        },
        {
          title: 'Integrations, AI, and data layers',
          subtitle: 'Payments, logistics, CRM, LLM, APIs',
          description:
            'Connect your app to billing, logistics, CRM, or knowledge bases with production-grade APIs, data layers, and automation guardrails.',
          features: [
            'REST or GraphQL plus Supabase, Firebase, MySQL, MariaDB, or dedicated Postgres.',
            'LLM workflows connected to the vector, search, or knowledge stack your team already trusts.',
            'AWS (including EC2) infrastructure plus runbooks and release checklists so your team can own the stack after handoff.'
          ],
          cta: 'Scope my integration'
        }
      ],
      bottomCta: {
        title: 'Need a software team to execute your plan?',
        description:
          'Send us the current app, repo, process, spreadsheet, or product idea. We respond in under one business day with blockers, risks, next steps, or a referral.',
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
      clientHeading: 'Founder-led team, lean bureaucracy',
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
      badge: 'Ready in one call',
      headingLine1: 'Talk directly to the founder',
      headingHighlight: 'and get a clear scoped plan',
      description:
        'Fill the form or ping us on WhatsApp. We answer within one business day with an honest read on scope, budget, kickoff timing, and whether the current introductory monthly rate fits your project.',
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
          description: 'LatAm studio building for US businesses since 2019.'
        }
      ],
      whatsappCta: {
        title: 'Prefer WhatsApp?',
        description: 'Open a direct chat with TG Apps and tell us what you want to build.'
      },
      whyUsHeading: 'Why startups and SMB teams hire TG Apps',
      whyUs: [
        'Zero upfront payment; billing starts only after kickoff, you can cancel anytime, and there are no surprise fees.',
        'D-U-N-S® record and Brazilian LLC paperwork to pass procurement.',
        'Strong fit for unfinished apps, app drafts, outdated builds, and stalled codebases when the client needs a clear path to release.',
        'Full-stack delivery: custom CRM, internal tools, native apps, responsive sites, dashboards, backend, and databases handled by one team.',
        'LLM integrations delivered with guardrails and documentation that match the stack you already trust.',
        'Deploy cadence typically once per week, with backend, frontend, database, and mobile tracks moving in parallel with blue/green coverage.',
        'Weekly video calls with the actual developers so stakeholders can review deploys, metrics, and next steps live, and we adapt meeting hours to your preferred timezone.',
        'Prefer to use your own contract template? Send it and we co-review, sign, and adapt clauses together.',
        'Pricing stays fair because the same compact team structure supports multiple clients without adding unnecessary retainers.',
        'Current introductory rate: USD 2,000/mo, fixed for your account while the engagement stays active.'
      ],
      costSection: {
        badge: 'Transparent terms',
        title: 'Introductory monthly rate · cancel any month',
        description:
          'Current introductory rate: USD 2,000/mo for custom software, internal tools, apps, integrations, and release support with monthly billing, no upfront payment, and no hidden clauses. If you start under this rate, it stays fixed for your account while the engagement remains active.',
        highlights: [
          'USD 2,000/mo introductory rate for new engagements.',
          'Monthly billing, no upfront payment, and no hidden clauses.',
          'Contracts and invoices issued by TG Applications Desenvolvimento Ltda (Brazil).',
          'USD or BRL billing; W8-BEN-E already on file.',
          'Weekday coverage plus weekend standby for launches.'
        ],
        note: 'Need NDAs, SOC, or vendor questionnaires? We keep sanitized templates ready. Clients who start under the introductory rate keep it fixed while the engagement stays active.'
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
        messageLabel: 'Notes',
        messagePlaceholder: 'Tell us about platforms, deadlines, or blockers.',
        submit: 'Compose email draft',
        submitting: 'Preparing email...',
        policy: 'We only use these details to contact you about this request.'
      },
      services: [
        'Custom CRM / internal tools',
        'App rescue / release execution',
        'Born-global app',
        'Android + iOS build',
        'Integrations + dashboards',
        'Rescue or modernization',
        'Product discovery'
      ]
    },
    footer: {
      description:
        'TG Apps is a founder-led, team-delivered LatAm studio building custom software, apps, CRM, internal tools, dashboards, and integrations for founders, startups, and SMB teams.',
      navigationHeading: 'Sections',
      navigation: [
        { id: 'inicio', label: 'Overview' },
        { id: 'what-you-get', label: 'Capabilities' },
        { id: 'process', label: 'Process' },
        { id: 'sobre', label: 'Proof' },
        { id: 'contato', label: 'Contact' }
      ],
      servicesHeading: 'Popular requests',
      services: [
        'App rescue and release execution',
        'Born-global apps',
        'Custom CRM and internal tools',
        'Business systems and dashboards',
        'Android + iOS builds',
        'LLM integrations',
        'Release and store coverage'
      ],
      contactHeading: 'Contact',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 11 97971-7703',
        location: 'São Paulo · serving startups and SMBs'
      },
      cta: 'Schedule a discovery call',
      bottom: {
        copyright: '© {year} TG Applications Desenvolvimento Ltda. All rights reserved.',
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
        { id: 'sobre', label: 'Provas' },
        { id: 'contato', label: 'Contato' }
      ],
      contactCta: 'Fale com a gente',
      contactId: 'contato',
      languageLabel: 'Idioma'
    },
    hero: {
      badge: 'Software sob medida para startups e empresas',
      titleLine1: 'Apps, CRM e ferramentas internas',
      titleHighlight: 'para fundadores e empresas',
      titleLine2: 'construídos por um time de produto',
      subtitle:
        'Studio LatAm liderado pelo fundador em São Paulo que constrói software sob medida, apps, CRM, ferramentas internas, dashboards, automações, portais de cliente, apps de equipe, APIs, bancos de dados e integrações de IA para fundadores, startups e empresas. Seguimos o plano combinado com rigor, executamos com disciplina prática e compartilhamos insights quando nossa experiência pode ajudar.',
      stats: [
        { label: 'D-U-N-S® 651029828 · emitido em 28/01/2026' },
        { label: 'Plano guiado pelo cliente · execução rigorosa · insights quando forem úteis' },
        { label: 'Valor introdutório de US$ 2.000/mês · fixo enquanto o engajamento estiver ativo' }
      ],
      primaryCta: 'Agende uma conversa',
      secondaryCta: 'Conheça o plano em 3 etapas'
    },
    socialProof: {
      heading: 'Algumas das empresas com que trabalhamos',
      description:
        'Algumas marcas e operações que apoiamos em entregas, execução de produto e operação contínua.'
    },
      services: {
      badge: 'Capacidades de software sob medida',
      headingLine1: 'Apps, software operacional e integrações',
      headingHighlight: 'construídos em torno do seu negócio',
      description:
        'Atuamos com fundadores, startups, empresas em crescimento, agências e líderes de TI que precisam de um time prático de software sem contratar internamente. Construímos, finalizamos, resgatamos, lançamos e evoluímos apps, CRM, sistemas internos, backends, dashboards, automações e integrações de IA conforme o plano combinado, oferecendo insights de implementação quando fizer sentido.',
      pillars: [
        'Contrato e NDA assinados antes do kick-off; nenhum pagamento adiantado.',
        'Execução guiada pelo cliente: seguimos o plano com rigor e sinalizamos riscos, tradeoffs e melhorias quando a experiência ajuda.',
        'Play Store, App Store ou distribuição interna conduzidas por nós.'
      ],
      partnershipHeading: '',
      partnershipDescription: '',
      gridHeading: 'Formatos mais comuns',
      gridDescription:
        'Use a TG Apps para uma construção completa, um resgate de app ou um avanço específico de produto. Estratégia, design, backend, frontend, mobile, integrações, infraestrutura e release ficam conectados em um único time responsável.',
      processHeading: 'Como trabalhamos em três ciclos',
      processDescription:
        'Estrutura enxuta: alinhamento, construção e suporte. Cada ciclo mantém decisores próximos sem roubar agenda.',
      processLabel: 'Ciclo',
      process: [
        {
          title: 'Imersão e briefing',
          description: 'Até 48 horas para alinhar metas, revisar acessos e mostrar referências sanitizadas.',
          highlights: [
            'Call gratuita de 30-45 minutos em até 1 dia útil.',
            'Contrato e D-U-N-S assinados digitalmente.',
            'Recebemos acessos ou criamos as contas para você.'
          ]
        },
        {
          title: 'Construção e release',
          description: 'Design, engenharia e releases rodando juntos com demos semanais enquanto você direciona as prioridades.',
          highlights: [
            'Notas semanais no canal que você usa e pelo menos um Loom ou videocall com o time por semana.',
            'Deploy azul/verde ou gradual com monitoramento incluído.',
            'Trabalhamos nos seus repositórios ou hospedamos por aqui.'
          ]
        },
        {
          title: 'Suporte e handoff',
          description: 'Ficamos de prontidão para incidentes, treinamentos e escopos seguintes.',
          highlights: [
            'Runbooks, dashboards e credenciais entregues ao seu time.',
            'Triage em até 24 horas e plantão de lançamentos nos fins de semana.',
            'Renove mês a mês ou encerre sem multas.'
          ]
        }
      ],
      items: [
        {
          title: 'Ferramentas internas e sistemas de negócio',
          subtitle: 'CRM, dashboards, agendamento, operação de leads',
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
          title: 'Resgate de app e execução de release',
          subtitle: 'Finalizar, publicar, validar quando preciso',
          description:
            'Pegamos apps inacabados, protótipos, builds antigas ou codebases travadas e transformamos em produtos utilizáveis com caminho claro de release, backend, banco, publicação em lojas e plano de iteração definidos juntos.',
          features: [
            'Auditoria do app, código, lojas, backend e bloqueios de deploy.',
            'Correção, rebuild ou finalização dos fluxos centrais exigidos pelo plano de release combinado.',
            'Publicação quando o plano pedir, validação com usuários quando aplicável, monitoramento e melhoria contínua.'
          ],
          cta: 'Finalizar meu app'
        },
        {
          title: 'Apps born global',
          subtitle: 'Multilíngue, cultural, pronto para o mundo',
          description:
            'Construímos apps que podem atender mais de um mercado desde o primeiro release, com tradução contextualizada, UX sensível a idioma, preparação de lojas e estrutura de conteúdo pronta para iteração global.',
          features: [
            'Onboarding, notificações, suporte e copy de produto preparados para múltiplos idiomas.',
            'Tradução adaptada à intenção do usuário, tom, exemplos e contexto cultural.',
            'Analytics, checklist de release, fallback de idioma e evolução mercado por mercado.'
          ],
          cta: 'Planejar app global'
        },
        {
          title: 'Integrações, IA e camadas de dados',
          subtitle: 'Pagamentos, logística, CRM, LLM, APIs',
          description:
            'Conectamos seu app a billing, logística ou bases de conhecimento com APIs e automações prontas para produção.',
          features: [
            'REST ou GraphQL com Supabase, Firebase, MySQL, MariaDB ou Postgres dedicado.',
            'Fluxos de LLM conectados ao stack de vetor, busca ou conhecimento que o seu time já confia.',
            'Infraestrutura em AWS (incluindo EC2) com runbooks e checklists de release para o seu time assumir o stack.'
          ],
          cta: 'Escopar integração'
        }
      ],
      bottomCta: {
        title: 'Precisa de um time de software para executar seu plano?',
        description:
          'Envie o app atual, repo, processo, planilha ou ideia de produto. Respondemos em até 1 dia útil com bloqueios, riscos, próximos passos ou uma indicação honesta.',
        button: 'Planejar a construção'
      }
    },
    about: {
      badge: 'Provas e operação',
      headingLine1: 'Time confiável',
      headingHighlight: 'para fundadores e gestores',
      description:
        'Somos um studio bilíngue em São Paulo, construindo software sob medida, produtos digitais e sistemas operacionais para empresas de diferentes mercados desde 2019.',
      timelineHeading: 'Como é trabalhar conosco',
      paragraphs: [
        'Você fala direto com quem decide. Mantemos o time compacto para preservar contexto, responsabilidade e visão de produto.',
        'Entramos no seu stack (Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub etc.) ou oferecemos o nosso. Mandamos notas escritas e Looms curtos três vezes por semana, além de demo semanal com riscos e custos.',
        'Engenharia de release e operações estão no mesmo time, então você não precisa de outros fornecedores para monitoramento, analytics ou treinamento. Ao finalizar, tudo fica com você.'
      ],
      missionHeading: 'Como protegemos seu roadmap',
      missionDescription:
        'Contrato assinado, registro D-U-N-S, empresa brasileira regularizada e zero pagamento antecipado. Finanças, jurídico e o time de produto ficam tranquilos.',
      clientHeading: 'Time liderado pelo fundador',
      clientTypes: [],
      valuesHeading: 'Garantias em todo contrato',
      values: [
        {
          title: 'D-U-N-S® 651029828',
          description: 'Validado pela Dun and Bradstreet em 28/01/2026. Útil para marketplaces e cadastros de fornecedores.'
        },
        {
          title: 'Contrato primeiro, pagamento depois',
          description: 'Assinamos NDA e SOW digitalmente antes do kick-off. A cobrança só começa após as primeiras entregas.'
        },
        {
          title: 'Cobertura global de fuso',
          description: 'Atuação diária com sobreposição para Américas e coordenação remota para outros mercados.'
        }
      ],
      statsHeading: 'Como operamos',
      stats: [
        { number: '≤2h', label: 'Tempo médio de resposta no canal escolhido ou e-mail em dias úteis.' },
        { number: '5 dias', label: 'Tempo médio entre assinatura e primeira branch ou entrega de design.' },
        { number: 'Demo semanal', label: 'Call ou Loom com riscos, decisões e métricas.' }
      ],
      passionTitle: 'D-U-N-S® 651029828',
      passionDescription:
        'Emitido em 28/01/2026 pela Dun and Bradstreet. Use o registro em bancos, marketplaces ou cadastros sem papelada extra.'
    },
    contact: {
      badge: 'Prontos em uma call',
      headingLine1: 'Fale direto com o fundador',
      headingHighlight: 'e receba um plano claro',
      description:
        'Envie o formulário ou mande mensagem no WhatsApp. Respondemos em até 1 dia útil com leitura honesta de escopo, orçamento, kickoff e se o valor mensal introdutório faz sentido para seu projeto.',
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
        description: 'Abra uma conversa direta com a TG Apps e conte o que você quer construir.'
      },
      whyUsHeading: 'Por que contratam a TG Apps',
      whyUs: [
        'Sem adiantamentos; cobramos só depois do início, sem surpresas e você cancela quando quiser.',
        'Registro D-U-N-S® e documentos brasileiros prontos para compras corporativas.',
        'Encaixe forte para apps inacabados, rascunhos, builds antigas e codebases travadas quando o cliente precisa de um caminho claro até o release.',
        'Entrega ponta a ponta: CRM sob medida, ferramentas internas, apps, sites, dashboards, backends e bancos de dados por um único time.',
        'Integrações LLM com guardrails e documentação alinhados ao stack que você já usa.',
        'Cadência de deploy normalmente semanal, com back, front, banco e mobile em paralelo + cobertura azul/verde.',
        'Chamadas em vídeo toda semana com o time de devs para revisar deploys e próximos passos, sempre adaptando o horário ao fuso do cliente.',
        'Preferiu usar o contrato da sua empresa? Envie o modelo e revisamos juntos, ajustando cláusulas antes da assinatura.',
        'Você direciona o backlog e nós apresentamos releases/demos toda semana.',
        'Preço justo: a estrutura compacta do time permite atender múltiplos clientes sem inflar retainer ou taxas extras.',
        'Valor introdutório atual: US$ 2.000/mês, fixo para sua conta enquanto o engajamento permanecer ativo.'
      ],
      costSection: {
        badge: 'Termos claros',
        title: 'Valor mensal introdutório · cancelamento simples',
        description:
          'Valor introdutório atual: US$ 2.000/mês para software sob medida, ferramentas internas, apps, integrações e suporte de release com cobrança mensal, sem adiantamento e sem cláusulas escondidas. Quem iniciar nessa faixa mantém o valor fixo enquanto o engajamento permanecer ativo.',
        highlights: [
          'US$ 2.000/mês como valor introdutório para novos engajamentos.',
          'Cobrança mensal, sem adiantamento e sem cláusulas escondidas.',
          'Contrato e nota emitidos pela TG Applications Desenvolvimento Ltda (Brasil).',
          'Cobrança em USD ou BRL; W8-BEN-E já disponível.',
          'Cobertura em dias úteis + plantão em lançamentos.'
        ],
        note: 'Precisa de NDA, SOC ou questionário de fornecedor? Já temos os modelos. Clientes que iniciarem no valor introdutório mantêm esse valor fixo enquanto o engajamento estiver ativo.'
      },
      formHeading: 'Conte um pouco do projeto',
      formDescription: 'Só pedimos o necessário para responder com plano e datas.',
      callout: {
        title: 'O que acontece depois',
        description: 'Processo leve e sem spam.',
        bullets: [
          'Respondemos em até 1 dia útil com dúvidas pontuais.',
          'Marcamos uma call de 30-45 minutos para alinhar orçamento, prazo e acessos.',
          'Enviamos contrato, checklist e data de kick-off.'
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
        messageLabel: 'Notas',
        messagePlaceholder: 'Compartilhe prazos, lojas ou dores atuais.',
        submit: 'Gerar email',
        submitting: 'Preparando email...',
        policy: 'Usaremos essas informações apenas para retornar seu contato.'
      },
      services: [
        'CRM / ferramentas internas',
        'Resgate de app / lançamento',
        'App born global',
        'App Android + iOS',
        'Integrações + dashboards',
        'Resgate ou modernização',
        'Discovery de produto'
      ]
    },
    footer: {
      description:
        'A TG Apps é um studio LatAm liderado pelo fundador e executado por um time enxuto que constrói software sob medida, apps, CRM, ferramentas internas, dashboards e integrações para fundadores, startups e empresas.',
      navigationHeading: 'Sessões',
      navigation: [
        { id: 'inicio', label: 'Início' },
        { id: 'what-you-get', label: 'Serviços' },
        { id: 'process', label: 'Processo' },
        { id: 'sobre', label: 'Provas' },
        { id: 'contato', label: 'Contato' }
      ],
      servicesHeading: 'Pedidos frequentes',
      services: [
        'Resgate de app e lançamento',
        'Apps born global',
        'CRM e ferramentas internas',
        'Sistemas de negócio e dashboards',
        'Apps Android e iOS',
        'Integrações LLM',
        'Cobertura de releases'
      ],
      contactHeading: 'Contato',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 11 97971-7703',
        location: 'São Paulo · operação global'
      },
      cta: 'Agendar conversa',
      bottom: {
        copyright: '© {year} TG Applications Desenvolvimento Ltda. Todos os direitos reservados.',
        privacy: 'Privacidade',
        terms: 'Termos'
      }
    }
  }
};
