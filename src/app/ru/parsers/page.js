import ParsersPageRU from './ParsersPageRU';
import { ru } from '../../../translations';
import { truncateTitle, truncateDescription } from '../../../utils/seo';

export const metadata = {
  title: truncateTitle(ru.metadata?.parsers?.title || 'Разработка парсеров данных | TeleBots'),
  description: truncateDescription(ru.metadata?.parsers?.description || 'Профессиональная разработка парсеров для автоматического сбора данных. Быстрая разработка, техническая поддержка, гарантия качества.'),
  keywords: ru.metadata?.parsers?.keywords || ['разработка парсеров', 'парсинг данных', 'автоматизация сбора данных'],
  openGraph: {
    title: truncateTitle(ru.metadata?.parsers?.og?.title || 'Разработка парсеров данных | TeleBots'),
    description: truncateDescription(ru.metadata?.parsers?.og?.description || 'Профессиональная разработка парсеров для автоматического сбора данных.'),
    type: 'website',
    locale: 'ru_RU',
    url: 'https://telebots.site/ru/parsers',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-parsers.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription(ru.metadata?.parsers?.og?.imageAlt || 'Разработка парсеров данных', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle(ru.metadata?.parsers?.twitter?.title || 'Разработка парсеров данных | TeleBots'),
    description: truncateDescription(ru.metadata?.parsers?.twitter?.description || 'Профессиональная разработка парсеров для автоматического сбора данных.'),
    images: ['https://telebots.site/og-parsers.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/ru/parsers',
    languages: {
      'uk-UA': 'https://telebots.site/parsers',
      'en-US': 'https://telebots.site/en/parsers',
      'pl-PL': 'https://telebots.site/pl/parsers',
      'ru-RU': 'https://telebots.site/ru/parsers',
      'x-default': 'https://telebots.site/parsers',
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
  return <ParsersPageRU />;
}

