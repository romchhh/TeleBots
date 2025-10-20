'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import './BlogPage.css';
import { useLanguage } from '../context/LanguageContext';

const blogPosts = [
  {
    slug: 'your-first-telegram-bot',
    title: 'Як створити Telegram бота: покроковий гайд для початківців',
    description: 'Дізнайтеся, як створити свого першого Telegram бота за допомогою Python та бібліотеки python-telegram-bot. Покроковий гайд для початківців.',
    image: '/blog1.png',
  },
  {
    slug: 'integrations',
    title: 'Інтеграція Telegram бота з іншими сервісами',
    description: 'Дізнайтеся, як інтегрувати Telegram бота з різними сервісами та API для розширення функціональності.',
    image: '/blog2.jpg',
  },
  {
    slug: 'developing',
    title: 'Як я розробляю телеграм боти?',
    description: 'Розповідь про процес розробки Telegram ботів, використані технології та методології.',
    image: '/blog3.png',
  },
  {
    slug: 'magnetto',
    title: 'Налаштування воронок для продаж з допомогою чат-ботів',
    description: 'Як використовувати чат-ботів для створення ефективних воронок продажів та автоматизації маркетингу.',
    image: '/blog4.png',
  },
  {
    slug: 'e-commerce',
    title: 'Інтернет магазини в телеграмі',
    description: 'Як створити та налаштувати ефективний інтернет-магазин в Telegram за допомогою ботів.',
    image: '/blog5.png',
  },
  {
    slug: 'sites',
    title: 'Розробка сайтів від TeleBots',
    description: 'Професійна розробка сайтів з інтеграцією Telegram ботів та сучасними технологіями.',
    image: '/blog6.png',
  },
  {
    slug: 'increase-sales',
    title: 'Як Telegram боти допомагають збільшити продажі',
    description: 'Практичні поради щодо використання Telegram ботів для збільшення продажів та покращення взаємодії з клієнтами.',
    image: '/blog7.png',
  },
  {
    slug: 'feedback',
    title: 'Телеграм боти для збору даних від клієнтів',
    description: 'Як ефективно збирати та аналізувати відгуки клієнтів за допомогою Telegram ботів.',
    image: '/blog8.png',
  },
  {
    slug: 'how-to-earn-money',
    title: 'Як заробляти з допомогою телеграм ботів?',
    description: 'Різні способи монетизації Telegram ботів та створення пасивного доходу.',
    image: '/blog9.png',
  },
  {
    slug: 'security-telegram-bots',
    title: 'Безпека Telegram ботів',
    description: 'Безпека Telegram ботів та їхніх користувачів.',
    image: '/blog10.png',
  },
  {
    slug: 'ai-in-bots',
    title: 'Штучний інтелект в телеграм ботах',
    description: 'Як використовувати технології штучного інтелекту для покращення функціональності Telegram ботів.',
    image: '/blog11.png',
  },
  {
    slug: 'more-leads',
    title: 'Налаштування бота для збору лідів',
    description: 'Практичні поради щодо налаштування Telegram бота для ефективного збору лідів.',
    image: '/blog12.png',
  },
  {
    slug: 'how-to-monetize-telegram-bot',
    title: 'Як монетизувати телеграм бота',
    description: 'Детальний огляд стратегій та методів монетизації Telegram ботів.',
    image: '/creative.png',
  },
  {
    slug: 'parsers_telebots',
    title: 'Парсери від TeleBots',
    description: 'Розробка та використання парсерів для автоматизації збору даних.',
    image: '/blog14.png',
  },
  {
    slug: 'perspectives-in-ukraine',
    title: 'Перспективи телеграм ботів в Україні на 2025 рік',
    description: 'Аналіз тенденцій та прогнози розвитку ринку Telegram ботів в Україні.',
    image: '/ukraine.png',
  }
];

