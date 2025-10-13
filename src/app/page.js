import Hero from '../ui/Hero'
import About from '../ui/About'
import Advantages from '../ui/Advantages'
import Prices from '../ui/Prices'
import Purchase from '../ui/Purchase'
import Socials from '../ui/Socials'
import Projects from '../ui/Projects'
import Portfolio from '../ui/Portfolio'
import Reviews from '../ui/Reviews'
import Services from '../ui/Services'
import LeadForm from '../ui/LeadForm'
import Script from 'next/script'
import Link from 'next/link'
import Statistics from '../ui/Statistics'
import { FaRobot, FaDesktop, FaDatabase, FaArrowRight } from 'react-icons/fa'
import Head from 'next/head'

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
      'uk-UA': 'https://telebots.site',
      'en-US': 'https://telebots.site/en',
      'pl-PL': 'https://telebots.site/pl',
      'ru-RU': 'https://telebots.site/ru',
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
      {/* Додаткові метатеги для максимального SEO */}
      <Head>
        {/* Додаткові метатеги для кращої індексації */}
        <meta name="geo.region" content="UA" />
        <meta name="geo.placename" content="Ukraine" />
        <meta name="geo.position" content="50.4501;30.5234" />
        <meta name="ICBM" content="50.4501, 30.5234" />
        
        {/* Метатеги для мобільних пристроїв */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TeleBots" />
        <meta name="application-name" content="TeleBots" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
        
        {/* Метатеги для соціальних мереж */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="fb:admins" content="your-facebook-admin-id" />
        <meta name="twitter:site" content="@telebotsnowayrm" />
        <meta name="twitter:creator" content="@telebotsnowayrm" />
        <meta name="twitter:domain" content="telebots.site" />
        
        {/* Додаткові метатеги для пошукових систем */}
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="language" content="uk" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Метатеги для швидкості завантаження */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Метатеги для безпеки */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Метатеги для кешування */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Expires" content="31536000" />
        
        {/* Додаткові метатеги для контенту */}
        <meta name="news_keywords" content="розробка ботів, автоматизація, Telegram, веб-сайти" />
        <meta name="subject" content="Розробка Telegram ботів та веб-сайтів" />
        <meta name="copyright" content="TeleBots" />
        <meta name="designer" content="TeleBots Team" />
        <meta name="reply-to" content="roman.fedoniuk@gmail.com" />
        <meta name="owner" content="TeleBots" />
        <meta name="url" content="https://telebots.site" />
        <meta name="identifier-URL" content="https://telebots.site" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Technology" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* Метатеги для міжнародної SEO */}
        <link rel="alternate" hrefLang="uk" href="https://telebots.site" />
        <link rel="alternate" hrefLang="en" href="https://telebots.site/en" />
        <link rel="alternate" hrefLang="pl" href="https://telebots.site/pl" />
        <link rel="alternate" hrefLang="ru" href="https://telebots.site/ru" />
        <link rel="alternate" hrefLang="x-default" href="https://telebots.site" />
        
        {/* Метатеги для структурованих даних */}
        <meta name="structured-data" content="json-ld" />
        <meta name="schema-org" content="https://schema.org" />
        
        {/* Додаткові метатеги для аналітики */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Метатеги для RSS та Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="TeleBots Blog RSS" href="/feed.xml" />
        
        {/* Метатеги для PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TeleBots" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        
        {/* Додаткові метатеги для контенту */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Метатеги для швидкості */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        
        {/* Метатеги для доступності */}
        <meta name="accessibility" content="WCAG 2.1 AA" />
        <meta name="accessibility-feature" content="high-contrast, large-text, screen-reader" />
        
        {/* Додаткові метатеги для бізнесу */}
        <meta name="business:contact_data:street_address" content="Ukraine" />
        <meta name="business:contact_data:locality" content="Ukraine" />
        <meta name="business:contact_data:region" content="UA" />
        <meta name="business:contact_data:postal_code" content="01001" />
        <meta name="business:contact_data:country_name" content="Ukraine" />
        
        {/* Метатеги для часу роботи */}
        <meta name="business:hours:day" content="monday" />
        <meta name="business:hours:start" content="09:00" />
        <meta name="business:hours:end" content="22:00" />
        <meta name="business:hours:day" content="tuesday" />
        <meta name="business:hours:start" content="09:00" />
        <meta name="business:hours:end" content="22:00" />
        <meta name="business:hours:day" content="wednesday" />
        <meta name="business:hours:start" content="09:00" />
        <meta name="business:hours:end" content="22:00" />
        <meta name="business:hours:day" content="thursday" />
        <meta name="business:hours:start" content="09:00" />
        <meta name="business:hours:end" content="22:00" />
        <meta name="business:hours:day" content="friday" />
        <meta name="business:hours:start" content="09:00" />
        <meta name="business:hours:end" content="22:00" />
        <meta name="business:hours:day" content="saturday" />
        <meta name="business:hours:start" content="09:00" />
        <meta name="business:hours:end" content="22:00" />
        <meta name="business:hours:day" content="sunday" />
        <meta name="business:hours:start" content="09:00" />
        <meta name="business:hours:end" content="22:00" />
        
        {/* Додаткові метатеги для максимального SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="slurp" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="duckduckbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="baiduspider" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Додаткові метатеги для контенту */}
        <meta name="content-language" content="uk" />
        <meta name="content-type" content="text/html; charset=UTF-8" />
        <meta name="content-script-type" content="text/javascript" />
        <meta name="content-style-type" content="text/css" />
        <meta name="generator" content="Next.js" />
        <meta name="generator" content="React" />
        <meta name="generator" content="TeleBots" />
        
        {/* Додаткові метатеги для SEO */}
        <meta name="audience" content="all" />
        <meta name="resource-type" content="document" />
        <meta name="classification" content="business" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="notranslate" />
        
        {/* Додаткові метатеги для мобільних */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        <meta name="format-detection" content="url=no" />
        
        {/* Додаткові метатеги для соціальних мереж */}
        <meta property="og:site_name" content="TeleBots" />
        <meta property="og:locale" content="uk_UA" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="pl_PL" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="2025-01-04T12:00:00+02:00" />
        
        {/* Додаткові метатеги для Twitter */}
        <meta name="twitter:app:name:iphone" content="TeleBots" />
        <meta name="twitter:app:name:ipad" content="TeleBots" />
        <meta name="twitter:app:name:googleplay" content="TeleBots" />
        <meta name="twitter:app:url:iphone" content="https://telebots.site" />
        <meta name="twitter:app:url:ipad" content="https://telebots.site" />
        <meta name="twitter:app:url:googleplay" content="https://telebots.site" />
        
        {/* Додаткові метатеги для аналітики */}
        <meta name="google-analytics" content="G-7YWVBBJP8X" />
        <meta name="google-site-verification" content="v04hNk8tIx3d9CUk6GblBSturOPgddWDdKma1nSpvVw" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="p:domain_verify" content="your-pinterest-verification-code" />
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
        
        {/* Додаткові метатеги для швидкості */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta httpEquiv="cleartype" content="on" />
        <meta httpEquiv="imagetoolbar" content="no" />
        
        {/* Додаткові метатеги для безпеки */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        
        {/* Додаткові метатеги для кешування */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        <meta httpEquiv="Expires" content="31536000" />
        <meta httpEquiv="Pragma" content="cache" />
        <meta httpEquiv="Last-Modified" content="2025-01-04T12:00:00+02:00" />
        
        {/* Додаткові метатеги для контенту */}
        <meta name="news_keywords" content="розробка ботів, автоматизація, Telegram, веб-сайти, AI, штучний інтелект" />
        <meta name="subject" content="Розробка Telegram ботів та веб-сайтів" />
        <meta name="copyright" content="TeleBots" />
        <meta name="designer" content="TeleBots Team" />
        <meta name="reply-to" content="roman.fedoniuk@gmail.com" />
        <meta name="owner" content="TeleBots" />
        <meta name="url" content="https://telebots.site" />
        <meta name="identifier-URL" content="https://telebots.site" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Technology" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="audience" content="all" />
        <meta name="resource-type" content="document" />
        <meta name="classification" content="business" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="notranslate" />
      </Head>
      
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

        <section id="statistics" className="statistics-section" aria-label="Статистика">
          <h2 className="visually-hidden">Статистика</h2>
          <Statistics />
        </section>

        <section id="services" className="services-section" aria-label="Наші послуги" itemScope itemType="https://schema.org/Service">
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-24">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4" itemProp="name">
                Наші послуги
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto" itemProp="description">
                Обирайте рішення, яке найкраще підходить для вашого бізнесу
              </p>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <Link href="/chatbots" className="group relative block transform hover:-translate-y-3 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Розробка телеграм ботів" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Україна" />
                  <meta itemProp="description" content="Професійна розробка чат-ботів для автоматизації комунікації з клієнтами. Створюємо ефективних ботів для Telegram та інших платформ." />
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
                        Розробка чат-ботів
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Створюємо ефективних чат-ботів для автоматизації комунікації
                        з вашими клієнтами
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Дізнатися більше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link href="/websites" className="group relative block transform hover:-translate-y-3 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Розробка веб-сайтів" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Україна" />
                  <meta itemProp="description" content="Професійна розробка сучасних та функціональних веб-сайтів. Створюємо сайти з адаптивним дизайном та оптимізацією для пошукових систем." />
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
                        Розробка веб-сайтів
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Створюємо сучасні та функціональні веб-сайти
                        для вашого бізнесу
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Дізнатися більше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link href="/parsers" className="group relative block transform hover:-translate-y-3 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Розробка парсерів" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Україна" />
                  <meta itemProp="description" content="Професійна розробка парсерів для автоматизованого збору та обробки даних. Створюємо ефективні інструменти для аналізу ринку та моніторингу конкурентів." />
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
                        Розробка парсерів
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Створюємо інструменти для автоматизованого збору
                        та обробки даних
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Дізнатися більше</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>


        <section id="advantages" className="advantages-section" aria-label="Наші переваги" itemScope itemType="https://schema.org/ItemList">
          <h2 className="visually-hidden">Чому обирають TeleBots</h2>
          <Advantages />
        </section>

        {/* <section id="prices" className="prices-section" aria-label="Ціни">
          <h2 className="visually-hidden">Вартість розробки</h2>
          <Prices />
        </section> */}

        <section id="lead-form" className="lead-form-section" aria-label="Замовити проект" itemScope itemType="https://schema.org/ContactPage">
          <h2 className="visually-hidden">Замовити розробку проекту</h2>
          <LeadForm />
        </section>

        <section id="portfolio" className="portfolio-section" aria-label="Портфоліо" itemScope itemType="https://schema.org/CollectionPage">
          <h2 className="visually-hidden">Наші проєкти</h2>
          <Portfolio />
        </section>

        <section id="purchase" className="purchase-section" aria-label="Замовлення">
          <h2 className="visually-hidden">Замовити розробку</h2>
          <Purchase />
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

        <section id="reviews" className="reviews-section" aria-label="Відгуки" itemScope itemType="https://schema.org/Review">
          <h2 className="visually-hidden">Відгуки клієнтів</h2>
          <Reviews />
        </section>

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