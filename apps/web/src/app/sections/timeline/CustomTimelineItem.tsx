import { TimelineItem, type TimelineItemProps, Typography } from '@jan_hoeck/ui'
import React from 'react'

export type CustomTimelineItemProps = Omit<TimelineItemProps, 'children'> & {
  timePeriod: string
  jobTitle: string
  organization: string
  tasks?: string[]
}

export const CustomTimelineItem = (props: CustomTimelineItemProps) => {
  const { timePeriod, jobTitle, organization, tasks, ...restProps } = props
  return (
    <TimelineItem {...restProps}>
      <Typography className='mb-4 text-gray-400'>{timePeriod}</Typography>
      <Typography>{jobTitle}</Typography>
      <Typography className='text-gray-300'>
        <i>{organization}</i>
      </Typography>
      {tasks && (
        <Typography className='mt-2'>
          <ul className='list-inside list-disc'>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </Typography>
      )}
    </TimelineItem>
  )
}
