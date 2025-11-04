'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRobot, FaCode, FaBrain, FaChartLine, FaServer, 
  FaShieldAlt, FaCreditCard, FaUserCog, FaRocket,
  FaCheckCircle, FaDatabase, FaCogs
} from 'react-icons/fa';
import LeadForm from '../../../ui/LeadForm';
import { useTranslation } from '../../../hooks/useTranslation';

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

const features_RU = [
  {
    icon: <FaRobot className="w-12 h-12 text-blue-500" />,
    title: 'Умные чат-боты',
    description: 'Создаем интеллектуальных ботов, которые понимают контекст и предоставляют релевантные ответы'
  },
  {
    icon: <FaCode className="w-12 h-12 text-blue-500" />,
    title: 'Интеграция с любой платформой',
    description: 'Telegram, Viber, Facebook Messenger, WhatsApp и другие мессенджеры'
  },
  {
    icon: <FaBrain className="w-12 h-12 text-blue-500" />,
    title: 'Искусственный интеллект',
    description: 'Используем передовые технологии ИИ для улучшения взаимодействия с пользователями'
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-blue-500" />,
    title: 'Аналитика и отчеты',
    description: 'Детальная статистика использования и эффективности бота'
  }
];

const developmentSteps_RU = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Анализ и планирование',
    description: 'Изучаем ваши потребности, разрабатываем стратегию и техническое задание'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Разработка',
    description: 'Создаем функционал бота согласно техническому заданию'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Тестирование',
    description: 'Проводим комплексное тестирование всех функций бота'
  },
  {
    icon: <FaServer className="w-12 h-12" />,
    title: 'Запуск',
    description: 'Разворачиваем бота на сервере и настраиваем мониторинг'
  }
];

const integrations_RU = [
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'CRM системы',
    description: 'Интеграция с популярными CRM системами'
  },
  {
    icon: <FaCreditCard className="w-8 h-8" />,
    title: 'Платежные системы',
    description: 'Подключение различных способов оплаты'
  },
  {
    icon: <FaUserCog className="w-8 h-8" />,
    title: 'API интеграции',
    description: 'Подключение к внешним сервисам'
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: 'Собственные системы',
    description: 'Интеграция с вашими внутренними системами'
  }
];

const ChatbotsPageRU = () => {
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

  const slideIn = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 }
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
            Разработка Telegram ботов
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Автоматизируйте бизнес-процессы и повышайте эффективность взаимодействия с клиентами с помощью современных чат-ботов
          </motion.p>
          <motion.div 
            className="max-w-4xl mx-auto text-left text-gray-600 space-y-4 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeInUp}>
              Telegram боты стали незаменимым инструментом для бизнеса любого масштаба. Они позволяют автоматизировать рутинные процессы, наладить эффективную коммуникацию с клиентами и увеличить продажи. Наша команда специализируется на разработке ботов различной сложности - от простых информационных помощников до сложных CRM-систем.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Мы используем передовые технологии искусственного интеллекта и машинного обучения для создания ботов, которые понимают контекст общения и могут вести естественный диалог. Наши решения способны самообучаться, улучшая свою работу с каждым взаимодействием.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Каждый чат-бот разрабатывается индивидуально под потребности вашего бизнеса, учитывая специфику 
              отрасли и требования к функционалу. Мы обеспечиваем полный цикл разработки: от анализа требований 
              и проектирования сценариев до внедрения, обучения и дальнейшей поддержки.
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

        {/* Интеграции */}
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
            Возможности интеграции
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {integrations_RU.map((integration, index) => (
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
                  {integration.icon}
                </motion.div>
                <h3 className="font-semibold mb-2">{integration.title}</h3>
                <p className="text-white/80">{integration.description}</p>
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
              <h3 className="text-xl font-semibold mb-2">Безопасность данных</h3>
              <p className="text-gray-600">
                Гарантируем полную конфиденциальность и защиту ваших данных. Используем современные методы шифрования и соблюдаем все стандарты безопасности.
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
              <h3 className="text-xl font-semibold mb-2">Надежный хостинг</h3>
              <p className="text-gray-600">
                Размещаем ботов на мощных серверах с мониторингом 24/7. Обеспечиваем высокую доступность и скорость работы.
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
              <h3 className="text-xl font-semibold mb-2">Техническая поддержка</h3>
              <p className="text-gray-600">
                Обеспечиваем быструю и профессиональную поддержку. Оперативно решаем любые вопросы и помогаем с настройкой.
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
              Наши чат-боты уже помогли многим компаниям автоматизировать процессы обслуживания клиентов и увеличить продажи. Они способны обрабатывать большое количество обращений одновременно, работают круглосуточно и никогда не устают.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Мы постоянно совершенствуем наши решения, следим за новыми технологиями и внедряем инновации, чтобы обеспечить лучший пользовательский опыт. Наша цель - создавать чат-ботов, которые станут надежными помощниками в вашем бизнесе.
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

export default ChatbotsPageRU;
