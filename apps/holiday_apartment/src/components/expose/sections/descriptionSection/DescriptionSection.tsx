import { Section } from '@/components/shared/Section/Section'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

export type DescriptionSectionProps = {
  headline: ExposeConfiguration['headline']
  description: ExposeConfiguration['description']
}

export const DescriptionSection = (props: DescriptionSectionProps) => {
  const { headline, description } = props
  return (
    <Section headline={headline}>
      <ContentBlock items={description} />
    </Section>
  )
}
