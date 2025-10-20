import Hero from '../../ui/Hero'
import About from '../../ui/About'
import Advantages from '../../ui/Advantages'
import Prices from '../../ui/Prices'
import Purchase from '../../ui/Purchase'
import Socials from '../../ui/Socials'
import Projects from '../../ui/Projects'
import Portfolio from '../../ui/Portfolio'
import Reviews from '../../ui/Reviews'
import Services from '../../ui/Services'
import LeadForm from '../../ui/LeadForm'
import Script from 'next/script'
import Link from 'next/link'
import Statistics from '../../ui/Statistics'
import { FaRobot, FaDesktop, FaDatabase, FaArrowRight } from 'react-icons/fa'
import Head from 'next/head'

export const metadata = {
  title: 'Разработка Telegram ботов и сайтов | TeleBots',
  description: 'Профессиональная разработка Telegram ботов, чат-ботов и сайтов для автоматизации бизнеса. ✓ Быстрая разработка ✓ Техническая поддержка ✓ Гарантия качества. Автоматизируйте ваш бизнес с TeleBots!',
  keywords: [
    'разработка telegram ботов',
    'создание чат-ботов',
    'разработка сайтов',
    'автоматизация бизнеса',
    'создать telegram бота',
    'разработка ecommerce',
    'заказать telegram бота',
    'цена telegram бота',
    'бизнес бот',
    'разработка сайта',
    'веб-разработка',
    'автоматизация telegram',
    'боты для продаж'
  ],
  alternates: {
    canonical: 'https://telebots.site/ru',
    languages: {
      'uk': 'https://telebots.site',
      'en': 'https://telebots.site/en',
      'pl': 'https://telebots.site/pl',
      'ru': 'https://telebots.site/ru',
      'x-default': 'https://telebots.site',
    },
  },
  openGraph: {
    title: 'TeleBots | Разработка Telegram ботов и сайтов',
    description: 'Профессиональная разработка Telegram ботов, чат-ботов и сайтов для автоматизации бизнеса. Увеличивайте продажи и улучшайте общение с клиентами.',
    url: 'https://telebots.site/ru',
    images: [
      {
        url: 'https://telebots.site/home-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'TeleBots - Разработка Telegram ботов и сайтов',
      }
    ],
    type: 'website',
    locale: 'ru_RU',
  }
}

// Schema.org markup for the main page
const jsonLd = {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TeleBots",
              "url": "https://telebots.site/ru",
              "description": "Профессиональная разработка Telegram ботов, чат-ботов и сайтов для автоматизации бизнеса",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://telebots.site/ru/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://t.me/nowayrm",
                "https://www.facebook.com/nowayrm",
                "https://www.instagram.com/telebotsnowayrm"
              ],
              "provider": {
                "@type": "Organization",
                "name": "TeleBots",
                "logo": "https://telebots.site/logologo.png",
                "description": "Разработка telegram ботов, сайтов, лендингов, e-commerce, парсеров и AI ботов под ключ",
                "email": "roman.fedoniuk@gmail.com",
                "telephone": "+380960908006",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Ukraine"
                },
                "founder": {
                  "@type": "Person",
                  "name": "Roman Fedoniuk",
                  "jobTitle": "Developer"
                },
                "funder": {
                  "@type": "Person",
                  "name": "Roman Fedoniuk"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+380960908006",
                  "contactType": "customer service",
                  "availableLanguage": ["Ukrainian", "English", "Russian"]
                }
              }
}

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Какие услуги предоставляет TeleBots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeleBots специализируется на разработке Telegram ботов, чат-ботов, сайтов, e-commerce решений и парсеров для автоматизации бизнес-процессов."
      }
    },
    {
      "@type": "Question",
      "name": "Сколько стоит разработка Telegram бота?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Стоимость разработки Telegram бота зависит от сложности проекта и требуемого функционала. Пожалуйста, свяжитесь с нами через форму на сайте или Telegram для получения точной информации о ценах."
      }
    },
    {
      "@type": "Question",
      "name": "Сколько времени занимает разработка сайта?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Разработка сайта обычно занимает от 2 до 8 недель в зависимости от сложности проекта, количества страниц и требуемого функционала."
      }
    },
    {
      "@type": "Question",
      "name": "Предоставляет ли TeleBots поддержку после запуска?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Да, мы предоставляем техническую поддержку и обслуживание для всех наших проектов после запуска, обеспечивая бесперебойную работу вашего бота или сайта."
      }
    }
  ]
};

