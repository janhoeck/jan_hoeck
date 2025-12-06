import React from 'react'
import { twMerge } from 'tailwind-merge'

import { Card, CardContent } from '../Card'

export type TimelineCardProps = {
  children: React.ReactNode | React.ReactNode[]
  alignment?: 'left' | 'right'
}

export const TimelineCard = (props: TimelineCardProps) => {
  const { children, alignment } = props
  return (
    <Card
      className={twMerge([
        'mb-4 ml-4 mt-1 flex flex-col bg-timeline-card-bg',
        alignment === 'right' ? 'sm:ml-4' : '',
        alignment === 'left' ? 'sm:ml-0 sm:mr-4' : '',
      ])}
    >
      <CardContent>{children}</CardContent>
    </Card>
  )
}
