'use client';

import { useTranslation } from '../hooks/useTranslation';

export default function PrivacyPage() {
  const { t, language } = useTranslation();

  const privacyContent = {
    uk: {
      title: 'Політика конфіденційності',
      sections: [
        {
          title: '1. Загальні положення',
          content: 'Ця Політика конфіденційності визначає порядок обробки та захисту інформації про фізичних осіб, які користуються сервісами TeleBots.'
        },
        {
          title: '2. Збір інформації',
          content: 'Ми збираємо наступну інформацію:',
          items: [
            'Ім\'я та контактна інформація',
            'Дані про використання наших сервісів',
            'Технічна інформація про пристрої'
          ]
        },
        {
          title: '3. Використання інформації',
          content: 'Зібрана інформація використовується для:',
          items: [
            'Надання та покращення наших послуг',
            'Комунікації з користувачами',
            'Аналізу та оптимізації роботи сервісу'
          ]
        },
        {
          title: '4. Захист інформації',
          content: 'Ми вживаємо всіх необхідних заходів для захисту вашої персональної інформації від несанкціонованого доступу, зміни, розкриття або знищення.'
        },
        {
          title: '5. Права користувачів',
          content: 'Користувачі мають право:',
          items: [
            'Отримувати доступ до своїх персональних даних',
            'Вимагати виправлення неточних даних',
            'Вимагати видалення своїх даних',
            'Відкликати згоду на обробку персональних даних'
          ]
        },
        {
          title: '6. Контакти',
          content: 'З питань, пов\'язаних з політикою конфіденційності, ви можете зв\'язатися з нами через наші соціальні мережі або електронну пошту.'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      sections: [
        {
          title: '1. General Provisions',
          content: 'This Privacy Policy defines the procedure for processing and protecting information about individuals who use TeleBots services.'
        },
        {
          title: '2. Information Collection',
          content: 'We collect the following information:',
          items: [
            'Name and contact information',
            'Data about the use of our services',
            'Technical information about devices'
          ]
        },
        {
          title: '3. Use of Information',
          content: 'Collected information is used for:',
          items: [
            'Providing and improving our services',
            'Communication with users',
            'Analysis and optimization of service operation'
          ]
        },
        {
          title: '4. Information Protection',
          content: 'We take all necessary measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          title: '5. User Rights',
          content: 'Users have the right to:',
          items: [
            'Access their personal data',
            'Request correction of inaccurate data',
            'Request deletion of their data',
            'Withdraw consent for personal data processing'
          ]
        },
        {
          title: '6. Contacts',
          content: 'For questions related to privacy policy, you can contact us through our social networks or email.'
        }
      ]
    },
    ru: {
      title: 'Политика конфиденциальности',
      sections: [
        {
          title: '1. Общие положения',
          content: 'Эта Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах, которые пользуются услугами TeleBots.'
        },
        {
          title: '2. Сбор информации',
          content: 'Мы собираем следующую информацию:',
          items: [
            'Имя и контактная информация',
            'Данные об использовании наших услуг',
            'Техническая информация об устройствах'
          ]
        },
        {
          title: '3. Использование информации',
          content: 'Собранная информация используется для:',
          items: [
            'Предоставления и улучшения наших услуг',
            'Коммуникации с пользователями',
            'Анализа и оптимизации работы сервиса'
          ]
        },
        {
          title: '4. Защита информации',
          content: 'Мы принимаем все необходимые меры для защиты вашей персональной информации от несанкционированного доступа, изменения, раскрытия или уничтожения.'
        },
        {
          title: '5. Права пользователей',
          content: 'Пользователи имеют право:',
          items: [
            'Получать доступ к своим персональным данным',
            'Требовать исправления неточных данных',
            'Требовать удаления своих данных',
            'Отзывать согласие на обработку персональных данных'
          ]
        },
        {
          title: '6. Контакты',
          content: 'По вопросам, связанным с политикой конфиденциальности, вы можете связаться с нами через наши социальные сети или электронную почту.'
        }
      ]
    }
  };

  const currentContent = privacyContent[language] || privacyContent.uk;

  return (
    <div className="min-h-screen py-10 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">{currentContent.title}</h1>
      
      <div className="space-y-6">
        {currentContent.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-700 mb-2">{section.content}</p>
            {section.items && (
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
