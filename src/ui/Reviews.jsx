'use client';

import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

function Reviews() {
    const { t } = useTranslation();
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
            </div>
        </section>
    );
}

export default Reviews;