import { convertDescription } from '@/components/expose/utils'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { Section } from '@/components/shared/Section/Section'
import { PropertyConfiguration } from '@/types/PropertyConfiguration'
import { useLocale } from 'next-intl'

export type DescriptionSectionProps = {
  propertyConfig: PropertyConfiguration
}

export const DescriptionSection = (props: DescriptionSectionProps) => {
  const { propertyConfig } = props
  const locale = useLocale()

  return (
    <Section title='Beschreibung'>
      <ContentBlock items={convertDescription(locale, propertyConfig.description)} />
    </Section>
  )
}