// Англійська версія блог-постів
const blogPosts_EN = [
  {
    slug: 'your-first-telegram-bot',
    title: 'How to Create a Telegram Bot: Step-by-Step Guide for Beginners',
    description: 'Learn how to create your first Telegram bot using Python and the python-telegram-bot library. A step-by-step guide for beginners.',
    image: '/blog1.png',
  },
  {
    slug: 'integrations',
    title: 'Integrating Telegram Bots with Other Services',
    description: 'Learn how to integrate Telegram bots with various services and APIs to extend functionality.',
    image: '/blog2.jpg',
  },
  {
    slug: 'developing',
    title: 'How I Develop Telegram Bots',
    description: 'A story about the process of developing Telegram bots, technologies used, and methodologies.',
    image: '/blog3.png',
  },
  {
    slug: 'magnetto',
    title: 'Setting Up Sales Funnels with Chatbots',
    description: 'How to use chatbots to create effective sales funnels and automate marketing.',
    image: '/blog4.png',
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce Stores in Telegram',
    description: 'How to create and set up an effective e-commerce store in Telegram using bots.',
    image: '/blog5.png',
  },
  {
    slug: 'sites',
    title: 'Website Development by TeleBots',
    description: 'Professional website development with Telegram bot integration and modern technologies.',
    image: '/blog6.png',
  },
  {
    slug: 'increase-sales',
    title: 'How Telegram Bots Help Increase Sales',
    description: 'Practical tips on using Telegram bots to increase sales and improve customer interaction.',
    image: '/blog7.png',
  },
  {
    slug: 'feedback',
    title: 'Telegram Bots for Customer Data Collection',
    description: 'How to effectively collect and analyze customer feedback using Telegram bots.',
    image: '/blog8.png',
  },
  {
    slug: 'how-to-earn-money',
    title: 'How to Earn Money with Telegram Bots',
    description: 'Various ways to monetize Telegram bots and create passive income.',
    image: '/blog9.png',
  },
  {
    slug: 'security-telegram-bots',
    title: 'Telegram Bot Security',
    description: 'Security of Telegram bots and their users.',
    image: '/blog10.png',
  },
  {
    slug: 'ai-in-bots',
    title: 'Artificial Intelligence in Telegram Bots',
    description: 'How to use artificial intelligence technologies to improve the functionality of Telegram bots.',
    image: '/blog11.png',
  },
  {
    slug: 'more-leads',
    title: 'Setting Up a Bot for Lead Generation',
    description: 'Practical tips for setting up a Telegram bot for effective lead generation.',
    image: '/blog12.png',
  },
  {
    slug: 'how-to-monetize-telegram-bot',
    title: 'How to Monetize a Telegram Bot',
    description: 'Detailed overview of strategies and methods for monetizing Telegram bots.',
    image: '/creative.png',
  },
  {
    slug: 'parsers_telebots',
    title: 'Parsers from TeleBots',
    description: 'Development and use of parsers for automated data collection.',
    image: '/blog14.png',
  },
  {
    slug: 'perspectives-in-ukraine',
    title: 'Perspectives of Telegram Bots in Ukraine for 2025',
    description: 'Analysis of trends and forecasts for the development of the Telegram bot market in Ukraine.',
    image: '/ukraine.png',
  }
];

