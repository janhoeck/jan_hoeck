import { Section } from '@components/shared/Section/Section'
import { ExposeConfiguration } from '../../types'
import { TextDescription } from '../../../shared/TextDescription/TextDescription'

export type DescriptionSectionProps = {
  headline: ExposeConfiguration['headline']
  description: ExposeConfiguration['description']
}

export const DescriptionSection = (props: DescriptionSectionProps) => {
  const { headline, description } = props
  return (
    <Section headline={headline}>
      <TextDescription texts={description} />
    </Section>
  )
}
