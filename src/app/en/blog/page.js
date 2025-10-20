import BlogPage from '../../../ui/BlogPage';
import { en } from '../../../translations';

export const metadata = {
  title: 'Blog about Telegram Bot Development and Business Automation',
  description: 'Useful articles about Telegram bot development, business process automation, increasing sales, and improving customer communication. Practical tips and case studies.',
  keywords: [
    'telegram bot blog',
    'bot development blog',
    'business automation articles',
    'telegram bot cases',
    'how to create telegram bot',
    'automation tips',
    'chatbot blog',
    'telegram bot development blog',
    'articles about bots',
    'business automation blog'
  ],
  openGraph: {
    type: 'website',
    title: 'Blog about Telegram Bot Development | TeleBots',
    description: 'Read useful articles about Telegram bot development, business automation, and increasing sales. Practical tips and real case studies.',
    url: 'https://telebots.site/en/blog',
    siteName: 'TeleBots',
    locale: 'en_US',
    images: [
      {
        url: 'https://telebots.site/blog-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'TeleBots Blog about Telegram Bot Development',
      }
    ],
  },
  alternates: {
    canonical: 'https://telebots.site/en/blog',
    languages: {
      'uk': 'https://telebots.site/blog',
      'en': 'https://telebots.site/en/blog',
      'pl': 'https://telebots.site/pl/blog',
      'ru': 'https://telebots.site/ru/blog',
      'x-default': 'https://telebots.site/blog',
    },
  },
};

export default function Page() {
  return <BlogPage />;
} 