// Польська версія блог-постів
const blogPosts_PL = [
  {
    slug: 'your-first-telegram-bot',
    title: 'Jak stworzyć bota Telegram: przewodnik krok po kroku dla początkujących',
    description: 'Dowiedz się, jak stworzyć swojego pierwszego bota Telegram za pomocą Pythona i biblioteki python-telegram-bot. Przewodnik krok po kroku dla początkujących.',
    image: '/blog1.png',
  },
  {
    slug: 'integrations',
    title: 'Integracja botów Telegram z innymi usługami',
    description: 'Dowiedz się, jak integrować boty Telegram z różnymi usługami i API, aby rozszerzyć funkcjonalność.',
    image: '/blog2.jpg',
  },
  {
    slug: 'developing',
    title: 'Jak tworzę boty Telegram?',
    description: 'Opowieść o procesie tworzenia botów Telegram, używanych technologiach i metodologiach.',
    image: '/blog3.png',
  },
  {
    slug: 'magnetto',
    title: 'Konfiguracja lejków sprzedażowych za pomocą chatbotów',
    description: 'Jak używać chatbotów do tworzenia skutecznych lejków sprzedażowych i automatyzacji marketingu.',
    image: '/blog4.png',
  },
  {
    slug: 'e-commerce',
    title: 'Sklepy internetowe w Telegram',
    description: 'Jak stworzyć i skonfigurować skuteczny sklep internetowy w Telegram za pomocą botów.',
    image: '/blog5.png',
  },
  {
    slug: 'sites',
    title: 'Tworzenie stron internetowych przez TeleBots',
    description: 'Profesjonalne tworzenie stron internetowych z integracją botów Telegram i nowoczesnymi technologiami.',
    image: '/blog6.png',
  },
  {
    slug: 'increase-sales',
    title: 'Jak boty Telegram pomagają zwiększyć sprzedaż',
    description: 'Praktyczne wskazówki dotyczące używania botów Telegram do zwiększenia sprzedaży i poprawy interakcji z klientami.',
    image: '/blog7.png',
  },
  {
    slug: 'feedback',
    title: 'Boty Telegram do zbierania danych od klientów',
    description: 'Jak skutecznie zbierać i analizować opinie klientów za pomocą botów Telegram.',
    image: '/blog8.png',
  },
  {
    slug: 'how-to-earn-money',
    title: 'Jak zarabiać za pomocą botów Telegram?',
    description: 'Różne sposoby monetyzacji botów Telegram i tworzenia pasywnego dochodu.',
    image: '/blog9.png',
  },
  {
    slug: 'security-telegram-bots',
    title: 'Bezpieczeństwo botów Telegram',
    description: 'Bezpieczeństwo botów Telegram i ich użytkowników.',
    image: '/blog10.png',
  },
  {
    slug: 'ai-in-bots',
    title: 'Sztuczna inteligencja w botach Telegram',
    description: 'Jak używać technologii sztucznej inteligencji do poprawy funkcjonalności botów Telegram.',
    image: '/blog11.png',
  },
  {
    slug: 'more-leads',
    title: 'Konfiguracja bota do generowania leadów',
    description: 'Praktyczne wskazówki dotyczące konfiguracji bota Telegram do skutecznego generowania leadów.',
    image: '/blog12.png',
  },
  {
    slug: 'how-to-monetize-telegram-bot',
    title: 'Jak monetyzować bota Telegram',
    description: 'Szczegółowy przegląd strategii i metod monetyzacji botów Telegram.',
    image: '/creative.png',
  },
  {
    slug: 'parsers_telebots',
    title: 'Parsery od TeleBots',
    description: 'Tworzenie i używanie parserów do automatycznego zbierania danych.',
    image: '/blog14.png',
  },
  {
    slug: 'perspectives-in-ukraine',
    title: 'Perspektywy botów Telegram na Ukrainie na 2025 rok',
    description: 'Analiza trendów i prognoz rozwoju rynku botów Telegram na Ukrainie.',
    image: '/ukraine.png',
  }
];

