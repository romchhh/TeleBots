'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Client component to dynamically set HTML lang attribute based on route
 * This ensures lang is correct on client-side navigation (SPA transitions)
 * Server-side lang is set in layout.js via middleware headers
 */
export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    // Determine language from pathname (same logic as middleware)
    let lang = 'uk';
    if (pathname.startsWith('/en/') || pathname === '/en') {
      lang = 'en';
    } else if (pathname.startsWith('/ru/') || pathname === '/ru') {
      lang = 'ru';
    } else if (pathname.startsWith('/pl/') || pathname === '/pl') {
      lang = 'pl';
    }

    // Update HTML lang attribute for client-side navigation
    if (typeof document !== 'undefined') {
      const currentLang = document.documentElement.getAttribute('lang');
      // Only update if different to avoid unnecessary DOM updates
      if (currentLang !== lang) {
        document.documentElement.lang = lang;
      }
    }
  }, [pathname]);

  return null;
}

