import { twMerge } from 'tailwind-merge'
import React from 'react'
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
        'mt-1 mb-4 ml-4 flex flex-col shadow-md p-4 max-w-[600px]',
        alignment === 'right' ? 'sm:ml-4' : '',
        alignment === 'left' ? 'sm:mr-4 sm:ml-0' : '',
        cardColor,
      ])}
    >
      {children}
    </div>
  )
}
