import { Clock, Mail, MapPin, MessageCircle, MessageSquare, Phone } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { trackLeadContact } from '../utils/analytics';
import LeadCaptureForm from './LeadCaptureForm';

const Contact = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const contactIcons = [Mail, Phone, MapPin];
  const whatsappText = language === 'pt'
    ? 'Olá, encontrei a Tg Apps e gostaria de conversar sobre um projeto.'
    : 'Hi, I found Tg Apps and would like to talk about a project.';
  const whatsappHref = `https://wa.me/5511979717703?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section id="contato" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              <MessageSquare className="h-4 w-4" />
              {t.contact.badge}
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {t.contact.headingLine1}
              <span className="block text-blue-700">{t.contact.headingHighlight}</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">{t.contact.description}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-950">{t.contact.infoHeading}</h3>
              <div className="mt-6 space-y-5">
                {t.contact.info.map((info, index) => {
                  const Icon = contactIcons[index];
                  return (
                    <div key={info.title} className="flex items-start gap-4 border-b border-slate-200 pb-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-950">{info.title}</h4>
                        <p className="mt-1 text-sm font-medium text-slate-800">{info.value}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLeadContact('whatsapp', 'home_contact_whatsapp', { language })}
              className="flex items-center gap-4 border border-emerald-200 bg-emerald-50 p-5 transition hover:border-emerald-300 hover:bg-emerald-100"
            >
              <MessageCircle className="h-6 w-6 flex-shrink-0 text-emerald-700" />
              <div>
                <h4 className="font-semibold text-slate-950">{t.contact.whatsappCta?.title}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">{t.contact.whatsappCta?.description}</p>
              </div>
            </a>

            <div className="border-l-2 border-blue-600 pl-5">
              <h4 className="font-bold text-slate-950">{t.contact.callout.title}</h4>
              <ol className="mt-4 space-y-3">
                {t.contact.callout.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
            <h3 className="text-2xl font-bold text-slate-950">{t.contact.formHeading}</h3>
            <p className="mb-8 mt-2 text-slate-600">{t.contact.formDescription}</p>
            <LeadCaptureForm locale={language} source="home_contact_form" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
