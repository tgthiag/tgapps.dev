import { ArrowRight, CheckCircle, Rocket, Workflow, Wrench } from 'lucide-react';
import { useLanguage, useTranslations } from '../context/LanguageContext';
import { landingSlugsByLocale } from '../content/landingPages';
import { trackCtaClick } from '../utils/analytics';

const Services = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const isPt = language === 'pt';
  const scenarios = (t.services.process ?? []).slice(0, 3);
  const services = t.services.items ?? [];
  const scenarioIcons = [Rocket, Wrench, Workflow];
  const serviceHrefs = [
    landingSlugsByLocale[language].androidIosSmb,
    landingSlugsByLocale[language].customCrmInternalTools,
    landingSlugsByLocale[language].appRescueLaunch,
    landingSlugsByLocale[language].backendApiIntegrations,
    landingSlugsByLocale[language].llmRagIntegrations,
    landingSlugsByLocale[language].bornGlobalApps
  ];

  const scrollToContact = () => {
    trackCtaClick('delivery_model_cta', isPt ? 'Solicitar análise' : 'Request a review', {
      destination: '#contato',
      language
    });
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="what-you-get" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{t.services.badge}</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {isPt ? 'Comece pelo resultado que precisa avançar.' : 'Start with the outcome that needs to move.'}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
            {isPt
              ? 'A mesma Tg Apps pode construir do zero, recuperar um produto travado ou assumir uma frente junto ao seu time. O que muda é o ponto de entrada e a responsabilidade inicial.'
              : 'The same Tg Apps team can build from zero, rescue a stalled product, or own one critical area alongside your team. The entry point and initial responsibility are what change.'}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-3">
          {scenarios.map((scenario, index) => {
            const Icon = scenarioIcons[index];
            return (
              <article key={scenario.title} className="bg-slate-50 p-7 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-blue-700">
                  {t.services.processLabel} {index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{scenario.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{scenario.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {scenario.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div id="process" className="scroll-mt-24 mt-16 overflow-hidden bg-slate-950 text-white lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {isPt ? 'Como a parceria funciona' : 'How the partnership works'}
            </p>
            <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              {isPt ? 'Você define as prioridades. Nós assumimos a entrega.' : 'You set the priorities. We own the delivery.'}
            </h3>
            <p className="mt-5 text-base leading-8 text-white/70">
              {isPt
                ? 'A Tg Apps organiza execução técnica, colaboradores, qualidade, deploys e handoff. Você acompanha por planejamento compartilhado, comunicação direta e demos funcionais.'
                : 'Tg Apps coordinates technical execution, collaborators, quality, releases, and handoff. You follow progress through shared planning, direct communication, and working demos.'}
            </p>
            <button
              type="button"
              onClick={scrollToContact}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-400"
            >
              {isPt ? 'Solicitar análise da primeira entrega' : 'Request a first milestone review'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {[
              isPt ? ['Ownership completo', 'Assumimos produto, arquitetura, execução e release.'] : ['Full ownership', 'We own product delivery, architecture, execution, and release.'],
              isPt ? ['Ownership de uma área', 'Entramos em mobile, backend, CRM ou outra frente crítica.'] : ['Product-area ownership', 'We own mobile, backend, CRM, or another critical product area.'],
              isPt ? ['Apoio embarcado', 'Trabalhamos dentro do ritmo e das ferramentas da sua equipe.'] : ['Embedded support', 'We work inside your team rhythm and existing tools.'],
              isPt ? ['Co-delivery', 'Dividimos responsabilidades com seu time ou outros parceiros.'] : ['Co-delivery', 'We split clear responsibilities with your team or other partners.']
            ].map(([title, description]) => (
              <div key={title} className="bg-white/[0.06] p-7 sm:p-8">
                <h4 className="font-bold text-white">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-9">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {isPt ? 'Capacidades técnicas' : 'Technical capabilities'}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                {isPt ? 'Uma equipe, diferentes frentes de produto.' : 'One team, multiple product fronts.'}
              </h3>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-600">
              {isPt
                ? 'Cada página detalha entregáveis, melhor encaixe e exemplos para uma necessidade específica.'
                : 'Each page details deliverables, best fit, and examples for a specific need.'}
            </p>
          </div>
          <div className="mt-7 grid gap-x-8 border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <a
                key={service.title}
                href={serviceHrefs[index]}
                onClick={() => trackCtaClick('capability_link', service.title, { destination: serviceHrefs[index], language })}
                className="group flex items-center justify-between gap-4 border-b border-slate-200 py-5 text-sm font-semibold text-slate-800 transition hover:text-blue-700"
              >
                <span>{service.title}</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
