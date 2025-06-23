import { useApartmentData } from './useApartmentData'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

export const useExposes = (): ExposeConfiguration[] => {
  const apartment = useApartmentData()

  return [apartment]
}
