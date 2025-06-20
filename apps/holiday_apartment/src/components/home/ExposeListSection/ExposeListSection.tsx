import { ExposeCard } from './ExposeCard'
import { Section } from '@components/shared/Section/Section'
import React from 'react'

export const ExposeListSection = () => {
  return (
    <Section headline='Unterkünfte'>
      <div className='flex flex-wrap gap-4 sm:flex-nowrap'>
        <ExposeCard
          to='/expose/apartment'
          imageAlignment='left'
          headline='Luxurious villa in Miami, Florida with panoramic sea views.'
          description='3 Betten • 1 Badezimmer'
          imageSrc='/images/apartment/image_1.png'
        />
        <ExposeCard
          to='/expose/house'
          imageAlignment='left'
          headline='Luxurious villa in Miami, Florida with panoramic sea views.'
          description='2 Betten • 1 Badezimmer • Pool'
          imageSrc='/images/house/image_1.png'
        />
      </div>
    </Section>
  )
}
