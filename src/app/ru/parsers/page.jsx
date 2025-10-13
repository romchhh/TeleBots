'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDatabase, FaCogs, FaChartBar, FaShieldAlt,
  FaRocket, FaCode, FaServer, FaUserCog,
  FaCheckCircle, FaGlobe, FaDesktop, FaTools,
  FaChartLine, FaSearch, FaFileAlt, FaSync
} from 'react-icons/fa';
import LeadForm from '../../../ui/LeadForm';
import { useTranslation } from '../../../hooks/useTranslation';

const PRICE_PLANS_RU = [
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

const features_RU = [
  {
    icon: <FaDatabase className="w-12 h-12 text-blue-500" />,
    title: 'Автоматический сбор данных',
    description: 'Собираем информацию с сайтов автоматически по расписанию без вашего участия'
  },
  {
    icon: <FaCogs className="w-12 h-12 text-blue-500" />,
    title: 'Гибкая настройка',
    description: 'Настраиваем парсер под любые требования и форматы данных'
  },
  {
    icon: <FaChartBar className="w-12 h-12 text-blue-500" />,
    title: 'Аналитика и отчеты',
    description: 'Предоставляем детальную статистику и аналитические отчеты'
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-blue-500" />,
    title: 'Безопасность',
    description: 'Обеспечиваем безопасность и конфиденциальность собранных данных'
  }
];

const developmentSteps_RU = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Анализ требований',
    description: 'Изучаем ваши потребности и определяем источники данных'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Разработка',
    description: 'Создаем парсер с учетом специфики целевых сайтов'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Тестирование',
    description: 'Проводим комплексное тестирование всех функций'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Запуск',
    description: 'Разворачиваем на сервере и настраиваем мониторинг'
  }
];

const useCases_RU = [
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: 'Мониторинг конкурентов',
    description: 'Отслеживание цен, ассортимента и маркетинговых акций'
  },
  {
    icon: <FaFileAlt className="w-8 h-8" />,
    title: 'Сбор контактов',
    description: 'Автоматический сбор email, телефонов и адресов'
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Анализ рынка',
    description: 'Сбор данных для анализа трендов и рыночной ситуации'
  },
  {
    icon: <FaSync className="w-8 h-8" />,
    title: 'Обновление каталогов',
    description: 'Автоматическое обновление товарных каталогов'
  }
];

const ParsersPageRU = () => {
  const { t, language } = useTranslation();

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
    <div className="min-h-screen bg-gray-50 pt-40">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Главный заголовок */}
        <motion.div 
          className="text-center mb-24 mt-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Разработка парсеров данных
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Автоматизируйте сбор и анализ данных для принятия обоснованных бизнес-решений
          </motion.p>
          <motion.div 
            className="max-w-4xl mx-auto text-left text-gray-600 space-y-4 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeInUp}>
              В современном бизнесе доступ к актуальной информации является ключевым фактором успеха. Парсеры данных позволяют автоматически собирать, обрабатывать и анализировать информацию с различных веб-ресурсов, экономя время и ресурсы вашей компании.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Мы специализируемся на создании высокоэффективных парсеров, которые могут работать с любыми типами сайтов и форматами данных. Наши решения способны обрабатывать большие объемы информации, обеспечивая высокую точность и скорость работы.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Каждый парсер разрабатывается индивидуально под ваши потребности. Мы учитываем специфику целевых сайтов, требования к формату данных и частоту обновления. Наши парсеры работают стабильно и надежно, обеспечивая постоянный доступ к актуальной информации.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Основные возможности */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          {features_RU.map((feature, index) => (
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

        {/* Процесс разработки */}
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
            Процесс разработки
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {developmentSteps_RU.map((step, index) => (
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

        {/* Тарифные планы */}
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
            Тарифные планы
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {PRICE_PLANS_RU.map((plan, index) => (
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
                    Рекомендуемый
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
                  <a 
                    href={plan.orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 px-6 text-center text-white font-medium rounded-lg bg-gradient-to-r ${plan.accent} hover:opacity-90 transition-opacity`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Применение */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 mb-16 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Области применения
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {useCases_RU.map((useCase, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {useCase.icon}
                </motion.div>
                <h3 className="font-semibold mb-2">{useCase.title}</h3>
                <p className="text-white/80">{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Преимущества */}
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
            Почему стоит выбрать нас
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
              <h3 className="text-xl font-semibold mb-2">Надежность</h3>
              <p className="text-gray-600">
                Наши парсеры работают стабильно 24/7, обеспечивая постоянный доступ к данным. Используем современные технологии для максимальной надежности.
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
              <h3 className="text-xl font-semibold mb-2">Производительность</h3>
              <p className="text-gray-600">
                Оптимизированные алгоритмы обеспечивают высокую скорость сбора данных. Обрабатываем большие объемы информации в кратчайшие сроки.
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
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-gray-600">
                Предоставляем техническую поддержку и помощь в настройке. Адаптируем парсеры под изменения в структуре целевых сайтов.
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
              Наши парсеры уже помогли многим компаниям автоматизировать процессы сбора данных, мониторинга конкурентов и анализа рынка. Они работают круглосуточно, обеспечивая постоянный доступ к актуальной информации.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Мы постоянно совершенствуем наши решения, следим за новыми технологиями и адаптируем парсеры под изменения в веб-среде. Наша цель - создавать инструменты, которые становятся надежными помощниками в вашем бизнесе.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Форма обратной связи */}
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

      {/* Ссылка на главную */}
      <motion.div 
        className="fixed bottom-8 left-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.a
          href="/ru"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>На главную</span>
        </motion.a>
      </motion.div>

      {/* Плавающая кнопка */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        variants={floatAnimation}
        animate="animate"
      >
        <motion.a
          href="#lead-form"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaRocket className="w-6 h-6" />
        </motion.a>
      </motion.div>

      {/* Индикатор прогресса */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-blue-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ParsersPageRU;
