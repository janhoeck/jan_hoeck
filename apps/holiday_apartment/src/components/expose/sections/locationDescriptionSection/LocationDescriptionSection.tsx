import { Section } from '@/components/shared/Section/Section'
import { useTranslations } from 'next-intl'
import { AddressCard } from './AddressCard'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

export type LocationDescriptionSectionProps = {
  location: ExposeConfiguration['location']
}

export const LocationDescriptionSection = (props: LocationDescriptionSectionProps) => {
  const { location } = props
  const { address, lat, lng, description } = location

  const t = useTranslations('pages.expose.locationDescriptionSection')
  return (
    <Section headline={t('headline')}>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <ContentBlock items={description} />
        <AddressCard
          lat={lat}
          lng={lng}
          address={address}
        />
      </div>
    </Section>
  )
}
