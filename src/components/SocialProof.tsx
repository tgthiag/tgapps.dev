import { useTranslations } from '../context/LanguageContext';
import { trustedCompanies } from '../content/trustedCompanies';

const SocialProof = () => {
  const t = useTranslations();

  return (
    <section className="relative -mt-2 bg-white pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8">
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
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
