import { useLanguage, useTranslations } from '../context/LanguageContext';
import { trustedCompanies } from '../content/trustedCompanies';

const SocialProof = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const proofBadges =
    language === 'pt'
      ? ['D-U-N-S® 651029828', 'Garantia da Primeira Entrega', 'Primeira etapa clara', 'Continuidade mês a mês', 'Sem pagamento antecipado para começar']
      : ['D-U-N-S® 651029828', 'First Milestone Guarantee', 'Clear first delivery', 'Month-to-month continuity', 'Start without paying upfront'];

  return (
    <section className="relative -mt-2 bg-white pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] px-6 py-8  sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">{t.socialProof.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{t.socialProof.description}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-10 md:grid-cols-3 xl:grid-cols-5">
            {trustedCompanies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noreferrer"
                aria-label={company.name}
                title={company.name}
                className="flex h-16 items-center justify-center opacity-80 transition duration-200 hover:opacity-100"
              >
                <img
                  src={company.logoSrc}
                  alt={`${company.name} logo`}
                  className={`w-full object-contain ${company.logoClassName ?? 'max-h-12'}`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {proofBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

