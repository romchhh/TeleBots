import WebsitesPageRU from './WebsitesPageRU';
import { ru } from '../../../translations';
import { truncateTitle, truncateDescription } from '../../../utils/seo';

export const metadata = {
  title: truncateTitle(ru.metadata?.websites?.title || 'Разработка веб-сайтов | TeleBots'),
  description: truncateDescription(ru.metadata?.websites?.description || 'Профессиональная разработка веб-сайтов с современными технологиями. Быстрая разработка, техническая поддержка, гарантия качества.'),
  keywords: ru.metadata?.websites?.keywords || ['разработка сайтов', 'веб-разработка', 'создание сайтов'],
  openGraph: {
    title: truncateTitle(ru.metadata?.websites?.og?.title || 'Разработка веб-сайтов | TeleBots'),
    description: truncateDescription(ru.metadata?.websites?.og?.description || 'Профессиональная разработка веб-сайтов для вашего бизнеса.'),
    type: 'website',
    locale: 'ru_RU',
    url: 'https://telebots.site/ru/websites',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-websites.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription(ru.metadata?.websites?.og?.imageAlt || 'Разработка веб-сайтов', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle(ru.metadata?.websites?.twitter?.title || 'Разработка веб-сайтов | TeleBots'),
    description: truncateDescription(ru.metadata?.websites?.twitter?.description || 'Профессиональная разработка веб-сайтов для вашего бизнеса.'),
    images: ['https://telebots.site/og-websites.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/ru/websites',
    languages: {
      'uk-UA': 'https://telebots.site/websites',
      'en-US': 'https://telebots.site/en/websites',
      'pl-PL': 'https://telebots.site/pl/websites',
      'ru-RU': 'https://telebots.site/ru/websites',
      'x-default': 'https://telebots.site/websites',
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
  return <WebsitesPageRU />;
}

