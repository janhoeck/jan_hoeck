import { TextWithHeadline } from '@/components/home/TextWithHeadline'
import { useTranslations } from 'next-intl'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoSunnyOutline } from 'react-icons/io5'
import { LuMapPin } from 'react-icons/lu'
import { MdOutlineWaves } from 'react-icons/md'

import { InfoCard } from './InfoCard'

export const MainSection = () => {
  const t = useTranslations('pages.home.main')
  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <TextWithHeadline
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
          <InfoCard
            icon={IoSunnyOutline}
            title={t('info.sunnyDaysPerYear.title')}
            description={t('info.sunnyDaysPerYear.description')}
          />
          <InfoCard
            icon={MdOutlineWaves}
            title={t('info.marMenor.title')}
            description={t('info.marMenor.description')}
          />
          <InfoCard
            icon={LuMapPin}
            title={t('info.location.title')}
            description={t('info.location.description')}
          />
          <InfoCard
            icon={IoMdHeartEmpty}
            title={t('info.general.title')}
            description={t('info.general.description')}
          />
        </div>
        <div className='mt-12 rounded-2xl bg-white p-8 shadow-md md:mt-16 md:p-12'>
          <div className='grid gap-8 md:grid-cols-2 md:gap-12'>
            <div>
              <h3 className='text-foreground mb-4 text-2xl font-bold'>{t('locations.losAlcazares.title')}</h3>
              <p className='text-muted-foreground mb-4 leading-relaxed'>{t('locations.losAlcazares.description')}</p>
            </div>
            <div>
              <h3 className='text-foreground mb-4 text-2xl font-bold'>{t('locations.losUrrutias.title')}</h3>
              <p className='text-muted-foreground mb-4 leading-relaxed'>{t('locations.losUrrutias.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
