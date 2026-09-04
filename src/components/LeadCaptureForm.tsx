import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle, Clock, Mail, MessageCircle, Send } from 'lucide-react';
import { useTranslations } from '../context/LanguageContext';
import type { Locale } from '../i18n/translations';
import { trackAnalyticsEvent, trackLeadContact } from '../utils/analytics';

interface LeadCaptureFormProps {
  locale: Locale;
  source: string;
  serviceCode?: string;
  serviceLabel?: string;
  submitLabel?: string;
  showServiceField?: boolean;
  showStartFields?: boolean;
  compact?: boolean;
}

const serviceCodes = [
  'mobile_app',
  'crm_internal_tools',
  'app_rescue_release',
  'backend_api_integrations',
  'ai_llm_integration',
  'born_global_app',
  'product_discovery'
];
const guaranteeCodes = ['first_milestone_guarantee', 'monthly_plan', 'not_sure'];

const LeadCaptureForm = ({
  locale,
  source,
  serviceCode = '',
  serviceLabel = '',
  submitLabel,
  showServiceField = true,
  showStartFields = true,
  compact = false
}: LeadCaptureFormProps) => {
  const t = useTranslations();
  const idPrefix = source.replace(/[^a-z0-9_-]/gi, '-');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceCode,
    guaranteePreference: '',
    firstMilestone: '',
    message: '',
    whatsappOptIn: false
  });
  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fallbackMailto, setFallbackMailto] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!hasStarted) {
      setHasStarted(true);
      trackAnalyticsEvent('contact_form_start', {
        event_category: 'lead',
        event_label: source,
        field_name: event.target.name,
        language: locale,
        source
      });
    }
    const value = event.target instanceof HTMLInputElement && event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    setFormData((current) => ({ ...current, [event.target.name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setFallbackMailto('');

    const selectedService = formData.service || serviceCode || 'not_specified';
    const subject = `${serviceLabel || selectedService} | ${formData.name}`;
    const mailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone / WhatsApp: ${formData.phone || 'Not provided'}`,
      `Service: ${serviceLabel || selectedService}`,
      `Starting preference: ${formData.guaranteePreference || 'Not specified'}`,
      `First milestone: ${formData.firstMilestone || 'Not specified'}`,
      '',
      formData.message || '(No additional notes)'
    ].join('\n');
    const mailto = `mailto:support@tgapps.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const attribution = Object.fromEntries(
        Array.from(searchParams.entries()).filter(([key]) =>
          key.startsWith('utm_') || ['gclid', 'gbraid', 'wbraid', 'msclkid'].includes(key)
        )
      );
      const utm = Object.fromEntries(Object.entries(attribution).filter(([key]) => key.startsWith('utm_')));
      const response = await fetch('/api/contact-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
          serviceLabel: serviceLabel || undefined,
          sourcePage: window.location.pathname,
          landingPage: `${window.location.pathname}${window.location.search}`,
          locale,
          utm,
          attribution,
          metadata: {
            source,
            referrer: document.referrer || null
          }
        })
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || payload.accepted !== true) {
        const apiMessage = typeof payload.error === 'string'
          ? payload.error
          : typeof payload.error?.message === 'string'
            ? payload.error.message
            : '';
        throw new Error(apiMessage || t.contact.form.submitError);
      }

      trackLeadContact('contact_form_crm', source, {
        guarantee_preference: formData.guaranteePreference || 'not_specified',
        has_first_milestone: Boolean(formData.firstMilestone),
        has_phone: Boolean(formData.phone),
        language: locale,
        selected_service: selectedService,
        whatsapp_opt_in: formData.whatsappOptIn
      });
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : t.contact.form.submitError);
      setFallbackMailto(mailto);
      trackAnalyticsEvent('contact_form_error', {
        event_category: 'lead',
        event_label: source,
        language: locale,
        source
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappText = locale === 'pt'
    ? `Olá, encontrei a Tg Apps e gostaria de conversar sobre ${serviceLabel || 'um projeto'}.`
    : `Hi, I found Tg Apps and would like to talk about ${serviceLabel || 'a project'}.`;
  const whatsappHref = `https://wa.me/5511979717703?text=${encodeURIComponent(whatsappText)}`;
  const fieldClass = 'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 transition focus:border-transparent focus:ring-2 focus:ring-blue-500';
  const labelClass = 'mb-2 block text-sm font-medium text-slate-700';

  if (isSubmitted) {
    return (
      <div className="py-10 text-center" role="status">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-950">{t.contact.successTitle}</h3>
        <p className="mt-2 text-slate-600">{t.contact.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-5' : 'space-y-6'}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelClass}>{t.contact.form.nameLabel}</label>
          <input id={`${idPrefix}-name`} name="name" required value={formData.name} onChange={handleChange} className={fieldClass} placeholder={t.contact.form.namePlaceholder} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClass}>{t.contact.form.emailLabel}</label>
          <input id={`${idPrefix}-email`} name="email" type="email" required value={formData.email} onChange={handleChange} className={fieldClass} placeholder={t.contact.form.emailPlaceholder} />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelClass}>{t.contact.form.phoneLabel}</label>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" value={formData.phone} onChange={handleChange} className={fieldClass} placeholder={t.contact.form.phonePlaceholder} />
          <label className="mt-3 flex items-start gap-2 text-xs text-slate-600">
            <input type="checkbox" name="whatsappOptIn" checked={formData.whatsappOptIn} disabled={!formData.phone} onChange={handleChange} className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 disabled:opacity-40" />
            <span>{t.contact.form.whatsappOptInLabel}</span>
          </label>
        </div>
        {showServiceField ? (
          <div>
            <label htmlFor={`${idPrefix}-service`} className={labelClass}>{t.contact.form.serviceLabel}</label>
            <select id={`${idPrefix}-service`} name="service" required value={formData.service} onChange={handleChange} className={fieldClass}>
              <option value="">{t.contact.form.servicePlaceholder}</option>
              {t.contact.services.map((service, index) => <option key={serviceCodes[index]} value={serviceCodes[index]}>{service}</option>)}
            </select>
          </div>
        ) : (
          <div>
            <label htmlFor={`${idPrefix}-milestone`} className={labelClass}>{t.contact.form.firstMilestoneLabel}</label>
            <input id={`${idPrefix}-milestone`} name="firstMilestone" value={formData.firstMilestone} onChange={handleChange} className={fieldClass} placeholder={t.contact.form.firstMilestonePlaceholder} />
          </div>
        )}
      </div>

      {showStartFields && (
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}-start`} className={labelClass}>{t.contact.form.guaranteeLabel}</label>
            <select id={`${idPrefix}-start`} name="guaranteePreference" value={formData.guaranteePreference} onChange={handleChange} className={fieldClass}>
              <option value="">{t.contact.form.guaranteePlaceholder}</option>
              {t.contact.guaranteeOptions.map((option, index) => <option key={guaranteeCodes[index]} value={guaranteeCodes[index]}>{option}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor={`${idPrefix}-milestone`} className={labelClass}>{t.contact.form.firstMilestoneLabel}</label>
            <input id={`${idPrefix}-milestone`} name="firstMilestone" value={formData.firstMilestone} onChange={handleChange} className={fieldClass} placeholder={t.contact.form.firstMilestonePlaceholder} />
          </div>
        </div>
      )}

      <div>
        <label htmlFor={`${idPrefix}-message`} className={labelClass}>{t.contact.form.messageLabel}</label>
        <textarea id={`${idPrefix}-message`} name="message" required rows={compact ? 4 : 5} value={formData.message} onChange={handleChange} className={`${fieldClass} resize-none`} placeholder={t.contact.form.messagePlaceholder} />
      </div>

      <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-[0_16px_35px_rgba(37,99,235,0.22)] transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50">
        {isSubmitting ? <Clock className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        <span>{isSubmitting ? t.contact.form.submitting : submitLabel || t.contact.form.submit}</span>
      </button>

      {submitError && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <p>{submitError}</p>
          {fallbackMailto && <a className="mt-2 inline-flex font-semibold underline" href={fallbackMailto}>{t.contact.form.fallbackEmail}</a>}
        </div>
      )}

      <p className="text-center text-xs text-slate-500">{t.contact.form.policy}</p>
      {compact && (
        <div className="flex flex-wrap justify-center gap-5 border-t border-slate-200 pt-5 text-sm font-semibold">
          <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackLeadContact('whatsapp', `${source}_whatsapp`, { language: locale })} className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href="mailto:support@tgapps.dev" onClick={() => trackLeadContact('email', `${source}_email`, { language: locale })} className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900">
            <Mail className="h-4 w-4" /> support@tgapps.dev
          </a>
        </div>
      )}
    </form>
  );
};

export default LeadCaptureForm;
