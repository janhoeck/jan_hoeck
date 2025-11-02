import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import React from 'react'

import { ImageCarousel } from '../ImageCarousel'

export type MobileImageCarouselProps = {
  imageSources: ExposeConfiguration['imageSources']
}

export const MobileImageCarousel = (props: MobileImageCarouselProps) => {
  const { imageSources } = props
  return (
    <div className='h-[400px]'>
      <ImageCarousel imageSources={imageSources} />
    </div>
  )
}
