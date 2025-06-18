'use client'
import { ContentContainer } from '../../../components/Container/ContentContainer'
import { Section } from '../../../components/Section/Section'
import { Typography } from '@jan_hoeck/ui'
import { PiEnvelopeOpenLight, PiPhoneCallLight } from 'react-icons/pi'
import Link from 'next/link'
import { ContactForm } from '../../../components/ContactForm/ContactForm'
import { sendMail } from './actions'
import { useActionState } from 'react'
import { MessageBox } from '../../../components/MessageBox/MessageBox'
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
              <Typography>Olaf & Tina Asbach</Typography>
              <Typography>Irgendwo in Spanien</Typography>
              <Typography>Murcia</Typography>
            </div>
            <div className='flex items-center gap-4'>
              <PiPhoneCallLight size={30} />
              <Link href='tel:+43 1111 111111'>
                <Typography>+43 1111 111111</Typography>
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <PiEnvelopeOpenLight size={30} />
              <Link href='mailto:jan.hoeck@gmx.net'>
                <Typography>jan.hoeck@gmx.net</Typography>
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
