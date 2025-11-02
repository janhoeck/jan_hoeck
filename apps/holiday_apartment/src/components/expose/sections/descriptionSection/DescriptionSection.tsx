import { convertDescription, getTranslation } from '@/components/expose/utils'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { Section } from '@/components/shared/Section/Section'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { useLocale } from 'next-intl'

export type DescriptionSectionProps = {
  title: ExposeConfiguration['title']
  description: ExposeConfiguration['description']
}

export const DescriptionSection = (props: DescriptionSectionProps) => {
  const { title, description } = props
  const locale = useLocale()

  return (
    <Section title={getTranslation(locale, title)}>
      <ContentBlock items={convertDescription(locale, description)} />
    </Section>
  )
}
