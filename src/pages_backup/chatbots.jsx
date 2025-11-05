'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRobot, FaCode, FaBrain, FaChartLine, FaServer, 
  FaShieldAlt, FaCreditCard, FaUserCog, FaRocket,
  FaCheckCircle, FaDatabase, FaCogs, FaDesktop
} from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
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
    accent: 'from-gray-800 to-gray-900',
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
    accent: 'from-gray-700 to-gray-800',
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
    accent: 'from-gray-900 to-black',
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
    accent: 'from-gray-800 to-gray-900',
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
    accent: 'from-gray-700 to-gray-800',
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
    accent: 'from-gray-900 to-black',
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
    accent: 'from-gray-800 to-gray-900',
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
    accent: 'from-gray-700 to-gray-800',
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
    accent: 'from-gray-900 to-black',
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
    icon: <FaDatabase className="w-12 h-12" />,
    title: 'CRM системи',
    description: 'Інтеграція з популярними CRM системами',
    details: 'Підключаємо ваш бот до будь-якої CRM системи: AmoCRM, Bitrix24, HubSpot, Salesforce та інші. Автоматична синхронізація контактів, угод, завдань та історії взаємодій. Ваш бот стає повноцінною частиною CRM-системи, дозволяючи клієнтам отримувати інформацію та створювати заявки безпосередньо в Telegram.'
  },
  {
    icon: <FaCreditCard className="w-12 h-12" />,
    title: 'Платіжні системи',
    description: 'Підключення різних способів оплати',
    details: 'Інтегруємо різноманітні платіжні рішення: Stripe, PayPal, LiqPay, Fondy, WayForPay та інші. Підтримка карток, електронних гаманців, криптовалют. Безпечні платежі з підтвердженням та автоматичним оновленням статусу замовлень. Ваші клієнти можуть оплачувати товари та послуги безпосередньо в боті.'
  },
  {
    icon: <FaUserCog className="w-12 h-12" />,
    title: 'API інтеграції',
    description: 'Підключення до зовнішніх сервісів',
    details: 'Налаштовуємо інтеграції з будь-якими зовнішніми API: Google Services, Facebook, Instagram, YouTube, погодні сервіси, новинні API, бази даних та інші. Ваш бот може отримувати та обробляти дані з будь-яких джерел, автоматизувати складні процеси та надавати користувачам актуальну інформацію.'
  },
  {
    icon: <FaCogs className="w-12 h-12" />,
    title: 'Власні системи',
    description: 'Інтеграція з вашими внутрішніми системами',
    details: 'Створюємо інтеграції з вашими внутрішніми системами та базами даних через REST API, GraphQL або webhook. Синхронізація з ERP системами, складським обліком, бухгалтерією, системою обліку клієнтів. Ваш бот стає мостом між Telegram та вашою IT-інфраструктурою.'
  }
];

// Польські версії integracji
const integrations_PL = [
  {
    icon: <FaDatabase className="w-12 h-12" />,
    title: 'Systemy CRM',
    description: 'Integracja z popularnymi systemami CRM',
    details: 'Łączymy Twojego bota z dowolnym systemem CRM: AmoCRM, Bitrix24, HubSpot, Salesforce i inne. Automatyczna synchronizacja kontaktów, transakcji, zadań i historii interakcji. Twój bot staje się pełnoprawną częścią systemu CRM, pozwalając klientom otrzymywać informacje i tworzyć zgłoszenia bezpośrednio w Telegram.'
  },
  {
    icon: <FaCreditCard className="w-12 h-12" />,
    title: 'Systemy płatności',
    description: 'Podłączenie różnych metod płatności',
    details: 'Integrujemy różnorodne rozwiązania płatnicze: Stripe, PayPal, LiqPay, Fondy, WayForPay i inne. Obsługa kart, portfeli elektronicznych, kryptowalut. Bezpieczne płatności z potwierdzeniem i automatyczną aktualizacją statusu zamówień. Twoi klienci mogą płacić za towary i usługi bezpośrednio w bocie.'
  },
  {
    icon: <FaUserCog className="w-12 h-12" />,
    title: 'Integracje API',
    description: 'Podłączenie do zewnętrznych serwisów',
    details: 'Konfigurujemy integracje z dowolnymi zewnętrznymi API: Google Services, Facebook, Instagram, YouTube, serwisy pogodowe, API wiadomości, bazy danych i inne. Twój bot może otrzymywać i przetwarzać dane z dowolnych źródeł, automatyzować złożone procesy i dostarczać użytkownikom aktualne informacje.'
  },
  {
    icon: <FaCogs className="w-12 h-12" />,
    title: 'Własne systemy',
    description: 'Integracja z Twoimi wewnętrznymi systemami',
    details: 'Tworzymy integracje z Twoimi wewnętrznymi systemami i bazami danych przez REST API, GraphQL lub webhook. Synchronizacja z systemami ERP, księgowością magazynową, rachunkowością, systemem obsługi klienta. Twój bot staje się mostem między Telegram a Twoją infrastrukturą IT.'
  }
];

