export type Plan = {
  name: string;
  price: string;
  badge?: string;
  audience: string;
  description: string;
  features: string[];
  cta: string;
};

export const plansByLocale: Record<'en' | 'pt', Plan[]> = {
  en: [
    {
      name: 'Starter',
      price: 'USD 1,500/mo',
      badge: 'Biweekly rhythm',
      audience:
        'For teams that need focused delivery batches, maintenance, rescue work, or release support on a controlled cadence.',
      description:
        'Priorities are aligned every two weeks, then moved through scheduled delivery and release windows.',
      features: [
        'Biweekly planning and demo meeting',
        'Focused delivery batches and scheduled releases',
        'One active priority flow at a time',
        'Direct async communication for progress and blockers'
      ],
      cta: 'Discuss Starter'
    },
    {
      name: 'Growth',
      price: 'USD 2,000/mo',
      badge: 'Most selected',
      audience:
        'For founders and growing teams that want steady software delivery without daily management overhead.',
      description:
        'The main Tg Apps plan: weekly delivery and intelligent allocation across the product area that matters most now.',
      features: [
        'Weekly planning, working demo, and priority review',
        'Continuous delivery across mobile, web, backend, CRM, or integrations',
        'Priorities can move between product fronts as needs change',
        'Direct async communication for decisions and blockers'
      ],
      cta: 'Choose Growth'
    },
    {
      name: 'Embedded',
      price: 'USD 3,500+/mo',
      badge: 'Higher availability',
      audience:
        'For teams that need closer integration, more parallel delivery capacity, and faster reprioritization.',
      description:
        'Tg Apps works inside your operating rhythm, joins daily coordination when needed, and keeps more room for parallel work and priority changes.',
      features: [
        'Daily coordination when the project requires it',
        'More parallel delivery capacity than Growth',
        'Same-day reprioritization when feasible',
        'Closer integration with your team, tools, and release flow'
      ],
      cta: 'Discuss Embedded'
    }
  ],
  pt: [
    {
      name: 'Starter',
      price: 'US$ 1.500/mês',
      badge: 'Ritmo quinzenal',
      audience:
        'Para equipes que precisam avançar em entregas específicas, manutenção, resgate de produto ou suporte de publicação, com um ritmo previsível.',
      description:
        'A cada duas semanas, alinhamos a prioridade principal e combinamos o que será entregue ou publicado no próximo ciclo.',
      features: [
        'Reunião quinzenal para planejar e demonstrar o que foi feito',
        'Entregas específicas e publicações programadas',
        'Uma prioridade principal em andamento por vez',
        'Atualizações diretas sobre progresso e bloqueios'
      ],
      cta: 'Falar sobre Starter'
    },
    {
      name: 'Growth',
      price: 'US$ 2.000/mês',
      badge: 'Mais escolhido',
      audience:
        'Para fundadores e times em crescimento que querem entrega constante sem gestão diária.',
      description:
        'O plano mais escolhido da Tg Apps: entrega semanal, com o time direcionado para a área do produto que mais precisa avançar.',
      features: [
        'Planejamento, demonstração e revisão de prioridades toda semana',
        'Entrega contínua em aplicativos, web, backend, CRM ou integrações',
        'O foco pode mudar entre áreas conforme a necessidade',
        'Comunicação direta para decisões e bloqueios'
      ],
      cta: 'Escolher Growth'
    },
    {
      name: 'Embedded',
      price: 'US$ 3.500+/mês',
      badge: 'Integração com o time',
      audience:
        'Para empresas que querem a Tg Apps mais integrada à operação, com capacidade para tocar trabalhos em paralelo e reorganizar prioridades rapidamente.',
      description:
        'A Tg Apps acompanha o ritmo da sua equipe, participa da coordenação diária quando necessário e reserva mais capacidade para demandas simultâneas.',
      features: [
        'Coordenação diária quando o projeto exigir',
        'Mais trabalhos em paralelo do que no Growth',
        'Prioridades reorganizadas no mesmo dia quando viável',
        'Integração mais próxima com a equipe, as ferramentas e as publicações'
      ],
      cta: 'Falar sobre Embedded'
    }
  ]
};

export const pricingCopyByLocale = {
  en: {
    eyebrow: 'Monthly plans',
    title: 'Software delivery plans',
    highlight: 'with clear scope and a delivery cadence you can rely on',
    subtitle:
      'Choose by delivery cadence, active workstreams, coordination needs, and tolerance for priority changes. Plans define operating capacity, not a fixed bank of hours.',
    note:
      'Most teams start with Growth. Before kickoff, we align the first milestone, active workstreams, response rhythm, and what can realistically move within the selected plan.',
    currencyNote:
      'USD prices are public references. Before kickoff, the monthly amount is fixed in your agreed billing currency, such as USD, BRL, or another mutually accepted currency, and stays fixed while the engagement remains active.',
    footer: ''
  },
  pt: {
    eyebrow: 'Planos mensais',
    title: 'Planos de entrega de software',
    highlight: 'com escopo claro e um ritmo de entrega previsível',
    subtitle:
      'Escolha pelo ritmo de entrega, pela quantidade de trabalhos simultâneos e pelo nível de integração com a sua equipe. Os planos definem capacidade de entrega, não um pacote fixo de horas.',
    note:
      'A maioria dos clientes começa pelo Growth. Antes do início, combinamos a primeira entrega, o que ficará em andamento, o tempo de resposta esperado e o que cabe no plano escolhido.',
    currencyNote:
      'Os valores em US$ são referências públicas. Antes do início, o valor mensal é fixado na moeda combinada com o cliente, como USD, BRL ou outra moeda aceita pelas partes, e permanece fixo enquanto o plano estiver ativo.',
    footer: ''
  }
} as const;
