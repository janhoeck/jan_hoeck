import React from 'react'
import { getImageProps } from 'next/image'

const { props: imageProps } = getImageProps({ alt: 'footer', width: 100, height: 100, src: 'images/footer.png' })

export const ViewFooter = () => {
  return (
    <div
      className='h-[20vh] fixed left-0 bottom-0 w-full bg-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${imageProps.src})` }}
    />
  )
}
