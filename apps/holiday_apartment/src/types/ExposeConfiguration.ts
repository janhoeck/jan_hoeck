import { ContentBlock } from './ContentBlock'
import { Address } from './Address'
import { IconType } from './IconType'

export type PropertySummaryType = 'bedroom' | 'bed' | 'bathroom' | 'group'

export type EquipmentFeatures = {
  general?: Extract<
    IconType,
    | 'barrier_free'
    | 'elevator'
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
  outdoorArea?: Extract<IconType, 'pool' | 'balcony' | 'terrace'>[]
  kitchen?: Extract<
    IconType,
    'refrigerator' | 'freezer' | 'cooker' | 'oven' | 'microwave' | 'coffee_machine' | 'pots_pans' | 'dishes' | 'kettle'
  >[]
  bathroom?: Extract<IconType, 'shower' | 'bathtub' | 'hairdryer' | 'towels'>[]
  bedroom?: Extract<IconType, 'bed_linen'>[]
  baby?: Extract<IconType, 'baby_bed' | 'high_chair'>[]
}

export type PropertySummaryItem = {
  type: PropertySummaryType
  amount: number
}

export type Location = {
  lat: number
  lng: number
  address: Partial<Address>
  description: ContentBlock
}

export type HouseRules = {
  checkIn: string
  checkOut: string
  rules: Extract<IconType, 'pet' | 'party' | 'smoking'>[]
  description?: ContentBlock
}

export type ExposeConfiguration = {
  id: string
  imageSources: string[]
  headline: string
  description: ContentBlock
  price: {
    perNight: string
    cleaning?: string
  }
  location: Location
  propertySummary: PropertySummaryItem[]
  equipmentFeatures: EquipmentFeatures
  houseRules: HouseRules
}
