import { PropertyImages } from '@/components/property/PropertyImages/PropertyImages'
import { AmenitiesSection } from '@/components/property/sections/amenitiesSection/AmenitiesSection'
import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { PropertyConfiguration } from '@/types/PropertyConfiguration'

import { BookItCard } from './BookItPanel/BookItCard'
import { DescriptionSection } from './sections/descriptionSection/DescriptionSection'
import { HouseRulesSection } from './sections/houseRulesSection/HouseRulesSection'
import { LocationDescriptionSection } from './sections/locationDescriptionSection/LocationDescriptionSection'
import { PropertyDetailsSection } from './sections/propertyDetailsSection/PropertyDetailsSection'

export type PropertyViewProps = {
  configuration: PropertyConfiguration
}

export const PropertyView = (props: PropertyViewProps) => {
  const { configuration } = props

  return (
    <div>
      <PropertyImages imageSources={configuration.imageSources} />
      <ContentContainer className='pt-10'>
        <div className='grid lg:grid-cols-3 gap-8 md:gap-12'>
          <div className='lg:col-span-2 space-y-8'>
            <div className='flex flex-col gap-12'>
              <PropertyDetailsSection propertyConfig={configuration} />
              <DescriptionSection propertyConfig={configuration} />
              <AmenitiesSection propertyConfig={configuration} />
              <HouseRulesSection propertyConfig={configuration} />
              <LocationDescriptionSection propertyConfig={configuration} />
            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='sticky top-24 space-y-6'>
              <BookItCard price={configuration.price} />
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}
