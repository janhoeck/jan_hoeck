'use client'
import { ContentContainer } from '@components/shared/Container/ContentContainer'
import { Section } from '@components/shared/Section/Section'
import { Typography } from '@jan_hoeck/ui'
import { PiEnvelopeOpenLight, PiPhoneCallLight } from 'react-icons/pi'
import Link from 'next/link'
import { ContactForm } from '@components/shared/ContactForm/ContactForm'
import { sendMail } from './actions'
import { useActionState } from 'react'
import { MessageBox } from '@components/shared/MessageBox/MessageBox'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendMail, null)
  const t = useTranslations('pages.contact')

  return (
    <ContentContainer className='mt-10'>
      <div className='flex flex-col gap-6'>
        <Section headline={t('contact.headline')}>
          <div className='flex flex-col gap-2'>
            <div>
              <Typography>Olaf und Tina Asbach</Typography>
              <Typography>Calle Fernando Dodero 12</Typography>
              <Typography>30368 Los Urrutias</Typography>
              <Typography>Murcia</Typography>
            </div>
            <div className='flex items-center gap-4'>
              <PiPhoneCallLight size={30} />
              <Link href='tel:+34604482002'>
                <Typography>+34 604 482 002</Typography>
              </Link>
              <Link href='tel:+491764736718'>
                <Typography>+49 176 47 36 7 18</Typography>
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <PiEnvelopeOpenLight size={30} />
              <Link href='mailto:casas.marmenor@gmx.de'>
                <Typography>casas.marmenor@gmx.de</Typography>
              </Link>
            </div>
          </div>
        </Section>
        <Section headline={t('enquiry.headline')}>
          <div className='flex max-w-[550px] flex-col gap-4'>
            {state && <MessageBox type='success'>{t('enquiry.successMessage')}</MessageBox>}
            {state === false && <MessageBox type='error'>{t('enquiry.errorMessage')}</MessageBox>}
            <ContactForm
              action={formAction}
              isPending={isPending}
            />
          </div>
        </Section>
      </div>
    </ContentContainer>
  )
}
