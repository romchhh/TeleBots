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
    <section className="py-20 px-4 min-h-screen bg-white" id="purchase-scheme">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
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
          {PHASES.map((phase) => (
            <motion.div
              key={phase.id}
              className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden group"
              variants={itemVariants}
            >
              {/* Номер фази */}
              <div className="absolute top-4 right-4 text-gray-200 font-bold text-6xl opacity-30">
                {String(phase.id).padStart(2, '0')}
              </div>
              
              {/* Іконка */}
              <div className="text-3xl text-gray-700 mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110">
                {phase.icon}
              </div>
              
              {/* Заголовок */}
              <h3 className="text-2xl font-semibold mb-6 relative z-10">
                {phase.title}
              </h3>
              
              {/* Кроки */}
              <ul className="space-y-3 relative z-10">
                {Array.isArray(phase.steps) && phase.steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                  >
                    <FaCheckCircle className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" />
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Підсумок */}
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-lg text-gray-600 mb-4">
            {t('purchase.summary')}
          </p>
          <p className="text-base text-gray-500">
            {t('purchase.payment')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Purchase;