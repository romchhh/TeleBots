import ChatbotsPageRU from './ChatbotsPageRU';
import { ru } from '../../../translations';
import { truncateTitle, truncateDescription } from '../../../utils/seo';

export const metadata = {
  title: truncateTitle(ru.metadata?.chatbots?.title || 'Разработка Telegram ботов | TeleBots'),
  description: truncateDescription(ru.metadata?.chatbots?.description || 'Профессиональная разработка Telegram ботов, чат-ботов для автоматизации бизнеса. Быстрая разработка, техническая поддержка, гарантия качества.'),
  keywords: ru.metadata?.chatbots?.keywords || ['разработка telegram ботов', 'чат-боты', 'автоматизация бизнеса'],
  openGraph: {
    title: truncateTitle(ru.metadata?.chatbots?.og?.title || 'Разработка Telegram ботов | TeleBots'),
    description: truncateDescription(ru.metadata?.chatbots?.og?.description || 'Профессиональная разработка Telegram ботов для автоматизации бизнеса.'),
    type: 'website',
    locale: 'ru_RU',
    url: 'https://telebots.site/ru/chatbots',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-chatbots.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription(ru.metadata?.chatbots?.og?.imageAlt || 'Разработка Telegram ботов', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle(ru.metadata?.chatbots?.twitter?.title || 'Разработка Telegram ботов | TeleBots'),
    description: truncateDescription(ru.metadata?.chatbots?.twitter?.description || 'Профессиональная разработка Telegram ботов для автоматизации бизнеса.'),
    images: ['https://telebots.site/og-chatbots.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/ru/chatbots',
    languages: {
      'uk-UA': 'https://telebots.site/chatbots',
      'en-US': 'https://telebots.site/en/chatbots',
      'pl-PL': 'https://telebots.site/pl/chatbots',
      'ru-RU': 'https://telebots.site/ru/chatbots',
      'x-default': 'https://telebots.site/chatbots',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <ChatbotsPageRU />;
}

