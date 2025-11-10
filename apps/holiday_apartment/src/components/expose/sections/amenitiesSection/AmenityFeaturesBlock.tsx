import { AmenityFeatureItem } from '@/components/expose/sections/amenitiesSection/AmenityFeatureItem'
import { IconType } from '@/types/IconType'
import { Typography } from '@jan_hoeck/ui'
import { twMerge } from 'tailwind-merge'

export type EquipmentFeaturesBlockProps<T extends IconType> = {
  headline: string
  featureTypes?: T[]
}

export const AmenityFeaturesBlock = <T extends IconType>(props: EquipmentFeaturesBlockProps<T>) => {
  const { headline, featureTypes } = props

  if (!featureTypes) {
    return null
  }

  return (
    <div className={twMerge(['flex flex-col gap-4', 'sm:grid sm:max-w-[500px] sm:grid-cols-2'])}>
      <span className='text-xl font-serif font-bold text-foreground mb-4 mt-2'>{headline}</span>
      <div className='flex flex-col space-y-2'>
        {featureTypes.map((type) => (
          <AmenityFeatureItem
            key={type}
            type={type}
          />
        ))}
      </div>
    </div>
  )
}
