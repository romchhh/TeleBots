import ParsersPage from '../../../pages_backup/parsers';
import { pl } from '../../../translations';

export const metadata = {
  title: pl.metadata.parsers.title,
  description: pl.metadata.parsers.description,
  keywords: pl.metadata.parsers.keywords,
  openGraph: {
    title: pl.metadata.parsers.og.title,
    description: pl.metadata.parsers.og.description,
    type: 'website',
    locale: 'pl_PL',
    url: 'https://telebots.site/pl/parsers',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-parsers.jpg',
        width: 1200,
        height: 630,
        alt: pl.metadata.parsers.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pl.metadata.parsers.twitter.title,
    description: pl.metadata.parsers.twitter.description,
    images: ['https://telebots.site/og-parsers.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/pl/parsers',
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
  return <ParsersPage />;
} 