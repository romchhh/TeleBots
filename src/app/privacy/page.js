import { useTranslation } from '../../hooks/useTranslation';

export const metadata = {
  title: 'Політика конфіденційності | TeleBots',
  description: 'Політика конфіденційності TeleBots щодо обробки персональних даних користувачів та захисту їх приватності.',
  alternates: {
    canonical: 'https://telebots.site/privacy',
    languages: {
      'uk': 'https://telebots.site/privacy',
      'en': 'https://telebots.site/en/privacy',
      'pl': 'https://telebots.site/pl/privacy',
      'ru': 'https://telebots.site/ru/privacy',
      'x-default': 'https://telebots.site/privacy',
    },
  },
  openGraph: {
    title: 'Політика конфіденційності | TeleBots',
    description: 'Політика конфіденційності TeleBots щодо обробки персональних даних користувачів та захисту їх приватності.',
    url: 'https://telebots.site/privacy',
    siteName: 'TeleBots',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Політика конфіденційності</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Загальні положення</h2>
          <p className="text-gray-700">
            Ця Політика конфіденційності визначає порядок обробки та захисту інформації про фізичних осіб, які користуються сервісами TeleBots.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Збір інформації</h2>
          <p className="text-gray-700">
            Ми збираємо наступну інформацію:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Ім'я та контактна інформація</li>
            <li>Дані про використання наших сервісів</li>
            <li>Технічна інформація про пристрої</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Використання інформації</h2>
          <p className="text-gray-700">
            Зібрана інформація використовується для:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Надання та покращення наших послуг</li>
            <li>Комунікації з користувачами</li>
            <li>Аналізу та оптимізації роботи сервісу</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Захист інформації</h2>
          <p className="text-gray-700">
            Ми вживаємо всіх необхідних заходів для захисту вашої персональної інформації від несанкціонованого доступу, зміни, розкриття або знищення.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Права користувачів</h2>
          <p className="text-gray-700">
            Користувачі мають право:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Отримувати доступ до своїх персональних даних</li>
            <li>Вимагати виправлення неточних даних</li>
            <li>Вимагати видалення своїх даних</li>
            <li>Відкликати згоду на обробку персональних даних</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Контакти</h2>
          <p className="text-gray-700">
            З питань, пов'язаних з політикою конфіденційності, ви можете зв'язатися з нами через наші соціальні мережі або електронну пошту.
          </p>
        </section>
      </div>
    </div>
  );
} 