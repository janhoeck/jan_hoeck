import { convertDescription } from '@/components/expose/utils'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { Section } from '@/components/shared/Section/Section'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { useLocale, useTranslations } from 'next-intl'

import { AddressCard } from './AddressCard'

export type LocationDescriptionSectionProps = {
  location: ExposeConfiguration['location']
}

export const LocationDescriptionSection = (props: LocationDescriptionSectionProps) => {
  const { location } = props
  const { address, lat, lng, description } = location
  const t = useTranslations('pages.expose.locationDescriptionSection')
  const locale = useLocale()

  return (
    <Section title={t('headline')}>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <ContentBlock items={convertDescription(locale, description)} />
        <AddressCard
          lat={lat}
          lng={lng}
          address={address}
        />
      </div>
    </Section>
  )
}
