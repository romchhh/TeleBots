'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { cases } from '../translations/cases';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaMousePointer, 
  FaExternalLinkAlt, 
  FaRobot, 
  FaUtensils, 
  FaHeart, 
  FaCat, 
  FaShoppingCart, 
  FaChartLine, 
  FaBirthdayCake, 
  FaLeaf, 
  FaRocket, 
  FaGlobe, 
  FaBus, 
  FaCar, 
  FaGamepad, 
  FaGraduationCap, 
  FaCreditCard, 
  FaTruck, 
  FaStore, 
  FaMoneyBillWave,
  FaMobile,
  FaSearch,
  FaHome
} from 'react-icons/fa';
import LeadModal from './LeadModal';

const CasePage = ({ caseId }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Отримуємо дані кейсу з cases.js
  const caseData = cases[language] && cases[language][caseId];
  
  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Кейс не знайдено</h1>
          <Link 
            href={language === 'uk' ? '/' : `/${language}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft />
            Повернутися на головну
          </Link>
        </div>
      </div>
    );
  }

  const baseUrl = language === 'uk' ? '' : `/${language}`;

  const getCaseIcon = (caseId) => {
    switch (caseId) {
      case 'dr-tolstikova-bot':
        return <FaChartLine className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'nieznany-piekarz':
        return <FaBirthdayCake className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'nutritionist-bot':
        return <FaLeaf className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'cats-fresh':
        return <FaCat className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'space-traffic':
        return <FaRocket className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
			case 'applum-bot':
				return <FaMobile className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
			case 'webinar-bot':
				return <FaGraduationCap className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
			case 'subscription-site':
        return <FaGlobe className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'samurai-sushi':
        return <FaUtensils className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'ukr-bus':
        return <FaBus className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'electromotors':
        return <FaCar className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'brandshop':
        return <FaStore className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'carsrent':
        return <FaShoppingCart className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'normalnoauto':
        return <FaCar className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'salenicedevice':
        return <FaSearch className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'kvartyrant':
        return <FaHome className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'flixmarket':
        return <FaLeaf className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'gtrading':
        return <FaTruck className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'easyplay':
        return <FaGamepad className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'cosmy':
        return <FaHeart className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'newlineschool':
        return <FaGraduationCap className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'xpaid':
        return <FaCreditCard className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      default:
        return <FaRobot className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="container mx-auto px-6 md:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => {
                // Спочатку пробуємо перейти на головну сторінку
                if (window.location.pathname !== baseUrl && window.location.pathname !== '/') {
                  window.location.href = `${baseUrl}#portfolio`;
                } else {
                  // Якщо вже на головній, скролимо до портфоліо
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // Якщо секції немає, переходимо на головну
                    window.location.href = `${baseUrl}#portfolio`;
                  }
                }
              }}
              className="inline-flex items-center gap-3 text-gray-700 hover:text-gray-900 mb-8 transition-all duration-300 group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 hover:bg-white hover:shadow-md"
            >
              <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="font-medium">
                {language === 'uk' ? 'Повернутися до портфоліо' : 
                 language === 'en' ? 'Back to Portfolio' :
                 language === 'ru' ? 'Вернуться к портфолио' :
                 'Powrót do portfolio'}
              </span>
            </button>
            
            <div className="flex items-center gap-4 mb-6 group">
              <div className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-lg icon-bounce">
                {getCaseIcon(caseId)}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-300 group-hover:text-gray-600 group-hover:drop-shadow-sm text-glow">
                {caseData.title}
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 leading-relaxed transition-all duration-300 hover:text-gray-800 hover:drop-shadow-sm">
              {caseData.subtitle}
            </p>

            {caseData.technologies && (
              <div className="flex flex-wrap gap-3 mb-8">
                {caseData.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-base font-medium transition-all duration-300 hover:bg-blue-200 hover:text-blue-900 hover:scale-105 hover:shadow-md hover:-translate-y-1 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] group hover-shimmer">
                <Image
                  src={caseData.mainImage}
                  alt={caseData.title}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105 img-zoom"
                  priority
                />
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-lg hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-300 hover:-translate-y-2 transition-all duration-500 group card-lift hover-glow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-300 group-hover:text-gray-600 group-hover:scale-105">
                  {language === 'uk' ? 'Інформація про проект' :
                   language === 'en' ? 'Project Information' :
                   language === 'ru' ? 'Информация о проекте' :
                   'Informacje o projekcie'}
                </h3>
                
                {caseData.duration && (
                  <div className="mb-4 transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-sm p-3 rounded-xl">
                    <span className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      {language === 'uk' ? 'Тривалість:' :
                       language === 'en' ? 'Duration:' :
                       language === 'ru' ? 'Длительность:' :
                       'Czas trwania:'}
                    </span>
                    <p className="text-gray-900 transition-colors duration-300 group-hover:text-gray-700">{caseData.duration}</p>
                  </div>
                )}

                {caseData.client && (
                  <div className="mb-4 transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-sm p-3 rounded-xl">
                    <span className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      {language === 'uk' ? 'Клієнт:' :
                       language === 'en' ? 'Client:' :
                       language === 'ru' ? 'Клиент:' :
                       'Klient:'}
                    </span>
                    <p className="text-gray-900 transition-colors duration-300 group-hover:text-gray-700">{caseData.client}</p>
                  </div>
                )}

                {caseData.category && (
                  <div className="mb-4 transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-sm p-3 rounded-xl">
                    <span className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      {language === 'uk' ? 'Категорія:' :
                       language === 'en' ? 'Category:' :
                       language === 'ru' ? 'Категория:' :
                       'Kategoria:'}
                    </span>
                    <p className="text-gray-900 transition-colors duration-300 group-hover:text-gray-700">{caseData.category}</p>
                  </div>
                )}

                {caseData.liveUrl && (
                  <div className="mt-6">
                    <a
                      href={caseData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group btn-magnetic"
                    >
                      <FaExternalLinkAlt className="transition-transform duration-300 group-hover:rotate-12" />
                      {language === 'uk' ? 'Переглянути проект' :
                       language === 'en' ? 'View Project' :
                       language === 'ru' ? 'Посмотреть проект' :
                       'Zobacz projekt'}
                    </a>
                  </div>
                )}
              </div>

              {/* Technologies */}
            </div>
          </div>

          {/* Description */}
          {caseData.description && (
            <div className="mt-16 sm:mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-lg hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-300 hover:-translate-y-2 transition-all duration-500 group card-lift hover-glow">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 transition-all duration-300 group-hover:text-gray-600 group-hover:scale-105">
                {language === 'uk' ? 'Опис проекту' :
                 language === 'en' ? 'Project Description' :
                 language === 'ru' ? 'Описание проекта' :
                 'Opis projektu'}
              </h2>
              <div className="prose prose-lg sm:prose-xl max-w-none">
                {caseData.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-lg sm:text-xl transition-all duration-300 hover:text-gray-800 hover:drop-shadow-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {caseData.features && (
            <div className="mt-16 sm:mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-lg hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-300 hover:-translate-y-2 transition-all duration-500 group card-lift hover-glow">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 transition-all duration-300 group-hover:text-gray-600 group-hover:scale-105">
                {language === 'uk' ? 'Основні функції' :
                 language === 'en' ? 'Key Features' :
                 language === 'ru' ? 'Основные функции' :
                 'Kluczowe funkcje'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
                {caseData.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 sm:gap-5 p-4 sm:p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-gray-100 hover:bg-gray-100 hover:border-gray-300 hover:scale-105 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-full mt-1 flex-shrink-0 transition-all duration-300 group-hover:bg-gray-600 group-hover:scale-125 group-hover:shadow-lg"></div>
                    <p className="text-gray-700 font-medium text-base sm:text-lg transition-all duration-300 group-hover:text-gray-800 group-hover:drop-shadow-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Images */}
          {caseData.additionalImages && caseData.additionalImages.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 transition-all duration-300 hover:text-blue-600 hover:scale-105">
                {language === 'uk' ? 'Додаткові зображення' :
                 language === 'en' ? 'Additional Images' :
                 language === 'ru' ? 'Дополнительные изображения' :
                 'Dodatkowe obrazy'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseData.additionalImages.map((image, index) => (
                  <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group hover-shimmer">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto transition-all duration-500 group-hover:scale-105 img-zoom"
                    />
                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {caseData.results && (
            <div className="mt-16 sm:mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-lg hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-300 hover:-translate-y-2 transition-all duration-500 group card-lift hover-glow">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 text-center transition-all duration-300 group-hover:text-gray-600 group-hover:scale-105">
                {language === 'uk' ? 'Результати' :
                 language === 'en' ? 'Results' :
                 language === 'ru' ? 'Результаты' :
                 'Wyniki'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
                {caseData.results.map((result, index) => (
                  <div key={index} className="text-center p-4 sm:p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-gray-100 hover:bg-gray-100 hover:border-gray-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:text-gray-600 group-hover:scale-110 group-hover:drop-shadow-lg">
                      {result.value}
                    </div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 group-hover:text-gray-800 group-hover:drop-shadow-sm">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Кнопка замовлення */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-6 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-medium text-white rounded-2xl sm:rounded-3xl transition-all duration-700 flex items-center justify-center gap-3 sm:gap-5 hover:gap-7 w-full sm:w-auto sm:min-w-[320px] md:min-w-[380px] max-w-full mx-auto"
              style={{
                fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
                background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                overflow: 'visible'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a, #3a3a3a)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <span className="relative z-10 tracking-wide whitespace-nowrap">
                {language === 'uk' ? 'Замовити розробку' :
                 language === 'en' ? 'Order Development' :
                 language === 'ru' ? 'Заказать разработку' :
                 'Zamów rozwój'}
              </span>
              <FaArrowRight className="relative z-10 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Cursor icon positioned outside button - hide on very small screens */}
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-20 hidden xs:block">
                <div className="relative">
                  <FaMousePointer className="text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110" 
                    style={{ transform: 'rotate(-15deg)' }} 
                  />
                  
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

      {/* Модальне вікно */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CasePage;

