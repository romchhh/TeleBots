'use client'
import { useNavbar } from '../context/NavbarContext';
import { useLanguage } from '../context/LanguageContext';
import { usePagePosition } from '../hooks/usePagePosition';
import CustomNavLink from './CustomNavLink';
import { useTranslation } from '../hooks/useTranslation';

function Navbar() {
    const pagePosition = usePagePosition();
    const { isActiveNav } = useNavbar();
    const { language } = useLanguage();
    const { t } = useTranslation();

    // Базовий URL в залежності від мови
    let baseUrl;
    if (language === 'uk') {
        baseUrl = '';
    } else if (language === 'en') {
        baseUrl = '/en';
    } else if (language === 'ru') {
        baseUrl = '/ru';
    } else if (language === 'pl') {
        baseUrl = '/pl';
    } else {
        baseUrl = '';
    }

    return (
        <ul className={`
            flex items-center font-montserrat
            ${pagePosition < 150 || isActiveNav ? 'text-black' : 'text-black'}
            lg:flex-row lg:gap-8 lg:text-lg
            flex-col gap-6 text-xl
            font-medium
        `}
        style={{
            fontFamily: 'var(--font-montserrat)'
        }}
        >
            <li className="font-montserrat whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <CustomNavLink 
                    href={`${baseUrl}/`}
                    className="hover:text-gray-600 transition-colors font-montserrat"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {t('navbar.home')}
                </CustomNavLink>
            </li>
            <li className="font-montserrat whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <CustomNavLink 
                    href={`${baseUrl}/websites`}
                    className="hover:text-gray-600 transition-colors font-montserrat"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {t('navbar.websites')}
                </CustomNavLink>
            </li>
            <li className="font-montserrat whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <CustomNavLink 
                    href={`${baseUrl}/chatbots`}
                    className="hover:text-gray-600 transition-colors font-montserrat"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {t('navbar.chatbots')}
                </CustomNavLink>
            </li>
            <li className="font-montserrat whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <CustomNavLink 
                    href={`${baseUrl}/parsers`}
                    className="hover:text-gray-600 transition-colors font-montserrat"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {t('navbar.parsers')}
                </CustomNavLink>
            </li>
            <li className="font-montserrat whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <CustomNavLink 
                    href={`${baseUrl}/prices`}
                    className="hover:text-gray-600 transition-colors font-montserrat"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {t('navbar.prices')}
                </CustomNavLink>
            </li>
            <li className="font-montserrat whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <CustomNavLink 
                    href={`${baseUrl}/portfolio`}
                    className="hover:text-gray-600 transition-colors font-montserrat"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {t('navbar.portfolio')}
                </CustomNavLink>
            </li>
            <li className="font-montserrat whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <CustomNavLink 
                    href={`${baseUrl}/blog`}
                    className="hover:text-gray-600 transition-colors font-montserrat"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {t('navbar.blog')}
                </CustomNavLink>
            </li>
        </ul>
    );
}

export default Navbar;