'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRobot, FaCode, FaBrain, FaChartLine, FaServer, 
  FaShieldAlt, FaCreditCard, FaUserCog, FaRocket,
  FaCheckCircle, FaDatabase, FaCogs
} from 'react-icons/fa';
import LeadForm from '../ui/LeadForm';
import LeadModal from '../components/LeadModal';
import ServiceHero from '../ui/ServiceHero';
import { useTranslation } from '../hooks/useTranslation';

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

// Польські версії планів
const PRICE_PLANS_PL = [
  {
    title: 'Lite',
    description: 'Dla małych firm: automatyzuj odpowiedzi na popularne pytania i optymalizuj czas',
    price: '1000₴',
    originalPrice: '1500₴',
    features: [
      'Tworzenie bota pod Twoje potrzeby',
      'Jedna aktualizacja w miesiącu',
      'Monitoring serwera 24/7',
    ],
    orderLink: 'https://t.me/nowayrm',
    accent: 'from-blue-500 to-blue-600',
    buttonText: 'Zamów teraz'
  },
  {
    title: 'Standard',
    description: 'Optymalny wybór dla średnich firm z rozszerzonym funkcjonalnością',
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
      'Funkcja zwrotnego kontaktu',
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

const features = [
  {
    icon: <FaRobot className="w-12 h-12 text-slate-700" />,
    title: 'Розумні чат-боти',
    description: 'Створюємо інтелектуальних ботів, які розуміють контекст та надають релевантні відповіді'
  },
  {
    icon: <FaCode className="w-12 h-12 text-slate-700" />,
    title: 'Інтеграція з будь-якою платформою',
    description: 'Telegram, Viber, Facebook Messenger, WhatsApp та інші месенджери'
  },
  {
    icon: <FaBrain className="w-12 h-12 text-slate-700" />,
    title: 'Штучний інтелект',
    description: 'Використовуємо передові технології AI для покращення взаємодії з користувачами'
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-slate-700" />,
    title: 'Аналітика та звіти',
    description: 'Детальна статистика використання та ефективності бота'
  }
];

// Польські версії особливостей
const features_PL = [
  {
    icon: <FaRobot className="w-12 h-12 text-slate-700" />,
    title: 'Inteligentne chatboty',
    description: 'Tworzymy inteligentne boty, które rozumieją kontekst i dostarczają trafne odpowiedzi'
  },
  {
    icon: <FaCode className="w-12 h-12 text-slate-700" />,
    title: 'Integracja z dowolną platformą',
    description: 'Telegram, Viber, Facebook Messenger, WhatsApp i inne komunikatory'
  },
  {
    icon: <FaBrain className="w-12 h-12 text-slate-700" />,
    title: 'Sztuczna inteligencja',
    description: 'Używamy zaawansowanych technologii AI do poprawy interakcji z użytkownikami'
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-slate-700" />,
    title: 'Analityka i raporty',
    description: 'Szczegółowa statystyka wykorzystania i skuteczności bota'
  }
];

// Англійські версії особливостей
const features_EN = [
  {
    icon: <FaRobot className="w-12 h-12 text-slate-700" />,
    title: 'Smart Chatbots',
    description: 'We create intelligent bots that understand context and provide relevant answers'
  },
  {
    icon: <FaCode className="w-12 h-12 text-slate-700" />,
    title: 'Integration with Any Platform',
    description: 'Telegram, Viber, Facebook Messenger, WhatsApp and other messengers'
  },
  {
    icon: <FaBrain className="w-12 h-12 text-slate-700" />,
    title: 'Artificial Intelligence',
    description: 'We use advanced AI technologies to improve user interaction'
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-slate-700" />,
    title: 'Analytics and Reports',
    description: 'Detailed statistics on bot usage and effectiveness'
  }
];

const developmentSteps = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Аналіз та планування',
    description: 'Вивчаємо ваші потреби, розробляємо стратегію та технічне завдання'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Розробка',
    description: 'Створюємо функціонал бота згідно з технічним завданням'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Тестування',
    description: 'Проводимо комплексне тестування всіх функцій бота'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Запуск',
    description: 'Розгортаємо бота на сервері та налаштовуємо моніторинг'
  }
];

// Польські версії kroków tworzenia
const developmentSteps_PL = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Analiza i planowanie',
    description: 'Badamy Twoje potrzeby, opracowujemy strategię i specyfikację techniczną'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Tworzenie',
    description: 'Tworzymy funkcjonalność bota zgodnie ze specyfikacją techniczną'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Testowanie',
    description: 'Przeprowadzamy kompleksowe testowanie wszystkich funkcji bota'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Uruchomienie',
    description: 'Wdrażamy bota na serwerze i konfigurujemy monitoring'
  }
];

// Англійські версії кроків розробки
const developmentSteps_EN = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Analysis and Planning',
    description: 'We study your needs, develop a strategy and technical specifications'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Development',
    description: 'We create bot functionality according to technical specifications'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Testing',
    description: 'We conduct comprehensive testing of all bot functions'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Launch',
    description: 'We deploy the bot on the server and set up monitoring'
  }
];

