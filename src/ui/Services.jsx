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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-gray-200 relative overflow-hidden group"
              >
                <div className="service-icon-container flex items-center justify-center mb-6">
                  <div className="service-icon w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 group-hover:shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <IconComponent className="w-10 h-10 text-gray-800 relative z-10 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center transition-colors duration-300 group-hover:text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {service.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-black/[0.01] to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 