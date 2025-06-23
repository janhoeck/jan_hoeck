import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { Section } from '@/components/shared/Section/Section'
import { ContactDetails } from '@/components/shared/ContactDetails/ContactDetails'

export default function ImprintPage() {
  return (
    <ContentContainer className='mt-10'>
      <Section headline='Impressum'>
        <ContactDetails />
      </Section>
    </ContentContainer>
  )
}
