'use client'
import { Libraries, LoadScript } from '@react-google-maps/api'
import { useLocale } from 'next-intl'
import { ReactNode } from 'react'

export type GoogleMapsAPIProviderProps = {
  children: ReactNode
}

export const GoogleMapsAPIProvider = (props: GoogleMapsAPIProviderProps) => {
  const { children } = props
  const currentLocale = useLocale()
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
  return (
    <LoadScript
      key={currentLocale}
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      libraries={['places', 'drawing', 'geometry'] as Libraries}
      language={currentLocale}
    >
      {children}
    </LoadScript>
  )
}
