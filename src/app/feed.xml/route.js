export async function GET() {
  const baseUrl = 'https://telebots.site';
  const currentDate = new Date().toISOString();

  // Blog posts data
  const blogPosts = [
    {
      slug: 'your-first-telegram-bot',
      title: 'Як створити Telegram бота: покроковий гайд для початківців',
      description: 'Дізнайтеся, як створити свого першого Telegram бота за допомогою Python та бібліотеки python-telegram-bot. Покроковий гайд для початківців.',
      pubDate: '2024-12-01',
      category: 'Розробка ботів'
    },
    {
      slug: 'integrations',
      title: 'Інтеграція Telegram бота з іншими сервісами',
      description: 'Дізнайтеся, як інтегрувати Telegram бота з різними сервісами та API для розширення функціональності.',
      pubDate: '2024-11-15',
      category: 'Інтеграції'
    },
    {
      slug: 'developing',
      title: 'Як я розробляю телеграм боти?',
      description: 'Розповідь про процес розробки Telegram ботів, використані технології та методології.',
      pubDate: '2024-11-10',
      category: 'Розробка'
    },
    {
      slug: 'e-commerce',
      title: 'Інтернет магазини в телеграмі',
      description: 'Як створити та налаштувати ефективний інтернет-магазин в Telegram за допомогою ботів.',
      pubDate: '2024-12-15',
      category: 'E-commerce'
    },
    {
      slug: 'increase-sales',
      title: 'Як Telegram боти допомагають збільшити продажі та лояльність клієнтів',
      description: 'Практичні поради щодо використання Telegram ботів для збільшення продажів та покращення взаємодії з клієнтами.',
      pubDate: '2024-12-10',
      category: 'Продажі'
    },
    {
      slug: 'how-to-earn-money',
      title: 'Як заробляти з допомогою телеграм ботів?',
      description: 'Різні способи монетизації Telegram ботів та створення пасивного доходу.',
      pubDate: '2024-12-05',
      category: 'Монетизація'
    },
    {
      slug: 'ai-in-bots',
      title: 'Штучний інтелект в телеграм ботах',
      description: 'Як використовувати технології штучного інтелекту для покращення функціональності Telegram ботів.',
      pubDate: '2024-12-20',
      category: 'AI'
    },
    {
      slug: 'more-leads',
      title: 'Налаштування бота для збору лідів та збільшення конверсії',
      description: 'Практичні поради щодо налаштування Telegram бота для ефективного збору лідів.',
      pubDate: '2024-12-12',
      category: 'Маркетинг'
    },
    {
      slug: 'how-to-monetize-telegram-bot',
      title: 'Як монетизувати телеграм бота',
      description: 'Детальний огляд стратегій та методів монетизації Telegram ботів.',
      pubDate: '2024-12-08',
      category: 'Монетизація'
    },
    {
      slug: 'perspectives-in-ukraine',
      title: 'Перспективи телеграм ботів в Україні на 2025 рік',
      description: 'Аналіз тенденцій та прогнози розвитку ринку Telegram ботів в Україні.',
      pubDate: '2024-12-25',
      category: 'Тренди'
    }
  ];

  const rssItems = blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author>noreply@telebots.site (TeleBots Team)</author>
      <source url="${baseUrl}/feed.xml">TeleBots Blog</source>
    </item>
  `).join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:wfw="http://wellformedweb.org/CommentAPI/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
     xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title><![CDATA[TeleBots Blog - Розробка Телеграм ботів та автоматизація бізнесу]]></title>
    <description><![CDATA[Корисні статті про розробку Телеграм ботів, автоматизацію бізнесу, створення чат-ботів та веб-сайтів. Практичні поради та кейси від експертів TeleBots.]]></description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <language>uk-UA</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <generator>TeleBots RSS Generator</generator>
    <managingEditor>noreply@telebots.site (TeleBots Team)</managingEditor>
    <webMaster>noreply@telebots.site (TeleBots Team)</webMaster>
    <copyright>© 2024 TeleBots. Всі права захищені.</copyright>
    <category><![CDATA[Technology]]></category>
    <category><![CDATA[Business]]></category>
    <category><![CDATA[Automation]]></category>
    <image>
      <url>${baseUrl}/logologo.png</url>
      <title>TeleBots Blog</title>
      <link>${baseUrl}/blog</link>
      <width>512</width>
      <height>512</height>
      <description>TeleBots - Розробка Телеграм ботів та автоматизація бізнесу</description>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 