'use client'

import { DesktopOnly } from '@/components/shared/Responsive/DesktopOnly'
import { PropertyConfiguration } from '@/types/PropertyConfiguration'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

import { ThumbnailsCarousel } from './ThumbnailsCarousel'

export type ExposeImagesProps = {
  imageSources: PropertyConfiguration['imageSources']
}

export const PropertyImages = ({ imageSources }: ExposeImagesProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  })

  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbsApi) {
      return
    }

    const index = emblaApi.selectedScrollSnap()
    setSelectedIndex(index)
    thumbsApi.scrollTo(index)
  }, [emblaApi, thumbsApi])

  const onThumbClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    onSelect()
    emblaApi.on('select', onSelect).on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect).off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!emblaApi) {
        return
      }

      if (e.key === 'ArrowLeft') {
        emblaApi.scrollPrev()
      }

      if (e.key === 'ArrowRight') {
        emblaApi.scrollNext()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [emblaApi])

  return (
    <div className='relative w-screen h-[70vh]'>
      <div
        ref={emblaRef}
        className='overflow-hidden h-full'
      >
        <div className='flex h-full'>
          {imageSources.map((src, i) => (
            <div
              key={src}
              className='relative flex-[0_0_100vw] h-full min-w-0 select-none'
            >
              <div
                className='absolute inset-0 blur-lg bg-cover bg-center scale-110'
                style={{ backgroundImage: `url("${src}")` }}
              />
              <Image
                fill
                priority={i === 0}
                alt={`Bild ${i + 1}`}
                src={src}
                sizes='100vw'
                className='object-contain z-10'
              />
            </div>
          ))}
        </div>
      </div>

      <DesktopOnly>
        <div className='absolute bottom-10 left-0 right-0'>
          <ThumbnailsCarousel
            emblaRef={thumbsRef}
            selectedIndex={selectedIndex}
            imageSources={imageSources}
            onThumbClick={onThumbClick}
          />
        </div>
      </DesktopOnly>

      <div className='absolute left-4 top-4 rounded-lg bg-foreground text-muted px-4 py-2'>
        {selectedIndex + 1}/{imageSources.length}
      </div>
    </div>
  )
}
