'use client'

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaRocket, FaUsers, FaClock } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { useTranslation } from '../hooks/useTranslation';

const StatisticCard = React.memo(({ number, label, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center transform hover:scale-105 transition-all duration-500"
  >
    <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm mx-auto mb-4 sm:mb-5 md:mb-6 w-fit">
      <Icon className="text-3xl sm:text-4xl md:text-5xl text-gray-800" />
    </div>
    <CountUp
      end={parseInt(number)}
      duration={2.5}
      className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-2 sm:mb-3 block"
    />
    <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-medium break-words">{label}</p>
  </motion.div>
));

StatisticCard.displayName = 'StatisticCard';

function Statistics() {
  const { t } = useTranslation();
  
  const statistics = [
    { number: t('statistics.items.0.number'), label: t('statistics.items.0.text'), icon: FaRocket },
    { number: t('statistics.items.1.number'), label: t('statistics.items.1.text'), icon: FaUsers },
    { number: t('statistics.items.2.number'), label: t('statistics.items.2.text'), icon: FaClock },
    { number: t('statistics.items.3.number'), label: t('statistics.items.3.text'), icon: BiSupport }
  ];

  return (
    <section className="statistics-section relative z-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          {t('statistics.title')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default React.memo(Statistics); 