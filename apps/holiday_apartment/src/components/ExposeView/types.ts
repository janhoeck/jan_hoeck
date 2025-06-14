export type PropertySummaryType = 'bedroom' | 'bed' | 'bathroom' | 'wlan' | 'accessibility' | 'pool'
export type EquipmentFeatureType = 'wlan' | 'kitchen' | 'tv' | 'parking' | 'washing_machine' | 'pool'

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
  equipmentFeatures?: EquipmentFeatureType[]
}
