"use client";
import React, { useEffect, useState, memo } from "react";
import Image from 'next/image';
import { FaTelegramPlane, FaInstagram, FaWhatsapp, FaFacebookF, FaMousePointer, FaArrowRight } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import "./styles/SchoolchildrenBanner.css";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../context/LanguageContext";
import LeadModal from "../components/LeadModal";
import Button from "./Button";
import "./Hero.css";

const Hero = memo(function Hero() { 
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialIcons = [
    { icon: <FaTelegramPlane />, link: "https://t.me/nowayrm", name: "telegram" },
    { icon: <FaInstagram />, link: "#", name: "instagram" },
    { icon: <FaWhatsapp />, link: "#", name: "whatsapp" },
    { icon: <FaFacebookF />, link: "#", name: "facebook" },
    { icon: <FaXTwitter />, link: "#", name: "x-twitter" }
  ];

  const getCaseUrl = (caseId) => {
    const baseUrl = language === 'uk' ? '' : `/${language}`;
    return `${baseUrl}/case/${caseId}`;
  };

  const links = [
    { text: t("hero.links.chatbots"), textMobile: t("hero.links.chatbots"), href: getCaseUrl("nutritionist-bot") },
    { text: t("hero.links.websites"), textMobile: t("hero.links.websites"), href: getCaseUrl("cats-fresh") },
    { text: t("hero.links.integrations"), textMobile: t("hero.links.integrations"), href: getCaseUrl("space-traffic") },
    { text: t("hero.links.ecommerce"), textMobile: t("hero.links.ecommerce"), href: "#portfolio" },
  ];

  const linksContainer = (
    <div className="schoolchildren-banner-content-text-links">
      {links.map((link, index) => (
        <div
          key={index}
          className="schoolchildren-banner-content-text-link"
          onClick={(e) => {
            if (link.href.startsWith('#')) {
              e.preventDefault();
              const target = document.querySelector(link.href);
              target?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            // Для посилань на кейси дозволяємо стандартну поведінку
          }}
        >
          {link.textMobile}
        </div>
      ))}
    </div>
  );

  const bannerRightText = (
    <div className="schoolchildren-banner-right-text-container">
      <div className="schoolchildren-banner-right-text">
        <div className="schoolchildren-banner-right-text-item">
          {t("hero.banner.text1")}
        </div>
        <div className="schoolchildren-banner-right-text-item">
          {t("hero.banner.text2")}
        </div>
        <div className="schoolchildren-banner-right-text-item">
          {t("hero.banner.text3")}
        </div>
      </div>
      <button
        className="schoolchildren-banner-right-text-btn"
        onClick={() => {
          window.open("https://t.me/nowayrm", "_blank");
        }}
      >
        {t("hero.scrollButton")}
      </button>
    </div>
  );

  const bannerBottomText = (
    <div className="schoolchildren-banner-right-text-bottom">
      chatbots · websites · integrations
    </div>
  );

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="social-icons-container">
              <div className="social-icons">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-wrapper"
                    data-social={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-content">
              <h1 className="hero-title">
                {t("hero.title")}
              </h1>
              <p className="hero-subtitle">
                {t("hero.subtitle")}
              </p>
              <div className="mt-6 sm:mt-8 flex justify-start w-full max-w-full">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-6 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-medium text-white rounded-2xl sm:rounded-3xl transition-all duration-700 flex items-center justify-center gap-3 sm:gap-5 hover:gap-7 w-full sm:w-auto sm:min-w-[320px] md:min-w-[380px] max-w-full"
                  style={{
                    fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
                    background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    overflow: 'visible'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a, #3a3a3a)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <span className="relative z-10 tracking-wide whitespace-nowrap">{t("hero.orderButton")}</span>
                  <FaArrowRight className="relative z-10 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1" />
                  
                  {/* Cursor icon positioned outside button - hide on very small screens */}
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-20 hidden xs:block">
                    <div className="relative">
                      <FaMousePointer className="text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110" 
                        style={{ transform: 'rotate(-15deg)' }} 
                      />
                      
                      {/* Click effect ripples */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full animate-[ping_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
                        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full animate-[ping_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
                        <div className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-white/40 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 ease-out rounded-2xl sm:rounded-3xl overflow-hidden" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl transition-opacity duration-700 rounded-2xl sm:rounded-3xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <Image
              src="/Group 1000007030.png"
              alt="Company Logo"
              width={150}
              height={225}
              priority
              quality={100}
              className="logo-image"
              sizes="(max-width: 468px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
});

export default Hero;
