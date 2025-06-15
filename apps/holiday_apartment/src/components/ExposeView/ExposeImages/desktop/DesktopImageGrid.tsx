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
          'grid grid-cols-[minmax(400px,750px)_auto] gap-2 overflow-hidden rounded-xl',
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
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
              className='h-full w-full cursor-pointer object-cover'
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
                  sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
                  className='h-full w-full cursor-pointer object-cover'
                />
              </div>
            </Dialog.Trigger>
          ))}
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className='z-2 fixed inset-0 bg-neutral-400/80' />
        <ImageGalleryDialogContent imageSources={imageSources} />
      </Dialog.Portal>
    </Dialog.Root>
  )
}
