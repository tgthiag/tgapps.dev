import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { useTranslations } from '../context/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      '',
      'Plans / Notes:',
      formData.message || '(No additional notes)',
      '',
      'Reminder: USD 2,000 flat monthly pod requested via contact form.'
    ];
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

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
        message: ''
      });
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
  const costSection = t.contact.costSection;

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

        {costSection && (
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white px-8 py-10 shadow-2xl">
              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    {costSection.badge}
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{costSection.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{costSection.description}</p>
                </div>
                {costSection.highlights && costSection.highlights.length > 0 && (
                  <ul className="grid gap-3 text-sm text-white/90 sm:grid-cols-2 lg:grid-cols-1">
                    {costSection.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {costSection.note && <p className="relative z-10 mt-6 text-sm text-white/80">{costSection.note}</p>}
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_55%)]"></div>
            </div>
          </div>
        )}

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

            {/* Quick Stats */}
            <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-4">{t.contact.whyUsHeading}</h4>
              <div className="space-y-3">
                {t.contact.whyUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
