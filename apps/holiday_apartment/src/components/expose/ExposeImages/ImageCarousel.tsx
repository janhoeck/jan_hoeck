'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia'
import { ExposeConfiguration } from '../types'
import { twMerge } from 'tailwind-merge'

export type ImageCarouselProps = {
  imageSources: ExposeConfiguration['imageSources']
  imageClassName?: string
}

export const ImageCarousel = (props: ImageCarouselProps) => {
  const { imageSources, imageClassName } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  })

  useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => {
      if (!emblaApi) {
        return
      }

      if (event.code === 'ArrowLeft') {
        emblaApi.scrollPrev()
      } else if (event.code === 'ArrowRight') {
        emblaApi.scrollNext()
      }
    }

    document.addEventListener('keydown', handleKeyDownEvent, true)
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent)
    }
  })

  return (
    <div className='embla relative h-full overflow-hidden'>
      <div
        className='embla__viewport h-full'
        ref={emblaRef}
      >
        <div className='embla__container flex h-full'>
          {imageSources.map((imageSrc, index) => (
            <div
              key={index}
              className='embla__slide relative flex-[0_0_100%]'
            >
              <div
                className='absolute h-full w-full blur-lg'
                style={{
                  backgroundImage: `url("${imageSrc}")`,
                }}
              />
              <Image
                fill
                priority
                quality={80}
                src={imageSrc}
                alt='Image'
                sizes='(max-width: 40rem) 100vw, (max-width: 96rem) 90vw, auto'
                className={twMerge('embla__slide__img object-cove saturate-150r', imageClassName)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-4'>
        <button
          className='embla__prev cursor-pointer rounded-full bg-white p-2 text-slate-800 shadow-md'
          onClick={() => emblaApi?.scrollPrev()}
        >
          <LiaAngleLeftSolid size={20} />
        </button>
        <button
          className='embla__next cursor-pointer rounded-full bg-white p-2 text-slate-800 shadow-md'
          onClick={() => emblaApi?.scrollNext()}
        >
          <LiaAngleRightSolid size={20} />
        </button>
      </div>
    </div>
  )
}
