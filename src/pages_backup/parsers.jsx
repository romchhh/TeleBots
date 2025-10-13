'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaDatabase, FaCogs, FaChartBar, FaShieldAlt,
  FaRocket, FaCode, FaServer, FaUserCog,
  FaCheckCircle, FaGlobe, FaDesktop, FaTools,
  FaChartLine, FaSearch, FaFileAlt, FaSync
} from 'react-icons/fa';
import LeadForm from '../ui/LeadForm';
import LeadModal from '../components/LeadModal';
import ServiceHero from '../ui/ServiceHero';
import { useTranslation } from '../hooks/useTranslation';

const PRICE_PLANS = [
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

// Польські версії планів
const PRICE_PLANS_PL = [
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
const PRICE_PLANS_EN = [
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

const features = [
  {
    icon: <FaDatabase className="w-12 h-12 text-slate-700" />,
    title: 'Збір даних',
    description: 'Автоматизований збір інформації з будь-яких веб-ресурсів'
  },
  {
    icon: <FaCogs className="w-12 h-12 text-slate-700" />,
    title: 'Гнучка настройка',
    description: 'Налаштування парсера під ваші конкретні потреби'
  },
  {
    icon: <FaChartBar className="w-12 h-12 text-slate-700" />,
    title: 'Аналіз даних',
    description: 'Обробка та структурування отриманої інформації'
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-slate-700" />,
    title: 'Безпека',
    description: 'Дотримання всіх правил безпеки та етики при зборі даних'
  }
];

// Польські версії możliwości
const features_PL = [
  {
    icon: <FaDatabase className="w-12 h-12 text-slate-700" />,
    title: 'Zbieranie danych',
    description: 'Automatyzowane zbieranie informacji z dowolnych zasobów internetowych'
  },
  {
    icon: <FaCogs className="w-12 h-12 text-slate-700" />,
    title: 'Elastyczna konfiguracja',
    description: 'Dostosowanie parsera do Twoich konkretnych potrzeb'
  },
  {
    icon: <FaChartBar className="w-12 h-12 text-slate-700" />,
    title: 'Analiza danych',
    description: 'Przetwarzanie i strukturyzacja otrzymanych informacji'
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-slate-700" />,
    title: 'Bezpieczeństwo',
    description: 'Przestrzeganie wszystkich zasad bezpieczeństwa i etyki przy zbieraniu danych'
  }
];

// Англійські версії особливостей
const features_EN = [
  {
    icon: <FaDatabase className="w-12 h-12 text-slate-700" />,
    title: 'Data Collection',
    description: 'Automated information collection from any web resources'
  },
  {
    icon: <FaCogs className="w-12 h-12 text-slate-700" />,
    title: 'Flexible Configuration',
    description: 'Customizing the parser for your specific needs'
  },
  {
    icon: <FaChartBar className="w-12 h-12 text-slate-700" />,
    title: 'Data Analysis',
    description: 'Processing and structuring the obtained information'
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-slate-700" />,
    title: 'Security',
    description: 'Compliance with all security and ethics rules when collecting data'
  }
];

const developmentSteps = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Аналіз завдання',
    description: 'Вивчаємо ваші потреби та розробляємо стратегію збору даних'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Розробка',
    description: 'Створюємо парсер з урахуванням усіх вимог'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Тестування',
    description: 'Перевіряємо коректність роботи та якість даних'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Запуск',
    description: 'Розгортаємо парсер на сервері та налаштовуємо моніторинг'
  }
];

// Польські версії kroków tworzenia
const developmentSteps_PL = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Analiza zadania',
    description: 'Badamy Twoje potrzeby i opracowujemy strategię zbierania danych'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Tworzenie',
    description: 'Tworzymy parser uwzględniając wszystkie wymagania'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Testowanie',
    description: 'Sprawdzamy poprawność działania i jakość danych'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Uruchomienie',
    description: 'Wdrażamy parser na serwerze i konfigurujemy monitoring'
  }
];

// Англійські версії кроків розробки
const developmentSteps_EN = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Task Analysis',
    description: 'We study your needs and develop a data collection strategy'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Development',
    description: 'We create a parser taking into account all requirements'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Testing',
    description: 'We check the correctness of operation and data quality'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Launch',
    description: 'We deploy the parser on the server and set up monitoring'
  }
];

