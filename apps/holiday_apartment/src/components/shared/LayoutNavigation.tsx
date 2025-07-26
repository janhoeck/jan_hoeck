import { Navigation } from './Navigation/Navigation'
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
          href: '/expose/apartment',
          label: t('apartment'),
        },
        {
          href: '/guestbook',
          label: t('guestbook'),
        },
        {
          href: '/contact',
          label: t('contact'),
        },
      ]}
    />
  )
}
