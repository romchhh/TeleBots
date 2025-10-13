import WebsitesPage from '../../../pages_backup/websites';
import { en } from '../../../translations';

export const metadata = {
  title: en.metadata.websites.title,
  description: en.metadata.websites.description,
  keywords: en.metadata.websites.keywords,
  openGraph: {
    title: en.metadata.websites.og.title,
    description: en.metadata.websites.og.description,
    type: 'website',
    locale: 'en_US',
    url: 'https://telebots.site/en/websites',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-websites.jpg',
        width: 1200,
        height: 630,
        alt: en.metadata.websites.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: en.metadata.websites.twitter.title,
    description: en.metadata.websites.twitter.description,
    images: ['https://telebots.site/og-websites.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/en/websites',
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