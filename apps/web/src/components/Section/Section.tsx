'use client'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useSectionScrollerRegistration } from '../SectionsScroller/useSectionScrollerRegistration'

export interface SectionProps {
  className?: string
  children: React.ReactElement | React.ReactElement[]
  sectionKey: string
  sectionBackgroundColor: `bg-${string}`
  sectionIndicatorColor: `bg-${string}`
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
      className={twMerge(
        'relative flex min-h-screen w-full justify-center overflow-hidden py-4 pl-8 pr-10',
        className,
        sectionBackgroundColor
      )}
      ref={ref}
      {...restProps}
    >
      <div className='w-full max-w-[1440px]'>{children}</div>
    </div>
  )
})

Section.displayName = 'Section'
