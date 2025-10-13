'use client';
import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import Button from './Button';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const blogImages = [
  '/blog1.png',
  '/blog2.jpg',
  '/blog3.png',
  '/blog4.png',
  '/pay.jpg',
  '/blog6.png',
  '/blog7.png',
  '/blog8.png',
  '/blog9.png',
  '/blog10.png',
  '/blog11.png',
  '/blog12.png',
  '/creative.png',
  '/blog14.png',
  '/ukraine.png',
];

const blogLinks = [
  '/blog/your-first-telegram-bot',
  '/blog/integrations',
  '/blog/developing',
  '/blog/magnetto',
  '/blog/e-commerce',
  '/blog/sites',
  '/blog/increase-sales',
  '/blog/feedback',
  '/blog/how-to-earn-money',
  '/blog/perspectives-in-ukraine',
  '/blog/ai-in-bots',
  '/blog/more-leads',
  '/blog/how-to-monetize-telegram-bot',
  '/blog/parsers_telebots',
  '/blog/perspectives-in-ukraine',
];

const Blog = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Базовий URL в залежності від мови
  const baseUrl = language === 'uk' ? '' : '/en';
  
  // Створюємо масив блогпостів з перекладами
  const blogPosts = t('blog.posts').map((post, index) => ({
    title: post.title,
    alt: post.alt,
    image: blogImages[index],
    link: `${baseUrl}${blogLinks[index]}`
  }));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Introduction Section */}
      <div className="p-6 flex-grow mt-20">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 rounded-lg">
          {t('blog.title')}
        </h1>
        <p className="text-2xl mb-10 text-gray-700 text-center">
          {t('blog.subtitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <a
              href={post.link}
              key={index}
              className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                  {post.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Centered Button */}
      <div className="flex items-center justify-center">
        <a
          href="https://t.me/nowayrm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center justify-center text-white">
            {t('blog.orderButton')}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Blog;