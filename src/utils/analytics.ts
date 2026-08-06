declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type LeadContactMethod = 'whatsapp' | 'email' | 'contact_form_email' | 'phone';

type AnalyticsParamValue = string | number | boolean | null | undefined;
type AnalyticsEventParams = Record<string, AnalyticsParamValue>;

const leadClickEventByMethod: Record<LeadContactMethod, string> = {
  whatsapp: 'lead_whatsapp_click',
  email: 'lead_email_click',
  contact_form_email: 'contact_form_submit',
  phone: 'lead_phone_click'
};

const cleanParams = (params: AnalyticsEventParams): Record<string, string | number | boolean | null> => {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined)
  ) as Record<string, string | number | boolean | null>;
};

const getPageParams = (): AnalyticsEventParams => {
  if (typeof window === 'undefined') {
    return {};
  }

  return {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: typeof document !== 'undefined' ? document.title : undefined
  };
};

export const trackAnalyticsEvent = (eventName: string, params: AnalyticsEventParams = {}): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, cleanParams({
    ...getPageParams(),
    transport_type: 'beacon',
    ...params
  }));
};

export const trackLeadContact = (
  method: LeadContactMethod,
  source: string,
  params: AnalyticsEventParams = {}
): void => {
  const eventParams = {
    contact_method: method,
    event_category: 'lead',
    event_label: source,
    lead_source: source,
    source,
    ...params
  };

  trackAnalyticsEvent('generate_lead', eventParams);
  trackAnalyticsEvent(leadClickEventByMethod[method], eventParams);
};

export const trackCtaClick = (
  source: string,
  label: string,
  params: AnalyticsEventParams = {}
): void => {
  trackAnalyticsEvent('cta_click', {
    cta_source: source,
    cta_label: label,
    event_category: 'engagement',
    event_label: source,
    source,
    ...params
  });
};

export const trackContactOptionsOpen = (
  source: string,
  params: AnalyticsEventParams = {}
): void => {
  trackAnalyticsEvent('contact_options_open', {
    event_category: 'lead',
    event_label: source,
    source,
    ...params
  });
};

export const trackPricingPlanClick = (
  planName: string,
  source: string,
  params: AnalyticsEventParams = {}
): void => {
  trackAnalyticsEvent('pricing_plan_click', {
    event_category: 'pricing',
    event_label: planName,
    plan_name: planName,
    source,
    ...params
  });
};

export const trackLanguageSwitch = (
  fromLanguage: string,
  toLanguage: string,
  source: string
): void => {
  if (fromLanguage === toLanguage) {
    return;
  }

  trackAnalyticsEvent('language_switch', {
    event_category: 'engagement',
    event_label: `${fromLanguage}_to_${toLanguage}`,
    from_language: fromLanguage,
    to_language: toLanguage,
    source
  });
};

export const trackNavigationClick = (
  source: string,
  label: string,
  destination: string
): void => {
  trackAnalyticsEvent('navigation_click', {
    event_category: 'navigation',
    event_label: label,
    link_text: label,
    link_url: destination,
    source
  });
};

export const trackExternalLinkClick = (
  source: string,
  label: string,
  destination: string
): void => {
  trackAnalyticsEvent('external_link_click', {
    event_category: 'outbound',
    event_label: label,
    link_text: label,
    link_url: destination,
    source
  });
};

export const trackAppStoreClick = (
  source: string,
  store: string,
  destination: string,
  params: AnalyticsEventParams = {}
): void => {
  trackAnalyticsEvent('app_store_click', {
    event_category: 'app',
    event_label: store,
    link_url: destination,
    source,
    store,
    ...params
  });
};
