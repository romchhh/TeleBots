'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPalette, FaMobile, FaRocket, FaSearch, 
  FaCode, FaServer, FaShieldAlt, FaCreditCard,
  FaUserCog, FaCheckCircle, FaDatabase, FaCogs,
  FaGlobe, FaDesktop, FaTools, FaChartLine, FaRobot
} from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import LeadForm from '../ui/LeadForm';
import LeadModal from '../components/LeadModal';
import ServiceHero from '../ui/ServiceHero';
import { useTranslation } from '../hooks/useTranslation';

const PRICE_PLANS = [
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
    accent: 'from-gray-800 to-gray-900',
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
    accent: 'from-gray-700 to-gray-800',
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
    accent: 'from-gray-900 to-black',
    buttonText: 'Замовити найкраще'
  }
];

// Польські версії планів
const PRICE_PLANS_PL = [
  {
    title: 'Strona docelowa',
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
    accent: 'from-gray-800 to-gray-900',
    buttonText: 'Zamów teraz'
  },
  {
    title: 'Strona firmowa',
    description: 'Pełnoprawna strona dla Twojego biznesu ze wszystkimi niezbędnymi funkcjami',
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
    accent: 'from-gray-700 to-gray-800',
    buttonText: 'Zamów korzystnie',
    recommended: true
  },
  {
    title: 'Sklep internetowy',
    description: 'Pełnoprawny sklep online ze wszystkimi niezbędnymi funkcjami',
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
    accent: 'from-gray-900 to-black',
    buttonText: 'Zamów najlepsze'
  }
];

// Англійські версії планів
const PRICE_PLANS_EN = [
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
    accent: 'from-gray-800 to-gray-900',
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
    accent: 'from-gray-700 to-gray-800',
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
    accent: 'from-gray-900 to-black',
    buttonText: 'Premium option'
  }
];

const services = [
  {
    icon: <FaPalette className="w-12 h-12 text-slate-700" />,
    title: 'Сучасний дизайн',
    description: 'Створюємо унікальний та привабливий дизайн, який відповідає вашому бренду'
  },
  {
    icon: <FaMobile className="w-12 h-12 text-slate-700" />,
    title: 'Адаптивна верстка',
    description: 'Ваш сайт буде чудово виглядати на всіх пристроях'
  },
  {
    icon: <FaRocket className="w-12 h-12 text-slate-700" />,
    title: 'Швидкість роботи',
    description: 'Оптимізуємо швидкість завантаження для кращої продуктивності'
  },
  {
    icon: <FaSearch className="w-12 h-12 text-slate-700" />,
    title: 'SEO-оптимізація',
    description: 'Підготовка сайту для кращого ранжування в пошукових системах'
  }
];

// Польські версії основних послуг
const services_PL = [
  {
    icon: <FaPalette className="w-12 h-12 text-slate-700" />,
    title: 'Nowoczesny design',
    description: 'Tworzymy unikalny i atrakcyjny design, który odpowiada Twojej marce'
  },
  {
    icon: <FaMobile className="w-12 h-12 text-slate-700" />,
    title: 'Responsywny layout',
    description: 'Twoja strona będzie świetnie wyglądać na wszystkich urządzeniach'
  },
  {
    icon: <FaRocket className="w-12 h-12 text-slate-700" />,
    title: 'Szybkość działania',
    description: 'Optymalizujemy szybkość ładowania dla lepszej wydajności'
  },
  {
    icon: <FaSearch className="w-12 h-12 text-slate-700" />,
    title: 'Optymalizacja SEO',
    description: 'Przygotowanie strony do lepszego pozycjonowania w wyszukiwarkach'
  }
];

// Англійські версії основних послуг
const services_EN = [
  {
    icon: <FaPalette className="w-12 h-12 text-slate-700" />,
    title: 'Modern Design',
    description: 'We create a unique and attractive design that matches your brand'
  },
  {
    icon: <FaMobile className="w-12 h-12 text-slate-700" />,
    title: 'Responsive Layout',
    description: 'Your site will look great on all devices'
  },
  {
    icon: <FaRocket className="w-12 h-12 text-slate-700" />,
    title: 'Speed Optimization',
    description: 'We optimize loading speed for better performance'
  },
  {
    icon: <FaSearch className="w-12 h-12 text-slate-700" />,
    title: 'SEO Optimization',
    description: 'Preparing the site for better ranking in search engines'
  }
];

const developmentSteps = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Аналіз та планування',
    description: 'Вивчаємо ваші потреби, розробляємо стратегію та технічне завдання'
  },
  {
    icon: <FaPalette className="w-12 h-12" />,
    title: 'Дизайн',
    description: 'Створюємо унікальний дизайн, який відповідає вашому бренду'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Розробка',
    description: 'Верстаємо та програмуємо функціонал сайту'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Запуск',
    description: 'Тестуємо та розміщуємо сайт на хостингу'
  }
];

