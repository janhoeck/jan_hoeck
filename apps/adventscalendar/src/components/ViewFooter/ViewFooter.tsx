import { getImageProps } from 'next/image'
import React from 'react'

const { props: imageProps } = getImageProps({ alt: 'footer', width: 100, height: 100, src: 'images/footer.png' })

export const ViewFooter = () => {
  return (
    <div
      className='fixed bottom-0 left-0 h-[20vh] w-full bg-cover bg-center bg-repeat'
      style={{ backgroundImage: `url(${imageProps.src})` }}
    />
  )
}
