import React from 'react';
import { FaBrain, FaFileAlt, FaExchangeAlt, FaBolt, FaClock } from 'react-icons/fa';

const services = [
  {
    icon: <FaBrain />,
    title: 'Проводимо спільні брейнштормінги щодо функціонала чат-бота',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: <FaFileAlt />,
    title: 'Допомагаємо сформувати технічне завдання на чат-бот',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    icon: <FaExchangeAlt />,
    title: 'Трансформуємо Ваші ідеї в реальний продукт',
    color: 'from-red-500 to-red-700',
  },
  {
    icon: <FaBolt />,
    title: 'Включаємо потужну експертизу в розробці чат-ботів у Ваш проект',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    icon: <FaClock />,
    title: 'Швидко реалізовуємо першу версію чат-бота',
    color: 'from-purple-500 to-purple-700',
  },
];

function Apper() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto text-center mb-10 sm:mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10">Що ми пропонуємо?</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-r ${service.color} shadow-xl flex flex-col sm:flex-row items-center justify-center transform transition-transform duration-500 hover:scale-105 active:scale-100 cursor-pointer bg-opacity-70`}
          >
            <div className="mb-4 sm:mb-0 sm:mr-6 p-3 sm:p-4 rounded-full bg-white text-gray-900 shadow-lg text-2xl sm:text-3xl flex-shrink-0">
              {service.icon}
            </div>
            <div className="text-center sm:text-left text-base sm:text-lg md:text-xl">{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Apper;
