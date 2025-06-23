import { PropertySummary } from './PropertySummary/PropertySummary'
import { ExposeImages } from './ExposeImages/ExposeImages'
import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { MobileOnly } from '@/components/shared/Responsive/MobileOnly'
import { DesktopOnly } from '@/components/shared/Responsive/DesktopOnly'
import { LocationDescriptionSection } from './sections/locationDescriptionSection/LocationDescriptionSection'
import { EquipmentFeaturesSection } from './sections/equipmentFeaturesSection/EquipmentFeaturesSection'
import { DescriptionSection } from './sections/descriptionSection/DescriptionSection'
import { BookItPanel } from './BookItPanel/BookItPanel'
import { HouseRulesSection } from './sections/houseRulesSection/HouseRulesSection'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

export type ExposeViewProps = {
  configuration: ExposeConfiguration
}

export const ExposeView = (props: ExposeViewProps) => {
  const { configuration } = props
  const { imageSources, headline, description, price, location, houseRules, propertySummary, equipmentFeatures } =
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
            headline={headline}
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
