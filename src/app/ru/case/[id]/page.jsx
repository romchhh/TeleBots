import CasePage from '../../../../components/CasePage';
import { cases } from '../../../../translations/cases';
import { ru } from '../../../../translations';
import { truncateTitle, truncateDescription, generateHreflangAlternates } from '../../../../utils/seo';

export async function generateMetadata({ params }) {
  const caseData = cases.ru[params.id];
  const metadata = ru.metadata.cases[params.id];
  
  if (!caseData) {
    return {
      title: truncateTitle('Кейс не найден | TeleBots'),
      description: truncateDescription('Запрашиваемый кейс не найден на нашем сайте.'),
      alternates: {
        canonical: `https://telebots.site/ru/case/${params.id}`,
        languages: {
          'uk-UA': `https://telebots.site/case/${params.id}`,
          'en-US': `https://telebots.site/en/case/${params.id}`,
          'pl-PL': `https://telebots.site/pl/case/${params.id}`,
          'ru-RU': `https://telebots.site/ru/case/${params.id}`,
          'x-default': `https://telebots.site/case/${params.id}`,
        },
      },
    };
  }

  // Используем метаданные из translations/index.js если доступны, иначе fallback на данные из cases.js
  const rawTitle = metadata?.title || `${caseData.title} | TeleBots`;
  const rawDescription = metadata?.description || caseData.subtitle;
  const title = truncateTitle(rawTitle);
  const description = truncateDescription(rawDescription);
  const keywords = metadata?.keywords || (caseData.technologies ? caseData.technologies.join(', ') : '');
  const ogTitle = truncateTitle(metadata?.og?.title || caseData.title);
  const ogDescription = truncateDescription(metadata?.og?.description || caseData.subtitle);
  const ogImageAlt = metadata?.og?.imageAlt || caseData.title;
  const twitterTitle = truncateTitle(metadata?.twitter?.title || caseData.title);
  const twitterDescription = truncateDescription(metadata?.twitter?.description || caseData.subtitle);

  return {
    title,
    description,
    keywords,
    alternates: generateHreflangAlternates(`/case/${params.id}`),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://telebots.site/ru/case/${params.id}`,
      locale: 'ru_RU',
      siteName: 'TeleBots',
      type: 'website',
      images: [
        {
          url: caseData.mainImage?.startsWith('http') ? caseData.mainImage : `https://telebots.site${caseData.mainImage}`,
          width: 1200,
          height: 630,
          alt: truncateDescription(ogImageAlt, 100),
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: [caseData.mainImage?.startsWith('http') ? caseData.mainImage : `https://telebots.site${caseData.mainImage}`],
    },
  };
}

export default function Case({ params }) {
  const caseData = cases.ru[params.id];
  
  // Додаємо структуровані дані для Google
  const jsonLd = caseData ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseData.title,
    description: caseData.subtitle,
    image: `https://telebots.site${caseData.mainImage}`,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'TeleBots',
      url: 'https://telebots.site'
    },
    publisher: {
      '@type': 'Organization',
      name: 'TeleBots',
      logo: {
        '@type': 'ImageObject',
        url: 'https://telebots.site/logologo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://telebots.site/ru/case/${params.id}`
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Главная',
          item: 'https://telebots.site/ru'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Портфолио',
          item: 'https://telebots.site/ru/portfolio'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: caseData.title,
          item: `https://telebots.site/ru/case/${params.id}`
        }
      ]
    },
    inLanguage: 'ru'
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CasePage caseId={params.id} />
    </>
  );
}

export async function generateStaticParams() {
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
    'carsrent',
    'normalnoauto',
    'salenicedevice',
    'kvartyrant',
    'flixmarket',
    'newlineschool',
    'alexandraaleksiuk',
    'offer-dpuchkov',
    'vsk-technology',
    'v12-auto',
    'tripvibe',
    'tron-energy-bot',
    'chars-kyiv',
    'style-chat-vakhula'
  ];

  return caseIds.map((id) => ({
    id: id,
  }));
}
