import { getTranslation } from '@/components/expose/utils'
import { Location } from '@/types/ExposeConfiguration'
import { safeJoin } from '@/utils/join'
import { Typography } from '@jan_hoeck/ui'
import { useLocale } from 'next-intl'

import { GoogleMaps } from './GoogleMaps'

export type AddressCardProps = {
  lat: number
  lng: number
  address: Location['address']
}

export const AddressCard = (props: AddressCardProps) => {
  const { lat, lng, address } = props
  const locale = useLocale()

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
          {safeJoin([safeJoin([address.street, address.houseNumber], ' '), address.floorApartment], ', ')}
        </Typography>
        <Typography variant='smallText'>{[address.postalCode, address.city].join(' ')}</Typography>
      </div>
      {address.description && (
        <div className='p-2'>
          <Typography variant='smallText'>{getTranslation(locale, address.description)}</Typography>
        </div>
      )}
    </div>
  )
}
