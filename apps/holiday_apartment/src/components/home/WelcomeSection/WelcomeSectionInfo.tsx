import { Badge, Button } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { GoChevronRight } from 'react-icons/go'

import { InfoCard } from './InfoCard'

export const WelcomeSectionInfo = () => {
  const t = useTranslations('pages.home.welcome')
  return (
    <div className='relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8'>
      <div className='animate-fade-in mx-auto max-w-4xl space-y-6 md:space-y-8'>
        <Badge>{t('location')}</Badge>
        <h1 className='font-serif text-4xl leading-tight font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl'>
          {t('title')}
        </h1>
        <p className='mx-auto max-w-2xl text-lg font-light text-white/95 drop-shadow-md sm:text-xl md:text-2xl'>
          {t('subtitle')}
        </p>
        <div className='flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row'>
          <Button
            asChild
            className='transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-md'
          >
            <Link href='#property-list-section'>
              {t('discoverAccommodationButtonLabel')}
              <GoChevronRight size={24} />
            </Link>
          </Button>
        </div>
        <div className='grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3 md:gap-8 md:pt-12'>
          <InfoCard
            title={320}
            description={t('generalInfo.sunnyDaysPerYear')}
          />
          <InfoCard
            title={2}
            description={t('generalInfo.charmingCoastalTowns')}
          />
          <InfoCard
            title='20°C'
            description={t('generalInfo.averageTemperature')}
          />
        </div>
      </div>
    </div>
  )
}
