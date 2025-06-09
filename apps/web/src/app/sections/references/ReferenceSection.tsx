import React from 'react'
import { Section, SectionCaption } from '@/components'
import { AdventscalendarReference, SlotReference, WorkingTimeReference } from './components/references/specific'

export const ReferenceSection = () => {
  return (
    <Section sectionKey='reference' sectionBackgroundColor='bg-zinc-900' sectionIndicatorColor='bg-indigo-400'>
      <SectionCaption mainTextColor='text-indigo-400' backgroundTextColor='text-indigo-200'>
        Referenzen
      </SectionCaption>
      <div className='grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(250px,400px))] mt-8 sm:mt-10 md:mt-12 xl:mt-14 p-0 sm:p-2 md:p-4 xl:p-6'>
        <AdventscalendarReference />
        <SlotReference />
        <WorkingTimeReference />
      </div>
    </Section>
  )
}
