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
      <Typography
        variant='leadText'
        className='mb-4 text-gray-400'
      >
        {timePeriod}
      </Typography>
      <Typography className='text-gray-300'>{jobTitle}</Typography>
      <Typography
        variant='smallText'
        className='text-gray-400'
      >
        <i>{organization}</i>
      </Typography>
      {tasks && (
        <ul className='mt-2 list-inside list-disc text-gray-300'>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </TimelineItem>
  )
}
