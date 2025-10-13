import BlogPage from '../../../ui/BlogPage';
import { ru } from '../../../translations';

export const metadata = {
  title: 'Блог о разработке Telegram ботов и автоматизации бизнеса',
  description: 'Полезные статьи о разработке Telegram ботов, автоматизации бизнес-процессов, увеличении продаж и улучшении общения с клиентами. Практические советы и кейсы.',
  keywords: [
    'блог о telegram ботах',
    'блог разработки ботов',
    'статьи об автоматизации бизнеса',
    'кейсы telegram ботов',
    'как создать telegram бота',
    'советы по автоматизации',
    'блог чат-ботов',
    'блог разработки telegram ботов',
    'статьи о ботах',
    'блог автоматизации бизнеса'
  ],
  openGraph: {
    title: 'Блог о разработке Telegram ботов | TeleBots',
    description: 'Читайте полезные статьи о разработке Telegram ботов, автоматизации бизнеса и увеличении продаж. Практические советы и реальные кейсы.',
    images: [
      {
        url: 'https://telebots.site/blog-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Блог TeleBots о разработке Telegram ботов',
      }
    ],
  },
  alternates: {
    canonical: 'https://telebots.site/ru/blog',
    languages: {
      'uk': 'https://telebots.site/blog',
      'en': 'https://telebots.site/en/blog',
      'ru': 'https://telebots.site/ru/blog',
    },
  },
};

export default function Page() {
  return <BlogPage />;
}
