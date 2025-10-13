'use client';

import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';
import './Prices.css';
import SectionHeader from './components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

function Prices() {
	const [isVisible, setIsVisible] = useState(false);
	const [activePriceCategory, setActivePriceCategory] = useState('bots');
	const ref = useRef(null);
	const { t, language } = useTranslation();

	const PRICE_PLANS = [
		{
			title: t('prices.plans.0.title'),
			description: t('prices.plans.0.description'),
			price: t('prices.plans.0.price'),
			orderLink: 'https://t.me/nowayrm',
			features: t('prices.plans.0.features'),
		},
		{
			title: t('prices.plans.1.title'),
			description: t('prices.plans.1.description'),
			price: t('prices.plans.1.price'),
			orderLink: 'https://t.me/nowayrm',
			features: t('prices.plans.1.features'),
		},
		{
			title: t('prices.plans.2.title'),
			description: t('prices.plans.2.description'),
			price: t('prices.plans.2.price'),
			orderLink: 'https://t.me/nowayrm',
			features: t('prices.plans.2.features'),
		},
	];

	// Чат-боти тарифи
	const CHATBOT_PLANS = language === 'uk' ? [
		{
			title: 'Lite',
			description: 'Для малого бізнесу: автоматизуйте відповіді на популярні запитання та оптимізуйте час',
			price: '1000₴',
			originalPrice: '1500₴',
			features: [
				'Розробка бота під ваші потреби',
				'Одне оновлення протягом місяця',
				'24/7 моніторинг сервера',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Standart',
			description: 'Оптимальний вибір для середнього бізнесу з розширеним функціоналом',
			price: '3000₴',
			originalPrice: '4000₴',
			features: [
				'Розробка індивідуального сценарію',
				'Форма для отримання заявок',
				'Функція зв\'язку з менеджером',
				'Три оновлення протягом місяця',
				'24/7 моніторинг сервера',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Premium',
			description: 'Комплексне рішення для великого бізнесу з повною інтеграцією',
			price: '6000₴',
			originalPrice: '8000₴',
			features: [
				'Розробка складного сценарію',
				'Інтеграція з базами даних',
				'Функція зворотнього зв\'язку',
				'Форма заявок для клієнтів',
				'Три оновлення протягом двох місяців',
				'Моніторинг сервера 24/7',
			],
			orderLink: 'https://t.me/nowayrm',
		}
	] : [
		{
			title: 'Lite',
			description: 'For small businesses: automate responses to popular questions and optimize time',
			price: '$35',
			originalPrice: '$50',
			features: [
				'Bot development tailored to your needs',
				'One update during the month',
				'24/7 server monitoring',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Standard',
			description: 'The optimal choice for medium-sized businesses with extended functionality',
			price: '$90',
			originalPrice: '$120',
			features: [
				'Development of individual scenario',
				'Form for receiving applications',
				'Function to connect with a manager',
				'Three updates during the month',
				'24/7 server monitoring',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Premium',
			description: 'Comprehensive solution for large businesses with full integration',
			price: '$180',
			originalPrice: '$250',
			features: [
				'Development of complex scenario',
				'Integration with databases',
				'Feedback function',
				'Application form for clients',
				'Three updates within two months',
				'Server monitoring 24/7',
			],
			orderLink: 'https://t.me/nowayrm',
		}
	];

	// Веб-сайти тарифи
	const WEBSITE_PLANS = language === 'uk' ? [
		{
			title: 'Landing Page',
			description: 'Ідеальне рішення для презентації продукту чи послуги',
			price: '4000₴',
			originalPrice: '10000₴',
			features: [
				'Унікальний дизайн',
				'Адаптивна верстка',
				'SEO-оптимізація',
				'Форма зворотного зв\'язку',
				'SSL-сертифікат',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Корпоративний сайт',
			description: 'Повноцінний сайт для вашого бізнесу з усіма необхідними функціями',
			price: '10000₴',
			originalPrice: '18000₴',
			features: [
				'Індивідуальний дизайн',
				'До 10 сторінок',
				'Адаптивна верстка',
				'SEO-оптимізація',
				'Система управління контентом',
				'Інтеграція з CRM',
				'SSL-сертифікат',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Інтернет-магазин',
			description: 'Повноцінний онлайн-магазин з усіма необхідними функціями',
			price: '20000₴',
			originalPrice: '30000₴',
			features: [
				'Індивідуальний дизайн',
				'Каталог товарів',
				'Система управління замовленнями',
				'Інтеграція з платіжними системами',
				'Особистий кабінет',
				'SEO-оптимізація',
				'Інтеграція з CRM',
				'SSL-сертифікат',
			],
			orderLink: 'https://t.me/nowayrm',
		}
	] : [
		{
			title: 'Landing Page',
			description: 'The ideal solution for presenting a product or service',
			price: '$130',
			originalPrice: '$330',
			features: [
				'Unique design',
				'Responsive layout',
				'SEO optimization',
				'Contact form',
				'SSL certificate',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Corporate Website',
			description: 'A full-featured website for your business with all necessary functions',
			price: '$330',
			originalPrice: '$600',
			features: [
				'Custom design',
				'Up to 10 pages',
				'Responsive layout',
				'SEO optimization',
				'Content management system',
				'CRM integration',
				'SSL certificate',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'E-commerce',
			description: 'A full-fledged online store with all necessary functions',
			price: '$660',
			originalPrice: '$1000',
			features: [
				'Custom design',
				'Product catalog',
				'Order management system',
				'Payment systems integration',
				'Personal account',
				'SEO optimization',
				'CRM integration',
				'SSL certificate',
			],
			orderLink: 'https://t.me/nowayrm',
		}
	];

	// Парсери тарифи
	const PARSER_PLANS = language === 'uk' ? [
		{
			title: 'Базовий парсер',
			description: 'Ідеальне рішення для збору даних з одного джерела',
			price: '5000₴',
			originalPrice: '7000₴',
			features: [
				'Збір даних з одного сайту',
				'Базова обробка даних',
				'Експорт в CSV/Excel',
				'Базова підтримка',
				'Оновлення раз на місяць',
				'Хостинг на 6 місяців',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Професійний парсер',
			description: 'Оптимальне рішення для регулярного збору даних з декількох джерел',
			price: '12000₴',
			originalPrice: '15000₴',
			features: [
				'Збір даних з декількох сайтів',
				'Розширена обробка даних',
				'Експорт в різні формати',
				'API для доступу до даних',
				'Щотижневі оновлення',
				'Хостинг на 1 рік',
				'Технічна підтримка',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Корпоративний парсер',
			description: 'Комплексне рішення для великих проектів з розширеними можливостями',
			price: '25000₴',
			originalPrice: '30000₴',
			features: [
				'Необмежена кількість джерел',
				'Складна обробка даних',
				'Інтеграція з CRM/ERP',
				'Власний API',
				'Щоденні оновлення',
				'Хостинг на 2 роки',
				'Пріоритетна підтримка 24/7',
				'Індивідуальні доробки',
			],
			orderLink: 'https://t.me/nowayrm',
		}
	] : [
		{
			title: 'Basic Parser',
			description: 'The ideal solution for collecting data from a single source',
			price: '$170',
			originalPrice: '$230',
			features: [
				'Data collection from one site',
				'Basic data processing',
				'Export to CSV/Excel',
				'Basic support',
				'Monthly updates',
				'Hosting for 6 months',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Professional Parser',
			description: 'The optimal solution for regular data collection from multiple sources',
			price: '$400',
			originalPrice: '$500',
			features: [
				'Data collection from multiple sites',
				'Advanced data processing',
				'Export to various formats',
				'API for data access',
				'Weekly updates',
				'Hosting for 1 year',
				'Technical support',
			],
			orderLink: 'https://t.me/nowayrm',
		},
		{
			title: 'Enterprise Parser',
			description: 'A comprehensive solution for large projects with advanced capabilities',
			price: '$830',
			originalPrice: '$1000',
			features: [
				'Unlimited number of sources',
				'Complex data processing',
				'Integration with CRM/ERP',
				'Custom API',
				'Daily updates',
				'Hosting for 2 years',
				'Priority support 24/7',
				'Custom modifications',
			],
			orderLink: 'https://t.me/nowayrm',
		}
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.1,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	// Визначаємо, який масив планів показувати залежно від вибраної категорії
	const getActivePlans = () => {
		switch(activePriceCategory) {
			case 'bots':
				return CHATBOT_PLANS;
			case 'websites':
				return WEBSITE_PLANS;
			case 'parsers':
				return PARSER_PLANS;
			default:
				return CHATBOT_PLANS;
		}
	};

	return (
		<section className="prices-section" id="prices">
			<div className="prices-container">
				<SectionHeader
					title={t('prices.title')}
					description={t('prices.subtitle')}
				/>
				
				{/* Таби для переключення категорій */}
				<div className="price-tabs">
					<button 
						className={`price-tab ${activePriceCategory === 'bots' ? 'active' : ''}`} 
						onClick={() => setActivePriceCategory('bots')}
					>
						{language === 'uk' ? 'Чат-боти' : 'Chatbots'}
					</button>
					<button 
						className={`price-tab ${activePriceCategory === 'websites' ? 'active' : ''}`} 
						onClick={() => setActivePriceCategory('websites')}
					>
						{language === 'uk' ? 'Веб-сайти' : 'Websites'}
					</button>
					<button 
						className={`price-tab ${activePriceCategory === 'parsers' ? 'active' : ''}`} 
						onClick={() => setActivePriceCategory('parsers')}
					>
						{language === 'uk' ? 'Парсери' : 'Parsers'}
					</button>
				</div>
				
				<div
					ref={ref}
					className={`prices-grid ${isVisible ? 'visible' : ''}`}
				>
					{getActivePlans().map((plan, index) => (
						<div className={`price-card ${index === 1 ? 'featured' : ''}`} key={index}>
							<div className="price-card-content">
								<h3>{plan.title}</h3>
								<p className="description">{plan.description}</p>
								<div className="price-container">
									{plan.originalPrice && <span className="original-price">{plan.originalPrice}</span>}
									<div className="price">{plan.price}</div>
								</div>
								
								<a href={plan.orderLink} target="_blank" rel="noopener noreferrer">
									<button className="order-button">
										{t('prices.orderButton')}
									</button>
								</a>

								<div className="features">
									<ul>
										{plan.features.map((feature, idx) => (
											<li key={idx}>
												<span className="check">✓</span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Prices;
