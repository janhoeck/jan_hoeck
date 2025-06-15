export const siteMetadata = {
  title: 'Ferienwohnung & Ferienhaus Costa Calida - Traumurlaub in Spanien',
  description:
    'Ferienwohnung und Ferienhaus an der Costa Calida mieten. Traumhafte Unterkünfte mit Meerblick, Pool und modernem Komfort. Jetzt buchen für Ihren perfekten Spanien-Urlaub!',
  keywords: [
    'Ferienwohnung Costa Calida',
    'Ferienhaus Costa Calida',
    'Urlaub Spanien',
    'Ferienwohnung Murcia',
    'Costa Calida Unterkunft',
    'Ferienhaus Spanien mieten',
    'Strandurlaub Costa Calida',
    'Ferienwohnung mit Pool',
    'Spanien Ferienhaus',
    'Costa Calida Vermietung',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Costa Calida Ferienwohnungen',
    description: 'Exklusive Ferienwohnungen und Ferienhäuser an der Costa Calida',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
      addressRegion: 'Murcia',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '37.6',
      longitude: '-0.9',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pool',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'WiFi',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Meerblick',
      },
    ],
  },
}
