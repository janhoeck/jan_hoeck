'use client'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { Typography, useResizeObserver } from '@jan_hoeck/ui'
import { Link } from '../../../i18n/navigation'
import { useRef } from 'react'

export type EstateCardProps = {
  description: string
  headline: string
  imageSrc: string
  to: string
}

export const ExposeCard = (props: EstateCardProps) => {
  const { description, headline, imageSrc = 'left', to } = props
  const contentRef = useRef<HTMLDivElement>(null)

  const { height: descriptionHeight = 40 } = useResizeObserver<HTMLDivElement>({
    ref: contentRef,
    box: 'border-box',
  })
  // How many pixels the current box shadow spreads
  const boxShadowSpread = 9

  return (
    <Link
      href={to}
      className={twMerge(['relative w-full', 'sm:w-[350px]'])}
    >
      <div className='relative h-[350px] overflow-hidden rounded-md shadow-md'>
        <Image
          fill
          src={imageSrc}
          alt='Estate'
          className='object-cover'
          sizes='(max-width: 40rem) 90vw, 350px'
        />
      </div>
      <div style={{ height: descriptionHeight / 2 }} />
      <div
        ref={contentRef}
        className='absolute bottom-0 left-1/2 w-[95%] -translate-x-1/2 rounded-md bg-white p-4 shadow-md'
        style={{
          bottom: boxShadowSpread,
        }}
      >
        <Typography
          noWrap
          variant='smallText'
          className='mb-1 uppercase'
        >
          {description}
        </Typography>
        <Typography
          variant='heading'
          size={6}
        >
          {headline}
        </Typography>
      </div>
    </Link>
  )
}
