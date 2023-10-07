import React, { FunctionComponent, HTMLAttributes } from 'react'
import { Typography } from '../Typography'
import { twMerge } from 'tailwind-merge'

export interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
    alignment?: 'left' | 'right'
    lastItem?: boolean
    headline?: string
}

export const TimelineItem: FunctionComponent<TimelineItemProps> = (props) => {
    const { className, children, alignment = 'right', lastItem = false, headline, ...restProps } = props

    return (
        <div
            className={twMerge(['flex flex-row', alignment === 'left' ? 'sm:flex-row-reverse' : 'sm:flex-row'])}
            {...restProps}
        >
            <div className='flex flex-col items-center'>
                <div data-testid='dot' className='h-[17px] w-[17px] rounded-full bg-white' />
                <div
                    data-testid='line'
                    className={twMerge(['w-[3px] flex-1 bg-primary-light', lastItem && 'hidden'])}
                />
            </div>
            <div
                className={twMerge([
                    'mt-1 mb-4 ml-4 flex flex-col shadow-card p-4 max-w-[600px] bg-white',
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
        </div>
    )
}
