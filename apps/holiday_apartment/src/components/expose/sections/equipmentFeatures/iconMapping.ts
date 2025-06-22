import { EquipmentFeatureType } from '../../types'
import { IconType } from 'react-icons'
import {
  PiCarSimple,
  PiOven,
  PiSwimmingPool,
  PiTelevision,
  PiWashingMachine,
  PiWifiHigh,
  PiBathtub,
  PiWheelchair,
  PiCoffee,
  PiShower,
  PiFireExtinguisher,
  PiTowel,
  PiBed,
  PiChair,
  PiHairDryer,
  PiAsteriskSimple,
  PiWine,
} from 'react-icons/pi'
import { GiVacuumCleaner } from 'react-icons/gi'
import { TbAirConditioning } from 'react-icons/tb'
import { LuMicrowave } from 'react-icons/lu'
import { LuAlarmSmoke } from 'react-icons/lu'
import { TbCooker } from 'react-icons/tb'
import { LuRefrigerator } from 'react-icons/lu'

export const iconMapping: Record<EquipmentFeatureType, IconType> = {
  air_conditioner: TbAirConditioning,
  baby_bed: PiBed,
  balcony: PiAsteriskSimple,
  barrier_free: PiWheelchair,
  bathtub: PiBathtub,
  bed_linen: PiAsteriskSimple,
  coffee_machine: PiCoffee,
  cooker: TbCooker,
  dishes: PiWine,
  fire_extinguisher: PiFireExtinguisher,
  freezer: PiAsteriskSimple,
  hairdryer: PiHairDryer,
  high_chair: PiChair,
  microwave: LuMicrowave,
  oven: PiOven,
  pots_pans: PiAsteriskSimple,
  refrigerator: LuRefrigerator,
  shower: PiShower,
  smoke_detector: LuAlarmSmoke,
  terrace: PiAsteriskSimple,
  towels: PiTowel,
  vacuum: GiVacuumCleaner,
  washing_rack: PiAsteriskSimple,
  parking: PiCarSimple,
  tv: PiTelevision,
  wlan: PiWifiHigh,
  washing_machine: PiWashingMachine,
  pool: PiSwimmingPool,
  kettle: PiAsteriskSimple,
}
