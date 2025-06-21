import { EquipmentFeatures as EquipmentFeaturesType } from '../../types'
import { EquipmentFeaturesItem } from './EquipmentFeaturesItem'
import { useTranslations } from 'next-intl'

export type EquipmentFeaturesProps = {
  features: EquipmentFeaturesType
}

export const EquipmentFeatures = (props: EquipmentFeaturesProps) => {
  const { features } = props
  const t = useTranslations('pages.expose.equipmentFeatures.subHeadlines')

  return (
    <div className='flex flex-col gap-10'>
      <EquipmentFeaturesItem
        headline={t('general')}
        featureTypes={features.general}
      />
      <EquipmentFeaturesItem
        headline={t('outdoorArea')}
        featureTypes={features.outdoorArea}
      />
      <EquipmentFeaturesItem
        headline={t('kitchen')}
        featureTypes={features.kitchen}
      />
      <EquipmentFeaturesItem
        headline={t('bedroom')}
        featureTypes={features.bedroom}
      />
      <EquipmentFeaturesItem
        headline={t('baby')}
        featureTypes={features.baby}
      />
    </div>
  )
}
