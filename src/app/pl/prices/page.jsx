import PricesPage from '../../../ui/PricesPage';
import { pl } from '../../../translations';

export const metadata = {
  title: pl.metadata.prices?.title || 'Ceny rozwoju | TeleBots',
  description: pl.metadata.prices?.description || 'Aktualne ceny za tworzenie botów Telegram, stron internetowych i parserów. Przejrzyste cenniki i jakościowe rozwiązania.',
  keywords: [
    'ceny botów telegram',
    'koszt tworzenia bota',
    'zamów bota telegram',
    'ceny chatbotów',
    'cena tworzenia bota',
    'bot telegram pod klucz',
    'cena stworzenia bota telegram',
    'koszt bota biznesowego',
    'cena automatyzacji telegram',
    'cena bota sklepu'
  ],
  openGraph: {
    title: pl.metadata.prices?.og?.title || 'Ceny rozwoju | TeleBots',
    description: pl.metadata.prices?.og?.description || 'Tworzenie botów Telegram, stron internetowych i parserów w przystępnych cenach. Trzy pakiety usług dla różnych potrzeb biznesowych.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://telebots.site/pl/prices',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/prices-preview.jpg',
        width: 1200,
        height: 630,
        alt: pl.metadata.prices?.og?.imageAlt || 'Ceny rozwoju TeleBots',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pl.metadata.prices?.twitter?.title || 'Ceny rozwoju | TeleBots',
    description: pl.metadata.prices?.twitter?.description || 'Tworzenie botów Telegram, stron internetowych i parserów w przystępnych cenach',
    images: ['https://telebots.site/prices-preview.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/pl/prices',
    languages: {
      'uk': 'https://telebots.site/prices',
      'en': 'https://telebots.site/en/prices',
      'ru': 'https://telebots.site/ru/prices',
      'pl': 'https://telebots.site/pl/prices',
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
  return <PricesPage />;
}
