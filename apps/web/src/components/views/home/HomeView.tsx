import { SectionsScroller } from '@/components/shared'
import { AboutMeSection } from '@/components/views/home/sections/aboutMe'
import { HeaderSection } from '@/components/views/home/sections/header'
import { ReferenceSection } from '@/components/views/home/sections/references'
import { TimelineSection } from '@/components/views/home/sections/timeline'
import React from 'react'

export const HomeView = () => {
  return (
    <SectionsScroller>
      <HeaderSection />
      <AboutMeSection />
      <TimelineSection />
      <ReferenceSection />
    </SectionsScroller>
  )
}
