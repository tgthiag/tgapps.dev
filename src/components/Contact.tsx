import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { trackAnalyticsEvent, trackLeadContact } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    guaranteePreference: '',
    firstMilestone: '',
    message: ''
  });
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations();
  const whatsappText =
    language === 'pt'
      ? 'Olá, encontrei a Tg Apps e gostaria de conversar sobre um projeto.'
      : 'Hi, I found Tg Apps and would like to talk about a project.';
  const whatsappHref = `https://wa.me/5511979717703?text=${encodeURIComponent(whatsappText)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackAnalyticsEvent('contact_form_start', {
        event_category: 'lead',
        event_label: 'home_contact_form',
        field_name: e.target.name,
        language,
        source: 'home_contact_form'
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const recipientEmail =
      t.contact.info?.find((item) => (item.title || '').toLowerCase().includes('email'))?.value ?? 'support@tgapps.dev';
    const subject = `${formData.service || 'New project inquiry'} • ${formData.name}`;
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone / WhatsApp: ${formData.phone || 'Not provided'}`,
      `Preferred Service: ${formData.service || 'Not specified'}`,
      `Starting preference: ${formData.guaranteePreference || 'Not specified'}`,
      `Useful first milestone: ${formData.firstMilestone || 'Not specified'}`,
      'First delivery note: scope, access, timeline, and acceptance criteria are aligned before work starts.',
      '',
      'Plans / Notes:',
      formData.message || '(No additional notes)',
      '',
      'Pricing reference: Starter USD 1,500/mo with scheduled deliveries, deploys, and a biweekly planning meeting, Growth USD 2,000/mo as the main plan with smart allocation, weekly delivery rhythm, and one weekly planning/demo meeting, Dedicated USD 3,500+/mo for the same delivery capabilities with higher availability, participation in your daily meetings when requested, and urgent priority handling at any time within the agreement. USD values are public references. The actual monthly amount is fixed before kickoff in the client billing currency agreed by both sides. Requested via contact form.'
    ];
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    trackLeadContact('contact_form_email', 'home_contact_form', {
      form_destination: recipientEmail,
      guarantee_preference: formData.guaranteePreference || 'not_specified',
      has_first_milestone: Boolean(formData.firstMilestone),
      has_phone: Boolean(formData.phone),
      language,
      selected_service: formData.service || 'not_specified'
    });
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        guaranteePreference: '',
        firstMilestone: '',
        message: ''
      });
      setHasStartedForm(false);
    }, 3000);
  };

  const contactInfoConfig = [
    { icon: Mail, color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, color: 'from-green-500 to-emerald-500' },
    { icon: MapPin, color: 'from-purple-500 to-pink-500' }
  ];

  const contactInfo = contactInfoConfig.map((config, index) => ({
    ...config,
    ...t.contact.info[index]
  }));

  const services = t.contact.services;
  const guaranteeOptions = t.contact.guaranteeOptions;

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.contact.headingLine1}
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent pb-2">
              {t.contact.headingHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.contact.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.contact.infoHeading}</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLeadContact('whatsapp', 'home_contact_whatsapp', { language })}
              className="mt-8 flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-100 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {t.contact.whatsappCta?.title ?? 'Prefer WhatsApp?'}
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  {t.contact.whatsappCta?.description ?? 'Open a direct chat with Tg Apps.'}
                </p>
              </div>
            </a>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.contact.formHeading}</h3>
              <p className="text-gray-600 mb-8">{t.contact.formDescription}</p>

              {t.contact.callout?.title && (
                <div className="mb-10 p-5 bg-white border border-gray-200 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.callout.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{t.contact.callout.description}</p>
                  <ul className="space-y-2">
                    {t.contact.callout.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start space-x-3 text-sm text-gray-700">
                        <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t.contact.successTitle}</h4>
                  <p className="text-gray-600">{t.contact.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t.contact.form.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t.contact.form.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t.contact.form.phonePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.serviceLabel}
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">{t.contact.form.servicePlaceholder}</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="guaranteePreference" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.guaranteeLabel}
                      </label>
                      <select
                        id="guaranteePreference"
                        name="guaranteePreference"
                        value={formData.guaranteePreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">{t.contact.form.guaranteePlaceholder}</option>
                        {guaranteeOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="firstMilestone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.firstMilestoneLabel}
                      </label>
                      <input
                        type="text"
                        id="firstMilestone"
                        name="firstMilestone"
                        value={formData.firstMilestone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t.contact.form.firstMilestonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 animate-spin" />
                        <span>{t.contact.form.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t.contact.form.submit}</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">{t.contact.form.policy}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
