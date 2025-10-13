'use client'

import React from 'react';
import './HighlightedTextWithDots.css';

const HighlightedTextWithDots = ({ children, colorText, colorBackground, colorDots, widthDots, widthBorder }) => {
  return (
    <span 
      className="highlighted-text-with-dots"
      style={{
        '--color-text': colorText,
        '--color-background': colorBackground,
        '--color-dots': colorDots,
        '--width-dots': `${widthDots}px`,
        '--width-border': `${widthBorder}px`
      }}
    >
      {children}
    </span>
  );
};

export default HighlightedTextWithDots; 