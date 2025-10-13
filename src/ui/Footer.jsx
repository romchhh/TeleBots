'use client';
import React from 'react';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
    const { t } = useTranslation();
    const { language } = useLanguage();
    
    // Базовий URL в залежності від мови
    const baseUrl = language === 'uk' ? '' : language === 'en' ? '/en' : language === 'ru' ? '/ru' : language === 'pl' ? '/pl' : '';
    
    return (
        <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 py-8 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
                {/* Branding Section */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold">{t('footer.company')}</h2>
                    <p className="text-gray-500 mt-2">{t('footer.slogan')}</p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left mb-6 md:mb-0">
                    <a href={`${baseUrl}/#`} className="hover:text-gray-400 transition-colors">{t('footer.navItems.home')}</a>
                    <a href={`${baseUrl}/websites`} className="hover:text-gray-400 transition-colors">{t('footer.navItems.websites')}</a>
                    <a href={`${baseUrl}/chatbots`} className="hover:text-gray-400 transition-colors">{t('footer.navItems.chatbots')}</a>
                    <a href={`${baseUrl}/parsers`} className="hover:text-gray-400 transition-colors">{t('footer.navItems.parsers')}</a>
                    <a href={`${baseUrl}/prices`} className="hover:text-gray-400 transition-colors">{t('footer.navItems.prices')}</a>
                    <a href={`${baseUrl}/portfolio`} className="hover:text-gray-400 transition-colors">{t('footer.navItems.portfolio')}</a>
                    <a href={`${baseUrl}/blog`} className="hover:text-gray-400 transition-colors">{t('footer.navItems.blog')}</a>
                </div>

                {/* Social Media Links */}
                <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold">{t('footer.followUs')}</h3>
                    <div className="flex justify-center md:justify-end space-x-4 mt-2">
                        <a href="https://www.instagram.com/telebotsnowayrm" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://t.me/TeleBotsNowayrmChannel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <FaTelegram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8">
                <p className="text-gray-600 text-sm">{t('footer.copyright')}</p>
            </div>
        </footer>
    );
}

export default Footer;
