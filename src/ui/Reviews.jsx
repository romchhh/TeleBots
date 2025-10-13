'use client';

import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight, FaUserCircle, FaRobot, FaCode, FaShoppingCart, FaCogs, FaChartLine, FaDatabase, FaServer, FaComments, FaTools, FaLightbulb, FaCreditCard, FaUserCog, FaGlobe, FaCheckCircle, FaDesktop, FaRocket, FaLock, FaMobile } from 'react-icons/fa';
import { BiSupport, BiCustomize } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

function Reviews() {
    const { t } = useTranslation();
    const [showSeoText, setShowSeoText] = useState(false);
    const sliderRef = useRef(null);
    const [loadedImages, setLoadedImages] = useState(new Set());

    const reviews = [
        {
            name: 'Данііл Бережанський',
            text: 'Чудовий сервіс! Я дуже задоволений. Хоч і виникли проблеми на етапі розробки, але команда допомогла їх вирішити.',
            photo: 'photo1.jpg',
            alt: 'Телеграм бот відгук'
        },
        {
            name: 'Андрій Коваль (Власник мережі каналів)',
            text: 'Роботою дуже задоволений, вдалось реалізувати мою ідею з ботом, дослухались до моїх думок і підказували на етапі розробки функціоналу. Тому радую кожному хто задумується над створенням бота. Дякую',
            photo: 'photo2.jpg',
            alt: 'Телеграм бот відгук'
        },
        {
            name: 'Роман (Арбітраж)',
            text: 'И спасибо тебе за бота, Очень классный и удобный бот получился⚡️',
            photo: 'photo3.jpg',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Анна Коваленко',
            text: 'Відмінний сервіс, констультували на кожному етапі розробки бота, дякую за допомогу!',
            photo: 'photo4.jpg',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Богдан Тимченко (Мережа косметики Cosmy)',
            text: 'Все пройшло на вищому рівні. Ви молодець, дякую 🙏🏻',
            photo: 'photo5.jpg',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Софія Павлік (Дизайнер)',
            text: 'Команда допомогала мені з стартапом з першого етапу, консультували, пропонували, були повністю задіяні в проєкті, якщо плануєте розробку чат-бота, звертайтесь до цієї команди, не пожалієте. 10 з 10❤️',
            photo: 'photo6.jpg',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Андрій Костюков (Бізнес)',
            text: 'Після кількох невдалих спроб знайти професійний сервіс для мого стартапу, я нарешті знайшов цю команду.',
            photo: 'photo7.jpg',
            alt: 'Телеграм-бот відгук'
        },
        {
            name: 'Вiталiй Левченко',
            text: 'Привіт, воу оце крутяк ☺️. Наша компанія шукала спосіб швидко та якісно покращити підтримку клієнтів, Роман допоміг вирішити нашу проблему.',
            photo: 'photo8.jpg',
            alt: 'Чат-бот відгук'
        },
        {
            name: 'Григорій Малюк',
            text: 'Я завжди скептично ставився до сервісів, але тут якість розробки та комунікацій мене задоволнила.',
            photo: 'photo9.jpg',
            alt: 'Телеграм-бот відгук'
        },
        {
            name: 'Марія Петренко',
            text: 'Чудовий сервіс для автоматизації бізнесу! Бот працює бездоганно і значно спростив нашу роботу з клієнтами.',
            photo: null,
            alt: 'Телеграм бот відгук'
        },
        {
            name: 'Олексій Мірошниченко',
            text: 'Дуже професійний підхід до розробки. Команда врахувала всі наші побажання і створила саме такого бота, якого ми хотіли.',
            photo: null,
            alt: 'Телеграм бот відгук'
        },
        {
            name: 'Ірина Ковальчук',
            text: 'Приємно вражена швидкістю роботи та якістю підтримки. Бот значно покращив нашу комунікацію з клієнтами.',
            photo: null,
            alt: 'Телеграм бот відгук'
        },
        {
            name: 'Максим Литвиненко',
            text: 'Відмінне рішення для нашого бізнесу. Автоматизація процесів через бота перевершила наші очікування.',
            photo: null,
            alt: 'Телеграм бот відгук'
        }
    ];

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                aria-label="Previous slide"
            >
                <FaChevronLeft className="text-gray-600 text-xl" />
            </button>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                aria-label="Next slide"
            >
                <FaChevronRight className="text-gray-600 text-xl" />
            </button>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        swipe: true,
        swipeToSlide: true,
        dotsClass: "slick-dots !bottom-[-3rem]",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                }
            }
        ]
    };

    useEffect(() => {
        const sliderElement = sliderRef.current?.innerSlider?.list;

        const handleWheel = (e) => {
            e.preventDefault();
            if (e.deltaX > 0) {
                sliderRef.current.slickNext();
            } else if (e.deltaX < 0) {
                sliderRef.current.slickPrev();
            }
        };

        if (sliderElement) {
            sliderElement.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    // Intersection Observer for lazy loading images
    useEffect(() => {
        let imageObserver;
        
        // Use requestIdleCallback for better performance on low-end devices
        const initObserver = () => {
            imageObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const photoName = img.dataset.photo;
                        if (photoName && !loadedImages.has(photoName)) {
                            console.log('Loading image:', photoName); // Debug log
                            // Trigger the fallback loading in LazyImage component
                            setLoadedImages(prev => new Set([...prev, photoName]));
                            imageObserver.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '100px 0px', // Increased margin for earlier loading
                threshold: 0.01 // Lower threshold for better performance
            });

            const images = document.querySelectorAll('[data-photo]');
            console.log('Found images to observe:', images.length); // Debug log
            images.forEach(img => {
                console.log('Observing image:', img.dataset.photo); // Debug log
                imageObserver.observe(img);
            });
        };

        // Use requestIdleCallback for better performance
        if ('requestIdleCallback' in window) {
            requestIdleCallback(initObserver);
        } else {
            // Fallback for browsers that don't support requestIdleCallback
            setTimeout(initObserver, 100);
        }

        return () => {
            if (imageObserver) {
                imageObserver.disconnect();
            }
        };
    }, [loadedImages]);

    const LazyImage = ({ photo, alt, className }) => {
        if (!photo) {
            return <FaUserCircle className={`${className} text-gray-400`} />;
        }

        // Generate responsive image sources for better performance
        const getResponsiveSrc = (photoName) => {
            // For Next.js, images in public folder are served from root
            return photoName.startsWith('/') ? photoName : `/${photoName}`;
        };

        const [imageLoaded, setImageLoaded] = useState(false);
        const [imageError, setImageError] = useState(false);

        const handleImageLoad = () => {
            console.log('Image loaded successfully:', photo);
            setImageLoaded(true);
        };

        const handleImageError = (e) => {
            console.error('Image failed to load:', photo, e);
            setImageError(true);
        };

        // Check if image should be loaded based on Intersection Observer
        const shouldLoadImage = loadedImages.has(getResponsiveSrc(photo));

        // Fallback: load image immediately if Intersection Observer is not working
        useEffect(() => {
            const timer = setTimeout(() => {
                if (!imageLoaded && !imageError && !shouldLoadImage) {
                    console.log('Fallback loading for image:', photo);
                    setImageLoaded(true);
                }
            }, 2000); // Wait 2 seconds before fallback

            return () => clearTimeout(timer);
        }, [imageLoaded, imageError, photo, shouldLoadImage]);

        // Debug logging
        useEffect(() => {
            console.log(`LazyImage state for ${photo}:`, { imageLoaded, imageError, shouldLoadImage });
        }, [photo, imageLoaded, imageError, shouldLoadImage]);

        if (imageError) {
            return <FaUserCircle className={`${className} text-gray-400`} />;
        }

        const imageSrc = (imageLoaded || shouldLoadImage) ? getResponsiveSrc(photo) : undefined;
        const isVisible = (imageLoaded || shouldLoadImage);

        // For debugging, show the image path
        console.log(`Rendering LazyImage for ${photo}:`, { imageSrc, isVisible, shouldLoadImage });

        return (
            <img
                data-photo={getResponsiveSrc(photo)}
                src={imageSrc}
                alt={alt}
                className={`${className} ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                loading="lazy"
                decoding="async"
                onLoad={handleImageLoad}
                onError={handleImageError}
            />
        );
    };

    return (
        <section id='reviews' className='py-16 relative'>
            <style jsx global>{`
                .slick-dots li button:before {
                    font-size: 12px;
                    color: #666;
                    opacity: 0.5;
                }
                .slick-dots li.slick-active button:before {
                    color: #333;
                    opacity: 1;
                }
                .slick-slide {
                    transition: all 0.3s ease;
                    transform: scale(0.9);
                    opacity: 0.8;
                }
                .slick-center {
                    transform: scale(1);
                    opacity: 1;
                }
                
                /* Font display optimization */
                @font-face {
                    font-family: 'slick';
                    font-display: swap;
                }
                
                /* Image loading optimizations */
                [data-photo] {
                    will-change: opacity;
                    transform: translateZ(0);
                    backface-visibility: hidden;
                }
                
                /* Smooth image transitions */
                .opacity-0 {
                    opacity: 0;
                }
                .opacity-100 {
                    opacity: 1;
                }
                
                /* Mobile performance optimizations */
                @media (max-width: 768px) {
                    [data-photo] {
                        will-change: auto;
                    }
                }
            `}</style>
            <div className='container mx-auto px-4'>
                <div className='w-full text-center mb-12'>
                    <h2 className='text-4xl font-bold mb-5'>{t('reviews.title')}</h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto'></div>
                </div>
                <div className='px-4 sm:px-8 md:px-12'>
                    <Slider ref={sliderRef} {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className='px-2 sm:px-4'>
                                <div className='bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex flex-col'>
                                    <div className='flex items-center justify-center mb-3 sm:mb-4 md:mb-6'>
                                        <LazyImage
                                            photo={review.photo}
                                            alt={review.alt}
                                            className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover'
                                        />
                                    </div>
                                    <h3 className='text-base sm:text-lg md:text-xl font-semibold text-center mb-2 sm:mb-3 md:mb-4'>{review.name}</h3>
                                    <p className='text-sm sm:text-base md:text-lg text-gray-600 text-center flex-grow'>{review.text}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='text-center mt-20 mb-10'>
                    <button
                        onClick={() => setShowSeoText(!showSeoText)}
                        className='bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl mr-4'
                    >
                        {showSeoText ? t('reviews.hideButton') : t('reviews.moreButton')}
                    </button>
                </div>
                {showSeoText && (
                    <div className='mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl'>
                        <h3 className='text-3xl font-bold mb-8 text-center text-gray-800'>{t('reviews.detailsSection.title')}</h3>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='flex items-center gap-4 mb-4'>
                                    <FaRobot className='text-3xl text-blue-500' />
                                    <h4 className='text-xl font-semibold'>{t('reviews.detailsSection.sections.telegramBots.title')}</h4>
                                </div>
                                <p className='text-gray-700'>
                                    {t('reviews.detailsSection.sections.telegramBots.description')}
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='flex items-center gap-4 mb-4'>
                                    <FaCode className='text-3xl text-blue-500' />
                                    <h4 className='text-xl font-semibold'>{t('reviews.detailsSection.sections.botDevelopment.title')}</h4>
                                </div>
                                <p className='text-gray-700'>
                                    {t('reviews.detailsSection.sections.botDevelopment.description')}
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='flex items-center gap-4 mb-4'>
                                    <FaTools className='text-3xl text-blue-500' />
                                    <h4 className='text-xl font-semibold'>{t('reviews.detailsSection.sections.dataParsers.title')}</h4>
                                </div>
                                <p className='text-gray-700'>
                                    {t('reviews.detailsSection.sections.dataParsers.description')}
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='flex items-center gap-4 mb-4'>
                                    <FaGlobe className='text-3xl text-blue-500' />
                                    <h4 className='text-xl font-semibold'>{t('reviews.detailsSection.sections.integrations.title')}</h4>
                                </div>
                                <p className='text-gray-700'>
                                    {t('reviews.detailsSection.sections.integrations.description')}
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='flex items-center gap-4 mb-4'>
                                    <FaShoppingCart className='text-3xl text-blue-500' />
                                    <h4 className='text-xl font-semibold'>{t('reviews.detailsSection.sections.ecommerceSolutions.title')}</h4>
                                </div>
                                <p className='text-gray-700'>
                                    {t('reviews.detailsSection.sections.ecommerceSolutions.description')}
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='flex items-center gap-4 mb-4'>
                                    <BiSupport className='text-3xl text-blue-500' />
                                    <h4 className='text-xl font-semibold'>{t('reviews.detailsSection.sections.support.title')}</h4>
                                </div>
                                <p className='text-gray-700'>
                                    {t('reviews.detailsSection.sections.support.description')}
                                </p>
                            </motion.div>
                        </div>

                        <div className='mt-12 bg-white p-8 rounded-xl shadow-lg'>
                            <h4 className='text-2xl font-bold mb-6 text-center'>{t('reviews.detailsSection.developmentProcess.title')}</h4>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {Array.isArray(t('reviews.detailsSection.developmentProcess.steps', { returnObjects: true })) && 
                                  t('reviews.detailsSection.developmentProcess.steps', { returnObjects: true }).map((step, index) => (
                                    <div key={index} className='flex flex-col items-center text-center p-4'>
                                        <div className='w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl mb-4'>{step.number}</div>
                                        <h5 className='font-semibold mb-2'>{step.title}</h5>
                                        <p className='text-gray-600'>{step.description}</p>
                                    </div>
                                  ))
                                }
                            </div>
                        </div>

                        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='bg-white p-6 rounded-xl shadow-lg'>
                                <h4 className='text-xl font-semibold mb-4 flex items-center gap-3'>
                                    <FaLightbulb className='text-2xl text-blue-500' />
                                    {t('reviews.detailsSection.botCapabilities.title')}
                                </h4>
                                <ul className='space-y-3'>
                                    {Array.isArray(t('reviews.detailsSection.botCapabilities.items', { returnObjects: true })) && 
                                      t('reviews.detailsSection.botCapabilities.items', { returnObjects: true }).map((item, index) => (
                                        <li key={index} className='flex items-center gap-2'>
                                            <FaCheckCircle className='text-green-500' />
                                            {item}
                                        </li>
                                      ))
                                    }
                                </ul>
                            </div>

                            <div className='bg-white p-6 rounded-xl shadow-lg'>
                                <h4 className='text-xl font-semibold mb-4 flex items-center gap-3'>
                                    <FaServer className='text-2xl text-blue-500' />
                                    {t('reviews.detailsSection.technicalFeatures.title')}
                                </h4>
                                <ul className='space-y-3'>
                                    {Array.isArray(t('reviews.detailsSection.technicalFeatures.items', { returnObjects: true })) && 
                                      t('reviews.detailsSection.technicalFeatures.items', { returnObjects: true }).map((item, index) => (
                                        <li key={index} className='flex items-center gap-2'>
                                            <FaCheckCircle className='text-green-500' />
                                            {item}
                                        </li>
                                      ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='mt-12 bg-white p-8 rounded-xl shadow-lg'
                        >
                            <div className='mb-6'>
                                <h4 className='text-2xl font-bold mb-2 text-center md:text-left'>{t('reviews.detailsSection.professionalDevelopment.title')}</h4>
                                <p className='text-gray-700'>
                                    {t('reviews.detailsSection.professionalDevelopment.description')}
                                </p>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className='flex items-center gap-4 mb-6'>
                                    <FaChartLine className='text-3xl text-blue-500' />
                                    <h4 className='text-2xl font-semibold'>{t('reviews.detailsSection.keyAdvantages.title')}</h4>
                                </div>
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <ul className='space-y-3 text-gray-700'>
                                        {Array.isArray(t('reviews.detailsSection.keyAdvantages.items', { returnObjects: true })) && 
                                          t('reviews.detailsSection.keyAdvantages.items', { returnObjects: true }).slice(0, 3).map((item, index) => (
                                            <li key={index} className='flex items-center gap-2'>
                                                <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                <span>{item}</span>
                                            </li>
                                          ))
                                        }
                                    </ul>
                                    <ul className='space-y-3 text-gray-700'>
                                        {Array.isArray(t('reviews.detailsSection.keyAdvantages.items', { returnObjects: true })) && 
                                          t('reviews.detailsSection.keyAdvantages.items', { returnObjects: true }).slice(3).map((item, index) => (
                                            <li key={index} className='flex items-center gap-2'>
                                                <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                <span>{item}</span>
                                            </li>
                                          ))
                                        }
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='bg-white p-8 rounded-xl mt-12'
                            >
                                <h4 className='text-2xl font-semibold mb-6'>{t('reviews.detailsSection.industrialSolutions.title')}</h4>
                                <div className='grid md:grid-cols-2 gap-x-16 gap-y-8'>
                                    <div>
                                        <h5 className='text-xl font-medium mb-4 flex items-center gap-3'>
                                            <FaShoppingCart className='text-blue-500' />
                                            {t('reviews.detailsSection.industrialSolutions.ecommerce.title')}
                                        </h5>
                                        <ul className='space-y-2'>
                                            {Array.isArray(t('reviews.detailsSection.industrialSolutions.ecommerce.items', { returnObjects: true })) && 
                                              t('reviews.detailsSection.industrialSolutions.ecommerce.items', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className='text-xl font-medium mb-4 flex items-center gap-3'>
                                            <BiCustomize className='text-blue-500' />
                                            {t('reviews.detailsSection.industrialSolutions.services.title')}
                                        </h5>
                                        <ul className='space-y-2'>
                                            {Array.isArray(t('reviews.detailsSection.industrialSolutions.services.items', { returnObjects: true })) && 
                                              t('reviews.detailsSection.industrialSolutions.services.items', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='mt-12'
                            >
                                <h4 className='text-2xl font-semibold mb-6'>{t('reviews.detailsSection.additionalCapabilities.title')}</h4>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                    {Array.isArray(t('reviews.detailsSection.additionalCapabilities.columns', { returnObjects: true })) && 
                                      t('reviews.detailsSection.additionalCapabilities.columns', { returnObjects: true }).map((column, colIndex) => (
                                        <div key={colIndex} className='space-y-2 text-gray-700'>
                                            {Array.isArray(column) && column.map((item, itemIndex) => (
                                                <div key={itemIndex} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                      ))
                                    }
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className='mt-16 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl'
                            >
                                <h4 className='text-2xl font-semibold mb-4'>{t('reviews.detailsSection.comprehensiveApproach.title')}</h4>
                                <p className='text-gray-700 mb-6'>
                                    {t('reviews.detailsSection.comprehensiveApproach.description')}
                                </p>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium'>
                                    {t('reviews.detailsSection.comprehensiveApproach.discussButton')}
                                </button>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='mt-16'
                            >
                                <h4 className='text-2xl font-semibold mb-6'>{t('reviews.detailsSection.telegramBotsDevelopment.title')}</h4>
                                <div className='space-y-4 text-gray-700'>
                                    {Array.isArray(t('reviews.detailsSection.telegramBotsDevelopment.paragraphs', { returnObjects: true })) && 
                                      t('reviews.detailsSection.telegramBotsDevelopment.paragraphs', { returnObjects: true }).map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                      ))
                                    }
                                </div>

                                <div className='mt-8 grid md:grid-cols-2 gap-8'>
                                    <div>
                                        <h5 className='text-xl font-medium mb-4'>{t('reviews.detailsSection.telegramBotsDevelopment.popularQueries.title')}</h5>
                                        <ul className='space-y-2'>
                                            {Array.isArray(t('reviews.detailsSection.telegramBotsDevelopment.popularQueries.items', { returnObjects: true })) && 
                                              t('reviews.detailsSection.telegramBotsDevelopment.popularQueries.items', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className='text-xl font-medium mb-4'>{t('reviews.detailsSection.telegramBotsDevelopment.ourAdvantages.title')}</h5>
                                        <ul className='space-y-2'>
                                            {Array.isArray(t('reviews.detailsSection.telegramBotsDevelopment.ourAdvantages.items', { returnObjects: true })) && 
                                              t('reviews.detailsSection.telegramBotsDevelopment.ourAdvantages.items', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className='mt-16'
                            >
                                <h4 className='text-2xl font-semibold mb-6'>{t('reviews.detailsSection.websiteAndBusinessAutomation.title')}</h4>
                                <div className='grid md:grid-cols-2 gap-8'>
                                    <div className='bg-white p-6 rounded-xl shadow'>
                                        <h5 className='text-xl font-medium mb-4 flex items-center gap-3'>
                                            <FaDesktop className='text-blue-500' />
                                            {t('reviews.detailsSection.websiteAndBusinessAutomation.modernWebsites.title')}
                                        </h5>
                                        <p className='mb-4 text-gray-700'>
                                            {t('reviews.detailsSection.websiteAndBusinessAutomation.modernWebsites.description')}
                                        </p>
                                        <ul className='space-y-2'>
                                            {Array.isArray(t('reviews.detailsSection.websiteAndBusinessAutomation.modernWebsites.items', { returnObjects: true })) && 
                                              t('reviews.detailsSection.websiteAndBusinessAutomation.modernWebsites.items', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                    </div>
                                    <div className='bg-white p-6 rounded-xl shadow'>
                                        <h5 className='text-xl font-medium mb-4 flex items-center gap-3'>
                                            <FaShoppingCart className='text-blue-500' />
                                            {t('reviews.detailsSection.websiteAndBusinessAutomation.onlineStores.title')}
                                        </h5>
                                        <p className='mb-4 text-gray-700'>
                                            {t('reviews.detailsSection.websiteAndBusinessAutomation.onlineStores.description')}
                                        </p>
                                        <ul className='space-y-2'>
                                            {Array.isArray(t('reviews.detailsSection.websiteAndBusinessAutomation.onlineStores.items', { returnObjects: true })) && 
                                              t('reviews.detailsSection.websiteAndBusinessAutomation.onlineStores.items', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-8 bg-white p-6 rounded-xl shadow'>
                                    <h5 className='text-xl font-medium mb-4 flex items-center gap-3'>
                                        <FaTools className='text-blue-500' />
                                        {t('reviews.detailsSection.websiteAndBusinessAutomation.parsersAndAutomation.title')}
                                    </h5>
                                    <p className='mb-4 text-gray-700'>
                                        {t('reviews.detailsSection.websiteAndBusinessAutomation.parsersAndAutomation.description')}
                                    </p>
                                    <div className='grid md:grid-cols-2 gap-4'>
                                        <ul className='space-y-2'>
                                            {Array.isArray(t('reviews.detailsSection.websiteAndBusinessAutomation.parsersAndAutomation.column1', { returnObjects: true })) && 
                                              t('reviews.detailsSection.websiteAndBusinessAutomation.parsersAndAutomation.column1', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                        <ul className='space-y-2'>
                                            {Array.isArray(t('reviews.detailsSection.websiteAndBusinessAutomation.parsersAndAutomation.column2', { returnObjects: true })) && 
                                              t('reviews.detailsSection.websiteAndBusinessAutomation.parsersAndAutomation.column2', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className='flex items-center gap-2'>
                                                    <FaCheckCircle className='text-green-500 flex-shrink-0' />
                                                    <span>{item}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* SEO Business Solutions Block */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className='mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl'
                            >
                                <h3 className='text-3xl font-bold mb-8 text-center text-gray-800'>
                                    {t('businessSolutions.title')}
                                </h3>
                                <p className='text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16'>
                                    {t('businessSolutions.subtitle')}
                                </p>

                                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-8'>
                                    {/* Telegram Bots Block */}
                                    <div className='bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl'>
                                        <h4 className='text-2xl font-semibold mb-4 text-blue-600'>
                                            {t('businessSolutions.telegramBots.title')}
                                        </h4>
                                        <p className='text-gray-700 mb-6'>
                                            {t('businessSolutions.telegramBots.description')}
                                        </p>
                                        <h5 className='font-medium text-lg mb-3'>
                                            {t('businessSolutions.telegramBots.benefitsTitle')}
                                        </h5>
                                        <ul className='space-y-2 mb-6'>
                                            {Array.isArray(t('businessSolutions.telegramBots.benefits', { returnObjects: true })) && 
                                              t('businessSolutions.telegramBots.benefits', { returnObjects: true }).map((benefit, index) => (
                                                <li key={index} className='flex items-start'>
                                                    <FaCheckCircle className='w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                                                    <span>{benefit}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                        <p className='text-gray-700'>
                                            {t('businessSolutions.telegramBots.conclusion')}
                                        </p>
                                    </div>

                                    {/* Websites Block */}
                                    <div className='bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl'>
                                        <h4 className='text-2xl font-semibold mb-4 text-purple-600'>
                                            {t('businessSolutions.websites.title')}
                                        </h4>
                                        <p className='text-gray-700 mb-6'>
                                            {t('businessSolutions.websites.description')}
                                        </p>
                                        <h5 className='font-medium text-lg mb-3'>
                                            {t('businessSolutions.websites.typesTitle')}
                                        </h5>
                                        <ul className='space-y-2 mb-6'>
                                            {Array.isArray(t('businessSolutions.websites.types', { returnObjects: true })) && 
                                              t('businessSolutions.websites.types', { returnObjects: true }).map((type, index) => (
                                                <li key={index} className='flex items-start'>
                                                    <FaCheckCircle className='w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                                                    <span>{type}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                        <p className='text-gray-700'>
                                            {t('businessSolutions.websites.conclusion')}
                                        </p>
                                    </div>

                                    {/* Parsers Block */}
                                    <div className='bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl'>
                                        <h4 className='text-2xl font-semibold mb-4 text-green-600'>
                                            {t('businessSolutions.parsers.title')}
                                        </h4>
                                        <p className='text-gray-700 mb-6'>
                                            {t('businessSolutions.parsers.description')}
                                        </p>
                                        <h5 className='font-medium text-lg mb-3'>
                                            {t('businessSolutions.parsers.benefitsTitle')}
                                        </h5>
                                        <ul className='space-y-2 mb-6'>
                                            {Array.isArray(t('businessSolutions.parsers.benefits', { returnObjects: true })) && 
                                              t('businessSolutions.parsers.benefits', { returnObjects: true }).map((benefit, index) => (
                                                <li key={index} className='flex items-start'>
                                                    <FaCheckCircle className='w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                                                    <span>{benefit}</span>
                                                </li>
                                              ))
                                            }
                                        </ul>
                                        <p className='text-gray-700'>
                                            {t('businessSolutions.parsers.conclusion')}
                                        </p>
                                    </div>
                                </div>

                                <div className='mt-16 text-center'>
                                    <h4 className='text-2xl font-bold mb-6'>
                                        {t('businessSolutions.comprehensive.title')}
                                    </h4>
                                    <p className='text-lg text-gray-700 max-w-4xl mx-auto mb-8'>
                                        {t('businessSolutions.comprehensive.description')}
                                    </p>
                                    <a href='/prices' className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors'>
                                        {t('businessSolutions.comprehensive.ctaButton')}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className='mt-12 text-center'
                            >
                                <a href='#lead-form' className='inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg'>
                                    {t('reviews.detailsSection.comprehensiveApproach.discussButton')}
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Reviews;