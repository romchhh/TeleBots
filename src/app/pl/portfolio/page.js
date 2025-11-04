import PortfolioPage from './PortfolioPage';
import { pl } from '../../../translations';
import { truncateTitle, truncateDescription, generateHreflangAlternates } from '../../../utils/seo';

export const metadata = {
  title: truncateTitle(pl.metadata?.portfolio?.title || 'Portfolio | TeleBots'),
  description: truncateDescription(pl.metadata?.portfolio?.description || 'Nasze projekty: rozwój botów Telegram, stron internetowych i automatyzacja biznesu. Zobacz nasze udane przypadki.'),
  keywords: pl.metadata?.portfolio?.keywords || ['portfolio', 'projekty', 'przypadki', 'rozwój botów'],
  openGraph: {
    title: truncateTitle(pl.metadata?.portfolio?.og?.title || 'Portfolio | TeleBots'),
    description: truncateDescription(pl.metadata?.portfolio?.og?.description || 'Nasze projekty: rozwój botów Telegram, stron internetowych i automatyzacja biznesu.'),
    url: 'https://telebots.site/pl/portfolio',
    locale: 'pl_PL',
    siteName: 'TeleBots',
    type: 'website',
    images: [
      {
        url: 'https://telebots.site/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription('Portfolio TeleBots', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle('Portfolio | TeleBots'),
    description: truncateDescription('Nasze projekty: rozwój botów Telegram, stron internetowych i automatyzacja biznesu.'),
    images: ['https://telebots.site/og-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/pl/portfolio',
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

