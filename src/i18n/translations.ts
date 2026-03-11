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
      badge: 'Mobile pod for US small businesses',
      titleLine1: 'Mobile app delivery squads',
      titleHighlight: 'for US small businesses',
      titleLine2: 'with contract-first billing',
      subtitle:
        'Founder-led LatAm studio in São Paulo that designs, builds, and supports Android, iOS, Flutter, or React Native apps plus websites, landing pages, internal tools, dashboards, APIs, automations, and integrations. We operate mainly with US and Brazilian companies but can onboard teams anywhere. Expect full-stack delivery, backend services, databases, and cloud infra (including AWS EC2) bundled in one contract with zero upfront payment so lean teams stay fast without bureaucracy. We start building right after paperwork, keep backend, frontend, database, and mobile tracks moving in parallel, and let you steer priorities with weekly demos, releases, and handoffs.',
      stats: [
        { label: 'D-U-N-S® 651029828 · issued Jan 28 2026' },
        { label: 'Kickoff call in one business day · we demo and deploy roughly once per week' },
        { label: 'Month-to-month control · cancel anytime · temporary USD 1,900/mo offer for the next 3 companies' }
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
      badge: 'Capabilities and pods',
      headingLine1: 'Android, iOS, and integrations',
      headingHighlight: 'that keep small teams shipping',
      description:
        'We partner with US startups, agencies, and IT leaders who need a product squad that feels in-house but stays contract-flexible. You get senior design, product, engineering, infrastructure, and release ops bundled in the same pod for mobile apps, marketing sites, landing pages, dashboards, admin tools, and the APIs plus databases behind them. We can start from zero and build an entire startup-grade product quickly while your company keeps existing projects moving, and you stay in control of priorities the whole time.',
      pillars: [
        'Contract and NDA signed before kickoff; zero upfront payment.',
        'Weekly status notes inside your own tools plus Kanban snapshots and Loom recaps keep everyone aligned.',
        'Play Store, App Store, private MDM, and phased releases handled by us.'
      ],
      partnershipHeading: '',
      partnershipDescription: '',
      gridHeading: 'What we ship',
      gridDescription:
        'Mix and match pods for new builds, co-development, or integrations; each pod already includes design, release ops, infra, web/mobile surfaces, and reporting.',
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
          title: 'Android and iOS builds',
          subtitle: 'Kotlin, Swift, Flutter, React Native',
          description:
            'Ship greenfield products or rescue existing apps, responsive sites, marketing websites, and landing pages while we cover UX writing, design systems, architecture, and the supporting backends/databases together with engineering.',
          features: [
            'Play Store, App Store, and private distribution compliance handled for you.',
            'Wearables, in-app purchases, SSO, analytics, and push notifications.',
            'Dashboards, admin tooling, landing pages, and internal/external tools so operations and customers can see and use what we ship.'
          ],
          cta: 'Plan my mobile release'
        },
        {
          title: 'Pod-as-a-service',
          subtitle: 'Support, co-development, and release ops',
          description:
            'Use us as a parallel squad that owns backlogs, automation, and release management while your internal team keeps roadmap focus.',
          features: [
            'Weekly Kanban reviews (in whichever tool you already use) plus shared docs.',
            'Blue or green releases and monitoring already budgeted.',
            'Bug triage within 24 hours with weekend coverage for go-lives.'
          ],
          cta: 'Embed the pod'
        },
        {
          title: 'Integrations and data layers',
          subtitle: 'Payments, logistics, CRM, and LLM/RAG',
          description:
            'Connect your app to billing, logistics, CRM, or knowledge bases with production-grade APIs, data layers, and automation guardrails.',
          features: [
            'REST or GraphQL plus Supabase, Firebase, MySQL, MariaDB, or dedicated Postgres.',
            'Retrieval augmented generation pipelines with whichever vector store or search stack your team already trusts.',
            'AWS (including EC2) infrastructure plus runbooks and release checklists so your team can own the stack after handoff.'
          ],
          cta: 'Scope my integration'
        }
      ],
      bottomCta: {
        title: 'Need a small-business-ready mobile partner?',
        description:
          'Send us the problem, platform, and deadline. We respond in under one business day with next steps or a referral.',
        button: 'Talk to the pod'
      }
    },
    about: {
      badge: 'Proof and operating model',
      headingLine1: 'Trusted delivery partner',
      headingHighlight: 'for founders and operators',
      description:
        'We are a bilingual studio in São Paulo working mostly with US startups, agencies, and IT leaders who need dependable Android and iOS releases.',
      timelineHeading: 'What working with us feels like',
      paragraphs: [
        'You always speak with someone able to make decisions. We run compact pods so context, accountability, and product sense stay intact from kickoff to handoff.',
        'We adopt your stack: Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub, or any channel you already use, or bring ours. Expect written notes plus short Loom videos three times per week and a weekly demo with timing, risks, and budgets.',
        'Because release engineering and ops sit in the same pod, you do not need extra vendors for monitoring, analytics, or training. When we pause, you keep every repo, design file, and runbook.'
      ],
      missionHeading: 'How we protect your roadmap',
      missionDescription:
        'Signed agreement, D-U-N-S record, Brazilian LLC paperwork, and zero upfront payment keep finance and legal happy without slowing delivery.',
      clientHeading: 'Founder-led pod, lean bureaucracy',
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
      headingHighlight: 'and get a scoped plan fast',
      description:
        'Fill the form or ping us on WhatsApp. We answer within one business day with an honest read on scope, budget, and kickoff timing, and we always explain how pricing stays fair by diluting pod costs across clients.',
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
      whyUsHeading: 'Why small teams hire TG Apps',
      whyUs: [
        'Zero upfront payment; billing starts only after kickoff, you can cancel anytime, and there are no surprise fees.',
        'D-U-N-S® record and Brazilian LLC paperwork to pass procurement.',
        'Full-stack delivery: native apps, responsive sites, landing pages, dashboards, backend, and databases handled by one pod.',
        'LLM and RAG integrations delivered with guardrails and documentation that match the stack you already trust.',
        'Deploy cadence typically once per week, powered by a Kanban pod that moves backend, frontend, database, and mobile tracks in parallel with blue/green coverage.',
        'Weekly video calls with the actual developers so stakeholders can review deploys, metrics, and next steps live, and we adapt meeting hours to your preferred timezone.',
        'Prefer to use your own contract template? Send it and we co-review, sign, and adapt clauses together.',
        'Pricing stays fair because we dilute pod costs between clients instead of adding fees or retainers.',
        'Temporary offer for the next 3 companies: USD 1,900/mo, monthly billing, no upfront payment, and no hidden clauses while the contract stays active.'
      ],
      costSection: {
        badge: 'Transparent terms',
        title: 'Flat monthly pod · cancel any month',
        description:
          'Temporary offer for the next 3 companies: USD 1,900/mo for full-stack and mobile delivery with monthly billing, no upfront payment, and no hidden clauses. The rate stays fixed while the contract is active. Outside the temporary offer, pricing is scoped to workload and delivery model.',
        highlights: [
          'Temporary offer: USD 1,900/mo for the next 3 companies.',
          'Monthly billing, no upfront payment, and no hidden clauses.',
          'Contracts and invoices issued by TG Applications Desenvolvimento Ltda (Brazil).',
          'USD or BRL billing; W8-BEN-E already on file.',
          'Weekday coverage plus weekend standby for launches.'
        ],
        note: 'Need NDAs, SOC, or vendor questionnaires? We keep sanitized templates ready. The temporary offer is limited to the next 3 companies, and the rate stays locked while the contract is active.'
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
        'Android + iOS build',
        'Parallel pod / support',
        'Integrations + dashboards',
        'Rescue or modernization',
        'Product discovery'
      ]
    },
    footer: {
      description:
        'TG Apps is a founder-led LatAm (Brazilian) studio delivering Android, iOS, Flutter, and integration pods for US small businesses with zero upfront payment and weekly releases.',
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
        'Android + iOS builds',
        'Parallel pods and support',
        'LLM / RAG integrations',
        'Dashboards and admin tools',
        'Release and store coverage'
      ],
      contactHeading: 'Contact',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 11 97971-7703',
        location: 'São Paulo · serving US small businesses'
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
      badge: 'Pod mobile para pequenas empresas dos EUA',
      titleLine1: 'Aplicativos Android e iOS sob medida',
      titleHighlight: 'para pequenas empresas norte-americanas',
      titleLine2: 'sem cobrança antecipada',
      subtitle:
        'Estúdio brasileiro liderado pelo fundador em São Paulo que projeta, desenvolve e sustenta apps Android, iOS, Flutter ou React Native, além de websites, landing pages, ferramentas internas, dashboards, APIs, automações e integrações. Atuamos principalmente com empresas dos EUA e do Brasil, mas podemos atender qualquer país. Entregamos o produto completo, com backends, bancos de dados e infraestrutura em nuvem (como AWS EC2), dentro de um contrato único, sem pagamento adiantado, para que times enxutos mantenham ritmo sem burocracia.',
      stats: [
        { label: 'D-U-N-S® 651029828 · emitido em 28/01/2026' },
        { label: 'Chamada inicial em 1 dia útil · demos e deploys semanais guiados por você' },
        { label: 'Controle mes a mes · cancele quando quiser · oferta temporaria de US$ 1.900/mes para as proximas 3 empresas' }
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
      badge: 'O que entregamos',
      headingLine1: 'Android, iOS e integrações',
      headingHighlight: 'para manter seu time entregando',
      description:
        'Atuamos com startups, agências e líderes de TI dos EUA que precisam de um pod com cara de time interno, mas com a flexibilidade de um contrato mensal. Design, produto, engenharia, infraestrutura e operações caminham juntos para apps mobile, sites, landing pages, dashboards, ferramentas internas/externas, APIs e bancos de dados. Conseguimos tirar uma startup inteira do zero rapidamente enquanto sua empresa mantém o foco nos projetos atuais e prepara o terreno para receber o novo produto, sempre com você direcionando o backlog.',
      pillars: [
        'Contrato e NDA assinados antes do kick-off; nenhum pagamento adiantado.',
        'Notas semanais no canal que você preferir com fotos do Kanban e Looms curtos.',
        'Play Store, App Store ou distribuição interna conduzidas por nós.'
      ],
      partnershipHeading: '',
      partnershipDescription: '',
      gridHeading: 'Formatos mais comuns',
      gridDescription:
        'Misture pods para novos apps, co-desenvolvimento ou integrações. Cada pod já inclui design, operações de release, infraestrutura, superfícies web/mobile e relatórios.',
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
            'Notas semanais no canal que você usa e pelo menos um Loom ou videocall com o pod por semana.',
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
          title: 'Construção Android e iOS',
          subtitle: 'Kotlin, Swift, Flutter, React Native',
          description:
            'Lançamos produtos novos ou resgatamos bases existentes, como apps, sites responsivos, landing pages e backends, enquanto cuidamos de UX writing, design system e arquitetura junto da engenharia.',
          features: [
            'Publicação na Play Store, App Store ou distribuição enterprise por nossa conta.',
            'Wearables, compras internas, SSO, analytics e push notificados.',
            'Dashboards, painéis, landing pages e ferramentas internas/externas para operações e clientes acompanharem cada release.'
          ],
          cta: 'Planejar meu app'
        },
        {
          title: 'Pod sob demanda',
          subtitle: 'Suporte, co-dev e operações de release',
          description:
            'Viramos um esquadrão paralelo que assume backlog, automação e entregas enquanto seu time interno foca na estratégia.',
          features: [
            'Acompanhamento semanal no canal do cliente com quadro Kanban compartilhado.',
            'Deploy azul/verde, rollout gradual e monitoramento previstos no contrato.',
            'Triage em até 24 horas com plantão nos lançamentos.'
          ],
          cta: 'Integrar o pod'
        },
        {
          title: 'Integrações e camadas de dados',
          subtitle: 'Pagamentos, logística, CRM e LLM/RAG',
          description:
            'Conectamos seu app a billing, logística ou bases de conhecimento com APIs e automações prontas para produção.',
          features: [
            'REST ou GraphQL com Supabase, Firebase, MySQL, MariaDB ou Postgres dedicado.',
            'Pipelines de RAG usando o stack de vetor/busca que o seu time já confia.',
            'Infraestrutura em AWS (incluindo EC2) com runbooks e checklists de release para o seu time assumir o stack.'
          ],
          cta: 'Escopar integração'
        }
      ],
      bottomCta: {
        title: 'Precisa de um parceiro mobile maduro?',
        description:
          'Conte o problema, plataforma e prazo. Respondemos em até 1 dia útil com próximos passos ou uma indicação honesta.',
        button: 'Falar com o pod'
      }
    },
    about: {
      badge: 'Provas e operação',
      headingLine1: 'Pod confiável',
      headingHighlight: 'para fundadores e gestores',
      description:
        'Somos um estúdio bilíngue em São Paulo que atende principalmente empresas dos Estados Unidos desde 2019.',
      timelineHeading: 'Como é trabalhar conosco',
      paragraphs: [
        'Você fala direto com quem decide. Mantemos pods compactos para preservar contexto, responsabilidade e visão de produto.',
        'Entramos no seu stack (Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub etc.) ou oferecemos o nosso. Mandamos notas escritas e Looms curtos três vezes por semana, além de demo semanal com riscos e custos.',
        'Engenharia de release e operações estão no mesmo time, então você não precisa de outros fornecedores para monitoramento, analytics ou treinamento. Ao finalizar, tudo fica com você.'
      ],
      missionHeading: 'Como protegemos seu roadmap',
      missionDescription:
        'Contrato assinado, registro D-U-N-S, empresa brasileira regularizada e zero pagamento antecipado. Finanças, jurídico e o time de produto ficam tranquilos.',
      clientHeading: 'Pod liderado pelo fundador',
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
          title: 'Cobertura de fuso dos EUA',
          description: 'Atuação diária no horário do leste (ET) com plantões em lançamentos.'
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
      headingHighlight: 'e receba um plano rapidamente',
      description:
        'Envie o formulário ou mande mensagem no WhatsApp. Respondemos em até 1 dia útil com leitura honesta de escopo, orçamento e kickoff, sempre explicando como diluímos o custo do pod entre clientes para manter o preço justo.',
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
          description: 'Chamadas, SMS ou WhatsApp com horários amigáveis aos EUA.'
        },
        {
          title: 'Base de operação',
          value: 'São Paulo, Brasil · fuso compatível com ET/CT',
          description: 'Estúdio brasileiro focado em clientes dos EUA desde 2019.'
        }
      ],
      whyUsHeading: 'Por que contratam a TG Apps',
      whyUs: [
        'Sem adiantamentos; cobramos só depois do início, sem surpresas e você cancela quando quiser.',
        'Registro D-U-N-S® e documentos brasileiros prontos para compras corporativas.',
        'Entrega ponta a ponta: apps, sites, landing pages, dashboards, backends e bancos de dados por um único pod.',
        'Integrações LLM e RAG com guardrails e documentação alinhados ao stack que você já usa.',
        'Cadência de deploy normalmente semanal, com pod Kanban tocando back, front, banco e mobile em paralelo + cobertura azul/verde.',
        'Chamadas em vídeo toda semana com o time de devs para revisar deploys e próximos passos, sempre adaptando o horário ao fuso do cliente.',
        'Preferiu usar o contrato da sua empresa? Envie o modelo e revisamos juntos, ajustando cláusulas antes da assinatura.',
        'Você direciona o backlog e nós apresentamos releases/demos toda semana.',
        'Preço justo: diluímos o custo do pod entre clientes em vez de cobrar taxas extras ou retenção.',
        'Oferta temporaria para as proximas 3 empresas: US$ 1.900/mes, cobranca mensal, sem adiantamento e sem clausulas escondidas enquanto o contrato estiver ativo.'
      ],
      costSection: {
        badge: 'Termos claros',
        title: 'Pod mensal fixo · cancelamento simples',
        description:
          'Oferta temporaria para as proximas 3 empresas: US$ 1.900/mes para entrega full-stack e mobile com cobranca mensal, sem adiantamento e sem clausulas escondidas. O valor fica congelado enquanto o contrato estiver ativo. Fora da oferta temporaria, o preco passa a ser definido pelo escopo e pelo modelo de entrega.',
        highlights: [
          'Oferta temporaria: US$ 1.900/mes para as proximas 3 empresas.',
          'Cobranca mensal, sem adiantamento e sem clausulas escondidas.',
          'Contrato e nota emitidos pela TG Applications Desenvolvimento Ltda (Brasil).',
          'Cobrança em USD ou BRL; W8-BEN-E já disponível.',
          'Cobertura em dias úteis + plantão em lançamentos.'
        ],
        note: 'Precisa de NDA, SOC ou questionario de fornecedor? Ja temos os modelos. A oferta temporaria vale so para as proximas 3 empresas e o valor permanece o mesmo enquanto o contrato estiver ativo.'
      },
      formHeading: 'Conte um pouco do projeto',
      formDescription: 'Só pedimos o necessário para responder com plano e datas.',
      callout: {
        title: 'O que acontece depois',
        description: 'Processo leve e sem spans.',
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
        emailPlaceholder: 'voce@empresa.com',
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
        'App Android + iOS',
        'Pod paralelo / suporte',
        'Integrações + dashboards',
        'Resgate ou modernização',
        'Discovery de produto'
      ]
    },
    footer: {
      description:
        'A TG Apps é um estúdio brasileiro liderado pelo fundador que entrega pods Android, iOS, Flutter e integrações para pequenas empresas dos EUA sem pagamento antecipado.',
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
        'Apps Android e iOS',
        'Pods paralelos e suporte',
        'Integrações LLM / RAG',
        'Dashboards e painéis',
        'Cobertura de releases'
      ],
      contactHeading: 'Contato',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 11 97971-7703',
        location: 'São Paulo · atendendo empresas dos EUA'
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
