import { Footer } from '@/components/shared/Footer/Footer'
import { Analytics } from '@vercel/analytics/next'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { arimoFont, sourceSansPro } from './fonts'
import './index.css'

type LayoutProps = {
  children: React.ReactNode
}

export default async function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <html>
      <body className={twMerge(sourceSansPro.variable, arimoFont.className)}>
        <div className='flex flex-col min-h-screen'>
          <main className='container mx-auto px-4 mt-8 mb-16 flex-1'>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
