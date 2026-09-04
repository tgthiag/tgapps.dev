import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import type { Locale } from '../i18n/translations';
import { getCampaignLandingContent, type CampaignLandingPageKey } from '../content/campaignLandingPages';
import { trackCtaClick, trackNavigationClick } from '../utils/analytics';
import LeadCaptureForm from './LeadCaptureForm';

interface CampaignLandingPageProps {
  locale: Locale;
  contentKey: CampaignLandingPageKey;
}

const CampaignLandingPage = ({ locale, contentKey }: CampaignLandingPageProps) => {
  const content = getCampaignLandingContent(locale, contentKey);
  const homeHref = locale === 'pt' ? '/pt-br/' : '/';
  const formId = 'campaign-lead-form';
  const scrollToForm = (source: string) => {
    trackCtaClick(source, content.ctaLabel, {
      campaign_landing_key: content.key,
      destination: `#${formId}`,
      language: locale
    });
    document.getElementById(formId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href={homeHref} aria-label="Tg Apps home" onClick={() => trackNavigationClick('campaign_header', 'Tg Apps home', homeHref)}>
            <img src="/logo-wordmark-640.png" alt="Tg Apps" width={320} height={111} decoding="async" className="h-10 w-auto object-contain" />
          </a>
          <button type="button" onClick={() => scrollToForm('campaign_header_cta')} className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500">
            {content.ctaLabel}
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(14,165,233,0.25),transparent_34%)]" />
          <div className="relative mx-auto grid min-h-[76vh] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="inline-flex rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100">{content.badge}</p>
              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{content.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{content.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" onClick={() => scrollToForm('campaign_hero_cta')} className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500">
                  {content.ctaLabel}<ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-sm leading-6 text-slate-300">{content.ctaNote}</span>
              </div>
            </div>
            <img
              src="/hero-product-delivery-1200.webp"
              srcSet="/hero-product-delivery-768.webp 768w, /hero-product-delivery-1200.webp 1200w"
              sizes="(min-width: 1024px) 42vw, 92vw"
              alt="Mobile app, dashboard, and workflow automation interface examples"
              width={1200}
              height={800}
              decoding="async"
              className="border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,0.28)]"
            />
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-2">
            {[
              [content.painHeading, content.painItems],
              [content.offerHeading, content.offerItems]
            ].map(([heading, items], index) => (
              <article key={heading as string} className={index === 1 ? 'bg-blue-50 p-7' : 'bg-white p-7'}>
                <h2 className="text-xl font-bold">{heading as string}</h2>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  {(items as string[]).map((item) => <li key={item} className="flex gap-3"><CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" /><span>{item}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{locale === 'pt' ? 'Primeira entrega' : 'First milestone'}</p>
              <h2 className="mt-3 text-3xl font-bold">{content.processHeading}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                {locale === 'pt' ? 'Saia da conversa com uma primeira entrega prática, não com uma proposta aberta demais.' : 'Leave the conversation with one practical first milestone, not an overly broad proposal.'}
              </p>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {content.processItems.map((item, index) => (
                <div key={item} className="grid gap-4 py-5 sm:grid-cols-[auto_1fr]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <article className="border border-slate-200 bg-white p-7">
              <ShieldCheck className="mb-5 h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold">{content.proofHeading}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">{content.proofItems.map((item) => <li key={item} className="flex gap-3"><CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" /><span>{item}</span></li>)}</ul>
            </article>
            <article className="border border-amber-200 bg-amber-50 p-7">
              <h2 className="text-2xl font-bold">{content.notFitHeading}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">{content.notFitItems.map((item) => <li key={item} className="flex gap-3"><CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-700" /><span>{item}</span></li>)}</ul>
            </article>
          </div>
        </section>

        <section id={formId} className="scroll-mt-24 bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{locale === 'pt' ? 'Próximo passo' : 'Next step'}</p>
              <h2 className="mt-4 text-3xl font-bold">{locale === 'pt' ? 'Transforme o contexto em uma primeira entrega clara.' : 'Turn the context into one clear first milestone.'}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{content.ctaNote}</p>
              <nav className="mt-8 border-t border-white/10 pt-6" aria-label={content.relatedHeading}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{content.relatedHeading}</p>
                <div className="mt-4 flex flex-wrap gap-3">{content.relatedLinks.map((link) => <a key={link.href} href={link.href} onClick={() => trackNavigationClick('campaign_related_link', link.label, link.href)} className="border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-blue-300">{link.label}</a>)}</div>
              </nav>
            </div>
            <div className="bg-white p-6 text-slate-950 sm:p-8">
              <LeadCaptureForm locale={locale} source={`campaign_${content.key}`} serviceCode={content.key} serviceLabel={content.ctaSubject} submitLabel={content.ctaLabel} showServiceField={false} showStartFields={false} compact />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:justify-between">
          <p>Tg Apps, São Paulo, Brazil · support@tgapps.dev · +55 11 97971-7703</p>
          <p>D-U-N-S® 651029828 · Contract first · No upfront payment to start</p>
        </div>
      </footer>
    </div>
  );
};

export default CampaignLandingPage;
