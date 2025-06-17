'use client'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { Typography, useResizeObserver } from '@jan_hoeck/ui'
import { Link } from '../../i18n/navigation'
import { useRef } from 'react'

export type EstateCardProps = {
  imageAlignment?: 'left' | 'right'
  description: string
  headline: string
  imageSrc: string
  to: string
}

export const EstateCard = (props: EstateCardProps) => {
  const { description, headline, imageSrc = 'left', to } = props
  const contentRef = useRef<HTMLDivElement>(null)

  const { height = 40 } = useResizeObserver<HTMLDivElement>({
    ref: contentRef,
    box: 'border-box',
  })

  return (
    <Link
      href={to}
      className={twMerge(['relative h-[350px] w-full', 'sm:w-[350px]'])}
      style={{ marginBottom: height / 2 }}
    >
      <Image
        fill
        src={imageSrc}
        alt='Estate'
        className='rounded-md object-cover shadow-md'
      />
      <div
        ref={contentRef}
        className='absolute left-1/2 w-[95%] -translate-x-1/2 rounded-md bg-white p-4 shadow-md'
        style={{
          bottom: `-${height / 2}px`,
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
