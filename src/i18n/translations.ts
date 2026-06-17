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
      badge: 'Mobile-first product delivery · Flexible engagement models',
      titleLine1: 'Build from zero, rescue what stalled,',
      titleHighlight: 'or add execution where your team needs it.',
      titleLine2: '',
      subtitle:
        'Tg Apps helps founders and small startups build apps and backend systems from zero, finish stalled products, or work alongside internal teams through a clear first delivery and predictable month-to-month continuity.',
      stats: [
        { label: 'D-U-N-S® 651029828' },
        { label: 'Growth plan: USD 2,000/mo' },
        { label: 'First Milestone Guarantee' },
        { label: 'No upfront payment to start' }
      ],
      primaryCta: 'Define my first delivery',
      secondaryCta: 'See how we fit your team'
    },
    socialProof: {
      heading: 'Built for products at different stages',
      description:
        'Some clients start from zero. Others need a stalled product back on track. Others bring us in to own one critical area or work alongside their internal team. The common thread is accountable delivery.'
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
      badge: 'Flexible delivery models',
      headingLine1: 'How we work',
      headingHighlight: 'with your company',
      description:
        'We do not sell one rigid format. Start from the situation that looks most like yours, then use the delivery model and technical fronts that fit the product.',
      pillars: [
        'Mobile-first delivery for Android, iOS, Play Store, App Store, private MDM, and phased releases.',
        'Flexible ownership: full build, area ownership, embedded support, or co-delivery depending on the structure.',
        'Clear scope, weekly demos, release support, documentation, and handoff when applicable.'
      ],
      partnershipHeading: '',
      partnershipDescription: '',
      gridHeading: 'Start from the situation that looks most like yours',
      gridDescription:
        'The same Tg Apps can build from zero, rescue what stalled, or work alongside your team. What changes is the way we enter and what we own first.',
      processHeading: 'Three common ways clients bring us in',
      processDescription:
        'Choose the entry point that fits your product stage. We can still expand, narrow, or hand off the scope later.',
      processLabel: 'Scenario',
      process: [
        {
          title: 'Build from zero',
          description: 'For founders and small teams that need an app, backend, dashboard, or internal system built from the ground up.',
          highlights: [
            'We help define the first practical delivery instead of leaving you with open-ended planning.',
            'App, backend, stores, deploy, and release flow can be scoped together.',
            'Best fit when there is product intent, but not a full internal engineering structure yet.'
          ]
        },
        {
          title: 'Rescue and evolve',
          description: 'For teams with a stalled app, unfinished backend, rough prototype, or release flow that needs to become usable again.',
          highlights: [
            'We audit what exists, define what is worth fixing, and move toward a usable release path.',
            'Good fit for products that were started by another developer or changed direction midway.',
            'The goal is not only to patch, but to get the product moving again.'
          ]
        },
        {
          title: 'Work with your team',
          description: 'For companies that already have developers, an agency, or another vendor, but need stronger delivery in one area or across a critical stream.',
          highlights: [
            'We can take full ownership of one front or work in parallel with the existing team.',
            'Best fit when the company needs more output, better release rhythm, or stronger technical follow-through.',
            'Useful for mobile, backend, integrations, and operational tooling.'
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
        title: 'Need a partner that can build from zero, rescue what stalled, or reinforce your team?',
        description:
          'Send us the current product context, team setup, repo, process, or product idea. We respond in under one business day with blockers, risks, next steps, and the most practical way to start.',
        button: 'Discuss the delivery model'
      }
    },
    about: {
      badge: 'Proof and operating models',
      headingLine1: 'One partner,',
      headingHighlight: 'different ways to deliver',
      description:
        'We are a bilingual studio in São Paulo supporting companies through long-term mobile-first product delivery, adapting to the way each team actually works.',
      timelineHeading: 'How we fit inside real teams',
      paragraphs: [
        'In some companies we build and launch the entire product. In others we own one area, work alongside internal developers, or handle the critical stack while other teams cover adjacent work.',
        'We adapt to your stack: Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub, or any channel you already use, or bring ours. The delivery model can be more embedded or more independent, but accountability stays clear.',
        'What stays constant is continuity. Mobile, backend, internal tools, release, and operational context stay connected, even when the way we collaborate changes.'
      ],
      missionHeading: 'How we protect continuity',
      missionDescription:
        'Signed agreement, D-U-N-S record, and Brazilian LLC paperwork keep finance and legal comfortable while delivery keeps moving.',
      clientHeading: 'Flexible model, clear accountability',
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
          'We review your goals, explain how we usually approach similar challenges, outline the recommended technical path, and define a practical first milestone.',
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
        'Tg Apps supports growing teams with mobile-first product delivery across apps, CRM, internal tools, backend, and AI integrations, operating as a full owner, embedded partner, or co-delivery team depending on the work.',
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
      badge: 'Entrega com foco em mobile · jeitos flexíveis de trabalhar',
      titleLine1: 'Construa do zero, destrave o que travou,',
      titleHighlight: 'ou coloque mais força onde seu time precisa.',
      titleLine2: '',
      subtitle:
        'A Tg Apps ajuda fundadores e startups pequenas a construir apps e backends do zero, concluir produtos travados ou trabalhar junto do time interno com uma primeira entrega clara e continuidade mês a mês.',
      stats: [
        { label: 'D-U-N-S® 651029828' },
        { label: 'Growth US$ 2.000/mês' },
        { label: 'Garantia da Primeira Entrega' },
        { label: 'Sem pagamento antecipado para começar' }
      ],
      primaryCta: 'Definir minha primeira entrega',
      secondaryCta: 'Ver como a Tg Apps entra no time'
    },
    socialProof: {
      heading: 'Entrega real em estágios diferentes do produto',
      description:
        'Alguns clientes começam do zero. Outros precisam concluir o que travou. Outros trazem a Tg Apps para tocar uma frente crítica ou trabalhar junto do time. O ponto em comum é responsabilidade clara de entrega.'
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
      badge: 'Modelos flexíveis de entrega',
      headingLine1: 'Como trabalhamos',
      headingHighlight: 'com a sua empresa',
      description:
        'A Tg Apps não vende um formato rígido. O melhor ponto de partida depende do estágio do produto, da estrutura atual e do que precisa andar primeiro.',
      pillars: [
        'Entrega com prioridade para mobile: Android, iOS, Play Store, App Store, distribuição interna e deploys graduais.',
        'Jeito flexível de trabalhar: assumir a entrega inteira, tocar uma área específica, entrar junto do time ou atuar em conjunto com outras equipes, conforme a estrutura.',
        'Escopo claro, demonstrações semanais, suporte de deploy, documentação e transferência técnica quando aplicável.'
      ],
      partnershipHeading: '',
      partnershipDescription: '',
      gridHeading: 'Comece pela situação que mais parece com a sua',
      gridDescription:
        'A mesma Tg Apps pode construir do zero, destravar o que travou ou entrar junto do time. O que muda é a forma de entrada e o que a gente assume primeiro.',
      processHeading: 'Três jeitos comuns de a Tg Apps entrar',
      processDescription:
        'Escolha o ponto de entrada que combina com o estágio do produto. Depois disso, a atuação pode expandir, se ajustar ou ser transferida com clareza.',
      processLabel: 'Cenário',
      process: [
        {
          title: 'Construir do zero',
          description: 'Para fundadores e times pequenos que precisam tirar um app, backend, dashboard ou sistema interno do papel.',
          highlights: [
            'Ajudamos a definir uma primeira entrega prática em vez de deixar tudo em planejamento aberto.',
            'App, backend, loja, deploy e release podem entrar no mesmo escopo inicial.',
            'Melhor encaixe quando existe intenção de produto, mas ainda não existe estrutura interna forte.'
          ]
        },
        {
          title: 'Resgatar e evoluir',
          description: 'Para times com app travado, backend incompleto, protótipo cru ou fluxo de release que precisa voltar a andar.',
          highlights: [
            'A gente avalia o que já existe, decide o que vale corrigir e move para um caminho utilizável de entrega.',
            'Bom encaixe para produtos iniciados por outro dev ou que mudaram de direção no meio.',
            'A meta não é só corrigir, é voltar a colocar o produto em movimento.'
          ]
        },
        {
          title: 'Entrar junto do time',
          description: 'Para empresas que já têm devs, agência ou outro fornecedor, mas precisam de mais entrega em uma frente crítica.',
          highlights: [
            'Podemos assumir uma frente inteira ou trabalhar em paralelo com a equipe atual.',
            'Bom encaixe quando o produto precisa de mais ritmo, mais release ou mais profundidade técnica em uma área.',
            'Funciona muito bem para mobile, backend, integrações e ferramentas operacionais.'
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
        title: 'Precisa de um parceiro para construir do zero, destravar o que travou ou reforçar seu time?',
        description:
          'Envie o contexto atual do produto, do time, do repositório, do processo ou da ideia. Respondemos em até 1 dia útil com bloqueios, riscos, próximos passos e a forma mais prática de começar.',
        button: 'Falar sobre o encaixe do time'
      }
    },
    about: {
      badge: 'Provas e modelos de atuação',
      headingLine1: 'Um parceiro,',
      headingHighlight: 'jeitos diferentes de entregar',
      description:
        'Somos um estúdio bilíngue em São Paulo que apoia empresas com entregas de longo prazo e foco em mobile, sempre adaptadas ao jeito que cada time realmente trabalha.',
      timelineHeading: 'Como nos encaixamos em times reais',
      paragraphs: [
        'Em algumas empresas construímos e colocamos tudo no ar. Em outras assumimos uma área, trabalhamos ao lado de devs internos ou tocamos a parte crítica enquanto outras equipes cobrem frentes adjacentes.',
        'Entramos nas ferramentas que você já usa (Teams, Jira, Linear, Notion, ClickUp, Trello, GitHub etc.) ou oferecemos as nossas. O formato pode ser mais embarcado ou mais independente, mas a responsabilidade de entrega continua clara.',
        'O que não muda é a continuidade. Mobile, backend, ferramentas internas, release e contexto operacional ficam conectados mesmo quando o modelo de trabalho muda.'
      ],
      missionHeading: 'Como protegemos a continuidade',
      missionDescription:
        'Contrato assinado, registro D-U-N-S, empresa brasileira regularizada e escopo claro desde o início. Finanças, jurídico e o time de produto ficam tranquilos.',
      clientHeading: 'Modelo flexível, accountability clara',
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
        title: 'Quer falar por WhatsApp?',
        description: 'Abra uma conversa direta com a Tg Apps e explique o que você quer construir.'
      },
      formHeading: 'Conte um pouco do projeto',
      formDescription: 'Só pedimos o necessário para responder com plano e datas.',
      callout: {
        title: 'Próximos passos',
        description: 'Processo leve e sem spam.',
        bullets: [
          'Respondemos em até 1 dia útil com dúvidas pontuais.',
          'Marcamos uma conversa de 30 a 45 minutos para alinhar orçamento, prazo e acessos.',
          'Revisamos seus objetivos, explicamos como normalmente abordamos desafios parecidos, desenhamos o caminho técnico recomendado e definimos uma primeira entrega prática.',
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
        'A Tg Apps apoia times em crescimento com entregas de produto focadas em mobile, apps, CRM, ferramentas internas, backend e integrações de IA, assumindo a entrega quando faz sentido, entrando junto do time ou atuando em conjunto com outras equipes, conforme o contexto.',
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

