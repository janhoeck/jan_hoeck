import React from 'react'
import { Typography } from '@jan_hoeck/ui'
import { twMerge } from 'tailwind-merge'

export interface ViewHeaderProps {
  className?: string
}

export const ViewHeader = ({ className }: ViewHeaderProps) => {
  return (
    <header className={twMerge('w-full text-center text-white', className)}>
      <Typography variant='hugeHeadline'>Adventkalender</Typography>
    </header>
  )
}
