import { Section } from '@components/shared/Section/Section'
import React from 'react'
import { TextDescription } from '@components/shared/TextDescription/TextDescription'

export const WelcomeSection = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Section headline='Los Alcázares - Ihr perfektes Urlaubsziel an der Costa Cálida'>
        <TextDescription
          texts={[
            'Los Alcázares, der begehrte Küstenort an der spanischen Costa Cálida in der Region Murcia, verzaubert Besucher mit seiner einzigartigen Lage am Mar Menor, Europas größter Salzwasserlagune. Die charmante Küstenstadt bietet mit ihrem ruhigen, flachen Wasser ideale Bedingungen für Familien mit Kindern und Wassersport-Enthusiasten.',
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline='Traumhafte Lage und Klima'
      >
        <TextDescription
          texts={[
            {
              text: 'Mit 7 Kilometern Küstenlinie und ganzjährigen Durchschnittstemperaturen von 20°C ist Los Alcázares der ideale Ort, um Sonne und Meer das ganze Jahr über zu genießen. Die günstige Lage macht die Anreise einfach:',
              bulletpoints: ['15 Minuten vom Flughafen San Javier', '50 Minuten vom Flughafen Alicante'],
            },
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline='Gesundheit und Wellness am Mar Menor'
      >
        <TextDescription
          texts={[
            {
              text: 'Das therapeutische Salzwasser des Mar Menor macht jeden Badeurlaub zu einem natürlichen Spa-Erlebnis. Das jodhaltige Salzwasser wirkt:',
              bulletpoints: [
                'Heilend bei dermatologischen Problemen',
                'Lindernd bei rheumatischen Beschwerden',
                'Wohltuend für die Atemwege',
              ],
            },
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline='Wassersport und Aktivitäten'
      >
        <TextDescription
          texts={[
            {
              text: 'Los Alcázares bietet kristallklares Wasser und weiße Sandstrände - perfekt für:',
              bulletpoints: ['Segeln und Windsurfen', 'Kanu- und Kitesurfen', 'Schwimmen und Schnorcheln'],
            },
            'Das moderne Sportzentrum ergänzt das Angebot mit Basketball, Fußball, Tennis, Volleyball und Fitness-Kursen.',
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline='Perfekte Infrastruktur für Ihren Urlaub'
      >
        <TextDescription
          texts={[
            {
              text: 'Los Alcázares verfügt über eine vollständige touristische Infrastruktur:',
              bulletpoints: [
                'Restaurants mit murcianischer Gastronomie',
                'Supermärkte und Geschäfte',
                'Internationale Schulen',
                'Medizinische Versorgung',
                '15 Golfplätze in der Umgebung, darunter der berühmte Golf Club La Manga',
              ],
            },
            'Das moderne Sportzentrum ergänzt das Angebot mit Basketball, Fußball, Tennis, Volleyball und Fitness-Kursen.',
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline='Entdecken Sie die Region Murcia'
      >
        <TextDescription
          texts={[
            {
              bulletpoints: [
                'Cartagena - Die historische Hafenstadt der Kreuzfahrtschiffe mit römischen Ruinen und maritimem Flair.',
                'Murcia - Die Regionalhauptstadt begeistert mit ihrer wunderschönen Altstadt und kulturellen Sehenswürdigkeiten.',
                'Mula - Entspannung pur in den berühmten unterirdischen Thermalbädern.',
                'Calblanque - Ein Naturschutzgebiet mit traumhaften Stränden, versteckten Höhlen und glasklarem Wasser.',
                'La Manga del Mar Menor - Die einzigartige Landzunge zwischen der Salzwasserlagune und dem Mittelmeer ist an der schmalsten Stelle nur 80 Meter breit. Hier können Sie an einem Tag in zwei verschiedenen Gewässern baden!',
              ],
            },
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline='Ihr Traumurlaub in Los Alcázares wartet'
      >
        <TextDescription
          texts={[
            'Los Alcázares verbindet Entspannung, Gesundheit und Aktivität in perfekter Harmonie. Ob Familienurlaub, Wassersport-Abenteuer oder Wellness-Auszeit - entdecken Sie selbst, warum Los Alcázares zu den beliebtesten Reisezielen der Costa Cálida gehört.',
          ]}
        />
      </Section>
    </div>
  )
}
