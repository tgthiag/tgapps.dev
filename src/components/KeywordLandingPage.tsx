import { ArrowRight, Check, Lightbulb } from 'lucide-react';
import type { Locale } from '../i18n/translations';
import type { LandingPageContent } from '../content/landingPages';
import Header from './Header';
import Footer from './Footer';
import LeadCaptureForm from './LeadCaptureForm';
import { trackCtaClick } from '../utils/analytics';

interface KeywordLandingPageProps {
  locale: Locale;
  content: LandingPageContent;
}

const KeywordLandingPage = ({ locale, content }: KeywordLandingPageProps) => {
  const isTrustPage = ['whyTgApps', 'companyProfile', 'dueDiligence', 'aiProfile'].includes(content.key);
  const isTeamFitPage = content.key === 'howWeFitYourTeam';
  const formId = 'lead-form';
  const finalTitle = isTrustPage
    ? locale === 'pt' ? 'Quer validar a Tg Apps antes de avançar?' : 'Need to validate Tg Apps before hiring?'
    : isTeamFitPage
      ? locale === 'pt' ? 'Vamos definir onde a Tg Apps entra?' : 'Let us define where Tg Apps fits.'
      : locale === 'pt' ? 'Transforme o contexto em uma primeira entrega clara.' : 'Turn the context into one clear first milestone.';
  const finalDescription = isTrustPage
    ? locale === 'pt'
      ? 'Envie suas perguntas sobre empresa, contrato, suporte ou transferência técnica. Respondemos com fatos e documentos aplicáveis.'
      : 'Send your company, contract, support, or handoff questions. We reply with applicable facts and documents.'
    : locale === 'pt'
      ? 'Compartilhe o contexto atual. Respondemos com uma leitura direta sobre escopo, riscos, integrações e próximo passo.'
      : 'Share the current context. We reply with a direct read on scope, risks, integrations, and the next step.';
  const heroCtaNote = locale === 'pt' ? 'Resposta em até 1 dia útil.' : 'Reply within one business day.';

  const scrollToForm = (source: string) => {
    trackCtaClick(source, content.ctaLabel, {
      destination: `#${formId}`,
      is_trust_page: isTrustPage,
      landing_key: content.key,
      language: locale
    });
    document.getElementById(formId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqStructuredData = content.faq
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      })
    : null;

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header variant="landing" ctaHref={`#${formId}`} ctaLabel={content.ctaLabel} onCtaClick={() => scrollToForm('landing_header_cta')} />

      <main>
        <section className="relative overflow-hidden bg-slate-950 pt-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(14,165,233,0.18),transparent_32%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{content.badge}</p>
              <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">{content.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{content.intro}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="button" onClick={() => scrollToForm('landing_hero_cta')} className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500">
                  {content.ctaLabel}<ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-sm text-slate-400">{heroCtaNote}</span>
              </div>
            </div>

            {content.heroHighlights?.length ? (
              <div className="mt-16 grid border-y border-white/12 sm:grid-cols-3">
                {content.heroHighlights.map((highlight, index) => (
                  <p key={highlight} className={`py-5 text-sm leading-6 text-slate-200 sm:px-6 ${index > 0 ? 'border-t border-white/12 sm:border-l sm:border-t-0' : ''}`}>
                    {highlight}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="bg-[#f8f7f4] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-px overflow-hidden border border-stone-200 bg-stone-200 lg:grid-cols-3">
              {[
                [content.proofHeading, content.proofItems],
                [content.deliverablesHeading, content.deliverables],
                [content.fitHeading, content.fitItems]
              ].map(([heading, items], columnIndex) => (
                <section key={heading as string} className="bg-white p-7 sm:p-8">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-blue-700">0{columnIndex + 1}</p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight">{heading as string}</h2>
                  <ul className="mt-6 space-y-4">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        {content.sections?.map((section, sectionIndex) => (
          <section key={section.title} className={`py-20 sm:py-24 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  {locale === 'pt' ? 'Como ajudamos' : 'How we help'}
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{section.title}</h2>
                {section.description && <p className="mt-5 max-w-md leading-7 text-slate-600">{section.description}</p>}
              </div>
              <ol className="divide-y divide-slate-200 border-y border-slate-200">
                {section.items.map((item, itemIndex) => (
                  <li key={item} className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr] sm:items-start">
                    <span className="text-xs font-bold tracking-[0.18em] text-slate-400">{String(itemIndex + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}

        {content.faq?.length ? (
          <section className="bg-[#f8f7f4] py-20 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">FAQ</p>
                <h2 className="mt-4 text-3xl font-bold">{locale === 'pt' ? 'Perguntas frequentes' : 'Frequently asked questions'}</h2>
              </div>
              <div className="divide-y divide-stone-300 border-y border-stone-300">
                {content.faq.map((item) => (
                  <article key={item.question} className="py-6">
                    <h3 className="font-bold text-slate-950">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {content.pricing && (
          <section className="bg-slate-950 py-20 text-white sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{content.pricing.label}</p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{content.pricing.title}</h2>
                <p className="mt-5 leading-7 text-slate-300">{content.pricing.description}</p>
              </div>
              <div className="border-y border-white/15">
                <ul className="divide-y divide-white/10">
                  {content.pricing.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 py-5 text-sm leading-7 text-slate-200">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-white/10 py-5 text-sm leading-7 text-slate-400">{content.pricing.note}</p>
              </div>
            </div>
          </section>
        )}

        {content.finalNote && (
          <section className="bg-white py-16">
            <div className="mx-auto flex max-w-5xl gap-5 px-4 sm:px-6 lg:px-8">
              <Lightbulb className="mt-1 h-6 w-6 flex-shrink-0 text-blue-700" />
              <div>
                <h2 className="text-2xl font-bold">{content.finalNote.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{content.finalNote.description}</p>
              </div>
            </div>
          </section>
        )}

        <section id={formId} className="scroll-mt-24 bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{locale === 'pt' ? 'Próximo passo' : 'Next step'}</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{finalTitle}</h2>
              <p className="mt-5 leading-7 text-slate-300">{finalDescription}</p>
            </div>
            <div className="bg-white p-6 text-slate-950 sm:p-8">
              <LeadCaptureForm locale={locale} source={`landing_${content.key}`} serviceCode={content.key} serviceLabel={content.ctaSubject} submitLabel={content.ctaLabel} showServiceField={false} showStartFields={!isTrustPage} compact />
            </div>
          </div>
        </section>
      </main>

      {faqStructuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqStructuredData }} />}
      <Footer variant="landing" ctaHref={`#${formId}`} ctaLabel={content.ctaLabel} onCtaClick={() => scrollToForm('landing_footer_cta')} />
    </div>
  );
};

export default KeywordLandingPage;
