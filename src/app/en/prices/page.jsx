import PricesPage from '../../../ui/PricesPage';
import { en } from '../../../translations';
import { generateBreadcrumbs } from '../../../utils/seo';
import { truncateTitle, truncateDescription } from '../../../utils/seo';

const breadcrumbsSchema = generateBreadcrumbs('/en/prices', 'Prices', 'en');

export const metadata = {
  title: truncateTitle(en.metadata.prices?.title || 'Development Prices | TeleBots'),
  description: truncateDescription(en.metadata.prices?.description || 'Current prices for Telegram bot, website and parser development. Transparent pricing and quality solutions.'),
  keywords: [
    'telegram bot prices',
    'bot development cost',
    'order telegram bot',
    'chatbot prices',
    'bot development price',
    'telegram bot turnkey',
    'telegram bot creation price',
    'business bot cost',
    'telegram automation price',
    'store bot price'
  ],
  openGraph: {
    title: truncateTitle(en.metadata.prices?.og?.title || 'Development Prices | TeleBots'),
    description: truncateDescription(en.metadata.prices?.og?.description || 'Telegram bot, website and parser development at affordable prices. Three service packages for different business needs.'),
    type: 'website',
    locale: 'en_US',
    url: 'https://telebots.site/en/prices',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/prices-preview.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription(en.metadata.prices?.og?.imageAlt || 'TeleBots Development Prices', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle(en.metadata.prices?.twitter?.title || 'Development Prices | TeleBots'),
    description: truncateDescription(en.metadata.prices?.twitter?.description || 'Telegram bot, website and parser development at affordable prices'),
    images: ['https://telebots.site/prices-preview.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/en/prices',
    languages: {
      'uk-UA': 'https://telebots.site/prices',
      'en-US': 'https://telebots.site/en/prices',
      'pl-PL': 'https://telebots.site/pl/prices',
      'ru-RU': 'https://telebots.site/ru/prices',
      'x-default': 'https://telebots.site/prices',
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <PricesPage />
    </>
  );
}
