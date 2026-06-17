import { trustedCompanies } from '../content/trustedCompanies';
import { useLanguage } from '../context/LanguageContext';

type CaseItem = {
  number: string;
  client: string;
  logoName: string;
  location: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  tags: string[];
};

const cases: CaseItem[] = [
  {
    number: '01',
    client: 'DB Cleaning',
    logoName: 'DB Cleaning Services',
    location: {
      en: 'Philadelphia, PA, United States',
      pt: 'Philadelphia, PA, Estados Unidos'
    },
    description: {
      en: 'Leads the critical product delivery stack across CRM, booking platform, frontend, backend, databases, and two mobile apps, with support from other contributors on adjacent tasks.',
      pt: 'Lidera a entrega crítica do produto entre CRM, plataforma de agendamento, frontend, backend, bancos de dados e dois apps mobile, com apoio de outros colaboradores em frentes adjacentes.'
    },
    tags: ['CRM', 'Booking', 'Mobile', 'Backend']
  },
  {
    number: '02',
    client: 'IT.up',
    logoName: 'IT.UP Business',
    location: {
      en: 'Brazil',
      pt: 'Brasil'
    },
    description: {
      en: 'Tg Apps owns the app area for IT.up while other teams handle other parts of the business stack. More than 6 apps were created, deployed, and maintained within a year.',
      pt: 'A Tg Apps assume toda a área de apps da IT.up, enquanto outras equipes cuidam de outras partes da operação. Mais de 6 apps foram criados, publicados e mantidos em um ano.'
    },
    tags: ['TOTVS ERP', '6+ Apps', 'Enterprise', 'Maintenance']
  },
  {
    number: '03',
    client: 'Beauty Love',
    logoName: 'Beauty Love',
    location: {
      en: 'Brazil',
      pt: 'Brasil'
    },
    description: {
      en: 'Tg Apps took ownership of the product build and launch, creating, deploying, and putting the business online, with ongoing growth across app, web, and operational flows.',
      pt: 'A Tg Apps assumiu o desenvolvimento e o lançamento do produto, criando, publicando e colocando a empresa no ar, com crescimento contínuo em app, web e fluxos operacionais.'
    },
    tags: ['App Rescue', 'Android', 'iOS', 'Desktop', 'Ecommerce']
  },
  {
    number: '04',
    client: 'DocVita',
    logoName: 'DocVita',
    location: {
      en: 'Brazil',
      pt: 'Brasil'
    },
    description: {
      en: 'Built from idea to production by Tg Apps, then continued alongside another team after deployment, covering Flutter apps, backend, and health document operations.',
      pt: 'Construído da ideia à produção pela Tg Apps e depois continuado em conjunto com outra equipe após o deploy, cobrindo apps Flutter, backend e operação de documentos de saúde.'
    },
    tags: ['AI', 'Flutter', 'Health', 'Node', 'MySQL']
  },
  {
    number: '05',
    client: 'Mathex / Smiles / Gol Airlines',
    logoName: 'Mathex',
    location: {
      en: 'Brazil, enterprise squad',
      pt: 'Brasil, equipe corporativa'
    },
    description: {
      en: "Tg Apps works as an embedded frontend partner through Mathex for the Smiles loyalty program, supporting microfrontend delivery inside an enterprise squad with lower overall ownership than our full-stack engagements.",
      pt: 'A Tg Apps atua integrada ao time de frontend via Mathex no programa de fidelidade Smiles, apoiando a entrega com microfrontends dentro de uma equipe corporativa, com escopo mais localizado do que nos contratos full-stack.'
    },
    tags: ['Microfrontend', 'Enterprise Squad', 'Airline', 'Loyalty Platform']
  }
];

const getLogo = (name: string) => trustedCompanies.find((company) => company.name === name);

const CasesSection = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';

  return (
    <section id="cases" className="overflow-hidden bg-[#f8f7f4] py-24 text-slate-950 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
              <span className="h-px w-7 bg-slate-400" />
              {isPt ? 'Trabalhos selecionados' : 'Selected work'}
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.03] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {isPt ? 'Produtos reais.' : 'Real products.'}
              <span className="block font-light italic text-slate-700">
                {isPt ? 'Entrega real.' : 'Real delivery.'}
              </span>
            </h2>
          </div>
          <p className="max-w-md text-left text-base leading-8 text-slate-600 lg:text-right">
            {isPt
              ? 'Cinco relações ativas com clientes no Brasil e nos Estados Unidos. Setores diferentes, bases técnicas diferentes, todos em movimento.'
              : 'Five active client relationships across the US and Brazil. Different industries, different stacks, all in motion.'}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {cases.map((caseItem, index) => {
            const company = getLogo(caseItem.logoName);
            const isWide = index === cases.length - 1;

            return (
              <article
                key={caseItem.client}
                className={`group relative col-span-12 overflow-hidden rounded-md border border-[#e8e5df] bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:p-8 ${
                  index === 0 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-7' : index === 2 ? 'lg:col-span-7' : index === 3 ? 'lg:col-span-5' : 'lg:col-span-12'
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent transition-colors duration-300 group-hover:bg-slate-950" />
                <div className={isWide ? 'grid gap-8 lg:grid-cols-[0.75fr_1.25fr]' : 'flex h-full flex-col gap-6'}>
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-stone-300">
                      {caseItem.number}
                    </span>
                    {company && (
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={company.name}
                        className="flex h-12 max-w-[10rem] items-center justify-end opacity-75 transition-opacity group-hover:opacity-100"
                      >
                        <img
                          src={company.logoSrc}
                          alt={`${company.name} logo`}
                          className={`max-h-9 w-auto object-contain ${company.logoClassName ?? ''}`}
                          loading="lazy"
                        />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950">{caseItem.client}</h3>
                      <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-stone-400">
                        {caseItem.location[language]}
                      </p>
                    </div>
                    <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-[0.95rem]">
                      {caseItem.description[language]}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 border-t border-stone-100 pt-5">
                      {caseItem.tags.map((tag) => (
                        <span
                          key={`${caseItem.client}-${tag}`}
                          className="rounded-sm border border-stone-200 bg-stone-50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-stone-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;