const integrations = [
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'CRM системи',
    description: 'Інтеграція з популярними CRM системами'
  },
  {
    icon: <FaCreditCard className="w-8 h-8" />,
    title: 'Платіжні системи',
    description: 'Підключення різних способів оплати'
  },
  {
    icon: <FaUserCog className="w-8 h-8" />,
    title: 'API інтеграції',
    description: 'Підключення до зовнішніх сервісів'
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: 'Власні системи',
    description: 'Інтеграція з вашими внутрішніми системами'
  }
];

// Польські версії integracji
const integrations_PL = [
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Systemy CRM',
    description: 'Integracja z popularnymi systemami CRM'
  },
  {
    icon: <FaCreditCard className="w-8 h-8" />,
    title: 'Systemy płatności',
    description: 'Podłączenie różnych metod płatności'
  },
  {
    icon: <FaUserCog className="w-8 h-8" />,
    title: 'Integracje API',
    description: 'Podłączenie do zewnętrznych serwisów'
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: 'Własne systemy',
    description: 'Integracja z Twoimi wewnętrznymi systemami'
  }
];

// Англійські версії інтеграцій
const integrations_EN = [
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'CRM Systems',
    description: 'Integration with popular CRM systems'
  },
  {
    icon: <FaCreditCard className="w-8 h-8" />,
    title: 'Payment Systems',
    description: 'Connection of various payment methods'
  },
  {
    icon: <FaUserCog className="w-8 h-8" />,
    title: 'API Integrations',
    description: 'Connection to external services'
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: 'Custom Systems',
    description: 'Integration with your internal systems'
  }
];

