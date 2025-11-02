import { ItemWithIcon } from '@/components/expose/ItemWithIcon/ItemWithIcon'
import { IconType } from '@/types/IconType'
import { Typography } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import { iconMapping } from '../../iconMapping'

export type EquipmentFeaturesBlockProps<T extends IconType> = {
  headline: string
  featureTypes?: T[]
}

export const EquipmentFeaturesBlock = <T extends IconType>(props: EquipmentFeaturesBlockProps<T>) => {
  const { headline, featureTypes } = props
  const t = useTranslations('pages.expose.equipmentFeaturesSection')

  if (!featureTypes) {
    return null
  }

  return (
    <div className={twMerge(['flex flex-col gap-2', 'sm:grid sm:max-w-[500px] sm:grid-cols-2'])}>
      <Typography
        variant='heading'
        size={4}
      >
        {headline}
      </Typography>
      <div className='flex flex-col gap-2'>
        {featureTypes.map((type: IconType) => {
          const Icon = iconMapping[type]
          const description = t(`descriptions.${type}`)

          return (
            <ItemWithIcon
              key={type}
              icon={Icon}
              label={description}
            />
          )
        })}
      </div>
    </div>
  )
}
