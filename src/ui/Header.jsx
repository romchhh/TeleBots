'use client';

import { useEffect } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { useNavbar } from '../context/NavbarContext';
import { useLanguage } from '../context/LanguageContext';
import { usePagePosition } from '../hooks/usePagePosition';
import Button from './Button';
import Navbar from './Navbar';
import LanguageToggle from './components/LanguageToggle';

function Header() {
    const pagePosition = usePagePosition();
    const { isActiveNav, setIsActiveNav } = useNavbar();
    const { language } = useLanguage();

    const activeStyles = pagePosition > 150 ? 'bg-white' : '';

    const handleToggleNavbar = () => {
        setIsActiveNav((state) => !state);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        const leadForm = document.getElementById('lead-form');
        
        if (leadForm) {
            leadForm.scrollIntoView({ behavior: 'smooth' });
            setIsActiveNav(false);
        } else {
            let baseUrl;
            if (language === 'uk') {
                baseUrl = '/';
            } else if (language === 'en') {
                baseUrl = '/en';
            } else if (language === 'ru') {
                baseUrl = '/ru';
            } else if (language === 'pl') {
                baseUrl = '/pl';
            } else {
                baseUrl = '/';
            }
            window.location.href = `${baseUrl}#lead-form`;
        }
    };

    // Локалізовані тексти
    const translations = {
        uk: {
            contactUs: "Зв'яжіться з нами"
        },
        en: {
            contactUs: "Contact us"
        },
        ru: {
            contactUs: "Свяжитесь с нами"
        },
        pl: {
            contactUs: "Skontaktuj się z nami"
        }
    };

    // Перевірка та фолбек для непідтримуваних мов
    const currentLanguage = translations[language] ? language : 'uk';

    useEffect(() => {
        if (isActiveNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isActiveNav]);

    return (
        <header className={`${activeStyles} fixed top-0 left-0 duration-500 z-50 w-full py-3`}>
            <div className='flex justify-between items-center container 2xl:gap-28 relative gap-14'>
                {/* Лого з посиланням на http://localhost:5173/ */}
                <a
                    href={language === 'uk' ? 'https://telebots.site/' : language === 'en' ? 'https://telebots.site/en' : language === 'ru' ? 'https://telebots.site/ru' : language === 'pl' ? 'https://telebots.site/pl' : 'https://telebots.site/'}
                    onClick={scrollToTop}
                    aria-label="TeleBots - Home page"
                    className='z-30 relative flex items-end xl:text-4xl text-2xl uppercase font-medium gap-2 cursor-pointer lg:-ml-16 ml-0'
                >
                    <img 
                        src='/logo.png' 
                        alt='TeleBots - Professional Telegram bot and website development company logo' 
                        className='xl:max-h-28 max-h-20' 
                        width={70}
                        height={80}
                        loading="eager"
                    />
                </a>

                <div
                    className={`flex lg:justify-between flex-1 justify-center items-center lg:relative fixed lg:bg-transparent bg-gray-100 flex-col lg:flex-row z-40 w-full h-full top-[-100%] left-0 gap-10 lg:gap-0 duration-500 ${
                        isActiveNav ? 'active-navbar' : ''
                    }`}
                >
                    <nav className={`lg:flex-1 flex justify-end`}>
                        <Navbar />
                    </nav>
                    <div className='2xl:max-w-[500px] xl:max-w-[400px] xl:w-full flex lg:flex-row flex-col justify-end items-center text-white lg:ml-12 gap-6'>
                        <div className="lg:block hidden">
                            <LanguageToggle />
                        </div>
                        <a href='#lead-form' onClick={handleContactClick} className="inline-block" aria-label="Contact us - Get in touch for a free consultation">
                            <Button className="whitespace-nowrap">
                                {translations[currentLanguage].contactUs}
                            </Button>
                        </a>
                        <div className="lg:hidden block mt-4">
                            <LanguageToggle />
                        </div>
                    </div>
                </div>

                <div className='block lg:hidden z-50'>
                    <button
                        aria-label={isActiveNav ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isActiveNav}
                        className='p-2 rounded-xl text-white transition-all duration-300'
                        onClick={handleToggleNavbar}
                        style={{ 
                            background: 'linear-gradient(135deg, #000000, #1a1a1a, #2d2d2d)',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #3d3d3d)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.5), 0 2px 5px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, #000000, #1a1a1a, #2d2d2d)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)';
                        }}
                    >
                        {!isActiveNav && <MdMenu size={28} aria-hidden="true" />}
                        {isActiveNav && <MdClose size={28} aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
