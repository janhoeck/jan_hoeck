import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Typography } from '@jan_hoeck/ui'

export interface SectionCaptionProps {
  className?: string
  children: string
  mainTextColor: `text-${string}`
  backgroundTextColor: `text-${string}`
}

export const SectionCaption = (props: SectionCaptionProps) => {
  const { children, className, mainTextColor, backgroundTextColor } = props

  return (
    <div className={twMerge('relative uppercase text-center', className)}>
      <Typography noWrap className={twMerge('relative z-10', mainTextColor)} variant='headline'>
        {children}
      </Typography>
      <Typography
        className={twMerge(
          'absolute m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10',
          backgroundTextColor
        )}
        variant='hugeHeadline'
      >
        {children}
      </Typography>
    </div>
  )
}
