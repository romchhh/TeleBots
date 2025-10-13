'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const LeadModal = ({ isOpen, onClose }) => {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const BOT_TOKEN = "7879990803:AAFUsmy_hGfhhKNCk_ipRfDHudbFOA5MtuA";
      const CHAT_ID = 585621771;
      
      const message = `
🔥 ${language === 'uk' ? 'Нова заявка на консультацію!' : language === 'en' ? 'New consultation request!' : language === 'ru' ? 'Новая заявка на консультацию!' : 'Nowe zapytanie o konsultację!'}

👤 ${language === 'uk' ? 'Ім\'я' : language === 'en' ? 'Name' : language === 'ru' ? 'Имя' : 'Imię'}: ${formData.name}
📱 ${language === 'uk' ? 'Телефон' : language === 'en' ? 'Phone' : language === 'ru' ? 'Телефон' : 'Telefon'}: ${formData.phone}
${formData.message ? `💬 ${language === 'uk' ? 'Повідомлення' : language === 'en' ? 'Message' : language === 'ru' ? 'Сообщение' : 'Wiadomość'}: ${formData.message}` : ''}
${language === 'en' ? '\n🌐 Submitted from English version of the site' : language === 'ru' ? '\n🌐 Отправлено с русской версии сайта' : language === 'pl' ? '\n🌐 Wysłane z polskiej wersji strony' : ''}
      `;

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOverlayClick = () => {
    onClose();
    // Скидаємо стан форми при закритті
    setSubmitted(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-3 sm:p-4"
      onClick={handleOverlayClick}
    >
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 max-w-md w-full shadow-2xl relative max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleOverlayClick}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {t('leadForm.successTitle')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t('leadForm.successMessage')}
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 pr-8">
              {t('leadForm.formTitle')}
            </h3>

            {/* Помітка про швидку відповідь */}
            <div className="mb-4 sm:mb-6 flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl p-2.5 sm:p-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-blue-800 font-medium">
                {language === 'uk' ? 'Відповімо протягом 15 хвилин' : 
                 language === 'en' ? 'We will respond within 15 minutes' : 
                 language === 'ru' ? 'Ответим в течение 15 минут' : 
                 'Odpowiemy w ciągu 15 minut'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('leadForm.namePlaceholder')}
                  required
                  className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition-all text-sm sm:text-base"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('leadForm.phonePlaceholder')}
                  required
                  className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition-all text-sm sm:text-base"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('leadForm.messagePlaceholder')}
                  rows="4"
                  className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition-all text-sm sm:text-base resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full text-white text-sm sm:text-base py-3 sm:py-4 px-5 sm:px-6 rounded-lg sm:rounded-xl transition-all transform hover:scale-[1.02] font-medium"
                style={{ 
                  background: 'linear-gradient(135deg, #000000, #1a1a1a, #2d2d2d)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                }}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="text-sm sm:text-base">
                      {language === 'uk' ? 'Надсилання...' : language === 'en' ? 'Sending...' : language === 'ru' ? 'Отправка...' : 'Wysyłanie...'}
                    </span>
                  </span>
                ) : (
                  t('leadForm.submitButton')
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadModal;

