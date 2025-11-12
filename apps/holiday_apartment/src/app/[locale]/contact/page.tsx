'use client'

import { ContactDetails } from '@/components/shared/ContactDetails/ContactDetails'
import { ContactForm } from '@/components/shared/ContactForm/ContactForm'
import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { MessageBox } from '@/components/shared/MessageBox/MessageBox'
import { Section } from '@/components/shared/Section/Section'
import { useTranslations } from 'next-intl'
import { useActionState } from 'react'

import { sendMail } from './actions'

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendMail, null)
  const t = useTranslations('pages.contact')

  return (
    <ContentContainer className='mt-10'>
      <div className='flex flex-col gap-6'>
        <Section title={t('contact.headline')}>
          <ContactDetails />
        </Section>
        <Section title={t('enquiry.headline')}>
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
