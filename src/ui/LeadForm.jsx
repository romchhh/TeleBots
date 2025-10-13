'use client'
import React, { useState } from 'react'
import './styles/LeadForm.css'
import { 
  BiPhone, 
  BiEnvelope,
  BiLogoTelegram,
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoWhatsapp
} from 'react-icons/bi'
import { useTranslation } from '../hooks/useTranslation'

export default function LeadForm() {
  const { t, language } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const BOT_TOKEN = "7879990803:AAFUsmy_hGfhhKNCk_ipRfDHudbFOA5MtuA"
      const CHAT_ID = 585621771
      
      const message = `
🔥 ${language === 'uk' ? 'Нова заявка на консультацію!' : language === 'en' ? 'New consultation request!' : language === 'ru' ? 'Новая заявка на консультацию!' : 'Nowe zapytanie o konsultację!'}

👤 ${language === 'uk' ? 'Ім\'я' : language === 'en' ? 'Name' : language === 'ru' ? 'Имя' : 'Imię'}: ${formData.name}
📱 ${language === 'uk' ? 'Телефон' : language === 'en' ? 'Phone' : language === 'ru' ? 'Телефон' : 'Telefon'}: ${formData.phone}
${formData.message ? `💬 ${language === 'uk' ? 'Повідомлення' : language === 'en' ? 'Message' : language === 'ru' ? 'Сообщение' : 'Wiadomość'}: ${formData.message}` : ''}
${language === 'en' ? '\n🌐 Submitted from English version of the site' : language === 'ru' ? '\n🌐 Отправлено с русской версии сайта' : language === 'pl' ? '\n🌐 Wysłane z polskiej wersji strony' : ''}
      `

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          phone: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (submitted) {
    return (
      <div className="lead-form-success">
        <div className="success-icon">✓</div>
        <h3>{t('leadForm.successTitle')}</h3>
        <p>{t('leadForm.successMessage')}</p>
        <button 
          className="new-request-btn"
          onClick={() => setSubmitted(false)}
        >
          {t('leadForm.newRequestButton')}
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-12">
      {/* Секція з заголовком */}
      <section className="w-full py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('leadForm.sectionTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            {t('leadForm.sectionSubtitle1')}
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            {t('leadForm.sectionSubtitle2')}
          </p>
        </div>
      </section>

      {/* Секція з формою та контактами */}
      <section className="w-full pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Форма */}
            <div className="bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-purple-100">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                {t('leadForm.formTitle')}
              </h3>
              <form onSubmit={handleSubmit} className="lead-form space-y-5">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('leadForm.namePlaceholder')}
                    required
                    className="form-input text-base p-4 w-full rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all shadow-sm bg-white/80 hover:bg-white"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('leadForm.phonePlaceholder')}
                    required
                    className="form-input text-base p-4 w-full rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all shadow-sm bg-white/80 hover:bg-white"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('leadForm.messagePlaceholder')}
                    className="form-input text-base p-4 w-full rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all shadow-sm bg-white/80 hover:bg-white resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-button w-full text-white text-base py-3 px-5 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg font-medium"
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #2d2d2d, #404040, #525252)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading-spinner">
                      <span className="spinner"></span>
                    </span>
                  ) : (
                    t('leadForm.submitButton')
                  )}
                </button>
              </form>

              <div className="form-footer mt-6 text-center text-gray-600 text-base">
                <p>
                  {t('leadForm.formFooter')}
                </p>
              </div>
            </div>

            {/* Контакти */}
            <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{t('leadForm.contactsTitle')}</h2>
              
              <div className="space-y-6">
                <div className="contact-item flex items-center gap-4 text-lg">
                  <BiPhone className="text-3xl text-purple-600" />
                  <a href="tel:+380992725903" className="hover:text-purple-600 transition-colors font-medium">+38 0 96 090 80 06</a>
                </div>
                
                <div className="contact-item flex items-center gap-4 text-lg">
                  <BiEnvelope className="text-3xl text-purple-600" />
                  <a href="mailto:roman.fedoniuk@gmail.com" className="hover:text-purple-600 transition-colors font-medium">roman.fedoniuk@gmail.com</a>
                </div>
                
                <div className="contact-item flex items-center gap-4 text-lg">
                  <BiLogoTelegram className="text-3xl text-purple-600" />
                  <a href="https://t.me/nowayrm" className="hover:text-purple-600 transition-colors font-medium">Telegram</a>
                </div>

                <div className="space-y-4">
                  <a href="https://wa.me/380960908006" className="w-full text-white py-3.5 px-6 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 text-base font-medium shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)',
                      border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #2d2d2d, #404040, #525252)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)';
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                    }}>
                    <BiLogoWhatsapp className="text-2xl" />
                    <span>{language === 'uk' ? 'Написати на WhatsApp' : language === 'en' ? 'Write on WhatsApp' : language === 'ru' ? 'Написать в WhatsApp' : 'Napisz na WhatsApp'}</span>
                  </a>
                  
                  <a href="https://t.me/nowayrm" className="w-full text-white py-3.5 px-6 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 text-base font-medium shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)',
                      border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #2d2d2d, #404040, #525252)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)';
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #404040)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                    }}>
                    <BiLogoTelegram className="text-2xl" />
                    <span>{language === 'uk' ? 'Написати в Telegram' : language === 'en' ? 'Write in Telegram' : language === 'ru' ? 'Написать в Telegram' : 'Napisz w Telegram'}</span>
                  </a>
                </div>

                <div className="social-links flex justify-center gap-6 mt-8">
                  <a href="https://www.instagram.com/telebotsnowayrm" className="text-3xl text-gray-700 hover:text-purple-600 transition-colors hover:scale-110 transform" title="Instagram">
                    <BiLogoInstagram />
                  </a>
                  <a href="https://www.facebook.com/share/p/19jL39Zvbd/?mibextid=wwXIfr" className="text-3xl text-gray-700 hover:text-purple-600 transition-colors hover:scale-110 transform" title="Facebook">
                    <BiLogoFacebook />
                  </a>
                  <a href="https://t.me/TeleBotsNowayrmChannel" className="text-3xl text-gray-700 hover:text-purple-600 transition-colors hover:scale-110 transform" title="Telegram">
                    <BiLogoTelegram />
                  </a>
                  <div className="relative group">
                    <div className="text-3xl text-gray-400 cursor-not-allowed">
                      <BiLogoYoutube />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Coming Soon
                    </div>
                  </div>
                </div>

                <a href="/privacy" className="block text-center text-gray-600 hover:text-purple-600 transition-colors mt-8 text-base">
                  {t('leadForm.privacyPolicy')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 