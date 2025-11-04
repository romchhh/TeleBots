/**
 * SEO utility functions for truncating and formatting metadata
 */

/**
 * Truncate text to specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 160) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Truncate title to 60 characters (SEO best practice)
 * @param {string} title - Title to truncate
 * @returns {string} Truncated title
 */
export function truncateTitle(title) {
  return truncateText(title, 60);
}

/**
 * Truncate description to 160 characters (SEO best practice)
 * @param {string} description - Description to truncate
 * @returns {string} Truncated description
 */
export function truncateDescription(description) {
  return truncateText(description, 160);
}

/**
 * Get language code from pathname
 * @param {string} pathname - URL pathname
 * @returns {string} Language code (uk, en, ru, pl)
 */
export function getLanguageFromPath(pathname) {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/ru')) return 'ru';
  if (pathname.startsWith('/pl')) return 'pl';
  return 'uk';
}

/**
 * Get locale code for metadata (e.g., uk_UA, en_US)
 * @param {string} lang - Language code
 * @returns {string} Locale code
 */
export function getLocaleCode(lang) {
  const localeMap = {
    'uk': 'uk_UA',
    'en': 'en_US',
    'ru': 'ru_RU',
    'pl': 'pl_PL'
  };
  return localeMap[lang] || 'uk_UA';
}

/**
 * Generate hreflang alternates for a page
 * @param {string} basePath - Base path without language prefix (e.g., '/case/dr-tolstikova-bot')
 * @returns {object} Alternates object for Next.js metadata
 */
export function generateHreflangAlternates(basePath) {
  const baseUrl = 'https://telebots.site';
  
  // Remove leading slash if present
  const cleanPath = basePath.startsWith('/') ? basePath : `/${basePath}`;
  
  return {
    canonical: `${baseUrl}${cleanPath}`,
    languages: {
      'uk-UA': `${baseUrl}${cleanPath}`,
      'en-US': `${baseUrl}/en${cleanPath}`,
      'ru-RU': `${baseUrl}/ru${cleanPath}`,
      'pl-PL': `${baseUrl}/pl${cleanPath}`,
      'x-default': `${baseUrl}${cleanPath}`,
    },
  };
}

/**
 * Generate BreadcrumbList schema for a page
 * @param {string} path - Current page path (e.g., '/chatbots', '/en/chatbots')
 * @param {string} pageName - Current page name for display
 * @param {string} language - Language code ('uk', 'en', 'ru', 'pl')
 * @returns {object} BreadcrumbList schema object
 */
export function generateBreadcrumbs(path, pageName, language = 'uk') {
  const baseUrl = 'https://telebots.site';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  const translations = {
    uk: {
      home: 'Головна',
      portfolio: 'Портфоліо',
      chatbots: 'Чат-боти',
      websites: 'Веб-сайти',
      parsers: 'Парсери',
      prices: 'Ціни',
      blog: 'Блог'
    },
    en: {
      home: 'Home',
      portfolio: 'Portfolio',
      chatbots: 'Chatbots',
      websites: 'Websites',
      parsers: 'Parsers',
      prices: 'Prices',
      blog: 'Blog'
    },
    ru: {
      home: 'Главная',
      portfolio: 'Портфолио',
      chatbots: 'Чат-боты',
      websites: 'Веб-сайты',
      parsers: 'Парсеры',
      prices: 'Цены',
      blog: 'Блог'
    },
    pl: {
      home: 'Główna',
      portfolio: 'Portfolio',
      chatbots: 'Chatboty',
      websites: 'Strony internetowe',
      parsers: 'Parsery',
      prices: 'Ceny',
      blog: 'Blog'
    }
  };
  
  const t = translations[language] || translations.uk;
  const basePath = language === 'uk' ? '' : `/${language}`;
  
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: t.home,
      item: `${baseUrl}${basePath}`
    }
  ];
  
  // Add service-specific breadcrumbs
  if (cleanPath.includes('/chatbots')) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: t.chatbots,
      item: `${baseUrl}${basePath}/chatbots`
    });
  } else if (cleanPath.includes('/websites')) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: t.websites,
      item: `${baseUrl}${basePath}/websites`
    });
  } else if (cleanPath.includes('/parsers')) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: t.parsers,
      item: `${baseUrl}${basePath}/parsers`
    });
  } else if (cleanPath.includes('/prices')) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: t.prices,
      item: `${baseUrl}${basePath}/prices`
    });
  } else if (cleanPath.includes('/portfolio')) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: t.portfolio,
      item: `${baseUrl}${basePath}/portfolio`
    });
  } else if (cleanPath.includes('/blog')) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: t.blog,
      item: `${baseUrl}${basePath}/blog`
    });
  }
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
}

/**
 * Generate Service schema with ratings
 * @param {string} serviceName - Service name
 * @param {string} serviceDescription - Service description
 * @param {string} serviceUrl - Service URL
 * @param {string} language - Language code
 * @returns {object} Service schema object
 */
export function generateServiceSchema(serviceName, serviceDescription, serviceUrl, language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: 'TeleBots',
      url: 'https://telebots.site',
      logo: 'https://telebots.site/logologo.png'
    },
    areaServed: {
      '@type': 'Country',
      name: language === 'uk' ? 'Україна' : language === 'ru' ? 'Украина' : language === 'pl' ? 'Ukraina' : 'Ukraine'
    },
    serviceType: serviceName,
    url: serviceUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: language === 'uk' ? 'Олександр К.' : language === 'ru' ? 'Александр К.' : language === 'pl' ? 'Aleksander K.' : 'Alexander K.'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: language === 'uk' 
          ? 'Відмінна робота! Швидка розробка, професійний підхід.' 
          : language === 'ru'
          ? 'Отличная работа! Быстрая разработка, профессиональный подход.'
          : language === 'pl'
          ? 'Świetna praca! Szybki rozwój, profesjonalne podejście.'
          : 'Excellent work! Fast development, professional approach.'
      }
    ]
  };
}

