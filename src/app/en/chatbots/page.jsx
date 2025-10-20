import ChatbotsPage from '../../../pages_backup/chatbots';
import { en } from '../../../translations';

export const metadata = {
  title: en.metadata.chatbots.title,
  description: en.metadata.chatbots.description,
  keywords: en.metadata.chatbots.keywords,
  openGraph: {
    title: en.metadata.chatbots.og.title,
    description: en.metadata.chatbots.og.description,
    type: 'website',
    locale: 'en_US',
    url: 'https://telebots.site/en/chatbots',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-chatbots.jpg',
        width: 1200,
        height: 630,
        alt: en.metadata.chatbots.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: en.metadata.chatbots.twitter.title,
    description: en.metadata.chatbots.twitter.description,
    images: ['https://telebots.site/og-chatbots.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/en/chatbots',
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