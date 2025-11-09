import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

import { BookItCard } from './BookItPanel/BookItCard'
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
      <ExposeImages imageSources={imageSources} />
      <ContentContainer className='pt-10'>
        <div className='grid lg:grid-cols-3 gap-8 md:gap-12'>
          <div className='lg:col-span-2 space-y-8'>
            <div className='flex flex-col gap-12'>
              {propertySummary && <PropertySummary items={propertySummary} />}
              <DescriptionSection
                title={title}
                description={description}
              />
              <EquipmentFeaturesSection equipmentFeatures={equipmentFeatures} />
              <HouseRulesSection houseRules={houseRules} />
              <LocationDescriptionSection location={location} />
            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='sticky top-24 space-y-6'>
              <BookItCard price={price} />
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}
