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
      badge: 'Custom software · Dev as a Service',
      titleLine1: 'More software delivery',
      titleHighlight: 'per dollar.',
      titleLine2: '',
      subtitle:
        "One product team for mobile, web, CRM, backend, and AI integrations without the overhead of a large agency or a full internal engineering team. Most clients come to us after a freelancer stalled, an agency overcharged, or an internal hire did not work out. We scope what is actually needed, build it, and ship with weekly demos, clear handoff, and no upfront payment.",
      stats: [
        { label: 'D-U-N-S® 651029828' },
        { label: 'USD 2,000/mo' },
        { label: 'Zero upfront' },
        { label: 'Cancel anytime' }
      ],
      primaryCta: 'Schedule a discovery call',
      secondaryCta: 'Review the 3-step plan'
    },
    socialProof: {
      heading: 'Trusted by founders and operators',
      description:
        'A few brands and operators we support across custom software delivery, product execution, and ongoing operations.'
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
        title: 'Need more software delivery without hiring a full product team?',
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
        'Current monthly rate: USD 2,000/mo, fixed for your account while the engagement stays active.'
      ],
      costSection: {
        badge: 'Transparent terms',
        title: 'Current monthly rate: USD 2,000/mo',
        description:
          'Current monthly rate: USD 2,000/mo for custom software, internal tools, apps, integrations, and release support with monthly billing, no upfront payment, and no hidden clauses. If you hire us at this rate, it stays fixed for your account while the engagement remains active.',
        highlights: [
          'Custom software, internal tools, apps, integrations, and release support.',
          'Monthly billing, no upfront payment, and no hidden clauses.',
          'Cancel any month; no lock-in.',
          'Rate stays fixed while your engagement remains active.',
          'Contracts and invoices issued by TG Applications Desenvolvimento Ltda (Brazil).',
          'USD or BRL billing; W8-BEN-E already on file.'
        ],
        note: 'Need NDAs, SOC, or vendor questionnaires? We keep sanitized templates ready. Clients who hire us at the current USD 2,000/mo rate keep it fixed while the engagement stays active.'
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
        'Mobile app development',
        'Custom CRM / internal tools',
        'App rescue / release execution',
        'Backend / API / integrations',
        'AI / LLM integration',
        'Born-global app',
        'Product discovery'
      ]
    },
    footer: {
      description:
        'TG Apps helps founders, startups, and growing teams get more software delivery per dollar across mobile apps, CRM, internal tools, backend, AI integrations, and release support.',
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
        location: 'São Paulo · serving US and global clients'
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
      badge: 'Software sob medida · time sob demanda',
      titleLine1: 'Mais software entregue',
      titleHighlight: 'por valor investido.',
      titleLine2: '',
      subtitle:
        'Um time de produto para mobile, web, CRM, backend e integrações de IA sem o overhead de uma agência grande ou de um time interno completo. Ajudamos quando um freelancer travou, uma agência cobrou demais ou a contratação interna não funcionou. Escopamos o que realmente precisa ser feito, construímos e colocamos no ar com demos semanais, handoff claro e sem pagamento antecipado.',
      stats: [
        { label: 'D-U-N-S® 651029828' },
        { label: 'US$ 2.000/mês' },
        { label: 'Sem adiantamento' },
        { label: 'Cancele quando quiser' }
      ],
      primaryCta: 'Agende uma conversa',
      secondaryCta: 'Conheça o plano em 3 etapas'
    },
    socialProof: {
      heading: 'Confiança de fundadores e operadores',
      description:
        'Algumas marcas e operações que apoiamos em software sob medida, execução de produto e operação contínua.'
    },
      services: {
      badge: 'Capacidades de software sob medida',
      headingLine1: 'O que construímos',
      headingHighlight: 'quando seu produto ou operação precisa andar',
      description:
        'Use a TG Apps para uma construção completa, um resgate de app ou um avanço específico de produto. Mobile, CRM, backend, IA, integrações, infraestrutura e release ficam conectados em um único time responsável.',
      pillars: [
        'Entrega mobile-first para Android, iOS, Play Store, App Store, distribuição interna e releases graduais.',
        'Sistemas operacionais feitos para o jeito que a empresa realmente trabalha, não para limites de SaaS genérico.',
        'Escopo claro, demos semanais, suporte de release, documentação e handoff quando aplicável.'
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
          title: 'Apps mobile',
          subtitle: 'Android, iOS, lojas e releases privados',
          description:
            'Apps nativos ou multiplataforma feitos para usuários reais, lojas reais e restrições reais de release. Play Store, App Store, distribuição interna, rollout gradual, monitoramento e suporte podem ficar com a gente.',
          features: [
            'Fluxos Android e iOS conectados a backend, banco de dados, analytics e painéis administrativos.',
            'Preparação de release, assets de loja, links de privacidade, correções de review e rollout gradual.',
            'Arquitetura prática para seu time continuar evoluindo depois do handoff.'
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
          title: 'Resgate de app e execução de release',
          subtitle: 'Auditar, corrigir, publicar e iterar',
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
          title: 'Backend, APIs e integrações',
          subtitle: 'Dados, auth, billing e infraestrutura',
          description:
            'Construímos a camada operacional por trás do app: APIs, bancos, autenticação, billing, logística, integrações com CRM, dashboards, infraestrutura AWS, runbooks e checklists de release.',
          features: [
            'REST ou GraphQL com Supabase, Firebase, MySQL, MariaDB ou Postgres dedicado.',
            'Integrações com pagamentos, logística, CRM, analytics, email e fluxos internos.',
            'Infraestrutura e documentação pensadas para seu time assumir o stack depois do handoff.'
          ],
          cta: 'Escopar integração'
        },
        {
          title: 'Integrações de IA e LLM',
          subtitle: 'Fluxos úteis, guardrails e documentação',
          description:
            'Adicionamos fluxos de LLM a produtos e ferramentas reais sem transformar o app em demo. Conectamos IA ao stack de busca, vetor, CRM ou conhecimento que o seu time já confia.',
          features: [
            'Outputs estruturados, aprovação humana, logs, fallback e guardrails práticos.',
            'Copilotos, documentos, apoio a CRM, busca, triagem e automações internas.',
            'Documentação separando comportamento do modelo, regras de negócio e revisão humana.'
          ],
          cta: 'Adicionar IA ao produto'
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
        }
      ],
      bottomCta: {
        title: 'Precisa de mais entrega de software sem contratar um time interno completo?',
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
      badge: 'Pronto para começar',
      headingLine1: 'Conte o que você precisa',
      headingHighlight: 'e receba uma leitura honesta',
      description:
        'Envie o formulário ou mande mensagem no WhatsApp. Respondemos em até 1 dia útil com uma leitura direta de escopo, orçamento, kickoff, bloqueios e encaixe.',
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
        'Valor mensal atual: US$ 2.000/mês, fixo para sua conta enquanto o engajamento permanecer ativo.'
      ],
      costSection: {
        badge: 'Termos claros',
        title: 'Valor mensal atual: US$ 2.000/mês',
        description:
          'Valor mensal atual: US$ 2.000/mês para software sob medida, ferramentas internas, apps, integrações e suporte de release com cobrança mensal, sem adiantamento e sem cláusulas escondidas. Quem contratar nesse valor mantém o valor fixo enquanto o engajamento permanecer ativo.',
        highlights: [
          'Software sob medida, ferramentas internas, apps, integrações e suporte de release.',
          'Cobrança mensal, sem adiantamento e sem cláusulas escondidas.',
          'Cancele em qualquer mês; sem lock-in.',
          'Valor fixo enquanto o engajamento permanecer ativo.',
          'Contrato e nota emitidos pela TG Applications Desenvolvimento Ltda (Brasil).',
          'Cobrança em USD ou BRL; W8-BEN-E já disponível.'
        ],
        note: 'Precisa de NDA, SOC ou questionário de fornecedor? Já temos os modelos. Clientes que contratarem no valor atual de US$ 2.000/mês mantêm esse valor fixo enquanto o engajamento estiver ativo.'
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
        'Desenvolvimento de app mobile',
        'CRM / ferramentas internas',
        'Resgate de app / lançamento',
        'Backend / API / integrações',
        'Integração de IA / LLM',
        'App born global',
        'Discovery de produto'
      ]
    },
    footer: {
      description:
        'A TG Apps ajuda fundadores, startups e empresas em crescimento a obter mais entrega de software por valor investido em apps, CRM, ferramentas internas, backend, IA e suporte de release.',
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
