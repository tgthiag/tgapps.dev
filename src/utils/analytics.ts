declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type LeadContactMethod = 'whatsapp' | 'email' | 'contact_form_email';

const leadEventByMethod: Record<LeadContactMethod, string> = {
  whatsapp: 'lead_whatsapp',
  email: 'lead_email',
  contact_form_email: 'lead_contact_form_email'
};

export const trackLeadContact = (method: LeadContactMethod, source: string): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  const eventParams = {
    contact_method: method,
    event_category: 'lead',
    event_label: source,
    source,
    transport_type: 'beacon'
  };

  window.gtag('event', 'generate_lead', eventParams);
  window.gtag('event', leadEventByMethod[method], eventParams);
};
