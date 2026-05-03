import { ArrowRight, CheckCircle, FileCheck, Handshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { landingSlugsByLocale } from '../content/landingPages';

const contentByLocale = {
  en: {
    badge: 'Why Tg Apps',
    title: 'Why clients choose us over agencies and internal hires',
    description:
      'Our difference is practical output: we build and ship usable software with a compact team model, low bureaucracy, intelligent allocation, and direct access to senior delivery leadership.',
    cards: [
      {
        title: 'Compact team model',
        description:
          'A core team and project-based collaborators allocated according to your project needs, complexity, and required expertise. No bloated retainers. No unnecessary layers.',
        icon: ShieldCheck
      },
      {
        title: 'Low bureaucracy, structured process',
        description:
          'Clear scope, weekly demos, written decision history, risk and tradeoff notes, and clean handoff with repositories, credentials, and runbooks.',
        icon: FileCheck
      },
      {
        title: 'Direct access to delivery leadership',
        description:
          'You speak with people who can make decisions. No account managers between you and the team responsible for product, architecture, build, release, and handoff.',
        icon: Handshake
      }
    ],
    bullets: [
      'Our cost advantage comes from low overhead, direct communication, and intelligent allocation, not from cutting delivery discipline.',
      'We are not a large enterprise consultancy or a vague staffing vendor.',
      'We are an execution partner for clear, practical software builds.',
      'No upfront payment before work begins; monthly engagement can be cancelled without lock-in.',
      'Weekly demos, written decision history, repositories, credentials, runbooks, and handoff when applicable.'
    ],
    links: [
      { label: 'Company profile', hrefKey: 'companyProfile' },
      { label: 'Due diligence answers', hrefKey: 'dueDiligence' },
      { label: 'Why Tg Apps', hrefKey: 'whyTgApps' }
    ]
  },
  pt: {
    badge: 'Por que Tg Apps',
    title: 'Por que clientes escolhem a Tg Apps em vez de agências grandes ou contratação interna',
    description:
      'Nosso diferencial é entrega prática: construímos e colocamos software útil no ar com time compacto, baixa burocracia, alocação inteligente e acesso direto à liderança técnica e de produto.',
    cards: [
      {
        title: 'Modelo de time compacto',
        description:
          'Time central e colaboradores por projeto alocados de acordo com necessidade, complexidade e especialidade exigida. Sem retainer inflado. Sem camadas desnecessárias.',
        icon: ShieldCheck
      },
      {
        title: 'Baixa burocracia, processo estruturado',
        description:
          'Escopo claro, demos semanais, histórico de decisões, notas de riscos e tradeoffs, além de handoff com repositórios, credenciais e runbooks quando aplicável.',
        icon: FileCheck
      },
      {
        title: 'Acesso direto à liderança de entrega',
        description:
          'Você fala com quem decide. Sem gerente de conta entre você e o time responsável por produto, arquitetura, construção, release e handoff.',
        icon: Handshake
      }
    ],
    bullets: [
      'Nossa vantagem de custo vem de baixo overhead, comunicação direta e alocação inteligente, não de cortar disciplina de entrega.',
      'Não somos uma consultoria enterprise pesada nem um fornecedor vago de staffing.',
      'Somos um parceiro de execução para builds claros, práticos e com dono.',
      'Sem pagamento antecipado antes do trabalho começar; engajamento mensal sem lock-in.',
      'Demos semanais, histórico de decisões, repositórios, credenciais, runbooks e handoff quando aplicável.'
    ],
    links: [
      { label: 'Perfil da empresa', hrefKey: 'companyProfile' },
      { label: 'Respostas de due diligence', hrefKey: 'dueDiligence' },
      { label: 'Por que Tg Apps', hrefKey: 'whyTgApps' }
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
