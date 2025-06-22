import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { Typography } from '@jan_hoeck/ui'
import React from 'react'

export const WelcomeImage = () => {
  return (
    <div
      className={twMerge([
        'relative h-[200px] w-full',
        'sm:h-[270px] md:h-[350px] xl:h-[550px]',
        'after:absolute after:h-full after:w-full after:bg-neutral-700/20 after:content-[""]',
      ])}
    >
      <Image
        fill
        priority
        src='/images/costacalida.jpeg'
        alt='Costa calida - murcia'
        className='object-cover saturate-150'
        sizes='100vw'
      />
      <div className='z-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-700/70 p-2 text-center md:p-4'>
        <Typography
          variant='heading'
          size={1}
          className='text-center text-2xl uppercase tracking-wider text-white sm:text-3xl'
        >
          Urlaub in Murcia
        </Typography>
      </div>
    </div>
  )
}
