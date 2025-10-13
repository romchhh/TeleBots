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

// Англійські метадані для блог-постів
const blogMetadata = {
  'your-first-telegram-bot': {
    title: 'How to Create a Telegram Bot: Step-by-Step Guide for Beginners',
    description: 'Learn how to create your first Telegram bot using Python and the python-telegram-bot library. A step-by-step guide for beginners.',
    keywords: ['Telegram bot', 'create Telegram bot', 'Python', 'python-telegram-bot', 'step-by-step guide', 'bot development'],
    image: '/blog/first-telegram-bot.jpg',
    component: BlogPost1
  },
  'integrations': {
    title: 'Integrating Telegram Bots with Other Services',
    description: 'Learn how to integrate Telegram bots with various services and APIs to extend functionality.',
    keywords: ['Telegram bot', 'integration', 'API', 'services', 'automation'],
    image: '/blog/integrations.jpg',
    component: BlogPost2
  },
  'developing': {
    title: 'How I Develop Telegram Bots',
    description: 'A story about the process of developing Telegram bots, technologies used, and methodologies.',
    keywords: ['Telegram bot development', 'development process', 'technologies', 'methodologies'],
    image: '/blog/developing.jpg',
    component: BlogPost3
  },
  'magnetto': {
    title: 'Setting Up Sales Funnels with Chatbots',
    description: 'How to use chatbots to create effective sales funnels and automate marketing.',
    keywords: ['sales funnel', 'chatbots', 'marketing automation', 'sales'],
    image: '/blog/sales-funnel.jpg',
    component: BlogPost4
  },
  'e-commerce': {
    title: 'E-commerce Stores in Telegram',
    description: 'How to create and set up an effective e-commerce store in Telegram using bots.',
    keywords: ['Telegram store', 'e-commerce', 'online sales', 'bots for store'],
    image: '/pay.jpg',
    component: BlogPost5
  },
  'sites': {
    title: 'Website Development by TeleBots',
    description: 'Professional website development with Telegram bot integration and modern technologies.',
    keywords: ['website development', 'web development', 'bot integration', 'TeleBots'],
    image: '/blog/web-development.jpg',
    component: BlogPost6
  },
  'increase-sales': {
    title: 'How Telegram Bots Help Increase Sales and Customer Loyalty',
    description: 'Practical tips on using Telegram bots to increase sales and improve customer interaction.',
    keywords: ['increase sales', 'customer loyalty', 'Telegram bots', 'automation'],
    image: '/blog/increase-sales.jpg',
    component: BlogPost7
  },
  'feedback': {
    title: 'Telegram Bots for Customer Data Collection',
    description: 'How to effectively collect and analyze customer feedback using Telegram bots.',
    keywords: ['data collection', 'customer feedback', 'analytics', 'Telegram bots'],
    image: '/blog/feedback.jpg',
    component: BlogPost8
  },
  'how-to-earn-money': {
    title: 'How to Earn Money with Telegram Bots',
    description: 'Various ways to monetize Telegram bots and create passive income.',
    keywords: ['earning with bots', 'monetization', 'passive income', 'Telegram'],
    image: '/blog/monetization.jpg',
    component: BlogPost9
  },
  'security-telegram-bots': {
    title: 'Telegram Bot Security',
    description: 'Security of Telegram bots and their users.',
    keywords: ['security', 'Telegram bots', 'users', 'security'],
    image: '/blog/future.jpg',
    component: BlogPost10
  },
  'ai-in-bots': {
    title: 'Artificial Intelligence in Telegram Bots',
    description: 'How to use artificial intelligence technologies to improve the functionality of Telegram bots.',
    keywords: ['artificial intelligence', 'AI', 'Telegram bots', 'innovations'],
    image: '/blog/ai-bots.jpg',
    component: BlogPost11
  },
  'more-leads': {
    title: 'Setting Up a Bot for Lead Generation and Conversion Increase',
    description: 'Practical tips for setting up a Telegram bot for effective lead generation.',
    keywords: ['lead generation', 'conversion', 'Telegram bot', 'marketing'],
    image: '/blog/leads.jpg',
    component: BlogPost12
  },
  'how-to-monetize-telegram-bot': {
    title: 'How to Monetize a Telegram Bot',
    description: 'Detailed overview of strategies and methods for monetizing Telegram bots.',
    keywords: ['monetization', 'strategies', 'Telegram bot', 'profit'],
    image: '/blog/monetize.jpg',
    component: BlogPost13
  },
  'parsers_telebots': {
    title: 'Parsers from TeleBots',
    description: 'Development and use of parsers for automated data collection.',
    keywords: ['parsers', 'data collection', 'automation', 'TeleBots'],
    image: '/blog/parsers.jpg',
    component: BlogPost14
  },
  'perspectives-in-ukraine': {
    title: 'Perspectives of Telegram Bots in Ukraine for 2025',
    description: 'Analysis of trends and forecasts for the development of the Telegram bot market in Ukraine.',
    keywords: ['perspectives', 'trends', 'Ukraine', 'Telegram bots', '2025'],
    image: '/ukraine.png',
    component: BlogPost15
  },
}

export async function generateMetadata({ params }) {
  const post = blogMetadata[params.slug]
  if (!post) {
    return {
      title: 'Article Not Found | TeleBots',
      description: 'The requested article does not exist or has been moved.'
    }
  }

  return {
    title: `${post.title} | TeleBots Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://telebots.site/en/blog/${params.slug}`,
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
      url: `https://telebots.site/en/blog/${params.slug}`,
      locale: 'en_US',
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