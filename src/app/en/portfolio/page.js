import PortfolioPage from './PortfolioPage';
import { en } from '../../../translations';
import { truncateTitle, truncateDescription, generateHreflangAlternates } from '../../../utils/seo';

export const metadata = {
  title: truncateTitle(en.metadata?.portfolio?.title || 'Portfolio | TeleBots'),
  description: truncateDescription(en.metadata?.portfolio?.description || 'Our projects: Telegram bot development, websites and business automation. View our successful cases.'),
  keywords: en.metadata?.portfolio?.keywords || ['portfolio', 'projects', 'cases', 'bot development'],
  openGraph: {
    title: truncateTitle(en.metadata?.portfolio?.og?.title || 'Portfolio | TeleBots'),
    description: truncateDescription(en.metadata?.portfolio?.og?.description || 'Our projects: Telegram bot development, websites and business automation.'),
    url: 'https://telebots.site/en/portfolio',
    locale: 'en_US',
    siteName: 'TeleBots',
    type: 'website',
    images: [
      {
        url: 'https://telebots.site/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription('TeleBots Portfolio', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle('Portfolio | TeleBots'),
    description: truncateDescription('Our projects: Telegram bot development, websites and business automation.'),
    images: ['https://telebots.site/og-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/en/portfolio',
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

