'use client'
import React, { Children } from 'react'
import { SectionIndicator } from './SectionIndicator'
import { SectionsScrollerContextProvider, SectionType, useSectionsScrollerContext } from '@/components'
import { SectionsScrollerItem } from './SectionsScrollerItem'
import { twMerge } from 'tailwind-merge'

export interface SectionsScrollerProps {
    className?: string
    children: React.ReactElement | React.ReactElement[]
}

const SectionsScrollerInternal = (props: SectionsScrollerProps) => {
    const { children, className } = props
    const { sectionsCount, activeSectionIndex, setActiveSectionKey } = useSectionsScrollerContext()

    const handleSectionChange = (section: SectionType) => {
        setActiveSectionKey(section.key)
    }

    return (
        <div className={twMerge('relative h-full w-full overflow-hidden', className)}>
            <div
                className='transition-transform duration-700 h-full'
                style={{ transform: `translate3d(0, -${activeSectionIndex * 100}vh, 0` }}
            >
                {Children.map(children, (child, index) => (
                    <SectionsScrollerItem
                        key={index}
                        sectionIndex={index}
                        sectionsCount={sectionsCount}
                        onSectionChange={handleSectionChange}
                    >
                        {React.cloneElement(child)}
                    </SectionsScrollerItem>
                ))}
            </div>
            <SectionIndicator className='absolute top-2/4 right-6' />
        </div>
    )
}

export const SectionsScroller = (props: SectionsScrollerProps) => (
    <SectionsScrollerContextProvider>
        <SectionsScrollerInternal {...props} />
    </SectionsScrollerContextProvider>
)
