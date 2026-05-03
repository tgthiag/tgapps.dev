import { useState } from 'react';
import { ArrowRight, CheckCircle, Lightbulb, Mail, MessageCircle, X } from 'lucide-react';
import type { Locale } from '../i18n/translations';
import type { LandingPageContent } from '../content/landingPages';
import Header from './Header';
import Footer from './Footer';
import { trackLeadContact } from '../utils/analytics';

interface KeywordLandingPageProps {
  locale: Locale;
  content: LandingPageContent;
}

const KeywordLandingPage = ({ locale, content }: KeywordLandingPageProps) => {
  const [isContactOptionsOpen, setIsContactOptionsOpen] = useState(false);
  const isTrustPage =
    content.key === 'whyTgApps' ||
    content.key === 'companyProfile' ||
    content.key === 'dueDiligence' ||
    content.key === 'aiProfile';
  const ctaBody = isTrustPage
    ? locale === 'pt'
      ? 'Perguntas de verificação:%0D%0A- Empresa / procurement:%0D%0A- Contrato / NDA:%0D%0A- Escopo ou projeto em avaliação:%0D%0A- Documentos necessários:%0D%0A'
      : 'Verification questions:%0D%0A- Company / procurement:%0D%0A- Contract / NDA:%0D%0A- Project or scope under evaluation:%0D%0A- Required documents:%0D%0A'
    : locale === 'pt'
      ? 'Contexto do projeto:%0D%0A- Processo atual:%0D%0A- Sistema ou planilha que usamos hoje:%0D%0A- Prazo:%0D%0A- Time interno:%0D%0A- Integrações desejadas:%0D%0A'
      : 'Project context:%0D%0A- Current process:%0D%0A- System or spreadsheet we use today:%0D%0A- Deadline:%0D%0A- Internal team:%0D%0A- Required integrations:%0D%0A';
  const ctaHref = `mailto:support@tgapps.dev?subject=${encodeURIComponent(content.ctaSubject)}&body=${ctaBody}`;
  const whatsappHref =
    'https://wa.me/5511979717703?text=Hi%20I%20found%20you%20on%20Google%20and%20would%20like%20to%20build%20a%20project';
  const finalCtaTitle = isTrustPage
    ? locale === 'pt'
      ? 'Precisa validar a Tg Apps antes de contratar?'
      : 'Need to validate Tg Apps before hiring?'
    : locale === 'pt'
      ? 'Vamos mapear seu sistema?'
      : 'Ready to map your system?';
  const finalCtaDescription = isTrustPage
    ? locale === 'pt'
      ? 'Envie suas perguntas de due diligence, procurement, contrato, suporte ou handoff e respondemos com o contexto correto.'
      : 'Send your due diligence, procurement, contract, support, or handoff questions and we will reply with the right context.'
    : locale === 'pt'
      ? 'Envie o contexto atual e respondemos com uma leitura honesta de escopo, riscos, integrações e próximos passos.'
      : 'Send the current context and we will reply with an honest read on scope, risks, integrations, and next steps.';
  const contactOptionsTitle = locale === 'pt' ? 'Como você prefere falar?' : 'How would you like to talk?';
  const contactOptionsDescription =
    locale === 'pt'
      ? isTrustPage
        ? 'Escolha WhatsApp para uma conversa rápida ou e-mail para enviar perguntas de validação.'
        : 'Escolha WhatsApp para uma conversa rápida ou e-mail para enviar contexto, escopo e integrações.'
      : isTrustPage
        ? 'Choose WhatsApp for a quick conversation or email to send verification questions.'
        : 'Choose WhatsApp for a quick conversation or email to send context, scope, and integrations.';
  const openContactOptions = () => setIsContactOptionsOpen(true);
  const closeContactOptions = () => setIsContactOptionsOpen(false);
  const trackContactChoice = (method: 'whatsapp' | 'email') => {
    trackLeadContact(method, `landing_${content.key}`);
    closeContactOptions();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Header variant="landing" ctaHref={ctaHref} ctaLabel={content.ctaLabel} onCtaClick={openContactOptions} />

      <main>
        <section className="relative min-h-[82vh] overflow-hidden bg-slate-950 pt-28 text-white">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-slate-950/70"></div>
          <div className="relative mx-auto flex min-h-[calc(82vh-7rem)] max-w-7xl flex-col justify-center px-4 pb-16 sm:px-6 lg:px-8">
            <p className="mb-5 inline-flex w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-white/90">
              {content.badge}
            </p>
            <h1 className="max-w-5xl text-4xl font-bold leading-tight sm:text-6xl">{content.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">{content.intro}</p>
            {content.heroHighlights && (
              <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
                {content.heroHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/90 shadow-lg shadow-slate-950/20 backdrop-blur-sm"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openContactOptions}
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-400"
              >
                {content.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="text-sm text-white/70">
                {locale === 'pt' ? 'Resposta em até 1 dia útil.' : 'Reply within one business day.'}
              </span>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"></div>
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/45 blur-3xl"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <h2 className="text-xl font-semibold">{content.proofHeading}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {content.proofItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:translate-y-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-lime-400"></div>
                <h2 className="text-xl font-semibold">{content.deliverablesHeading}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {content.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-orange-400"></div>
                <h2 className="text-xl font-semibold">{content.fitHeading}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {content.fitItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {content.sections?.map((section, index) => (
          <section
            key={section.title}
            className={index % 2 === 0 ? 'relative overflow-hidden bg-slate-50 py-20' : 'relative overflow-hidden bg-white py-20'}
          >
            {index % 2 === 0 && (
              <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.09),transparent_42%)]"></div>
            )}
            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 ring-1 ring-blue-100">
                  {locale === 'pt' ? 'Como ajudamos' : 'How we help'}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-slate-950">{section.title}</h2>
                {section.description && <p className="mt-4 text-slate-600">{section.description}</p>}
              </div>
              <div className="grid gap-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400 opacity-70"></div>
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700">
                      {String(itemIndex + 1).padStart(2, '0')}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {content.pricing && (
          <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_82%_64%,rgba(16,185,129,0.16),transparent_28%)]"></div>
            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div>
                <p className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                  {content.pricing.label}
                </p>
                <h2 className="mt-3 text-3xl font-bold">{content.pricing.title}</h2>
                <p className="mt-4 text-white/75">{content.pricing.description}</p>
              </div>
              <div className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-md">
                <ul className="space-y-3 text-sm leading-relaxed text-white/80">
                  {content.pricing.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/15 pt-5 text-sm text-white/70">{content.pricing.note}</p>
              </div>
            </div>
          </section>
        )}

        {content.finalNote && (
          <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_36%),linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)] px-6 py-12 text-center shadow-[0_24px_75px_rgba(15,23,42,0.08)] sm:px-12">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-bold text-slate-950">{content.finalNote.title}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-slate-600">{content.finalNote.description}</p>
            </div>
          </section>
        )}

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-[0_24px_75px_rgba(15,23,42,0.16)] sm:px-12">
            <h2 className="text-3xl font-bold text-white">{finalCtaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">{finalCtaDescription}</p>
            <button
              type="button"
              onClick={openContactOptions}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              {content.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      {isContactOptionsOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-options-title"
        >
          <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/15 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.30)] sm:p-8">
            <button
              type="button"
              onClick={closeContactOptions}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
              aria-label={locale === 'pt' ? 'Fechar opções de contato' : 'Close contact options'}
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                {locale === 'pt' ? 'Contato direto' : 'Direct contact'}
              </p>
              <h2 id="contact-options-title" className="mt-3 text-3xl font-bold text-slate-950">
                {contactOptionsTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{contactOptionsDescription}</p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackContactChoice('whatsapp')}
                className="group rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-100"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-950">WhatsApp</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {locale === 'pt' ? 'Abrir conversa rápida com a Tg Apps.' : 'Open a quick chat with Tg Apps.'}
                </p>
              </a>

              <a
                href={ctaHref}
                onClick={() => trackContactChoice('email')}
                className="group rounded-2xl border border-blue-200 bg-blue-50 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-100"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-950">Email</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {locale === 'pt' ? 'Abrir e-mail com assunto e briefing prontos.' : 'Open an email with subject and briefing ready.'}
                </p>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer variant="landing" ctaHref={ctaHref} ctaLabel={content.ctaLabel} onCtaClick={openContactOptions} />
    </div>
  );
};

export default KeywordLandingPage;
