import React from 'react'
import { EstateCard } from '../../components/EstateCard/EstateCard'
import Image from 'next/image'
import { ContentContainer } from '../../components/Container/ContentContainer'
import { Typography } from '@jan_hoeck/ui'
import { Section } from '../../components/Section/Section'

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
    <Section headline='Angebote'>
      <div className='flex flex-col gap-4'>
        <EstateCard
          to='/apartment'
          imageAlignment='left'
          headline='Luxurious villa in Miami, Florida with panoramic sea views.'
          description='Waterfront mansion in Bayshore.
Tennis court, jacuzzi, swimming pool, and water slide.
Gym, home theatre, bar, spa, sauna, premium snooker table, rooftop deck.
Exclusive beach club 5-minute drive.
Includes boat deck
Champagne brunch upon arrival, private security 24/7. '
          imageSrc='/images/apartment/image_1.png'
        />
        <EstateCard
          to='/house'
          imageAlignment='left'
          headline='Luxurious villa in Miami, Florida with panoramic sea views.'
          description='Waterfront mansion in Bayshore.
Tennis court, jacuzzi, swimming pool, and water slide.
Gym, home theatre, bar, spa, sauna, premium snooker table, rooftop deck.
Exclusive beach club 5-minute drive.
Includes boat deck
Champagne brunch upon arrival, private security 24/7. '
          imageSrc='/images/house_1.jpg'
        />
      </div>
    </Section>
  )
}

export default function HomePage() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='relative'>
        <Image
          priority
          src='/images/costacalida.jpeg'
          alt='Costa calida - murcia'
          sizes='100vw'
          width={0}
          height={0}
          style={{
            width: '100%',
            height: 'auto',
          }}
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
