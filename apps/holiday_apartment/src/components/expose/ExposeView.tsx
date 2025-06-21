import { ExposeConfiguration } from './types'
import { PropertySummary } from './PropertySummary/PropertySummary'
import { ExposeImages } from './ExposeImages/ExposeImages'
import { ContentContainer } from '@components/shared/Container/ContentContainer'
import { MobileOnly } from '@components/shared/Responsive/MobileOnly'
import { DesktopOnly } from '@components/shared/Responsive/DesktopOnly'
import { LocationSection } from './sections/location/LocationSection'
import { EquipmentFeaturesSection } from './sections/equipmentFeatures/EquipmentFeaturesSection'
import { DescriptionSection } from './sections/descriptionSection/DescriptionSection'

export type ExposeViewProps = {
  configuration: ExposeConfiguration
}

export const ExposeView = (props: ExposeViewProps) => {
  const { configuration } = props
  const { imageSources, headline, description, location, propertySummary, equipmentFeatures } = configuration

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
          <DescriptionSection
            headline={headline}
            description={description}
          />
          <EquipmentFeaturesSection equipmentFeatures={equipmentFeatures} />
          <LocationSection location={location} />
        </div>
      </ContentContainer>
    </div>
  )
}
