'use client'

import { PropertyConfiguration } from '@/types/PropertyConfiguration'
import { Button, DesktopOnly } from '@jan_hoeck/ui'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md'

import { ThumbnailsCarousel } from './ThumbnailsCarousel'

export type PropertyImagesProps = {
  imageSources: PropertyConfiguration['imageSources']
}

export const PropertyImages = ({ imageSources }: PropertyImagesProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    duration: 25,
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
    <div className='relative w-screen h-[70vh] bg-gradient-to-br from-muted/40 via-muted/20 to-muted/40'>
      <Button
        className='absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 shadow-lg transition-all duration-200 hover:scale-110'
        size='icon'
        onClick={() => emblaApi?.scrollPrev()}
        aria-label='Vorheriges Bild'
      >
        <MdOutlineChevronLeft size={24} />
      </Button>

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
              {Math.abs(i - selectedIndex) <= 1 && (
                <div
                  className='absolute inset-0 will-change-transform'
                  style={{
                    backgroundImage: `url("${src}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(40px) brightness(0.7)',
                    transform: 'scale(1.1)',
                  }}
                />
              )}

              <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 z-[5]' />

              <Image
                fill
                priority={i < 3}
                loading={i < 3 ? 'eager' : 'lazy'}
                alt={`Immobilienbild ${i + 1}`}
                src={src}
                sizes='100vw'
                className='object-contain z-10'
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>

      <Button
        className='absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 shadow-lg transition-all duration-200 hover:scale-110'
        size='icon'
        onClick={() => emblaApi?.scrollNext()}
        aria-label='Nächstes Bild'
      >
        <MdOutlineChevronRight size={24} />
      </Button>

      <DesktopOnly>
        <div className='absolute bottom-6 md:bottom-10 left-0 right-0 z-10'>
          <ThumbnailsCarousel
            emblaRef={thumbsRef}
            selectedIndex={selectedIndex}
            imageSources={imageSources}
            onThumbClick={onThumbClick}
          />
        </div>
      </DesktopOnly>

      <div className='absolute left-4 md:left-6 top-4 md:top-6 z-10 rounded-xl bg-primary text-primary-foreground px-4 py-2 font-medium shadow-lg'>
        {selectedIndex + 1} / {imageSources.length}
      </div>
    </div>
  )
}
