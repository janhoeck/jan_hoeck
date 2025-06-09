import React from 'react'
import { HeaderSection } from './sections/header'
import { AboutMeSection } from './sections/aboutMe'
import { TimelineSection } from './sections/timeline'
import { ReferenceSection } from './sections/references'

import { SectionsScroller } from '@/components'

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
