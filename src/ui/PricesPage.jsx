'use client';

import React, { useMemo, useState } from 'react';
import Button from './Button';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
import './PricesPage.css';
import LeadForm from './LeadForm';
import LeadModal from '../components/LeadModal';
import ServiceHero from './ServiceHero';
import { FaRocket, FaUsers, FaCode, FaClock, FaChartLine, FaRobot, FaShoppingCart, FaCogs, FaGlobe, FaMobile, FaDatabase, FaLock, FaFileAlt, FaTools, FaServer, FaDesktop, FaShoppingBag, FaChartBar, FaSync, FaCreditCard, FaUserCog, FaComments, FaLightbulb, FaPhoneAlt, FaArrowRight, FaBolt, FaShieldAlt } from 'react-icons/fa';
import { BiSupport, BiCustomize, BiAnalyse } from 'react-icons/bi';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
import Statistics from './Statistics';
import { useLanguage } from '../context/LanguageContext';

// Додаємо стилі для перевизначення Bootstrap
const styles = `
  .nav-link, 
  .navbar-nav,
  .navbar-brand,
  .header,
  .header * {
    font-family: var(--font-montserrat) !important;
  }
`;

const PRICE_PLANS = [
  {
    title: 'Lite',
    description: 'Для малого бізнесу: автоматизуйте відповіді на популярні запитання та оптимізуйте час',
    price: '1000₴',
    originalPrice: '1500₴',
    features: [
      'Розробка бота під ваші потреби',
      'Одне оновлення протягом місяця',
      '24/7 моніторинг сервера',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Замовити зараз'
  },
  {
    title: 'Standart',
    description: 'Оптимальний вибір для середнього бізнесу з розширеним функціоналом',
    price: '3000₴',
    originalPrice: '4000₴',
    features: [
      'Розробка індивідуального сценарію',
      'Форма для отримання заявок',
      'Функція зв\'язку з менеджером',
      'Три оновлення протягом місяця',
      '24/7 моніторинг сервера',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Замовити вигідно',
    recommended: true
  },
  {
    title: 'Premium',
    description: 'Комплексне рішення для великого бізнесу з повною інтеграцією',
    price: '6000₴',
    originalPrice: '8000₴',
    features: [
      'Розробка складного сценарію',
      'Інтеграція з базами даних',
      'Функція зворотнього зв\'язку',
      'Форма заявок для клієнтів',
      'Три оновлення протягом двох місяців',
      'Моніторинг сервера 24/7',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Замовити найкраще'
  }
];

// Російські версії планів
const PRICE_PLANS_RU = [
  {
    title: 'Lite',
    description: 'Для малого бизнеса: автоматизируйте ответы на популярные вопросы и оптимизируйте время',
    price: '1000₴',
    originalPrice: '1500₴',
    features: [
      'Разработка бота под ваши потребности',
      'Одно обновление в течение месяца',
      '24/7 мониторинг сервера',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Заказать сейчас'
  },
  {
    title: 'Standart',
    description: 'Оптимальный выбор для среднего бизнеса с расширенным функционалом',
    price: '3000₴',
    originalPrice: '4000₴',
    features: [
      'Разработка индивидуального сценария',
      'Форма для получения заявок',
      'Функция связи с менеджером',
      'Три обновления в течение месяца',
      '24/7 мониторинг сервера',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Заказать выгодно',
    recommended: true
  },
  {
    title: 'Premium',
    description: 'Комплексное решение для крупного бизнеса с полной интеграцией',
    price: '6000₴',
    originalPrice: '8000₴',
    features: [
      'Разработка сложного сценария',
      'Интеграция с базами данных',
      'Функция обратной связи',
      'Форма заявок для клиентов',
      'Три обновления в течение двух месяцев',
      'Мониторинг сервера 24/7',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Заказать лучшее'
  }
];

// Польські версії планів
const PRICE_PLANS_PL = [
  {
    title: 'Lite',
    description: 'Dla małych firm: automatyzuj odpowiedzi na popularne pytania i optymalizuj czas',
    price: '1000₴',
    originalPrice: '1500₴',
    features: [
      'Tworzenie bota dostosowanego do Twoich potrzeb',
      'Jedna aktualizacja w miesiącu',
      'Monitoring serwera 24/7',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Zamów teraz'
  },
  {
    title: 'Standard',
    description: 'Optymalny wybór dla średnich firm z rozszerzoną funkcjonalnością',
    price: '3000₴',
    originalPrice: '4000₴',
    features: [
      'Tworzenie indywidualnego scenariusza',
      'Formularz do otrzymywania zgłoszeń',
      'Funkcja połączenia z menedżerem',
      'Trzy aktualizacje w miesiącu',
      'Monitoring serwera 24/7',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Zamów korzystnie',
    recommended: true
  },
  {
    title: 'Premium',
    description: 'Kompleksowe rozwiązanie dla dużych firm z pełną integracją',
    price: '6000₴',
    originalPrice: '8000₴',
    features: [
      'Tworzenie złożonego scenariusza',
      'Integracja z bazami danych',
      'Funkcja zwrotnej informacji',
      'Formularz zgłoszeń dla klientów',
      'Trzy aktualizacje w ciągu dwóch miesięcy',
      'Monitoring serwera 24/7',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Zamów najlepsze'
  }
];

// Англійські версії планів
const PRICE_PLANS_EN = [
  {
    title: 'Lite',
    description: 'For small businesses: automate responses to popular questions and optimize time',
    price: '1000₴',
    originalPrice: '1500₴',
    features: [
      'Bot development tailored to your needs',
      'One update during the month',
      '24/7 server monitoring',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Order now'
  },
  {
    title: 'Standard',
    description: 'The optimal choice for medium-sized businesses with extended functionality',
    price: '3000₴',
    originalPrice: '4000₴',
    features: [
      'Development of individual scenario',
      'Form for receiving applications',
      'Function to connect with a manager',
      'Three updates during the month',
      '24/7 server monitoring',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Best value',
    recommended: true
  },
  {
    title: 'Premium',
    description: 'Comprehensive solution for large businesses with full integration',
    price: '6000₴',
    originalPrice: '8000₴',
    features: [
      'Development of complex scenario',
      'Integration with databases',
      'Feedback function',
      'Application form for clients',
      'Three updates within two months',
      'Server monitoring 24/7',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Premium option'
  }
];





const PRICE_PLAN_WEBSITE = [
  {
    title: 'Landing Page',
    description: 'Ідеальне рішення для презентації продукту чи послуги',
    price: '4000₴',
    originalPrice: '10000₴',
    features: [
      'Унікальний дизайн',
      'Адаптивна верстка',
      'SEO-оптимізація',
      'Форма зворотного зв\'язку',
      'SSL-сертифікат',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Замовити зараз'
  },
  {
    title: 'Корпоративний сайт',
    description: 'Повноцінний сайт для вашого бізнесу з усіма необхідними функціями',
    price: '10000₴',
    originalPrice: '18000₴',
    features: [
      'Індивідуальний дизайн',
      'До 10 сторінок',
      'Адаптивна верстка',
      'SEO-оптимізація',
      'Система управління контентом',
      'Інтеграція з CRM',
      'SSL-сертифікат',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Замовити вигідно',
    recommended: true
  },
  {
    title: 'Інтернет-магазин',
    description: 'Повноцінний онлайн-магазин з усіма необхідними функціями',
    price: '20000₴',
    originalPrice: '30000₴',
    features: [
      'Індивідуальний дизайн',
      'Каталог товарів',
      'Система управління замовленнями',
      'Інтеграція з платіжними системами',
      'Особистий кабінет',
      'SEO-оптимізація',
      'Інтеграція з CRM',
      'SSL-сертифікат',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Замовити найкраще'
  }
];

// Російські версії планів для веб-сайтів
const PRICE_PLAN_WEBSITE_RU = [
  {
    title: 'Landing Page',
    description: 'Идеальное решение для презентации продукта или услуги',
    price: '4000₴',
    originalPrice: '10000₴',
    features: [
      'Уникальный дизайн',
      'Адаптивная верстка',
      'SEO-оптимизация',
      'Форма обратной связи',
      'SSL-сертификат',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Заказать сейчас'
  },
  {
    title: 'Корпоративный сайт',
    description: 'Полноценный сайт для вашего бизнеса со всеми необходимыми функциями',
    price: '10000₴',
    originalPrice: '18000₴',
    features: [
      'Индивидуальный дизайн',
      'До 10 страниц',
      'Адаптивная верстка',
      'SEO-оптимизация',
      'Система управления контентом',
      'Интеграция с CRM',
      'SSL-сертификат',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Заказать выгодно',
    recommended: true
  },
  {
    title: 'Интернет-магазин',
    description: 'Полноценный онлайн-магазин со всеми необходимыми функциями',
    price: '20000₴',
    originalPrice: '30000₴',
    features: [
      'Индивидуальный дизайн',
      'Каталог товаров',
      'Система управления заказами',
      'Интеграция с платежными системами',
      'Личный кабинет',
      'SEO-оптимизация',
      'Интеграция с CRM',
      'SSL-сертификат',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Заказать лучшее'
  }
];

// Польські версії планів для веб-сайтів
const PRICE_PLAN_WEBSITE_PL = [
  {
    title: 'Landing Page',
    description: 'Idealne rozwiązanie do prezentacji produktu lub usługi',
    price: '4000₴',
    originalPrice: '10000₴',
    features: [
      'Unikalny design',
      'Responsywny layout',
      'Optymalizacja SEO',
      'Formularz kontaktowy',
      'Certyfikat SSL',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Zamów teraz'
  },
  {
    title: 'Strona korporacyjna',
    description: 'Pełnoprawna strona internetowa dla Twojej firmy ze wszystkimi niezbędnymi funkcjami',
    price: '10000₴',
    originalPrice: '18000₴',
    features: [
      'Indywidualny design',
      'Do 10 stron',
      'Responsywny layout',
      'Optymalizacja SEO',
      'System zarządzania treścią',
      'Integracja z CRM',
      'Certyfikat SSL',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Zamów korzystnie',
    recommended: true
  },
  {
    title: 'Sklep internetowy',
    description: 'Pełnoprawny sklep internetowy ze wszystkimi niezbędnymi funkcjami',
    price: '20000₴',
    originalPrice: '30000₴',
    features: [
      'Indywidualny design',
      'Katalog produktów',
      'System zarządzania zamówieniami',
      'Integracja z systemami płatności',
      'Konto osobiste',
      'Optymalizacja SEO',
      'Integracja z CRM',
      'Certyfikat SSL',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Zamów najlepsze'
  }
];

// Англійські версії планів
const PRICE_PLAN_WEBSITE_EN = [
  {
    title: 'Landing Page',
    description: 'The ideal solution for presenting a product or service',
    price: '4000₴',
    originalPrice: '10000₴',
    features: [
      'Unique design',
      'Responsive layout',
      'SEO optimization',
      'Contact form',
      'SSL certificate',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Order now'
  },
  {
    title: 'Corporate Website',
    description: 'A full-featured website for your business with all necessary functions',
    price: '10000₴',
    originalPrice: '18000₴',
    features: [
      'Custom design',
      'Up to 10 pages',
      'Responsive layout',
      'SEO optimization',
      'Content management system',
      'CRM integration',
      'SSL certificate',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Best value',
    recommended: true
  },
  {
    title: 'E-commerce',
    description: 'A full-fledged online store with all necessary functions',
    price: '20000₴',
    originalPrice: '30000₴',
    features: [
      'Custom design',
      'Product catalog',
      'Order management system',
      'Payment systems integration',
      'Personal account',
      'SEO optimization',
      'CRM integration',
      'SSL certificate',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Premium option'
  }
];


const PRICE_PLAN_PARSER = [
  {
    title: 'Базовий парсер',
    description: 'Ідеальне рішення для збору даних з одного джерела',
    price: '5000₴',
    originalPrice: '7000₴',
    features: [
      'Збір даних з одного сайту',
      'Базова обробка даних',
      'Експорт в CSV/Excel',
      'Базова підтримка',
      'Оновлення раз на місяць',
      'Хостинг на 6 місяців',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Замовити зараз'
  },
  {
    title: 'Професійний парсер',
    description: 'Оптимальне рішення для регулярного збору даних з декількох джерел',
    price: '12000₴',
    originalPrice: '15000₴',
    features: [
      'Збір даних з декількох сайтів',
      'Розширена обробка даних',
      'Експорт в різні формати',
      'API для доступу до даних',
      'Щотижневі оновлення',
      'Хостинг на 1 рік',
      'Технічна підтримка',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Замовити вигідно',
    recommended: true
  },
  {
    title: 'Корпоративний парсер',
    description: 'Комплексне рішення для великих проектів з розширеними можливостями',
    price: '25000₴',
    originalPrice: '30000₴',
    features: [
      'Необмежена кількість джерел',
      'Складна обробка даних',
      'Інтеграція з CRM/ERP',
      'Власний API',
      'Щоденні оновлення',
      'Хостинг на 2 роки',
      'Пріоритетна підтримка 24/7',
      'Індивідуальні доробки',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Замовити найкраще'
  }
];

// Російські версії планів для парсерів
const PRICE_PLAN_PARSER_RU = [
  {
    title: 'Базовый парсер',
    description: 'Идеальное решение для сбора данных из одного источника',
    price: '5000₴',
    originalPrice: '7000₴',
    features: [
      'Сбор данных с одного сайта',
      'Базовая обработка данных',
      'Экспорт в CSV/Excel',
      'Базовая поддержка',
      'Обновление раз в месяц',
      'Хостинг на 6 месяцев',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Заказать сейчас'
  },
  {
    title: 'Профессиональный парсер',
    description: 'Оптимальное решение для регулярного сбора данных из нескольких источников',
    price: '12000₴',
    originalPrice: '15000₴',
    features: [
      'Сбор данных с нескольких сайтов',
      'Расширенная обработка данных',
      'Экспорт в различные форматы',
      'API для доступа к данным',
      'Еженедельные обновления',
      'Хостинг на 1 год',
      'Техническая поддержка',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Заказать выгодно',
    recommended: true
  },
  {
    title: 'Корпоративный парсер',
    description: 'Комплексное решение для крупных проектов с расширенными возможностями',
    price: '25000₴',
    originalPrice: '30000₴',
    features: [
      'Неограниченное количество источников',
      'Сложная обработка данных',
      'Интеграция с CRM/ERP',
      'Собственный API',
      'Ежедневные обновления',
      'Хостинг на 2 года',
      'Приоритетная поддержка 24/7',
      'Индивидуальные доработки',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Заказать лучшее'
  }
];

// Польські версії планів для парсерів
const PRICE_PLAN_PARSER_PL = [
  {
    title: 'Podstawowy parser',
    description: 'Idealne rozwiązanie do zbierania danych z jednego źródła',
    price: '5000₴',
    originalPrice: '7000₴',
    features: [
      'Zbieranie danych z jednej strony',
      'Podstawowe przetwarzanie danych',
      'Eksport do CSV/Excel',
      'Podstawowe wsparcie',
      'Aktualizacje raz w miesiącu',
      'Hosting na 6 miesięcy',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Zamów teraz'
  },
  {
    title: 'Parser profesjonalny',
    description: 'Optymalne rozwiązanie do regularnego zbierania danych z wielu źródeł',
    price: '12000₴',
    originalPrice: '15000₴',
    features: [
      'Zbieranie danych z wielu stron',
      'Zaawansowane przetwarzanie danych',
      'Eksport do różnych formatów',
      'API do dostępu do danych',
      'Tygodniowe aktualizacje',
      'Hosting na 1 rok',
      'Wsparcie techniczne',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Zamów korzystnie',
    recommended: true
  },
  {
    title: 'Parser korporacyjny',
    description: 'Kompleksowe rozwiązanie dla dużych projektów z zaawansowanymi możliwościami',
    price: '25000₴',
    originalPrice: '30000₴',
    features: [
      'Nieograniczona liczba źródeł',
      'Złożone przetwarzanie danych',
      'Integracja z CRM/ERP',
      'Własne API',
      'Codzienne aktualizacje',
      'Hosting na 2 lata',
      'Priorytetowe wsparcie 24/7',
      'Indywidualne modyfikacje',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Zamów najlepsze'
  }
];

// Англійські версії планів
const PRICE_PLAN_PARSER_EN = [
  {
    title: 'Basic Parser',
    description: 'The ideal solution for collecting data from a single source',
    price: '5000₴',
    originalPrice: '7000₴',
    features: [
      'Data collection from one site',
      'Basic data processing',
      'Export to CSV/Excel',
      'Basic support',
      'Monthly updates',
      'Hosting for 6 months',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Order now'
  },
  {
    title: 'Professional Parser',
    description: 'The optimal solution for regular data collection from multiple sources',
    price: '12000₴',
    originalPrice: '15000₴',
    features: [
      'Data collection from multiple sites',
      'Advanced data processing',
      'Export to various formats',
      'API for data access',
      'Weekly updates',
      'Hosting for 1 year',
      'Technical support',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-green-500 to-green-600',
    buttonText: 'Best value',
    recommended: true
  },
  {
    title: 'Enterprise Parser',
    description: 'A comprehensive solution for large projects with advanced capabilities',
    price: '25000₴',
    originalPrice: '30000₴',
    features: [
      'Unlimited number of sources',
      'Complex data processing',
      'Integration with CRM/ERP',
      'Custom API',
      'Daily updates',
      'Hosting for 2 years',
      'Priority support 24/7',
      'Custom modifications',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-purple-500 to-purple-600',
    buttonText: 'Premium option'
  }
];


const FAQS = [
  {
    question: 'Як довго триває розробка бота?',
    answer: 'Час розробки залежить від складності проекту, але в середньому це займає від 1 до 3 тижнів.',
  },
  {
    question: 'Чи можна інтегрувати бота з моєю CRM системою?',
    answer: 'Так, ми можемо інтегрувати бота з вашою CRM системою для більш ефективного управління клієнтами.',
  },
  {
    question: 'Чи надаєте ви підтримку після запуску бота?',
    answer: 'Так, ми надаємо 24/7 підтримку та моніторинг сервера для забезпечення безперебійної роботи бота.',
  },
  {
    question: 'Які мови підтримує бот?',
    answer: 'Бот може підтримувати будь-яку мову, яку ви оберете. Ми можемо налаштувати бота для роботи з кількома мовами.',
  },
  {
    question: 'Чи можна змінити дизайн бота?',
    answer: 'Так, ми можемо створити унікальний дизайн для вашого бота, включаючи аватарки, супутні зображення та брендування.',
  },
  {
    question: 'Які платежні системи підтримує бот?',
    answer: 'Бот може інтегруватися з різними платежними системами, такими як PayPal, Stripe, LiqPay та іншими.',
  },
  {
    question: 'Чи можна додати функцію онлайн-консультацій?',
    answer: 'Так, ми можемо додати функцію онлайн-консультацій, що дозволить вашим клієнтам зв\'язуватися з вами в режимі реального часу.',
  },
  {
    question: 'Які гарантії ви надаєте?',
    answer: 'Ми надаємо гарантію на наші послуги та підтримку протягом 6 місяців після запуску бота.',
  },
  {
    question: 'Чи можна інтегрувати бота з соціальними мережами?',
    answer: 'Так, ми можемо інтегрувати бота з різними соціальними мережами, такими як Facebook, Instagram, Twitter та іншими.',
  },
  {
    question: 'Які функції можна додати до бота?',
    answer: 'Ви можете додати різні функції, такі як запис на послуги, відстеження замовлень, опитування клієнтів та інше.',
  },
  {
    question: 'Чи можна налаштувати бота для роботи в різних часових зонах?',
    answer: 'Так, ми можемо налаштувати бота для роботи в різних часових зонах, щоб він міг обслуговувати клієнтів з різних частин світу.',
  },
  {
    question: 'Які технології ви використовуєте для розробки ботів?',
    answer: 'Ми використовуємо сучасні технології, такі як Python, Node.js, та різні фреймворки для розробки ботів.',
  },
  {
    question: 'Чи можна додати функцію відстеження замовлень?',
    answer: 'Так, ми можемо додати функцію відстеження замовлень, що дозволить вашим клієнтам відстежувати статус своїх замовлень.',
  },
  {
    question: 'Чи можна інтегрувати бота з моєю системою управління замовленнями?',
    answer: 'Так, ми можемо інтегрувати бота з вашою системою управління замовленнями для більш ефективного управління замовленнями.',
  },
  {
    question: 'Чи можна налаштувати бота для роботи з кількома мовами?',
    answer: 'Так, ми можемо налаштувати бота для роботи з кількома мовами, що дозволить вам обслуговувати клієнтів з різних країн.',
  },
];

// Російська версія FAQ
const FAQS_RU = [
  {
    question: 'Сколько времени занимает разработка бота?',
    answer: 'Время разработки зависит от сложности проекта, но в среднем это занимает от 1 до 3 недель.',
  },
  {
    question: 'Можно ли интегрировать бота с моей CRM системой?',
    answer: 'Да, мы можем интегрировать бота с вашей CRM системой для более эффективного управления клиентами.',
  },
  {
    question: 'Предоставляете ли вы поддержку после запуска бота?',
    answer: 'Да, мы предоставляем 24/7 поддержку и мониторинг сервера для обеспечения бесперебойной работы бота.',
  },
  {
    question: 'Какие языки поддерживает бот?',
    answer: 'Бот может поддерживать любой язык, который вы выберете. Мы можем настроить бота для работы с несколькими языками.',
  },
  {
    question: 'Можно ли изменить дизайн бота?',
    answer: 'Да, мы можем создать уникальный дизайн для вашего бота, включая аватарки, сопровождающие изображения и брендинг.',
  },
  {
    question: 'Какие платежные системы поддерживает бот?',
    answer: 'Бот может интегрироваться с различными платежными системами, такими как PayPal, Stripe, LiqPay и другими.',
  },
  {
    question: 'Можно ли добавить функцию онлайн-консультаций?',
    answer: 'Да, мы можем добавить функцию онлайн-консультаций, которая позволит вашим клиентам связываться с вами в режиме реального времени.',
  },
  {
    question: 'Какие гарантии вы предоставляете?',
    answer: 'Мы предоставляем гарантию на наши услуги и поддержку в течение 6 месяцев после запуска бота.',
  },
  {
    question: 'Можно ли интегрировать бота с социальными сетями?',
    answer: 'Да, мы можем интегрировать бота с различными социальными сетями, такими как Facebook, Instagram, Twitter и другими.',
  },
  {
    question: 'Какие функции можно добавить к боту?',
    answer: 'Вы можете добавить различные функции, такие как запись на услуги, отслеживание заказов, опросы клиентов и другое.',
  },
  {
    question: 'Можно ли настроить бота для работы в разных часовых поясах?',
    answer: 'Да, мы можем настроить бота для работы в разных часовых поясах, чтобы он мог обслуживать клиентов из разных частей мира.',
  },
  {
    question: 'Какие технологии вы используете для разработки ботов?',
    answer: 'Мы используем современные технологии, такие как Python, Node.js, и различные фреймворки для разработки ботов.',
  },
  {
    question: 'Можно ли добавить функцию отслеживания заказов?',
    answer: 'Да, мы можем добавить функцию отслеживания заказов, которая позволит вашим клиентам отслеживать статус своих заказов.',
  },
  {
    question: 'Можно ли интегрировать бота с моей системой управления заказами?',
    answer: 'Да, мы можем интегрировать бота с вашей системой управления заказами для более эффективного управления заказами.',
  },
  {
    question: 'Можно ли настроить бота для работы с несколькими языками?',
    answer: 'Да, мы можем настроить бота для работы с несколькими языками, что позволит вам обслуживать клиентов из разных стран.',
  },
];

// Польська версія FAQ
const FAQS_PL = [
  {
    question: 'Jak długo trwa tworzenie bota?',
    answer: 'Czas tworzenia zależy od złożoności projektu, ale średnio zajmuje to od 1 do 3 tygodni.',
  },
  {
    question: 'Czy bota można zintegrować z moim systemem CRM?',
    answer: 'Tak, możemy zintegrować bota z Twoim systemem CRM dla bardziej efektywnego zarządzania klientami.',
  },
  {
    question: 'Czy zapewniacie wsparcie po uruchomieniu bota?',
    answer: 'Tak, zapewniamy wsparcie 24/7 i monitoring serwera, aby zapewnić płynną pracę bota.',
  },
  {
    question: 'Jakie języki obsługuje bot?',
    answer: 'Bot może obsługiwać dowolny język, który wybierzesz. Możemy skonfigurować bota do pracy z wieloma językami.',
  },
  {
    question: 'Czy można zmienić design bota?',
    answer: 'Tak, możemy stworzyć unikalny design dla Twojego bota, w tym awatary, towarzyszące obrazy i branding.',
  },
  {
    question: 'Jakie systemy płatności obsługuje bot?',
    answer: 'Bot może integrować się z różnymi systemami płatności, takimi jak PayPal, Stripe, LiqPay i innymi.',
  },
  {
    question: 'Czy mogę dodać funkcjonalność konsultacji online?',
    answer: 'Tak, możemy dodać funkcjonalność konsultacji online, która pozwoli Twoim klientom kontaktować się z Tobą w czasie rzeczywistym.',
  },
  {
    question: 'Jakie gwarancje zapewniacie?',
    answer: 'Zapewniamy gwarancję na nasze usługi i wsparcie przez 6 miesięcy po uruchomieniu bota.',
  },
  {
    question: 'Czy bota można zintegrować z mediami społecznościowymi?',
    answer: 'Tak, możemy zintegrować bota z różnymi mediami społecznościowymi, takimi jak Facebook, Instagram, Twitter i innymi.',
  },
  {
    question: 'Jakie funkcje można dodać do bota?',
    answer: 'Możesz dodać różne funkcje, takie jak rezerwacja usług, śledzenie zamówień, ankiety klientów i wiele więcej.',
  },
  {
    question: 'Czy bota można skonfigurować do pracy w różnych strefach czasowych?',
    answer: 'Tak, możemy skonfigurować bota do pracy w różnych strefach czasowych, aby mógł obsługiwać klientów z różnych części świata.',
  },
  {
    question: 'Jakie technologie używacie do tworzenia botów?',
    answer: 'Używamy nowoczesnych technologii, takich jak Python, Node.js i różnych frameworków do tworzenia botów.',
  },
  {
    question: 'Czy mogę dodać funkcjonalność śledzenia zamówień?',
    answer: 'Tak, możemy dodać funkcjonalność śledzenia zamówień, która pozwoli Twoim klientom śledzić status swoich zamówień.',
  },
  {
    question: 'Czy bota można zintegrować z moim systemem zarządzania zamówieniami?',
    answer: 'Tak, możemy zintegrować bota z Twoim systemem zarządzania zamówieniami dla bardziej efektywnego zarządzania zamówieniami.',
  },
  {
    question: 'Czy bota można skonfigurować do pracy z wieloma językami?',
    answer: 'Tak, możemy skonfigurować bota do pracy z wieloma językami, co pozwoli Ci obsługiwać klientów z różnych krajów.',
  },
];

// Англійська версія FAQ
const FAQS_EN = [
  {
    question: 'How long does bot development take?',
    answer: 'Development time depends on the complexity of the project, but on average it takes from 1 to 3 weeks.',
  },
  {
    question: 'Can the bot be integrated with my CRM system?',
    answer: 'Yes, we can integrate the bot with your CRM system for more efficient customer management.',
  },
  {
    question: 'Do you provide support after launching the bot?',
    answer: 'Yes, we provide 24/7 support and server monitoring to ensure smooth operation of the bot.',
  },
  {
    question: 'Which languages does the bot support?',
    answer: 'The bot can support any language you choose. We can configure the bot to work with multiple languages.',
  },
  {
    question: 'Can the bot design be changed?',
    answer: 'Yes, we can create a unique design for your bot, including avatars, accompanying images, and branding.',
  },
  {
    question: 'Which payment systems does the bot support?',
    answer: 'The bot can integrate with various payment systems such as PayPal, Stripe, LiqPay, and others.',
  },
  {
    question: 'Can I add online consultation functionality?',
    answer: 'Yes, we can add online consultation functionality that will allow your customers to contact you in real-time.',
  },
  {
    question: 'What guarantees do you provide?',
    answer: 'We provide a guarantee for our services and support for 6 months after the bot launch.',
  },
  {
    question: 'Can the bot be integrated with social networks?',
    answer: 'Yes, we can integrate the bot with various social networks such as Facebook, Instagram, Twitter, and others.',
  },
  {
    question: 'What features can be added to the bot?',
    answer: 'You can add various features such as service booking, order tracking, customer surveys, and more.',
  },
  {
    question: 'Can the bot be configured to work in different time zones?',
    answer: 'Yes, we can configure the bot to work in different time zones so it can serve customers from different parts of the world.',
  },
  {
    question: 'What technologies do you use for bot development?',
    answer: 'We use modern technologies such as Python, Node.js, and various frameworks for bot development.',
  },
  {
    question: 'Can I add order tracking functionality?',
    answer: 'Yes, we can add order tracking functionality that will allow your customers to track the status of their orders.',
  },
  {
    question: 'Can the bot be integrated with my order management system?',
    answer: 'Yes, we can integrate the bot with your order management system for more efficient order management.',
  },
  {
    question: 'Can the bot be configured to work with multiple languages?',
    answer: 'Yes, we can configure the bot to work with multiple languages, which will allow you to serve customers from different countries.',
  },
];

// Мемоізовані компоненти
const BenefitCard = React.memo(({ icon, title, description }) => (
  <div className="benefit-card">
    <div className="benefit-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

BenefitCard.displayName = 'BenefitCard';

const PriceCard = React.memo(({ plan }) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
    <p className="text-gray-600 mb-6 min-h-[80px]">{plan.description}</p>
    <div className="mb-6">
      <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
      <span className="text-4xl font-bold text-gray-800 ml-4">{plan.price}</span>
    </div>
    <ul className="mb-8 space-y-4">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center text-gray-600">
          <svg
            className="w-5 h-5 text-green-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button
      onClick={() => setIsModalOpen(true)}
      className="w-full py-3 px-5 text-center text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-[1.02]"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a, #3a3a3a)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
      }}
    >
      {plan.orderText || plan.buttonText}
    </button>
  </div>
));

PriceCard.displayName = 'PriceCard';

const FaqItem = React.memo(({ faq, index }) => (
  <Accordion.Item eventKey={index.toString()}>
    <Accordion.Header>{faq.question}</Accordion.Header>
    <Accordion.Body>{faq.answer}</Accordion.Body>
  </Accordion.Item>
));

FaqItem.displayName = 'FaqItem';

const InfoSection = React.memo(({ title, children, className = "" }) => (
  <div className={`p-8 rounded-xl shadow-lg fade-in-section ${className}`}>
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    {children}
  </div>
));

InfoSection.displayName = 'InfoSection';

// Константи винесені за межі компонента
const BENEFITS = [
  { icon: <FaBolt className="text-4xl text-slate-700" />, title: "Швидкість", description: "Середній термін розробки бота - 2 тижні" },
  { icon: <FaTools className="text-4xl text-slate-700" />, title: "Технології", description: "Використовуємо сучасний стек технологій" },
  { icon: <FaShieldAlt className="text-4xl text-slate-700" />, title: "Надійність", description: "24/7 моніторинг та підтримка" },
  { icon: <FaLightbulb className="text-4xl text-slate-700" />, title: "Інновації", description: "Впроваджуємо нові функції та можливості" }
];

// Російська версія переваг
const BENEFITS_RU = [
  { icon: <FaBolt className="text-4xl text-slate-700" />, title: "Скорость", description: "Средний срок разработки бота - 2 недели" },
  { icon: <FaTools className="text-4xl text-slate-700" />, title: "Технологии", description: "Используем современный стек технологий" },
  { icon: <FaShieldAlt className="text-4xl text-slate-700" />, title: "Надежность", description: "24/7 мониторинг и поддержка" },
  { icon: <FaLightbulb className="text-4xl text-slate-700" />, title: "Инновации", description: "Внедряем новые функции и возможности" }
];

// Польська версія переваг
const BENEFITS_PL = [
  { icon: <FaBolt className="text-4xl text-slate-700" />, title: "Szybkość", description: "Średni czas tworzenia bota - 2 tygodnie" },
  { icon: <FaTools className="text-4xl text-slate-700" />, title: "Technologie", description: "Używamy nowoczesnego stosu technologicznego" },
  { icon: <FaShieldAlt className="text-4xl text-slate-700" />, title: "Niezawodność", description: "Monitoring i wsparcie 24/7" },
  { icon: <FaLightbulb className="text-4xl text-slate-700" />, title: "Innowacje", description: "Wdrażamy nowe funkcje i możliwości" }
];

// Англійська версія преваг
const BENEFITS_EN = [
  { icon: <FaBolt className="text-4xl text-slate-700" />, title: "Speed", description: "Average bot development time - 2 weeks" },
  { icon: <FaTools className="text-4xl text-slate-700" />, title: "Technologies", description: "We use modern technology stack" },
  { icon: <FaShieldAlt className="text-4xl text-slate-700" />, title: "Reliability", description: "24/7 monitoring and support" },
  { icon: <FaLightbulb className="text-4xl text-slate-700" />, title: "Innovation", description: "We implement new features and capabilities" }
];

// Додаємо статистику
const STATISTICS = [
  { number: 200, label: 'Реалізованих проектів', icon: <FaRocket /> },
  { number: 98, label: 'Задоволених клієнтів %', icon: <FaUsers /> },
  { number: 5000, label: 'Годин розробки', icon: <FaClock /> },
  { number: 24, label: 'Підтримка 24/7', icon: <BiSupport /> }
];

// Англійська версія статистики
const STATISTICS_EN = [
  { number: 200, label: 'Completed Projects', icon: <FaRocket /> },
  { number: 98, label: 'Satisfied Clients %', icon: <FaUsers /> },
  { number: 5000, label: 'Development Hours', icon: <FaClock /> },
  { number: 24, label: '24/7 Support', icon: <BiSupport /> }
];

// Польська версія статистики
const STATISTICS_PL = [
  { number: 200, label: 'Zrealizowanych projektów', icon: <FaRocket /> },
  { number: 98, label: 'Zadowolonych klientów %', icon: <FaUsers /> },
  { number: 5000, label: 'Godzin rozwoju', icon: <FaClock /> },
  { number: 24, label: 'Wsparcie 24/7', icon: <BiSupport /> }
];

// Російська версія статистики
const STATISTICS_RU = [
  { number: 200, label: 'Реализованных проектов', icon: <FaRocket /> },
  { number: 98, label: 'Довольных клиентов %', icon: <FaUsers /> },
  { number: 5000, label: 'Часов разработки', icon: <FaClock /> },
  { number: 24, label: 'Поддержка 24/7', icon: <BiSupport /> }
];

// Компонент для статистики
const StatisticCard = React.memo(({ number, label, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-lg text-center"
  >
    <div className="text-4xl text-slate-700 mb-4 flex justify-center">{icon}</div>
    <CountUp
      end={number}
      duration={2.5}
      className="text-4xl font-bold text-gray-800"
    />
    <p className="text-gray-600 mt-2">{label}</p>
  </motion.div>
));

StatisticCard.displayName = 'StatisticCard';

// Компонент для технологічної карти
const TechCard = React.memo(({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl shadow-lg"
  >
    <div className="text-3xl text-slate-700 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
));

TechCard.displayName = 'TechCard';

// Технологічні можливості
const TECH_FEATURES = [
  {
    icon: <FaRobot />,
    title: 'AI Інтеграції',
    description: 'Використання штучного інтелекту для покращення взаємодії'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce',
    description: 'Повна інтеграція з платіжними системами та магазинами'
  },
  {
    icon: <FaCogs />,
    title: 'Автоматизація',
    description: 'Оптимізація бізнес-процесів та автоматизація рутинних завдань'
  },
  {
    icon: <FaDatabase />,
    title: 'База даних',
    description: 'Надійне зберігання та обробка даних'
  },
  {
    icon: <FaGlobe />,
    title: 'Веб-інтеграції',
    description: 'Підключення до будь-яких веб-сервісів та API'
  },
  {
    icon: <FaLock />,
    title: 'Безпека',
    description: 'Захист даних та безпечна обробка інформації'
  }
];

// Англійська версія технологічних можливостей
const TECH_FEATURES_EN = [
  {
    icon: <FaRobot />,
    title: 'AI Integrations',
    description: 'Using artificial intelligence to improve interaction'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce',
    description: 'Full integration with payment systems and stores'
  },
  {
    icon: <FaCogs />,
    title: 'Automation',
    description: 'Optimization of business processes and automation of routine tasks'
  },
  {
    icon: <FaDatabase />,
    title: 'Database',
    description: 'Reliable storage and data processing'
  },
  {
    icon: <FaGlobe />,
    title: 'Web Integrations',
    description: 'Connection to any web services and APIs'
  },
  {
    icon: <FaLock />,
    title: 'Security',
    description: 'Data protection and secure information processing'
  }
];

// Польська версія технологічних можливостей
const TECH_FEATURES_PL = [
  {
    icon: <FaRobot />,
    title: 'Integracje AI',
    description: 'Wykorzystanie sztucznej inteligencji do poprawy interakcji'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce',
    description: 'Pełna integracja z systemami płatności i sklepami'
  },
  {
    icon: <FaCogs />,
    title: 'Automatyzacja',
    description: 'Optymalizacja procesów biznesowych i automatyzacja rutynowych zadań'
  },
  {
    icon: <FaDatabase />,
    title: 'Baza danych',
    description: 'Niezawodne przechowywanie i przetwarzanie danych'
  },
  {
    icon: <FaGlobe />,
    title: 'Integracje webowe',
    description: 'Połączenie z dowolnymi usługami internetowymi i API'
  },
  {
    icon: <FaLock />,
    title: 'Bezpieczeństwo',
    description: 'Ochrona danych i bezpieczne przetwarzanie informacji'
  }
];

// Російська версія технологічних можливостей
const TECH_FEATURES_RU = [
  {
    icon: <FaRobot />,
    title: 'AI Интеграции',
    description: 'Использование искусственного интеллекта для улучшения взаимодействия'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce',
    description: 'Полная интеграция с платежными системами и магазинами'
  },
  {
    icon: <FaCogs />,
    title: 'Автоматизация',
    description: 'Оптимизация бизнес-процессов и автоматизация рутинных задач'
  },
  {
    icon: <FaDatabase />,
    title: 'База данных',
    description: 'Надежное хранение и обработка данных'
  },
  {
    icon: <FaGlobe />,
    title: 'Веб-интеграции',
    description: 'Подключение к любым веб-сервисам и API'
  },
  {
    icon: <FaLock />,
    title: 'Безопасность',
    description: 'Защита данных и безопасная обработка информации'
  }
];

const Page = () => {
  // Додаємо використання мовного контексту
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функція-помічник для перекладів
  const t = (uk, en, ru, pl) => {
    if (language === 'uk') return uk;
    if (language === 'ru') return ru;
    if (language === 'pl') return pl;
    return en;
  };

  // Функція для отримання поточної мови
  const getCurrentLanguage = () => language;

  React.useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.01, // Зменшено для кращої роботи на мобільних
        rootMargin: '50px' // Додано margin для раннього тригеру
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Вибираємо дані в залежності від вибраної мови
  const activePricePlans = language === 'uk' ? PRICE_PLANS : language === 'ru' ? PRICE_PLANS_RU : language === 'pl' ? PRICE_PLANS_PL : PRICE_PLANS_EN;
  const activeWebsitePlans = language === 'uk' ? PRICE_PLAN_WEBSITE : language === 'ru' ? PRICE_PLAN_WEBSITE_RU : language === 'pl' ? PRICE_PLAN_WEBSITE_PL : PRICE_PLAN_WEBSITE_EN;
  const activeParserPlans = language === 'uk' ? PRICE_PLAN_PARSER : language === 'ru' ? PRICE_PLAN_PARSER_RU : language === 'pl' ? PRICE_PLAN_PARSER_PL : PRICE_PLAN_PARSER_EN;
  const activeFaqs = language === 'uk' ? FAQS : language === 'ru' ? FAQS_RU : language === 'pl' ? FAQS_PL : FAQS_EN;
  const activeBenefits = language === 'uk' ? BENEFITS : language === 'ru' ? BENEFITS_RU : language === 'pl' ? BENEFITS_PL : BENEFITS_EN;
  const activeTechFeatures = language === 'uk' ? TECH_FEATURES : language === 'ru' ? TECH_FEATURES_RU : language === 'pl' ? TECH_FEATURES_PL : TECH_FEATURES_EN;

  // Мемоізуємо дані в залежності від мови
  const memoizedPricePlans = useMemo(() => activePricePlans, [language]);
  const memoizedWebsitePlans = useMemo(() => activeWebsitePlans, [language]);
  const memoizedParserPlans = useMemo(() => activeParserPlans, [language]);
  const memoizedFaqs = useMemo(() => activeFaqs, [language]);
  const memoizedBenefits = useMemo(() => activeBenefits, [language]);
  const memoizedTechFeatures = useMemo(() => activeTechFeatures, [language]);

  return (
    <div className="prices-page">
      <style jsx global>{styles}</style>
      
      {/* Hero Section */}
      <ServiceHero serviceType="prices" />
      
      <div className="px-4 md:px-8 pt-24 md:pt-16">
        <div className="intro-section fade-in-section max-w-full">
        <a href='https://t.me/TeleBotsNowayrmChannel' target='_blank' rel='noopener noreferrer'>
          <div className="relative w-[110%] -ml-[5%] h-auto aspect-[16/9]">
            <Image
              src='/creative.png'
              alt='Telegram Channel Banner'
              fill
              sizes="110vw"
              priority
              className='channel-banner object-cover'
              quality={85}
            />
          </div>
        </a>
        
        <div className="mt-8 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t('Кожний проєкт унікальний', 'Every project is unique', 'Каждый проект уникален', 'Każdy projekt jest unikalny')}
          </h1>
          <div className="intro-text text-base md:text-lg max-w-3xl mx-auto px-4 md:px-0">
            <p className="mb-4">
              {t('Кожний проєкт є унікальним кейсом, що створений вирішувати проблему, чи розв\'язувати питання характерні саме для вашого випадку, напрямку бізнесу чи потреби.', 'Every project is a unique case created to solve problems or issues specific to your situation, business direction, or needs.', 'Каждый проект является уникальным кейсом, созданным решать проблему или решать вопросы, характерные именно для вашего случая, направления бизнеса или потребности.', 'Każdy projekt jest unikalnym przypadkiem stworzonym do rozwiązywania problemów lub kwestii charakterystycznych dla Twojej sytuacji, kierunku biznesu lub potrzeb.')}
            </p>
            <p>
              {t('Наша команда спеціалізується на розробці індивідуальних рішень, які допомагають автоматизувати процеси та збільшити ефективність вашого бізнесу.', 'Our team specializes in developing custom solutions that help automate processes and increase the efficiency of your business.', 'Наша команда специализируется на разработке индивидуальных решений, которые помогают автоматизировать процессы и увеличить эффективность вашего бизнеса.', 'Nasz zespół specjalizuje się w tworzeniu indywidualnych rozwiązań, które pomagają automatyzować procesy i zwiększać efektywność Twojego biznesu.')}
            </p>
          </div>
        </div>
      </div>

      <section id="statistics" className="statistics-section" aria-label="Статистика">
        <Statistics />
      </section>

      <div className="services-section mt-20 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t('Наші послуги', 'Our Services', 'Наши услуги', 'Nasze usługi')}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t('Обирайте рішення, яке найкраще підходить для вашого бізнесу', 'Choose the solution that best suits your business', 'Выберите решение, которое наиболее подходит для вашего бизнеса', 'Wybierz rozwiązanie, które najlepiej pasuje do Twojego biznesu')}
        </p>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <Link href="/chatbots" className="group relative block transform hover:-translate-y-3 transition-all duration-500">
            <div className="bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-100 group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.01] to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 group-hover:shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <FaRobot className="w-10 h-10 text-gray-800 relative z-10 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300">
                  {t('Розробка чат-ботів', 'Chatbot Development', 'Разработка чат-ботов', 'Tworzenie chatbotów')}
                </h2>
                <p className="text-gray-600 transition-colors duration-300 leading-relaxed">
                  {t('Створюємо ефективних чат-ботів для автоматизації комунікації з вашими клієнтами', 'We create effective chatbots to automate communication with your customers', 'Создаем эффективных чат-ботов для автоматизации коммуникации с вашими клиентами', 'Tworzymy skuteczne chatboty do automatyzacji komunikacji z Twoimi klientami')}
                </p>
                <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                  <span className="font-medium">{t('Дізнатися більше', 'Learn more', 'Узнать больше', 'Dowiedz się więcej')}</span>
                  <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/websites" className="group relative block transform hover:-translate-y-3 transition-all duration-500">
            <div className="bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-100 group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.01] to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 group-hover:shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <FaDesktop className="w-10 h-10 text-gray-800 relative z-10 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300">
                  {t('Розробка веб-сайтів', 'Website Development', 'Разработка веб-сайтов', 'Tworzenie stron internetowych')}
                </h2>
                <p className="text-gray-600 transition-colors duration-300 leading-relaxed">
                  {t('Створюємо сучасні та функціональні веб-сайти для вашого бізнесу', 'We create modern and functional websites for your business', 'Создаем современные и функциональные веб-сайты для вашего бизнеса', 'Tworzymy nowoczesne i funkcjonalne strony internetowe dla Twojego biznesu')}
                </p>
                <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                  <span className="font-medium">{t('Дізнатися більше', 'Learn more', 'Узнать больше', 'Dowiedz się więcej')}</span>
                  <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/parsers" className="group relative block transform hover:-translate-y-3 transition-all duration-500">
            <div className="bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-2xl relative z-10 h-full border border-gray-100 group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.01] to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 group-hover:shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <FaDatabase className="w-10 h-10 text-gray-800 relative z-10 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300">
                  {t('Розробка парсерів', 'Parser Development', 'Разработка парсеров', 'Tworzenie parserów')}
                </h2>
                <p className="text-gray-600 transition-colors duration-300 leading-relaxed">
                  {t('Створюємо інструменти для автоматизованого збору та обробки даних', 'We create tools for automated data collection and processing', 'Создаем инструменты для автоматизированного сбора и обработки данных', 'Tworzymy narzędzia do automatycznego zbierania i przetwarzania danych')}
                </p>
                <div className="mt-6 flex items-center text-gray-800 transition-colors duration-300">
                  <span className="font-medium">{t('Дізнатися більше', 'Learn more', 'Узнать больше', 'Dowiedz się więcej')}</span>
                  <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="benefits-section fade-in-section mt-12 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {t('Чому обирають нас', 'Why Choose Us', 'Почему выбирают нас', 'Dlaczego nas wybierają')}
        </h2>
        <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
          {memoizedBenefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>

      {/* Розділ з тарифами чат-ботів */}
      <div className="pricing-section p-4 md:p-8 mt-20 max-w-6xl mx-auto fade-in-section">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-center text-gray-800">
          {t('Вартість розробки', 'Development Pricing', 'Стоимость разработки', 'Koszt rozwoju')}
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-700">
            {t('Розробка чат-ботів', 'Chatbot Development', 'Разработка чат-ботов', 'Tworzenie chatbotów')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {memoizedPricePlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 relative ${plan.recommended ? 'ring-2 ring-slate-700' : ''}`}
                whileHover={{ y: -5 }}
              >
                {plan.recommended && (
                  <span className="absolute top-0 right-0 bg-slate-700 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    {t('Рекомендовано', 'Recommended', 'Рекомендовано', 'Polecany')}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[80px]">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  <span className="text-4xl font-bold text-gray-800 ml-4">{plan.price}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 px-5 text-center text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a, #3a3a3a)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Розділ з тарифами веб-сайтів */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-700">
            {t('Розробка веб-сайтів', 'Website Development', 'Разработка веб-сайтов', 'Tworzenie stron internetowych')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {memoizedWebsitePlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 relative ${plan.recommended ? 'ring-2 ring-slate-700' : ''}`}
                whileHover={{ y: -5 }}
              >
                {plan.recommended && (
                  <span className="absolute top-0 right-0 bg-slate-700 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    {t('Рекомендовано', 'Recommended', 'Рекомендовано', 'Polecany')}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[80px]">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  <span className="text-4xl font-bold text-gray-800 ml-4">{plan.price}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 px-5 text-center text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a, #3a3a3a)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Розділ з тарифами парсерів */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-700">
            {t('Розробка парсерів', 'Parser Development', 'Разработка парсеров', 'Tworzenie parserów')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {memoizedParserPlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 relative ${plan.recommended ? 'ring-2 ring-slate-700' : ''}`}
                whileHover={{ y: -5 }}
              >
                {plan.recommended && (
                  <span className="absolute top-0 right-0 bg-slate-700 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    {t('Рекомендовано', 'Recommended', 'Рекомендовано', 'Polecany')}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[80px]">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  <span className="text-4xl font-bold text-gray-800 ml-4">{plan.price}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 px-5 text-center text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a, #3a3a3a)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="tech-section mt-20 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('Технологічні можливості', 'Technical Capabilities', 'Технические возможности', 'Możliwości techniczne')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedTechFeatures.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </div>
      </div>

      <div className="content-section w-full max-w-4xl mx-auto px-0 md:px-8">
        <div className="faq-section mt-12 md:mt-20 fade-in-section px-2 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            {t('Часті запитання', 'Frequently Asked Questions', 'Часто задаваемые вопросы', 'Często zadawane pytania')}
          </h2>   
          <Accordion className="w-full">
            {memoizedFaqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </Accordion>
        </div>
      </div>

      <section className="w-full" id="lead-form">
        <LeadForm />
      </section>

      <div className="content-section w-full max-w-4xl mx-auto px-0 md:px-8">
        <div className="info-sections mt-12 md:mt-20 space-y-8">
          <InfoSection 
            title={
              <div className="flex items-center gap-4">
                <FaCode className="text-3xl text-slate-700" />
                <span>{t('Розробка Telegram ботів в Україні', 'Telegram Bot Development in Ukraine', 'Разработка Telegram ботов в Украине', 'Tworzenie botów Telegram na Ukrainie')}</span>
              </div>
            } 
            className="bg-white"
          >
            <div className="text-sm md:text-base px-4 md:px-8">
              <p className="text-gray-700 mb-4">
                {t('Наша команда спеціалізується на створенні професійних Telegram ботів для бізнесу в Україні. Ми розробляємо ботів будь-якої складності: від простих інформаційних помічників до складних систем автоматизації з інтеграцією CRM та платіжних систем.', 'Our team specializes in creating professional Telegram bots for businesses in Ukraine. We develop bots of any complexity: from simple information assistants to complex automation systems with CRM and payment system integration.', 'Наша команда специализируется на создании профессиональных Telegram ботов для бизнеса в Украине. Мы разрабатываем ботов любой сложности: от простых информационных помощников до сложных систем автоматизации с интеграцией CRM и платежных систем.', 'Nasz zespół specjalizuje się w tworzeniu profesjonalnych botów Telegram dla firm na Ukrainie. Tworzymy boty o dowolnej złożoności: od prostych asystentów informacyjnych po złożone systemy automatyzacji z integracją CRM i systemów płatności.')}
              </p>
              <p className="text-gray-700">
                {t('Кожен бот розробляється індивідуально під потреби вашого бізнесу, з урахуванням специфіки галузі та цільової аудиторії. Ми використовуємо сучасні технології та методи розробки, що забезпечує високу якість та надійність наших рішень.', 'Each bot is developed individually for your business needs, taking into account the specifics of the industry and target audience. We use modern technologies and development methods that ensure high quality and reliability of our solutions.', 'Каждый бот разрабатывается индивидуально под потребности вашего бизнеса, с учетом специфики отрасли и целевой аудитории. Мы используем современные технологии и методы разработки, что обеспечивает высокое качество и надежность наших решений.', 'Każdy bot jest tworzony indywidualnie pod potrzeby Twojego biznesu, z uwzględnieniem specyfiki branży i grupy docelowej. Używamy nowoczesnych technologii i metod rozwoju, co zapewnia wysoką jakość i niezawodność naszych rozwiązań.')}
              </p>
            </div>
          </InfoSection>

          <InfoSection 
            title={
              <div className="flex items-center gap-4">
                <BiCustomize className="text-3xl text-slate-700" />
                <span>{t('Переваги Telegram ботів для бізнесу', 'Benefits of Telegram Bots for Business', 'Преимущества Telegram ботов для бизнеса', 'Korzyści z botów Telegram dla biznesu')}</span>
              </div>
            } 
            className="bg-gray-50"
          >
            <div className="px-4 md:px-8">
              <ul className="space-y-4 text-gray-700">
                {getCurrentLanguage() === 'uk' ? (
                  <>
                    <li>✓ Автоматизація рутинних процесів та економія часу</li>
                    <li>✓ Цілодобова підтримка клієнтів без додаткових витрат</li>
                    <li>✓ Збільшення продажів через автоматичні воронки</li>
                    <li>✓ Швидка обробка замовлень та зворотного зв'язку</li>
                    <li>✓ Інтеграція з CRM системами та платіжними сервісами</li>
                    <li>✓ Аналітика та збір даних про поведінку користувачів</li>
                  </>
                ) : getCurrentLanguage() === 'ru' ? (
                  <>
                    <li>✓ Автоматизация рутинных процессов и экономия времени</li>
                    <li>✓ 24/7 поддержка клиентов без дополнительных затрат</li>
                    <li>✓ Увеличение продаж через автоматические воронки</li>
                    <li>✓ Быстрая обработка заказов и обратная связь</li>
                    <li>✓ Интеграция с CRM системами и платежными сервисами</li>
                    <li>✓ Аналитика и сбор данных о поведении пользователей</li>
                  </>
                  ) : (
                  <>
                    <li>✓ Automation of routine processes and time saving</li>
                    <li>✓ 24/7 customer support without additional costs</li>
                    <li>✓ Increased sales through automatic funnels</li>
                    <li>✓ Fast order processing and feedback</li>
                    <li>✓ Integration with CRM systems and payment services</li>
                    <li>✓ Analytics and data collection on user behavior</li>
                  </>
                )}
              </ul>
            </div>
          </InfoSection>

          <InfoSection 
            title={
              <div className="flex items-center gap-4">
                <FaChartLine className="text-3xl text-slate-700" />
                <span>{t('Процес розробки Telegram бота', 'Telegram Bot Development Process', 'Процес разработки Telegram бота', 'Proces tworzenia bota Telegram')}</span>
              </div>
            } 
            className="bg-white"
          >
            <div className="space-y-4 text-gray-700 px-4 md:px-8">
              <p className="mb-4">
                {t('Розробка чат-боту це не лише написання коду. Все починається з написання сценарію та текстової частини й ми можемо вам у цьому допомогти. Для надання боту привабливого та індивідуального вигляду наші дизайнери створять для вас унікальне оформлення - аватарки, супутні зображення, брендування для ваших матеріалів. А вже готового бота ми розміщуємо на наших серверах та контролюємо його безперебійну роботу.', 'Chatbot development is not just about writing code. It all starts with writing a scenario and text content, and we can help you with that. To give the bot an attractive and individual appearance, our designers will create unique designs for you - avatars, accompanying images, branding for your materials. And we place the ready-made bot on our servers and monitor its smooth operation.', 'Разработка чат-бота это не только написание кода. Все начинается с написания сценария и текстовой части, и мы можем вам в этом помочь. Для придания боту привлекательного и индивидуального вида наши дизайнеры создадут для вас уникальное оформление - аватарки, сопровождающие изображения, брендинг для ваших материалов. А уже готового бота мы размещаем на наших серверах и контролируем его бесперебойную работу.')}
              </p>
            </div>
          </InfoSection>

          <InfoSection 
            title={
              <div className="flex items-center gap-4">
                <FaShoppingCart className="text-3xl text-slate-700" />
                <span>{t('Галузеві рішення', 'Industry Solutions', 'Отраслевые решения', 'Rozwiązania branżowe')}</span>
              </div>
            } 
            className="bg-gray-50"
          >
            <div className="space-y-4 text-gray-700 px-4 md:px-8">
              <p className="mb-4">
                {t('Ми розробляємо ефективні рішення для автоматизації та збору даних:', 'We develop effective solutions for automation and data collection:', 'Мы разрабатываем эффективные решения для автоматизации и сбора данных:', 'Tworzymy skuteczne rozwiązania do automatyzacji i zbierania danych:')}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t('Для інтернет-магазинів:', 'For online stores:', 'Для интернет-магазинов:', 'Dla sklepów internetowych:')}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {getCurrentLanguage() === 'uk' ? (
                      <>
                        <li>Автоматичне оформлення замовлень</li>
                        <li>Каталог товарів з фото</li>
                        <li>Інтеграція з платіжними системами</li>
                        <li>Відстеження статусу замовлення</li>
                      </>
                    ) : language === 'ru' ? (
                      <>
                        <li>Автоматическое оформление заказов</li>
                        <li>Каталог товаров с фото</li>
                        <li>Интеграция с платежными системами</li>
                        <li>Отслеживание статуса заказа</li>
                      </>
                    ) : (
                      <>
                        <li>Automatic order processing</li>
                        <li>Product catalog with photos</li>
                        <li>Integration with payment systems</li>
                        <li>Order status tracking</li>
                      </>
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t('Для сфери послуг:', 'For service industry:', 'Для сферы услуг:', 'Dla branży usług:')}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {getCurrentLanguage() === 'uk' ? (
                      <>
                        <li>Онлайн-запис на послуги</li>
                        <li>Розклад роботи спеціалістів</li>
                        <li>Автоматичні нагадування</li>
                        <li>Система відгуків</li>
                      </>
                    ) : language === 'ru' ? (
                      <>
                        <li>Онлайн-запись на услуги</li>
                        <li>Расписание работы специалистов</li>
                        <li>Автоматические напоминания</li>
                        <li>Система отзывов</li>
                      </>
                    ) : (
                      <>
                        <li>Online service booking</li>
                        <li>Specialists' work schedule</li>
                        <li>Automatic reminders</li>
                        <li>Review system</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </InfoSection>

          <InfoSection 
            title={
              <div className="flex items-center gap-4">
                <FaCogs className="text-3xl text-slate-700" />
                  <span>{t('Технічні можливості наших ботів', 'Technical Capabilities of Our Bots', 'Технические возможности наших ботов', 'Możliwości techniczne naszych botów')}</span>
              </div>
            } 
            className="bg-white"
          >
            <div className="space-y-4 text-gray-700 px-4 md:px-8">
              <p className="mb-4">
                {t('Наші Telegram боти підтримують широкий спектр функціональних можливостей:', 'Our Telegram bots support a wide range of functionalities:', 'Наши Telegram боты поддерживают широкий спектр функциональных возможностей:', 'Nasze boty Telegram obsługują szeroki zakres funkcjonalności:')}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {t('uk') === 'uk' ? (
                  <>
                    <li>• Мультимовний інтерфейс</li>
                    <li>• Інтеграція з API та веб-сервісами</li>
                    <li>• Обробка платежів</li>
                    <li>• Розсилка повідомлень</li>
                    <li>• Аналітика та статистика</li>
                    <li>• Захист від спаму</li>
                    <li>• Медіа контент</li>
                    <li>• Геолокація</li>
                    <li>• Опитування та форми</li>
                    <li>• Система лояльності</li>
                  </>
                ) : language === 'ru' ? (
                  <>
                    <li>• Мультиязычный интерфейс</li>
                    <li>• Интеграция с API и веб-сервисами</li>
                    <li>• Обработка платежей</li>
                    <li>• Рассылка сообщений</li>
                    <li>• Аналитика и статистика</li>
                    <li>• Защита от спама</li>
                    <li>• Медиа контент</li>
                    <li>• Геолокация</li>
                    <li>• Опросы и формы</li>
                    <li>• Система лояльности</li>
                  </>
                ) : (
                  <>
                    <li>• Multilingual interface</li>
                    <li>• Integration with APIs and web services</li>
                    <li>• Payment processing</li>
                    <li>• Message broadcasting</li>
                    <li>• Analytics and statistics</li>
                    <li>• Spam protection</li>
                    <li>• Media content</li>
                    <li>• Geolocation</li>
                    <li>• Surveys and forms</li>
                    <li>• Loyalty system</li>
                  </>
                )}
              </ul>
            </div>
          </InfoSection>

          <InfoSection 
            title={
              <div className="flex items-center gap-4">
                <FaDesktop className="text-3xl text-slate-700" />
                <span>{t('Розробка веб-сайтів та інтернет-магазинів', 'Website and E-commerce Development', 'Разработка веб-сайтов и интернет-магазинов', 'Tworzenie stron internetowych i sklepów internetowych')}</span>
              </div>
            } 
            className="bg-gray-50"
          >
            <div className="space-y-4 text-gray-700 px-4 md:px-8">
              <p className="mb-4">
                {t('Окрім розробки Telegram ботів, ми спеціалізуємося на створенні сучасних веб-сайтів та інтернет-магазинів. Наші рішення включають:', 'In addition to Telegram bot development, we specialize in creating modern websites and online stores. Our solutions include:', 'Помимо разработки Telegram ботов, мы специализируемся на создании современных веб-сайтов и интернет-магазинов. Наши решения включают:', 'Oprócz tworzenia botów Telegram specjalizujemy się w tworzeniu nowoczesnych stron internetowych i sklepów internetowych. Nasze rozwiązania obejmują:')}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{t('Веб-сайти', 'Websites', 'Веб-сайты', 'Strony internetowe')}</h3>
                  <ul className="space-y-2">
                    {getCurrentLanguage() === 'uk' ? (
                      <>
                        <li>• Корпоративні сайти</li>
                        <li>• Лендінги</li>
                        <li>• Портфоліо</li>
                        <li>• Блоги</li>
                        <li>• Адаптивний дизайн</li>
                        <li>• SEO-оптимізація</li>
                      </>
                    ) : language === 'ru' ? (
                      <>
                        <li>• Корпоративные сайты</li>
                        <li>• Лендинги</li>
                        <li>• Портфолио</li>
                        <li>• Блоги</li>
                        <li>• Адаптивный дизайн</li>
                        <li>• SEO-оптимизация</li>
                      </>
                    ) : language === 'pl' ? (
                      <>
                        <li>• Strony korporacyjne</li>
                        <li>• Strony docelowe</li>
                        <li>• Portfolia</li>
                        <li>• Blogi</li>
                        <li>• Responsywny design</li>
                        <li>• Optymalizacja SEO</li>
                      </>
                    ) : (
                      <>
                        <li>• Corporate websites</li>
                        <li>• Landing pages</li>
                        <li>• Portfolios</li>
                        <li>• Blogs</li>
                        <li>• Responsive design</li>
                        <li>• SEO optimization</li>
                      </>
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{t('Інтернет-магазини', 'Online Stores', 'Интернет-магазины', 'Sklepy internetowe')}</h3>
                  <ul className="space-y-2">
                    {language === 'uk' ? (
                      <>
                        <li>• Каталог товарів</li>
                        <li>• Система управління замовленнями</li>
                        <li>• Інтеграція з платіжними системами</li>
                        <li>• Особистий кабінет</li>
                        <li>• Система знижок та акцій</li>
                        <li>• Інтеграція з CRM</li>
                      </>
                    ) : language === 'ru' ? (
                      <>
                        <li>• Каталог товаров</li>
                        <li>• Система управления заказами</li>
                        <li>• Интеграция с платежными системами</li>
                        <li>• Личный кабинет</li>
                        <li>• Система скидок и акций</li>
                        <li>• Интеграция с CRM</li>
                      </>
                    ) : language === 'pl' ? (
                      <>
                        <li>• Katalog produktów</li>
                        <li>• System zarządzania zamówieniami</li>
                        <li>• Integracja z systemami płatności</li>
                        <li>• Konto osobiste</li>
                        <li>• System rabatów i promocji</li>
                        <li>• Integracja z CRM</li>
                      </>
                    ) : (
                      <>
                        <li>• Product catalog</li>
                        <li>• Order management system</li>
                        <li>• Integration with payment systems</li>
                        <li>• Personal account</li>
                        <li>• Discount and promotion system</li>
                        <li>• CRM integration</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </InfoSection>

          <InfoSection 
            title={
              <div className="flex items-center gap-4">
                <FaTools className="text-3xl text-slate-700" />
                <span>{t('Парсери та автоматизація бізнес-процесів', 'Parsers and Business Process Automation', 'Парсеры и автоматизация бизнес-процессов', 'Parsery i automatyzacja procesów biznesowych')}</span>
              </div>
            } 
            className="bg-white"
          >
            <div className="space-y-4 text-gray-700 px-4 md:px-8">
              <p className="mb-4">
                {t('Ми розробляємо ефективні рішення для автоматизації та збору даних:', 'We develop effective solutions for automation and data collection:', 'Мы разрабатываем эффективные решения для автоматизации и сбора данных:', 'Tworzymy skuteczne rozwiązania do automatyzacji i zbierania danych:')}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{t('Парсери та скрапери', 'Parsers and Scrapers', 'Парсеры и скраперы')}</h3>
                  <ul className="space-y-2">
                    {language === 'uk' ? (
                      <>
                        <li>• Збір даних з веб-сайтів</li>
                        <li>• Моніторинг цін конкурентів</li>
                        <li>• Аналіз ринку</li>
                        <li>• Збір контактів</li>
                        <li>• Експорт даних у різні формати</li>
                        <li>• Регулярне оновлення даних</li>
                      </>
                    ) : language === 'ru' ? (
                      <>
                        <li>• Сбор данных с веб-сайтов</li>
                        <li>• Мониторинг цен конкурентов</li>
                        <li>• Анализ рынка</li>
                        <li>• Сбор контактов</li>
                        <li>• Экспорт данных в различные форматы</li>
                        <li>• Регулярное обновление данных</li>
                      </>
                    ) : (
                      <>
                        <li>• Data collection from websites</li>
                        <li>• Competitor price monitoring</li>
                        <li>• Market analysis</li>
                        <li>• Contact collection</li>
                        <li>• Data export in various formats</li>
                        <li>• Regular data updates</li>
                      </>
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{t('Автоматизація процесів', 'Process Automation', 'Автоматизация процессов', 'Automatyzacja procesów')}</h3>
                  <ul className="space-y-2">
                    {language === 'uk' ? (
                      <>
                        <li>• Автоматизація рутинних завдань</li>
                        <li>• Інтеграція різних сервісів</li>
                        <li>• Автоматичне створення звітів</li>
                        <li>• Обробка та аналіз даних</li>
                        <li>• Оптимізація робочих процесів</li>
                        <li>• Масова розсилка</li>
                      </>
                    ) : language === 'ru' ? (
                      <>
                        <li>• Автоматизация рутинных задач</li>
                        <li>• Интеграция различных сервисов</li>
                        <li>• Автоматическое создание отчетов</li>
                        <li>• Обработка и анализ данных</li>
                        <li>• Оптимизация рабочих процессов</li>
                        <li>• Массовая рассылка</li>
                      </>
                    ) : (
                      <>
                        <li>• Automation of routine tasks</li>
                        <li>• Integration of various services</li>
                        <li>• Automatic report generation</li>
                        <li>• Data processing and analysis</li>
                        <li>• Workflow optimization</li>
                        <li>• Mass mailing</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </InfoSection>

          <InfoSection 
            title={
              <div className="flex items-center gap-4">
                <FaDatabase className="text-3xl text-slate-700" />
                <span>{t('Комплексні рішення для бізнесу', 'Comprehensive Business Solutions', 'Комплексные решения для бизнеса', 'Kompleksowe rozwiązania biznesowe')}</span>
              </div>
            } 
            className="bg-gray-50"
          >
            <div className="space-y-4 text-gray-700 px-4 md:px-8">
              <p className="mb-4">
                {t('Ми пропонуємо комплексний підхід до автоматизації вашого бізнесу:', 'We offer a comprehensive approach to automating your business:', 'Мы предлагаем комплексный подход к автоматизации вашего бизнеса:', 'Oferujemy kompleksowe podejście do automatyzacji Twojego biznesu:')}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                                {language === 'uk' ? (
                  <>
                    <li>• Інтеграція сайту з Telegram ботом</li>
                    <li>• Синхронізація даних між системами</li>
                    <li>• Єдина система управління</li>
                    <li>• Автоматичне оновлення інформації</li>
                    <li>• Аналітика та статистика</li>
                    <li>• Масштабовані рішення</li>
                    <li>• Технічна підтримка 24/7</li>
                    <li>• Регулярні оновлення</li>
                  </>
                ) : language === 'ru' ? (
                  <>
                    <li>• Интеграция сайта с Telegram ботом</li>
                    <li>• Синхронизация данных между системами</li>
                    <li>• Единая система управления</li>
                    <li>• Автоматическое обновление информации</li>
                    <li>• Аналитика и статистика</li>
                    <li>• Масштабируемые решения</li>
                    <li>• Техническая поддержка 24/7</li>
                    <li>• Регулярные обновления</li>
                  </>
                ) : language === 'pl' ? (
                  <>
                    <li>• Integracja strony z botem Telegram</li>
                    <li>• Synchronizacja danych między systemami</li>
                    <li>• Ujednolicony system zarządzania</li>
                    <li>• Automatyczne aktualizacje informacji</li>
                    <li>• Analityka i statystyki</li>
                    <li>• Skalowalne rozwiązania</li>
                    <li>• Wsparcie techniczne 24/7</li>
                    <li>• Regularne aktualizacje</li>
                  </>
                ) : (
                  <>
                    <li>• Website integration with Telegram bot</li>
                    <li>• Data synchronization between systems</li>
                    <li>• Unified management system</li>
                    <li>• Automatic information updates</li>
                    <li>• Analytics and statistics</li>
                    <li>• Scalable solutions</li>
                    <li>• 24/7 technical support</li>
                    <li>• Regular updates</li>
                  </>
                )}
              </ul>
              <p className="mt-6">
                {t('Наша команда допоможе вам створити ефективну екосистему для вашого бізнесу, об\'єднавши веб-сайт, Telegram бот, систему автоматизації та аналітики в єдине ціле.', 'Our team will help you create an effective ecosystem for your business by combining a website, Telegram bot, automation system, and analytics into a single entity.', 'Наша команда поможет вам создать эффективную экосистему для вашего бизнеса, объединив веб-сайт, Telegram бот, систему автоматизации и аналитики в единое целое.', 'Nasz zespół pomoże Ci stworzyć skuteczną ekosystem dla Twojego biznesu, łącząc stronę internetową, bota Telegram, system automatyzacji i analityki w jedną całość.')}
              </p>
            </div>
          </InfoSection>
        </div>

        <div className="cta-sections space-y-8 mt-12 md:mt-20 mb-12">
          <div className="bg-gray-50 p-6 md:p-12 text-center rounded-2xl shadow-xl w-[95vw] md:w-full -ml-[2.5vw] md:ml-0">
            <div className="flex items-center justify-center gap-4 mb-6">
                <FaLightbulb className="text-4xl text-slate-700" />
              <h3 className="text-2xl md:text-4xl font-extrabold text-gray-800">
                {t('Головне в дрібницях', 'Details Matter', 'Главное в мелочах', 'Szczegóły mają znaczenie')}
              </h3>
            </div>
            <p className="text-base md:text-xl text-gray-700 px-4 md:px-8">
              {t('Розробка чат-боту це не лише написання коду. Все починається з написання сценарію та текстової частини й ми можемо вам у цьому допомогти. Для надання боту привабливого та індивідуального вигляду наші дизайнери створять для вас унікальне оформлення - аватарки, супутні зображення, брендування для ваших матеріалів. А вже готового бота ми розміщуємо на наших серверах та контролюємо його безперебійну роботу.', 'Chatbot development is not just about writing code. It all starts with writing a scenario and text content, and we can help you with that. To give the bot an attractive and individual appearance, our designers will create unique designs for you - avatars, accompanying images, branding for your materials. And we place the ready-made bot on our servers and monitor its smooth operation.', 'Розработка чат-бота это не только написание кода. Все начинается с написания сценария и текстовой части, и мы можем вам в этом помочь. Для надания боту привлекательного и индивидуального вида наши дизайнеры создадут для вас уникальное оформление - аватарки, сопутствующие изображения, брендирование для ваших материалов. А уже готового бота мы размещаем на наших серверах и контролируем его бесперебойную работу.', 'Tworzenie chatbota to nie tylko pisanie kodu. Wszystko zaczyna się od napisania scenariusza i części tekstowej, i możemy Ci w tym pomóc. Aby nadać botowi atrakcyjny i indywidualny wygląd, nasi projektanci stworzą dla Ciebie unikalne opracowanie - awatary, towarzyszące obrazy, branding dla Twoich materiałów. A już gotowego bota umieszczamy na naszych serwerach i kontrolujemy jego bezproblemową pracę.')}
            </p>
          </div>

          {/* Кнопка портфоліо */}
          <div className="bg-white p-6 md:p-12 text-center rounded-2xl shadow-xl w-[95vw] md:w-full -ml-[2.5vw] md:ml-0 text-black border-2 border-gray-200">
            <div className="flex items-center justify-center gap-4 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-2xl md:text-4xl font-extrabold text-black">
                {t('Подивіться наші роботи', 'Check out our work', 'Посмотрите наши работы', 'Zobacz nasze prace')}
              </h3>
            </div>
            <p className="text-base md:text-xl mb-6 px-4 md:px-8 text-gray-700">
              {t('Перегляньте портфоліо наших успішних проектів та кейсів', 'Browse our portfolio of successful projects and case studies', 'Просмотрите портфолио наших успешных проектов и кейсов', 'Przejrzyj nasze portfolio udanych projektów i przypadków')}
            </p>
            <a 
              href={language === 'uk' ? '/portfolio' : language === 'en' ? '/en/portfolio' : language === 'ru' ? '/ru/portfolio' : language === 'pl' ? '/pl/portfolio' : '/portfolio'}
              className="portfolio-button inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                color: '#ffffff !important'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2d2d2d, #404040, #525252)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
              }}
            >
              <span 
                className="portfolio-text"
                style={{ 
                  color: '#ffffff !important',
                  WebkitTextFillColor: '#ffffff !important'
                }}
              >
                {t('Переглянути портфоліо', 'View Portfolio', 'Посмотреть портфолио', 'Zobacz Portfolio')}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" style={{ color: '#ffffff !important' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="bg-gray-50 p-6 md:p-12 text-center rounded-2xl shadow-xl w-[95vw] md:w-full -ml-[2.5vw] md:ml-0">
            <div className="flex items-center justify-center gap-4 mb-6">
                <FaPhoneAlt className="text-4xl text-slate-700" />
              <h3 className="text-2xl md:text-4xl font-extrabold text-gray-800">
                {t('Зв\'яжіться з нами', 'Contact Us', 'Свяжитесь с нами', 'Skontaktuj się z nami')}
              </h3>
            </div>
            <p className="text-base md:text-xl text-gray-700 mb-6 px-4 md:px-8">
              {t('Якщо у вас є питання або ви хочете дізнатися більше про наші послуги, будь ласка, зв\'яжіться з нами.', 'If you have questions or want to learn more about our services, please contact us.', 'Если у вас есть вопросы или вы хотите узнать больше о наших услугах, пожалуйста, свяжитесь с нами.', 'Jeśli masz pytania lub chcesz dowiedzieć się więcej o naszych usługach, skontaktuj się z nami.')}
            </p>
            <a href="#contact-form" className="inline-block">
              <button className="mt-4 bg-slate-700 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-colors font-medium">
                {t('Зв\'язатися з нами', 'Contact Us', 'Связаться с нами', 'Skontaktuj się z nami')}
              </button>
            </a>
          </div>
        </div>
      </div>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Посилання на портфоліо */}
      <motion.div 
        className="fixed bottom-8 left-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.a
          href={language === 'uk' ? '/portfolio' : language === 'en' ? '/en/portfolio' : language === 'ru' ? '/ru/portfolio' : language === 'pl' ? '/pl/portfolio' : '/portfolio'}
          className="flex items-center gap-2 text-gray-600 hover:text-slate-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
<span>{language === 'uk' ? 'Портфоліо' : language === 'en' ? 'Portfolio' : language === 'ru' ? 'Портфолио' : language === 'pl' ? 'Portfolio' : 'Портфоліо'}</span>
        </motion.a>
      </motion.div>
      </div>
    </div>
  );
};

export default React.memo(Page);