const useCases = [
  {
    icon: <FaSearch className="w-12 h-12" />,
    title: 'Моніторинг цін',
    description: 'Відстеження цін конкурентів та аналіз ринку'
  },
  {
    icon: <FaFileAlt className="w-12 h-12" />,
    title: 'Агрегація контенту',
    description: 'Збір та систематизація інформації з різних джерел'
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: 'Аналіз відгуків',
    description: 'Збір та аналіз відгуків про продукти чи послуги'
  },
  {
    icon: <FaSync className="w-12 h-12" />,
    title: 'Автоматизація',
    description: 'Автоматизація рутинних процесів збору даних'
  }
];

// Польські версії przykładów użycia
const useCases_PL = [
  {
    icon: <FaSearch className="w-12 h-12" />,
    title: 'Monitoring cen',
    description: 'Śledzenie cen konkurentów i analiza rynku'
  },
  {
    icon: <FaFileAlt className="w-12 h-12" />,
    title: 'Agregacja treści',
    description: 'Zbieranie i systematyzacja informacji z różnych źródeł'
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: 'Analiza opinii',
    description: 'Zbieranie i analiza opinii o produktach lub usługach'
  },
  {
    icon: <FaSync className="w-12 h-12" />,
    title: 'Automatyzacja',
    description: 'Automatyzacja rutynowych procesów zbierania danych'
  }
];

// Англійські версії прикладів використання
const useCases_EN = [
  {
    icon: <FaSearch className="w-12 h-12" />,
    title: 'Price Monitoring',
    description: 'Tracking competitor prices and market analysis'
  },
  {
    icon: <FaFileAlt className="w-12 h-12" />,
    title: 'Content Aggregation',
    description: 'Collection and systematization of information from various sources'
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: 'Review Analysis',
    description: 'Collection and analysis of product or service reviews'
  },
  {
    icon: <FaSync className="w-12 h-12" />,
    title: 'Automation',
    description: 'Automation of routine data collection processes'
  }
];

const technologies = [
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: 'Мови програмування',
    items: ['Python', 'Node.js', 'Go', 'PHP']
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Інструменти',
    items: ['Selenium', 'Scrapy', 'Puppeteer', 'BeautifulSoup']
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Бази даних',
    items: ['MongoDB', 'PostgreSQL', 'Elasticsearch', 'Redis']
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: 'Інтеграції',
    items: ['REST API', 'GraphQL', 'WebSocket', 'Webhooks']
  }
];

// Польські версії technologii
const technologies_PL = [
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: 'Języki programowania',
    items: ['Python', 'Node.js', 'Go', 'PHP']
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Narzędzia',
    items: ['Selenium', 'Scrapy', 'Puppeteer', 'BeautifulSoup']
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Bazy danych',
    items: ['MongoDB', 'PostgreSQL', 'Elasticsearch', 'Redis']
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: 'Integracje',
    items: ['REST API', 'GraphQL', 'WebSocket', 'Webhooks']
  }
];

// Англійські версії технологій
const technologies_EN = [
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: 'Programming Languages',
    items: ['Python', 'Node.js', 'Go', 'PHP']
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Tools',
    items: ['Selenium', 'Scrapy', 'Puppeteer', 'BeautifulSoup']
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Elasticsearch', 'Redis']
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: 'Integrations',
    items: ['REST API', 'GraphQL', 'WebSocket', 'Webhooks']
  }
];

