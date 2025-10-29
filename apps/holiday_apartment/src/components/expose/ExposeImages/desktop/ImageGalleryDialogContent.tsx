import { Dialog } from 'radix-ui'
import { ImageCarousel } from '../ImageCarousel'
import { IoMdClose } from 'react-icons/io'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { Button } from '@jan_hoeck/ui'

export type ImageGalleryDialogContentProps = {
  imageSources: ExposeConfiguration['imageSources']
}

export const ImageGalleryDialogContent = (props: ImageGalleryDialogContentProps) => {
  const { imageSources } = props
  return (
    <Dialog.Content
      className={twMerge([
        'absolute top-1/2 left-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-sm bg-white shadow-md',
        'sm:h-[550px] sm:w-[90vw] md:h-[690px] xl:w-[930px]',
      ])}
    >
      <Dialog.Title className='flex justify-end border-b border-neutral-300 p-4'>
        <Dialog.Close asChild>
          <Button variant='ghost'>
            <IoMdClose size={25} />
          </Button>
        </Dialog.Close>
      </Dialog.Title>
      <div className='flex-1'>
        <ImageCarousel
          imageSources={imageSources}
          imageClassName='object-contain'
        />
      </div>
    </Dialog.Content>
  )
}
