'use client'
import { ContentContainer } from '@components/shared/Container/ContentContainer'
import { Section } from '@components/shared/Section/Section'
import { ContactForm } from '@components/shared/ContactForm/ContactForm'
import { sendMail } from './actions'
import { useActionState } from 'react'
import { MessageBox } from '@components/shared/MessageBox/MessageBox'
import { useTranslations } from 'next-intl'
import { ContactDetails } from '@components/shared/ContactDetails/ContactDetails'

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendMail, null)
  const t = useTranslations('pages.contact')

  return (
    <ContentContainer className='mt-10'>
      <div className='flex flex-col gap-6'>
        <Section headline={t('contact.headline')}>
          <ContactDetails />
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