const ParsersPage = () => {
  const { t, language } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Використовуємо відповідні набори даних залежно від мови
  const activePricePlans = language === 'uk' ? PRICE_PLANS : language === 'pl' ? PRICE_PLANS_PL : PRICE_PLANS_EN;
  const activeFeatures = language === 'uk' ? features : language === 'pl' ? features_PL : features_EN;
  const activeUseCases = language === 'uk' ? useCases : language === 'pl' ? useCases_PL : useCases_EN;
  const activeDevSteps = language === 'uk' ? developmentSteps : language === 'pl' ? developmentSteps_PL : developmentSteps_EN;
  const activeTech = language === 'uk' ? technologies : language === 'pl' ? technologies_PL : technologies_EN;

  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3 }
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero serviceType="parsers" />
      
      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 pt-24 md:pt-16"
      >
        {/* Детальний опис */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="max-w-4xl mx-auto text-left text-gray-600 space-y-4 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Парсери даних - це потужні інструменти для автоматизації збору та обробки інформації з різних джерел. Вони дозволяють ефективно витягувати структуровані дані з веб-сайтів, API, файлів та інших джерел, економлячи час та ресурси вашого бізнесу.'
                : language === 'pl'
                ? 'Parsery danych to potężne narzędzia do automatyzacji zbierania i przetwarzania informacji z różnych źródeł. Pozwalają skutecznie wyciągać strukturalne dane ze stron internetowych, API, plików i innych źródeł, oszczędzając czas i zasoby Twojego biznesu.'
                : 'Data parsers are powerful tools for automating the collection and processing of information from various sources. They allow you to effectively extract structured data from websites, APIs, files, and other sources, saving time and resources for your business.'}
            </motion.p>
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Наші парсери розробляються з урахуванням специфіки ваших потреб та джерел даних. Ми використовуємо сучасні технології та методи для забезпечення високої швидкості, точності та надійності збору даних.'
                : language === 'pl'
                ? 'Nasze parsery są tworzone z uwzględnieniem specyfiki Twoich potrzeb i źródeł danych. Używamy nowoczesnych technologii i metod, aby zapewnić wysoką prędkość, dokładność i niezawodność zbierania danych.'
                : 'Our parsers are developed taking into account the specifics of your needs and data sources. We use modern technologies and methods to ensure high speed, accuracy, and reliability of data collection.'}
            </motion.p>
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Кожен парсер налаштовується під конкретні вимоги та може обробляти різні формати даних. Ми забезпечуємо повний цикл розробки: від аналізу джерел та проектування архітектури до впровадження, тестування та подальшої підтримки.'
                : language === 'pl'
                ? 'Każdy parser jest konfigurowany pod konkretne wymagania i może przetwarzać różne formaty danych. Zapewniamy pełny cykl tworzenia: od analizy źródeł i projektowania architektury po wdrożenie, testowanie i dalsze wsparcie.'
                : 'Each parser is configured for specific requirements and can process different data formats. We provide a full development cycle: from source analysis and architecture design to implementation, testing, and further support.'}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Основні можливості */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          {activeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="mb-4"
                variants={pulseAnimation}
                animate="animate"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Процес розробки */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
{language === 'uk' ? 'Процес розробки' : language === 'pl' ? 'Proces tworzenia' : 'Development Process'}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {activeDevSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-green-600"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Тарифні плани */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
{language === 'uk' ? 'Тарифні плани' : language === 'pl' ? 'Plany cenowe' : 'Price Plans'}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {activePricePlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.recommended ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg">
{language === 'uk' ? 'Рекомендований' : language === 'pl' ? 'Polecany' : 'Recommended'}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                    <span className="text-4xl font-bold text-gray-800 ml-4">{plan.price}</span>
                  </div>
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-3" />
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
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Технології */}
        <motion.div 
          className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-xl shadow-lg p-8 mb-16 text-gray-900"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
{language === 'uk' ? 'Технології' : language === 'pl' ? 'Technologie' : 'Technologies'}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {activeTech.map((tech, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="bg-gray-900/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-gray-900"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="font-semibold mb-4 text-gray-900">{tech.title}</h3>
                <motion.ul 
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {tech.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-800"
                      variants={fadeInUp}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Сфери застосування */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
{language === 'uk' ? 'Сфери застосування' : language === 'pl' ? 'Obszary zastosowań' : 'Application Areas'}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {activeUseCases.map((useCase, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-green-500 mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {useCase.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-12 text-gray-600 space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Наші парсери успішно використовуються в різних галузях бізнесу для вирішення широкого спектру завдань. Від моніторингу цін конкурентів до збору та аналізу відгуків клієнтів - ми створюємо інструменти, які допомагають бізнесу залишатися конкурентоспроможним та приймати обґрунтовані рішення.'
                : language === 'pl'
                ? 'Nasze parsery są z powodzeniem wykorzystywane w różnych sektorach biznesu do rozwiązywania szerokiego spektrum zadań. Od monitorowania cen konkurentów po zbieranie i analizę opinii klientów - tworzymy narzędzia, które pomagają firmom pozostać konkurencyjnymi i podejmować uzasadnione decyzje.'
                : 'Our parsers are successfully used in various business sectors to solve a wide range of tasks. From monitoring competitor prices to collecting and analyzing customer reviews - we create tools that help businesses stay competitive and make informed decisions.'}
            </motion.p>
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Ми постійно вдосконалюємо наші рішення, впроваджуємо нові технології та методи обробки даних. Наша мета - забезпечити клієнтів надійними та ефективними інструментами для роботи з даними, які допоможуть їм досягти успіху в своїй галузі.'
                : language === 'pl'
                ? 'Stale ulepszamy nasze rozwiązania, wprowadzamy nowe technologie i metody przetwarzania danych. Naszym celem jest zapewnienie klientom niezawodnych i skutecznych narzędzi do pracy z danymi, które pomogą im osiągnąć sukces w swojej branży.'
                : 'We constantly improve our solutions, implement new technologies and data processing methods. Our goal is to provide clients with reliable and effective tools for working with data that will help them achieve success in their industry.'}
            </motion.p>
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Довіртеся нашому досвіду у розробці парсерів, і ми створимо рішення, яке повністю відповідатиме вашим потребам та допоможе досягти поставлених бізнес-цілей. Ми гарантуємо високу якість розробки, надійну підтримку та професійний супровід на всіх етапах співпраці.'
                : language === 'pl'
                ? 'Zaufaj naszemu doświadczeniu w tworzeniu parserów, a stworzymy rozwiązanie, które w pełni odpowiada Twoim potrzebom i pomoże osiągnąć wyznaczone cele biznesowe. Gwarantujemy wysoką jakość rozwoju, niezawodne wsparcie i profesjonalne prowadzenie na wszystkich etapach współpracy.'
                : 'Trust our experience in parser development, and we will create a solution that fully meets your needs and helps achieve your business goals. We guarantee high quality development, reliable support and professional guidance at all stages of cooperation.'}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Кнопка портфоліо */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 text-black border-2 border-gray-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              {language === 'uk' ? 'Подивіться наші роботи' : language === 'en' ? 'Check out our work' : language === 'ru' ? 'Посмотрите наши работы' : language === 'pl' ? 'Zobacz nasze prace' : 'Подивіться наші роботи'}
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              {language === 'uk' ? 'Перегляньте портфоліо наших успішних проектів парсерів та автоматизації' : language === 'en' ? 'Browse our portfolio of successful parser and automation projects' : language === 'ru' ? 'Просмотрите портфолио наших успешных проектов парсеров и автоматизации' : language === 'pl' ? 'Przejrzyj nasze portfolio udanych projektów parserów i automatyzacji' : 'Перегляньте портфоліо наших успішних проектів парсерів та автоматизації'}
            </p>
            <motion.a
              href={language === 'uk' ? '/portfolio' : language === 'en' ? '/en/portfolio' : language === 'ru' ? '/ru/portfolio' : language === 'pl' ? '/pl/portfolio' : '/portfolio'}
              className="portfolio-button inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-black px-8 py-3 rounded-full font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg"
              style={{ 
                color: '#ffffff !important',
                textDecoration: 'none',
                WebkitTextFillColor: '#ffffff !important'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span 
                className="portfolio-text"
                style={{ 
                  color: '#ffffff !important',
                  WebkitTextFillColor: '#ffffff !important'
                }}
              >
                {language === 'uk' ? 'Переглянути портфоліо' : language === 'en' ? 'View Portfolio' : language === 'ru' ? 'Посмотреть портфолио' : language === 'pl' ? 'Zobacz Portfolio' : 'Переглянути портфоліо'}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" style={{ color: '#ffffff !important' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Форма зворотного зв'язку */}
        <motion.section 
          id="lead-form" 
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <LeadForm />
        </motion.section>
      </motion.div>

      {/* Посилання на головну та портфоліо */}
      <motion.div 
        className="fixed bottom-8 left-8 flex flex-col gap-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.a
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-slate-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
<span>{language === 'uk' ? 'На головну' : language === 'pl' ? 'Główna' : 'Back to Home'}</span>
        </motion.a>
        
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

      {/* Додаємо новий елемент - плаваючу кнопку */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        variants={floatAnimation}
        animate="animate"
      >
        <motion.a
          href="#lead-form"
          className="bg-slate-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaRocket className="w-6 h-6" />
        </motion.a>
      </motion.div>

      {/* Додаємо новий елемент - індикатор прогресу */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-slate-700"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ParsersPage; 