// Англійські версії інтеграцій
const integrations_EN = [
  {
    icon: <FaDatabase className="w-12 h-12" />,
    title: 'CRM Systems',
    description: 'Integration with popular CRM systems',
    details: 'We connect your bot to any CRM system: AmoCRM, Bitrix24, HubSpot, Salesforce, and others. Automatic synchronization of contacts, deals, tasks, and interaction history. Your bot becomes a full part of the CRM system, allowing clients to receive information and create requests directly in Telegram.'
  },
  {
    icon: <FaCreditCard className="w-12 h-12" />,
    title: 'Payment Systems',
    description: 'Connection of various payment methods',
    details: 'We integrate various payment solutions: Stripe, PayPal, LiqPay, Fondy, WayForPay, and others. Support for cards, e-wallets, cryptocurrencies. Secure payments with confirmation and automatic order status updates. Your clients can pay for goods and services directly in the bot.'
  },
  {
    icon: <FaUserCog className="w-12 h-12" />,
    title: 'API Integrations',
    description: 'Connection to external services',
    details: 'We configure integrations with any external APIs: Google Services, Facebook, Instagram, YouTube, weather services, news APIs, databases, and others. Your bot can receive and process data from any sources, automate complex processes, and provide users with up-to-date information.'
  },
  {
    icon: <FaCogs className="w-12 h-12" />,
    title: 'Custom Systems',
    description: 'Integration with your internal systems',
    details: 'We create integrations with your internal systems and databases via REST API, GraphQL, or webhook. Synchronization with ERP systems, warehouse accounting, accounting, customer management systems. Your bot becomes a bridge between Telegram and your IT infrastructure.'
  }
];

