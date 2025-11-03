'use client'

import React from 'react';
import Portfolio from '../../ui/Portfolio';
import { useLanguage } from '../../context/LanguageContext';

export default function PortfolioPage() {
	const { language } = useLanguage();

	return (
		<main className="min-h-screen">
			<Portfolio isStandalonePage={true} />
		</main>
	);
}
