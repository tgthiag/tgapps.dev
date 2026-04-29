declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type LeadContactMethod = 'whatsapp' | 'email' | 'contact_form_email';

export const trackLeadContact = (method: LeadContactMethod, source: string): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'generate_lead', {
    contact_method: method,
    event_category: 'lead',
    event_label: source,
    source
  });
};

