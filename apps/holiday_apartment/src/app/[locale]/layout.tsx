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

type MetadataProps = {
  params: Params
}

type LayoutProps = {
  children: React.ReactNode
  params: Params
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      // Primary geographic keywords
      'Urlaub Murcia',
      'Costa Cálida Urlaub',
      'Ferienwohnung Murcia',
      'Ferienhaus Costa Cálida',
      'Spanien Urlaub',
      'Costa Cálida',

      // Accommodation keywords
      'Ferienwohnung Spanien',
      'Ferienhaus Murcia',
      'Urlaubsunterkunft Costa Cálida',
      'Ferienwohnung mieten Murcia',
      'Ferienhaus mieten Spanien',

      // Experience keywords
      'Mediterrane Ferien',
      'Strandurlaub Spanien',
      'Sonniger Urlaub',
      'Erholungsurlaub Spanien',
      'Aktivurlaub Murcia',

      // Long-tail keywords
      'geschmackvoll eingerichtete Ferienwohnung',
      'unvergesslicher Urlaub Costa Cálida',
      'mediterrane Lebensgefühl genießen',
      'Urlaubsträume wahr werden',
      'zweites Zuhause spanische Sonne',

      // Seasonal keywords
      'Sommerurlaub Murcia',
      'Winterurlaub Costa Cálida',
      'Familienurlaub Spanien',
      'Strand und Sport Urlaub',
      'Kulinarik Urlaub Spanien',

      // Specific activities
      'Strandurlaub Costa Cálida',
      'Sporturlaub Murcia',
      'Entspannungsurlaub Spanien',
      'Golfurlaub Costa Cálida',

      // Local terms
      'Costa Cálida',
      'Murcia',
      'Región de Murcia',
      'Spanien',
      'Mittelmeer',

      // Booking keywords
      'Ferienwohnung buchen Murcia',
      'Ferienhaus reservieren Costa Cálida',
      'Urlaubsunterkunft online buchen',
      'Ferienwohnung direkt buchen',
    ],
    alternates: {
      canonical: `https://solymarmenor.com/${locale}`,
      languages: routing.locales.reduce((acc, lang) => ({ ...acc, [lang]: `https://solymarmenor.com/${lang}` }), {}),
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
