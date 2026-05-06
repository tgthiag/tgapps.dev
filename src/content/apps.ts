import type { Locale } from '../i18n/translations';
import { getPublicRouteById } from './publicRoutes';

export interface AppCardContent {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  highlights: string[];
  cta: string;
  heroImage: string;
  icon: string;
}

export interface AppsDirectoryContent {
  badge: string;
  title: string;
  description: string;
  backLabel: string;
  appSectionLabel: string;
  appCard: AppCardContent;
}

export interface AnyLanguagePageContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  primaryCta: string;
  secondaryCta: string;
  backLabel: string;
  stats: { label: string; value: string }[];
  valueProps: { title: string; description: string }[];
  modesHeading: string;
  modes: { title: string; description: string }[];
  screenshotsHeading: string;
  screenshots: { title: string; description: string; src: string }[];
  finalCtaTitle: string;
  finalCtaDescription: string;
}

const appsDirectoryRoute = getPublicRouteById('appsDirectory');
const anyLanguageRoute = getPublicRouteById('anyLanguage');

export const appRoutes = {
  appsDirectory: appsDirectoryRoute?.localizedPaths.en ?? '/apps',
  anyLanguage: anyLanguageRoute?.localizedPaths.en ?? '/apps/anylanguage'
} as const;

export const appsDirectoryContent: Record<Locale, AppsDirectoryContent> = {
  en: {
    badge: 'Apps by Tg Apps',
    title: 'Apps we design, ship, and keep improving',
    description:
      'A curated view of the products we build and operate. Start with AnyLanguage, our voice-first language practice app built for natural speaking routines.',
    backLabel: 'Back to Tg Apps',
    appSectionLabel: 'Featured app',
    appCard: {
      slug: appRoutes.anyLanguage,
      name: 'AnyLanguage Conversations',
      tagline: 'Voice-first speaking practice with AI',
      description:
        'Practice real conversations, switch between speaking modes, build vocabulary, and track progress across 50+ languages in one polished mobile flow.',
      status: 'Live product',
      highlights: ['50+ languages', 'Phone Call mode', 'Vocabulary and history'],
      cta: 'View app page',
      heroImage: '/app-media/anylanguage/screen-home-en.png',
      icon: '/app-media/anylanguage/logo.png'
    }
  },
  pt: {
    badge: 'Apps da Tg Apps',
    title: 'Apps que desenhamos, entregamos e seguimos evoluindo',
    description:
      'Uma vitrine dos produtos que construímos e operamos. Comece pelo AnyLanguage, nosso app focado em prática de conversação com voz e rotina real de fala.',
    backLabel: 'Voltar para a Tg Apps',
    appSectionLabel: 'App em destaque',
    appCard: {
      slug: appRoutes.anyLanguage,
      name: 'AnyLanguage Conversations',
      tagline: 'Prática de fala com IA e foco em voz',
      description:
        'Pratique conversas reais, alterne entre modos de fala, expanda vocabulário e acompanhe progresso em mais de 50 idiomas dentro de um fluxo mobile refinado.',
      status: 'Produto em operação',
      highlights: ['50+ idiomas', 'Modo de ligação por voz', 'Vocabulário e histórico'],
      cta: 'Ver página do app',
      heroImage: '/app-media/anylanguage/screen-home.png',
      icon: '/app-media/anylanguage/logo.png'
    }
  }
};

