import { Section } from '@/components/shared/Section/Section'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { useTranslations } from 'next-intl'

import { EquipmentFeatures } from './EquipmentFeatures'

export type EquipmentFeaturesSectionProps = {
  equipmentFeatures: ExposeConfiguration['equipmentFeatures']
}

export const EquipmentFeaturesSection = (props: EquipmentFeaturesSectionProps) => {
  const { equipmentFeatures } = props
  const t = useTranslations('pages.expose.equipmentFeaturesSection')
  return (
    <Section title={t('headline')}>
      <EquipmentFeatures features={equipmentFeatures} />
    </Section>
  )
}
