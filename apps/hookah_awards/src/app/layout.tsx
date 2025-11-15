import { Footer } from '@/components/shared/Footer/Footer'
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
        <main className='container mx-auto px-4 mt-8 mb-16'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
