export type PropertySummaryType = 'bedroom' | 'bed' | 'bathroom' | 'wlan' | 'accessibility' | 'pool'
export type EquipmentFeatureType =
  | 'pool'
  | 'parking'
  | 'air_conditioner'
  | 'wlan'
  | 'tv'
  | 'barrier_free'
  | 'refrigerator'
  | 'freezer'
  | 'cooker'
  | 'oven'
  | 'microwave'
  | 'coffee_machine'
  | 'pots_pans'
  | 'dishes'
  | 'bed_linen'
  | 'shower'
  | 'bathtub'
  | 'hairdryer'
  | 'towels'
  | 'vacuum'
  | 'washing_machine'
  | 'washing_rack'
  | 'baby_bed'
  | 'high_chair'
  | 'terrace'
  | 'balcony'
  | 'fire_extinguisher'
  | 'smoke_detector'

export type EquipmentFeatures = {
  general?: Extract<
    EquipmentFeatureType,
    | 'barrier_free'
    | 'fire_extinguisher'
    | 'smoke_detector'
    | 'parking'
    | 'air_conditioner'
    | 'tv'
    | 'wlan'
    | 'vacuum'
    | 'washing_machine'
    | 'washing_rack'
  >[]
  outdoorArea?: Extract<EquipmentFeatureType, 'pool' | 'balcony' | 'terrace'>[]
  kitchen?: Extract<
    EquipmentFeatureType,
    'refrigerator' | 'freezer' | 'cooker' | 'oven' | 'microwave' | 'coffee_machine' | 'pots_pans' | 'dishes'
  >[]
  bathroom?: Extract<EquipmentFeatureType, 'shower' | 'bathtub' | 'hairdryer' | 'towels'>[]
  bedroom?: Extract<EquipmentFeatureType, 'bed_linen'>[]
  baby?: Extract<EquipmentFeatureType, 'baby_bed' | 'high_chair'>[]
}

export type PropertySummaryItem = {
  type: PropertySummaryType
  description: string
}

export type Location = {
  lat: number
  lng: number
  description: string[]
}

export type ExposeConfiguration = {
  imageSources: string[]
  headline: string
  description: string
  location: Location
  propertySummary?: PropertySummaryItem[]
  equipmentFeatures: EquipmentFeatures
}
