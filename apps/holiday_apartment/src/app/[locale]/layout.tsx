import './index.css'

import React from 'react'
import { Geist } from 'next/font/google'

import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '../../i18n/routing'
import { notFound } from 'next/navigation'

import { LayoutNavigation } from './components/LayoutNavigation'
import { Footer } from '../../components/Footer/Footer'
import { siteMetadata } from './metadata'

const geist = Geist({
  subsets: ['latin'],
})

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: '%s | Costa Calida Ferienwohnungen',
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteMetadata.structuredData),
          }}
        />
        <NextIntlClientProvider>
          <LayoutNavigation />
          <main className='min-h-[calc(100%-73px-105px)]'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
