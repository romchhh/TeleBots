import Hero from '../../ui/Hero'
import About from '../../ui/About'
import Prices from '../../ui/Prices'
import Purchase from '../../ui/Purchase'
import Socials from '../../ui/Socials'
import Projects from '../../ui/Projects'
import Portfolio from '../../ui/Portfolio'
import LeadForm from '../../ui/LeadForm'
import Script from 'next/script'
import Link from 'next/link'
import { FaRobot, FaDesktop, FaDatabase, FaArrowRight } from 'react-icons/fa'
import Head from 'next/head'

export const metadata = {
  title: 'Boty Telegram i Tworzenie Stron Internetowych | TeleBots',
  description: 'Profesjonalne tworzenie botów Telegram, chatbotów i stron internetowych do automatyzacji biznesu. ✓ Szybkie tworzenie ✓ Wsparcie techniczne ✓ Gwarancja jakości. Automatyzuj swój biznes z TeleBots!',
  keywords: [
    'tworzenie botów telegram',
    'tworzenie chatbotów',
    'tworzenie stron internetowych',
    'automatyzacja biznesu',
    'stworzyć bota telegram',
    'tworzenie sklepów internetowych',
    'zamówić bota telegram',
    'cena bota telegram',
    'bot biznesowy',
    'tworzenie stron',
    'tworzenie stron www',
    'automatyzacja telegram',
    'boty sprzedażowe'
  ],
  alternates: {
    canonical: 'https://telebots.site/pl',
    languages: {
      'uk': 'https://telebots.site',
      'en': 'https://telebots.site/en',
      'pl': 'https://telebots.site/pl',
      'ru': 'https://telebots.site/ru',
      'x-default': 'https://telebots.site',
    },
  },
  openGraph: {
    title: 'TeleBots | Boty Telegram i Tworzenie Stron Internetowych',
    description: 'Profesjonalne tworzenie botów Telegram, chatbotów i stron internetowych do automatyzacji biznesu. Zwiększ sprzedaż i popraw komunikację z klientami.',
    url: 'https://telebots.site/pl',
    images: [
      {
        url: 'https://telebots.site/home-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'TeleBots - Boty Telegram i Tworzenie Stron Internetowych',
      }
    ],
    type: 'website',
    locale: 'pl_PL',
  }
}

// Schema.org markup for the main page
const jsonLd = {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TeleBots",
              "url": "https://telebots.site/pl",
              "description": "Professional development of Telegram bots, chatbots and websites for business automation",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://telebots.site/pl/search?q={search_term_string}",
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
                "description": "Development of telegram bots, websites, landing pages, e-commerce, parsers, and AI bots turnkey",
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
      "name": "What services does TeleBots provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeleBots specializes in developing Telegram bots, chatbots, websites, e-commerce solutions, and parsers for business process automation."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a Telegram bot development cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of Telegram bot development depends on the project complexity and required features. Please contact us through the website form or Telegram for accurate pricing information."
      }
    },
    {
      "@type": "Question",
      "name": "How long does website development take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website development typically takes 2 to 8 weeks depending on the project complexity, number of pages, and required features."
      }
    },
    {
      "@type": "Question",
      "name": "Does TeleBots provide post-launch support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide technical support and maintenance for all our projects after launch, ensuring smooth operation of your bot or website."
      }
    }
  ]
};

