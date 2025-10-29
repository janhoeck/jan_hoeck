import { ExposeCard } from './ExposeCard'
import { Section } from '@/components/shared/Section/Section'
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { loadExposeConfigs } from '../../../api/loadExposeConfigs'
import { getTranslation } from '@/components/expose/utils'

export const ExposeListSection = () => {
  const t = useTranslations('pages.home.exposeListSection')
  const locale = useLocale()
  const exposes = loadExposeConfigs()

  return (
    <Section headline={t('headline')}>
      <div className='flex flex-wrap gap-4 sm:flex-nowrap'>
        {exposes.map((expose) => (
          <ExposeCard
            key={expose.id}
            to={`/expose/${expose.id}`}
            headline={getTranslation(locale, expose.headline)}
            description={getTranslation(locale, expose.subHeadline)}
            imageSrc={`/images/${expose.id}/coverPhoto.webp`}
          />
        ))}
      </div>
    </Section>
  )
}
