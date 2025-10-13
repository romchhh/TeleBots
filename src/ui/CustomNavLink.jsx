'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavbar } from '../context/NavbarContext';

const CustomNavLink = ({ href, children, className = '' }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { setIsActiveNav } = useNavbar();

  const handleClick = () => {
    setIsActiveNav(false); // Закриваємо меню при кліку на посилання
  };

  return (
    <Link 
      href={href}
      className={`${className} ${isActive ? 'active' : ''} font-montserrat`}
      style={{ 
        fontFamily: 'var(--font-montserrat)',
        fontWeight: 500
      }}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default CustomNavLink; 