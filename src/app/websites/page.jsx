import WebsitesPage from '../../pages_backup/websites';
import { uk } from '../../translations';
import { generateBreadcrumbs, generateServiceSchema } from '../../utils/seo';

const breadcrumbsSchema = generateBreadcrumbs('/websites', 'Веб-сайти', 'uk');
const serviceSchema = generateServiceSchema(
  'Розробка веб-сайтів',
  uk.metadata.websites.description,
  'https://telebots.site/websites',
  'uk'
);

export const metadata = {
  title: uk.metadata.websites.title,
  description: uk.metadata.websites.description,
  keywords: uk.metadata.websites.keywords,
  openGraph: {
    title: uk.metadata.websites.og.title,
    description: uk.metadata.websites.og.description,
    type: 'website',
    locale: 'uk_UA',
    url: 'https://telebots.site/websites',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-websites.jpg',
        width: 1200,
        height: 630,
        alt: uk.metadata.websites.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: uk.metadata.websites.twitter.title,
    description: uk.metadata.websites.twitter.description,
    images: ['https://telebots.site/og-websites.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/websites',
    languages: {
      'uk-UA': 'https://telebots.site/websites',
      'en-US': 'https://telebots.site/en/websites',
      'pl-PL': 'https://telebots.site/pl/websites',
      'ru-RU': 'https://telebots.site/ru/websites',
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
      <WebsitesPage />
    </>
  );
} 