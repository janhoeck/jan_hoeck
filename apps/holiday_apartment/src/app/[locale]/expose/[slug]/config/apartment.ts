import { ExposeConfiguration } from '@components/expose/types'

export const data: ExposeConfiguration = {
  id: 'apartment',
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
    lat: 37.75631326446151,
    lng: -0.8499044215669385,
    address: {
      building: 'Puerto Marina',
      street: 'Calle Isla de Ibiza',
      houseNumber: '13',
      floorApartment: '1° A17',
      postalCode: '30710',
      city: 'Los Alcázares',
      country: 'Spain',
    },
    description: [
      'Los Alcázares ist ein beliebter Ferienort an der sonnigen Costa Cálida in der spanischen Region Murcia. Direkt gelegen am traumhaften Mar Menor, der größten Salzwasserlagune Europas, bietet der Ort perfekte Bedingungen für einen erholsamen und gleichzeitig aktiven Urlaub in Spanien.',
      'Mit rund 7 Kilometern feinem Sandstrand, ruhigem, flachem Wasser und ganzjährig mildem Klima (durchschnittlich 20 °C) ist Los Alcázares das ideale Reiseziel für Familien, Paare und Aktivurlauber. Besonders beliebt ist das baden im Mar Menor, dessen jodhaltiges Salzwasser für seine therapeutischen Wirkungen bekannt ist – ideal bei Haut-, Atemwegs- und Gelenkproblemen. Ein natürliches Spa direkt vor der Haustür!',
      'Unsere Ferienwohnung in Los Alcázares liegt nur wenige Meter vom Strand entfernt und ist hervorragend erreichbar: Der Flughafen Murcia-San Javier ist nur wenige Kilometer entfernt, der Flughafen Alicante ist in etwa 50 Minuten mit dem Auto erreichbar.',
      {
        text: 'Erleben Sie in Los Alcázares eine perfekte Kombination aus Erholung, Sport und spanischem Lebensgefühl:',
        bulletpoints: [
          'Wassersportmöglichkeiten wie Segeln, Windsurfen, Kitesurfen, Kajakfahren, Stand-up-Paddling',
          'Moderne Sportzentren mit Tennis, Volleyball, Squash, Fitness, Fußball u.v.m.',
          'Lokale Spezialitäten aus der murcianischen Küche in zahlreichen Restaurants und Tapas-Bars',
          'Historische Sehenswürdigkeiten und spannende Ausflugsziele in der Umgebung',
        ],
      },
      'Die Stadt bietet eine sehr gute Infrastruktur mit Supermärkten, Apotheken, internationalen Schulen, medizinischer Versorgung, Golfplätzen und einem zuverlässigen Busservice entlang der Küste.',
      'Für Golfspieler ist die Region ein Paradies: In der Nähe finden sich über 15 Golfplätze, darunter der bekannte La Manga Club, einer der besten Golfresorts Europas.',
      'Ob Sie einen Strandurlaub in Spanien, einen aktiven Golfurlaub an der Costa Cálida oder einfach nur Erholung mit der Familie suchen – Los Alcázares bietet beste Voraussetzungen für einen unvergesslichen Aufenthalt.',
    ],
  },
  headline:
    'Liebevoll eingerichtetes Apartment in der Luxusanlage Puerto Marina, Los Alcazeres, Mar Menor, Región Murcia, Spanien',
  description: [
    'Das Apartment bietet Platz für bis zu vier Personen. Es verfügt über drei Zimmer, zwei Schlafräume, ein Wohnzimmer, ein Badezimmer und eine Küche im amerikanischen Stil. Ein Highlight ist der Balkon, auf dem man ab 18:00 Uhr die Abendsonne genießen kann. Das Apartment ist mit Küchenutensilien, Handtüchern und Bettwäsche voll ausgestattet. Es verfügt über deutsches Fernsehen und einen Amazon Fire TV Stick. Es liegt im ersten Stock und ist auch mit dem Aufzug erreichbar.',
    'Die Anlage verfügt über einen wunderschönen Innenbereich mit drei Pools, von denen zwei behindertengerecht sind. Palmen umrahmen die Anlage und sorgen für Karibikflair. Der ideale Ort zum Entspannen.',
    'Wir stellen unseren Gästen Sonnenliegen für die Nutzung des Pools zur Verfügung. Wir bitten Sie lediglich, die Liegen am Ende des Tages wieder in den Poolbereich zurückzubringen. Bitte beachten Sie außerdem, dass Glas in jeglicher Form nicht in die Poolbereiche mitgenommen werden darf.',
    'Die Anlage liegt sehr zentral und dennoch ruhig. Sie ist abgeschlossen und sicher. Nur wenige Gehminuten entfernt liegen Strand, Geschäfte, Bars und Restaurants entfernt. Wenn Sie das bevorzugen, brauchen Sie also kein Auto. Alles ist fußläufig zu erreichen. Die nächsten Einkaufsmöglichkeiten (Lidl, Aldi, Mercadona) befinden sich circa 150 m entfernt. Die berühmte Fußgängerzone von Los Alcázares mit der 525 Plaza und ihren Restaurants erreichen Sie nach 525 Metern. Abends finden Sie dort Tanzbars, Musik und jede Menge Hippie- und Verkaufsstände circa 120 Meter entfernt. Zum Meer sind es circa 750 Meter. mit der wunderschönen Strandpromenade und den vielen Restaurants sind es circa 750 m. Unsere Wohnung ist der perfekte Ort für einen wunderschönen Urlaub. Sie ist zu einem attraktiven Preis zu haben. Tiere sind in der Anlage nicht erlaubt!',
  ],
  propertySummary: [
    {
      type: 'bathroom',
      amount: 1,
    },
    {
      type: 'bedroom',
      amount: 2,
    },
    {
      type: 'bed',
      amount: 4,
    },
    {
      type: 'group',
      amount: 4,
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
    outdoorArea: ['pool', 'balcony'],
    kitchen: ['cooker', 'oven', 'dishes', 'coffee_machine', 'microwave', 'freezer', 'refrigerator'],
    bedroom: ['bed_linen'],
    baby: ['baby_bed', 'high_chair'],
  },
}