export const anyLanguagePageContent: Record<Locale, AnyLanguagePageContent> = {
  en: {
    badge: 'AnyLanguage Conversations',
    title: 'A language practice app designed for real speaking, not drills',
    subtitle: 'Natural voice practice across 50+ languages',
    description:
      'AnyLanguage helps learners practice speaking in a way that feels closer to real conversation. It combines voice-first chat, a dedicated Phone Call mode, vocabulary exploration, and session history so users can keep building fluency without leaving the app.',
    heroImage: '/app-media/anylanguage/screen-home-en.png',
    primaryCta: 'Get it on Google Play',
    secondaryCta: 'Download on the App Store',
    backLabel: 'Back to apps',
    stats: [
      { value: '50+', label: 'languages available' },
      { value: 'Voice-first', label: 'conversation experience' },
      { value: 'CEFR', label: 'progress-aware feedback' }
    ],
    valueProps: [
      {
        title: 'Speak naturally',
        description:
          'The app is built around speaking practice, with faster voice capture and smoother response flow so sessions feel more like real dialogue.'
      },
      {
        title: 'Switch modes by goal',
        description:
          'Users can move between free conversation, Phone Call mode, topic-based practice, interview prompts, and vocabulary study without changing apps.'
      },
      {
        title: 'Keep momentum',
        description:
          'Progress, recent sessions, and vocabulary paths stay visible so learners can come back and continue from where they left off.'
      }
    ],
    modesHeading: 'What users can do inside the app',
    modes: [
      {
        title: 'Free conversation',
        description: 'Open-ended speaking practice with fast back-and-forth AI responses.'
      },
      {
        title: 'Phone Call mode',
        description: 'A call-style experience designed to make spoken practice feel more natural and focused.'
      },
      {
        title: 'Vocabulary builder',
        description: 'Tap words and phrases, explore meanings, and expand useful language in context.'
      },
      {
        title: 'Guided practice',
        description: 'Use interview prompts, level-based practice, and topic modes for more structured speaking sessions.'
      }
    ],
    screenshotsHeading: 'Screens from the current app build',
    screenshots: [
      {
        title: 'Language selection',
        description: 'Users can jump back into the language they want to practice and keep track of recent activity.',
        src: '/app-media/anylanguage/screen-language-en.png'
      },
      {
        title: 'Main home flow',
        description: 'The home screen highlights the main speaking actions and keeps the primary paths clear without clutter.',
        src: '/app-media/anylanguage/screen-home-en.png'
      },
      {
        title: 'Phone Call mode',
        description: 'A dedicated call-style screen keeps the practice focused on speaking and listening in one language.',
        src: '/app-media/anylanguage/screen-phonecall-clean-en.png'
      }
    ],
    finalCtaTitle: 'Need a custom app with this level of product polish?',
    finalCtaDescription:
      'Tg Apps can build, design, rescue, launch, and evolve mobile products like AnyLanguage for founders, startups, and businesses that need a clear release path and real product iteration.'
  },
  pt: {
    badge: 'AnyLanguage Conversations',
    title: 'Um app de idiomas pensado para fala real, não só exercícios',
    subtitle: 'Prática natural de conversação em 50+ idiomas',
    description:
      'O AnyLanguage ajuda o usuário a praticar fala de um jeito mais próximo de uma conversa real. Ele combina chat com foco em voz, modo de ligação por voz, exploração de vocabulário e histórico de sessões para manter a evolução dentro do próprio app.',
    heroImage: '/app-media/anylanguage/screen-home.png',
    primaryCta: 'Baixar no Google Play',
    secondaryCta: 'Baixar na App Store',
    backLabel: 'Voltar para apps',
    stats: [
      { value: '50+', label: 'idiomas disponíveis' },
      { value: 'Voz em primeiro lugar', label: 'experiência de conversa' },
      { value: 'CEFR', label: 'feedback orientado por progresso' }
    ],
    valueProps: [
      {
        title: 'Fale de forma natural',
        description:
          'O app foi construído em torno de prática de fala, com melhor captação de voz e fluxo de resposta mais suave para a sessão parecer uma conversa de verdade.'
      },
      {
        title: 'Mude de modo conforme o objetivo',
        description:
          'O usuário pode alternar entre conversa livre, ligação por voz, prática por tema, entrevistas e vocabulário sem precisar trocar de app.'
      },
      {
        title: 'Mantenha o ritmo',
        description:
          'Progresso, sessões recentes e caminhos de vocabulário continuam visíveis para o usuário retomar de onde parou.'
      }
    ],
    modesHeading: 'O que o usuário consegue fazer dentro do app',
    modes: [
      {
        title: 'Conversa livre',
        description: 'Prática aberta de fala com respostas rápidas e naturais da IA.'
      },
      {
        title: 'Modo de ligação por voz',
        description: 'Uma experiência de chamada pensada para tornar a prática oral mais natural e focada.'
      },
      {
        title: 'Construção de vocabulário',
        description: 'Toque em palavras e frases, explore significados e expanda o idioma dentro do contexto.'
      },
      {
        title: 'Prática guiada',
        description: 'Use entrevistas, prática por nível e temas para sessões mais estruturadas.'
      }
    ],
    screenshotsHeading: 'Telas da build atual do app',
    screenshots: [
      {
        title: 'Seleção de idioma',
        description: 'O usuário volta rapidamente ao idioma que quer praticar e vê a atividade recente.',
        src: '/app-media/anylanguage/screen-language.png'
      },
      {
        title: 'Fluxo principal',
        description: 'A home destaca as ações principais de fala e mantém os caminhos centrais claros.',
        src: '/app-media/anylanguage/screen-home.png'
      },
      {
        title: 'Módulos de prática',
        description: 'Os modos adicionais de aprendizado continuam visíveis sem deixar o app poluído.',
        src: '/app-media/anylanguage/screen-features.png'
      }
    ],
    finalCtaTitle: 'Precisa de um app com esse nível de produto e acabamento?',
    finalCtaDescription:
      'A Tg Apps pode desenhar, resgatar, publicar e evoluir produtos mobile como o AnyLanguage para fundadores, startups e empresas que precisam de um caminho claro de deploy e iteração real de produto.'
  }
};

export const anyLanguageStoreLinks = {
  playStore: 'https://play.google.com/store/apps/details?id=com.tgapps.anylanguage_conversation',
  appStore: 'https://apps.apple.com/app/id6755972635'
} as const;
