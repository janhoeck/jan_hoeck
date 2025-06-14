import { Navigation } from '../../../components/Navigation/Navigation'
import React from 'react'
import { useTranslations } from 'next-intl'

export const LayoutNavigation = () => {
  const t = useTranslations('components.navigation')
  return (
    <Navigation
      configuration={[
        {
          href: '/',
          label: t('home'),
        },
        {
          href: '/aboutus',
          label: t('about_us'),
        },
        {
          href: '/apartment',
          label: t('apartment'),
        },
        {
          href: '/house',
          label: t('house'),
        },
        {
          href: '/contact',
          label: t('contact'),
        },
      ]}
    />
  )
}
