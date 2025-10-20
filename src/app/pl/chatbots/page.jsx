import ChatbotsPage from '../../../pages_backup/chatbots';
import { pl } from '../../../translations';

export const metadata = {
  title: pl.metadata.chatbots.title,
  description: pl.metadata.chatbots.description,
  keywords: pl.metadata.chatbots.keywords,
  openGraph: {
    title: pl.metadata.chatbots.og.title,
    description: pl.metadata.chatbots.og.description,
    type: 'website',
    locale: 'pl_PL',
    url: 'https://telebots.site/pl/chatbots',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-chatbots.jpg',
        width: 1200,
        height: 630,
        alt: pl.metadata.chatbots.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pl.metadata.chatbots.twitter.title,
    description: pl.metadata.chatbots.twitter.description,
    images: ['https://telebots.site/og-chatbots.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/pl/chatbots',
    languages: {
      'uk': 'https://telebots.site/chatbots',
      'en': 'https://telebots.site/en/chatbots',
      'pl': 'https://telebots.site/pl/chatbots',
      'ru': 'https://telebots.site/ru/chatbots',
      'x-default': 'https://telebots.site/chatbots',
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
  return <ChatbotsPage />;
} 