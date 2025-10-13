"use client";
import React, { useEffect, useState, memo } from "react";
import Image from 'next/image';
import { FaMousePointer, FaArrowRight, FaRobot, FaGlobe, FaSearch, FaDollarSign } from 'react-icons/fa';
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../context/LanguageContext";
import LeadModal from "../components/LeadModal";
import "./ServiceHero.css";

const ServiceHero = memo(function ServiceHero({ serviceType = 'chatbots' }) { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Конфігурація для різних типів послуг
  const serviceConfig = {
    chatbots: {
      title: language === 'uk' ? 'Розробка Telegram ботів' : 
             language === 'en' ? 'Telegram Bot Development' :
             language === 'pl' ? 'Tworzenie botów Telegram' :
             'Розробка Telegram ботів',
      subtitle: language === 'uk' ? 'Автоматизуйте бізнес-процеси та підвищуйте ефективність взаємодії з клієнтами за допомогою сучасних чат-ботів' :
                language === 'en' ? 'Automate business processes and enhance customer interaction efficiency with modern chatbots' :
                language === 'pl' ? 'Automatyzuj procesy biznesowe i zwiększ efektywność interakcji z klientami za pomocą nowoczesnych chatbotów' :
                'Автоматизуйте бізнес-процеси та підвищуйте ефективність взаємодії з клієнтами за допомогою сучасних чат-ботів',
      buttonText: language === 'uk' ? 'Замовити розробку' :
                  language === 'en' ? 'Order Development' :
                  language === 'pl' ? 'Zamów rozwój' :
                  'Замовити розробку',
      icon: <FaRobot />,
      gradientFrom: 'from-blue-50',
      gradientVia: 'via-blue-100',
      gradientTo: 'to-blue-50',
      accentColor: 'blue'
    },
    websites: {
      title: language === 'uk' ? 'Розробка веб-сайтів' : 
             language === 'en' ? 'Web Development' :
             language === 'pl' ? 'Tworzenie stron internetowych' :
             'Розробка веб-сайтів',
      subtitle: language === 'uk' ? 'Створюємо сучасні, швидкі та функціональні веб-сайти, які приносять результат вашому бізнесу' :
                language === 'en' ? 'We create modern, fast and functional websites that bring results to your business' :
                language === 'pl' ? 'Tworzymy nowoczesne, szybkie i funkcjonalne strony internetowe, które przynoszą rezultaty Twojemu biznesowi' :
                'Створюємо сучасні, швидкі та функціональні веб-сайти, які приносять результат вашому бізнесу',
      buttonText: language === 'uk' ? 'Замовити сайт' :
                  language === 'en' ? 'Order Website' :
                  language === 'pl' ? 'Zamów stronę' :
                  'Замовити сайт',
      icon: <FaGlobe />,
      gradientFrom: 'from-green-50',
      gradientVia: 'via-green-100',
      gradientTo: 'to-green-50',
      accentColor: 'green'
    },
    parsers: {
      title: language === 'uk' ? 'Розробка парсерів' : 
             language === 'en' ? 'Parser Development' :
             language === 'pl' ? 'Tworzenie parserów' :
             'Розробка парсерів',
      subtitle: language === 'uk' ? 'Автоматизуйте збір та обробку даних з будь-яких джерел для оптимізації ваших бізнес-процесів' :
                language === 'en' ? 'Automate data collection and processing from any sources to optimize your business processes' :
                language === 'pl' ? 'Automatyzuj zbieranie i przetwarzanie danych z dowolnych źródeł, aby zoptymalizować procesy biznesowe' :
                'Автоматизуйте збір та обробку даних з будь-яких джерел для оптимізації ваших бізнес-процесів',
      buttonText: language === 'uk' ? 'Замовити парсер' :
                  language === 'en' ? 'Order Parser' :
                  language === 'pl' ? 'Zamów parser' :
                  'Замовити парсер',
      icon: <FaSearch />,
      gradientFrom: 'from-purple-50',
      gradientVia: 'via-purple-100',
      gradientTo: 'to-purple-50',
      accentColor: 'purple'
    },
    prices: {
      title: language === 'uk' ? 'Тарифи та ціни' : 
             language === 'en' ? 'Pricing & Plans' :
             language === 'pl' ? 'Cennik i plany' :
             'Тарифи та ціни',
      subtitle: language === 'uk' ? 'Прозорі тарифи для всіх послуг. Виберіть оптимальний план для вашого бізнесу та отримайте максимальну віддачу від інвестицій' :
                language === 'en' ? 'Transparent pricing for all services. Choose the optimal plan for your business and get maximum return on investment' :
                language === 'pl' ? 'Przejrzyste cenniki dla wszystkich usług. Wybierz optymalny plan dla swojego biznesu i uzyskaj maksymalny zwrot z inwestycji' :
                'Прозорі тарифи для всіх послуг. Виберіть оптимальний план для вашого бізнесу та отримайте максимальну віддачу від інвестицій',
      buttonText: language === 'uk' ? 'Замовити консультацію' :
                  language === 'en' ? 'Order Consultation' :
                  language === 'pl' ? 'Zamów konsultację' :
                  'Замовити консультацію',
      icon: <FaDollarSign />,
      gradientFrom: 'from-amber-50',
      gradientVia: 'via-amber-100',
      gradientTo: 'to-amber-50',
      accentColor: 'amber'
    },
    portfolio: {
      title: language === 'uk' ? 'Наше портфоліо' : 
             language === 'en' ? 'Our Portfolio' :
             language === 'pl' ? 'Nasze portfolio' :
             'Наше портфоліо',
      subtitle: language === 'uk' ? 'Перегляньте наші успішні проекти та кейси. Кожен проект - це унікальне рішення, створене з любов\'ю та професіоналізмом для досягнення бізнес-цілей наших клієнтів' :
                language === 'en' ? 'Explore our successful projects and case studies. Each project is a unique solution created with love and professionalism to achieve our clients\' business goals' :
                language === 'pl' ? 'Zapoznaj się z naszymi udanymi projektami i studiami przypadków. Każdy projekt to unikalne rozwiązanie stworzone z miłością i profesjonalizmem, aby osiągnąć cele biznesowe naszych klientów' :
                'Перегляньте наші успішні проекти та кейси. Кожен проект - це унікальне рішення, створене з любов\'ю та професіоналізмом для досягнення бізнес-цілей наших клієнтів',
      buttonText: language === 'uk' ? 'Замовити проект' :
                  language === 'en' ? 'Order Project' :
                  language === 'pl' ? 'Zamów projekt' :
                  'Замовити проект',
      icon: <FaGlobe />,
      gradientFrom: 'from-indigo-50',
      gradientVia: 'via-indigo-100',
      gradientTo: 'to-indigo-50',
      accentColor: 'indigo'
    }
  };

  const config = serviceConfig[serviceType] || serviceConfig.chatbots;

  return (
    <>
      <div className="service-hero-container">
        <div className="service-hero-content">
          <div className="service-hero-left">
            <div className="service-hero-text-content">
              <h1 className="service-hero-title text-black">
                {config.title}
              </h1>
              <p className="service-hero-subtitle text-black">
                {config.subtitle}
              </p>
              <div className="mt-6 sm:mt-8 flex justify-start w-full max-w-full">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-6 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-medium text-white rounded-2xl sm:rounded-3xl transition-all duration-700 flex items-center justify-center gap-3 sm:gap-5 hover:gap-7 w-full sm:w-auto sm:min-w-[320px] md:min-w-[380px] max-w-full"
                  style={{
                    fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
                    background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    overflow: 'visible'
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
                  <span className="relative z-10 tracking-wide whitespace-nowrap text-white">{config.buttonText}</span>
                  <FaArrowRight className="relative z-10 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1 text-white" />
                  
                  {/* Cursor icon positioned outside button - hide on very small screens */}
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-20 hidden xs:block">
                    <div className="relative">
                      <div className={`text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110`} 
                        style={{ transform: 'rotate(-15deg)' }} 
                      >
                        {config.icon}
                      </div>
                      
                      {/* Click effect ripples */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full animate-[ping_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
                        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full animate-[ping_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
                        <div className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-white/40 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 ease-out rounded-2xl sm:rounded-3xl overflow-hidden" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl transition-opacity duration-700 rounded-2xl sm:rounded-3xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="service-hero-right">
            {/* Анімований логотип з тематичним кольором */}
            <div className="relative">
              {/* Фонові ефекти */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Основний контейнер логотипу */}
              <div className={`relative bg-gradient-to-br ${config.gradientFrom} ${config.gradientVia} ${config.gradientTo} p-8 md:p-12 lg:p-16 rounded-full shadow-2xl border border-white/20`}>
                <div className="relative">
                  {/* Анімований логотип */}
                  <img 
                    src="/logologo.png" 
                    alt="TeleBots Logo" 
                    width={300}
                    height={300}
                    priority
                    quality={90}
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto drop-shadow-lg"
                    style={{
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  />
                  
                  {/* Тематична іконка поверх логотипу */}
                  <div className={`absolute -top-2 -right-2 bg-${config.accentColor}-500 text-white p-3 md:p-4 rounded-full shadow-lg animate-bounce`}>
                    <div className="text-xl md:text-2xl lg:text-3xl">
                      {config.icon}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
});

export default ServiceHero;
