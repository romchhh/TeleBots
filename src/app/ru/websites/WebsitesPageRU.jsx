'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPalette, FaMobile, FaRocket, FaSearch, 
  FaCode, FaServer, FaShieldAlt, FaCreditCard,
  FaUserCog, FaCheckCircle, FaDatabase, FaCogs,
  FaGlobe, FaDesktop, FaTools, FaChartLine
} from 'react-icons/fa';
import LeadForm from '../../../ui/LeadForm';
import { useTranslation } from '../../../hooks/useTranslation';

const PRICE_PLANS_RU = [
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

const features_RU = [
  {
    icon: <FaPalette className="w-12 h-12 text-blue-500" />,
    title: 'Современный дизайн',
    description: 'Создаем уникальные и привлекательные дизайны, которые выделяют ваш бренд'
  },
  {
    icon: <FaMobile className="w-12 h-12 text-blue-500" />,
    title: 'Адаптивность',
    description: 'Сайты отлично выглядят на всех устройствах: компьютерах, планшетах и смартфонах'
  },
  {
    icon: <FaSearch className="w-12 h-12 text-blue-500" />,
    title: 'SEO-оптимизация',
    description: 'Настраиваем сайт для лучшего ранжирования в поисковых системах'
  },
  {
    icon: <FaRocket className="w-12 h-12 text-blue-500" />,
    title: 'Быстрая загрузка',
    description: 'Оптимизируем производительность для максимальной скорости работы'
  }
];

const developmentSteps_RU = [
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: 'Анализ и планирование',
    description: 'Изучаем ваши потребности и создаем детальный план разработки'
  },
  {
    icon: <FaPalette className="w-12 h-12" />,
    title: 'Дизайн',
    description: 'Создаем уникальный дизайн, соответствующий вашему бренду'
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Разработка',
    description: 'Программируем функционал сайта согласно техническому заданию'
  },
  {
    icon: <FaCheckCircle className="w-12 h-12" />,
    title: 'Тестирование',
    description: 'Проводим комплексное тестирование всех функций сайта'
  }
];

const technologies_RU = [
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: 'Frontend',
    description: 'React, Vue.js, современный JavaScript'
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: 'Backend',
    description: 'Node.js, Python, PHP, базы данных'
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: 'Мобильная версия',
    description: 'Адаптивный дизайн для всех устройств'
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Инструменты',
    description: 'Современные технологии и фреймворки'
  }
];

const WebsitesPageRU = () => {
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
            Разработка веб-сайтов
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Создаем современные, функциональные и красивые веб-сайты, которые привлекают клиентов и увеличивают продажи
          </motion.p>
          <motion.div 
            className="max-w-4xl mx-auto text-left text-gray-600 space-y-4 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeInUp}>
              В современном цифровом мире наличие качественного веб-сайта является обязательным условием для успешного бизнеса. Мы специализируемся на создании сайтов различной сложности - от простых лендингов до сложных веб-платформ и интернет-магазинов.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Наша команда использует передовые технологии и современные подходы к дизайну, чтобы создавать сайты, которые не только выглядят привлекательно, но и эффективно решают бизнес-задачи. Мы уделяем особое внимание пользовательскому опыту, скорости загрузки и поисковой оптимизации.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Каждый проект разрабатывается индивидуально под потребности вашего бизнеса. Мы начинаем с детального анализа требований, создаем уникальный дизайн, программируем функционал и проводим тщательное тестирование перед запуском.
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

        {/* Технологии */}
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
            Используемые технологии
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {technologies_RU.map((tech, index) => (
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
                  {tech.icon}
                </motion.div>
                <h3 className="font-semibold mb-2">{tech.title}</h3>
                <p className="text-white/80">{tech.description}</p>
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
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-600">
                Обеспечиваем полную безопасность вашего сайта, используем современные протоколы шифрования и регулярно обновляем системы защиты.
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
                Размещаем сайты на высокопроизводительных серверах с гарантированным временем работы 99.9% и быстрой загрузкой.
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
                Предоставляем техническую поддержку 24/7, помогаем с обновлениями и решаем любые возникающие вопросы.
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
              Мы создаем сайты, которые не только выглядят современно и привлекательно, но и эффективно решают бизнес-задачи. Наши проекты помогают клиентам увеличивать продажи, привлекать новых клиентов и укреплять позиции на рынке.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Каждый сайт разрабатывается с учетом специфики вашего бизнеса и целевой аудитории. Мы используем современные технологии и лучшие практики веб-разработки, чтобы создать продукт, который превосходит ожидания и приносит реальную пользу вашему бизнесу.
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

export default WebsitesPageRU;
