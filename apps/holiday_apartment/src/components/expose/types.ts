export type PropertySummaryType = 'bedroom' | 'bed' | 'bathroom' | 'group'
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
  amount: number
}

type Address = {
  building: string
  street: string
  houseNumber: string
  floorApartment: string
  postalCode: string
  city: string
  country: string
}

export type Location = {
  lat: number
  lng: number
  address: Partial<Address>
  description: Description
}

export type Description = Array<string | { text: string; bulletpoints: string[] }>

export type ExposeConfiguration = {
  id: string
  imageSources: string[]
  headline: string
  description: Description
  location: Location
  propertySummary?: PropertySummaryItem[]
  equipmentFeatures: EquipmentFeatures
}
