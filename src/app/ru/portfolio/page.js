import PortfolioPage from './PortfolioPage';
import { ru } from '../../../translations';
import { truncateTitle, truncateDescription, generateHreflangAlternates } from '../../../utils/seo';

export const metadata = {
  title: truncateTitle(ru.metadata?.portfolio?.title || 'Портфолио | TeleBots'),
  description: truncateDescription(ru.metadata?.portfolio?.description || 'Наши проекты: разработка Telegram ботов, веб-сайтов и автоматизация бизнеса. Посмотрите наши успешные кейсы.'),
  keywords: ru.metadata?.portfolio?.keywords || ['портфолио', 'проекты', 'кейсы', 'разработка ботов'],
  openGraph: {
    title: truncateTitle(ru.metadata?.portfolio?.og?.title || 'Портфолио | TeleBots'),
    description: truncateDescription(ru.metadata?.portfolio?.og?.description || 'Наши проекты: разработка Telegram ботов, веб-сайтов и автоматизация бизнеса.'),
    url: 'https://telebots.site/ru/portfolio',
    locale: 'ru_RU',
    siteName: 'TeleBots',
    type: 'website',
    images: [
      {
        url: 'https://telebots.site/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription('Портфолио TeleBots', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle('Портфолио | TeleBots'),
    description: truncateDescription('Наши проекты: разработка Telegram ботов, веб-сайтов и автоматизация бизнеса.'),
    images: ['https://telebots.site/og-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/ru/portfolio',
    languages: {
      'uk-UA': 'https://telebots.site/portfolio',
      'en-US': 'https://telebots.site/en/portfolio',
      'pl-PL': 'https://telebots.site/pl/portfolio',
      'ru-RU': 'https://telebots.site/ru/portfolio',
      'x-default': 'https://telebots.site/portfolio',
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
  return <PortfolioPage />;
}

