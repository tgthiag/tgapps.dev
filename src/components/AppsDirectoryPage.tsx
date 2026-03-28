import { ArrowRight, ChevronLeft, Sparkles } from 'lucide-react';
import type { Locale } from '../i18n/translations';
import { appsDirectoryContent } from '../content/apps';

interface AppsDirectoryPageProps {
  locale: Locale;
}

const AppsDirectoryPage = ({ locale }: AppsDirectoryPageProps) => {
  const content = appsDirectoryContent[locale];
  const homeHref = locale === 'pt' ? '/pt-br/' : '/';
  const appHref = locale === 'pt' ? `/pt-br${content.appCard.slug}` : content.appCard.slug;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_28%),linear-gradient(180deg,#06142e_0%,#0d2d6b_45%,#edf4ff_100%)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <a href={homeHref} className="inline-flex items-center gap-3 text-sm text-white/85 hover:text-white">
            <img
              src="/logo.png"
              alt="TG Apps"
              className="h-10 w-10 rounded-xl bg-black/35 p-1 shadow-lg shadow-blue-500/20"
            />
            <span>TG Apps</span>
          </a>
          <a
            href={homeHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 transition-colors hover:bg-white/15"
          >
            <ChevronLeft className="h-4 w-4" />
            {content.backLabel}
          </a>
        </header>

        <section className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-8 shadow-2xl shadow-slate-950/35 backdrop-blur-xl sm:p-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              <Sparkles className="h-4 w-4" />
              {content.badge}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-50/78">{content.description}</p>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              {content.appSectionLabel}
            </p>
          </div>

          <article className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/28 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-gradient-to-br from-slate-950/70 via-[#0e2d63]/80 to-[#134d8f]/75 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.18),_transparent_28%)]" />
              <div className="relative z-10 flex items-start gap-4">
                <img
                  src={content.appCard.icon}
                  alt={content.appCard.name}
                  className="h-16 w-16 rounded-2xl border border-white/15 bg-white/95 p-1 shadow-lg"
                />
                <div className="min-w-0">
                  <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100">
                    {content.appCard.status}
                  </div>
                  <h2 className="mt-4 text-3xl font-bold text-white">{content.appCard.name}</h2>
                  <p className="mt-2 text-base font-medium text-cyan-100/90">{content.appCard.tagline}</p>
                </div>
              </div>

              <p className="relative z-10 mt-6 max-w-xl text-base leading-relaxed text-white/78">
                {content.appCard.description}
              </p>

              <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                {content.appCard.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/85"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-10">
                <a
                  href={appHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {content.appCard.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[330px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%)]" />
              <img
                src={content.appCard.heroImage}
                alt={`${content.appCard.name} screenshot`}
                className="relative z-10 w-full rounded-[1.5rem] border border-white/15 shadow-[0_18px_48px_rgba(0,0,0,0.45)]"
              />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default AppsDirectoryPage;
