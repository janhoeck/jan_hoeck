import './index.css'

import React from 'react'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '../../i18n/routing'
import { notFound } from 'next/navigation'

import { LayoutNavigation } from '@components/shared/LayoutNavigation'
import { LayoutFooter } from '@components/shared/LayoutFooter'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'

const geist = Geist({
  subsets: ['latin'],
})

type Params = Promise<{ locale: string }>
type LayoutProps = {
  children: React.ReactNode
  params: Params
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: '/de',
        en: '/en',
        es: '/es',
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
  }
}

export default async function Layout(props: LayoutProps) {
  const { children, params } = props
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html
      lang={locale}
      className={geist.className}
    >
      <body className='bg-neutral-100'>
        <NextIntlClientProvider>
          <LayoutNavigation />
          <main className='min-h-[calc(100%-73px-105px)]'>{children}</main>
          <LayoutFooter />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
