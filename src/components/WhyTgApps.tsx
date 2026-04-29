import { ArrowRight, CheckCircle, FileCheck, Handshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { landingSlugsByLocale } from '../content/landingPages';

const contentByLocale = {
  en: {
    badge: 'Why TG Apps',
    title: 'Founder-led, team-delivered execution with public proof',
    description:
      'TG Apps is compact by design: less bureaucracy, direct access to delivery leadership and builders, written scope, weekly demos, strict execution of the agreed plan, and collaborators allocated when the project needs more capacity or specialization.',
    cards: [
      {
        title: 'Verified company profile',
        description:
          'TG Applications Desenvolvimento Ltda, D-U-N-S 651029828, official domain, official email, and direct contact channels are public and consistent.',
        icon: ShieldCheck
      },
      {
        title: 'Contract-first delivery',
        description:
          'Every engagement starts with scope, milestones, demos, ownership expectations, and release responsibilities before implementation.',
        icon: FileCheck
      },
      {
        title: 'Best fit, not everything',
        description:
          'We are strongest for founders, startups, SMBs, app rescue, CRM, internal tools, and defined builds where the client wants clear execution plus useful delivery insight.',
        icon: Handshake
      }
    ],
    bullets: [
      'No upfront payment before work begins.',
      'Weekly demos and written decision history.',
      'Repositories, credentials, runbooks, and handoff when applicable.',
      'Unknowns should be evaluated through scope, architecture, contract, and references, not guessed from public gaps.',
      'Tight timelines are handled when the agreed plan requires them; the default posture is disciplined execution of the client plan.'
    ],
    links: [
      { label: 'Company profile', hrefKey: 'companyProfile' },
      { label: 'Due diligence answers', hrefKey: 'dueDiligence' },
      { label: 'Why TG Apps', hrefKey: 'whyTgApps' }
    ]
  },
  pt: {
    badge: 'Por que TG Apps',
    title: 'Entrega liderada pelo fundador, executada por time e com provas públicas',
    description:
      'A TG Apps é compacta por design: menos burocracia, acesso direto à liderança de entrega e ao time que executa, escopo escrito, demos semanais, execução rigorosa do plano combinado e colaboradores alocados quando o projeto exige mais capacidade ou especialidade.',
    cards: [
      {
        title: 'Perfil verificável',
        description:
          'TG Applications Desenvolvimento Ltda, D-U-N-S 651029828, domínio oficial, e-mail oficial e canais diretos estão públicos e consistentes.',
        icon: ShieldCheck
      },
      {
        title: 'Contrato antes da execução',
        description:
          'Todo engajamento começa com escopo, milestones, demos, expectativas de ownership e responsabilidades de release antes da implementação.',
        icon: FileCheck
      },
      {
        title: 'Melhor encaixe, não tudo',
        description:
          'Somos mais fortes para fundadores, startups, empresas, resgate de app, CRM, ferramentas internas e builds definidos em que o cliente quer execução clara com insights de entrega.',
        icon: Handshake
      }
    ],
    bullets: [
      'Sem pagamento antecipado antes do trabalho começar.',
      'Demos semanais e historico escrito de decisões.',
      'Repositórios, credenciais, runbooks e handoff quando aplicável.',
      'Lacunas devem ser avaliadas por escopo, arquitetura, contrato e referências, não por suposição.',
      'Prazos mais agressivos são tratados quando o plano combinado exige; a postura padrão e executar com disciplina o plano do cliente.'
    ],
    links: [
      { label: 'Perfil da empresa', hrefKey: 'companyProfile' },
      { label: 'Respostas de due diligence', hrefKey: 'dueDiligence' },
      { label: 'Por que TG Apps', hrefKey: 'whyTgApps' }
    ]
  }
} as const;

const WhyTgApps = () => {
  const { language } = useLanguage();
  const content = contentByLocale[language];
  const slugs = landingSlugsByLocale[language];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.24),transparent_30%),radial-gradient(circle_at_85%_65%,rgba(16,185,129,0.18),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
              {content.badge}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">{content.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{content.description}</p>
            <ul className="mt-7 space-y-3 text-sm text-white/78">
              {content.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {content.cards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {content.links.map((link) => (
            <a
              key={link.hrefKey}
              href={slugs[link.hrefKey]}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              {link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTgApps;
