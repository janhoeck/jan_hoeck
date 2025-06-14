import { Typography } from '@jan_hoeck/ui'
import { Button } from '../Button/Button'
import Link from 'next/link'
import { LiaArrowRightSolid } from 'react-icons/lia'
import Image from 'next/image'

export type EstateCardContentProps = {
  imageAlignment?: 'left' | 'right'
  headline: string
  description: string
  to: string
  imageSrc: string
}

export const EstateCardContent = (props: EstateCardContentProps) => {
  const { imageAlignment = 'right', headline, description, to, imageSrc } = props

  const firstItem = (
    <div>
      <Typography
        variant='heading'
        size={3}
      >
        {headline}
      </Typography>
      <Typography
        variant='paragraph'
        className='mb-4'
      >
        {description}
      </Typography>
      <Button
        as={Link}
        href={to}
        variant='basic'
      >
        Erfahre mehr
        <LiaArrowRightSolid />
      </Button>
    </div>
  )

  const secondItem = (
    <div className='relative hidden h-auto w-[100%] sm:block'>
      <Image
        fill
        src={imageSrc}
        alt='Estate'
        className='object-cover'
      />
    </div>
  )

  if (imageAlignment === 'right') {
    return (
      <>
        {firstItem}
        {secondItem}
      </>
    )
  }

  return (
    <>
      {secondItem}
      {firstItem}
    </>
  )
}
