import { PropertyConfiguration } from '@/types/PropertyConfiguration'
import { EmblaViewportRefType } from 'embla-carousel-react'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export type ThumbnailsCarouselProps = {
  emblaRef: EmblaViewportRefType
  selectedIndex: number
  imageSources: PropertyConfiguration['imageSources']
  onThumbClick: (index: number) => void
}

export const ThumbnailsCarousel = (props: ThumbnailsCarouselProps) => {
  const { emblaRef, selectedIndex, imageSources, onThumbClick } = props
  return (
    <div
      ref={emblaRef}
      className='px-10'
    >
      <div className='flex gap-2'>
        {imageSources.map((src, i) => {
          const active = i === selectedIndex
          return (
            <div
              key={src}
              onClick={() => onThumbClick(i)}
              aria-label={`Bild ${i + 1} auswählen`}
              className={twMerge(
                'select-none relative flex-[0_0_80px] h-15 rounded-lg overflow-hidden cursor-pointer transition-all opacity-80 hover:opacity-100',
                active && 'scale-110 opacity-100'
              )}
            >
              <Image
                fill
                src={src}
                alt={`Vorschau ${i + 1}`}
                loading='lazy'
                sizes='(max-width: 1024px) 60px, 80px'
                className='object-fill'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