// Российская версия блог-постов
const blogPosts_RU = [
  {
    slug: 'your-first-telegram-bot',
    title: 'Как создать Telegram бота: пошаговое руководство для начинающих',
    description: 'Узнайте, как создать своего первого Telegram бота с помощью Python и библиотеки python-telegram-bot. Пошаговое руководство для начинающих.',
    image: '/blog1.png',
  },
  {
    slug: 'integrations',
    title: 'Интеграция Telegram бота с другими сервисами',
    description: 'Узнайте, как интегрировать Telegram бота с различными сервисами и API для расширения функциональности.',
    image: '/blog2.jpg',
  },
  {
    slug: 'developing',
    title: 'Как я разрабатываю телеграм боты?',
    description: 'Рассказ о процессе разработки Telegram ботов, используемых технологиях и методологиях.',
    image: '/blog3.png',
  },
  {
    slug: 'magnetto',
    title: 'Настройка воронок для продаж с помощью чат-ботов',
    description: 'Как использовать чат-ботов для создания эффективных воронок продаж и автоматизации маркетинга.',
    image: '/blog4.png',
  },
  {
    slug: 'e-commerce',
    title: 'Интернет магазины в телеграме',
    description: 'Как создать и настроить эффективный интернет-магазин в Telegram с помощью ботов.',
    image: '/blog5.png',
  },
  {
    slug: 'sites',
    title: 'Разработка сайтов от TeleBots',
    description: 'Профессиональная разработка сайтов с интеграцией Telegram ботов и современными технологиями.',
    image: '/blog6.png',
  },
  {
    slug: 'increase-sales',
    title: 'Как Telegram боты помогают увеличить продажи',
    description: 'Практические советы по использованию Telegram ботов для увеличения продаж и улучшения взаимодействия с клиентами.',
    image: '/blog7.png',
  },
  {
    slug: 'feedback',
    title: 'Телеграм боты для сбора данных от клиентов',
    description: 'Как эффективно собирать и анализировать отзывы клиентов с помощью Telegram ботов.',
    image: '/blog8.png',
  },
  {
    slug: 'how-to-earn-money',
    title: 'Как зарабатывать с помощью телеграм ботов?',
    description: 'Различные способы монетизации Telegram ботов и создания пассивного дохода.',
    image: '/blog9.png',
  },
  {
    slug: 'security-telegram-bots',
    title: 'Безопасность Telegram ботов',
    description: 'Безопасность Telegram ботов и их пользователей.',
    image: '/blog10.png',
  },
  {
    slug: 'ai-in-bots',
    title: 'Искусственный интеллект в телеграм ботах',
    description: 'Как использовать технологии искусственного интеллекта для улучшения функциональности Telegram ботов.',
    image: '/blog11.png',
  },
  {
    slug: 'more-leads',
    title: 'Настройка бота для сбора лидов',
    description: 'Практические советы по настройке Telegram бота для эффективного сбора лидов.',
    image: '/blog12.png',
  },
  {
    slug: 'how-to-monetize-telegram-bot',
    title: 'Как монетизировать телеграм бота',
    description: 'Детальный обзор стратегий и методов монетизации Telegram ботов.',
    image: '/creative.png',
  },
  {
    slug: 'parsers_telebots',
    title: 'Парсеры от TeleBots',
    description: 'Разработка и использование парсеров для автоматизации сбора данных.',
    image: '/blog14.png',
  },
  {
    slug: 'perspectives-in-ukraine',
    title: 'Перспективы телеграм ботов в Украине на 2025 год',
    description: 'Анализ тенденций и прогнозы развития рынка Telegram ботов в Украине.',
    image: '/ukraine.png',
  }
];

