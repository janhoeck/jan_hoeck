'use client'

import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { GuestbookForm } from '@/components/shared/GuestbookForm/GuestbookForm'
import { Section } from '@/components/shared/Section/Section'
import { Typography } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'
import { useActionState } from 'react'

export type EmptyGuestbookViewProps = {
  serverAction: (state: any, formData: FormData) => void
}

export const EmptyGuestbookView = (props: EmptyGuestbookViewProps) => {
  const { serverAction } = props
  const t = useTranslations('pages.guestbook')
  const [, formAction, isPending] = useActionState(serverAction, null)

  return (
    <ContentContainer className='mt-10'>
      <Section headline={t('headline')}>
        <div className='flex max-w-[550px] flex-col gap-6'>
          <Section
            headline={t('empty.headline')}
            variant='subsection'
          >
            <Typography>{t('empty.text')}</Typography>
          </Section>
          <GuestbookForm
            action={formAction}
            isPending={isPending}
          />
        </div>
      </Section>
    </ContentContainer>
  )
}
