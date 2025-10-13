import { Montserrat, Oswald, Inter } from 'next/font/google';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { NavbarProvider } from '../context/NavbarContext'
import { LanguageProvider } from '../context/LanguageContext'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import './globals.css';

// Lazy load non-critical components
const ToastContainer = dynamic(() => import('react-toastify').then(mod => ({ default: mod.ToastContainer })), {
  ssr: false,
  loading: () => <div className="toast-placeholder" />
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
});

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['400', '500', '600'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
});

export const metadata = {
  title: {
    default: 'TeleBots - Розробка Телеграм ботів та Веб-сайтів',
    template: '%s | TeleBots'
  },
  description: 'Професійна розробка Телеграм ботів, чат-ботів та веб-сайтів для автоматизації бізнесу. ✓ Швидка розробка ✓ Технічна підтримка 24/7 ✓ Гарантія якості. Замовте бота вже сьогодні!',
  keywords: [
    'телеграм бот',
    'чат-бот',
    'розробка бота',
    'створення веб-сайту',
    'розробка сайту',
    'розробка інтернет-магазину',
    'розробка парсеру',
    'автоматизація бізнесу',
    'telegram bot developer',
    'телеграм бот на замовлення',
    'ціна телеграм бот',
    'боти для продажів',
    'чат-боти для бізнесу',
    'автоматизація продажів',
    'розробка ботів україна',
    'замовити чат-бот'
  ],
  authors: [{ name: 'TeleBots Team', url: 'https://telebots.site' }],
  creator: 'TeleBots',
  publisher: 'TeleBots',
  category: 'Technology',
  classification: 'Business Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://telebots.site'),
  alternates: {
    canonical: 'https://telebots.site',
    languages: {
      'uk-UA': '/',
      'en-US': '/en',
      'ru-RU': '/ru',
    },
    types: {
      'application/rss+xml': 'https://telebots.site/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://telebots.site',
    siteName: 'TeleBots',
    title: 'TeleBots - Розробка Телеграм ботів та Веб-сайтів',
    description: 'Професійна розробка Телеграм ботів, чат-ботів та веб-сайтів для автоматизації бізнесу. Збільште продажі та покращте комунікацію з клієнтами.',
    images: [
      {
        url: 'https://telebots.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TeleBots - Розробка Телеграм ботів та Веб-сайтів',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleBots - Розробка Телеграм ботів та Веб-сайтів',
    description: 'Професійна розробка Телеграм ботів, чат-ботів та веб-сайтів для автоматизації бізнесу.',
    images: ['https://telebots.site/og-image.jpg'],
    creator: '@TeleBots',
    site: '@TeleBots',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'v04hNk8tIx3d9CUk6GblBSturOPgddWDdKma1nSpvVw',
    bing: 'your-bing-verification-code',
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'TeleBots',
    'application-name': 'TeleBots',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
    'format-detection': 'date=no',
    'format-detection': 'address=no',
    'format-detection': 'email=no',
    'geo.region': 'UA',
    'geo.placename': 'Ukraine',
    'geo.position': '50.4501;30.5234',
    'ICBM': '50.4501, 30.5234',
    'revisit-after': '7 days',
    'distribution': 'global',
    'rating': 'general',
    'language': 'uk',
    'coverage': 'worldwide',
    'target': 'all',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'news_keywords': 'розробка ботів, автоматизація, Telegram, веб-сайти',
    'subject': 'Розробка Telegram ботів та веб-сайтів',
    'copyright': 'TeleBots',
    'designer': 'TeleBots Team',
    'reply-to': 'roman.fedoniuk@gmail.com',
    'owner': 'TeleBots',
    'url': 'https://telebots.site',
    'identifier-URL': 'https://telebots.site',
    'directory': 'submission',
    'category': 'Technology',
    'coverage': 'Worldwide',
    'distribution': 'Global',
    'rating': 'General',
    'accessibility': 'WCAG 2.1 AA',
    'accessibility-feature': 'high-contrast, large-text, screen-reader',
    'business:contact_data:street_address': 'Ukraine',
    'business:contact_data:locality': 'Ukraine',
    'business:contact_data:region': 'UA',
    'business:contact_data:postal_code': '01001',
    'business:contact_data:country_name': 'Ukraine',
    'structured-data': 'json-ld',
    'schema-org': 'https://schema.org',
  },
};

export default function RootLayout({ children }) {
  // За замовчуванням українська мова
  // Мова буде визначена через metadata в кожній сторінці окремо
  return (
    <html lang="uk" className={`${montserrat.variable} ${oswald.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta httpEquiv="Cache-Control" content="public, max-age=604800, immutable" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link rel="apple-touch-icon" href="/logologo.png" />
        <link rel="shortcut icon" href="/logologo.png" />
        <link rel="icon" href="/logologo.png" />
        <link rel="author" href="/humans.txt" type="text/plain" />
        <link rel="alternate" type="application/rss+xml" title="TeleBots Blog" href="/feed.xml" />
        
        {/* Додаткові метатеги для максимального SEO */}
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
        <meta name="google-site-verification" content="v04hNk8tIx3d9CUk6GblBSturOPgddWDdKma1nSpvVw" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Метатеги для RSS та Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="TeleBots Blog RSS" href="/feed.xml" />
        
        {/* Метатеги для PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        
        {/* Додаткові метатеги для контенту */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        
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
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-container { opacity: 1; }
            .hero-title { opacity: 1; transform: translateY(0); }
            .hero-subtitle { opacity: 1; transform: translateY(0); }
            .header { backdrop-filter: blur(10px); }
            .loading-spinner { display: inline-block; }
            .fade-in { opacity: 1; transform: translateY(0); }
            
            /* Critical slick carousel styles */
            .slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
            .slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}
            .slick-list:focus{outline:none}
            .slick-list.dragging{cursor:pointer;cursor:hand}
            .slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
            .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}
            .slick-track:before,.slick-track:after{display:table;content:''}
            .slick-track:after{clear:both}
            .slick-loading .slick-track{visibility:hidden}
            .slick-slide{display:none;float:left;height:100%;min-height:1px}
            [dir='rtl'] .slick-slide{float:right}
            .slick-slide img{display:block}
            .slick-slide.slick-loading img{display:none}
            .slick-slide.dragging img{pointer-events:none}
            .slick-initialized .slick-slide{display:block}
            .slick-loading .slick-slide{visibility:hidden}
            .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
            .slick-arrow.slick-hidden{display:none}
            
            /* Font optimization */
            @font-face{font-family:'slick';font-weight:normal;font-style:normal;font-display:swap;src:url('/fonts/slick.eot');src:url('/fonts/slick.eot?#iefix') format('embedded-opentype'),url('/fonts/slick.woff') format('woff'),url('/fonts/slick.ttf') format('truetype'),url('/fonts/slick.svg#slick') format('svg')}
          `
        }} />
        <link 
          rel="preconnect" 
          href="https://cdnjs.cloudflare.com" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
        <link 
          rel="dns-prefetch" 
          href="https://www.googletagmanager.com"
        />
        <link 
          rel="dns-prefetch" 
          href="https://www.google-analytics.com"
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/laptop.png" as="image" type="image/png" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        
        {/* Preload critical CSS */}
        <link 
          rel="preload"
          href="/_next/static/css/07588c8f743fd107.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link 
          rel="preload"
          href="/_next/static/css/b32a757c1b71a6fc.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link 
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
            crossOrigin="anonymous" 
            referrerPolicy="no-referrer" 
          />
        </noscript>
      </head>
      <body className={`${montserrat.className} bg-white`} itemScope itemType="https://schema.org/WebPage">
        <NavbarProvider>
          <LanguageProvider>
            <ToastContainer />
            <div className='min-h-[150vh]'>
              <Header />
              {children}
              <Footer />
            </div>
          </LanguageProvider>
        </NavbarProvider>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-7YWVBBJP8X" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7YWVBBJP8X');
          `}
        </Script>
        
        <Script id="service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>
        
        <Script id="set-html-lang" strategy="beforeInteractive">
          {`
            (function() {
              const path = window.location.pathname;
              let lang = 'uk';
              if (path.startsWith('/en')) lang = 'en';
              else if (path.startsWith('/ru')) lang = 'ru';
              else if (path.startsWith('/pl')) lang = 'pl';
              document.documentElement.lang = lang;
            })();
          `}
        </Script>
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TeleBots",
              "description": "Професійна розробка Телеграм ботів, чат-ботів та веб-сайтів для автоматизації бізнесу",
              "url": "https://telebots.site",
              "logo": "https://telebots.site/logologo.png",
              "image": "https://telebots.site/og-image.jpg",
              "telephone": "+380960908006",
              "email": "roman.fedoniuk@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "UA",
                "addressRegion": "Україна",
                "addressLocality": "Україна"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "49.8397",
                "longitude": "24.0297"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Україна"
                },
                {
                  "@type": "Country", 
                  "name": "Польща"
                },
                {
                  "@type": "Country",
                  "name": "США"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "49.8397",
                  "longitude": "24.0297"
                },
                "geoRadius": "50000"
              },
              "openingHours": "Mo-Su 09:00-21:00",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+380960908006",
                  "contactType": "customer service",
                  "availableLanguage": ["Ukrainian", "English", "Russian"],
                  "areaServed": "UA"
                },
                {
                  "@type": "ContactPoint",
                  "email": "roman.fedoniuk@gmail.com",
                  "contactType": "technical support",
                  "availableLanguage": ["Ukrainian", "English", "Russian"]
                }
              ],
              "sameAs": [
                "https://t.me/nowayrm",
                "https://www.facebook.com/nowayrm", 
                "https://www.instagram.com/telebotsnowayrm"
              ],
              "founder": {
                "@type": "Person",
                "name": "Роман Федонюк",
                "jobTitle": "Розробник та засновник",
                "email": "roman.fedoniuk@gmail.com"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Послуги TeleBots",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Розробка Telegram ботів",
                      "description": "Професійна розробка чат-ботів для автоматизації бізнесу"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Розробка веб-сайтів",
                      "description": "Створення сучасних та функціональних веб-сайтів"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Розробка парсерів",
                      "description": "Автоматизований збір та обробка даних"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Олександр К."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Відмінна робота! Бот працює ідеально, всі вимоги враховані."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person", 
                    "name": "Марія С."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Професійний підхід, швидка розробка. Рекомендую!"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
