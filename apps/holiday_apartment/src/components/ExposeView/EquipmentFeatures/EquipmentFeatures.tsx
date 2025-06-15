import { EquipmentFeatures as EquipmentFeaturesType } from '../types'
import { EquipmentFeaturesSection } from './EquipmentFeaturesSection'

export type EquipmentFeaturesProps = {
  features: EquipmentFeaturesType
}

export const EquipmentFeatures = (props: EquipmentFeaturesProps) => {
  const { features } = props

  return (
    <div className='flex flex-col gap-10'>
      <EquipmentFeaturesSection
        headline='Allgemein'
        featureTypes={features.general}
      />
      <EquipmentFeaturesSection
        headline='Außenbereich'
        featureTypes={features.outdoorArea}
      />
      <EquipmentFeaturesSection
        headline='Küche'
        featureTypes={features.kitchen}
      />
      <EquipmentFeaturesSection
        headline='Schlafzimmer'
        featureTypes={features.bedroom}
      />
      <EquipmentFeaturesSection
        headline='Baby'
        featureTypes={features.baby}
      />
    </div>
  )
}
