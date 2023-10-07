import React from 'react'
import { useSectionsScrollerContext } from './SectionsScrollerContext'
import { twMerge } from 'tailwind-merge'
import colors from '../../tools/theme/colors'

export interface SectionIndicatorProps {
    className?: string
}

export const SectionIndicator = (props: SectionIndicatorProps) => {
    const { className } = props
    const { sections, activeSection, activeSectionIndex, setActiveSectionKey } = useSectionsScrollerContext()

    return (
        <ul className={twMerge('flex flex-col items-center list-none [&>*:not(:last-child)]:mb-4', className)}>
            {sections.map((section, index) => (
                <li
                    key={section.key}
                    className={twMerge(
                        'w-[4px] h-[4px] rounded-full transition-all duration-300 cursor-pointer',
                        index === activeSectionIndex && 'w-[12px] h-[12px]'
                    )}
                    style={{ backgroundColor: activeSection?.indicatorColor ?? colors.white }}
                    onClick={() => setActiveSectionKey(section.key)}
                />
            ))}
        </ul>
    )
}
