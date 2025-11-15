import { Typography } from '@jan_hoeck/ui'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface SectionCaptionProps {
  className?: string
  children: string
  mainTextColor: `text-${string}`
  backgroundTextColor: `text-${string}`
}

export const SectionCaption = (props: SectionCaptionProps) => {
  const { children, className, mainTextColor, backgroundTextColor } = props

  return (
    <div className={twMerge('relative text-center uppercase', className)}>
      <Typography
        noWrap
        className={twMerge('relative z-10', mainTextColor)}
        variant='heading'
        size={3}
      >
        {children}
      </Typography>
      <Typography
        className={twMerge(
          'absolute left-1/2 top-1/2 z-0 m-0 -translate-x-1/2 -translate-y-1/2 opacity-10',
          backgroundTextColor
        )}
        variant='heading'
        size={1}
      >
        {children}
      </Typography>
    </div>
  )
}
