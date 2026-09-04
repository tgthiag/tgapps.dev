import { ArrowUpRight } from 'lucide-react';
import { trustedCompanies } from '../content/trustedCompanies';
import { useLanguage } from '../context/LanguageContext';
import { trackCtaClick } from '../utils/analytics';

type FeaturedCase = {
  client: string;
  logoName: string;
  location: { en: string; pt: string };
  result: { en: string; pt: string };
  description: { en: string; pt: string };
  tags: string[];
};

const featuredCases: FeaturedCase[] = [
  {
    client: 'DB Cleaning',
    logoName: 'DB Cleaning Services',
    location: { en: 'Philadelphia, United States', pt: 'Philadelphia, Estados Unidos' },
    result: { en: 'One delivery owner across a critical product stack', pt: 'Um responsável pela entrega em uma stack crítica de produto' },
    description: {
      en: 'CRM, booking, frontend, backend, databases, and two mobile apps move under one coordinated delivery flow.',
      pt: 'CRM, agendamento, frontend, backend, bancos de dados e dois apps mobile avançam em um fluxo coordenado de entrega.'
    },
    tags: ['CRM', 'Booking', 'Mobile', 'Backend']
  },
  {
    client: 'IT.up',
    logoName: 'IT.UP Business',
    location: { en: 'Brazil', pt: 'Brasil' },
    result: { en: '6+ apps delivered and maintained in one year', pt: 'Mais de 6 apps entregues e mantidos em um ano' },
    description: {
      en: 'Tg Apps owns the app delivery area while other teams operate adjacent parts of the business stack.',
      pt: 'A Tg Apps assume a entrega da área de apps enquanto outras equipes operam partes adjacentes da stack.'
    },
    tags: ['TOTVS ERP', '6+ Apps', 'Release', 'Maintenance']
  },
  {
    client: 'Beauty Love',
    logoName: 'Beauty Love',
    location: { en: 'Brazil', pt: 'Brasil' },
    result: { en: 'From product build to launch and ongoing evolution', pt: 'Da construção ao lançamento e evolução contínua' },
    description: {
      en: 'Product delivery across mobile, web, ecommerce, and operational flows, with continued support after launch.',
      pt: 'Entrega de produto em mobile, web, ecommerce e fluxos operacionais, com continuidade após o lançamento.'
    },
    tags: ['Android', 'iOS', 'Web', 'Ecommerce']
  },
  {
    client: 'Impactivate',
    logoName: 'Heal The World Global',
    location: { en: 'California, United States · Global', pt: 'Califórnia, Estados Unidos · Global' },
    result: {
      en: 'Mobile app and backend development for Impactivate',
      pt: 'Desenvolvimento do aplicativo e do backend do Impactivate'
    },
    description: {
      en: 'Tg Apps leads technical delivery, developing the mobile app and backend services for Heal The World Global.',
      pt: 'A Tg Apps lidera a entrega técnica, desenvolvendo o aplicativo e os serviços de backend para a Heal The World Global.'
    },
    tags: ['Mobile', 'Backend', 'Product', 'Social Impact']
  }
];

const findCompany = (name: string) => trustedCompanies.find((company) => company.name === name);

const CasesSection = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';

  return (
    <section id="cases" className="scroll-mt-24 overflow-hidden bg-[#f8f7f4] py-20 text-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-y border-stone-200 py-8">
          <p className="mb-6 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-stone-500">
            {isPt ? 'Produtos em que ajudamos a entregar' : 'Products we help deliver'}
          </p>
          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
            {trustedCompanies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noreferrer"
                aria-label={company.name}
                onClick={() => trackCtaClick('client_logo', company.name, { destination: company.url, language })}
                className="flex h-12 items-center justify-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={company.logoSrc}
                  alt={`${company.name} logo`}
                  className={`max-h-9 max-w-[9rem] object-contain ${company.logoClassName ?? ''}`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12 mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-blue-700">
              {isPt ? 'Trabalhos selecionados' : 'Selected work'}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {isPt ? 'Entrega que continua depois do lançamento.' : 'Delivery that continues after launch.'}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-slate-600">
            {isPt
              ? 'Quatro exemplos de como assumimos produtos inteiros, áreas críticas ou continuidade junto a outras equipes.'
              : 'Four examples of how we own full products, critical product areas, or continuity alongside other teams.'}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {featuredCases.map((caseItem, index) => {
            const company = findCompany(caseItem.logoName);
            return (
              <article
                key={caseItem.client}
                className="group flex min-h-[28rem] flex-col border border-stone-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-slate-300 sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-xs font-bold tracking-[0.2em] text-stone-300">0{index + 1}</span>
                  {company && (
                    <a href={company.url} target="_blank" rel="noreferrer" aria-label={company.name}>
                      <img
                        src={company.logoSrc}
                        alt={`${company.name} logo`}
                        className={`max-h-9 max-w-[9rem] object-contain ${company.logoClassName ?? ''}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  )}
                </div>
                <p className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-400">
                  {caseItem.location[language]}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{caseItem.result[language]}</h3>
                <p className="mt-5 text-sm leading-7 text-slate-600">{caseItem.description[language]}</p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-stone-100 pt-6">
                  {caseItem.tags.map((tag) => (
                    <span key={tag} className="bg-stone-50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <a
          href={isPt ? '/pt-br/perfil-da-empresa' : '/company-profile'}
          onClick={() => trackCtaClick('cases_profile', isPt ? 'Ver perfil da empresa' : 'See company profile', { language })}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          {isPt ? 'Ver perfil da empresa e mais referências' : 'See company profile and more references'}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default CasesSection;
