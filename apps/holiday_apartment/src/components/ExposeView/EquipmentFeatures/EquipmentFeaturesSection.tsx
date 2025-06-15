import { EquipmentFeatureType } from '../types'
import { Typography } from '@jan_hoeck/ui'
import { iconMapping } from './iconMapping'
import { twMerge } from 'tailwind-merge'
import { descriptionMapping } from './descriptionMapping'

export type EquipmentFeaturesSection<T extends EquipmentFeatureType> = {
  headline: string
  featureTypes?: T[]
}

export const EquipmentFeaturesSection = <T extends EquipmentFeatureType>(props: EquipmentFeaturesSection<T>) => {
  const { headline, featureTypes } = props

  if (!featureTypes) {
    return null
  }

  return (
    <div className={twMerge(['flex flex-col gap-2', 'sm:grid sm:max-w-[600px] sm:grid-cols-[1fr_1fr]'])}>
      <Typography
        variant='heading'
        size={4}
      >
        {headline}
      </Typography>
      <div className='flex flex-col gap-2'>
        {featureTypes.map((type: EquipmentFeatureType) => {
          const Icon = iconMapping[type]
          const description = descriptionMapping[type]

          return (
            <div
              key={type}
              className='flex items-center gap-2'
            >
              <Icon size={25} />
              <Typography>{description}</Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}
