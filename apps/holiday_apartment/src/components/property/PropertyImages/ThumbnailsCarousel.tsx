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
      className='px-6 md:px-10'
    >
      <div className='flex gap-3'>
        {imageSources.map((src, i) => {
          const active = i === selectedIndex
          return (
            <button
              key={src}
              type='button'
              onClick={() => onThumbClick(i)}
              aria-label={`Bild ${i + 1} auswählen`}
              className={twMerge(
                'select-none relative flex-[0_0_90px] h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-300',
                'opacity-50',
                active && 'scale-110 opacity-100 shadow-xl'
              )}
            >
              <Image
                fill
                src={src}
                alt={`Vorschau ${i + 1}`}
                loading='lazy'
                sizes='90px'
                className='object-cover transition-transform duration-300 hover:scale-105'
                quality={60}
              />

              {/* Overlay für besseren aktiven Zustand */}
              <div
                className={twMerge(
                  'absolute inset-0 bg-black/20 transition-opacity duration-300',
                  active && 'bg-black/0'
                )}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
