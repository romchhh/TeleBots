'use client'

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import ServiceHero from './ServiceHero';
import './Portfolio.css';
import { 
  FaRobot, 
  FaUtensils, 
  FaHeart, 
  FaCat, 
  FaShoppingCart, 
  FaChartLine, 
  FaBirthdayCake, 
  FaLeaf, 
  FaRocket, 
  FaGlobe, 
  FaBus, 
  FaCar, 
  FaGamepad, 
  FaGraduationCap, 
  FaCreditCard, 
  FaTruck, 
  FaStore, 
  FaMoneyBillWave,
  FaMobile,
  FaSearch,
  FaHome
} from 'react-icons/fa';

const ImageWithBlur = ({ src, alt, width, height, priority = false, className }) => (
	<Image
		src={src}
		alt={alt}
		width={width}
		height={height}
		quality={85}
		loading={priority ? "eager" : "lazy"}
		placeholder="blur"
		blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjoxKy46LiE1MTc5PUVFSktGRk5PS0ZPRUVFRf/2wBDAR"
		className={className}
	/>
);

function Portfolio() {
	const { ref: portfolioRef, inView: portfolioInView } = useInView({
		triggerOnce: false,
		threshold: 0.05,
		rootMargin: '0px 0px -50px 0px'
	});
	const { t } = useTranslation();
	const { language } = useLanguage();

	const [selectedCategory, setSelectedCategory] = useState('all');

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
		{ image: '/tripvibe.png', largeImage: '/tripvibe.png', caseId: 'tripvibe', category: 'websites' }
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
		{ title: "TripVibe — сучасне британське туристичне агентство", alt: "Повноцінна платформа для бронювання подорожей з підтримкою 24/7 та захистом ATOL & ABTA" }
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
	
	const works = projectsToUse.map((project, index) => {
		// Безпечний доступ до imageMap з перевіркою
		const imageData = imageMap[index];
		if (!imageData) {
			console.warn(`No image data found for project at index ${index}:`, project);
			return null;
		}
		return {
			title: project.title,
			alt: project.alt,
			image: imageData.image,
			largeImage: imageData.largeImage,
			caseId: imageData.caseId,
			category: imageData.category
		};
	}).filter(Boolean); // Видаляємо null значення
	
	console.log('Works array:', works);

	const filteredProjects = selectedCategory === 'all'
		? works
		: works.filter(work => work.category === selectedCategory);

	const getCaseUrl = (caseId) => {
		const baseUrl = language === 'uk' ? '' : `/${language}`;
		return `${baseUrl}/case/${caseId}`;
	};

	const getCaseIcon = (caseId) => {
		switch (caseId) {
			case 'dr-tolstikova-bot':
				return <FaChartLine className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'nieznany-piekarz':
				return <FaBirthdayCake className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'nutritionist-bot':
				return <FaLeaf className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'cats-fresh':
				return <FaCat className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'space-traffic':
				return <FaRocket className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'applum-bot':
				return <FaMobile className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'webinar-bot':
				return <FaGraduationCap className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'subscription-site':
				return <FaGlobe className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'samurai-sushi':
				return <FaUtensils className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'ukr-bus':
				return <FaBus className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'electromotors':
				return <FaCar className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'brandshop':
				return <FaStore className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'carsrent':
				return <FaShoppingCart className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'normalnoauto':
				return <FaCar className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'salenicedevice':
				return <FaSearch className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'kvartyrant':
				return <FaHome className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'flixmarket':
				return <FaLeaf className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'gtrading':
				return <FaTruck className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'easyplay':
				return <FaGamepad className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'cosmy':
				return <FaHeart className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'newlineschool':
				return <FaGraduationCap className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'xpaid':
				return <FaCreditCard className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'alexandraaleksiuk':
				return <FaHeart className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			case 'offer-dpuchkov':
				return <FaGraduationCap className="text-3xl sm:text-4xl md:text-6xl text-black" />;
			default:
				return <FaRobot className="text-3xl sm:text-4xl md:text-6xl text-black" />;
		}
	};

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<ServiceHero serviceType="portfolio" />
			
			<section 
				id='portfolio' 
				className='py-20 pt-24 md:pt-20 bg-white portfolio-container'
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

				<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 transition-all duration-1000 portfolio-grid ${
					portfolioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
					{filteredProjects.map((work, index) => (
						<Link
							key={index}
							href={getCaseUrl(work.caseId)}
							className='group relative overflow-hidden rounded-2xl border border-gray-200 transform transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-white block portfolio-card'
							style={{
								boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.boxShadow = '0 24px 48px rgba(0, 0, 0, 0.15)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
							}}
						>
							<div className='relative h-48 sm:h-64 md:h-72 lg:h-96 overflow-hidden portfolio-card-image'>
								<ImageWithBlur
									src={work.image}
									alt={work.alt}
									width={400}
									height={384}
									priority={index < 3}
									className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />
								<div className='absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500'>
									<div className="flex items-center gap-3">
										<span className='text-white font-semibold text-base uppercase tracking-wider'>
											{language === 'uk' ? 'Переглянути кейс' :
											 language === 'en' ? 'View Case' :
											 language === 'ru' ? 'Посмотреть кейс' :
											 'Zobacz przypadek'}
										</span>
										<svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</div>
								</div>
							</div>
							<div className='p-4 sm:p-6 md:p-8 portfolio-card-content'>
								<div className="flex items-center gap-3 mb-3">
									{getCaseIcon(work.caseId)}
									<h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900 line-clamp-2 leading-tight portfolio-card-title'>
										{work.title}
									</h3>
								</div>
								<p className="text-gray-600 text-sm sm:text-base line-clamp-2 mb-4 portfolio-card-description">
									{work.alt}
								</p>
								<div className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors">
									<span className="text-xs sm:text-sm font-medium">
										{language === 'uk' ? 'Читати далі' :
										 language === 'en' ? 'Read more' :
										 language === 'ru' ? 'Читать далее' :
										 'Czytaj więcej'}
									</span>
									<svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
		</div>
	);
}

export default React.memo(Portfolio);
