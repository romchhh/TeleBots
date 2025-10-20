import BlogPage from '../../../ui/BlogPage';
import { pl } from '../../../translations';

export const metadata = {
  title: 'Blog o tworzeniu botów Telegram i automatyzacji biznesu',
  description: 'Przydatne artykuły o tworzeniu botów Telegram, automatyzacji procesów biznesowych, zwiększaniu sprzedaży i poprawie komunikacji z klientami. Praktyczne wskazówki i studia przypadków.',
  keywords: [
    'blog o botach telegram',
    'blog o tworzeniu botów',
    'artykuły o automatyzacji biznesu',
    'przypadki botów telegram',
    'jak stworzyć bota telegram',
    'wskazówki automatyzacji',
    'blog chatbotów',
    'blog o tworzeniu botów telegram',
    'artykuły o botach',
    'blog automatyzacji biznesu'
  ],
  openGraph: {
    type: 'website',
    title: 'Blog o tworzeniu botów Telegram | TeleBots',
    description: 'Przeczytaj przydatne artykuły o tworzeniu botów Telegram, automatyzacji biznesu i zwiększaniu sprzedaży. Praktyczne wskazówki i prawdziwe studia przypadków.',
    url: 'https://telebots.site/pl/blog',
    siteName: 'TeleBots',
    locale: 'pl_PL',
    images: [
      {
        url: 'https://telebots.site/blog-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog TeleBots o tworzeniu botów Telegram',
      }
    ],
  },
  alternates: {
    canonical: 'https://telebots.site/pl/blog',
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