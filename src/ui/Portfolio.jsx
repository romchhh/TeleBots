'use client'

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import ServiceHero from './ServiceHero';
import './Portfolio.css';
// Icons видалено - тепер не використовуються

const ImageWithBlur = ({ src, alt, width, height, priority = false, className }) => (
	<Image
		src={src}
		alt={alt}
		width={width}
		height={height}
		quality={75}
		loading={priority ? "eager" : "lazy"}
		placeholder="blur"
		blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjoxKy46LiE1MTc5PUVFSktGRk5PS0ZPRUVFRf/2wBDAR"
		className={className}
	/>
);

function Portfolio({ isStandalonePage = false }) {
	const { ref: portfolioRef, inView: portfolioInView } = useInView({
		triggerOnce: false,
		threshold: 0.05,
		rootMargin: '0px 0px -50px 0px'
	});
	const { t } = useTranslation();
	const { language } = useLanguage();

	const [selectedCategory, setSelectedCategory] = useState('all');
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxImage, setLightboxImage] = useState(null);
	const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);

	// Відстежуємо розмір вікна для адаптивних span
	useEffect(() => {
		if (typeof window === 'undefined') return;
		
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Встановлюємо початкове значення

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Закриття lightbox клавішею ESC
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && lightboxOpen) {
				setLightboxOpen(false);
			}
		};
		
		if (lightboxOpen) {
			document.addEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'hidden'; // Блокуємо прокрутку
		} else {
			document.body.style.overflow = 'unset';
		}
		
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'unset';
		};
	}, [lightboxOpen]);

  const imageMap = [
    { image: '/dr-tolstikova-bot.jpg', largeImage: '/dr-tolstikova-bot.jpg', caseId: 'dr-tolstikova-bot', category: 'chatbots' },
    { image: '/Group 1000007023.png', largeImage: '/Group 1000007023.png', caseId: 'nieznany-piekarz', category: 'websites' },
		{ image: '/nutritionist-bot.jpg', largeImage: '/nutritionist-bot.jpg', caseId: 'nutritionist-bot', category: 'chatbots' },
		{ image: '/cats-fresh-project.jpg', largeImage: '/cats-fresh-project.jpg', caseId: 'cats-fresh', category: 'websites' },
		{ image: '/port11.png', largeImage: '/port1.png', caseId: 'space-traffic', category: 'chatbots' },
		{ image: '/IMAGE 2025-10-04 03:26:23.jpg', largeImage: '/IMAGE 2025-10-04 03:26:23.jpg', caseId: 'applum-bot', category: 'chatbots' },
		{ image: '/port1212.png', largeImage: '/port121212.jpg', caseId: 'easyplay', category: 'websites' },
		{ image: '/port22.png', largeImage: '/port2.png', caseId: 'samurai-sushi', category: 'chatbots' },
		{ image: '/port33.png', largeImage: '/port3.png', caseId: 'ukr-bus', category: 'chatbots' },
		{ image: '/port44.png', largeImage: '/port4.png', caseId: 'webinar-bot', category: 'chatbots' },
		{ image: '/port55.png', largeImage: '/port5.png', caseId: 'electromotors', category: 'chatbots' },
		{ image: '/port66.png', largeImage: '/port6.png', caseId: 'carsrent', category: 'chatbots' },
		{ image: '/port77.png', largeImage: '/port7.png', caseId: 'normalnoauto', category: 'chatbots' },
		{ image: '/port88.png', largeImage: '/port8.png', caseId: 'salenicedevice', category: 'chatbots' },
		{ image: '/port99.png', largeImage: '/port9.png', caseId: 'kvartyrant', category: 'chatbots' },
		{ image: '/port1010.png', largeImage: '/port10.png', caseId: 'cosmy', category: 'chatbots' },
		
		{ image: '/IMAGE 2025-10-04 04:24:06.jpg', largeImage: '/IMAGE 2025-10-04 04:24:06.jpg', caseId: 'newlineschool', category: 'websites' },
		{ image: '/IMAGE 2025-10-04 03:34:02.jpg', largeImage: '/IMAGE 2025-10-04 03:34:02.jpg', caseId: 'flixmarket', category: 'chatbots' },
		{ image: '/IMAGE 2025-10-04 04:56:05.jpg', largeImage: '/IMAGE 2025-10-04 04:56:05.jpg', caseId: 'alexandraaleksiuk', category: 'websites' },
		{ image: '/IMAGE 2025-10-04 04:56:47.jpg', largeImage: '/IMAGE 2025-10-04 04:56:47.jpg', caseId: 'offer-dpuchkov', category: 'websites' },
		{ image: '/vsk-technology.png', largeImage: '/vsk-technology.png', caseId: 'vsk-technology', category: 'websites' },
		{ image: '/v12-auto.png', largeImage: '/v12-auto.png', caseId: 'v12-auto', category: 'websites' },
		{ image: '/tripvibe.png', largeImage: '/tripvibe.png', caseId: 'tripvibe', category: 'websites' },
		{ image: '/IMAGE 2025-10-13 22:39:19.jpg', largeImage: '/IMAGE 2025-10-13 22:39:19.jpg', caseId: 'tron-energy-bot', category: 'chatbots' },
		{ image: '/Знімок екрана 2025-11-03 о 01.49.01.png', largeImage: '/Знімок екрана 2025-11-03 о 01.49.01.png', caseId: 'chars-kyiv', category: 'websites' },
		{ image: '/IMAGE 2025-11-03 02:12:02.jpg', largeImage: '/IMAGE 2025-11-03 02:12:02.jpg', caseId: 'style-chat-vakhula', category: 'chatbots' }
	];

	// Створюємо масив робіт з перекладами
	const projects = t('portfolio.projects', { returnObjects: true });
	
	// Fallback дані на випадок, якщо переклади не завантажилися
	const fallbackProjects = [
		{ title: "Бот для доступу до закритого комюніті", alt: "Повна автоматизація бізнес-процесів для Dr. Толстікової" },
		{ title: "Nieznany Piekarz — запис на майстер-класи легко та красиво", alt: "Платформа для бронювання майстер-класів з кондитерства" },
		{ title: "NutriciologBot - персональний нутриціолог у Telegram", alt: "Телеграм бот нутриціолога для персональних консультацій" },
		{ title: "Cats Fresh: Сайт + Telegram-бот — повний цикл продажу", alt: "Комплексне рішення сайт та телеграм бот для продажу товарів для котів" },
		{ title: "Телеграм бот для арбітражної команди Space Traffic", alt: "Зображення телеграм боту для арбітражу трафіка" },
		{ title: "ApplumBot - автоматизація Apple-сервісу", alt: "Повна автоматизація бізнесу з заміною 3-х співробітників" },
		{ title: "EasyPlay — сайт для продажу підписок на сервіси", alt: "Платформа для продажу підписок на різні онлайн-сервіси" },
		{ title: "Samurai Sushi — сайт для замовлення суші", alt: "Сучасний сайт для замовлення японської кухні" },
		{ title: "Ukr-Bus — платформа для продажу автобусних квитків", alt: "Система бронювання та продажу автобусних квитків" },
		{ title: "Webinar Bot — автоматизація вебінарів", alt: "Телеграм бот для проведення та управління вебінарами" },
		{ title: "ElectroMotors — сайт для продажу електромобілів", alt: "Платформа для продажу та консультацій з електромобілями" },
		{ title: "CarsRent — сервіс оренди автомобілів", alt: "Онлайн-платформа для оренди автомобілів" },
		{ title: "NormalnoAuto — автосервіс", alt: "Сайт для автосервісу та ремонту автомобілів" },
		{ title: "SaleNiceDevice — продаж техніки", alt: "Інтернет-магазин електроніки та техніки" },
		{ title: "Квартирант — нерухомість", alt: "Платформа для пошуку та оренди нерухомості" },
		{ title: "Cosmy — косметичні товари", alt: "Інтернет-магазин косметики та товарів для краси" },
		{ title: "New Line School — освітня платформа", alt: "Онлайн-школа з сучасними методами навчання" },
		{ title: "FlixMarket — маркетплейс", alt: "Мультибрендовий маркетплейс товарів" },
		{ title: "Alexandra Aleksiuk — сайт психолога з онлайн-записом", alt: "Повноцінна система онлайн-запису і оплати для психолога з інтеграцією Google Календаря та Monobank" },
		{ title: "Offer Dpuchkov — продаючий сайт курсу", alt: "Повністю готовий до запуску трафіку сайт з Telegram-ботом та Google Таблицями для автоматизації заявок" },
		{ title: "VSK Technology — професійний ремонт побутової техніки", alt: "Сучасний веб-сайт для компанії з ремонту побутової техніки з онлайн-записом та інтеграцією з Google Maps" },
		{ title: "V12 Auto — імпорт автомобілів зі США", alt: "Повноцінна платформа для імпорту автомобілів зі США з повним циклом обслуговування від аукціону до видачі в МРЕО" },
		{ title: "TripVibe — сучасне британське туристичне агентство", alt: "Повноцінна платформа для бронювання подорожей з підтримкою 24/7 та захистом ATOL & ABTA" },
		{ title: "CHARS Kyiv — e-commerce платформа для чоловічого одягу", alt: "Розробили e-commerce платформу з каталогом, фільтрами, оплатою онлайн, доставкою через Нову Пошту, адмін-панеллю та Telegram-сповіщеннями про нові покупки" },
		{ title: "StyleChatBot — особистий асистент стиліста в Telegram", alt: "Бот для стиліста, який автоматизує першу консультацію: опитування клієнтів, показ портфоліо, персональні рекомендації та прийом заявок прямо в чаті" }
	];
	
	const projectsToUse = projects && projects.length > 0 ? projects : fallbackProjects;
	
	// Додаємо дебаг-інформацію
	console.log('Portfolio Debug:', {
		projects,
		projectsLength: projects?.length,
		imageMapLength: imageMap.length,
		language,
		portfolioInView,
		usingFallback: !projects || projects.length === 0
	});
	
	// Патерни розмірів для masonry grid (span колонок і рядків)
	const sizePatterns = [
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 2, rowSpan: 2 }, // великий квадрат
		{ colSpan: 2, rowSpan: 1 }, // широкий прямокутник
		{ colSpan: 1, rowSpan: 2 }, // високий прямокутник
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 2, rowSpan: 1 }, // широкий прямокутник
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 1, rowSpan: 2 }, // високий прямокутник
		{ colSpan: 2, rowSpan: 1 }, // широкий прямокутник
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 2, rowSpan: 2 }, // великий квадрат
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 2, rowSpan: 1 }, // широкий прямокутник
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 1, rowSpan: 2 }, // високий прямокутник
		{ colSpan: 2, rowSpan: 1 }, // широкий прямокутник
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 2, rowSpan: 2 }, // великий квадрат
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 2, rowSpan: 1 }, // широкий прямокутник
		{ colSpan: 1, rowSpan: 1 }, // маленький квадрат
		{ colSpan: 1, rowSpan: 2 }, // високий прямокутник
		{ colSpan: 2, rowSpan: 1 }, // широкий прямокутник
	];

	const works = projectsToUse.map((project, index) => {
		// Безпечний доступ до imageMap з перевіркою
    // Беріть зображення по колу, щоб не приховувати проєкти без imageMap
    const imageData = imageMap[index % imageMap.length] || {};
		const sizePattern = sizePatterns[index % sizePatterns.length];
        return {
			title: project.title,
			alt: project.alt,
            image: imageData.image || '/blog1.png',
            largeImage: imageData.largeImage || imageData.image || '/blog1.png',
            caseId: imageData.caseId || `project-${index+1}`,
            category: imageData.category || 'websites',
			colSpan: sizePattern.colSpan,
			rowSpan: sizePattern.rowSpan
		};
    });
	
	console.log('Works array:', works);

	const filteredProjects = selectedCategory === 'all'
		? works
		: works.filter(work => work.category === selectedCategory);

	const getCaseUrl = (caseId) => {
		const baseUrl = language === 'uk' ? '' : `/${language}`;
		return `${baseUrl}/case/${caseId}`;
	};

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<ServiceHero serviceType="portfolio" isStandalonePage={isStandalonePage} />
			
			<section 
				id='portfolio' 
			className='portfolio-container'
				ref={portfolioRef}
			>
				<div className='container'>

				{/* Фільтри категорій */}
				<div className="flex justify-center mb-12">
					<div className="flex bg-gray-100 rounded-full p-2 gap-2">
						<button
							onClick={() => setSelectedCategory('all')}
							className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
								selectedCategory === 'all'
									? 'bg-white text-gray-900 shadow-md'
									: 'text-gray-600 hover:text-gray-900'
							}`}
						>
							{language === 'uk' ? 'Всі проєкти' :
							 language === 'en' ? 'All Projects' :
							 language === 'ru' ? 'Все проекты' :
							 'Wszystkie projekty'}
						</button>
						<button
							onClick={() => setSelectedCategory('chatbots')}
							className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
								selectedCategory === 'chatbots'
									? 'bg-white text-gray-900 shadow-md'
									: 'text-gray-600 hover:text-gray-900'
							}`}
						>
							{language === 'uk' ? 'Чат-боти' :
							 language === 'en' ? 'Chatbots' :
							 language === 'ru' ? 'Чат-боты' :
							 'Chatboty'}
						</button>
						<button
							onClick={() => setSelectedCategory('websites')}
							className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
								selectedCategory === 'websites'
									? 'bg-white text-gray-900 shadow-md'
									: 'text-gray-600 hover:text-gray-900'
							}`}
						>
							{language === 'uk' ? 'Сайти' :
							 language === 'en' ? 'Websites' :
							 language === 'ru' ? 'Сайты' :
							 'Strony'}
						</button>
					</div>
				</div>

				<div 
					className={`portfolio-masonry-grid transition-all duration-1000 ${
						portfolioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					{filteredProjects.map((work, index) => {
						// Адаптуємо span залежно від ширини екрану
						let colSpan = work.colSpan || 1;
						let rowSpan = work.rowSpan || 1;
						
						// Адаптуємо span для різних розмірів екранів
                        if (windowWidth <= 480) {
                            // Дуже малі екрани: робимо охайну сітку 2хN, без вертикальних стрибків
                            colSpan = Math.min(colSpan, 2);
                            rowSpan = 1;
                        } else if (windowWidth <= 768) {
                            // Мобільні: 2 колонки, фіксована висота елементів
                            colSpan = Math.min(colSpan, 2);
                            rowSpan = 1;
                        } else if (windowWidth <= 1024) {
							// На планшетах (3 колонки) - обмежуємо colSpan до 3
							colSpan = Math.min(colSpan, 3);
						}
						// На десктопі (4 колонки) - залишаємо оригінальні значення
						
						return (
						<div
							key={index}
							className='portfolio-masonry-item group'
							style={{
								gridColumn: `span ${colSpan}`,
								gridRow: `span ${rowSpan}`
							}}
							onClick={(e) => {
								// Відкриваємо lightbox при кліку на фото
								if (!e.target.closest('.portfolio-masonry-overlay')) {
									setLightboxImage({ src: work.largeImage, alt: work.alt });
									setLightboxOpen(true);
								}
							}}
						>
							<div className='portfolio-masonry-image-wrapper'>
								<ImageWithBlur
									src={work.image}
									alt={work.alt}
									width={800}
									height={800}
									priority={index < 6}
									className="portfolio-masonry-image"
								/>
								{/* Overlay при hover */}
								<Link
									href={getCaseUrl(work.caseId)}
									className='portfolio-masonry-overlay'
									onClick={(e) => {
										// Дозволяємо перехід на сторінку кейсу
										e.stopPropagation();
									}}
								>
									<div className='portfolio-masonry-content'>
										<h3 className='portfolio-masonry-title'>
											{work.title}
										</h3>
										<p className='portfolio-masonry-description'>
											{work.alt}
										</p>
										<div className='portfolio-masonry-arrow'>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</div>
									</div>
								</Link>
							</div>
						</div>
						);
					})}
				</div>
			</div>
		</section>

		{/* Lightbox для перегляду фото у високій якості */}
		{lightboxOpen && lightboxImage && (
			<div 
				className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
				onClick={() => setLightboxOpen(false)}
			>
				<button
					onClick={() => setLightboxOpen(false)}
					className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
					aria-label="Close"
				>
					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
					<Image
						src={lightboxImage.src}
						alt={lightboxImage.alt}
						width={1920}
						height={1080}
						quality={95}
						className="object-contain w-full h-full lightbox-image"
						priority
					/>
				</div>
			</div>
		)}
		</div>
	);
}

export default React.memo(Portfolio);
