import ChatbotsPage from '../../pages_backup/chatbots';
import { uk } from '../../translations';
import { generateBreadcrumbs, generateServiceSchema } from '../../utils/seo';

const breadcrumbsSchema = generateBreadcrumbs('/chatbots', 'Чат-боти', 'uk');
const serviceSchema = generateServiceSchema(
  'Розробка Telegram ботів',
  uk.metadata.chatbots.description,
  'https://telebots.site/chatbots',
  'uk'
);

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
      'uk-UA': 'https://telebots.site/chatbots',
      'en-US': 'https://telebots.site/en/chatbots',
      'pl-PL': 'https://telebots.site/pl/chatbots',
      'ru-RU': 'https://telebots.site/ru/chatbots',
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
  other: {
    'breadcrumb-schema': JSON.stringify(breadcrumbsSchema),
    'service-schema': JSON.stringify(serviceSchema),
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ChatbotsPage />
    </>
  );
} 