import React from 'react'
import { Typography } from '@jan_hoeck/ui'
import { twMerge } from 'tailwind-merge'

export interface ViewHeaderProps {
  className?: string
}

export const ViewHeader = ({ className }: ViewHeaderProps) => {
  return (
    <header className={twMerge('flex w-full justify-center', className)}>
      <Typography
        className='w-fit text-white'
        variant='heading'
        size={1}
      >
        Adventkalender
      </Typography>
    </header>
  )
}
