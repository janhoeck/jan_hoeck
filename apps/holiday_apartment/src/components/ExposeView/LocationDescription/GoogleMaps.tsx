'use client'
import { GoogleMap, Marker } from '@react-google-maps/api'

export type GoogleMapsProps = {
  lat: number
  lng: number
}

export const GoogleMaps = (props: GoogleMapsProps) => {
  const { lat, lng } = props

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: 400 }}
      center={{ lat, lng }}
      zoom={18}
      options={{
        zoomControl: true,
        tilt: 0,
        gestureHandling: 'auto',
        mapTypeId: 'satellite',
      }}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  )
}