// Польські версії кроків розробки
const developmentSteps_PL = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Analiza i planowanie',
    description: 'Badamy Twoje potrzeby, opracowujemy strategię i specyfikację techniczną'
  },
  {
    icon: <FaPalette className="w-12 h-12" />,
    title: 'Design',
    description: 'Tworzymy unikalny design, który odpowiada Twojej marce'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Rozwój',
    description: 'Layout i programowanie funkcjonalności strony'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Uruchomienie',
    description: 'Testujemy i hostujemy stronę'
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
    icon: <FaPalette className="w-12 h-12" />,
    title: 'Design',
    description: 'We create a unique design that matches your brand'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Development',
    description: 'We layout and program website functionality'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Launch',
    description: 'We test and host the website'
  }
];

const technologies = [
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: 'Backend',
    items: ['Node.js', 'Python', 'PHP', 'Laravel']
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Бази даних',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Інструменти',
    items: ['Git', 'Docker', 'AWS', 'Nginx']
  }
];

// Польські версії технологій
const technologies_PL = [
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: 'Backend',
    items: ['Node.js', 'Python', 'PHP', 'Laravel']
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Bazy danych',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Narzędzia',
    items: ['Git', 'Docker', 'AWS', 'Nginx']
  }
];

// Англійські версії технологій
const technologies_EN = [
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: 'Backend',
    items: ['Node.js', 'Python', 'PHP', 'Laravel']
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Nginx']
  }
];

const features = [
  {
    icon: <FaGlobe className="w-12 h-12" />,
    title: 'Доменне ім\'я',
    description: 'Допомагаємо з вибором та реєстрацією доменного імені'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Хостинг',
    description: 'Розміщуємо сайт на надійних серверах з високою доступністю'
  },
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: 'Безпека',
    description: 'Забезпечуємо захист від атак та безпеку даних'
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: 'Аналітика',
    description: 'Налаштовуємо системи аналітики для відстеження ефективності'
  }
];

// Польські версії додаткових можliwości
const features_PL = [
  {
    icon: <FaGlobe className="w-12 h-12" />,
    title: 'Nazwa domeny',
    description: 'Pomagamy w wyborze i rejestracji nazwy domeny'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Hosting',
    description: 'Hostujemy stronę na niezawodnych serwerach z wysoką dostępnością'
  },
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: 'Bezpieczeństwo',
    description: 'Zapewniamy ochronę przed atakami i bezpieczeństwo danych'
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: 'Analityka',
    description: 'Konfigurujemy systemy analityczne do śledzenia skuteczności'
  }
];

// Англійські версії додаткових можливостей
const features_EN = [
  {
    icon: <FaGlobe className="w-12 h-12" />,
    title: 'Domain Name',
    description: 'We help with choosing and registering a domain name'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Hosting',
    description: 'We host the site on reliable servers with high availability'
  },
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: 'Security',
    description: 'We provide protection against attacks and data security'
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: 'Analytics',
    description: 'We set up analytics systems to track effectiveness'
  }
];

