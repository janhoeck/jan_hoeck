import React from 'react'

export type InfoCardProps = {
  title: string | number
  description: string
}

export const InfoCard = (props: InfoCardProps) => {
  const { title, description } = props
  return (
    <div className='shadow-medium rounded-lg bg-white/90 p-6 backdrop-blur-sm'>
      <div className='text-primary font-serif text-3xl font-bold md:text-4xl'>{title}</div>
      <div className='text-muted-foreground mt-1 text-sm md:text-base'>{description}</div>
    </div>
  )
}
