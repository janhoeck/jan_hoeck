import { TextWithHeadline } from '@/components/home/TextWithHeadline'
import { PropertyCard } from '@/components/shared/PropertyCard/PropertyCard'
import { useTranslations } from 'next-intl'
import React from 'react'

import { loadExposeConfigs } from '../../../api/loadExposeConfigs'

export const ExposeListSection = () => {
  const t = useTranslations('pages.home.exposes')
  const exposes = loadExposeConfigs()

  return (
    <section
      id='expose-list-section'
      className='py-16 md:py-24'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <TextWithHeadline
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-10'>
          {exposes.map((expose) => (
            <PropertyCard
              key={expose.id}
              expose={expose}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