export default function EnglishHome() {
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

        <section id="about" className="about-section" aria-label="About Us" aria-describedby="about-description">
          <h2 className="visually-hidden">About TeleBots Company</h2>
          <div id="about-description" className="visually-hidden">Development of telegram bots, websites, landing pages, e-commerce, parsers, and AI bots turnkey</div>
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
              "url": "https://telebots.site/pl",
              "logo": "https://telebots.site/logologo.png",
              "description": "Development of telegram bots, websites, landing pages, e-commerce, parsers, and AI bots turnkey",
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
                  "name": "How much does Telegram bot development cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of Telegram bot development depends on complexity and functionality. Basic bots start from $300, complex projects from $1000. We offer free consultation to evaluate your project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does website development take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Website development timelines depend on type and complexity. We can create a landing page in 5-7 days, a corporate website in 2-3 weeks, and an e-commerce site in 3-5 weeks. Exact timelines are discussed during project planning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of bots do you develop?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We develop various Telegram bots: customer support bots, e-commerce bots, automated services, booking bots, information bots, AI-integrated bots, and other custom solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide support after project launch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide technical support for all our projects. Basic support is included in the development cost, and extended maintenance packages are available for continuous monitoring and updating of your project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do we start cooperation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cooperation process begins with a consultation. You can contact us through the website form, Telegram, or phone. We'll discuss your needs, prepare technical specifications, and calculate the cost and timeline for your project."
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
              "@id": "https://telebots.site/en",
              "name": "TeleBots",
              "image": "https://telebots.site/logologo.png",
              "url": "https://telebots.site/pl",
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
                  "name": "Główna",
                  "item": "https://telebots.site/pl"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Tworzenie Chatbotów",
                  "item": "https://telebots.site/pl/chatbots"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Tworzenie Stron Internetowych",
                  "item": "https://telebots.site/pl/websites"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Tworzenie Parserów",
                  "item": "https://telebots.site/pl/parsers"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Blog",
                  "item": "https://telebots.site/pl/blog"
                }
              ]
            })
          }}
        />

        <section id="services" className="services-section" aria-label="Nasze usługi" itemScope itemType="https://schema.org/Service">
          <div className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
          {/* Декоративні елементи */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
              Nasze usługi
            </h2>
            <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto" itemProp="description">
              Wybierz rozwiązanie, które najlepiej pasuje do Twojego biznesu
            </p>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <Link href="/pl/chatbots" className="group relative block transform hover:-translate-y-4 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Rozwój botów Telegram" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Global" />
                  <meta itemProp="description" content="Profesjonalna realizacja chatbotów do automatyzacji komunikacji z klientami. Tworzymy skuteczne boty dla Telegram i innych platform." />
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
                        Rozwój chatbotów
                      </h3>
                      <p className="text-gray-700 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Tworzymy skuteczne chatboty do automatyzacji komunikacji
                        z Twoimi klientami
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Dowiedz się więcej</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-black/0 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
                
                <Link href="/pl/websites" className="group relative block transform hover:-translate-y-4 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Rozwój stron internetowych" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Global" />
                  <meta itemProp="description" content="Profesjonalna realizacja nowoczesnych i funkcjonalnych stron internetowych. Tworzymy strony z responsywnym designem i optymalizacją SEO." />
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
                        Rozwój stron internetowych
                      </h3>
                      <p className="text-gray-700 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Tworzymy nowoczesne i funkcjonalne strony internetowe
                        dla Twojego biznesu
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Dowiedz się więcej</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-black/0 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
                
                <Link href="/pl/parsers" className="group relative block transform hover:-translate-y-4 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="serviceType" content="Rozwój parserów" />
                  <meta itemProp="provider" content="TeleBots" />
                  <meta itemProp="areaServed" content="Global" />
                  <meta itemProp="description" content="Profesjonalna realizacja parserów do automatycznego zbierania i przetwarzania danych. Tworzymy skuteczne narzędzia do analizy rynku i monitoringu konkurencji." />
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
                        Rozwój parserów
                      </h3>
                      <p className="text-gray-700 transition-colors duration-300 leading-relaxed" itemProp="description">
                        Tworzymy narzędzia do automatycznego zbierania
                        i przetwarzania danych
                      </p>
                      <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                        <span className="font-medium">Dowiedz się więcej</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-black/0 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link 
                href="/pl/portfolio" 
                className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900 font-semibold text-lg transition-colors"
              >
                <span>Zobacz wszystkie projekty</span>
                <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
        </section>

          <Purchase />

        <section id="portfolio" className="portfolio-section" aria-label="Portfolio" itemScope itemType="https://schema.org/CollectionPage">
          <h2 className="visually-hidden">Nasze projekty</h2>
          <Portfolio />
        </section>

        <section id="lead-form" className="lead-form-section" aria-label="Zamów projekt" itemScope itemType="https://schema.org/ContactPage">
          <h2 className="visually-hidden">Zamów projekt development</h2>
          <LeadForm />
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