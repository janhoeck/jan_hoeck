import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

export interface MeImageProps {
  className?: string
}

export const MeImage = (props: MeImageProps) => {
  const { className } = props

  return (
    <div className={twMerge(['relative h-60 w-60', 'md:h-72 md:w-72', className])}>
      <Image
        priority
        fill
        className='rounded-full border-4 border-solid border-indigo-100 z-10'
        src='/assets/me.jpg'
        alt='Jan Höck'
      />
    </div>
  )
}
