import PricesPage from '../../../ui/PricesPage';
import { ru } from '../../../translations';

export const metadata = {
  title: ru.metadata.prices?.title || 'Цены на разработку | TeleBots',
  description: ru.metadata.prices?.description || 'Актуальные цены на разработку Telegram ботов, сайтов и парсеров. Прозрачное ценообразование и качественные решения.',
  keywords: [
    'цены на telegram ботов',
    'стоимость разработки ботов',
    'заказать telegram бота',
    'цены на чат-ботов',
    'разработка ботов цена',
    'telegram бот под ключ',
    'создание бота telegram цена',
    'бот для бизнеса стоимость',
    'автоматизация telegram цена',
    'бот для магазина цена'
  ],
  openGraph: {
    title: ru.metadata.prices?.og?.title || 'Цены на разработку | TeleBots',
    description: ru.metadata.prices?.og?.description || 'Разработка Telegram ботов, сайтов и парсеров по доступным ценам. Три пакета услуг для разных потребностей бизнеса.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://telebots.site/ru/prices',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/prices-preview.jpg',
        width: 1200,
        height: 630,
        alt: ru.metadata.prices?.og?.imageAlt || 'Цены на разработку TeleBots',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ru.metadata.prices?.twitter?.title || 'Цены на разработку | TeleBots',
    description: ru.metadata.prices?.twitter?.description || 'Разработка Telegram ботов, сайтов и парсеров по доступным ценам',
    images: ['https://telebots.site/prices-preview.jpg'],
  },
  alternates: {
    canonical: 'https://telebots.site/ru/prices',
    languages: {
      'uk': 'https://telebots.site/prices',
      'en': 'https://telebots.site/en/prices',
      'pl': 'https://telebots.site/pl/prices',
      'ru': 'https://telebots.site/ru/prices',
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
  return <PricesPage />;
}
