import { ExposeConfiguration } from './types'
import { PropertySummary } from './PropertySummary/PropertySummary'
import { Typography } from '@jan_hoeck/ui'
import { ExposeImages } from './ExposeImages/ExposeImages'
import { EquipmentFeatures } from './EquipmentFeatures/EquipmentFeatures'
import { LocationDescription } from './LocationDescription/LocationDescription'
import { useTranslations } from 'next-intl'
import { ContentContainer } from '@components/shared/Container/ContentContainer'
import { MobileOnly } from '@components/shared/Responsive/MobileOnly'
import { DesktopOnly } from '@components/shared/Responsive/DesktopOnly'
import { Section } from '@components/shared/Section/Section'

export type ExposeViewProps = {
  configuration: ExposeConfiguration
}

export const ExposeView = (props: ExposeViewProps) => {
  const { configuration } = props
  const { imageSources, headline, description, location, propertySummary, equipmentFeatures } = configuration

  const t = useTranslations('pages.expose')

  return (
    <div>
      <MobileOnly>
        <ExposeImages imageSources={imageSources} />
      </MobileOnly>
      <ContentContainer className='pt-10'>
        <div className='flex flex-col gap-12'>
          <DesktopOnly>
            <ExposeImages imageSources={imageSources} />
          </DesktopOnly>
          {propertySummary && <PropertySummary items={propertySummary} />}
          <Section headline={headline}>
            <Typography variant='paragraph'>{description}</Typography>
          </Section>
          {equipmentFeatures && (
            <Section headline={t('equipmentFeatures.headline')}>
              <EquipmentFeatures features={equipmentFeatures} />
            </Section>
          )}
          <Section headline={t('location.headline')}>
            <LocationDescription
              lat={location.lat}
              lng={location.lng}
              description={location.description}
            />
          </Section>
        </div>
      </ContentContainer>
    </div>
  )
}
