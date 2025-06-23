import { Typography } from '@jan_hoeck/ui'
import { iconMapping } from '../../iconMapping'
import { twMerge } from 'tailwind-merge'
import { useTranslations } from 'next-intl'
import { ItemWithIcon } from '@/components/expose/ItemWithIcon/ItemWithIcon'
import { IconType } from '@/types/IconType'

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
    <div className={twMerge(['flex flex-col gap-2', 'sm:grid sm:max-w-[600px] sm:grid-cols-[1fr_1fr]'])}>
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
