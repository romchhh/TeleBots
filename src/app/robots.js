export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/_next/',
          '/static/',
          '*.json$',
          '/search?*',
          '/404',
          '/500',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
        ],
        crawlDelay: 2,
      }
    ],
    sitemap: [
      'https://telebots.site/sitemap.xml',
      'https://telebots.site/sitemap-0.xml',
    ],
    host: 'https://telebots.site',
  };
} 