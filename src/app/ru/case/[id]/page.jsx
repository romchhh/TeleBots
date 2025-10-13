import CasePage from '../../../../components/CasePage';
import { cases } from '../../../../translations/cases';
import { ru } from '../../../../translations';

export async function generateMetadata({ params }) {
  const caseData = cases.ru[params.id];
  const metadata = ru.metadata.cases[params.id];
  
  if (!caseData) {
    return {
      title: 'Кейс не найден | TeleBots',
      description: 'Запрашиваемый кейс не найден на нашем сайте.'
    };
  }

  // Используем метаданные из translations/index.js если доступны, иначе fallback на данные из cases.js
  const title = metadata?.title || `${caseData.title} | TeleBots - Разработка ботов и сайтов`;
  const description = metadata?.description || caseData.subtitle;
  const keywords = metadata?.keywords || (caseData.technologies ? caseData.technologies.join(', ') : '');
  const ogTitle = metadata?.og?.title || caseData.title;
  const ogDescription = metadata?.og?.description || caseData.subtitle;
  const ogImageAlt = metadata?.og?.imageAlt || caseData.title;
  const twitterTitle = metadata?.twitter?.title || caseData.title;
  const twitterDescription = metadata?.twitter?.description || caseData.subtitle;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://telebots.site/ru/case/${params.id}`,
      languages: {
        'uk': `https://telebots.site/case/${params.id}`,
        'en': `https://telebots.site/en/case/${params.id}`,
        'pl': `https://telebots.site/pl/case/${params.id}`,
        'ru': `https://telebots.site/ru/case/${params.id}`,
        'x-default': `https://telebots.site/case/${params.id}`,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://telebots.site/ru/case/${params.id}`,
      locale: 'ru_RU',
      images: [
        {
          url: caseData.mainImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: [caseData.mainImage],
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

  return caseIds.map((id) => ({
    id: id,
  }));
}