const ChatbotsPage = () => {
  const { t, language } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Використовуємо відповідний набір тарифів та особливостей залежно від мови
  const activePricePlans = language === 'uk' ? PRICE_PLANS : language === 'pl' ? PRICE_PLANS_PL : PRICE_PLANS_EN;
  const activeFeatures = language === 'uk' ? features : language === 'pl' ? features_PL : features_EN;
  const activeDevSteps = language === 'uk' ? developmentSteps : language === 'pl' ? developmentSteps_PL : developmentSteps_EN;
  const activeIntegrations = language === 'uk' ? integrations : language === 'pl' ? integrations_PL : integrations_EN;

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

  const slideIn = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero serviceType="chatbots" />
      
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
                ? 'Telegram боти стали незамінним інструментом для бізнесу будь-якого масштабу. Вони дозволяють автоматизувати рутинні процеси, налагодити ефективну комунікацію з клієнтами та збільшити продажі. Наша команда спеціалізується на розробці ботів різної складності - від простих інформаційних помічників до складних CRM-систем.'
                : language === 'pl'
                ? 'Boty Telegram stały się niezastąpionym narzędziem dla firm każdej skali. Pozwalają automatyzować rutynowe procesy, nawiązywać efektywną komunikację z klientami i zwiększać sprzedaż. Nasz zespół specjalizuje się w tworzeniu botów o różnej złożoności - od prostych asystentów informacyjnych po złożone systemy CRM.'
                : 'Telegram bots have become an indispensable tool for businesses of any scale. They allow you to automate routine processes, establish effective communication with customers, and increase sales. Our team specializes in developing bots of various complexity - from simple information assistants to complex CRM systems.'}
            </motion.p>
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Ми використовуємо передові технології штучного інтелекту та машинного навчання для створення ботів, які розуміють контекст спілкування та можуть вести природний діалог. Наші рішення здатні самонавчатися, покращуючи свою роботу з кожною взаємодією.'
                : language === 'pl'
                ? 'Używamy zaawansowanych technologii sztucznej inteligencji i uczenia maszynowego do tworzenia botów, które rozumieją kontekst komunikacji i mogą prowadzić naturalny dialog. Nasze rozwiązania są zdolne do samouczenia się, poprawiając swoją pracę z każdą interakcją.'
                : 'We use advanced artificial intelligence and machine learning technologies to create bots that understand the context of communication and can conduct natural dialogue. Our solutions are capable of self-learning, improving their work with each interaction.'}
            </motion.p>
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Кожен чат-бот розробляється індивідуально під потреби вашого бізнесу, враховуючи специфіку галузі та вимоги до функціоналу. Ми забезпечуємо повний цикл розробки: від аналізу вимог та проектування сценаріїв до впровадження, навчання та подальшої підтримки.'
                : language === 'pl'
                ? 'Każdy chatbot jest tworzony indywidualnie pod potrzeby Twojego biznesu, uwzględniając specyfikę branży i wymagania funkcjonalne. Zapewniamy pełny cykl tworzenia: od analizy wymagań i projektowania scenariuszy po wdrożenie, szkolenie i dalsze wsparcie.'
                : 'Each chatbot is developed individually for your business needs, taking into account the specifics of the industry and functional requirements. We provide a full development cycle: from requirements analysis and scenario design to implementation, training and further support.'}
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
                  className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600"
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
                  plan.recommended ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
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

        {/* Інтеграції */}
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
{language === 'uk' ? 'Можливості інтеграції' : language === 'pl' ? 'Możliwości integracji' : 'Integration Options'}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {activeIntegrations.map((integration, index) => (
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
                  {integration.icon}
                </motion.div>
                <h3 className="font-semibold mb-2 text-gray-900">{integration.title}</h3>
                <p className="text-gray-800">{integration.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Переваги */}
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
{language === 'uk' ? 'Чому варто обрати нас' : language === 'pl' ? 'Dlaczego warto nas wybrać' : 'Why Choose Us'}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-blue-500 mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaShieldAlt className="w-12 h-12 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{language === 'uk' ? 'Безпека даних' : language === 'pl' ? 'Bezpieczeństwo danych' : 'Data Security'}</h3>
              <p className="text-gray-600">
                {language === 'uk'
                  ? 'Гарантуємо повну конфіденційність та захист ваших даних. Використовуємо сучасні методи шифрування та дотримуємося всіх стандартів безпеки.'
                  : language === 'pl'
                  ? 'Gwarantujemy pełną poufność i ochronę Twoich danych. Używamy nowoczesnych metod szyfrowania i przestrzegamy wszystkich standardów bezpieczeństwa.'
                  : 'We guarantee complete confidentiality and protection of your data. We use modern encryption methods and adhere to all security standards.'}
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-blue-500 mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaServer className="w-12 h-12 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{language === 'uk' ? 'Надійний хостинг' : language === 'pl' ? 'Niezawodny hosting' : 'Reliable Hosting'}</h3>
              <p className="text-gray-600">
                {language === 'uk'
                  ? 'Розміщуємо ботів на потужних серверах з моніторингом 24/7. Забезпечуємо високу доступність та швидкість роботи.'
                  : language === 'pl'
                  ? 'Hostujemy boty na potężnych serwerach z monitoringiem 24/7. Zapewniamy wysoką dostępność i szybkość działania.'
                  : 'We host bots on powerful servers with 24/7 monitoring. We ensure high availability and fast performance.'}
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-blue-500 mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaUserCog className="w-12 h-12 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{language === 'uk' ? 'Технічна підтримка' : language === 'pl' ? 'Wsparcie techniczne' : 'Technical Support'}</h3>
              <p className="text-gray-600">
                {language === 'uk'
                  ? 'Забезпечуємо швидку та професійну підтримку. Оперативно вирішуємо будь-які питання та допомагаємо з налаштуванням.'
                  : language === 'pl'
                  ? 'Zapewniamy szybkie i profesjonalne wsparcie. Szybko rozwiązujemy wszelkie problemy i pomagamy w konfiguracji.'
                  : 'We provide fast and professional support. We promptly solve any issues and help with configuration.'}
              </p>
            </motion.div>
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
                ? 'Наші чат-боти вже допомогли багатьом компаніям автоматизувати процеси обслуговування клієнтів та збільшити продажі. Вони здатні обробляти велику кількість звернень одночасно, працюють цілодобово та ніколи не втомлюються.'
                : language === 'pl'
                ? 'Nasze chatboty już pomogły wielu firmom automatyzować procesy obsługi klientów i zwiększyć sprzedaż. Są w stanie przetwarzać dużą liczbę zapytań jednocześnie, pracują 24/7 i nigdy się nie męczą.'
                : 'Our chatbots have already helped many companies automate customer service processes and increase sales. They are able to process a large number of requests simultaneously, work around the clock, and never get tired.'}
            </motion.p>
            <motion.p variants={fadeInUp}>
              {language === 'uk'
                ? 'Ми постійно вдосконалюємо наші рішення, слідкуємо за новими технологіями та впроваджуємо інновації, щоб забезпечити найкращий користувацький досвід. Наша мета - створювати чат-ботів, які стануть надійними помічниками у вашому бізнесі.'
                : language === 'pl'
                ? 'Stale ulepszamy nasze rozwiązania, śledzimy nowe technologie i wprowadzamy innowacje, aby zapewnić najlepsze doświadczenie użytkownika. Naszym celem jest tworzenie chatbotów, które staną się niezawodnymi asystentami w Twoim biznesie.'
                : 'We constantly improve our solutions, follow new technologies, and implement innovations to provide the best user experience. Our goal is to create chatbots that will become reliable assistants in your business.'}
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
              {language === 'uk' ? 'Перегляньте портфоліо наших успішних проектів чат-ботів' : language === 'en' ? 'Browse our portfolio of successful chatbot projects' : language === 'ru' ? 'Просмотрите портфолио наших успешных проектов чат-ботов' : language === 'pl' ? 'Przejrzyj nasze portfolio udanych projektów chatbotów' : 'Перегляньте портфоліо наших успішних проектів чат-ботів'}
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

export default ChatbotsPage; 