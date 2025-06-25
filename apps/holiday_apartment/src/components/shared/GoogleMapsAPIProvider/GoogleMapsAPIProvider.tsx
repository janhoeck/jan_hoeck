'use client'
import { PropsWithChildren } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'

export const GoogleMapsAPIProvider = ({ children }: PropsWithChildren) => {
  return <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>{children}</APIProvider>
}
