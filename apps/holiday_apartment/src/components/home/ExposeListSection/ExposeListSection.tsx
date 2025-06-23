import { ExposeCard } from './ExposeCard'
import { Section } from '@/components/shared/Section/Section'
import React from 'react'
import { useTranslations } from 'next-intl'

export const ExposeListSection = () => {
  const t = useTranslations('pages.home.exposeListSection')
  return (
    <Section headline={t('headline')}>
      <div className='flex flex-wrap gap-4 sm:flex-nowrap'>
        <ExposeCard
          to='/expose/apartment'
          headline={t('apartment.headline')}
          description={t('apartment.description')}
          imageSrc='/images/apartment/IMG_9807.webp'
        />
      </div>
    </Section>
  )
}
