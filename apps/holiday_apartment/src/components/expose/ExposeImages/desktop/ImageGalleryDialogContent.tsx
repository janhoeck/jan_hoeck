import { ExposeConfiguration } from '../../types'
import { Dialog } from 'radix-ui'
import { ImageCarousel } from '../ImageCarousel'
import { Button } from '../../../shared/Button/Button'
import { IoMdClose } from 'react-icons/io'
import React from 'react'

export type ImageGalleryDialogContentProps = {
  imageSources: ExposeConfiguration['imageSources']
}

export const ImageGalleryDialogContent = (props: ImageGalleryDialogContentProps) => {
  const { imageSources } = props
  return (
    <Dialog.Content className='z-3 fixed left-1/2 top-1/2 h-[70vh] max-h-[800px] w-[90vw] max-w-[1500px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm bg-white shadow-md'>
      <Dialog.Title className='flex justify-end border-b border-neutral-300 p-4'>
        <Dialog.Close asChild>
          <Button variant='ghost'>
            <IoMdClose size={25} />
          </Button>
        </Dialog.Close>
      </Dialog.Title>
      <ImageCarousel
        imageSources={imageSources}
        imageClassName='object-contain'
      />
    </Dialog.Content>
  )
}
