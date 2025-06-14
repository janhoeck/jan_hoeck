'use client'
import { GoogleMap, Libraries, Marker, useJsApiLoader } from '@react-google-maps/api'

const libraries = ['places', 'drawing', 'geometry']

export type GoogleMapsProps = {
  lat: number
  lng: number
}

export const GoogleMaps = (props: GoogleMapsProps) => {
  const { lat, lng } = props
  // Load the Google Maps JavaScript API asynchronously
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
    libraries: libraries as Libraries,
  })

  if (!scriptLoaded || loadError) {
    return null
  }

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
