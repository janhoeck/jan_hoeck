'use client'
import React from 'react'
import { Timeline } from '@jan_hoeck/ui'
import { Section, SectionCaption } from '../../../components'
import { CustomTimelineItem } from './CustomTimelineItem'

export const TimelineSection = () => {
  return (
    <Section sectionKey='timeline' sectionBackgroundColor='bg-zinc-900' sectionIndicatorColor='bg-indigo-400'>
      <SectionCaption mainTextColor='text-indigo-400' backgroundTextColor='text-indigo-200'>
        Lebenslauf
      </SectionCaption>
      <div className='mt-8 sm:mt-10 md:mt-12 xl:mt-14 p-0 sm:p-2 md:p-4 xl:p-6 text-indigo-100'>
        <Timeline cardColor='bg-zinc-700' dotColor='bg-pink-400' lineColor='bg-zinc-700'>
          <CustomTimelineItem
            timePeriod='Juli 2012 - Juli 2014'
            jobTitle='Fachabitur im Bereich Informatik'
            organization='Carl-Reuther-Berufskolleg Hennef'
          />
          <CustomTimelineItem
            timePeriod='August 2014 - Februar 2016'
            jobTitle='Ausbildung zum Fachinformatiker für Anwendungsentwicklung'
            organization='FLOWFACT GmbH (ImmobilienScout24)'
          />
          <CustomTimelineItem
            timePeriod='Februar 2016 - Januar 2019'
            jobTitle='Frontend React Entwickler'
            organization='FLOWFACT GmbH (ImmobilienScout24)'
            tasks={['Entwicklung von Microservices mit Java', 'Frontendentwicklung mit React']}
          />
          <CustomTimelineItem
            timePeriod='Januar 2019 - Juli 2022'
            jobTitle='Frontend Senior React Entwickler'
            organization='FLOWFACT GmbH (ImmobilienScout24)'
            tasks={[
              'Verantwortlich für das Frontend Team',
              'Verantwortlich für das Onboarding neuer Kollegen',
              'Entwicklung mit React 17 (Hooks, Context etc.)',
              'Aufbau eines Monorepository ausgelegt auf weit über 50.000 Kunden',
              'Sicherstellung der Frontend Wartbarkeit durch kleine, logikgetrennte Componenten',
              'Vieles mehr...',
            ]}
          />
          <CustomTimelineItem
            timePeriod='Juli 2022 - Jetzt'
            jobTitle='Frontend Senior React Entwickler'
            organization='DeepL SE'
            tasks={[
              'Verantwortlich für das Produkt DeepL Write',
              'Software basierend auf NextJS (SSR)',
              'Entwicklung mit React 19+ (Hooks, Context etc.)',
            ]}
          />
        </Timeline>
      </div>
    </Section>
  )
}
