'use client'
import { PropsWithChildren } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'

export default function PageLayout({ children }: PropsWithChildren) {
  return <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY as string}>{children}</APIProvider>
}
