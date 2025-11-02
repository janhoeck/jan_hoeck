import Image from 'next/image'
import React from 'react'

import { WelcomeSectionInfo } from './WelcomeSectionInfo'

export const WelcomeSection = () => {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden pt-16 md:pt-20'>
      <div className='absolute inset-0 z-0'>
        <Image
          fill
          priority
          src='/images/costacalida.png'
          alt='Costa calida - murcia'
          className='h-full w-full object-cover'
          sizes='100vw'
        />
        <div className='to-muted absolute inset-0 bg-gradient-to-b from-black/40 via-black/20' />
      </div>
      <WelcomeSectionInfo />
    </section>
  )
}
