'use client'
import React from 'react'
import { HeaderSection } from './sections/header'
import { AboutMeSection } from './sections/aboutMe'
import { TimelineSection } from './sections/timeline'
import { SectionsScroller } from '@/components'
import { ReferenceSection } from './sections/references'
import Head from 'next/head'

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
