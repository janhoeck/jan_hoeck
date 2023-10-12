import { twMerge } from 'tailwind-merge'
import { Typography } from '@/components/Typography'
import React from 'react'

export type TimelineCardProps = {
    children: React.ReactNode | React.ReactNode[]
    alignment?: 'left' | 'right'
    headline?: string
}

export const TimelineCard = (props: TimelineCardProps) => {
    const { children, alignment, headline } = props
    return (
        <div
            className={twMerge([
                'mt-1 mb-4 ml-4 flex flex-col shadow-md p-4 max-w-[600px] bg-white',
                alignment === 'right' ? 'sm:ml-4' : '',
                alignment === 'left' ? 'sm:mr-4 sm:ml-0' : '',
            ])}
        >
            {headline && (
                <Typography className='tracking-wide mb-2' variant='secondary'>
                    {headline}
                </Typography>
            )}
            {children}
        </div>
    )
}
