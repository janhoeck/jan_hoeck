'use client'
import React from 'react'
import { ExposeConfiguration } from '../../types'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Dialog } from 'radix-ui'
import { ImageGalleryDialogContent } from './ImageGalleryDialogContent'

export type DesktopImageGridProps = {
  imageSources: ExposeConfiguration['imageSources']
}

export const DesktopImageGrid = (props: DesktopImageGridProps) => {
  const { imageSources } = props

  return (
    <Dialog.Root>
      <div
        className={twMerge([
          'grid gap-2 overflow-hidden rounded-xl',
          // responsive
          'grid-cols-[minmax(300px,500px)_auto] xl:grid-cols-[minmax(500px,750px)_auto]',
          'h-[450px] md:h-[650px]',
        ])}
      >
        <Dialog.Trigger asChild>
          <div className='relative'>
            <Image
              fill
              priority
              alt='Bild'
              src={imageSources[0]!}
              sizes='(max-width: 48rem) 300px, (max-width: 64rem) 450px, 750px'
              className='h-full w-full cursor-pointer object-cover saturate-150'
            />
          </div>
        </Dialog.Trigger>
        <div className='grid auto-rows-fr grid-cols-[repeat(2,minmax(150px,1fr))] gap-2'>
          {imageSources.slice(1, 5).map((imageSrc) => (
            <Dialog.Trigger
              asChild
              key={imageSrc}
            >
              <div className='relative'>
                <Image
                  fill
                  priority
                  alt='Bild'
                  src={imageSrc}
                  sizes='(max-width: 48rem) 150px, (max-width: 64rem) 254px, 385px'
                  className='h-full w-full cursor-pointer object-cover saturate-150'
                />
              </div>
            </Dialog.Trigger>
          ))}
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-20 bg-neutral-400/80' />
        <ImageGalleryDialogContent imageSources={imageSources} />
      </Dialog.Portal>
    </Dialog.Root>
  )
}
