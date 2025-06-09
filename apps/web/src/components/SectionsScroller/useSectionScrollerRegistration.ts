'use client'
import { SectionType, useSectionsScrollerContext } from './SectionsScrollerContext'
import { useEffect } from 'react'

export const useSectionScrollerRegistration = (section: SectionType) => {
  const context = useSectionsScrollerContext()

  useEffect(() => {
    context.registerSection(section)
  }, [])
}
