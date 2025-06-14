import { ExposeView } from '../../../components/ExposeView/ExposeView'

export default function ApartmentPage() {
  return (
    <ExposeView
      configuration={{
        imageSources: [
          '/images/apartment/image_1.png',
          '/images/apartment/image_2.png',
          '/images/apartment/image_3.png',
          '/images/apartment/image_4.png',
          '/images/apartment/image_5.png',
          '/images/apartment/image_6.png',
          '/images/apartment/image_7.png',
        ],
        location: {
          lat: 37.431744,
          lng: -1.506303,
          description: [
            `Die Ferienwohnung liegt in einer der schönsten Regionen Spaniens – der Costa Cálida, im Südosten der
                iberischen Halbinsel. Nur wenige Gehminuten trennen das Apartment von feinsandigen Stränden und kleinen
                Buchten mit kristallklarem Wasser.`,
            `Die ruhige Wohngegend ist der perfekte Ort für Erholungssuchende, fernab vom Massentourismus, jedoch mit
                ausgezeichneter Anbindung an sämtliche Annehmlichkeiten. Supermärkte, Restaurants, Cafés und zahlreiche
                Einkaufsmöglichkeiten sind ebenso schnell erreicht wie der malerische Hafen und die lebendige
                Strandpromenade.`,
            `In unmittelbarer Nähe warten zahlreiche Sport- und Freizeitaktivitäten, von Golfplätzen über
                Fahrradwege, Tauchschulen und Wassersportangeboten bis hin zu Wanderwegen im nahegelegenen
                Naturschutzgebiet Sierra de la Muela. Auch kulturell hat die Region viel zu bieten: Die
                geschichtsträchtigen Städte Cartagena und Murcia sind mit dem Auto in weniger als 30–45 Minuten
                erreichbar und locken mit beeindruckenden Altstädten, Museen und lokalen Märkten.`,
            `Flughäfen, wie der internationale Flughafen Murcia (Corvera), sind ebenso gut erreichbar, ebenso die
                wichtigsten Autobahnen, die für schnelle Verbindungen entlang der Küste sorgen.`,
          ],
        },
        headline: 'Gemütliches Zuhause in Murcia',
        description:
          'The cozy two-bedroom apartment is located on the Pest side of the city, right in the center and within walking distance to several restaurants, bars and attractions.',
        propertySummary: [
          {
            type: 'bathroom',
            description: '1 Badezimmer',
          },
          {
            type: 'bedroom',
            description: '2 Schlafzimmer',
          },
          {
            type: 'wlan',
            description: 'WLAN vorhanden',
          },
          {
            type: 'pool',
            description: 'Pool vorhanden',
          },
        ],
        equipmentFeatures: ['wlan', 'tv', 'kitchen', 'parking', 'washing_machine', 'pool'],
      }}
    />
  )
}