const WebsitesPage = () => {
  const { t, language } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Використовуємо відповідний набір тарифів залежно від мови
  const activePricePlans = language === 'uk' ? PRICE_PLANS : language === 'pl' ? PRICE_PLANS_PL : PRICE_PLANS_EN;
  const activeDevSteps = language === 'uk' ? developmentSteps : language === 'pl' ? developmentSteps_PL : developmentSteps_EN;
  const activeTech = language === 'uk' ? technologies : language === 'pl' ? technologies_PL : technologies_EN;
  const activeServices = language === 'uk' ? services : language === 'pl' ? services_PL : services_EN;
  const activeFeatures = language === 'uk' ? features : language === 'pl' ? features_PL : features_EN;

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
      <ServiceHero serviceType="websites" />
      
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
                  ? 'Веб-сайти як потужний інструмент для росту бізнесу' 
                  : language === 'pl' 
                  ? 'Strony internetowe jako potężne narzędzie do wzrostu biznesu'
                  : 'Websites as a powerful tool for business growth'}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                {language === 'uk'
                  ? 'Веб-сайти - це вітрина вашого бізнесу в цифровому світі. Вони відіграють ключову роль у привабленні клієнтів, презентації послуг та збільшенні продажів на 40-60% завдяки професійному дизайну та оптимізації. Наша команда створює сучасні, швидкі та функціональні веб-сайти, які ефективно працюють на всіх пристроях та забезпечують відмінний користувацький досвід, що призводить до збільшення конверсії.'
                  : language === 'pl'
                  ? 'Strony internetowe to wizytówka Twojego biznesu w świecie cyfrowym. Odgrywają kluczową rolę w przyciąganiu klientów, prezentacji usług i zwiększaniu sprzedaży o 40-60% dzięki profesjonalnemu projektowi i optymalizacji. Nasz zespół tworzy nowoczesne, szybkie i funkcjonalne strony internetowe, które skutecznie działają na wszystkich urządzeniach i zapewniają doskonałe doświadczenie użytkownika, prowadząc do zwiększenia konwersji.'
                  : 'Websites are the showcase of your business in the digital world. They play a key role in attracting customers, presenting services, and increasing sales by 40-60% thanks to professional design and optimization. Our team creates modern, fast, and functional websites that work effectively on all devices and provide an excellent user experience, leading to increased conversion.'}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {language === 'uk'
                  ? 'Ми використовуємо передові технології та сучасні фреймворки для створення веб-сайтів, які не тільки виглядають красиво, але й швидко завантажуються (менше 2 секунд), оптимізовані для пошукових систем та забезпечують високу конверсію. Кожен проект розробляється індивідуально, враховуючи специфіку вашого бізнесу та цільову аудиторію.'
                  : language === 'pl'
                  ? 'Używamy zaawansowanych technologii i nowoczesnych frameworków do tworzenia stron internetowych, które nie tylko wyglądają pięknie, ale także szybko się ładują (mniej niż 2 sekundy), są zoptymalizowane pod kątem wyszukiwarek i zapewniają wysoką konwersję. Każdy projekt jest tworzony indywidualnie, uwzględniając specyfikę Twojego biznesu i grupę docelową.'
                  : 'We use advanced technologies and modern frameworks to create websites that not only look beautiful but also load quickly (less than 2 seconds), are optimized for search engines, and provide high conversion. Each project is developed individually, taking into account the specifics of your business and target audience.'}
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12 border border-gray-400">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {language === 'uk' 
                  ? 'Повний цикл розробки від ідеї до запуску' 
                  : language === 'pl' 
                  ? 'Pełny cykl tworzenia od pomysłu do uruchomienia'
                  : 'Full development cycle from idea to launch'}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {language === 'uk'
                  ? 'Від простого лендінгу до складного корпоративного порталу - ми забезпечуємо повний цикл розробки: від глибокого аналізу потреб та проектування унікального дизайну до впровадження, тестування на всіх пристроях та подальшої технічної підтримки 24/7. Наші сайти адаптивні, безпечні, готові до масштабування разом з вашим бізнесом та завжди оптимізовані для максимальної продуктивності.'
                  : language === 'pl'
                  ? 'Od prostej strony docelowej po złożony portal korporacyjny - zapewniamy pełny cykl tworzenia: od głębokiej analizy potrzeb i projektowania unikalnego designu po wdrożenie, testowanie na wszystkich urządzeniach i dalsze wsparcie techniczne 24/7. Nasze strony są responsywne, bezpieczne, gotowe do skalowania wraz z Twoim biznesem i zawsze zoptymalizowane pod kątem maksymalnej wydajności.'
                  : 'From a simple landing page to a complex corporate portal - we provide a full development cycle: from deep needs analysis and unique design creation to implementation, testing on all devices, and further 24/7 technical support. Our sites are responsive, secure, ready to scale with your business, and always optimized for maximum performance.'}
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
                ? 'Результати наших сайтів у цифрах' 
                : language === 'pl' 
                ? 'Wyniki naszych stron w liczbach'
                : 'Our websites results in numbers'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                  {language === 'uk' 
                    ? 'Показники швидкості завантаження' 
                    : language === 'pl' 
                    ? 'Wskaźniki szybkości ładowania'
                    : 'Page load speed metrics'}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { type: language === 'uk' ? 'До оптимізації' : language === 'pl' ? 'Przed optymalizacją' : 'Before', speed: 4.5 },
                    { type: language === 'uk' ? 'Після оптимізації' : language === 'pl' ? 'Po optymalizacji' : 'After', speed: 1.2 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="speed" fill="#1f2937" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                  {language === 'uk' 
                    ? 'Типи розроблених сайтів' 
                    : language === 'pl' 
                    ? 'Typy stworzonych stron'
                    : 'Types of developed websites'}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: language === 'uk' ? 'Landing' : language === 'pl' ? 'Landing' : 'Landing', value: 40 },
                        { name: language === 'uk' ? 'Корпоративні' : language === 'pl' ? 'Korporacyjne' : 'Corporate', value: 30 },
                        { name: language === 'uk' ? 'E-commerce' : language === 'pl' ? 'E-commerce' : 'E-commerce', value: 20 },
                        { name: language === 'uk' ? 'Інші' : language === 'pl' ? 'Inne' : 'Others', value: 10 }
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
                        { name: language === 'uk' ? 'Landing' : language === 'pl' ? 'Landing' : 'Landing', value: 40 },
                        { name: language === 'uk' ? 'Корпоративні' : language === 'pl' ? 'Korporacyjne' : 'Corporate', value: 30 },
                        { name: language === 'uk' ? 'E-commerce' : language === 'pl' ? 'E-commerce' : 'E-commerce', value: 20 },
                        { name: language === 'uk' ? 'Інші' : language === 'pl' ? 'Inne' : 'Others', value: 10 }
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

        {/* Основні послуги */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          {activeServices.map((service, index) => (
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
                {service.icon}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{service.description}</p>
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
                  className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-slate-700"
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
                  plan.recommended ? 'ring-2 ring-slate-700' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-slate-700 text-white px-4 py-1 rounded-bl-lg">
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
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-8 md:p-12 mb-20 border border-gray-200"
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

        {/* Додаткові можливості */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{language === 'uk' ? 'Додаткові можливості' : language === 'pl' ? 'Dodatkowe możliwości' : 'Additional Features'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-slate-700 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-gray-600 space-y-4">
            <p>
              {language === 'uk'
                ? 'Наша компанія надає повний спектр послуг з розробки та підтримки веб-сайтів. Ми не просто створюємо сайти - ми розробляємо ефективні інструменти для вашого бізнесу. Наші рішення допомагають компаніям автоматизувати процеси, збільшувати продажі та покращувати взаємодію з клієнтами.'
                : language === 'pl'
                ? 'Nasza firma zapewnia pełny zakres usług tworzenia i wsparcia stron internetowych. Nie tylko tworzymy strony - opracowujemy skuteczne narzędzia dla Twojego biznesu. Nasze rozwiązania pomagają firmom automatyzować procesy, zwiększać sprzedaż i poprawiać interakcję z klientami.'
                : 'Our company provides a full range of services for website development and support. We don\'t just create websites - we develop effective tools for your business. Our solutions help companies automate processes, increase sales, and improve customer interaction.'}
            </p>
            <p>
              {language === 'uk'
                ? 'Ми пропонуємо гнучкі умови співпраці та прозоре ціноутворення. Кожен проект супроводжується детальною документацією та навчанням вашої команди роботі з системою управління контентом. Після запуску сайту ми забезпечуємо технічну підтримку та допомагаємо з подальшим розвитком проекту.'
                : language === 'pl'
                ? 'Oferujemy elastyczne warunki współpracy i przejrzyste cenniki. Każdy projekt jest opatrzony szczegółową dokumentacją i szkoleniem Twojego zespołu w zakresie pracy z systemem zarządzania treścią. Po uruchomieniu strony zapewniamy wsparcie techniczne i pomagamy w dalszym rozwoju projektu.'
                : 'We offer flexible cooperation terms and transparent pricing. Each project is accompanied by detailed documentation and training for your team to work with the content management system. After launching the website, we provide technical support and help with further project development.'}
            </p>
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
              {language === 'uk' ? 'Перегляньте портфоліо наших успішних проектів веб-сайтів' : language === 'en' ? 'Browse our portfolio of successful website projects' : language === 'ru' ? 'Просмотрите портфолио наших успешных проектов веб-сайтов' : language === 'pl' ? 'Przejrzyj nasze portfolio udanych projektów stron internetowych' : 'Перегляньте портфоліо наших успішних проектів веб-сайтів'}
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
            {language === 'uk' ? 'Наші досягнення в розробці сайтів' : language === 'pl' ? 'Nasze osiągnięcia w tworzeniu stron' : 'Our Website Development Achievements'}
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
              <div className="text-4xl font-bold text-gray-800 mb-2">150+</div>
              <div className="text-gray-600">{language === 'uk' ? 'Створених сайтів' : language === 'pl' ? 'Utworzonych stron' : 'Websites Created'}</div>
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
              <div className="text-gray-600">{language === 'uk' ? 'Підтримка' : language === 'pl' ? 'Wsparcie' : 'Support'}</div>
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
              href={language === 'uk' ? '/chatbots' : language === 'en' ? '/en/chatbots' : language === 'ru' ? '/ru/chatbots' : language === 'pl' ? '/pl/chatbots' : '/chatbots'}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaRobot className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {language === 'uk' ? 'Розробка чат-ботів' : language === 'pl' ? 'Tworzenie chatbotów' : 'Chatbot Development'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uk' ? 'Автоматизація спілкування з клієнтами' : language === 'pl' ? 'Automatyzacja komunikacji z klientami' : 'Automation of customer communication'}
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

export default WebsitesPage; 