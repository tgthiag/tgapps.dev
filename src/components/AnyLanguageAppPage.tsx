import { ArrowUpRight, ChevronLeft, Languages, Mic, PhoneCall, Sparkles } from 'lucide-react';
import type { Locale } from '../i18n/translations';
import { anyLanguagePageContent, anyLanguageStoreLinks } from '../content/apps';

interface AnyLanguageAppPageProps {
  locale: Locale;
}

const AnyLanguageAppPage = ({ locale }: AnyLanguageAppPageProps) => {
  const content = anyLanguagePageContent[locale];
  const appsHref = locale === 'pt' ? '/pt-br/apps' : '/apps';

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_18%),linear-gradient(180deg,#081a39_0%,#0a2f6f_40%,#edf5ff_100%)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <a href={appsHref} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15">
            <ChevronLeft className="h-4 w-4" />
            {content.backLabel}
          </a>
          <a href={locale === 'pt' ? '/pt-br/' : '/'} className="inline-flex items-center gap-3 text-sm text-white/85 hover:text-white">
            <img
              src="/logo.png"
              alt="TG Apps"
              className="h-10 w-10 rounded-xl bg-black/35 p-1 shadow-lg shadow-blue-500/20"
            />
            <span>TG Apps</span>
          </a>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-8 shadow-2xl shadow-slate-950/35 backdrop-blur-xl sm:p-10">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              <Sparkles className="h-4 w-4" />
              {content.badge}
            </p>

            <div className="flex items-center gap-4">
              <img
                src="/app-media/anylanguage/logo.png"
                alt="AnyLanguage Conversations"
                className="h-20 w-20 rounded-[1.5rem] border border-white/15 bg-white p-1 shadow-lg"
              />
              <div>
                <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                  {content.title}
                </h1>
                <p className="mt-2 text-base font-medium text-cyan-100/90">{content.subtitle}</p>
              </div>
            </div>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/78">{content.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={anyLanguageStoreLinks.playStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
              >
                {content.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={anyLanguageStoreLinks.appStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                {content.secondaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/28 p-5">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center rounded-[2rem] border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_28%)]" />
            <img
              src={content.heroImage}
              alt="AnyLanguage home screen"
              className="relative z-10 w-full max-w-[330px] rounded-[2rem] border border-white/15 shadow-[0_20px_52px_rgba(0,0,0,0.42)]"
            />
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {content.valueProps.map((item, index) => {
            const icons = [Mic, PhoneCall, Languages];
            const Icon = icons[index] ?? Sparkles;
            return (
              <article key={item.title} className="rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-12 rounded-[2rem] border border-white/12 bg-slate-950/24 p-8 shadow-2xl shadow-slate-950/25 backdrop-blur-xl sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/72">
              {content.modesHeading}
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.modes.map((mode) => (
              <article key={mode.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                <h3 className="text-xl font-semibold text-white">{mode.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/72">{mode.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/72">
              {content.screenshotsHeading}
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {content.screenshots.map((shot) => (
              <article key={shot.title} className="rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-4 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
                <div className="mx-auto max-w-[300px]">
                  <img
                    src={shot.src}
                    alt={shot.title}
                    className="w-full rounded-[1.5rem] border border-white/15 shadow-[0_18px_42px_rgba(0,0,0,0.35)]"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{shot.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/72">{shot.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-white/12 bg-gradient-to-r from-[#0f2f69]/85 via-[#13458e]/80 to-[#12549b]/78 p-8 shadow-2xl shadow-slate-950/25 sm:p-10">
          <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">{content.finalCtaTitle}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">{content.finalCtaDescription}</p>
          <div className="mt-7">
            <a
              href={locale === 'pt' ? '/pt-br/#contato' : '/#contato'}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Tg Apps
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AnyLanguageAppPage;
