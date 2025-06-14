import { Typography } from '@jan_hoeck/ui'
import { GoogleMaps } from './GoogleMaps'

export type LocationDescriptionProps = {
  lat: number
  lng: number
  description: string[]
}

export const LocationDescription = (props: LocationDescriptionProps) => {
  const { lat, lng, description } = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        {description.map((text, index) => (
          <Typography
            key={index}
            variant='paragraph'
          >
            {text}
          </Typography>
        ))}
      </div>
      <GoogleMaps
        lat={lat}
        lng={lng}
      />
    </div>
  )
}
