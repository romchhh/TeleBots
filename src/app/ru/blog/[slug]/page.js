import { notFound } from 'next/navigation'
import BlogPost1 from '../../../../ui/Blog/BlogPost1'
import BlogPost2 from '../../../../ui/Blog/BlogPost2'
import BlogPost3 from '../../../../ui/Blog/BlogPost3'
import BlogPost4 from '../../../../ui/Blog/BlogPost4'
import BlogPost5 from '../../../../ui/Blog/BlogPost5'
import BlogPost6 from '../../../../ui/Blog/BlogPost6'
import BlogPost7 from '../../../../ui/Blog/BlogPost7'
import BlogPost8 from '../../../../ui/Blog/BlogPost8'
import BlogPost9 from '../../../../ui/Blog/BlogPost9'
import BlogPost10 from '../../../../ui/Blog/BlogPost10'
import BlogPost11 from '../../../../ui/Blog/BlogPost11'
import BlogPost12 from '../../../../ui/Blog/BlogPost12'
import BlogPost13 from '../../../../ui/Blog/BlogPost13'
import BlogPost14 from '../../../../ui/Blog/BlogPost14'
import BlogPost15 from '../../../../ui/Blog/BlogPost15'

// Российские метаданные для блог-постов
const blogMetadata = {
  'your-first-telegram-bot': {
    title: 'Как создать Telegram бота: Пошаговое руководство для начинающих',
    description: 'Узнайте, как создать вашего первого Telegram бота с помощью Python и библиотеки python-telegram-bot. Пошаговое руководство для начинающих.',
    keywords: ['Telegram бот', 'создать Telegram бота', 'Python', 'python-telegram-bot', 'пошаговое руководство', 'разработка ботов'],
    image: '/blog/first-telegram-bot.jpg',
    component: BlogPost1
  },
  'integrations': {
    title: 'Интеграция Telegram ботов с другими сервисами',
    description: 'Узнайте, как интегрировать Telegram ботов с различными сервисами и API для расширения функциональности.',
    keywords: ['Telegram бот', 'интеграция', 'API', 'сервисы', 'автоматизация'],
    image: '/blog/integrations.jpg',
    component: BlogPost2
  },
  'developing': {
    title: 'Как я разрабатываю Telegram ботов',
    description: 'История о процессе разработки Telegram ботов, используемых технологиях и методологиях.',
    keywords: ['разработка Telegram ботов', 'процесс разработки', 'технологии', 'методологии'],
    image: '/blog/developing.jpg',
    component: BlogPost3
  },
  'magnetto': {
    title: 'Настройка воронок продаж с чат-ботами',
    description: 'Как использовать чат-боты для создания эффективных воронок продаж и автоматизации маркетинга.',
    keywords: ['воронка продаж', 'чат-боты', 'автоматизация маркетинга', 'продажи'],
    image: '/blog/sales-funnel.jpg',
    component: BlogPost4
  },
  'e-commerce': {
    title: 'E-commerce магазины в Telegram',
    description: 'Как создать и настроить эффективный e-commerce магазин в Telegram с помощью ботов.',
    keywords: ['Telegram магазин', 'e-commerce', 'онлайн продажи', 'боты для магазина'],
    image: '/pay.jpg',
    component: BlogPost5
  },
  'sites': {
    title: 'Разработка сайтов от TeleBots',
    description: 'Профессиональная разработка сайтов с интеграцией Telegram ботов и современными технологиями.',
    keywords: ['разработка сайтов', 'веб-разработка', 'интеграция ботов', 'TeleBots'],
    image: '/blog/web-development.jpg',
    component: BlogPost6
  },
  'increase-sales': {
    title: 'Как Telegram боты помогают увеличить продажи и лояльность клиентов',
    description: 'Практические советы по использованию Telegram ботов для увеличения продаж и улучшения взаимодействия с клиентами.',
    keywords: ['увеличение продаж', 'лояльность клиентов', 'Telegram боты', 'автоматизация'],
    image: '/blog/increase-sales.jpg',
    component: BlogPost7
  },
  'feedback': {
    title: 'Telegram боты для сбора данных клиентов',
    description: 'Как эффективно собирать и анализировать отзывы клиентов с помощью Telegram ботов.',
    keywords: ['сбор данных', 'отзывы клиентов', 'аналитика', 'Telegram боты'],
    image: '/blog/feedback.jpg',
    component: BlogPost8
  },
  'how-to-earn-money': {
    title: 'Как заработать на Telegram ботах',
    description: 'Различные способы монетизации Telegram ботов и создания пассивного дохода.',
    keywords: ['заработок на ботах', 'монетизация', 'пассивный доход', 'Telegram'],
    image: '/blog/monetization.jpg',
    component: BlogPost9
  },
  'security-telegram-bots': {
    title: 'Безопасность Telegram ботов',
    description: 'Безопасность Telegram ботов и их пользователей.',
    keywords: ['безопасность', 'Telegram боты', 'пользователи', 'защита'],
    image: '/blog/future.jpg',
    component: BlogPost10
  },
  'ai-in-bots': {
    title: 'Искусственный интеллект в Telegram ботах',
    description: 'Как использовать технологии искусственного интеллекта для улучшения функциональности Telegram ботов.',
    keywords: ['искусственный интеллект', 'ИИ', 'Telegram боты', 'инновации'],
    image: '/blog/ai-bots.jpg',
    component: BlogPost11
  },
  'more-leads': {
    title: 'Настройка бота для генерации лидов и увеличения конверсии',
    description: 'Практические советы по настройке Telegram бота для эффективной генерации лидов.',
    keywords: ['генерация лидов', 'конверсия', 'Telegram бот', 'маркетинг'],
    image: '/blog/lead-generation.jpg',
    component: BlogPost12
  },
  'how-to-monetize-telegram-bot': {
    title: 'Как монетизировать Telegram бота',
    description: 'Различные способы заработка на вашем Telegram боте.',
    keywords: ['монетизация', 'заработок', 'Telegram бот', 'доход'],
    image: '/blog/monetization.jpg',
    component: BlogPost13
  },
  'parsers_telebots': {
    title: 'Парсеры от TeleBots',
    description: 'Автоматизация сбора данных для вашего бизнеса.',
    keywords: ['парсеры', 'сбор данных', 'автоматизация', 'TeleBots'],
    image: '/blog/parsers.jpg',
    component: BlogPost14
  },
  'perspectives-in-ukraine': {
    title: 'Перспективы Telegram ботов в Украине на 2025',
    description: 'Анализ рынка и прогнозы развития индустрии ботов в Украине.',
    keywords: ['перспективы', 'Telegram боты', 'Украина', '2025', 'рынок'],
    image: '/blog/perspectives.jpg',
    component: BlogPost15
  }
}

export async function generateMetadata({ params }) {
  const post = blogMetadata[params.slug]
  
  if (!post) {
    return {
      title: 'Статья не найдена | TeleBots',
      description: 'Запрашиваемая статья не найдена.'
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://telebots.site/ru/blog/${params.slug}`,
      languages: {
        'uk': `https://telebots.site/blog/${params.slug}`,
        'en': `https://telebots.site/en/blog/${params.slug}`,
        'ru': `https://telebots.site/ru/blog/${params.slug}`,
        'x-default': `https://telebots.site/blog/${params.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://telebots.site/ru/blog/${params.slug}`,
      locale: 'ru_RU',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
  }
}

export default function BlogPost({ params }) {
  const post = blogMetadata[params.slug]
  
  if (!post) {
    notFound()
  }

  const BlogComponent = post.component
  
  return <BlogComponent />
}
