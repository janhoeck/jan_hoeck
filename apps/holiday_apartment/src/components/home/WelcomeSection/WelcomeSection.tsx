import { Section } from '@components/shared/Section/Section'
import { Typography } from '@jan_hoeck/ui'
import React from 'react'

export const WelcomeSection = () => {
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
