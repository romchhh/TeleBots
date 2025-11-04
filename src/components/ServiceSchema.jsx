'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { generateBreadcrumbs, generateServiceSchema } from '../utils/seo';

export default function ServiceSchema({ serviceName, serviceDescription }) {
  const pathname = usePathname();
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const baseUrl = 'https://telebots.site';
    const fullUrl = `${baseUrl}${pathname}`;
    
    // Generate breadcrumbs
    const breadcrumbs = generateBreadcrumbs(pathname, serviceName, language);
    
    // Generate service schema
    const serviceSchema = generateServiceSchema(serviceName, serviceDescription, fullUrl, language);
    
    // Remove existing schemas
    const existingBreadcrumb = document.getElementById('breadcrumb-schema');
    const existingService = document.getElementById('service-schema');
    if (existingBreadcrumb) existingBreadcrumb.remove();
    if (existingService) existingService.remove();
    
    // Add breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = 'breadcrumb-schema';
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbs);
    document.head.appendChild(breadcrumbScript);
    
    // Add service schema
    const serviceScript = document.createElement('script');
    serviceScript.id = 'service-schema';
    serviceScript.type = 'application/ld+json';
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);
    
    return () => {
      if (breadcrumbScript.parentNode) breadcrumbScript.parentNode.removeChild(breadcrumbScript);
      if (serviceScript.parentNode) serviceScript.parentNode.removeChild(serviceScript);
    };
  }, [pathname, language, serviceName, serviceDescription]);

  return null;
}

