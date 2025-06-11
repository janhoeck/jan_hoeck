'use client'
import localFont from 'next/font/local'
import React from 'react'
import Snowfall from 'react-snowfall'
import { ItemsDatabaseContextProvider } from '../tools/context/ItemsDatabaseContext'
import { QuizContextProvider } from '../tools/context/QuizContext'
import { CalendarContextProvider } from '../tools/context/CalendarContext'

import './index.css'
import '@jan_hoeck/ui/styles.css'

const christmasFont = localFont({
  src: '../../public/fonts/Christmas.ttf',
  variable: '--christmas-font',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='de' className={christmasFont.className}>
      <body>
        <Snowfall snowflakeCount={70} />
        <CalendarContextProvider>
          <ItemsDatabaseContextProvider>
            <QuizContextProvider>{children}</QuizContextProvider>
          </ItemsDatabaseContextProvider>
        </CalendarContextProvider>
      </body>
    </html>
  )
}
