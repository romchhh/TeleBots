'use client';
import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import Button from './Button';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

function Socials() {
	const { t } = useTranslation();
	const { language } = useLanguage();
	const baseUrl = language === 'uk' ? '' : '/en';
	
	return (
		<section className='min-h-screen socials py-10'>
			<div className='z-100'>
				<h2 className='text-4xl font-bold text-black text-center'>
					{t('socials.title')}
				</h2>
				<p className='text-center text-black py-10 text-xl '>
					{t('socials.description')}
				</p>
				<div className='flex justify-center gap-10 flex-wrap'>
					<Link href='https://www.instagram.com/telebotsnowayrm' target="_blank" rel="noopener noreferrer">
						<Button className='text-white'>
							<FaInstagram size={24} />
						</Button>
					</Link>
					<Link href='https://t.me/TeleBotsNowayrmChannel' target="_blank" rel="noopener noreferrer">
						<Button className='text-white bg-[#24A1DE] hover:bg-blue-400'>
							<FaTelegram size={24} />
						</Button>
					</Link>
				</div>
				<div className='flex justify-center gap-10 mt-10 flex-wrap'>
					<article className='overflow-hidden rounded-xl inline-block'>
						<img src='inst.jpg' alt='instagram' className='max-h-[500px]' />
					</article>
					<article className='overflow-hidden rounded-xl inline-block'>
						<img src='tg.jpg' alt='telegram' className='max-h-[500px]' />
					</article>
				</div>
				<div className='flex justify-center mt-10'>
					<Link href={`${baseUrl}/blog`} target="_blank" rel="noopener noreferrer">
						<Button className='text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded'>
							{t('socials.blogButton')}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Socials;
