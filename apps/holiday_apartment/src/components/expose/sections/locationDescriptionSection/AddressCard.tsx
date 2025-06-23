import { GoogleMaps } from './GoogleMaps'
import { Typography } from '@jan_hoeck/ui'
import { Location } from '@/types/ExposeConfiguration'

export type AddressCardProps = {
  lat: number
  lng: number
  address: Location['address']
}

export const AddressCard = (props: AddressCardProps) => {
  const { lat, lng, address } = props

  return (
    <div className='h-fit w-full rounded-md border border-neutral-300 bg-white sm:min-w-[320px]'>
      <GoogleMaps
        className='h-[320px] w-full overflow-hidden rounded-t-md'
        lat={lat}
        lng={lng}
      />
      <div className='p-2'>
        <Typography variant='smallText'>{address.building}</Typography>
        <Typography variant='smallText'>
          {[[address.street, address.postalCode].join(' '), address.floorApartment].join(', ')}
        </Typography>
        <Typography variant='smallText'>{[address.postalCode, address.city].join(' ')}</Typography>
      </div>
    </div>
  )
}
