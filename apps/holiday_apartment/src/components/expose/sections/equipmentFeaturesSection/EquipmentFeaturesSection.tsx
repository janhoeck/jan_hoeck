import { EquipmentFeatures } from './EquipmentFeatures'
import { Section } from '@/components/shared/Section/Section'
import { useTranslations } from 'next-intl'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

export type EquipmentFeaturesSectionProps = {
  equipmentFeatures: ExposeConfiguration['equipmentFeatures']
}

export const EquipmentFeaturesSection = (props: EquipmentFeaturesSectionProps) => {
  const { equipmentFeatures } = props
  const t = useTranslations('pages.expose.equipmentFeaturesSection')
  return (
    <Section headline={t('headline')}>
      <EquipmentFeatures features={equipmentFeatures} />
    </Section>
  )
}
