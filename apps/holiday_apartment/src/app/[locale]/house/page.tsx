import { ExposeView } from '../../../components/ExposeView/ExposeView'

export default function ApartmentPage() {
  return (
    <ExposeView
      configuration={{
        imageSources: [
          '/images/house/image_1.png',
          '/images/house/image_2.png',
          '/images/house/image_3.png',
          '/images/house/image_4.png',
          '/images/house/image_5.png',
          '/images/house/image_6.png',
          '/images/house/image_7.png',
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
        equipmentFeatures: {
          general: [
            'parking',
            'air_conditioner',
            'wlan',
            'tv',
            'barrier_free',
            'fire_extinguisher',
            'smoke_detector',
            'vacuum',
            'washing_rack',
          ],
          outdoorArea: ['pool', 'terrace'],
          kitchen: ['cooker', 'oven', 'dishes', 'coffee_machine', 'microwave', 'freezer', 'refrigerator'],
          bedroom: ['bed_linen'],
          baby: ['high_chair'],
        },
      }}
    />
  )
}
