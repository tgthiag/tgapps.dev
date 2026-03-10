import type { Locale } from '../i18n/translations';
import type { LandingPageContent } from '../content/landingPages';

interface KeywordLandingPageProps {
  locale: Locale;
  content: LandingPageContent;
}

const KeywordLandingPage = ({ locale, content }: KeywordLandingPageProps) => {
  const homeHref = locale === 'pt' ? '/pt-br/' : '/';
  const ctaBody =
    locale === 'pt'
      ? 'Contexto do projeto:%0D%0A- Produto atual:%0D%0A- Prazo:%0D%0A- Time interno:%0D%0A- Integracoes desejadas:%0D%0A'
      : 'Project context:%0D%0A- Current product:%0D%0A- Deadline:%0D%0A- Internal team:%0D%0A- Required integrations:%0D%0A';
  const ctaHref = `mailto:support@tgapps.dev?subject=${encodeURIComponent(content.ctaSubject)}&body=${ctaBody}`;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <a href={homeHref} className="inline-flex items-center gap-3 text-sm text-white/80 hover:text-white">
            <img
              src="/logo.png"
              alt="TG Apps"
              className="h-10 w-10 rounded-lg bg-black/40 p-1 shadow-lg shadow-blue-500/30"
            />
            <span>TG Apps</span>
          </a>
          <a href={homeHref} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
            {locale === 'pt' ? 'Voltar ao site principal' : 'Back to main site'}
          </a>
        </header>

        <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 sm:p-10">
          <p className="mb-4 inline-flex rounded-full border border-blue-300/30 bg-blue-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            {content.badge}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">{content.intro}</p>
          <div className="mt-8">
            <a
              href={ctaHref}
              className="inline-flex rounded-full bg-blue-500 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-400"
            >
              {content.ctaLabel}
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">{content.proofHeading}</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {content.proofItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" aria-hidden="true"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">{content.deliverablesHeading}</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {content.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">{content.fitHeading}</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {content.fitItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
};

export default KeywordLandingPage;

