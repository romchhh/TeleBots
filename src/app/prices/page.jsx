import PricesPage from '../../ui/PricesPage';
import { uk } from '../../translations';
import { generateBreadcrumbs } from '../../utils/seo';
import { truncateTitle, truncateDescription } from '../../utils/seo';

const breadcrumbsSchema = generateBreadcrumbs('/prices', 'Ціни', 'uk');

export const metadata = {
  title: truncateTitle(uk.metadata.prices?.title || 'Ціни на розробку | TeleBots'),
  description: truncateDescription(uk.metadata.prices?.description || 'Актуальні ціни на розробку Telegram ботів, сайтів та парсерів. Прозоре ціноутворення та якісні рішення.'),
  keywords: [
    'ціни на telegram ботів',
    'вартість розробки ботів',
    'замовити telegram бота',
    'ціни на чат-ботів',
    'розробка ботів ціна',
    'telegram бот під ключ',
    'створення бота telegram ціна',
    'бот для бізнесу вартість',
    'автоматизація telegram ціна',
    'бот для магазину ціна'
  ],
  openGraph: {
    title: truncateTitle(uk.metadata.prices?.og?.title || 'Ціни на розробку | TeleBots'),
    description: truncateDescription(uk.metadata.prices?.og?.description || 'Розробка Telegram ботів, сайтів та парсерів за доступними цінами. Три пакети послуг для різних потреб бізнесу.'),
    type: 'website',
    locale: 'uk_UA',
    url: 'https://telebots.site/prices',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/prices-preview.jpg',
        width: 1200,
        height: 630,
        alt: truncateDescription(uk.metadata.prices?.og?.imageAlt || 'Ціни на розробку TeleBots', 100),
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateTitle(uk.metadata.prices?.twitter?.title || 'Ціни на розробку | TeleBots'),
    description: truncateDescription(uk.metadata.prices?.twitter?.description || 'Розробка Telegram ботів, сайтів та парсерів за доступними цінами'),
    images: ['https://telebots.site/prices-preview.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/prices',
    languages: {
      'uk-UA': 'https://telebots.site/prices',
      'en-US': 'https://telebots.site/en/prices',
      'pl-PL': 'https://telebots.site/pl/prices',
      'ru-RU': 'https://telebots.site/ru/prices',
      'x-default': 'https://telebots.site/prices',
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
      <PricesPage />
    </>
  );
}
