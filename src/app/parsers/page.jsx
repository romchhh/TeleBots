import ParsersPage from '../../pages_backup/parsers';
import { uk } from '../../translations';

export const metadata = {
  title: uk.metadata.parsers.title,
  description: uk.metadata.parsers.description,
  keywords: uk.metadata.parsers.keywords,
  openGraph: {
    title: uk.metadata.parsers.og.title,
    description: uk.metadata.parsers.og.description,
    type: 'website',
    locale: 'uk_UA',
    url: 'https://telebots.site/parsers',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-parsers.jpg',
        width: 1200,
        height: 630,
        alt: uk.metadata.parsers.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: uk.metadata.parsers.twitter.title,
    description: uk.metadata.parsers.twitter.description,
    images: ['https://telebots.site/og-parsers.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/parsers',
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