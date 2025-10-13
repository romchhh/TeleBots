'use client'

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Advantage from './Advantage';
import Button from './Button';
import { useTranslation } from '../hooks/useTranslation';
import { 
  FaRocket, 
  FaBolt, 
  FaCogs, 
  FaBullseye, 
  FaLifeRing, 
  FaUsers, 
  FaHandshake, 
  FaGem 
} from 'react-icons/fa';
import './Advantages.css';

function Advantages() {
  const { ref: advantagesRef, inView: advantagesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { t } = useTranslation();
  
  const ADVANTAGES = [
    {
      icon: FaRocket,
      title: t('advantages.items.0.title'),
      description: t('advantages.items.0.description'),
    },
    {
      icon: FaBolt,
      title: t('advantages.items.1.title'),
      description: t('advantages.items.1.description'),
    },
    {
      icon: FaCogs,
      title: t('advantages.items.2.title'),
      description: t('advantages.items.2.description'),
    },
    {
      icon: FaBullseye,
      title: t('advantages.items.3.title'),
      description: t('advantages.items.3.description'),
    },
    {
      icon: FaLifeRing,
      title: t('advantages.items.4.title'),
      description: t('advantages.items.4.description'),
    },
    {
      icon: FaUsers,
      title: t('advantages.items.5.title'),
      description: t('advantages.items.5.description'),
    },
    {
      icon: FaHandshake,
      title: t('advantages.items.6.title'),
      description: t('advantages.items.6.description'),
    },
    {
      icon: FaGem,
      title: t('advantages.items.7.title'),
      description: t('advantages.items.7.description'),
    }
  ];

  return (
    <section className='advantages-section' id='advantages'>
      <div className='advantages-container'>
        <div className='advantages-header'>
          <h2>{t('advantages.title')}</h2>
          <p>{t('advantages.subtitle')}</p>
        </div>
        
        <div
          ref={advantagesRef}
          className={`advantages-grid ${advantagesInView ? 'visible' : ''}`}
        >
          {ADVANTAGES.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                className='advantage-card' 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="advantage-icon">
                  <IconComponent className="w-12 h-12 text-gray-800" />
                </div>
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            );
          })}
        </div>

        <div className='contact-section'>
          <p>{t('advantages.contactPrompt')}</p>
          <a href='https://t.me/nowayrm' target='_blank' rel='noopener noreferrer'>
            <Button>{t('advantages.contactButton')}</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
