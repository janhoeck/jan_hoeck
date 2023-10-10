'use client'
import React from 'react'
import { Section, SectionCaption } from '@/components'
import { shadeColor } from '@/tools/utils/ColorUtils'
import { AdventscalendarReference, SlotReference, WorkingTimeReference } from './components/references/specific'

export const ReferenceSection = () => {
    return (
        <Section sectionKey='reference' sectionBackgroundColor='#9cb8b3' sectionIndicatorColor='#efedce'>
            <SectionCaption mainTextColor='#efedce' backgroundTextColor={shadeColor('#9cb8b3', 4)}>
                Referenzen
            </SectionCaption>
            <div className='grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(250px,400px))] mt-4 sm:mt-6 md:mt-8 xl:mt-10 p-0 sm:p-2 md:p-4 xl:p-6'>
                <AdventscalendarReference />
                <SlotReference />
                <WorkingTimeReference />
            </div>
        </Section>
    )
}
