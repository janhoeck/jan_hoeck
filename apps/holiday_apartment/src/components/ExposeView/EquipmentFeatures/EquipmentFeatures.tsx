import { EquipmentFeatures as EquipmentFeaturesType } from '../types'
import { EquipmentFeaturesSection } from './EquipmentFeaturesSection'
import { useTranslations } from 'next-intl'

export type EquipmentFeaturesProps = {
  features: EquipmentFeaturesType
}

export const EquipmentFeatures = (props: EquipmentFeaturesProps) => {
  const { features } = props
  const t = useTranslations('components.exposeView.equipmentFeatures.subHeadlines')

  return (
    <div className='flex flex-col gap-10'>
      <EquipmentFeaturesSection
        headline={t('general')}
        featureTypes={features.general}
      />
      <EquipmentFeaturesSection
        headline={t('outdoorArea')}
        featureTypes={features.outdoorArea}
      />
      <EquipmentFeaturesSection
        headline={t('kitchen')}
        featureTypes={features.kitchen}
      />
      <EquipmentFeaturesSection
        headline={t('bedroom')}
        featureTypes={features.bedroom}
      />
      <EquipmentFeaturesSection
        headline={t('baby')}
        featureTypes={features.baby}
      />
    </div>
  )
}
