import React from 'react'
import { Typography } from '@/components'
import { twMerge } from 'tailwind-merge'

export interface SectionCaptionProps {
    className?: string
    children: string
    mainTextColor: string
    backgroundTextColor: string
}

export const SectionCaption = (props: SectionCaptionProps) => {
    const { children, className, mainTextColor, backgroundTextColor } = props

    return (
        <div className={twMerge('relative uppercase text-center', className)}>
            <Typography noWrap style={{ color: mainTextColor }} className='relative z-10' variant='headline'>
                {children}
            </Typography>
            <Typography
                style={{ color: backgroundTextColor }}
                className='absolute text-backgroundText m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'
                variant='hugeHeadline'
            >
                {children}
            </Typography>
        </div>
    )
}
