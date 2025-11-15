'use client'

import { SectionType, SectionsScrollerContextProvider, useSectionsScrollerContext } from '@/components'
import React, { Children } from 'react'
import { twMerge } from 'tailwind-merge'

import { SectionIndicator } from './SectionIndicator'
import { SectionsScrollerItem } from './SectionsScrollerItem'

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
        className='h-full transition-transform duration-700'
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
      <div className='absolute right-6 top-1/2'>
        <SectionIndicator className='translate-y-[-50px]' />
      </div>
    </div>
  )
}

export const SectionsScroller = (props: SectionsScrollerProps) => (
  <SectionsScrollerContextProvider>
    <SectionsScrollerInternal {...props} />
  </SectionsScrollerContextProvider>
)
