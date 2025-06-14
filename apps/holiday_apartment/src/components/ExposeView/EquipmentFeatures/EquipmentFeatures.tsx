import { EquipmentFeatureType } from '../types'
import { ReactElement } from 'react'
import {
  PiWashingMachineLight,
  PiWifiHighLight,
  PiTelevisionLight,
  PiCarSimpleLight,
  PiOvenLight,
  PiSwimmingPoolLight,
} from 'react-icons/pi'
import { Typography } from '@jan_hoeck/ui'

export type EquipmentFeaturesProps = {
  features: EquipmentFeatureType[]
}

const iconMapping: Record<EquipmentFeatureType, ReactElement> = {
  kitchen: <PiOvenLight size={25} />,
  parking: <PiCarSimpleLight size={25} />,
  tv: <PiTelevisionLight size={25} />,
  wlan: <PiWifiHighLight size={25} />,
  washing_machine: <PiWashingMachineLight size={25} />,
  pool: <PiSwimmingPoolLight size={25} />,
}

const descriptionMapping: Record<EquipmentFeatureType, string> = {
  kitchen: 'Vollausgestattete Küche',
  parking: 'Parkmöglichkeit',
  tv: 'Fernsehr',
  washing_machine: 'Waschmaschine',
  wlan: 'WiFi',
  pool: 'Pool',
}

export const EquipmentFeatures = (props: EquipmentFeaturesProps) => {
  const { features } = props
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,_auto))] gap-4'>
      {features.map((featureType) => {
        const icon = iconMapping[featureType]
        const description = descriptionMapping[featureType]
        return (
          <div
            key={featureType}
            className='flex items-center gap-2'
          >
            {icon}
            <Typography
              noWrap
              variant='smallText'
            >
              {description}
            </Typography>
          </div>
        )
      })}
    </div>
  )
}
