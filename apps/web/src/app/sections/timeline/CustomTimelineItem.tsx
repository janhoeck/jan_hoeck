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
      <Typography variant='secondary' className='text-gray-400 mb-4'>
        {timePeriod}
      </Typography>
      <Typography>{jobTitle}</Typography>
      <Typography variant='secondary' className='text-gray-300'>
        <i>{organization}</i>
      </Typography>
      {tasks && (
        <Typography variant='secondary' className='mt-2'>
          <ul className='list-disc list-inside'>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </Typography>
      )}
    </TimelineItem>
  )
}
