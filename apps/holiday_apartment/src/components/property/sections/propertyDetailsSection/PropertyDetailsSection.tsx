import { PropertyDetailItem } from '@/components/property/sections/propertyDetailsSection/PropertyDetailItem'
import { getTranslation } from '@/components/property/utils'
import { PropertyConfiguration } from '@/types/PropertyConfiguration'
import { Badge } from '@jan_hoeck/ui'
import { useLocale } from 'next-intl'
import { LuMapPin } from 'react-icons/lu'

export type PropertyDetailsSectionProps = {
  propertyConfig: PropertyConfiguration
}

export const PropertyDetailsSection = (props: PropertyDetailsSectionProps) => {
  const { propertyConfig } = props
  const { location, propertyDetails, title, subtitle } = propertyConfig

  const locale = useLocale()

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <Badge>
          <LuMapPin size={16} />
          {location.address.city}
        </Badge>
      </div>
      <h1 className='font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground'>
        {getTranslation(locale, title)}
      </h1>
      <p className='text-xl text-muted-foreground'>{getTranslation(locale, subtitle)}</p>
      <div className='flex flex-wrap gap-6 pb-6 border-b border-border mt-4'>
        {propertyDetails.map((detail) => (
          <PropertyDetailItem
            key={detail.type}
            detail={detail}
          />
        ))}
      </div>
    </div>
  )
}
