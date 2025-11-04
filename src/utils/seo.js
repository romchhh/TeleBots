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
      'uk': `${baseUrl}${cleanPath}`,
      'en': `${baseUrl}/en${cleanPath}`,
      'ru': `${baseUrl}/ru${cleanPath}`,
      'pl': `${baseUrl}/pl${cleanPath}`,
      'x-default': `${baseUrl}${cleanPath}`,
    },
  };
}

