import { ExposeCard } from './ExposeCard'
import { Section } from '@components/shared/Section/Section'
import React from 'react'

export const ExposeListSection = () => {
  return (
    <Section headline='Unterkünfte'>
      <div className='flex flex-wrap gap-4 sm:flex-nowrap'>
        <ExposeCard
          to='/expose/apartment'
          headline='Ferienwohnung Los Alcázares Mar Menor - Luxus Apartment Puerto Marina Murcia'
          description='4 Betten • 2 Badezimmer'
          imageSrc='/images/apartment/image_1.png'
        />
      </div>
    </Section>
  )
}
