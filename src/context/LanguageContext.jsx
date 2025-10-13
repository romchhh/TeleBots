'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('uk'); // uk - українська, en - англійська, ru - російська, pl - польська
    const router = useRouter();
    const pathname = usePathname();

    // Визначаємо поточну мову на основі URL при старті
    useEffect(() => {
        if (pathname.startsWith('/en')) {
            setLanguage('en');
        } else if (pathname.startsWith('/ru')) {
            setLanguage('ru');
        } else if (pathname.startsWith('/pl')) {
            setLanguage('pl');
        } else {
            setLanguage('uk');
        }
    }, [pathname]);

    const toggleLanguage = () => {
        let newLang;
        if (language === 'uk') {
            newLang = 'en';
        } else if (language === 'en') {
            newLang = 'ru';
        } else if (language === 'ru') {
            newLang = 'pl';
        } else {
            newLang = 'uk';
        }
        
        setLanguage(newLang);
        
        if (newLang === 'en') {
            // Перехід на англійську версію
            const newPath = pathname === '/' ? '/en' : pathname.startsWith('/ru') ? `/en${pathname.substring(3)}` : pathname.startsWith('/pl') ? `/en${pathname.substring(3)}` : `/en${pathname}`;
            router.push(newPath);
        } else if (newLang === 'ru') {
            // Перехід на російську версію
            const newPath = pathname === '/' ? '/ru' : pathname.startsWith('/en') ? `/ru${pathname.substring(3)}` : pathname.startsWith('/pl') ? `/ru${pathname.substring(3)}` : `/ru${pathname}`;
            router.push(newPath);
        } else if (newLang === 'pl') {
            // Перехід на польську версію
            const newPath = pathname === '/' ? '/pl' : pathname.startsWith('/en') ? `/pl${pathname.substring(3)}` : pathname.startsWith('/ru') ? `/pl${pathname.substring(3)}` : `/pl${pathname}`;
            router.push(newPath);
        } else {
            // Перехід на українську версію
            const newPath = pathname.replace(/^\/(en|ru|pl)/, '');
            router.push(newPath || '/');
        }
    };

    const setLanguageDirectly = (lang) => {
        setLanguage(lang);
        
        if (lang === 'en') {
            const newPath = pathname === '/' ? '/en' : pathname.startsWith('/ru') ? `/en${pathname.substring(3)}` : pathname.startsWith('/pl') ? `/en${pathname.substring(3)}` : pathname.startsWith('/en') ? pathname : `/en${pathname}`;
            router.push(newPath);
        } else if (lang === 'ru') {
            const newPath = pathname === '/' ? '/ru' : pathname.startsWith('/en') ? `/ru${pathname.substring(3)}` : pathname.startsWith('/pl') ? `/ru${pathname.substring(3)}` : pathname.startsWith('/ru') ? pathname : `/ru${pathname}`;
            router.push(newPath);
        } else if (lang === 'pl') {
            const newPath = pathname === '/' ? '/pl' : pathname.startsWith('/en') ? `/pl${pathname.substring(3)}` : pathname.startsWith('/ru') ? `/pl${pathname.substring(3)}` : pathname.startsWith('/pl') ? pathname : `/pl${pathname}`;
            router.push(newPath);
        } else {
            const newPath = pathname.replace(/^\/(en|ru|pl)/, '');
            router.push(newPath || '/');
        }
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguageDirectly }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}; 