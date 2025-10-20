import ChatbotsPage from '../../pages_backup/chatbots';
import { uk } from '../../translations';

export const metadata = {
  title: uk.metadata.chatbots.title,
  description: uk.metadata.chatbots.description,
  keywords: uk.metadata.chatbots.keywords,
  openGraph: {
    title: uk.metadata.chatbots.og.title,
    description: uk.metadata.chatbots.og.description,
    type: 'website',
    locale: 'uk_UA',
    url: 'https://telebots.site/chatbots',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-chatbots.jpg',
        width: 1200,
        height: 630,
        alt: uk.metadata.chatbots.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: uk.metadata.chatbots.twitter.title,
    description: uk.metadata.chatbots.twitter.description,
    images: ['https://telebots.site/og-chatbots.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/chatbots',
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