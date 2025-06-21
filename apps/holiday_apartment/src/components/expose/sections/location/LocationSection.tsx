import { Section } from '@components/shared/Section/Section'
import { useTranslations } from 'next-intl'
import { ExposeConfiguration } from '../../types'
import { AddressCard } from './AddressCard'
import { Texts } from '../../Texts/Texts'

export type LocationSectionProps = {
  location: ExposeConfiguration['location']
}

export const LocationSection = (props: LocationSectionProps) => {
  const { location } = props
  const { address, lat, lng, description } = location

  const t = useTranslations('pages.expose.location')
  return (
    <Section headline={t('headline')}>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <Texts texts={description} />
        <AddressCard
          lat={lat}
          lng={lng}
          address={address}
        />
      </div>
    </Section>
  )
}
