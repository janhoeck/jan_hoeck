import React from 'react'
import { EstateCard } from '../../components/EstateCard/EstateCard'
import Image from 'next/image'
import { ContentContainer } from '../../components/Container/ContentContainer'
import { Typography } from '@jan_hoeck/ui'
import { Section } from '../../components/Section/Section'
import { twMerge } from 'tailwind-merge'

const WelcomeSection = () => {
  return (
    <Section headline='Willkommen an der Costa Cálida'>
      <Typography>
        Schön, dass Sie den Weg zu uns gefunden haben! Genießen Sie einen unvergesslichen Urlaub an der Costa Cálida,
        einer der sonnigsten und abwechslungsreichsten Regionen Spaniens. Unsere geschmackvoll eingerichteten
        Ferienwohnungen und -häuser sind der perfekte Ort, um zur Ruhe zu kommen, das mediterrane Lebensgefühl
        auszukosten und neue Energie zu tanken. Ob Strand, Sport, Kulinarik oder Erholung – hier werden Urlaubsträume
        wahr. Willkommen in Ihrem zweiten Zuhause unter der spanischen Sonne!
      </Typography>
    </Section>
  )
}

const EstateSection = () => {
  return (
    <Section headline='Unterkünfte'>
      <div className='flex flex-wrap gap-4 sm:flex-nowrap'>
        <EstateCard
          to='/expose/apartment'
          imageAlignment='left'
          headline='Luxurious villa in Miami, Florida with panoramic sea views.'
          description='3 Betten • 1 Badezimmer'
          imageSrc='/images/apartment/image_1.png'
        />
        <EstateCard
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

export default function HomePage() {
  return (
    <div className='flex flex-col gap-6'>
      <div className={twMerge(['relative h-[200px] w-full', 'sm:h-[270px] md:h-[350px] xl:h-[550px]'])}>
        <Image
          fill
          priority
          src='/images/costacalida.jpeg'
          alt='Costa calida - murcia'
          className='object-cover'
        />
        <Typography
          variant='heading'
          size={1}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'
        >
          Welcome to Murcia
        </Typography>
      </div>
      <ContentContainer>
        <div className='flex flex-col gap-10'>
          <WelcomeSection />
          <EstateSection />
        </div>
      </ContentContainer>
    </div>
  )
}
