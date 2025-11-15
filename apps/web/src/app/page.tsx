import { SectionsScroller } from '@/components'
import React from 'react'

import { AboutMeSection } from './sections/aboutMe'
import { HeaderSection } from './sections/header'
import { ReferenceSection } from './sections/references'
import { TimelineSection } from './sections/timeline'

function App() {
  return (
    <SectionsScroller>
      <HeaderSection />
      <AboutMeSection />
      <TimelineSection />
      <ReferenceSection />
    </SectionsScroller>
  )
}

export default App
