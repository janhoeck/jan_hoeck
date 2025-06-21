'use client'
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps'

export type GoogleMapsProps = {
  className?: string
  lat: number
  lng: number
}

export const GoogleMaps = (props: GoogleMapsProps) => {
  const { className, lat, lng } = props
  const position = { lat, lng }

  return (
    <Map
      className={className}
      defaultCenter={position}
      defaultZoom={18}
      mapId='expose-location-map'
      mapTypeId='satellite'
    >
      <AdvancedMarker position={position} />
    </Map>
  )
}
