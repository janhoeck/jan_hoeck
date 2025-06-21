import { Section } from '@components/shared/Section/Section'
import { ExposeConfiguration } from '../../types'
import { Texts } from '../../Texts/Texts'

export type DescriptionSectionProps = {
  headline: ExposeConfiguration['headline']
  description: ExposeConfiguration['description']
}

export const DescriptionSection = (props: DescriptionSectionProps) => {
  const { headline, description } = props
  return (
    <Section headline={headline}>
      <Texts texts={description} />
    </Section>
  )
}