export default function RussianHome() {
  return (
    <>
      <main className="home-page">
        {/* Schema.org markup for the main page */}
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
        
        <section id="hero" className="hero-section">
          <Hero />
        </section>

        <section id="about" className="about-section" aria-label="О нас" aria-describedby="about-description">
          <h2 className="visually-hidden">О компании TeleBots</h2>
          <div id="about-description" className="visually-hidden">Разработка telegram ботов, сайтов, лендингов, e-commerce, парсеров и AI ботов под ключ</div>
          <About />
        </section>

        {/* Adding Organization schema separately for better indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TeleBots",
              "url": "https://telebots.site/ru",
              "logo": "https://telebots.site/logologo.png",
              "description": "Разработка telegram ботов, сайтов, лендингов, e-commerce, парсеров и AI ботов под ключ",
              "email": "roman.fedoniuk@gmail.com",
              "telephone": "+380960908006",
              "sameAs": [
                "https://t.me/nowayrm",
                "https://www.facebook.com/nowayrm",
                "https://www.instagram.com/telebotsnowayrm"
              ]
            })
          }}
        />
        
        {/* FAQ Schema for displaying frequent questions in search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Сколько стоит разработка Telegram бота?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Стоимость разработки Telegram бота зависит от сложности и функционала. Простые боты начинаются от $300, сложные проекты от $1000. Мы предлагаем бесплатную консультацию для оценки вашего проекта."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Сколько времени занимает разработка сайта?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Временные рамки разработки сайта зависят от типа и сложности. Мы можем создать лендинг за 5-7 дней, корпоративный сайт за 2-3 недели, а e-commerce сайт за 3-5 недель. Точные сроки обсуждаются во время планирования проекта."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Какие типы ботов вы разрабатываете?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Мы разрабатываем различные Telegram боты: боты поддержки клиентов, e-commerce боты, автоматизированные сервисы, боты бронирования, информационные боты, боты с интеграцией ИИ и другие индивидуальные решения."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Предоставляете ли вы поддержку после запуска проекта?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, мы предоставляем техническую поддержку для всех наших проектов. Базовая поддержка включена в стоимость разработки, а расширенные пакеты обслуживания доступны для постоянного мониторинга и обновления вашего проекта."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Как начать сотрудничество?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Процесс сотрудничества начинается с консультации. Вы можете связаться с нами через форму на сайте, Telegram или по телефону. Мы обсудим ваши потребности, подготовим техническое задание и рассчитаем стоимость и сроки для вашего проекта."
                  }
                }
              ]
            })
          }}
        />

        {/* Adding JSON-LD for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://telebots.site/ru",
              "name": "TeleBots",
              "image": "https://telebots.site/logologo.png",
              "url": "https://telebots.site/ru",
              "telephone": "+380960908006",
              "email": "roman.fedoniuk@gmail.com",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Ukraine"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "22:00"
              },
              "sameAs": [
                "https://t.me/nowayrm",
                "https://www.facebook.com/nowayrm",
                "https://www.instagram.com/telebotsnowayrm"
              ],
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "priceRange": "$10 - $3000",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />

        {/* Adding breadcrumbs for better Google display */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Главная",
                  "item": "https://telebots.site/ru"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Разработка чат-ботов",
                  "item": "https://telebots.site/ru/chatbots"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Разработка сайтов",
                  "item": "https://telebots.site/ru/websites"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Разработка парсеров",
                  "item": "https://telebots.site/ru/parsers"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Блог",
                  "item": "https://telebots.site/ru/blog"
                }
              ]
            })
          }}
        />

        <section id="statistics" className="statistics-section" aria-label="Статистика">
          <h2 className="visually-hidden">Статистика</h2>
          <Statistics />
        </section>

        <section id="services" className="services-section" aria-label="Наши услуги" itemScope itemType="https://schema.org/Service">
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-24">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4" itemProp="name">
                Наши услуги
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto" itemProp="description">
                Выберите решение, которое лучше всего подходит вашему бизнесу
              </p>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <Link href="/ru/chatbots" className="group relative block transform hover:-translate-y-3 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Разработка Telegram ботов" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Global" />
                  <meta itemProp="description" content="Профессиональная разработка чат-ботов для автоматизации общения с клиентами. Мы создаем эффективные боты для Telegram и других платформ." />
                  <div className="bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-100 group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.01] to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 group-hover:shadow-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          <FaRobot className="w-10 h-10 text-gray-800 relative z-10 transition-all duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300" itemProp="name">
                        Разработка чат-ботов
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Мы создаем эффективные чат-боты для автоматизации общения
                        с вашими клиентами
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Узнать больше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link href="/ru/websites" className="group relative block transform hover:-translate-y-3 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Разработка сайтов" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Global" />
                  <meta itemProp="description" content="Профессиональная разработка современных и функциональных сайтов. Мы создаем сайты с адаптивным дизайном и поисковой оптимизацией." />
                  <div className="bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-100 group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.01] to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 group-hover:shadow-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          <FaDesktop className="w-10 h-10 text-gray-800 relative z-10 transition-all duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300" itemProp="name">
                        Разработка сайтов
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Мы создаем современные и функциональные сайты
                        для вашего бизнеса
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Узнать больше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link href="/ru/parsers" className="group relative block transform hover:-translate-y-3 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Разработка парсеров" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Global" />
                  <meta itemProp="description" content="Профессиональная разработка парсеров для автоматизированного сбора и обработки данных. Мы создаем эффективные инструменты для анализа рынка и мониторинга конкурентов." />
                  <div className="bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-100 group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.01] to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 group-hover:shadow-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          <FaDatabase className="w-10 h-10 text-gray-800 relative z-10 transition-all duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300" itemProp="name">
                        Разработка парсеров
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Мы создаем инструменты для автоматизированного сбора
                        и обработки данных
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Узнать больше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="advantages" className="advantages-section">
          <Advantages />
        </section>

        <section id="lead-form" className="lead-form-section">
          <LeadForm />
        </section>

        <section id="portfolio" className="portfolio-section">
          <Portfolio />
        </section>

        <section id="purchase" className="purchase-section">
          <Purchase />
        </section>

        <section id="business-solutions" className="py-16 bg-gray-50" aria-label="Решения для бизнеса">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Комплексные решения для автоматизации бизнеса и роста</h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
              Мы предлагаем широкий спектр современных технологических решений, которые помогают автоматизировать процессы, 
              увеличивать продажи и оптимизировать взаимодействие с клиентами. Наши разработки создаются с учетом 
              потребностей украинского бизнеса и мировых стандартов качества.
            </p>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Блок про Телеграм боты */}
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Разработка Telegram ботов</h3>
                <p className="text-gray-700 mb-6">
                  Telegram боты стали неотъемлемой частью современного бизнеса в Украине. Они позволяют автоматизировать 
                  общение с клиентами, обрабатывать заказы 24/7, проводить опросы и собирать отзывы. 
                  Наши чат-боты для Telegram интегрируются с CRM системами, платежными шлюзами и другими сервисами.
                </p>
                <h4 className="font-medium text-lg mb-3">Преимущества Telegram ботов для бизнеса:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Автоматизация ответов на частые вопросы клиентов</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Прием и обработка заказов в любое время суток</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Интеграция с платежными системами и прием платежей</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Автоматические уведомления и промо-сообщения</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Сбор данных и аналитика поведения пользователей</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Мы разрабатываем Telegram боты для различных отраслей: от e-commerce и служб доставки до образовательных 
                  проектов и медицинских учреждений. Каждый бот создается индивидуально под потребности вашего бизнеса.
                </p>
              </div>

              {/* Блок про веб-сайты */}
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Разработка сайтов</h3>
                <p className="text-gray-700 mb-6">
                  Современный бизнес требует качественного веб-присутствия. Мы создаем функциональные сайты с адаптивным 
                  дизайном, оптимизированные для поисковых систем. Наши сайты отличаются быстрой загрузкой, 
                  удобными интерфейсами и полной адаптивностью для мобильных устройств.
                </p>
                <h4 className="font-medium text-lg mb-3">Типы сайтов, которые мы разрабатываем:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Лендинги для презентации продуктов и генерации лидов</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Корпоративные сайты с системами управления контентом</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>E-commerce сайты с каталогами и платежными системами</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Информационные порталы и новостные сайты</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Веб-сервисы и личные кабинеты клиентов</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Все наши сайты создаются с использованием современных технологий, имеют высокую скорость загрузки
                  и полностью оптимизированы для поисковых систем, что помогает привлекать органический трафик.
                </p>
              </div>

              {/* Блок про парсеры */}
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Разработка парсеров и скраперов</h3>
                <p className="text-gray-700 mb-6">
                  Парсеры и скраперы - это мощные инструменты для автоматизированного сбора и анализа данных из различных источников. 
                  Они позволяют мониторить цены конкурентов, собирать контакты потенциальных клиентов, анализировать рыночные тренды 
                  и автоматизировать рутинные процессы сбора информации.
                </p>
                <h4 className="font-medium text-lg mb-3">Как парсеры помогают бизнесу:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Мониторинг цен конкурентов и ассортимента продукции</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Сбор контактов потенциальных клиентов и партнеров</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Анализ отзывов и упоминаний бренда в интернете</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Автоматическое обновление каталогов продукции</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Исследование рынка и анализ трендов</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Мы разрабатываем парсеры любой сложности с различными функциями: от простого сбора данных до сложного анализа
                  с использованием машинного обучения. Все наши решения легальны и этичны, соблюдая правила доступа к данным.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Комплексная автоматизация для вашего бизнеса</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                Наиболее эффективные решения возникают при объединении различных технологий. Мы предлагаем комплексный подход, 
                где Telegram боты интегрируются с вашим сайтом, CRM системой и парсерами, создавая единую 
                экосистему для вашего бизнеса.
              </p>
              <Link href="/ru/prices" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Посмотреть цены на наши услуги
              </Link>
            </div>
          </div>
          
          {/* Schema.org микророзметка для SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "Service",
                      "name": "Разработка Telegram ботов",
                      "description": "Профессиональная разработка чат-ботов для автоматизации бизнес-процессов, обработки заказов и общения с клиентами.",
                      "provider": {
                        "@type": "Organization",
                        "name": "TeleBots"
                      },
                      "serviceType": "Software Development",
                      "areaServed": "Ukraine"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "Service",
                      "name": "Разработка сайтов",
                      "description": "Создание современных, быстрых и SEO-оптимизированных сайтов для бизнеса: лендинги, корпоративные сайты, e-commerce.",
                      "provider": {
                        "@type": "Organization",
                        "name": "TeleBots"
                      },
                      "serviceType": "Web Development",
                      "areaServed": "Ukraine"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "Service",
                      "name": "Разработка парсеров и скраперов",
                      "description": "Создание инструментов для автоматизированного сбора и анализа данных, мониторинга конкурентов и исследования рынка.",
                      "provider": {
                        "@type": "Organization",
                        "name": "TeleBots"
                      },
                      "serviceType": "Business Process Automation",
                      "areaServed": "Ukraine"
                    }
                  }
                ]
              })
            }}
          />
        </section>

        <section id="reviews" className="reviews-section">
          <Reviews />
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </main>
    </>
  )
}
