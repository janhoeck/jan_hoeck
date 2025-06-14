import { ContentContainer } from '../../../components/Container/ContentContainer'
import { Section } from '../../../components/Section/Section'
import { Typography } from '@jan_hoeck/ui'
import { PiPhoneCallLight, PiEnvelopeOpenLight } from 'react-icons/pi'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <ContentContainer className='pt-10'>
      <Section headline='Kontakt'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <PiPhoneCallLight size={35} />
            <Link
              href='tel:+43 1111 111111'
              scroll
            >
              <Typography>+43 1111 111111</Typography>
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <PiEnvelopeOpenLight size={35} />
            <Link
              href='mailto:jan.hoeck@gmx.net'
              scroll
            >
              <Typography>jan.hoeck@gmx.net</Typography>
            </Link>
          </div>
        </div>
      </Section>
    </ContentContainer>
  )
}