const ChatbotsPage = () => {
  const { t, language } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

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
            className="max-w-5xl mx-auto text-left space-y-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border border-gray-300">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {language === 'uk' 
                  ? 'Чому Telegram боти - це майбутнє бізнесу' 
                  : language === 'pl' 
                  ? 'Dlaczego boty Telegram to przyszłość biznesu'
                  : 'Why Telegram bots are the future of business'}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                {language === 'uk'
                  ? 'Telegram боти стали незамінним інструментом для бізнесу будь-якого масштабу. Вони дозволяють автоматизувати рутинні процеси, налагодити ефективну комунікацію з клієнтами та збільшити продажі на 30-40% завдяки миттєвим відповідям та персональному підходу. Наша команда спеціалізується на розробці ботів різної складності - від простих інформаційних помічників до складних CRM-систем з інтеграцією штучного інтелекту.'
                  : language === 'pl'
                  ? 'Boty Telegram stały się niezastąpionym narzędziem dla firm każdej skali. Pozwalają automatyzować rutynowe procesy, nawiązywać efektywną komunikację z klientami i zwiększać sprzedaż o 30-40% dzięki natychmiastowym odpowiedziom i podejściu personalnemu. Nasz zespół specjalizuje się w tworzeniu botów o różnej złożoności - od prostych asystentów informacyjnych po złożone systemy CRM z integracją sztucznej inteligencji.'
                  : 'Telegram bots have become an indispensable tool for businesses of any scale. They allow you to automate routine processes, establish effective communication with customers, and increase sales by 30-40% thanks to instant responses and personalized approach. Our team specializes in developing bots of various complexity - from simple information assistants to complex CRM systems with artificial intelligence integration.'}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {language === 'uk'
                  ? 'Ми використовуємо передові технології штучного інтелекту та машинного навчання для створення ботів, які розуміють контекст спілкування та можуть вести природний діалог. Наші рішення здатні самонавчатися, покращуючи свою роботу з кожною взаємодією, що дозволяє забезпечити унікальний досвід для кожного клієнта.'
                  : language === 'pl'
                  ? 'Używamy zaawansowanych technologii sztucznej inteligencji i uczenia maszynowego do tworzenia botów, które rozumieją kontekst komunikacji i mogą prowadzić naturalny dialog. Nasze rozwiązania są zdolne do samouczenia się, poprawiając swoją pracę z każdą interakcją, co pozwala zapewnić unikalne doświadczenie dla każdego klienta.'
                  : 'We use advanced artificial intelligence and machine learning technologies to create bots that understand the context of communication and can conduct natural dialogue. Our solutions are capable of self-learning, improving their work with each interaction, which allows us to provide a unique experience for each client.'}
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12 border border-gray-400">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {language === 'uk' 
                  ? 'Персоналізований підхід до кожного проекту' 
                  : language === 'pl' 
                  ? 'Spersonalizowane podejście do każdego projektu'
                  : 'Personalized approach to each project'}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {language === 'uk'
                  ? 'Кожен чат-бот розробляється індивідуально під потреби вашого бізнесу, враховуючи специфіку галузі та вимоги до функціоналу. Ми забезпечуємо повний цикл розробки: від глибокого аналізу вимог та проектування індивідуальних сценаріїв до впровадження, навчання вашої команди та подальшої технічної підтримки 24/7. Наші боти не просто відповідають на запитання - вони будують довірчі відносини з клієнтами та допомагають вашому бізнесу рости.'
                  : language === 'pl'
                  ? 'Każdy chatbot jest tworzony indywidualnie pod potrzeby Twojego biznesu, uwzględniając specyfikę branży i wymagania funkcjonalne. Zapewniamy pełny cykl tworzenia: od głębokiej analizy wymagań i projektowania indywidualnych scenariuszy po wdrożenie, szkolenie Twojego zespołu i dalsze wsparcie techniczne 24/7. Nasze boty nie tylko odpowiadają na pytania - budują relacje zaufania z klientami i pomagają Twojemu biznesowi rosnąć.'
                  : 'Each chatbot is developed individually for your business needs, taking into account the specifics of the industry and functional requirements. We provide a full development cycle: from deep requirements analysis and individual scenario design to implementation, training your team, and further 24/7 technical support. Our bots don\'t just answer questions - they build trust relationships with customers and help your business grow.'}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Графіки та статистика */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              {language === 'uk' 
                ? 'Ефективність наших ботів у цифрах' 
                : language === 'pl' 
                ? 'Skuteczność naszych botów w liczbach'
                : 'Our bots effectiveness in numbers'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                  {language === 'uk' 
                    ? 'Зростання продуктивності за місяці' 
                    : language === 'pl' 
                    ? 'Wzrost wydajności w miesiącach'
                    : 'Productivity growth over months'}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={[
                    { month: language === 'uk' ? 'Січ' : language === 'pl' ? 'Sty' : 'Jan', efficiency: 75, sales: 60 },
                    { month: language === 'uk' ? 'Лют' : language === 'pl' ? 'Lut' : 'Feb', efficiency: 82, sales: 72 },
                    { month: language === 'uk' ? 'Бер' : language === 'pl' ? 'Mar' : 'Mar', efficiency: 88, sales: 85 },
                    { month: language === 'uk' ? 'Кві' : language === 'pl' ? 'Kwi' : 'Apr', efficiency: 92, sales: 90 },
                    { month: language === 'uk' ? 'Тра' : language === 'pl' ? 'Maj' : 'May', efficiency: 95, sales: 94 },
                    { month: language === 'uk' ? 'Чер' : language === 'pl' ? 'Cze' : 'Jun', efficiency: 98, sales: 97 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="efficiency" stroke="#1f2937" strokeWidth={3} name={language === 'uk' ? 'Ефективність %' : language === 'pl' ? 'Wydajność %' : 'Efficiency %'} />
                    <Line type="monotone" dataKey="sales" stroke="#000000" strokeWidth={3} name={language === 'uk' ? 'Продажі %' : language === 'pl' ? 'Sprzedaż %' : 'Sales %'} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                  {language === 'uk' 
                    ? 'Розподіл типів ботів' 
                    : language === 'pl' 
                    ? 'Rozkład typów botów'
                    : 'Bot types distribution'}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: language === 'uk' ? 'E-commerce' : language === 'pl' ? 'E-commerce' : 'E-commerce', value: 35 },
                        { name: language === 'uk' ? 'Підтримка' : language === 'pl' ? 'Wsparcie' : 'Support', value: 28 },
                        { name: language === 'uk' ? 'CRM' : language === 'pl' ? 'CRM' : 'CRM', value: 22 },
                        { name: language === 'uk' ? 'Інші' : language === 'pl' ? 'Inne' : 'Others', value: 15 }
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#374151"
                      dataKey="value"
                    >
                      {[
                        { name: language === 'uk' ? 'E-commerce' : language === 'pl' ? 'E-commerce' : 'E-commerce', value: 35 },
                        { name: language === 'uk' ? 'Підтримка' : language === 'pl' ? 'Wsparcie' : 'Support', value: 28 },
                        { name: language === 'uk' ? 'CRM' : language === 'pl' ? 'CRM' : 'CRM', value: 22 },
                        { name: language === 'uk' ? 'Інші' : language === 'pl' ? 'Inne' : 'Others', value: 15 }
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#1f2937', '#374151', '#4b5563', '#000000'][index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
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
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div 
                className="mb-6 text-4xl"
                variants={pulseAnimation}
                animate="animate"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Процес розробки */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === 'uk' ? 'Процес розробки' : language === 'pl' ? 'Proces tworzenia' : 'Development Process'}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === 'uk' 
              ? 'Ми дотримуємося чіткого та прозорого процесу, який забезпечує якісний результат на кожному етапі' 
              : language === 'pl' 
              ? 'Stosujemy przejrzysty i jasny proces, który zapewnia wysoką jakość na każdym etapie'
              : 'We follow a clear and transparent process that ensures quality results at every stage'}
          </motion.p>
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
                className="text-center relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-800 to-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.icon}
                </motion.div>
                <div className="absolute top-10 right-2 bg-gray-200 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{step.description}</p>
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
                  plan.recommended ? 'ring-2 ring-gray-900' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-gray-900 text-white px-4 py-1 rounded-bl-lg">
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
                        <FaCheckCircle className="text-gray-700 mr-3" />
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
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-8 md:p-12 mb-20 border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900"
            variants={fadeInUp}
          >
            {language === 'uk' ? 'Можливості інтеграції' : language === 'pl' ? 'Możliwości integracji' : 'Integration Options'}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {language === 'uk' 
              ? 'Наші боти легко інтегруються з будь-якими системами та сервісами, розширюючи можливості вашого бізнесу' 
              : language === 'pl' 
              ? 'Nasze boty łatwo integrują się z dowolnymi systemami i serwisami, rozszerzając możliwości Twojego biznesu'
              : 'Our bots easily integrate with any systems and services, expanding your business capabilities'}
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {activeIntegrations.map((integration, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-300 hover:border-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-800 to-black rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {integration.icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{integration.title}</h3>
                <p className="text-lg text-gray-700 mb-4 font-medium">{integration.description}</p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{integration.details}</p>
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
                className="text-gray-700 mb-4"
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
                className="text-gray-700 mb-4"
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
                className="text-gray-700 mb-4"
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

        {/* Технологічний стек */}
        <motion.div 
          className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900"
            variants={fadeInUp}
          >
            {language === 'uk' ? 'Технології, які ми використовуємо' : language === 'pl' ? 'Technologie, których używamy' : 'Technologies We Use'}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {language === 'uk' 
              ? 'Сучасні технології та фреймворки для створення надійних та швидких рішень' 
              : language === 'pl' 
              ? 'Nowoczesne technologie i frameworki do tworzenia niezawodnych i szybkich rozwiązań'
              : 'Modern technologies and frameworks for creating reliable and fast solutions'}
          </motion.p>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {['Python', 'Node.js', 'aiogram', 'Telegram API', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Nginx', 'Git', 'CI/CD', 'REST API'].map((tech, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="text-2xl font-bold text-gray-800 mb-2">{tech}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-gray-800 to-black h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 + Math.random() * 10}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Секція */}
        <motion.div 
          className="mb-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            variants={fadeInUp}
          >
            {language === 'uk' ? 'Часті питання' : language === 'pl' ? 'Często zadawane pytania' : 'Frequently Asked Questions'}
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                q: language === 'uk' ? 'Скільки часу займає розробка бота?' : language === 'pl' ? 'Ile czasu zajmuje stworzenie bota?' : 'How long does it take to develop a bot?',
                a: language === 'uk' ? 'Час розробки залежить від складності проекту. Простий інформаційний бот - 3-5 днів, середній бот з формами та інтеграціями - 1-2 тижні, складний CRM-бот - 2-4 тижні.' : language === 'pl' ? 'Czas tworzenia zależy od złożoności projektu. Prosty bot informacyjny - 3-5 dni, średni bot z formularzami i integracjami - 1-2 tygodnie, złożony bot CRM - 2-4 tygodnie.' : 'Development time depends on project complexity. Simple information bot - 3-5 days, medium bot with forms and integrations - 1-2 weeks, complex CRM bot - 2-4 weeks.'
              },
              {
                q: language === 'uk' ? 'Чи можна інтегрувати бота з існуючими системами?' : language === 'pl' ? 'Czy można zintegrować bota z istniejącymi systemami?' : 'Can the bot be integrated with existing systems?',
                a: language === 'uk' ? 'Так, наші боти легко інтегруються з CRM, базами даних, платежними системами, API сторонніх сервісів та іншими бізнес-інструментами через REST API або webhook.' : language === 'pl' ? 'Tak, nasze boty łatwo integrują się z CRM, bazami danych, systemami płatniczymi, API zewnętrznych serwisów i innymi narzędziami biznesowymi przez REST API lub webhook.' : 'Yes, our bots easily integrate with CRM, databases, payment systems, third-party service APIs, and other business tools via REST API or webhook.'
              },
              {
                q: language === 'uk' ? 'Яка підтримка надається після запуску?' : language === 'pl' ? 'Jakie wsparcie jest zapewnione po uruchomieniu?' : 'What support is provided after launch?',
                a: language === 'uk' ? 'Ми надаємо технічну підтримку 24/7, регулярні оновлення, моніторинг роботи бота та швидке вирішення будь-яких проблем. Всі тарифи включають базову підтримку протягом першого місяця.' : language === 'pl' ? 'Zapewniamy wsparcie techniczne 24/7, regularne aktualizacje, monitoring działania bota i szybkie rozwiązywanie wszelkich problemów. Wszystkie taryfy obejmują podstawowe wsparcie przez pierwszy miesiąc.' : 'We provide 24/7 technical support, regular updates, bot operation monitoring, and quick resolution of any issues. All plans include basic support for the first month.'
              },
              {
                q: language === 'uk' ? 'Чи можна розширити функціонал бота пізніше?' : language === 'pl' ? 'Czy można później rozszerzyć funkcjonalność bota?' : 'Can the bot functionality be expanded later?',
                a: language === 'uk' ? 'Так, всі наші боти розроблені з урахуванням масштабованості. Ви можете додавати нові функції, інтеграції та модулі в будь-який час. Ми пропонуємо гнучкі тарифи для розширення функціоналу.' : language === 'pl' ? 'Tak, wszystkie nasze boty są tworzone z myślą o skalowalności. Możesz dodawać nowe funkcje, integracje i moduły w dowolnym momencie. Oferujemy elastyczne taryfy dla rozszerzenia funkcjonalności.' : 'Yes, all our bots are designed with scalability in mind. You can add new features, integrations, and modules at any time. We offer flexible plans for expanding functionality.'
              },
              {
                q: language === 'uk' ? 'Які платформи підтримуються?' : language === 'pl' ? 'Jakie platformy są obsługiwane?' : 'What platforms are supported?',
                a: language === 'uk' ? 'Наші боти працюють на Telegram, але ми також можемо розробити ботів для інших платформ: Viber, Facebook Messenger, WhatsApp. Кожна платформа має свої особливості, які ми враховуємо при розробці.' : language === 'pl' ? 'Nasze boty działają na Telegram, ale możemy również tworzyć boty dla innych platform: Viber, Facebook Messenger, WhatsApp. Każda platforma ma swoje specyficzne cechy, które uwzględniamy podczas tworzenia.' : 'Our bots work on Telegram, but we can also develop bots for other platforms: Viber, Facebook Messenger, WhatsApp. Each platform has its own features that we consider during development.'
              },
              {
                q: language === 'uk' ? 'Чи можна використовувати штучний інтелект у боті?' : language === 'pl' ? 'Czy można używać sztucznej inteligencji w bocie?' : 'Can artificial intelligence be used in the bot?',
                a: language === 'uk' ? 'Так, ми інтегруємо технології штучного інтелекту та машинного навчання для створення розумних ботів. Боти можуть розуміти контекст, навчатися на основі взаємодій та надавати більш персоналізовані відповіді.' : language === 'pl' ? 'Tak, integrujemy technologie sztucznej inteligencji i uczenia maszynowego do tworzenia inteligentnych botów. Boty mogą rozumieć kontekst, uczyć się na podstawie interakcji i dostarczać bardziej spersonalizowane odpowiedzi.' : 'Yes, we integrate artificial intelligence and machine learning technologies to create smart bots. Bots can understand context, learn from interactions, and provide more personalized responses.'
              },
              {
                q: language === 'uk' ? 'Як забезпечується безпека даних?' : language === 'pl' ? 'Jak zapewniane jest bezpieczeństwo danych?' : 'How is data security ensured?',
                a: language === 'uk' ? 'Ми використовуємо сучасні методи шифрування, безпечні протоколи передачі даних та дотримуємося всіх стандартів безпеки. Всі дані зберігаються на захищених серверах з регулярним резервним копіюванням.' : language === 'pl' ? 'Używamy nowoczesnych metod szyfrowania, bezpiecznych protokołów przesyłania danych i przestrzegamy wszystkich standardów bezpieczeństwa. Wszystkie dane są przechowywane na zabezpieczonych serwerach z regularnym backupem.' : 'We use modern encryption methods, secure data transfer protocols, and adhere to all security standards. All data is stored on secure servers with regular backups.'
              },
              {
                q: language === 'uk' ? 'Скільки користувачів може одночасно працювати з ботом?' : language === 'pl' ? 'Ilu użytkowników może jednocześnie korzystać z bota?' : 'How many users can work with the bot at the same time?',
                a: language === 'uk' ? 'Наші боти здатні обробляти тисячі запитів одночасно завдяки масштабованій архітектурі. Кількість одночасних користувачів залежить від обраного тарифу та технічних характеристик сервера.' : language === 'pl' ? 'Nasze boty są w stanie przetwarzać tysiące zapytań jednocześnie dzięki skalowalnej architekturze. Liczba jednoczesnych użytkowników zależy od wybranego planu i charakterystyki serwera.' : 'Our bots can handle thousands of requests simultaneously thanks to scalable architecture. The number of concurrent users depends on the chosen plan and server specifications.'
              },
              {
                q: language === 'uk' ? 'Чи можна налаштувати індивідуальний дизайн інтерфейсу бота?' : language === 'pl' ? 'Czy można dostosować indywidualny design interfejsu bota?' : 'Can I customize the bot interface design?',
                a: language === 'uk' ? 'Так, ми створюємо індивідуальний дизайн інтерфейсу з урахуванням вашої брендингової політики. Ви можете вибрати кольори, шрифти, іконки та структуру меню відповідно до ваших потреб.' : language === 'pl' ? 'Tak, tworzymy indywidualny design interfejsu z uwzględnieniem Twojej polityki brandingowej. Możesz wybrać kolory, czcionki, ikony i strukturę menu zgodnie z Twoimi potrzebami.' : 'Yes, we create an individual interface design taking into account your branding policy. You can choose colors, fonts, icons, and menu structure according to your needs.'
              },
              {
                q: language === 'uk' ? 'Як працює аналітика та звітність?' : language === 'pl' ? 'Jak działa analityka i raportowanie?' : 'How does analytics and reporting work?',
                a: language === 'uk' ? 'Ми надаємо детальну аналітику використання бота: кількість користувачів, найпопулярніші функції, конверсії, середній час відповіді. Ви отримуєте регулярні звіти та доступ до дашборду для моніторингу в реальному часі.' : language === 'pl' ? 'Zapewniamy szczegółową analitykę wykorzystania bota: liczba użytkowników, najpopularniejsze funkcje, konwersje, średni czas odpowiedzi. Otrzymujesz regularne raporty i dostęp do panelu do monitorowania w czasie rzeczywistym.' : 'We provide detailed analytics on bot usage: number of users, most popular features, conversions, average response time. You receive regular reports and access to a dashboard for real-time monitoring.'
              },
              {
                q: language === 'uk' ? 'Чи можна інтегрувати бота з соціальними мережами?' : language === 'pl' ? 'Czy można zintegrować bota z sieciami społecznościowymi?' : 'Can the bot be integrated with social networks?',
                a: language === 'uk' ? 'Так, наші боти можуть інтегруватися з різними соціальними мережами через API. Це дозволяє автоматизувати публікації, збирати дані про підписників та взаємодіяти з користувачами через різні канали.' : language === 'pl' ? 'Tak, nasze boty mogą integrować się z różnymi sieciami społecznościowymi przez API. Pozwala to automatyzować publikacje, zbierać dane o subskrybentach i wchodzić w interakcję z użytkownikami przez różne kanały.' : 'Yes, our bots can integrate with various social networks via API. This allows you to automate publications, collect subscriber data, and interact with users through different channels.'
              },
              {
                q: language === 'uk' ? 'Які мови підтримує бот?' : language === 'pl' ? 'Jakie języki obsługuje bot?' : 'What languages does the bot support?',
                a: language === 'uk' ? 'Наші боти можуть працювати з будь-якою мовою. Ми налаштовуємо багатомовність відповідно до ваших потреб. Найчастіше додаються українська, англійська, польська та російська мови.' : language === 'pl' ? 'Nasze boty mogą działać w dowolnym języku. Konfigurujemy wielojęzyczność zgodnie z Twoimi potrzebami. Najczęściej dodawane są języki ukraiński, angielski, polski i rosyjski.' : 'Our bots can work in any language. We configure multilingualism according to your needs. Most often Ukrainian, English, Polish, and Russian languages are added.'
              }
            ].map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-gray-900 pr-4">{faq.q}</h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed px-6 pb-6">{faq.a}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Порівняльна таблиця тарифів */}
        <motion.div 
          className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            variants={fadeInUp}
          >
            {language === 'uk' ? 'Порівняння тарифних планів' : language === 'pl' ? 'Porównanie planów cenowych' : 'Price Plans Comparison'}
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                  <th className="px-6 py-4 text-left font-semibold">{language === 'uk' ? 'Функція' : language === 'pl' ? 'Funkcja' : 'Feature'}</th>
                  {activePricePlans.map((plan, index) => (
                    <th key={index} className="px-6 py-4 text-center font-semibold">{plan.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: language === 'uk' ? 'Розробка під ваші потреби' : language === 'pl' ? 'Tworzenie pod Twoje potrzeby' : 'Custom development', lite: true, standart: true, premium: true },
                  { feature: language === 'uk' ? 'Інтеграція з CRM' : language === 'pl' ? 'Integracja z CRM' : 'CRM Integration', lite: false, standart: true, premium: true },
                  { feature: language === 'uk' ? 'База даних' : language === 'pl' ? 'Baza danych' : 'Database', lite: false, standart: true, premium: true },
                  { feature: language === 'uk' ? 'Моніторинг 24/7' : language === 'pl' ? 'Monitoring 24/7' : '24/7 Monitoring', lite: true, standart: true, premium: true },
                  { feature: language === 'uk' ? 'Оновлення' : language === 'pl' ? 'Aktualizacje' : 'Updates', lite: language === 'uk' ? '1/міс' : language === 'pl' ? '1/mies' : '1/month', standart: language === 'uk' ? '3/міс' : language === 'pl' ? '3/mies' : '3/month', premium: language === 'uk' ? 'Безліміт' : language === 'pl' ? 'Bez limitu' : 'Unlimited' },
                  { feature: language === 'uk' ? 'Технічна підтримка' : language === 'pl' ? 'Wsparcie techniczne' : 'Technical Support', lite: true, standart: true, premium: true }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.lite === 'boolean' ? (
                        row.lite ? <FaCheckCircle className="text-gray-700 mx-auto text-xl" /> : <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-700">{row.lite}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.standart === 'boolean' ? (
                        row.standart ? <FaCheckCircle className="text-gray-700 mx-auto text-xl" /> : <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-700">{row.standart}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? <FaCheckCircle className="text-gray-700 mx-auto text-xl" /> : <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-700">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

        {/* Статистика */}
        <motion.div 
          className="mb-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            {language === 'uk' ? 'Наші досягнення в розробці ботів' : language === 'pl' ? 'Nasze osiągnięcia w tworzeniu botów' : 'Our Bot Development Achievements'}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={scaleIn}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-gray-800 mb-2">200+</div>
              <div className="text-gray-600">{language === 'uk' ? 'Створених ботів' : language === 'pl' ? 'Utworzonych botów' : 'Bots Created'}</div>
            </motion.div>
            <motion.div 
              variants={scaleIn}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
              <div className="text-gray-600">{language === 'uk' ? 'Задоволених клієнтів' : language === 'pl' ? 'Zadowolonych klientów' : 'Satisfied Clients'}</div>
            </motion.div>
            <motion.div 
              variants={scaleIn}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-gray-800 mb-2">24/7</div>
              <div className="text-gray-600">{language === 'uk' ? 'Моніторинг' : language === 'pl' ? 'Monitoring' : 'Monitoring'}</div>
            </motion.div>
            <motion.div 
              variants={scaleIn}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-gray-800 mb-2">2+</div>
              <div className="text-gray-600">{language === 'uk' ? 'Років досвіду' : language === 'pl' ? 'Lat doświadczenia' : 'Years Experience'}</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Other Services Section */}
        <motion.div 
          className="mb-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            {language === 'uk' ? 'Наші інші послуги' : language === 'pl' ? 'Nasze inne usługi' : 'Our Other Services'}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a
              href={language === 'uk' ? '/websites' : language === 'en' ? '/en/websites' : language === 'ru' ? '/ru/websites' : language === 'pl' ? '/pl/websites' : '/websites'}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaDesktop className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {language === 'uk' ? 'Розробка веб-сайтів' : language === 'pl' ? 'Tworzenie stron internetowych' : 'Website Development'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uk' ? 'Сучасні та функціональні веб-сайти для вашого бізнесу' : language === 'pl' ? 'Nowoczesne i funkcjonalne strony internetowe dla Twojego biznesu' : 'Modern and functional websites for your business'}
              </p>
            </motion.a>
            <motion.a
              href={language === 'uk' ? '/parsers' : language === 'en' ? '/en/parsers' : language === 'ru' ? '/ru/parsers' : language === 'pl' ? '/pl/parsers' : '/parsers'}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaDatabase className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {language === 'uk' ? 'Розробка парсерів' : language === 'pl' ? 'Tworzenie parserów' : 'Parser Development'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uk' ? 'Автоматизація збору та обробки даних' : language === 'pl' ? 'Automatyzacja zbierania i przetwarzania danych' : 'Automation of data collection and processing'}
              </p>
            </motion.a>
            <motion.a
              href={language === 'uk' ? '/prices' : language === 'en' ? '/en/prices' : language === 'ru' ? '/ru/prices' : language === 'pl' ? '/pl/prices' : '/prices'}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaCreditCard className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {language === 'uk' ? 'Ціни та тарифи' : language === 'pl' ? 'Ceny i taryfy' : 'Prices & Plans'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uk' ? 'Перегляньте наші тарифні плани та ціни' : language === 'pl' ? 'Zobacz nasze plany cenowe i ceny' : 'View our pricing plans and rates'}
              </p>
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