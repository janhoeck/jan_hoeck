import React from 'react'
import { TimelineCard } from '@/components/Timeline'
import { twMerge } from 'tailwind-merge'

export interface TimelineItemProps {
    children: React.ReactNode | React.ReactNode[]
    className?: string
    lastItem?: boolean
    alignment?: 'left' | 'right'
    headline?: string
}

export const TimelineItem = (props: TimelineItemProps) => {
    const { className, children, alignment = 'right', lastItem = false, headline, ...restProps } = props

    return (
        <div className={twMerge(['flex flex-row', alignment === 'left' ? 'sm:flex-row-reverse' : 'sm:flex-row'])}>
            <div className='flex flex-col items-center'>
                <div data-testid='dot' className='shadow-md h-[17px] w-[17px] rounded-full bg-white' />
                <div
                    data-testid='line'
                    className={twMerge(['w-[3px] flex-1 bg-primary-light', lastItem && 'hidden'])}
                />
            </div>
            <TimelineCard alignment={alignment} headline={headline}>
                {children}
            </TimelineCard>
        </div>
    )
}
