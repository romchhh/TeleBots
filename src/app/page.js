import dynamic from 'next/dynamic'
import Script from 'next/script'
import Link from 'next/link'
import { FaRobot, FaDesktop, FaDatabase, FaArrowRight } from 'react-icons/fa'

// Critical - load immediately
import Hero from '../ui/Hero'
import About from '../ui/About'

// Non-critical - lazy load with viewport intersection
const LeadForm = dynamic(() => import('../ui/LeadForm'), { 
  ssr: true  // Keep SSR for forms for better SEO
})
const Portfolio = dynamic(() => import('../ui/Portfolio'), { 
  ssr: false, 
  loading: () => <div style={{minHeight: '600px'}} /> 
})
const Purchase = dynamic(() => import('../ui/Purchase'), { 
  ssr: false, 
  loading: () => <div style={{minHeight: '400px'}} /> 
})
export const metadata = {
  title: 'TeleBots | Розробка Телеграм ботів, веб-сайтів та автоматизації бізнесу в Україні',
  description: '🚀 Професійна розробка Telegram ботів, чат-ботів, веб-сайтів та парсерів для автоматизації бізнесу. ✅ 24/7 підтримка ✅ Швидка розробка ✅ Гарантія якості. Збільшуйте продажі на 50% з нашими рішеннями!',
  keywords: [
    'розробка телеграм ботів Україна',
    'створення чат ботів',
    'розробка веб-сайтів Київ',
    'автоматизація бізнесу',
    'telegram bot development Ukraine',
    'створення ботів телеграм',
    'розробка інтернет магазину',
    'замовити телеграм бота',
    'ціна телеграм бот',
    'бот для бізнесу',
    'розробка сайтів під ключ',
    'веб розробка Україна',
    'telegram automation',
    'боти для продажів',
    'парсери даних',
    'AI інтеграція в боти',
    'розробка лендінгів',
    'e-commerce розробка',
    'CRM інтеграція',
    'автоматизація продажів'
  ],
  authors: [{ name: 'Роман Федонюк', url: 'https://telebots.site' }],
  creator: 'TeleBots',
  publisher: 'TeleBots',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://telebots.site'),
  alternates: {
    canonical: 'https://telebots.site',
    languages: {
      'uk': 'https://telebots.site',
      'en': 'https://telebots.site/en',
      'pl': 'https://telebots.site/pl',
      'ru': 'https://telebots.site/ru',
      'x-default': 'https://telebots.site',
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
  openGraph: {
    title: 'TeleBots | Розробка Телеграм ботів та Веб-сайтів в Україні',
    description: '🚀 Професійна розробка Telegram ботів, чат-ботів та веб-сайтів для автоматизації бізнесу. Збільшуйте продажі на 50% з нашими рішеннями!',
    url: 'https://telebots.site',
    siteName: 'TeleBots',
    images: [
      {
        url: 'https://telebots.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TeleBots - Розробка Телеграм ботів та Веб-сайтів',
        type: 'image/jpeg',
      },
      {
        url: 'https://telebots.site/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'TeleBots - Розробка Телеграм ботів та Веб-сайтів',
        type: 'image/jpeg',
      }
    ],
    locale: 'uk_UA',
    type: 'website',
    countryName: 'Ukraine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleBots | Розробка Телеграм ботів та Веб-сайтів',
    description: '🚀 Професійна розробка Telegram ботів, чат-ботів та веб-сайтів для автоматизації бізнесу. Збільшуйте продажі на 50%!',
    images: ['https://telebots.site/twitter-image.jpg'],
    creator: '@telebotsnowayrm',
    site: '@telebotsnowayrm',
  },
  verification: {
    google: 'your-google-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Business Services',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'TeleBots',
    'application-name': 'TeleBots',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  }
}

// Schema.org розмітка для головної сторінки
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TeleBots",
  "url": "https://telebots.site",
  "description": "Професійна розробка Телеграм ботів, чат-ботів та веб-сайтів для автоматизації бізнесу",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://telebots.site/search?q={search_term_string}",
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
    "description": "Розробка телеграм ботів, сайтів, лендінгів інтернет магазинів, парсерів та ботів з AI на замовлення під ключ",
    "email": "roman.fedoniuk@gmail.com",
    "telephone": "+380960908006",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Україна"
    },
    "founder": {
      "@type": "Person",
      "name": "Роман Федонюк",
      "jobTitle": "Розробник"
    },
    "funder": {
      "@type": "Person",
      "name": "Роман Федонюк"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+380960908006",
      "contactType": "customer service",
      "availableLanguage": ["Ukrainian", "English", "Russian"]
    }
  }
}

