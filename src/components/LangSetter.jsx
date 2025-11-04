'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Client component to dynamically set HTML lang attribute based on route
 * This fixes the hreflang and HTML lang mismatch issue
 */
export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    // Determine language from pathname
    let lang = 'uk';
    if (pathname.startsWith('/en')) {
      lang = 'en';
    } else if (pathname.startsWith('/ru')) {
      lang = 'ru';
    } else if (pathname.startsWith('/pl')) {
      lang = 'pl';
    }

    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [pathname]);

  return null;
}

