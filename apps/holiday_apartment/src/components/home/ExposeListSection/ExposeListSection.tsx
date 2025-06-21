import { ExposeCard } from './ExposeCard'
import { Section } from '@components/shared/Section/Section'
import React from 'react'

export const ExposeListSection = () => {
  return (
    <Section headline='Unterkünfte'>
      <div className='flex flex-wrap gap-4 sm:flex-nowrap'>
        <ExposeCard
          to='/expose/apartment'
          headline='Luxurious villa in Miami, Florida with panoramic sea views.'
          description='3 Betten • 1 Badezimmer'
          imageSrc='/images/apartment/image_1.png'
        />
      </div>
    </Section>
  )
}
