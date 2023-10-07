import React from 'react'
import { Section } from '../../components/Section'
import { SectionCaption } from '../../components'
import { shadeColor } from '../../tools/utils/ColorUtils'
import { AdventscalendarReference, SlotReference, WorkingTimeReference } from './components/references/specific'
import { Fade } from 'react-awesome-reveal'

export const ReferenceSection = () => {
    return (
        <Section
            className='bg-[#9cb8b3] p-4'
            sectionKey='reference'
            sectionBackgroundColor='#9cb8b3'
            sectionIndicatorColor='#efedce'
        >
            <SectionCaption mainTextColor='#efedce' backgroundTextColor={shadeColor('#9cb8b3', 4)}>
                Referenzen
            </SectionCaption>
            <div className='grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(250px,400px))] mt-4 sm:mt-6 md:mt-8 xl:mt-10 p-0 sm:p-2 md:p-4 xl:p-6'>
                <Fade triggerOnce direction='left'>
                    <AdventscalendarReference />
                </Fade>
                <Fade triggerOnce direction='up'>
                    <SlotReference />
                </Fade>
                <Fade triggerOnce direction='right'>
                    <WorkingTimeReference />
                </Fade>
            </div>
        </Section>
    )
}
