'use client';

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { 
  FaRobot, 
  FaDatabase, 
  FaCode, 
  FaCogs, 
  FaHeadset, 
  FaLightbulb 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.0.title'),
      description: t('services.items.0.description'),
      icon: FaRobot,
    },
    {
      title: t('services.items.1.title'),
      description: t('services.items.1.description'),
      icon: FaDatabase,
    },
    {
      title: t('services.items.2.title'),
      description: t('services.items.2.description'),
      icon: FaCode,
    },
    {
      title: t('services.items.3.title'),
      description: t('services.items.3.description'),
      icon: FaCogs,
    },
    {
      title: t('services.items.4.title'),
      description: t('services.items.4.description'),
      icon: FaHeadset,
    },
    {
      title: t('services.items.5.title'),
      description: t('services.items.5.description'),
      icon: FaLightbulb,
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Декоративні елементи */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-gradient-to-br from-white to-blue-50/30 border border-gray-200/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-blue-300/50 relative overflow-hidden group backdrop-blur-sm"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="service-icon-container flex items-center justify-center mb-6 relative z-10">
                  <div className="service-icon w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:shadow-2xl relative overflow-hidden ring-2 ring-transparent group-hover:ring-blue-200/50">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-100/40 to-purple-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl animate-pulse-slow"></div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl transform -skew-x-12 group-hover:animate-shine"></div>
                    <IconComponent className="w-12 h-12 text-gray-800 group-hover:text-blue-700 relative z-10 transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center transition-all duration-300 group-hover:text-blue-900 group-hover:scale-105">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/0 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 