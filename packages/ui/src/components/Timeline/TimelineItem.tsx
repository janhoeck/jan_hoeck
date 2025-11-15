import React from 'react'
import { twMerge } from 'tailwind-merge'

import { TimelineCard } from './TimelineCard'
import { useTimelineTheme } from './TimelineThemeContext'

export interface TimelineItemProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  lastItem?: boolean
  alignment?: 'left' | 'right'
}

export const TimelineItem = (props: TimelineItemProps) => {
  const { className, children, alignment = 'right', lastItem = false } = props
  const { dotColor, lineColor } = useTimelineTheme()

  return (
    <div
      className={twMerge(['flex flex-row', alignment === 'left' ? 'sm:flex-row-reverse' : 'sm:flex-row', className])}
    >
      <div className='flex flex-col items-center'>
        <div
          data-testid='dot'
          className={twMerge('h-[17px] w-[17px] rounded-full shadow-md', dotColor)}
        />
        <div
          data-testid='line'
          className={twMerge('w-[3px] flex-1', lineColor, lastItem && 'hidden')}
        />
      </div>
      <TimelineCard alignment={alignment}>{children}</TimelineCard>
    </div>
  )
}
