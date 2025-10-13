export default function sitemap() {
  const baseUrl = 'https://telebots.site';
  const currentDate = new Date().toISOString();

  // Основні сторінки сайту з покращеними пріоритетами
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/chatbots`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/chatbots`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/chatbots`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/websites`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/websites`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/websites`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/parsers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/parsers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/parsers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prices`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/prices`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/prices`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ru/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Статті блогу з покращеними метаданими
  const blogPosts = [
    { slug: 'your-first-telegram-bot', priority: 0.7, lastMod: '2024-12-01' },
    { slug: 'integrations', priority: 0.7, lastMod: '2024-11-15' },
    { slug: 'developing', priority: 0.7, lastMod: '2024-11-10' },
    { slug: 'magnetto', priority: 0.7, lastMod: '2024-10-25' },
    { slug: 'e-commerce', priority: 0.8, lastMod: '2024-12-15' },
    { slug: 'sites', priority: 0.7, lastMod: '2024-11-20' },
    { slug: 'increase-sales', priority: 0.8, lastMod: '2024-12-10' },
    { slug: 'feedback', priority: 0.6, lastMod: '2024-10-30' },
    { slug: 'how-to-earn-money', priority: 0.8, lastMod: '2024-12-05' },
    { slug: 'security-telegram-bots', priority: 0.7, lastMod: '2024-11-25' },
    { slug: 'ai-in-bots', priority: 0.9, lastMod: '2024-12-20' },
    { slug: 'more-leads', priority: 0.8, lastMod: '2024-12-12' },
    { slug: 'how-to-monetize-telegram-bot', priority: 0.8, lastMod: '2024-12-08' },
    { slug: 'parsers_telebots', priority: 0.7, lastMod: '2024-11-18' },
    { slug: 'perspectives-in-ukraine', priority: 0.9, lastMod: '2024-12-25' },
  ];

  // Українські статті блогу
  const ukrainianBlogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastMod || currentDate,
    changeFrequency: 'monthly',
    priority: post.priority,
  }));

  // Англійські статті блогу
  const englishBlogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: post.lastMod || currentDate,
    changeFrequency: 'monthly',
    priority: post.priority,
  }));

  // Російські статті блогу
  const russianBlogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/ru/blog/${post.slug}`,
    lastModified: post.lastMod || currentDate,
    changeFrequency: 'monthly',
    priority: post.priority,
  }));

  // Case studies (portfolio items)
  const caseIds = [
    'dr-tolstikova-bot',
    'nieznany-piekarz',
    'nutritionist-bot',
    'cats-fresh',
    'space-traffic',
    'applum-bot',
    'easyplay',
    'samurai-sushi',
    'ukr-bus',
    'webinar-bot',
    'electromotors',
    'cosmy',
    'brandshop',
    'carsrent',
    'normalnoauto',
    'salenicedevice',
    'kvartyrant',
    'flixmarket',
    'gtrading',
    'newlineschool',
    'xpaid',
    'alexandraaleksiuk',
    'offer-dpuchkov',
    'vsk-technology',
    'v12-auto',
    'tripvibe'
  ];

  // Portfolio page routes
  const portfolioRoutes = [
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pl/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Українські кейси
  const ukrainianCaseRoutes = caseIds.map((caseId) => ({
    url: `${baseUrl}/case/${caseId}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Англійські кейси
  const englishCaseRoutes = caseIds.map((caseId) => ({
    url: `${baseUrl}/en/case/${caseId}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Польські кейси
  const polishCaseRoutes = caseIds.map((caseId) => ({
    url: `${baseUrl}/pl/case/${caseId}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Російські кейси
  const russianCaseRoutes = caseIds.map((caseId) => ({
    url: `${baseUrl}/ru/case/${caseId}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...routes, 
    ...ukrainianBlogRoutes, 
    ...englishBlogRoutes, 
    ...russianBlogRoutes,
    ...portfolioRoutes,
    ...ukrainianCaseRoutes,
    ...englishCaseRoutes,
    ...polishCaseRoutes,
    ...russianCaseRoutes
  ];
} 