'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import Auction from './Auction';
import Button from './Button';
import LeadModal from '../components/LeadModal';
import { useTranslation } from '../hooks/useTranslation';

const AuctionImage = React.memo(({ src, alt, className, width, height }) => (
  <div className="auction-image-container group w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px]">
    <Image
      src={`/${src}`}
      alt={alt}
      width={width}
      height={height}
      className={`${className} transition-transform duration-300 group-hover:scale-110 w-full h-auto`}
      loading="lazy"
      quality={75}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  </div>
));

AuctionImage.displayName = 'AuctionImage';

function About() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id='about' className='min-h-screen about relative flex flex-col'>
        <div className='container flex-1 flex items-center'>
          <div className='w-full flex md:justify-end justify-center items-center'>
            <InView threshold={0.1} triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`2xl:max-w-[500px] md:max-w-[400px] w-full px-4 sm:px-6 md:px-0 flex flex-col gap-4 sm:gap-6 md:gap-7 text-base sm:text-lg z-40 py-10 xl:py-0 transition-opacity duration-1000 ${
                    inView ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
                >
                  <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'><br />{t('about.title')}</h2>
                  <p className='font-bold text-lg sm:text-xl'>
                    {t('about.subtitle')}
                  </p>
                  <p className='text-base sm:text-lg font-semibold'>
                    {t('about.services.title')}<br />
                    • {t('about.services.item1')}<br />
                    • {t('about.services.item2')}<br />
                    • {t('about.services.item3')}<br />
                    • {t('about.services.item4')}<br />
                    • {t('about.services.item5')}<br />
                    • {t('about.services.item6')}<br />
                  </p>
                  <p className='text-base sm:text-lg font-semibold'>
                    {t('about.philosophy')}
                  </p>
                  <p className='text-base sm:text-lg font-semibold'>
                    {t('about.availability')}
                  </p>

                  <div className='flex justify-center'>
                    <Button className='text-white' onClick={() => setIsModalOpen(true)}>
                      {t('about.contactButton')}
                    </Button>
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </section>

      {/* Окремий блок з партнерами */}
      <section className='w-full bg-white py-8 sm:py-10 md:py-12'>
        <InView threshold={0.1} triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`container px-4 sm:px-6 transition-opacity duration-1000 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className='text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8' style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>
                Наші партнери та клієнти
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center'>
                <AuctionImage src='adesa.png' alt='Adesa автоаукціон - партнер TeleBots' width={140} height={60} />
                <AuctionImage src='iaai.png' alt='IAAI Insurance Auto Auctions - партнер TeleBots' width={140} height={60} />
                <AuctionImage src='carsrent.jpg' alt='CarsRent автопрокат - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='copart.png' alt='Copart автоаукціон - партнер TeleBots' width={140} height={60} />
                <AuctionImage src='partners.png' alt='Партнери TeleBots - успішні проєкти' width={140} height={60} />
                <AuctionImage src='cosmy.jpg' alt='Cosmy косметика - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='brandshop.jpg' alt='BrandShop інтернет-магазин - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='easyplay.jpg' alt='EasyPlay ігрова платформа - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='electromotors.jpg' alt='ElectroMotors електродвигуни - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='newlineschool.jpg' alt='NewLine School навчання - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='flix.jpg' alt='Flix стрімінг сервіс - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='spacetraffic.jpg' alt='SpaceTraffic трафік арбітраж - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='xpaid.png' alt='XPaid платіжна система - партнер TeleBots' width={140} height={60} />
                <AuctionImage src='carmax.png' alt='CarMax автодилер - партнер TeleBots' width={140} height={60} />
                <AuctionImage src='tatra.jpg' alt='Tatra вантажівки - клієнт TeleBots' width={140} height={60} />
                <AuctionImage src='telespy.jpg' alt='TeleSpy моніторинг - клієнт TeleBots' width={140} height={60} />
              </div>
            </div>
          )}
        </InView>
      </section>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default React.memo(About);
