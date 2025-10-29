import { IconType as ReactIconType } from 'react-icons'
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
  PiWine,
  PiElevator,
  PiCigarette,
  PiArrowRight,
  PiArrowLeft,
} from 'react-icons/pi'
import { GiVacuumCleaner, GiClothesline } from 'react-icons/gi'
import { TbAirConditioning } from 'react-icons/tb'
import { LuMicrowave } from 'react-icons/lu'
import { LuAlarmSmoke } from 'react-icons/lu'
import { TbCooker, TbTeapot } from 'react-icons/tb'
import { LuRefrigerator, LuPartyPopper } from 'react-icons/lu'
import { MdOutlinePets, MdBalcony, MdOutlineDeck } from 'react-icons/md'
import { FaKitchenSet, FaMattressPillow } from 'react-icons/fa6'
import { IconType } from '../../types/IconType'

export const iconMapping: Record<IconType, ReactIconType> = {
  air_conditioner: TbAirConditioning,
  baby_bed: PiBed,
  balcony: MdBalcony,
  barrier_free: PiWheelchair,
  elevator: PiElevator,
  bathtub: PiBathtub,
  bed_linen: FaMattressPillow,
  coffee_machine: PiCoffee,
  cooker: TbCooker,
  dishes: PiWine,
  fire_extinguisher: PiFireExtinguisher,
  freezer: LuRefrigerator,
  hairdryer: PiHairDryer,
  high_chair: PiChair,
  microwave: LuMicrowave,
  oven: PiOven,
  pots_pans: FaKitchenSet,
  refrigerator: LuRefrigerator,
  shower: PiShower,
  smoke_detector: LuAlarmSmoke,
  terrace: MdOutlineDeck,
  towels: PiTowel,
  vacuum: GiVacuumCleaner,
  washing_rack: GiClothesline,
  parking: PiCarSimple,
  tv: PiTelevision,
  wlan: PiWifiHigh,
  washing_machine: PiWashingMachine,
  pool: PiSwimmingPool,
  kettle: TbTeapot,
  party: LuPartyPopper,
  pet: MdOutlinePets,
  smoking: PiCigarette,
  checkin: PiArrowRight,
  checkout: PiArrowLeft,
}
