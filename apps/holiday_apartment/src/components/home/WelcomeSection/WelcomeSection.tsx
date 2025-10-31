import React from 'react'
import { useTranslations } from 'next-intl'
import { RichText } from '@/components/shared/RichText/RichText'

export const WelcomeSection = () => {
  const t = useTranslations('pages.home')
  return (
    <div className='flex flex-col gap-4'>
      <RichText text={t.raw('description')} />
    </div>
  )
}
