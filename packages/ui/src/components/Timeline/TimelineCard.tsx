import React from 'react'
import { twMerge } from 'tailwind-merge'

import { useTimelineTheme } from './TimelineThemeContext'

export type TimelineCardProps = {
  children: React.ReactNode | React.ReactNode[]
  alignment?: 'left' | 'right'
}

export const TimelineCard = (props: TimelineCardProps) => {
  const { children, alignment } = props
  const { cardColor } = useTimelineTheme()
  return (
    <div
      className={twMerge([
        'mb-4 ml-4 mt-1 flex max-w-[600px] flex-col p-4 shadow-md',
        alignment === 'right' ? 'sm:ml-4' : '',
        alignment === 'left' ? 'sm:ml-0 sm:mr-4' : '',
        cardColor,
      ])}
    >
      {children}
    </div>
  )
}
