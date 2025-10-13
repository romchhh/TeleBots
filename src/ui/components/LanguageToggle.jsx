'use client';

import { useLanguage } from '../../context/LanguageContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageToggle() {
    const { language, setLanguageDirectly } = useLanguage();
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            <button
                onClick={() => setLanguageDirectly('uk')}
                className={`px-2 py-1 transition-all duration-300 ${
                    language === 'uk'
                        ? 'text-white bg-gradient-to-r from-gray-800 to-gray-600 rounded-md'
                        : 'text-gray-600 hover:text-gray-800'
                }`}
            >
                UA
            </button>
            <span className="text-gray-400">|</span>
            <button
                onClick={() => setLanguageDirectly('en')}
                className={`px-2 py-1 transition-all duration-300 ${
                    language === 'en'
                        ? 'text-white bg-gradient-to-r from-gray-800 to-gray-600 rounded-md'
                        : 'text-gray-600 hover:text-gray-800'
                }`}
            >
                EN
            </button>
            <span className="text-gray-400">|</span>
            <button
                onClick={() => setLanguageDirectly('pl')}
                className={`px-2 py-1 transition-all duration-300 ${
                    language === 'pl'
                        ? 'text-white bg-gradient-to-r from-gray-800 to-gray-600 rounded-md'
                        : 'text-gray-600 hover:text-gray-800'
                }`}
            >
                PL
            </button>
        </div>
    );
} 