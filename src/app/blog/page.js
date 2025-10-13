import BlogPage from '../../ui/BlogPage';
import { uk } from '../../translations';

export const metadata = {
  title: 'Блог про розробку Телеграм ботів та автоматизацію бізнесу',
  description: 'Корисні статті про розробку Телеграм ботів, автоматизацію бізнесу, створення чат-ботів та веб-сайтів.',
  keywords: [
    'блог про телеграм ботів',
    'розробка ботів блог',
    'автоматизація бізнесу статті',
    'кейси телеграм ботів',
    'як створити телеграм бота',
    'поради з автоматизації',
    'блог про чат боти',
    'telegram bot development blog',
    'статті про ботів',
    'бізнес автоматизація блог'
  ],
  openGraph: {
    title: 'Блог про розробку Телеграм ботів | TeleBots',
    description: 'Читайте корисні статті про розробку Телеграм ботів, автоматизацію бізнесу та збільшення продажів. Практичні поради та реальні кейси.',
    images: [
      {
        url: 'https://telebots.site/blog-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Блог TeleBots про розробку Телеграм ботів',
      }
    ],
  },
  alternates: {
    canonical: 'https://telebots.site/blog',
    languages: {
      'uk': 'https://telebots.site/blog',
      'en': 'https://telebots.site/en/blog',
    },
  },
};

export default function Page() {
  return <BlogPage />;
} 