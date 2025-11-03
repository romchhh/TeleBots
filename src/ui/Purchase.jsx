'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaRocket, FaCode, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionHeader from './components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

function Purchase() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { t } = useTranslation();

  const PHASES = [
    {
      id: 1,
      title: t('purchase.phases.0.title'),
      icon: <FaRocket />,
      steps: t('purchase.phases.0.steps', { returnObjects: true }),
    },
    {
      id: 2,
      title: t('purchase.phases.1.title'),
      icon: <FaCode />,
      steps: t('purchase.phases.1.steps', { returnObjects: true }),
    },
    {
      id: 3,
      title: t('purchase.phases.2.title'),
      icon: <FaCheckCircle />,
      steps: t('purchase.phases.2.steps', { returnObjects: true }),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="purchase-section py-20 px-4 relative overflow-hidden" id="purchase-scheme">
      <motion.div
        ref={ref}
        className="container mx-auto relative z-10"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <SectionHeader
          title={t('purchase.title')}
          description={t('purchase.description')}
        />

        {/* Фази */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PHASES.map((phase, index) => (
            <motion.div
              key={phase.id}
              className="bg-gradient-to-br from-white to-gray-50/20 border border-gray-200/60 rounded-3xl p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300/40"
              variants={itemVariants}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-gray-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Номер фази */}
              <div className="absolute top-4 right-4 text-transparent bg-gradient-to-br from-black to-gray-800 bg-clip-text font-bold text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {String(phase.id).padStart(2, '0')}
              </div>
              
              {/* Іконка */}
              <div className="mb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-black/10 to-gray-800/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-black/20 group-hover:to-gray-800/20 group-hover:shadow-lg border border-gray-200/30 group-hover:border-gray-300/40">
                  <div className="text-3xl text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {phase.icon}
                  </div>
                </div>
              </div>
              
              {/* Заголовок */}
              <h3 className="text-2xl font-bold mb-6 relative z-10 text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                {phase.title}
              </h3>
              
              {/* Кроки */}
              <ul className="space-y-3 relative z-10">
                {Array.isArray(phase.steps) && phase.steps.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                  >
                    <FaCheckCircle className="w-5 h-5 mr-3 text-black group-hover:text-gray-800 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-black/0 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Підсумок */}
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            {t('purchase.summary')}
          </p>
          <p className="text-lg text-gray-600">
            {t('purchase.payment')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Purchase;