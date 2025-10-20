import WebsitesPage from '../../../pages_backup/websites';
import { pl } from '../../../translations';

export const metadata = {
  title: pl.metadata.websites.title,
  description: pl.metadata.websites.description,
  keywords: pl.metadata.websites.keywords,
  openGraph: {
    title: pl.metadata.websites.og.title,
    description: pl.metadata.websites.og.description,
    type: 'website',
    locale: 'pl_PL',
    url: 'https://telebots.site/pl/websites',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-websites.jpg',
        width: 1200,
        height: 630,
        alt: pl.metadata.websites.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pl.metadata.websites.twitter.title,
    description: pl.metadata.websites.twitter.description,
    images: ['https://telebots.site/og-websites.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/pl/websites',
    languages: {
      'uk': 'https://telebots.site/websites',
      'en': 'https://telebots.site/en/websites',
      'pl': 'https://telebots.site/pl/websites',
      'ru': 'https://telebots.site/ru/websites',
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
  return <WebsitesPage />;
} 