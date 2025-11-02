import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { DesktopOnly } from '@/components/shared/Responsive/DesktopOnly'
import { MobileOnly } from '@/components/shared/Responsive/MobileOnly'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

import { BookItPanel } from './BookItPanel/BookItPanel'
import { ExposeImages } from './ExposeImages/ExposeImages'
import { PropertySummary } from './PropertySummary/PropertySummary'
import { DescriptionSection } from './sections/descriptionSection/DescriptionSection'
import { EquipmentFeaturesSection } from './sections/equipmentFeaturesSection/EquipmentFeaturesSection'
import { HouseRulesSection } from './sections/houseRulesSection/HouseRulesSection'
import { LocationDescriptionSection } from './sections/locationDescriptionSection/LocationDescriptionSection'

export type ExposeViewProps = {
  configuration: ExposeConfiguration
}

export const ExposeView = (props: ExposeViewProps) => {
  const { configuration } = props
  const { imageSources, title, description, price, location, houseRules, propertySummary, equipmentFeatures } =
    configuration

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
          <BookItPanel price={price} />
          {propertySummary && <PropertySummary items={propertySummary} />}
          <DescriptionSection
            title={title}
            description={description}
          />
          <EquipmentFeaturesSection equipmentFeatures={equipmentFeatures} />
          <HouseRulesSection houseRules={houseRules} />
          <LocationDescriptionSection location={location} />
        </div>
      </ContentContainer>
    </div>
  )
}
