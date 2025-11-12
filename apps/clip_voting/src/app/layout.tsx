import localFont from 'next/font/local'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import './index.css'

const maragsaFont = localFont({
  src: '../../public/fonts/maragsa-display.otf',
  variable: '--font-maragsa',
})

const arimoFont = localFont({
  src: [
    {
      path: '../../public/fonts/arimo/Arimo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arimo/Arimo-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/arimo/Arimo-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-arimo',
})

type LayoutProps = {
  children: React.ReactNode
}

export default async function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <html>
      <body className={twMerge(maragsaFont.variable, arimoFont.className)}>
        <main className='container mx-auto px-4 mt-8 mb-16'>{children}</main>
      </body>
    </html>
  )
}
