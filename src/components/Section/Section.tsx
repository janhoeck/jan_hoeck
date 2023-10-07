import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useSectionScrollerRegistration } from '../SectionsScroller/useSectionScrollerRegistration'

export interface SectionProps {
    className?: string
    children: React.ReactElement | React.ReactElement[]
    sectionKey: string
    sectionBackgroundColor: string
    sectionIndicatorColor: string
}

export const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
    const { children, className, sectionKey, sectionBackgroundColor, sectionIndicatorColor, ...restProps } = props

    useSectionScrollerRegistration({
        key: sectionKey,
        backgroundColor: sectionBackgroundColor,
        indicatorColor: sectionIndicatorColor,
    })

    return (
        <div
            className={twMerge('relative overflow-hidden min-h-screen w-full', className)}
            style={{ backgroundColor: sectionBackgroundColor }}
            ref={ref}
            {...restProps}
        >
            {children}
        </div>
    )
})