const BlogPage = () => {
  const { language } = useLanguage();
  const activeBlogPosts = language === 'uk' ? blogPosts : language === 'ru' ? blogPosts_RU : language === 'pl' ? blogPosts_PL : blogPosts_EN;

  // Структуровані дані для SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": language === 'uk' 
      ? 'Блог про розробку Telegram ботів'
      : language === 'ru'
      ? 'Блог о разработке Telegram ботов'
      : language === 'pl'
      ? 'Blog o tworzeniu botów Telegram'
      : 'Blog about Telegram Bot Development',
    "description": language === 'uk'
      ? 'Корисні статті, поради та кейси з розробки ботів та автоматизації бізнесу'
      : language === 'ru'
      ? 'Полезные статьи, советы и кейсы по разработке ботов и автоматизации бизнеса'
      : language === 'pl'
      ? 'Przydatne artykuły, wskazówki i studia przypadków dotyczące tworzenia botów i automatyzacji biznesu'
      : 'Useful articles, tips and case studies on bot development and business automation',
    "url": `https://telebots.site/${language === 'uk' ? '' : language === 'ru' ? 'ru/' : language === 'pl' ? 'pl/' : 'en/'}blog`,
    "publisher": {
      "@type": "Organization",
      "name": "TeleBots",
      "url": "https://telebots.site"
    },
    "blogPost": activeBlogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "image": post.image,
      "url": `https://telebots.site/${language === 'uk' ? '' : language === 'ru' ? 'ru/' : language === 'pl' ? 'pl/' : 'en/'}blog/${post.slug}`,
      "datePublished": new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": "TeleBots Team"
      }
    }))
  };

  return (
    <>
      <Head>
        <title>
          {language === 'uk' 
            ? 'Блог про розробку Telegram ботів | TeleBots'
            : language === 'ru'
            ? 'Блог о разработке Telegram ботов | TeleBots'
            : language === 'pl'
            ? 'Blog o tworzeniu botów Telegram | TeleBots'
            : 'Blog about Telegram Bot Development | TeleBots'}
        </title>
        <meta name="description" content={
          language === 'uk'
            ? 'Корисні статті, поради та кейси з розробки Telegram ботів та автоматизації бізнесу. Практичні поради від експертів TeleBots.'
            : language === 'ru'
            ? 'Полезные статьи, советы и кейсы по разработке Telegram ботов и автоматизации бизнеса. Практические советы от экспертов TeleBots.'
            : language === 'pl'
            ? 'Przydatne artykuły, wskazówki i studia przypadków dotyczące tworzenia botów Telegram i automatyzacji biznesu. Praktyczne porady od ekspertów TeleBots.'
            : 'Useful articles, tips and case studies on Telegram bot development and business automation. Practical advice from TeleBots experts.'
        } />
        <meta name="keywords" content={
          language === 'uk'
            ? 'Telegram бот, розробка ботів, автоматизація бізнесу, чат-боти, Python, API, монетизація ботів, безпека ботів, штучний інтелект, воронки продажів'
            : language === 'ru'
            ? 'Telegram бот, разработка ботов, автоматизация бизнеса, чат-боты, Python, API, монетизация ботов, безопасность ботов, искусственный интеллект, воронки продаж'
            : 'Telegram bot, bot development, business automation, chatbots, Python, API, bot monetization, bot security, artificial intelligence, sales funnels'
        } />
        <meta name="author" content="TeleBots" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={language === 'uk' ? 'uk' : language === 'ru' ? 'ru' : language === 'pl' ? 'pl' : 'en'} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={
          language === 'uk' 
            ? 'Блог про розробку Telegram ботів | TeleBots'
            : language === 'ru'
            ? 'Блог о разработке Telegram ботов | TeleBots'
            : 'Blog about Telegram Bot Development | TeleBots'
        } />
        <meta property="og:description" content={
          language === 'uk'
            ? 'Корисні статті, поради та кейси з розробки Telegram ботів та автоматизації бізнесу'
            : language === 'ru'
            ? 'Полезные статьи, советы и кейсы по разработке Telegram ботов и автоматизации бизнеса'
            : language === 'pl'
            ? 'Przydatne artykuły, wskazówki i studia przypadków dotyczące tworzenia botów Telegram i automatyzacji biznesu'
            : 'Useful articles, tips and case studies on Telegram bot development and business automation'
        } />
        <meta property="og:image" content="https://telebots.site/blog1.png" />
        <meta property="og:url" content={`https://telebots.site/${language === 'uk' ? '' : language === 'ru' ? 'ru/' : language === 'pl' ? 'pl/' : 'en/'}blog`} />
        <meta property="og:site_name" content="TeleBots" />
        <meta property="og:locale" content={language === 'uk' ? 'uk_UA' : language === 'ru' ? 'ru_RU' : language === 'pl' ? 'pl_PL' : 'en_US'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={
          language === 'uk' 
            ? 'Блог про розробку Telegram ботів | TeleBots'
            : language === 'ru'
            ? 'Блог о разработке Telegram ботов | TeleBots'
            : 'Blog about Telegram Bot Development | TeleBots'
        } />
        <meta name="twitter:description" content={
          language === 'uk'
            ? 'Корисні статті, поради та кейси з розробки Telegram ботів та автоматизації бізнесу'
            : language === 'ru'
            ? 'Полезные статьи, советы и кейсы по разработке Telegram ботов и автоматизации бизнеса'
            : language === 'pl'
            ? 'Przydatne artykuły, wskazówki i studia przypadków dotyczące tworzenia botów Telegram i automatyzacji biznesu'
            : 'Useful articles, tips and case studies on Telegram bot development and business automation'
        } />
        <meta name="twitter:image" content="https://telebots.site/blog1.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://telebots.site/${language === 'uk' ? '' : language === 'ru' ? 'ru/' : language === 'pl' ? 'pl/' : 'en/'}blog`} />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="uk" href="https://telebots.site/blog" />
        <link rel="alternate" hrefLang="ru" href="https://telebots.site/ru/blog" />
        <link rel="alternate" hrefLang="en" href="https://telebots.site/en/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://telebots.site/blog" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
              <main className="blog-page" role="main">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs py-4" aria-label={
            language === 'uk' 
              ? 'Навігація по сайту'
              : language === 'ru'
              ? 'Навигация по сайту'
              : 'Site navigation'
          }>
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href={`/${language === 'uk' ? '' : language === 'ru' ? 'ru/' : language === 'pl' ? 'pl/' : 'en/'}`} className="hover:text-blue-600">
                  {language === 'uk' ? 'Головна' : language === 'ru' ? 'Главная' : language === 'pl' ? 'Główna' : 'Home'}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">
                {language === 'uk' 
                  ? 'Блог'
                  : language === 'ru'
                  ? 'Блог'
                  : 'Blog'}
              </li>
            </ol>
          </nav>
          
          <header className="blog-header text-center mb-16 pt-24">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'uk' 
                ? 'Блог про розробку Telegram ботів'
                : language === 'ru'
                ? 'Блог о разработке Telegram ботов'
                : language === 'pl'
                ? 'Blog o tworzeniu botów Telegram'
                : 'Blog about Telegram Bot Development'}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'uk'
                ? 'Корисні статті, поради та кейси з розробки ботів та автоматизації бізнесу'
                : language === 'ru'
                ? 'Полезные статьи, советы и кейсы по разработке ботов и автоматизации бизнеса'
                : language === 'pl'
                ? 'Przydatne artykuły, wskazówki i studia przypadków dotyczące tworzenia botów i automatyzacji biznesu'
                : 'Useful articles, tips and case studies on bot development and business automation'}
            </p>
          </header>

        <section className="blog-posts" aria-label={
          language === 'uk' 
            ? 'Статті блогу'
            : language === 'ru'
            ? 'Статьи блога'
            : 'Blog posts'
        }>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {activeBlogPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="blog-card bg-white rounded-lg shadow-md overflow-hidden col-span-1"
                style={{ animationDelay: `${index * 0.1}s` }}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="datePublished" content={new Date().toISOString()} />
                <meta itemProp="author" content="TeleBots Team" />
                <meta itemProp="publisher" content="TeleBots" />
                
                <Link 
                  href={`/${language === 'uk' ? '' : language === 'ru' ? 'ru/' : language === 'pl' ? 'pl/' : 'en/'}blog/${post.slug}`}
                  className="block hover:shadow-lg transition-shadow duration-300"
                  aria-label={
                    language === 'uk' 
                      ? `Читати статтю: ${post.title}`
                      : language === 'ru'
                      ? `Читать статью: ${post.title}`
                      : `Read article: ${post.title}`
                  }
                >
                  <div className="blog-image">
                    <Image
                      src={post.image}
                      alt={
                        language === 'uk'
                          ? `Зображення до статті: ${post.title}`
                          : language === 'ru'
                          ? `Изображение к статье: ${post.title}`
                          : `Image for article: ${post.title}`
                      }
                      width={400}
                      height={225}
                      priority={index < 4}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-300"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-6 sm:p-4 md:p-6">
                    <h2 className="blog-title text-xl sm:text-lg md:text-xl" itemProp="headline">
                      {post.title}
                    </h2>
                    <p className="blog-description text-base sm:text-sm md:text-base" itemProp="description">
                      {post.description}
                    </p>
                    <div className="mt-4 sm:mt-2 md:mt-4">
                      <span className="read-more">
                        {language === 'uk' ? 'Читати далі →' : language === 'ru' ? 'Читать далее →' : language === 'pl' ? 'Czytaj dalej →' : 'Read more →'}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
                </section>
        
        {/* SEO Footer */}
        <footer className="blog-seo-footer mt-16 py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'uk' 
                    ? 'Популярні теми'
                    : language === 'ru'
                    ? 'Популярные темы'
                    : language === 'pl'
                    ? 'Popularne tematy'
                    : 'Popular topics'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {language === 'uk' ? (
                    <>
                      <li>• Telegram бот розробка</li>
                      <li>• Автоматизація бізнесу</li>
                      <li>• Чат-боти для продажів</li>
                      <li>• Python програмування</li>
                    </>
                  ) : language === 'ru' ? (
                    <>
                      <li>• Разработка Telegram ботов</li>
                      <li>• Автоматизация бизнеса</li>
                      <li>• Чат-боты для продаж</li>
                      <li>• Python программирование</li>
                    </>
                  ) : language === 'pl' ? (
                    <>
                      <li>• Tworzenie botów Telegram</li>
                      <li>• Automatyzacja biznesu</li>
                      <li>• Chatboty do sprzedaży</li>
                      <li>• Programowanie Python</li>
                    </>
                  ) : (
                    <>
                      <li>• Telegram bot development</li>
                      <li>• Business automation</li>
                      <li>• Sales chatbots</li>
                      <li>• Python programming</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'uk' 
                    ? 'Корисні ресурси'
                    : language === 'ru'
                    ? 'Полезные ресурсы'
                    : language === 'pl'
                    ? 'Przydatne zasoby'
                    : 'Useful resources'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {language === 'uk' ? (
                    <>
                      <li>• Документація Telegram API</li>
                      <li>• Python бібліотеки</li>
                      <li>• Приклади коду</li>
                      <li>• Навчальні матеріали</li>
                    </>
                  ) : language === 'ru' ? (
                    <>
                      <li>• Документация Telegram API</li>
                      <li>• Python библиотеки</li>
                      <li>• Примеры кода</li>
                      <li>• Обучающие материалы</li>
                    </>
                  ) : language === 'pl' ? (
                    <>
                      <li>• Dokumentacja Telegram API</li>
                      <li>• Biblioteki Python</li>
                      <li>• Przykłady kodu</li>
                      <li>• Materiały edukacyjne</li>
                    </>
                  ) : (
                    <>
                      <li>• Telegram API documentation</li>
                      <li>• Python libraries</li>
                      <li>• Code examples</li>
                      <li>• Learning materials</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'uk' 
                    ? 'Контакти'
                    : language === 'ru'
                    ? 'Контакты'
                    : language === 'pl'
                    ? 'Kontakt'
                    : 'Contacts'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'uk' 
                    ? 'Потрібна допомога з розробкою бота?'
                    : language === 'ru'
                    ? 'Нужна помощь с разработкой бота?'
                    : language === 'pl'
                    ? 'Potrzebujesz pomocy z tworzeniem bota?'
                    : 'Need help with bot development?'}
                </p>
                <Link 
                  href={`/${language === 'uk' ? '' : language === 'ru' ? 'ru/' : language === 'pl' ? 'pl/' : 'en/'}#lead-form`}
                  className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  {language === 'uk' ? 'Зв\'язатися з нами' : language === 'ru' ? 'Связаться с нами' : language === 'pl' ? 'Skontaktuj się z nami' : 'Contact us'}
                </Link>
              </div>
            </div>
          </div>
        </footer>
        </div>
          </main>
      </>
    );
  };

export default BlogPage; 