import { notFound } from 'next/navigation'
import BlogPost1 from '../../../ui/Blog/BlogPost1'
import BlogPost2 from '../../../ui/Blog/BlogPost2'
import BlogPost3 from '../../../ui/Blog/BlogPost3'
import BlogPost4 from '../../../ui/Blog/BlogPost4'
import BlogPost5 from '../../../ui/Blog/BlogPost5'
import BlogPost6 from '../../../ui/Blog/BlogPost6'
import BlogPost7 from '../../../ui/Blog/BlogPost7'
import BlogPost8 from '../../../ui/Blog/BlogPost8'
import BlogPost9 from '../../../ui/Blog/BlogPost9'
import BlogPost10 from '../../../ui/Blog/BlogPost10'
import BlogPost11 from '../../../ui/Blog/BlogPost11'
import BlogPost12 from '../../../ui/Blog/BlogPost12'
import BlogPost13 from '../../../ui/Blog/BlogPost13'
import BlogPost14 from '../../../ui/Blog/BlogPost14'
import BlogPost15 from '../../../ui/Blog/BlogPost15'
const blogMetadata = {
  'your-first-telegram-bot': {
    title: 'Як створити Telegram бота: покроковий гайд для початківців',
    description: 'Дізнайтеся, як створити свого першого Telegram бота за допомогою Python та бібліотеки python-telegram-bot. Покроковий гайд для початківців.',
    keywords: ['Telegram бот', 'створити Telegram бота', 'Python', 'python-telegram-bot', 'покроковий гайд', 'розробка ботів'],
    image: '/blog/first-telegram-bot.jpg',
    component: BlogPost1
  },
  'integrations': {
    title: 'Інтеграція Telegram бота з іншими сервісами',
    description: 'Дізнайтеся, як інтегрувати Telegram бота з різними сервісами та API для розширення функціональності.',
    keywords: ['Telegram бот', 'інтеграція', 'API', 'сервіси', 'автоматизація'],
    image: '/blog/integrations.jpg',
    component: BlogPost2
  },
  'developing': {
    title: 'Як я розробляю телеграм боти?',
    description: 'Розповідь про процес розробки Telegram ботів, використані технології та методології.',
    keywords: ['розробка Telegram ботів', 'процес розробки', 'технології', 'методології'],
    image: '/blog/developing.jpg',
    component: BlogPost3
  },
  'magnetto': {
    title: 'Налаштування воронок для продаж з допомогою чат-ботів',
    description: 'Як використовувати чат-ботів для створення ефективних воронок продажів та автоматизації маркетингу.',
    keywords: ['воронка продажів', 'чат-боти', 'автоматизація маркетингу', 'продажі'],
    image: '/blog/sales-funnel.jpg',
    component: BlogPost4
  },
  'e-commerce': {
    title: 'Інтернет магазини в телеграмі',
    description: 'Як створити та налаштувати ефективний інтернет-магазин в Telegram за допомогою ботів.',
    keywords: ['Telegram магазин', 'e-commerce', 'онлайн продажі', 'боти для магазину'],
    image: '/pay.jpg',
    component: BlogPost5
  },
  'sites': {
    title: 'Розробка сайтів від TeleBots',
    description: 'Професійна розробка сайтів з інтеграцією Telegram ботів та сучасними технологіями.',
    keywords: ['розробка сайтів', 'веб-розробка', 'інтеграція ботів', 'TeleBots'],
    image: '/blog/web-development.jpg',
    component: BlogPost6
  },
  'increase-sales': {
    title: 'Як Telegram боти допомагають збільшити продажі та лояльність клієнтів',
    description: 'Практичні поради щодо використання Telegram ботів для збільшення продажів та покращення взаємодії з клієнтами.',
    keywords: ['збільшення продажів', 'лояльність клієнтів', 'Telegram боти', 'автоматизація'],
    image: '/blog/increase-sales.jpg',
    component: BlogPost7
  },
  'feedback': {
    title: 'Телеграм боти для збору даних від клієнтів',
    description: 'Як ефективно збирати та аналізувати відгуки клієнтів за допомогою Telegram ботів.',
    keywords: ['збір даних', 'відгуки клієнтів', 'аналітика', 'Telegram боти'],
    image: '/blog/feedback.jpg',
    component: BlogPost8
  },
  'how-to-earn-money': {
    title: 'Як заробляти з допомогою телеграм ботів?',
    description: 'Різні способи монетизації Telegram ботів та створення пасивного доходу.',
    keywords: ['заробіток на ботах', 'монетизація', 'пасивний дохід', 'Telegram'],
    image: '/blog/monetization.jpg',
    component: BlogPost9
  },
  'security-telegram-bots': {
    title: 'Безпека Telegram ботів',
    description: 'Безпека Telegram ботів та їхніх користувачів.',
    keywords: ['безпека', 'Telegram боти', 'користувачі', 'безпека'],
    image: '/blog/future.jpg',
    component: BlogPost10
  },
  'ai-in-bots': {
    title: 'Штучний інтелект в телеграм ботах',
    description: 'Як використовувати технології штучного інтелекту для покращення функціональності Telegram ботів.',
    keywords: ['штучний інтелект', 'AI', 'Telegram боти', 'інновації'],
    image: '/blog/ai-bots.jpg',
    component: BlogPost11
  },
  'more-leads': {
    title: 'Налаштування бота для збору лідів та збільшення конверсії',
    description: 'Практичні поради щодо налаштування Telegram бота для ефективного збору лідів.',
    keywords: ['збір лідів', 'конверсія', 'Telegram бот', 'маркетинг'],
    image: '/blog/leads.jpg',
    component: BlogPost12
  },
  'how-to-monetize-telegram-bot': {
    title: 'Як монетизувати телеграм бота',
    description: 'Детальний огляд стратегій та методів монетизації Telegram ботів.',
    keywords: ['монетизація', 'стратегії', 'Telegram бот', 'прибуток'],
    image: '/blog/monetize.jpg',
    component: BlogPost13
  },
  'parsers_telebots': {
    title: 'Парсери від TeleBots',
    description: 'Розробка та використання парсерів для автоматизації збору даних.',
    keywords: ['парсери', 'збір даних', 'автоматизація', 'TeleBots'],
    image: '/blog/parsers.jpg',
    component: BlogPost14
  },
  'perspectives-in-ukraine': {
    title: 'Перспективи телеграм ботів в Україні на 2025 рік',
    description: 'Аналіз тенденцій та прогнози розвитку ринку Telegram ботів в Україні.',
    keywords: ['перспективи', 'тенденції', 'Україна', 'Telegram боти', '2025'],
    image: '/ukraine.png',
    component: BlogPost15
  },
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  const post = blogMetadata[slug]
  if (!post) {
    return {
      title: 'Статтю не знайдено | TeleBots',
      description: 'Запитана стаття не існує або була переміщена.'
    }
  }

  return {
    title: `${post.title} | TeleBots Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://telebots.site/blog/${slug}`,
      languages: {
        'uk': `https://telebots.site/blog/${slug}`,
        'en': `https://telebots.site/en/blog/${slug}`,
        'pl': `https://telebots.site/pl/blog/${slug}`,
        'ru': `https://telebots.site/ru/blog/${slug}`,
        'x-default': `https://telebots.site/blog/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://telebots.site/blog/${slug}`,
      siteName: 'TeleBots',
      locale: 'uk_UA',
      images: [
        {
          url: `https://telebots.site${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = blogMetadata[params.slug]
  if (!post || !post.component) {
    notFound()
  }
  
  const Component = post.component
  return <Component />
}

export function generateStaticParams() {
  return Object.keys(blogMetadata).map((slug) => ({
    slug: slug,
  }))
} 