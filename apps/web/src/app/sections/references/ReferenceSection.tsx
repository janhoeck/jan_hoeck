import React from 'react'
import { Section, SectionCaption } from '@/components'
import { AdventscalendarReference, SlotReference, WorkingTimeReference } from './components/references/specific'

export const ReferenceSection = () => {
  return (
    <Section
      sectionKey='reference'
      sectionBackgroundColor='bg-zinc-900'
      sectionIndicatorColor='bg-indigo-400'
    >
      <SectionCaption
        mainTextColor='text-indigo-400'
        backgroundTextColor='text-indigo-200'
      >
        Referenzen
      </SectionCaption>
      <div className='mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,400px))] justify-center gap-6 p-0 sm:mt-10 sm:p-2 md:mt-12 md:p-4 xl:mt-14 xl:p-6'>
        <AdventscalendarReference />
        <SlotReference />
        <WorkingTimeReference />
      </div>
    </Section>
  )
}
