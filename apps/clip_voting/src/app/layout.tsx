'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

type LayoutProps = {
  children: React.ReactNode
}

export default async function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <html>
      <body className='bg-neutral-100'>
        <SessionProvider>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
