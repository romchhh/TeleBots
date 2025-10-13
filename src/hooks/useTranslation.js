'use client';

import { useLanguage } from '../context/LanguageContext';
import { uk, en, ru, pl } from '../translations';

export function useTranslation() {
  const { language } = useLanguage();

  const translations = {
    uk,
    en,
    ru,
    pl
  };

  const t = (key, options = {}) => {
    // Розділяємо ключ на частини (наприклад 'hero.title' -> ['hero', 'title'])
    const keys = key.split('.');
    
    // Отримуємо переклад для поточної мови
    let translation = translations[language];
    
    // Проходимо по ключам, щоб отримати потрібний переклад
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Якщо переклад не знайдено, повертаємо ключ
        return key;
      }
    }
    
    // Якщо потрібно повернути об'єкт/масив і це дійсно об'єкт/масив
    if (options.returnObjects && (Array.isArray(translation) || typeof translation === 'object')) {
      return translation;
    }
    
    return translation;
  };

  return { t, language };
} 