import { EquipmentFeatures as EquipmentFeaturesType } from '@/types/ExposeConfiguration'
import { EquipmentFeaturesBlock } from './EquipmentFeaturesBlock'
import { useTranslations } from 'next-intl'

export type EquipmentFeaturesProps = {
  features: EquipmentFeaturesType
}

export const EquipmentFeatures = (props: EquipmentFeaturesProps) => {
  const { features } = props
  const t = useTranslations('pages.expose.equipmentFeaturesSection.subHeadlines')

  return (
    <div className='flex flex-col gap-10'>
      <EquipmentFeaturesBlock
        headline={t('general')}
        featureTypes={features.general}
      />
      <EquipmentFeaturesBlock
        headline={t('outdoorArea')}
        featureTypes={features.outdoorArea}
      />
      <EquipmentFeaturesBlock
        headline={t('kitchen')}
        featureTypes={features.kitchen}
      />
      <EquipmentFeaturesBlock
        headline={t('bedroom')}
        featureTypes={features.bedroom}
      />
      <EquipmentFeaturesBlock
        headline={t('bathroom')}
        featureTypes={features.bathroom}
      />
      <EquipmentFeaturesBlock
        headline={t('baby')}
        featureTypes={features.baby}
      />
    </div>
  )
}
