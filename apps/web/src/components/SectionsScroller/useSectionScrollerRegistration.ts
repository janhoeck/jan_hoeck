'use client'

import { useEffect } from 'react'

import { SectionType, useSectionsScrollerContext } from './SectionsScrollerContext'

export const useSectionScrollerRegistration = (section: SectionType) => {
  const context = useSectionsScrollerContext()

  useEffect(() => {
    context.registerSection(section)
  }, [])
}
