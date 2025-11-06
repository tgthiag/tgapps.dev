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
  services: {
    badge: string;
    headingLine1: string;
    headingHighlight: string;
    description: string;
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
      budgetLabel: string;
      budgetPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      policy: string;
    };
    services: string[];
    budgets: string[];
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
        { id: 'inicio', label: 'Home' },
        { id: 'process', label: 'How we work' },
        { id: 'what-you-get', label: 'What you get from us' },
        { id: 'sobre', label: 'About' },
        { id: 'contato', label: 'Contact' }
      ],
      contactCta: 'Talk to Us',
      contactId: 'contato',
      languageLabel: 'Language'
    },
    hero: {
      badge: 'Nearshore Product Team',
      titleLine1: 'Build digital products with',
      titleHighlight: 'speed and integrity',
      titleLine2: 'from Latin America',
      subtitle:
        'TG Apps is a senior-led studio in Brazil specialized in multi-platform, born-global applications, helping North American startups and teams worldwide launch web and mobile experiences fast without inflated promises or fragile budgets.',
      stats: [
        { label: 'Founder-led delivery' },
        { label: 'Up to 3 parallel products' },
        { label: 'Replies within 1 business day' }
      ],
      primaryCta: 'Plan your build',
      secondaryCta: 'See how we work'
    },
    services: {
      badge: 'What we build',
      headingLine1: 'Boutique delivery for',
      headingHighlight: 'startups, agencies, and teams needing leverage',
      description:
        'Some clients plug us into their squads to unlock velocity; others hand us the entire product so their internal team stays focused elsewhere. Either way, we start with a call to understand outcomes, security, and success metrics before we touch scope or code.',
      gridHeading: 'What you get from us',
      gridDescription:
        'Whether we embed alongside your engineers or run a parallel squad, we bring strategy, design, engineering, performance, and ongoing care that you can mix and match for each roadmap push.',
      processHeading: 'How collaboration works',
      processLabel: 'Stage',
      processDescription:
        'Our playbook is simple: align quickly, build in tight loops, and stay to support launches. Here is what you can expect at every stage.',
      process: [
        {
          title: 'Before kickoff',
          description:
            'We schedule a free, zero-bureaucracy call (usually within one business day) to unpack your goals and share sanitized work.',
          highlights: [
            'Clarify outcomes, constraints, and budgets',
            'Choose payment model: monthly or per-task',
            'Review how we handle security, access, and NDAs'
          ]
        },
        {
          title: 'During the build',
          description:
            'We can embed with your engineers or run a parallel squad. Our studio caps at 2–3 products so founders stay on every thread, with weekly or biweekly demos and deploys.',
          highlights: [
            'Shared backlogs, docs, and async updates',
            'Direct access to the builders doing the work',
            'Transparent tracking of scope, risks, and decisions'
          ]
        },
        {
          title: 'After launch',
          description:
            'The same team that shipped your release remains available for care plans, training, and new iterations.',
          highlights: [
            'Hypercare windows and rapid bug fixes',
            'Team onboarding + documentation kits',
            'Opportunity to spin up the next roadmap item fast'
          ]
        }
      ],
      items: [
        {
          title: 'Product Websites & Apps',
          subtitle: 'Web, SaaS, and internal tools',
          description:
            'We architect and build marketing sites, SaaS dashboards, and internal tools with accessibility and analytics baked in. React is our default stack, but we happily work with whichever front-end framework fits your infrastructure. We can embed alongside your current web team or handle the entire delivery ourselves.',
          features: ['Component libraries', 'Headless CMS', 'Core Web Vitals baseline', 'Analytics instrumentation'],
          cta: 'See approach'
        },
        {
          title: 'Multiplatform Delivery',
          subtitle: 'Android, iOS, and web with one team',
          description:
            'We favor Flutter for multi-platform launches (Android, iOS, and responsive web) to keep one codebase, but we also work with Kotlin, React Native, or hybrid/WebView approaches when that better fits your roadmap. Need us to pair with your mobile squad or temporarily own the entire app while they focus elsewhere? We adapt.',
          features: ['Flutter & Dart', 'Android & iOS builds', 'Web responsive output', 'CI/CD and store submissions'],
          cta: 'See approach'
        },
        {
          title: 'Discovery & UX Sprints',
          subtitle: 'Strategy, prototypes, and research',
          description:
            'Remote workshops, prototypes, and usability reviews that clarify scope before a single line of code is written.',
          features: ['Stakeholder interviews', 'Interactive prototypes', 'Design systems', 'Usability validation'],
          cta: 'Book a sprint'
        },
        {
          title: 'API & Backend Engineering',
          subtitle: 'Pragmatic services and data',
          description:
            'Pragmatic Node.js and Python services with sensible databases, logging, and deployment pipelines.',
          features: ['REST & GraphQL', 'SQL & NoSQL', 'Cloud-ready infra', 'Observability'],
          cta: 'Discuss stack'
        },
        {
          title: 'Performance & Hardening',
          subtitle: 'Audits, speed, and security',
          description:
            'Audits and fixes that make existing products faster, more secure, and easier to operate.',
          features: ['Web Vitals remediation', 'Security headers', 'Caching strategy', 'Monitoring setup'],
          cta: 'Request audit'
        },
        {
          title: 'Care Plans & Training',
          subtitle: 'Post-launch partnerships',
          description:
            'Post-launch support handled directly by the builders so your team stays focused on roadmap work.',
          features: ['Scheduled updates', 'On-call bug fixes', 'Team onboarding', 'Documentation kits'],
          cta: 'Plan support'
        }
      ],
      bottomCta: {
        title: 'Need a reliable build partner?',
        description: 'Tell us about your roadmap and we will map a timeline, scope, and budget you can share with stakeholders.',
        button: 'Start a scope call'
      }
    },
    portfolio: {
      badge: 'How we create impact',
      headingLine1: '',
      headingHighlight: '',
      description:
        'We partner with startups, agencies, and enterprises to ship dependable web and mobile products. Tell us about your goals and we will share the most relevant references and outcomes.',
      filters: [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Websites' },
        { id: 'mobile', label: 'Mobile Apps' }
      ],
      projects: [],
      statusLabel: {
        done: 'Completed',
        inProgress: 'In progress'
      },
      projectCta: 'Request a walkthrough',
      bottomCta: {
        title: 'Curious about fit?',
        description:
          'Send a short brief and we will align scope, timelines, and proof points tailored to what you need to build next.',
        button: 'Schedule intro call'
      }
    },
    about: {
      badge: 'About Us',
      headingLine1: 'How we operate as a',
      headingHighlight: 'founder-led studio',
      description:
        'TG Apps is a boutique team in Sao Paulo supporting North American startups, agencies, and companies worldwide that need senior builders without the overhead.',
      timelineHeading: 'Partnering with US, Canadian, and global teams since 2019',
      paragraphs: [
        'We stay intentionally small so decision-makers talk directly to the people writing the code and leading the design.',
        'By limiting ourselves to two parallel builds, we keep our attention on outcomes, not headcount charts.',
        'Weekly demos, written updates, and transparent backlog tools keep budgets under control and stakeholders aligned.',
        'We cap our workload at 2-3 products at a time with weekly or biweekly planning and deploy sessions so every release stays predictable.'
      ],
      missionHeading: 'Why we exist',
      missionDescription:
        'To help lean teams ship reliable software fast through honest scoping, respectful collaboration, and accountable delivery.',
      clientHeading: 'The partners who benefit the most',
      clientTypes: [
        {
          title: 'Startups shipping MVPs end-to-end',
          description:
            'We handle databases, authentication, marketing sites, app store submissions, and APIs so founders can prove traction quickly.'
        },
        {
          title: 'Cost-sensitive teams needing leverage',
          description:
            'SMBs and agencies that cannot hire a full squad count on us to deliver a full product stream for a fraction of in-house costs.'
        }
      ],
      valuesHeading: 'Our Values',
      values: [
        {
          title: 'Honest Scoping',
          description: 'We only commit to work we can personally deliver with the right level of care.'
        },
        {
          title: 'Lean Collaboration',
          description: 'We integrate with your rituals, documentation, and tools instead of forcing new bureaucracy.'
        },
        {
          title: 'Sustainable Pace',
          description: 'Clear priorities and healthy schedules keep the team creative and dependable.'
        },
        {
          title: 'Ownership',
          description: 'Founders review every deliverable and remain involved from kickoff to iteration.'
        }
      ],
      statsHeading: 'What you can expect',
      stats: [
        { number: '2-3', label: 'Products handled in parallel' },
        { number: '<=1 day', label: 'Typical response time during the week' },
        { number: 'EST+1', label: 'Time zone overlap from Sao Paulo' },
        { number: 'Weekly/Biweekly', label: 'Demo and deploy cadence' }
      ],
      passionTitle: 'Principles we live by',
      passionDescription: 'Stay curious, stay transparent, and keep clients confident about what comes next.'
    },
    contact: {
      badge: 'Talk to Us',
      headingLine1: 'Let’s plan',
      headingHighlight: 'your next release',
      description:
        'Share the outcome you need and we will set up a zero-cost, zero-bureaucracy call within one business day to show how we work, walk through security, and align scope, timelines, and examples before kickoff.',
      infoHeading: 'How to reach us',
      info: [
        { title: 'Email', value: 'support@tgapps.dev', description: 'Responses within one business day' },
        { title: 'Phone / WhatsApp', value: '+55 (11) 97971-7703', description: 'Weekdays, 9am–6pm BRT (EST+1)' },
        { title: 'Location', value: 'Sao Paulo, Brazil', description: 'Nearshore to North America with global delivery' }
      ],
      whyUsHeading: 'Why partner with TG Apps?',
      whyUs: [
        'Founder involvement from brief to launch',
        'North America-friendly overlap plus English-first, global delivery',
        'Flexible billing: monthly retainers or per-task scopes',
        'Transparent budgets built for startups and SMBs',
        'No surprise fees—what we agree on is the only cost, and you direct us as needs evolve',
        'Post-launch support handled by the same builders',
        'Fast kickoff calls—if you thought about it, we are already building'
      ],
      formHeading: 'Request a scope outline',
      formDescription:
        'Tell us about the milestone, constraints, and assets available so we can prepare a quick call covering process, security, references, and realistic timelines.',
      callout: {
        title: 'Book a zero-bureaucracy kickoff call',
        description:
          'Before we write a single line of code we can jump on a fast, free call to explain how we help, how delivery works, and what security measures we adopt.',
        bullets: [
          'Understand the problem and how we can plug in',
          'Review workflow, tooling, and collaboration model',
          'Show anonymized work samples and security practices',
          'Align scope, budget, and timelines—if you thought about it, we’re already building'
        ]
      },
      successTitle: 'Message sent!',
      successMessage: 'We will get back to you within one business day.',
      form: {
        nameLabel: 'Full name *',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email *',
        emailPlaceholder: 'you@email.com',
        phoneLabel: 'Phone',
        phonePlaceholder: '(11) 99999-9999',
        serviceLabel: 'Service type *',
        servicePlaceholder: 'Select a service',
        budgetLabel: 'Estimated budget (USD)',
        budgetPlaceholder: 'Select a range',
        messageLabel: 'Describe your project *',
        messagePlaceholder: 'Tell us about your project, goals, and expectations...',
        submit: 'Send Message',
        submitting: 'Sending...',
        policy: 'By submitting this form you agree to our privacy policy and terms of use.'
      },
      services: [
        'Web Development',
        'Mobile App',
        'UI/UX Design',
        'E-commerce',
        'Custom System',
        'Product Discovery',
        'Technical Consulting',
        'Other'
      ],
      budgets: [
        'USD 5k - USD 15k',
        'USD 15k - USD 30k',
        'USD 30k - USD 50k',
        'USD 50k - USD 100k',
        'Above USD 100k',
        'Prefer not to say'
      ]
    },
    footer: {
      description:
        'Founder-led nearshore studio crafting dependable web and mobile products for North American and global teams.',
      navigationHeading: 'Navigation',
      navigation: [
        { id: 'inicio', label: 'Home' },
        { id: 'process', label: 'How we work' },
        { id: 'what-you-get', label: 'What you get from us' },
        { id: 'sobre', label: 'About Us' },
        { id: 'contato', label: 'Contact' }
      ],
      contactHeading: 'Contact',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 (11) 99999-9999',
        location: 'São Paulo, Brazil'
      },
      cta: 'Plan your build',
      bottom: {
        copyright: '© {year} TG Apps. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use'
      }
    }
  },
  pt: {
    header: {
      navItems: [
        { id: 'inicio', label: 'Início' },
        { id: 'process', label: 'Como trabalhamos' },
        { id: 'what-you-get', label: 'O que entregamos' },
        { id: 'sobre', label: 'Sobre' },
        { id: 'contato', label: 'Contato' }
      ],
      contactCta: 'Fale Conosco',
      contactId: 'contato',
      languageLabel: 'Idioma'
    },
    hero: {
      badge: 'Time nearshore de produtos',
      titleLine1: 'Construímos produtos digitais com',
      titleHighlight: 'velocidade e compromisso',
      titleLine2: 'direto de São Paulo',
      subtitle:
        'A TG Apps é um estúdio sênior no Brasil especializado na criação de aplicações multiplataforma e born-global, apoiando startups e empresas na América do Norte e no mundo todo a lançar experiências web e mobile com rapidez, transparência e orçamentos honestos.',
      stats: [
        { label: 'Fundadores no dia a dia' },
        { label: 'Até 3 projetos em paralelo' },
        { label: 'Resposta em até 1 dia útil' }
      ],
      primaryCta: 'Planejar projeto',
      secondaryCta: 'Conhecer nosso fluxo'
    },
    services: {
      badge: 'O que entregamos',
      headingLine1: 'Soluções sob medida para',
      headingHighlight: 'startups, agências e times que precisam de reforço',
      description:
        'Às vezes atuamos em conjunto com o seu time para liberar velocidade; em outras, assumimos o produto inteiro enquanto a equipe interna cuida de outro projeto. Sempre começamos alinhando resultados, segurança e sucesso antes de falar de escopo.',
      gridHeading: 'O que entregamos para você',
      gridDescription:
        'Estamos prontos para somar ao seu squad ou tocar um escopo paralelo, cobrindo estratégia, design, engenharia, performance e suporte contínuo conforme o momento do roadmap.',
      processHeading: 'Como trabalhamos com você',
      processLabel: 'Etapa',
      processDescription:
        'Nosso fluxo é direto: alinhar rápido, construir em ciclos curtos e permanecer após o lançamento. Veja o que acontece em cada etapa.',
      process: [
        {
          title: 'Antes do kickoff',
          description:
            'Agendamos uma call gratuita (geralmente em até 1 dia útil) para entender objetivos e mostrar exemplos anonimizados.',
          highlights: [
            'Mapear resultados, restrições e orçamento',
            'Escolher o modelo de pagamento: mensal ou por tarefa',
            'Revisar como cuidamos de segurança, acessos e NDAs'
          ]
        },
        {
          title: 'Durante o desenvolvimento',
          description:
            'Limitamos o estúdio a 2–3 produtos para manter fundadores em cada decisão. Há demos e deploys semanais ou quinzenais.',
          highlights: [
            'Backlog compartilhado, documentação e updates assíncronos',
            'Acesso direto a quem está construindo',
            'Visibilidade total de escopo, riscos e decisões'
          ]
        },
        {
          title: 'Depois do lançamento',
          description:
            'O mesmo time continua disponível para suporte, treinamento e novas iterações sem perder contexto.',
          highlights: [
            'Janelas de hypercare e correções rápidas',
            'Onboarding do seu time + pacotes de documentação',
            'Facilidade para iniciar o próximo item do roadmap'
          ]
        }
      ],
      items: [
        {
          title: 'Sites e apps em React',
          subtitle: 'Web, SaaS e ferramentas internas',
          description:
            'Desenhamos e construímos sites, SaaS e ferramentas internas com acessibilidade e métricas desde o início. Preferimos React, mas trabalhamos com o framework que fizer sentido para a sua infraestrutura, seja atuando com seu time ou tocando o desenvolvimento sozinho.',
          features: ['Biblioteca de componentes', 'Headless CMS', 'Base Core Web Vitals', 'Instrumentação de analytics'],
          cta: 'Ver abordagem'
        },
        {
          title: 'Delivery multiplataforma',
          subtitle: 'Android, iOS e web no mesmo código',
          description:
            'Preferimos Flutter para lançar Android, iOS e web responsivo a partir de um único codebase, mas também trabalhamos com Kotlin, React Native ou WebView quando o projeto pede. Podemos atuar junto ao seu squad mobile ou assumir o app enquanto a equipe interna foca em outro produto.',
          features: ['Flutter & Dart', 'Builds Android & iOS', 'Saída web responsiva', 'CI/CD e publicação nas lojas'],
          cta: 'Ver abordagem'
        },
        {
          title: 'Discovery e UX Sprints',
          subtitle: 'Estratégia, protótipos e pesquisa',
          description:
            'Workshops remotos, protótipos e testes que alinham objetivos e reduzem retrabalho antes do desenvolvimento.',
          features: ['Entrevistas com stakeholders', 'Protótipos interativos', 'Design system', 'Validações de usabilidade'],
          cta: 'Agendar sprint'
        },
        {
          title: 'APIs e Backend pragmático',
          subtitle: 'Serviços e dados confiáveis',
          description:
            'Serviços em Node.js e Python com bancos adequados, logs e pipelines prontos para operação.',
          features: ['REST & GraphQL', 'SQL & NoSQL', 'Infra pronta para nuvem', 'Observabilidade'],
          cta: 'Definir stack'
        },
        {
          title: 'Performance e Hardening',
          subtitle: 'Auditorias, velocidade e segurança',
          description:
            'Auditorias e correções que deixam produtos existentes mais rápidos, seguros e fáceis de manter.',
          features: ['Correções Web Vitals', 'Headers de segurança', 'Estratégia de cache', 'Monitoramento'],
          cta: 'Solicitar auditoria'
        },
        {
          title: 'Planos de suporte e treinamento',
          subtitle: 'Parceria pós-lançamento',
          description:
            'O mesmo time que constrói acompanha lançamentos, treinamentos e melhorias contínuas.',
          features: ['Atualizações programadas', 'Correções sob demanda', 'Onboarding do time', 'Pacotes de documentação'],
          cta: 'Planejar suporte'
        }
      ],
      bottomCta: {
        title: 'Precisa de um parceiro confiável?',
        description: 'Conte seu roadmap e montamos um cronograma com esforço e custos prontos para compartilhar com o time.',
        button: 'Agendar call de escopo'
      }
    },
    portfolio: {
      badge: 'Como geramos impacto',
      headingLine1: '',
      headingHighlight: '',
      description:
        'Atuamos com startups, agências e empresas para lançar produtos web e mobile confiáveis. Conte seus objetivos e compartilhamos os cases e resultados que fazem mais sentido para você.',
      filters: [
        { id: 'all', label: 'Todos os Projetos' },
        { id: 'web', label: 'Websites' },
        { id: 'mobile', label: 'Apps Mobile' }
      ],
      projects: [],
      statusLabel: {
        done: 'Concluído',
        inProgress: 'Em desenvolvimento'
      },
      projectCta: 'Pedir walkthrough',
      bottomCta: {
        title: 'Quer entender o fit?',
        description:
          'Envie um briefing e alinhamos escopo, prazos e evidências sob medida para o que você precisa construir agora.',
        button: 'Marcar call introdutória'
      }
    },
    about: {
      badge: 'Sobre nós',
      headingLine1: 'Como trabalhamos como',
      headingHighlight: 'estúdio liderado por fundadores',
      description:
        'A TG Apps é um time boutique em São Paulo que apoia empresas da América do Norte e de outros países com engenharia e design sênior sem inflar estruturas internas.',
      timelineHeading: 'Conectados a equipes dos EUA e Canadá desde 2019',
      paragraphs: [
        'Mantemos o time enxuto para que clientes falem diretamente com quem escreve o código e desenha as experiências.',
        'Limitamos os projetos simultâneos para garantir foco, disponibilidade e decisões rápidas.',
        'Demos semanais, relatórios escritos e ferramentas compartilhadas mantêm todos alinhados sobre escopo, prazo e orçamento.',
        'Trabalhamos com no máximo 2-3 produtos ao mesmo tempo e realizamos reuniões e deploys semanais ou quinzenais para manter cada entrega previsível.'
      ],
      missionHeading: 'Por que existimos',
      missionDescription:
        'Ajudar times enxutos a lançar software confiável de forma rápida por meio de escopos honestos, colaboração respeitosa e entrega responsável.',
      clientHeading: 'Quem mais se beneficia',
      clientTypes: [
        {
          title: 'Startups criando MVPs completos',
          description:
            'Cuidamos de banco de dados, autenticação, site, apps nas lojas e APIs para que fundadores validem o mercado o quanto antes.'
        },
        {
          title: 'Empresas com orçamento enxuto',
          description:
            'Negócios e agências que não podem contratar um time inteiro contam conosco para entregar muito mais por uma fração do custo interno.'
        }
      ],
      valuesHeading: 'Nossos valores',
      values: [
        {
          title: 'Escopos honestos',
          description: 'Só assumimos demandas que conseguimos entregar pessoalmente com qualidade.'
        },
        {
          title: 'Colaboração enxuta',
          description: 'Entramos no seu processo, adotamos suas ferramentas e evitamos burocracia desnecessária.'
        },
        {
          title: 'Ritmo sustentável',
          description: 'Sprints claros e prioridades realistas mantêm o time motivado e previsível.'
        },
        {
          title: 'Ownership total',
          description: 'Fundadores revisam cada entrega e participam ativamente do dia a dia.'
        }
      ],
      statsHeading: 'O que você pode esperar',
      stats: [
        { number: '2-3', label: 'Produtos em paralelo' },
        { number: '<=1 dia', label: 'Tempo típico de resposta útil' },
        { number: 'Fuso EST+1', label: 'Colaboração em tempo real' },
        { number: 'Semanal/quinzenal', label: 'Ritmo de reuniões e deploys' }
      ],
      passionTitle: 'Princípios que seguimos',
      passionDescription: 'Clareza, respeito ao orçamento e foco total em entregar software utilizável.'
    },
    contact: {
      badge: 'Fale Conosco',
      headingLine1: 'Vamos planejar',
      headingHighlight: 'seu próximo lançamento',
      description:
        'Conte qual resultado precisa alcançar e marcamos em até um dia útil uma call gratuita, sem burocracia, para explicar como trabalhamos, como cuidamos da segurança e quais exemplos podemos compartilhar antes de começar.',
      infoHeading: 'Como nos encontrar',
      info: [
        { title: 'Email', value: 'support@tgapps.dev', description: 'Respostas em até 1 dia útil' },
        { title: 'Telefone / WhatsApp', value: '+55 (11) 97971-7703', description: 'Seg–Sex, 9h às 18h BRT (EST+1)' },
        { title: 'Localização', value: 'São Paulo, SP', description: 'Atuação nearshore para Am. do Norte e clientes globais' }
      ],
      whyUsHeading: 'Por que trabalhar com a TG Apps?',
      whyUs: [
        'Fundadores envolvidos do briefing ao deploy',
        'Processo pensado para colaboração com EUA/Canadá e clientes globais',
        'Pagamentos flexíveis: mensalidade ou tarefas conforme a necessidade',
        'Orçamentos transparentes: o que combinarmos será o único custo e você nos direciona conforme a demanda',
        'Suporte pós-lançamento com o mesmo time que construiu',
        'Call rápida e sem burocracia — pensou em algo, já estamos construindo'
      ],
      formHeading: 'Peça um esboço de escopo',
      formDescription:
        'Compartilhe contexto, restrições e materiais disponíveis para prepararmos uma call curta cobrindo processo, segurança, exemplos e prazos realistas.',
      callout: {
        title: 'Agende uma call rápida e gratuita',
        description:
          'Antes de começar, fazemos uma conversa sem custo para mostrar como posso ajudar, como será o trabalho, como cuidamos da segurança e quais exemplos podemos compartilhar.',
        bullets: [
          'Entenda o fluxo de trabalho e como integramos ao seu time',
          'Veja exemplos de entregas e práticas de segurança',
          'Alinhe escopo, prazos e formatos de pagamento em minutos',
          'Marcamos rápido porque odiamos burocracia — pensou em algo, já estamos construindo'
        ]
      },
      successTitle: 'Mensagem enviada!',
      successMessage: 'Respondemos em até um dia útil. Obrigado!',
      form: {
        nameLabel: 'Nome completo *',
        namePlaceholder: 'Seu nome completo',
        emailLabel: 'Email *',
        emailPlaceholder: 'seu@email.com',
        phoneLabel: 'Telefone',
        phonePlaceholder: '(11) 99999-9999',
        serviceLabel: 'Tipo de serviço *',
        servicePlaceholder: 'Selecione um serviço',
        budgetLabel: 'Orçamento estimado (USD)',
        budgetPlaceholder: 'Selecione uma faixa',
        messageLabel: 'Descreva seu projeto *',
        messagePlaceholder: 'Conte-nos mais sobre seu projeto, objetivos e expectativas...',
        submit: 'Enviar Mensagem',
        submitting: 'Enviando...',
        policy: 'Ao enviar este formulário, você concorda com nossa política de privacidade e termos de uso.'
      },
      services: [
        'Desenvolvimento Web',
        'Aplicativo Mobile',
        'UI/UX Design',
        'E-commerce',
        'Sistema Personalizado',
        'Discovery de Produto',
        'Consultoria Técnica',
        'Outro'
      ],
      budgets: [
        'USD 5k - USD 15k',
        'USD 15k - USD 30k',
        'USD 30k - USD 50k',
        'USD 50k - USD 100k',
        'Acima de USD 100k',
        'Prefiro não informar'
      ]
    },
    footer: {
      description:
        'Estúdio nearshore liderado por fundadores criando produtos web e mobile confiáveis para equipes na América do Norte e no resto do mundo.',
      navigationHeading: 'Navegação',
      navigation: [
        { id: 'inicio', label: 'Início' },
        { id: 'process', label: 'Como trabalhamos' },
        { id: 'what-you-get', label: 'O que entregamos' },
        { id: 'sobre', label: 'Sobre Nós' },
        { id: 'contato', label: 'Contato' }
      ],
      contactHeading: 'Contato',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 (11) 99999-9999',
        location: 'São Paulo, SP'
      },
      cta: 'Planejar projeto',
      bottom: {
        copyright: '© {year} TG Apps. Todos os direitos reservados.',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Uso'
      }
    }
  }
};
