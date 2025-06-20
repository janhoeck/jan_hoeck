'use client'
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps'

export type GoogleMapsProps = {
  lat: number
  lng: number
}

export const GoogleMaps = (props: GoogleMapsProps) => {
  const { lat, lng } = props
  const position = { lat, lng }

  return (
    <Map
      defaultCenter={position}
      defaultZoom={18}
      mapId='expose-location-map'
      className='h-[450px]'
    >
      <AdvancedMarker position={position} />
    </Map>
  )
}
