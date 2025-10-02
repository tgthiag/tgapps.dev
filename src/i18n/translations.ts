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
    items: {
      title: string;
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
  portfolio: {
    badge: string;
    headingLine1: string;
    headingHighlight: string;
    description: string;
    filters: { id: string; label: string }[];
    projects: {
      title: string;
      description: string;
      type: string;
      status: string;
    }[];
    statusLabel: {
      done: string;
      inProgress: string;
    };
    projectCta: string;
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
    navigationHeading: string;
    navigation: NavigationItem[];
    servicesHeading: string;
    services: string[];
    contactHeading: string;
    contact: {
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
        { id: 'servicos', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'sobre', label: 'About' },
        { id: 'contato', label: 'Contact' }
      ],
      contactCta: 'Talk to Us',
      contactId: 'contato',
      languageLabel: 'Language'
    },
    hero: {
      badge: 'Digital Product Experts',
      titleLine1: 'We turn',
      titleHighlight: 'Ideas into Reality',
      titleLine2: 'Online',
      subtitle:
        'We build modern websites and mobile apps that push your business to the next level and delight your customers.',
      stats: [
        { label: '100+ Clients' },
        { label: '200+ Projects' },
        { label: '5 Years of Experience' }
      ],
      primaryCta: 'Start a Project',
      secondaryCta: 'View Portfolio'
    },
    services: {
      badge: 'Our Services',
      headingLine1: 'End-to-end solutions for',
      headingHighlight: 'Your Digital Success',
      description:
        'We offer a full ecosystem of digital services—from the first idea to launch and long-term evolution.',
      items: [
        {
          title: 'Web Development',
          description:
            'Modern, responsive, conversion-focused websites built with the latest technologies and performance best practices.',
          features: ['React & Next.js', 'Responsive Design', 'SEO Optimization', 'Top-tier Performance'],
          cta: 'Learn more'
        },
        {
          title: 'Mobile Apps',
          description:
            'Native and cross-platform apps for iOS and Android that connect your brand with users wherever they are.',
          features: ['React Native', 'iOS & Android', 'Native UI/UX', 'API Integrations'],
          cta: 'Learn more'
        },
        {
          title: 'UI/UX Design',
          description:
            'Intuitive interfaces and memorable experiences that delight users and drive measurable results.',
          features: ['Design Systems', 'Prototyping', 'Usability Testing', 'Digital Branding'],
          cta: 'Learn more'
        },
        {
          title: 'Backend Development',
          description:
            'Robust, scalable APIs and infrastructure that keep your applications secure, reliable, and future-proof.',
          features: ['Node.js & Python', 'RESTful APIs', 'Databases', 'Cloud Deployments'],
          cta: 'Learn more'
        },
        {
          title: 'Optimization & Performance',
          description:
            'We maximize the speed and efficiency of your products. Every millisecond matters for an outstanding experience.',
          features: ['Core Web Vitals', 'Lazy Loading', 'Caching Strategy', 'CDN Setup'],
          cta: 'Learn more'
        },
        {
          title: 'Security & Maintenance',
          description:
            'We protect your applications and keep everything running smoothly with continuous support and updates.',
          features: ['SSL & HTTPS', 'Automated Backups', '24/7 Monitoring', 'Technical Support'],
          cta: 'Learn more'
        }
      ],
      bottomCta: {
        title: 'Ready to kick off your project?',
        description: 'Get in touch and discover how we can turn your idea into a high-impact digital product.',
        button: 'Request a Quote'
      }
    },
    portfolio: {
      badge: 'Our Portfolio',
      headingLine1: 'Projects that',
      headingHighlight: 'Make a Difference',
      description:
        'Every project is a chance to create something extraordinary. Explore a selection of our recent work.',
      filters: [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Websites' },
        { id: 'mobile', label: 'Mobile Apps' }
      ],
      projects: [
        {
          title: 'Fashion E-commerce',
          description: 'Complete e-commerce platform with integrated payments and an intuitive admin dashboard.',
          type: 'Website',
          status: 'done'
        },
        {
          title: 'Food Delivery App',
          description: 'Delivery app with geolocation, online payments, and real-time customer reviews.',
          type: 'Mobile App',
          status: 'done'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Real-time data visualization dashboard with customizable reports and KPIs.',
          type: 'Web App',
          status: 'done'
        },
        {
          title: 'Fitness Tracker App',
          description: 'Fitness companion with wearable integration, personalized plans, and progress tracking.',
          type: 'Mobile App',
          status: 'inProgress'
        },
        {
          title: 'Education Portal',
          description: 'Online learning portal with video classes, interactive exercises, and certification.',
          type: 'Website',
          status: 'done'
        },
        {
          title: 'Digital Banking App',
          description: 'Banking experience with biometric authentication, transfers, and investment tools.',
          type: 'Mobile App',
          status: 'inProgress'
        }
      ],
      statusLabel: {
        done: 'Completed',
        inProgress: 'In progress'
      },
      projectCta: 'See details',
      bottomCta: {
        title: 'Like what you see?',
        description:
          'These are just a few of our projects. Let’s build something extraordinary for your company as well.',
        button: 'Let’s Talk'
      }
    },
    about: {
      badge: 'About Us',
      headingLine1: 'Who we are and',
      headingHighlight: 'Our Mission',
      description:
        'We are a team of technology enthusiasts dedicated to turning ideas into digital products that truly matter.',
      timelineHeading: 'Building digital experiences since 2019',
      paragraphs: [
        'TG Apps was born from a passion for crafting digital solutions that make a difference. We started as a small team of developers and designers and are now a trusted web and mobile development studio.',
        'Our journey is defined by relentless technical excellence and client satisfaction. We believe technology should simplify people’s lives and drive business growth.',
        'Every project is an opportunity to learn, innovate, and exceed expectations. We use agile methodologies, maintain transparent communication, and keep our focus on results.'
      ],
      missionHeading: 'Our Mission',
      missionDescription:
        '“Democratize access to high-quality technology by creating digital solutions that connect people, empower businesses, and bring ideas to life.”',
      valuesHeading: 'Our Values',
      values: [
        {
          title: 'Customer Focus',
          description: 'Every project is tailored to the customer’s specific needs and business goals.'
        },
        {
          title: 'Continuous Innovation',
          description: 'We constantly embrace new technologies and best practices to deliver cutting-edge solutions.'
        },
        {
          title: 'Premium Quality',
          description: 'We never compromise on quality. Every line of code is crafted with care and attention.'
        },
        {
          title: 'Measurable Results',
          description: 'We build solutions that deliver tangible impact and measurable growth for your business.'
        }
      ],
      statsHeading: 'Numbers that speak for themselves',
      stats: [
        { number: '100+', label: 'Projects Delivered' },
        { number: '50+', label: 'Happy Clients' },
        { number: '5+', label: 'Years of Experience' },
        { number: '99%', label: 'Satisfaction Rate' }
      ],
      passionTitle: 'Passion for what we do',
      passionDescription: 'Every project is developed with dedication, creativity, and care.'
    },
    contact: {
      badge: 'Talk to Us',
      headingLine1: 'Let’s turn',
      headingHighlight: 'Your Idea into Reality',
      description:
        'We are ready to listen to your goals and create the ideal digital solution for your business. Reach out today!',
      infoHeading: 'How to reach us',
      info: [
        { title: 'Email', value: 'support@tgapps.dev', description: 'Replies within 2 hours' },
        { title: 'Phone', value: '+55 (11) 99999-9999', description: 'Mon-Fri, 9am to 6pm' },
        { title: 'Location', value: 'São Paulo, Brazil', description: 'Remote service' }
      ],
      whyUsHeading: 'Why choose TG Apps?',
      whyUs: [
        'Fast replies within 2 hours',
        'Free, no-obligation estimates',
        'Specialized technical consulting',
        'Ongoing support after launch'
      ],
      formHeading: 'Request your quote',
      formDescription: 'Fill out the form below and we will get back to you soon.',
      successTitle: 'Message sent successfully!',
      successMessage: 'We will contact you shortly. Thank you!',
      form: {
        nameLabel: 'Full name *',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email *',
        emailPlaceholder: 'you@email.com',
        phoneLabel: 'Phone',
        phonePlaceholder: '(11) 99999-9999',
        serviceLabel: 'Service type *',
        servicePlaceholder: 'Select a service',
        budgetLabel: 'Estimated budget',
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
        'Technical Consulting',
        'Other'
      ],
      budgets: [
        'BRL 5,000 - BRL 15,000',
        'BRL 15,000 - BRL 30,000',
        'BRL 30,000 - BRL 50,000',
        'BRL 50,000 - BRL 100,000',
        'Above BRL 100,000',
        'Prefer not to say'
      ]
    },
    footer: {
      description:
        'We turn ideas into outstanding digital products. Specialists in web and mobile development with a user-first mindset.',
      navigationHeading: 'Navigation',
      navigation: [
        { id: 'inicio', label: 'Home' },
        { id: 'servicos', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'sobre', label: 'About Us' },
        { id: 'contato', label: 'Contact' }
      ],
      servicesHeading: 'Services',
      services: [
        'Web Development',
        'Mobile Apps',
        'UI/UX Design',
        'E-commerce',
        'Custom Systems',
        'Technical Consulting'
      ],
      contactHeading: 'Contact',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 (11) 99999-9999',
        location: 'São Paulo, Brazil'
      },
      cta: 'Request a Quote',
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
        { id: 'servicos', label: 'Serviços' },
        { id: 'portfolio', label: 'Portfólio' },
        { id: 'sobre', label: 'Sobre' },
        { id: 'contato', label: 'Contato' }
      ],
      contactCta: 'Fale Conosco',
      contactId: 'contato',
      languageLabel: 'Idioma'
    },
    hero: {
      badge: 'Especialistas em Produtos Digitais',
      titleLine1: 'Transformamos',
      titleHighlight: 'Ideias em Realidade',
      titleLine2: 'Digital',
      subtitle:
        'Criamos sites modernos e aplicativos mobile que impulsionam seu negócio para o próximo nível e encantam seus clientes.',
      stats: [
        { label: '100+ Clientes' },
        { label: '200+ Projetos' },
        { label: '5 Anos de Experiência' }
      ],
      primaryCta: 'Começar Projeto',
      secondaryCta: 'Ver Portfólio'
    },
    services: {
      badge: 'Nossos Serviços',
      headingLine1: 'Soluções completas para',
      headingHighlight: 'Seu Sucesso Digital',
      description:
        'Oferecemos um ecossistema completo de serviços digitais, do conceito inicial ao lançamento e evolução contínua.',
      items: [
        {
          title: 'Desenvolvimento Web',
          description:
            'Sites modernos, responsivos e focados em conversão, utilizando as tecnologias mais recentes e práticas de performance.',
          features: ['React & Next.js', 'Design Responsivo', 'SEO Otimizado', 'Performance Máxima'],
          cta: 'Saiba mais'
        },
        {
          title: 'Apps Mobile',
          description:
            'Aplicativos nativos e híbridos para iOS e Android que conectam sua marca aos usuários em qualquer lugar.',
          features: ['React Native', 'iOS & Android', 'UI/UX Nativo', 'Integração de APIs'],
          cta: 'Saiba mais'
        },
        {
          title: 'UI/UX Design',
          description:
            'Interfaces intuitivas e experiências memoráveis que encantam usuários e geram resultados mensuráveis.',
          features: ['Design System', 'Prototipagem', 'Testes de Usabilidade', 'Branding Digital'],
          cta: 'Saiba mais'
        },
        {
          title: 'Desenvolvimento Backend',
          description:
            'APIs robustas e escaláveis que garantem segurança, confiabilidade e futuro para suas aplicações.',
          features: ['Node.js & Python', 'APIs RESTful', 'Banco de Dados', 'Deploy em Nuvem'],
          cta: 'Saiba mais'
        },
        {
          title: 'Otimização & Performance',
          description:
            'Maximizamos a velocidade e eficiência dos seus produtos. Cada milissegundo conta para uma experiência incrível.',
          features: ['Core Web Vitals', 'Lazy Loading', 'Estratégia de Cache', 'Configuração de CDN'],
          cta: 'Saiba mais'
        },
        {
          title: 'Segurança & Manutenção',
          description:
            'Protegemos suas aplicações e mantemos tudo funcionando perfeitamente com suporte contínuo e atualizações.',
          features: ['SSL & HTTPS', 'Backup Automático', 'Monitoramento 24/7', 'Suporte Técnico'],
          cta: 'Saiba mais'
        }
      ],
      bottomCta: {
        title: 'Pronto para começar seu projeto?',
        description: 'Entre em contato e descubra como podemos transformar sua ideia em um produto digital de alto impacto.',
        button: 'Solicitar Orçamento'
      }
    },
    portfolio: {
      badge: 'Nosso Portfólio',
      headingLine1: 'Projetos que',
      headingHighlight: 'Fazem a Diferença',
      description:
        'Cada projeto é uma oportunidade de criar algo extraordinário. Explore alguns dos nossos trabalhos mais recentes.',
      filters: [
        { id: 'all', label: 'Todos os Projetos' },
        { id: 'web', label: 'Websites' },
        { id: 'mobile', label: 'Apps Mobile' }
      ],
      projects: [
        {
          title: 'E-commerce Fashion',
          description: 'Plataforma completa de e-commerce com pagamentos integrados e painel administrativo intuitivo.',
          type: 'Website',
          status: 'done'
        },
        {
          title: 'App Delivery Food',
          description: 'Aplicativo de delivery com geolocalização, pagamentos online e avaliações em tempo real.',
          type: 'Mobile App',
          status: 'done'
        },
        {
          title: 'Dashboard Analytics',
          description: 'Painel de controle com visualização de dados em tempo real e relatórios personalizados.',
          type: 'Web App',
          status: 'done'
        },
        {
          title: 'App Fitness Tracker',
          description: 'Companheiro fitness com integração de wearables, planos personalizados e acompanhamento de evolução.',
          type: 'Mobile App',
          status: 'inProgress'
        },
        {
          title: 'Portal Educacional',
          description: 'Plataforma de ensino online com videoaulas, exercícios interativos e certificação.',
          type: 'Website',
          status: 'done'
        },
        {
          title: 'App Banking',
          description: 'Experiência bancária com autenticação biométrica, transferências e ferramentas de investimento.',
          type: 'Mobile App',
          status: 'inProgress'
        }
      ],
      statusLabel: {
        done: 'Concluído',
        inProgress: 'Em desenvolvimento'
      },
      projectCta: 'Ver detalhes',
      bottomCta: {
        title: 'Gostou do que viu?',
        description:
          'Estes são apenas alguns exemplos do nosso trabalho. Vamos criar algo incrível para a sua empresa também.',
        button: 'Vamos Conversar'
      }
    },
    about: {
      badge: 'Sobre Nós',
      headingLine1: 'Quem Somos e',
      headingHighlight: 'Nossa Missão',
      description:
        'Somos uma equipe apaixonada por tecnologia, dedicada a transformar ideias em soluções digitais que fazem a diferença.',
      timelineHeading: 'Transformando o digital desde 2019',
      paragraphs: [
        'A TG Apps nasceu da paixão por criar soluções digitais que realmente importam. Começamos como uma pequena equipe de desenvolvedores e designers, e hoje somos um estúdio de desenvolvimento web e mobile reconhecido.',
        'Nossa jornada é marcada pela busca constante da excelência técnica e pela satisfação dos clientes. Acreditamos que a tecnologia deve simplificar a vida das pessoas e impulsionar negócios.',
        'Cada projeto é uma oportunidade de aprender, inovar e superar expectativas. Trabalhamos com metodologias ágeis, comunicação transparente e foco total em resultados.'
      ],
      missionHeading: 'Nossa Missão',
      missionDescription:
        '“Democratizar o acesso à tecnologia de qualidade, criando soluções digitais que conectam pessoas, impulsionam negócios e transformam ideias em realidade.”',
      valuesHeading: 'Nossos Valores',
      values: [
        {
          title: 'Foco no Cliente',
          description: 'Cada projeto é desenvolvido pensando nas necessidades específicas do cliente e seus objetivos de negócio.'
        },
        {
          title: 'Inovação Constante',
          description: 'Estamos sempre em busca de novas tecnologias e melhores práticas para entregar soluções de ponta.'
        },
        {
          title: 'Qualidade Premium',
          description: 'Não fazemos concessões quando se trata de qualidade. Cada linha de código é cuidadosamente elaborada.'
        },
        {
          title: 'Resultados Mensuráveis',
          description: 'Desenvolvemos soluções que geram impacto real e resultados tangíveis para o seu negócio.'
        }
      ],
      statsHeading: 'Números que Falam por Si',
      stats: [
        { number: '100+', label: 'Projetos Entregues' },
        { number: '50+', label: 'Clientes Satisfeitos' },
        { number: '5+', label: 'Anos de Experiência' },
        { number: '99%', label: 'Taxa de Satisfação' }
      ],
      passionTitle: 'Paixão pelo que fazemos',
      passionDescription: 'Cada projeto é desenvolvido com dedicação, criatividade e carinho.'
    },
    contact: {
      badge: 'Fale Conosco',
      headingLine1: 'Vamos Transformar',
      headingHighlight: 'Sua Ideia em Realidade',
      description:
        'Estamos prontos para ouvir seus objetivos e criar a solução digital ideal para o seu negócio. Fale com a gente!',
      infoHeading: 'Como nos encontrar',
      info: [
        { title: 'Email', value: 'support@tgapps.dev', description: 'Resposta em até 2 horas' },
        { title: 'Telefone', value: '+55 (11) 99999-9999', description: 'Seg-Sex, 9h às 18h' },
        { title: 'Localização', value: 'São Paulo, SP', description: 'Atendimento remoto' }
      ],
      whyUsHeading: 'Por que escolher a TG Apps?',
      whyUs: [
        'Resposta rápida em até 2 horas',
        'Orçamento gratuito e sem compromisso',
        'Consultoria técnica especializada',
        'Suporte contínuo após a entrega'
      ],
      formHeading: 'Solicite seu orçamento',
      formDescription: 'Preencha o formulário abaixo e retornaremos em breve.',
      successTitle: 'Mensagem enviada com sucesso!',
      successMessage: 'Entraremos em contato em breve. Obrigado!',
      form: {
        nameLabel: 'Nome completo *',
        namePlaceholder: 'Seu nome completo',
        emailLabel: 'Email *',
        emailPlaceholder: 'seu@email.com',
        phoneLabel: 'Telefone',
        phonePlaceholder: '(11) 99999-9999',
        serviceLabel: 'Tipo de serviço *',
        servicePlaceholder: 'Selecione um serviço',
        budgetLabel: 'Orçamento estimado',
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
        'Consultoria Técnica',
        'Outro'
      ],
      budgets: [
        'R$ 5.000 - R$ 15.000',
        'R$ 15.000 - R$ 30.000',
        'R$ 30.000 - R$ 50.000',
        'R$ 50.000 - R$ 100.000',
        'Acima de R$ 100.000',
        'Prefiro não informar'
      ]
    },
    footer: {
      description:
        'Transformamos ideias em produtos digitais extraordinários. Especialistas em desenvolvimento web e mobile com foco no usuário.',
      navigationHeading: 'Navegação',
      navigation: [
        { id: 'inicio', label: 'Início' },
        { id: 'servicos', label: 'Serviços' },
        { id: 'portfolio', label: 'Portfólio' },
        { id: 'sobre', label: 'Sobre Nós' },
        { id: 'contato', label: 'Contato' }
      ],
      servicesHeading: 'Serviços',
      services: [
        'Desenvolvimento Web',
        'Apps Mobile',
        'UI/UX Design',
        'E-commerce',
        'Sistemas Personalizados',
        'Consultoria Técnica'
      ],
      contactHeading: 'Contato',
      contact: {
        emailLabel: 'support@tgapps.dev',
        phoneLabel: '+55 (11) 99999-9999',
        location: 'São Paulo, SP'
      },
      cta: 'Solicitar Orçamento',
      bottom: {
        copyright: '© {year} TG Apps. Todos os direitos reservados.',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Uso'
      }
    }
  }
};