// FAQ Schema видалено - використовується тільки один FAQPage в JSX нижче

export default function Home() {
  return (
    <>
      <main className="home-page">
        {/* Schema.org розмітка для головної сторінки - вбудовуємо безпосередньо в HTML */}
        <script
        id="schema-org"
        type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TeleBots",
              "url": "https://telebots.site",
              "description": "Професійна розробка Телеграм ботів, чат-ботів та веб-сайтів для автоматизації бізнесу",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://telebots.site/search?q={search_term_string}",
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
                "description": "Розробка телеграм ботів, сайтів, лендінгів інтернет магазинів, парсерів та ботів з AI на замовлення під ключ",
                "email": "roman.fedoniuk@gmail.com",
                "telephone": "+380960908006",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Україна"
                },
                "founder": {
                  "@type": "Person",
                  "name": "Роман Федонюк",
                  "jobTitle": "Розробник"
                },
                "funder": {
                  "@type": "Person",
                  "name": "Роман Федонюк"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+380960908006",
                  "contactType": "customer service",
                  "availableLanguage": ["Ukrainian", "English", "Russian"]
                }
              }
            })
          }}
        />
        
        <section id="hero" className="hero-section">
          <Hero />
        </section>

        <section id="about" className="about-section" aria-label="Про нас" aria-describedby="about-description">
          <h2 className="visually-hidden">Про компанію TeleBots</h2>
          <div id="about-description" className="visually-hidden">Розробка телеграм ботів, сайтів, лендінгів інтернет магазинів, парсерів та ботів з AI на замовлення під ключ</div>
          <About />
        </section>
        
        {/* Додаємо схему Organization окремо для кращої індексації */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TeleBots",
              "url": "https://telebots.site",
              "logo": "https://telebots.site/logologo.png",
              "description": "Розробка телеграм ботів, сайтів, лендінгів інтернет магазинів, парсерів та ботів з AI на замовлення під ключ",
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
        
        {/* FAQ Schema для відображення частих питань у результатах пошуку */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Скільки коштує розробка телеграм бота?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Вартість розробки телеграм бота залежить від складності та функціоналу. Базові боти починаються від 300$, складні проєкти від 1000$. Ми пропонуємо безкоштовну консультацію для оцінки вашого проекту."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Скільки часу займає розробка сайту?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Терміни розробки сайту залежать від типу та складності. Лендінг можемо створити за 5-7 днів, корпоративний сайт за 2-3 тижні, а інтернет-магазин за 3-5 тижнів. Точні терміни обговорюються на етапі планування проекту."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Які види ботів ви розробляєте?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ми розробляємо різноманітні боти для Телеграму: боти для підтримки клієнтів, боти-магазини, автоматизовані сервіси, боти для бронювання, інформаційні боти, боти з інтеграцією AI та інші рішення на замовлення."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Чи надаєте підтримку після запуску проекту?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Так, ми надаємо технічну підтримку для всіх наших проектів. Базова підтримка входить у вартість розробки, також доступні розширені пакети обслуговування для постійного моніторингу та оновлення вашого проекту."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Як почати співпрацю?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Процес співпраці починається з консультації. Ви можете зв'язатися з нами через форму на сайті, Телеграм або за телефоном. Ми обговоримо ваші потреби, підготуємо технічне завдання та розрахуємо вартість і терміни виконання проекту."
                  }
                }
              ]
            })
          }}
        />

        {/* Додаємо JSON-LD для LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://telebots.site",
              "name": "TeleBots",
              "image": "https://telebots.site/logologo.png",
              "url": "https://telebots.site",
              "telephone": "+380960908006",
              "email": "roman.fedoniuk@gmail.com",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Україна"
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

        {/* Додаємо хлібні крихти для кращого відображення в Google */}
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
                  "name": "Головна",
                  "item": "https://telebots.site"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Розробка чат-ботів",
                  "item": "https://telebots.site/chatbots"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Розробка веб-сайтів",
                  "item": "https://telebots.site/websites"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Розробка парсерів",
                  "item": "https://telebots.site/parsers"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Блог",
                  "item": "https://telebots.site/blog"
                }
              ]
            })
          }}
        />

        <section id="services" className="services-section" aria-label="Наші послуги" itemScope itemType="https://schema.org/Service">
          <div className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
            {/* Декоративні елементи */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                Наші послуги
              </h2>
              <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto" itemProp="description">
                Обирайте рішення, яке найкраще підходить для вашого бізнесу
              </p>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <Link href="/chatbots" className="group relative block transform hover:-translate-y-4 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Розробка телеграм ботів" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Україна" />
                  <meta itemProp="description" content="Професійна розробка чат-ботів для автоматизації комунікації з клієнтами. Створюємо ефективних ботів для Telegram та інших платформ." />
                  <div className="bg-gradient-to-br from-white to-gray-50/30 p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-200/50 group-hover:border-gray-300/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-gray-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-black/10 to-gray-800/10 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-black/20 group-hover:to-gray-800/20 group-hover:shadow-2xl relative overflow-hidden ring-2 ring-transparent group-hover:ring-gray-200/50">
                          {/* Animated background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-100/40 to-gray-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                          <FaRobot className="w-12 h-12 text-gray-800 group-hover:text-gray-900 relative z-10 transition-all duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-gray-900 group-hover:scale-105" itemProp="name">
                        Розробка чат-ботів
                      </h3>
                      <p className="text-gray-700 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Створюємо ефективних чат-ботів для автоматизації комунікації
                        з вашими клієнтами
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Дізнатися більше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-black/0 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
                
                <Link href="/websites" className="group relative block transform hover:-translate-y-4 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Розробка веб-сайтів" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Україна" />
                  <meta itemProp="description" content="Професійна розробка сучасних та функціональних веб-сайтів. Створюємо сайти з адаптивним дизайном та оптимізацією для пошукових систем." />
                  <div className="bg-gradient-to-br from-white to-gray-50/30 p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-200/50 group-hover:border-gray-300/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-gray-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-black/10 to-gray-800/10 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-black/20 group-hover:to-gray-800/20 group-hover:shadow-2xl relative overflow-hidden ring-2 ring-transparent group-hover:ring-gray-200/50">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-100/40 to-gray-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                          <FaDesktop className="w-12 h-12 text-gray-800 group-hover:text-gray-900 relative z-10 transition-all duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-gray-900 group-hover:scale-105" itemProp="name">
                        Розробка веб-сайтів
                      </h3>
                      <p className="text-gray-700 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Створюємо сучасні та функціональні веб-сайти
                        для вашого бізнесу
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Дізнатися більше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-black/0 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
                
                <Link href="/parsers" className="group relative block transform hover:-translate-y-4 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Розробка парсерів" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Україна" />
                  <meta itemProp="description" content="Професійна розробка парсерів для автоматизованого збору та обробки даних. Створюємо ефективні інструменти для аналізу ринку та моніторингу конкурентів." />
                  <div className="bg-gradient-to-br from-white to-gray-50/30 p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-200/50 group-hover:border-gray-300/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-gray-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-black/10 to-gray-800/10 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-black/20 group-hover:to-gray-800/20 group-hover:shadow-2xl relative overflow-hidden ring-2 ring-transparent group-hover:ring-gray-200/50">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-100/40 to-gray-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                          <FaDatabase className="w-12 h-12 text-gray-800 group-hover:text-gray-900 relative z-10 transition-all duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-gray-900 group-hover:scale-105" itemProp="name">
                        Розробка парсерів
                      </h3>
                      <p className="text-gray-700 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Створюємо інструменти для автоматизованого збору
                        та обробки даних
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Дізнатися більше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-black/0 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

          <Purchase />

        {/* <section id="prices" className="prices-section" aria-label="Ціни">
          <h2 className="visually-hidden">Вартість розробки</h2>
          <Prices />
        </section> */}

        <section id="portfolio" className="portfolio-section" aria-label="Портфоліо" itemScope itemType="https://schema.org/CollectionPage">
          <h2 className="visually-hidden">Наші проєкти</h2>
          <Portfolio />
        </section>

        <section id="lead-form" className="lead-form-section" aria-label="Замовити проект" itemScope itemType="https://schema.org/ContactPage">
          <h2 className="visually-hidden">Замовити розробку проекту</h2>
          <LeadForm />
        </section>

{/*       
        <section id="projects" className="projects-section" aria-label="Проекти">
          <h2 className="visually-hidden">Успішні проекти</h2>
          <Projects />
        </section> */}

        {/* <section id="socials" className="socials-section" aria-label="Соціальні мережі">
          <h2 className="visually-hidden">Наші соціальні мережі</h2>
          <Socials />
        </section> */}


        {/* Додаємо SpeakableSpecification для голосового пошуку */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", ".main-title", ".hero-title"]
              },
              "url": "https://telebots.site"
            })
          }}
        />
        
        {/* Додаємо HowTo розмітку для процесу розробки ботів */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Як замовити Telegram бота",
              "description": "Покроковий процес замовлення розробки Telegram бота у компанії TeleBots",
              "totalTime": "P14D",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "300"
              },
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Консультація",
                  "text": "Зв'яжіться з нами для безкоштовної консультації та обговорення вашої ідеї",
                  "url": "https://telebots.site/#lead-form",
                  "image": "https://telebots.site/bot-development-step1.jpg"
                },
                {
                  "@type": "HowToStep",
                  "name": "Технічне завдання",
                  "text": "Ми допоможемо скласти детальне технічне завдання з усіма необхідними функціями",
                  "url": "https://telebots.site/chatbots",
                  "image": "https://telebots.site/bot-development-step2.jpg"
                },
                {
                  "@type": "HowToStep",
                  "name": "Розробка",
                  "text": "Наша команда розробить бота за 5-14 днів з урахуванням усіх вимог",
                  "url": "https://telebots.site/chatbots",
                  "image": "https://telebots.site/bot-development-step3.jpg"
                },
                {
                  "@type": "HowToStep",
                  "name": "Тестування та запуск",
                  "text": "Ми проведемо тестування та допоможемо запустити бота в роботу",
                  "url": "https://telebots.site/chatbots",
                  "image": "https://telebots.site/bot-development-step4.jpg"
                },
                {
                  "@type": "HowToStep",
                  "name": "Підтримка",
                  "text": "Ми надаємо технічну підтримку та допомогу з розвитком вашого бота",
                  "url": "https://telebots.site/chatbots",
                  "image": "https://telebots.site/bot-development-step5.jpg"
                }
              ]
            })
          }}
        />

        {/* Додаємо Service Schema для кращого відображення послуг */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Розробка Telegram ботів",
              "description": "Професійна розробка Telegram ботів для автоматизації бізнес-процесів",
              "provider": {
                "@type": "Organization",
                "name": "TeleBots",
                "url": "https://telebots.site"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Україна"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Послуги розробки ботів",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Базовий Telegram бот",
                      "description": "Простий бот з основними функціями"
                    },
                    "price": "100",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Розширений Telegram бот",
                      "description": "Бот з інтеграціями та складним функціоналом"
                    },
                    "price": "800",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Telegram бот",
                      "description": "Бот з інтеграцією штучного інтелекту"
                    },
                    "price": "1500",
                    "priceCurrency": "USD"
                  }
                ]
              }
            })
          }}
        />

        {/* Додаємо SoftwareApplication Schema для ботів */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Telegram Bot Development",
              "description": "Професійна розробка Telegram ботів для автоматизації бізнесу",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Telegram",
              "offers": {
                "@type": "Offer",
                "price": "100",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "50"
              },
              "author": {
                "@type": "Organization",
                "name": "TeleBots"
              }
            })
          }}
        />

        {/* Додаємо Product Schema для портфоліо */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Telegram Bot Development Service",
              "description": "Професійна розробка Telegram ботів для автоматизації бізнесу",
              "brand": {
                "@type": "Brand",
                "name": "TeleBots"
              },
              "category": "Software Development",
              "offers": {
                "@type": "Offer",
                "price": "100",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "TeleBots"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Додаємо Event Schema для консультацій */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Безкоштовна консультація з розробки ботів",
              "description": "Безкоштовна консультація з розробки Telegram ботів та автоматизації бізнесу",
              "startDate": "2025-01-04T09:00:00+02:00",
              "endDate": "2025-12-31T22:00:00+02:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://telebots.site"
              },
              "organizer": {
                "@type": "Organization",
                "name": "TeleBots",
                "url": "https://telebots.site"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />

        {/* Додаємо VideoObject Schema для відео контенту */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Як працює Telegram бот для бізнесу",
              "description": "Демонстрація роботи Telegram бота для автоматизації бізнес-процесів",
              "thumbnailUrl": "https://telebots.site/video-thumbnail.jpg",
              "uploadDate": "2025-01-04T10:00:00+02:00",
              "duration": "PT2M30S",
              "contentUrl": "https://telebots.site/demo-video.mp4",
              "embedUrl": "https://telebots.site/embed/demo-video",
              "publisher": {
                "@type": "Organization",
                "name": "TeleBots",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://telebots.site/logologo.png"
                }
              }
            })
          }}
        />

        {/* Додаємо Article Schema для блогів */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Топ-10 способів автоматизації бізнесу з Telegram ботами",
              "description": "Детальний гід по автоматизації бізнес-процесів за допомогою Telegram ботів",
              "image": "https://telebots.site/article-image.jpg",
              "datePublished": "2025-01-04T08:00:00+02:00",
              "dateModified": "2025-01-04T08:00:00+02:00",
              "author": {
                "@type": "Person",
                "name": "Роман Федонюк",
                "url": "https://telebots.site"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TeleBots",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://telebots.site/logologo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://telebots.site/blog/automation-guide"
              }
            })
          }}
        />

        {/* Додаємо Course Schema для навчальних матеріалів */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Розробка Telegram ботів з нуля",
              "description": "Повний курс з розробки Telegram ботів для автоматизації бізнесу",
              "provider": {
                "@type": "Organization",
                "name": "TeleBots",
                "url": "https://telebots.site"
              },
              "courseMode": "online",
              "educationalLevel": "beginner",
              "inLanguage": "uk",
              "offers": {
                "@type": "Offer",
                "price": "200",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "instructor": {
                  "@type": "Person",
                  "name": "Роман Федонюк"
                }
              }
            })
          }}
        />

        {/* Review Schema інтегровано в LocalBusiness в layout.js */}

        {/* Додаємо ContactPoint Schema для контактів */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Контакти TeleBots",
              "description": "Зв'яжіться з нами для замовлення розробки ботів та веб-сайтів",
              "mainEntity": {
                "@type": "Organization",
                "name": "TeleBots",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+380960908006",
                    "contactType": "customer service",
                    "availableLanguage": ["Ukrainian", "English", "Russian"],
                    "areaServed": "UA",
                    "hoursAvailable": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                      "opens": "09:00",
                      "closes": "22:00"
                    }
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "roman.fedoniuk@gmail.com",
                    "contactType": "customer service",
                    "availableLanguage": ["Ukrainian", "English", "Russian"]
                  }
                ]
              }
            })
          }}
        />

        {/* Додаємо WebPageElement Schema для навігації */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "TeleBots - Розробка ботів та сайтів",
              "description": "Професійна розробка Telegram ботів, веб-сайтів та автоматизації бізнесу",
              "url": "https://telebots.site",
              "mainEntity": {
                "@type": "Organization",
                "name": "TeleBots"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Головна",
                    "item": "https://telebots.site"
                  }
                ]
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", ".hero-title"]
              }
            })
          }}
        />

        {/* Додаємо MonetaryAmount Schema для цін */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PriceSpecification",
              "name": "Ціни на розробку ботів",
              "description": "Вартість розробки Telegram ботів та веб-сайтів",
              "price": "100",
              "priceCurrency": "USD",
              "validFrom": "2025-01-04",
              "validThrough": "2025-12-31",
              "eligibleQuantity": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 10
              }
            })
          }}
        />

        {/* Додаємо CreativeWork Schema для контенту */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "TeleBots Portfolio",
              "description": "Портфоліо успішних проектів розробки ботів та веб-сайтів",
              "creator": {
                "@type": "Organization",
                "name": "TeleBots"
              },
              "dateCreated": "2024-01-01",
              "dateModified": "2025-01-04",
              "inLanguage": "uk",
              "isAccessibleForFree": true,
              "license": "https://creativecommons.org/licenses/by/4.0/",
              "publisher": {
                "@type": "Organization",
                "name": "TeleBots"
              }
            })
          }}
        />

        {/* Додаємо DataCatalog Schema для портфоліо */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DataCatalog",
              "name": "TeleBots Project Catalog",
              "description": "Каталог успішних проектів розробки ботів та веб-сайтів",
              "url": "https://telebots.site/portfolio",
              "provider": {
                "@type": "Organization",
                "name": "TeleBots"
              },
              "dataset": [
                {
                  "@type": "Dataset",
                  "name": "Chatbot Projects",
                  "description": "Колекція успішних проектів з розробки чат-ботів для Telegram. Містить детальну інформацію про функціонал, використані технології та результати автоматизації бізнес-процесів для різних галузей.",
                  "creator": {
                    "@type": "Organization",
                    "name": "TeleBots",
                    "url": "https://telebots.site"
                  },
                  "license": "https://creativecommons.org/licenses/by/4.0/"
                },
                {
                  "@type": "Dataset",
                  "name": "Website Projects",
                  "description": "Портфоліо розроблених веб-сайтів та інтернет-магазинів. Включає кейси з детальними описами функціоналу, технічного стеку, дизайну та досягнутих результатів для клієнтів з різних сфер бізнесу.",
                  "creator": {
                    "@type": "Organization",
                    "name": "TeleBots",
                    "url": "https://telebots.site"
                  },
                  "license": "https://creativecommons.org/licenses/by/4.0/"
                }
              ]
            })
          }}
        />

        {/* Додаємо TechArticle Schema для технічних статей */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "Технічні аспекти розробки Telegram ботів",
              "description": "Детальний технічний огляд процесу розробки Telegram ботів",
              "author": {
                "@type": "Person",
                "name": "Роман Федонюк"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TeleBots"
              },
              "datePublished": "2025-01-04T09:00:00+02:00",
              "dateModified": "2025-01-04T09:00:00+02:00",
              "proficiencyLevel": "Expert",
              "dependencies": "Python, Node.js, Telegram API"
            })
          }}
        />

        {/* Додаємо SoftwareSourceCode Schema для коду */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              "name": "Telegram Bot Development Framework",
              "description": "Фреймворк для розробки Telegram ботів",
              "programmingLanguage": "Python",
              "runtimePlatform": "Telegram",
              "codeRepository": "https://github.com/telebots/framework",
              "license": "MIT",
              "author": {
                "@type": "Organization",
                "name": "TeleBots"
              }
            })
          }}
        />

        {/* Додаємо JobPosting Schema для вакансій */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Розробник Telegram ботів",
              "description": "Шукаємо досвідченого розробника для створення Telegram ботів",
              "datePosted": "2025-01-04",
              "validThrough": "2025-02-04",
              "employmentType": "FULL_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "TeleBots",
                "sameAs": "https://telebots.site"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "UA"
                }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": {
                  "@type": "QuantitativeValue",
                  "minValue": 2000,
                  "maxValue": 5000,
                  "unitText": "MONTH"
                }
              }
            })
          }}
        />

        {/* Додаємо ItemList Schema для портфоліо */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Портфоліо TeleBots",
              "description": "Список успішних проектів розробки ботів та веб-сайтів",
              "url": "https://telebots.site/portfolio",
              "numberOfItems": 24,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Dr. Толстікова - Telegram бот",
                    "url": "https://telebots.site/case/dr-tolstikova-bot"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "VSK Technology - веб-сайт",
                    "url": "https://telebots.site/case/vsk-technology"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "V12 Auto - веб-сайт",
                    "url": "https://telebots.site/case/v12-auto"
                  }
                }
              ]
            })
          }}
        />

        {/* Додаємо WebPageElement Schema для навігації */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPageElement",
              "name": "Навігаційне меню",
              "description": "Головне навігаційне меню сайту TeleBots",
              "isPartOf": {
                "@type": "WebPage",
                "url": "https://telebots.site"
              },
              "cssSelector": ".navbar, .header-nav",
              "xpath": "//nav[@class='navbar']"
            })
          }}
        />

        {/* Додаємо MediaObject Schema для зображень */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "name": "TeleBots Logo",
              "description": "Логотип компанії TeleBots",
              "url": "https://telebots.site/logologo.png",
              "contentUrl": "https://telebots.site/logologo.png",
              "width": 144,
              "height": 144,
              "encodingFormat": "image/png",
              "creator": {
                "@type": "Organization",
                "name": "TeleBots"
              },
              "copyrightHolder": {
                "@type": "Organization",
                "name": "TeleBots"
              },
              "license": "https://creativecommons.org/licenses/by/4.0/"
            })
          }}
        />

        {/* Додаємо PostalAddress Schema для адреси */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PostalAddress",
              "streetAddress": "Україна",
              "addressLocality": "Україна",
              "addressRegion": "Україna",
              "postalCode": "01001",
              "addressCountry": "UA"
            })
          }}
        />

        {/* Додаємо GeoCoordinates Schema для геолокації */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeoCoordinates",
              "latitude": 50.4501,
              "longitude": 30.5234,
              "name": "TeleBots Office Location",
              "description": "Розташування офісу TeleBots в Україні"
            })
          }}
        />

        {/* Додаємо OpeningHoursSpecification Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
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
              "closes": "22:00",
              "validFrom": "2025-01-01",
              "validThrough": "2025-12-31"
            })
          }}
        />

        {/* Додаємо MonetaryAmount Schema для цін */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "100",
              "name": "Базова ціна розробки бота",
              "description": "Мінімальна вартість розробки Telegram бота"
            })
          }}
        />

        {/* Додаємо QuantitativeValue Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "QuantitativeValue",
              "value": 24,
              "unitText": "projects",
              "name": "Кількість завершених проектів",
              "description": "Загальна кількість успішно завершених проектів"
            })
          }}
        />

        {/* Додаємо Duration Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Duration",
              "name": "Термін розробки бота",
              "description": "Середній термін розробки Telegram бота",
              "value": "P14D"
            })
          }}
        />

        {/* Додаємо Text Schema для контенту */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Text",
              "name": "Опис послуг TeleBots",
              "text": "Професійна розробка Telegram ботів, чат-ботів та веб-сайтів для автоматизації бізнесу. Збільшуйте продажі на 50% з нашими рішеннями!",
              "inLanguage": "uk",
              "encodingFormat": "text/plain"
            })
          }}
        />

        {/* Додаємо URL Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "URL",
              "name": "TeleBots Website",
              "url": "https://telebots.site",
              "description": "Офіційний веб-сайт компанії TeleBots"
            })
          }}
        />

        {/* Додаємо Email Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Email",
              "name": "Контактний email TeleBots",
              "email": "roman.fedoniuk@gmail.com",
              "description": "Основний контактний email для замовлень та консультацій"
            })
          }}
        />

        {/* Додаємо Telephone Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Telephone",
              "name": "Контактний телефон TeleBots",
              "telephone": "+380960908006",
              "description": "Основний контактний телефон для замовлень та консультацій"
            })
          }}
        />

        {/* Додаємо Place Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "TeleBots Office",
              "description": "Офіс компанії TeleBots в Україні",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "UA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.4501,
                "longitude": 30.5234
              }
            })
          }}
        />

        {/* Додаємо Thing Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Thing",
              "name": "Telegram Bot Development",
              "description": "Процес розробки Telegram ботів",
              "url": "https://telebots.site/chatbots"
            })
          }}
        />

        {/* Додаємо Intangible Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Intangible",
              "name": "TeleBots Services",
              "description": "Нематеріальні послуги розробки ботів та сайтів"
            })
          }}
        />

        {/* Додаємо StructuredValue Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "StructuredValue",
              "name": "TeleBots Pricing",
              "description": "Структуровані ціни на послуги",
              "value": "100-3000 USD"
            })
          }}
        />
      </main>
    </>
  )
}