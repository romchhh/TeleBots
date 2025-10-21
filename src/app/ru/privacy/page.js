import PrivacyPage from '../../../ui/PrivacyPage'
import { ru } from '../../../translations';

export const metadata = {
  title: 'Политика конфиденциальности | TeleBots',
  description: 'Политика конфиденциальности TeleBots. Узнайте, как мы собираем, используем и защищаем вашу личную информацию.',
  keywords: [
    'политика конфиденциальности',
    'privacy policy',
    'защита данных',
    'личная информация',
    'конфиденциальность',
    'GDPR',
    'обработка данных'
  ],
  alternates: {
    canonical: 'https://telebots.site/ru/privacy',
    languages: {
      'uk': 'https://telebots.site/privacy',
      'en': 'https://telebots.site/en/privacy',
      'pl': 'https://telebots.site/pl/privacy',
      'ru': 'https://telebots.site/ru/privacy',
      'x-default': 'https://telebots.site/privacy',
    },
  },
  openGraph: {
    title: 'Политика конфиденциальности | TeleBots',
    description: 'Политика конфиденциальности TeleBots. Узнайте, как мы собираем, используем и защищаем вашу личную информацию.',
    url: 'https://telebots.site/ru/privacy',
    siteName: 'TeleBots',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function Page() {
  return <PrivacyPage />
}
