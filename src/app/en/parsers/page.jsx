import ParsersPage from '../../../pages_backup/parsers';
import { en } from '../../../translations';

export const metadata = {
  title: en.metadata.parsers.title,
  description: en.metadata.parsers.description,
  keywords: en.metadata.parsers.keywords,
  openGraph: {
    title: en.metadata.parsers.og.title,
    description: en.metadata.parsers.og.description,
    type: 'website',
    locale: 'en_US',
    url: 'https://telebots.site/en/parsers',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-parsers.jpg',
        width: 1200,
        height: 630,
        alt: en.metadata.parsers.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: en.metadata.parsers.twitter.title,
    description: en.metadata.parsers.twitter.description,
    images: ['https://telebots.site/og-parsers.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/en/parsers',
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