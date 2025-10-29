import { Section } from '@/components/shared/Section/Section'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { useLocale } from 'next-intl'
import { convertDescription, getTranslation } from '@/components/expose/utils'

export type DescriptionSectionProps = {
  headline: ExposeConfiguration['headline']
  description: ExposeConfiguration['description']
}

export const DescriptionSection = (props: DescriptionSectionProps) => {
  const { headline, description } = props
  const locale = useLocale()

  return (
    <Section headline={getTranslation(locale, headline)}>
      <ContentBlock items={convertDescription(locale, description)} />
    </Section>
  )
}
