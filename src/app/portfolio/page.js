import PortfolioPage from './PortfolioPage';
import { uk } from '../../translations';
import { truncateTitle, truncateDescription, generateHreflangAlternates } from '../../utils/seo';

export const metadata = {
  title: truncateTitle(uk.metadata?.portfolio?.title || 'Портфоліо | TeleBots'),
  description: truncateDescription(uk.metadata?.portfolio?.description || 'Наші проекти: розробка Telegram ботів, веб-сайтів та автоматизація бізнесу. Перегляньте наші успішні кейси.'),
  keywords: uk.metadata?.portfolio?.keywords || ['портфоліо', 'проекти', 'кейси', 'розробка ботів'],
  openGraph: {
    title: truncateTitle(uk.metadata?.portfolio?.og?.title || 'Портфоліо | TeleBots'),
    description: truncateDescription(uk.metadata?.portfolio?.og?.description || 'Наші проекти: розробка Telegram ботів, веб-сайтів та автоматизація бізнесу.'),
    url: 'https://telebots.site/portfolio',
    locale: 'uk_UA',
    siteName: 'TeleBots',
    type: 'website',
    images: [
      {
        url: 'https://telebots.site/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription('Портфоліо TeleBots', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle('Портфоліо | TeleBots'),
    description: truncateDescription('Наші проекти: розробка Telegram ботів, веб-сайтів та автоматизація бізнесу.'),
    images: ['https://telebots.site/og-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/portfolio',
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

