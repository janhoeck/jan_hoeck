'use client'

import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { GuestbookForm } from '@/components/shared/GuestbookForm/GuestbookForm'
import { Section } from '@/components/shared/Section/Section'
import { Typography } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useActionState, useEffect } from 'react'

import { GuestbookCard } from './card/GuestbookCard'

type GuestbookViewProps = {
  serverAction: (state: any, formData: FormData) => void
  entries: {
    id: number
    created_at: string
    name: string
    message: string
    rating: number
  }[]
}

export const GuestbookView = (props: GuestbookViewProps) => {
  const { entries, serverAction } = props
  const t = useTranslations('pages.guestbook')

  const [, formAction, isPending] = useActionState(serverAction, null)

  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    if (id) {
      const element = document.getElementById(`guestbook_entry_${id}`)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [id])

  return (
    <ContentContainer className='mt-10'>
      <Section title={t('headline')}>
        <div className='flex flex-col gap-6'>
          <Section
            title={t('descriptions.1/headline')}
            variant='subsection'
          >
            <div className='flex max-w-[550px] flex-col gap-4'>
              <Typography>{t('descriptions.1')}</Typography>
              <GuestbookForm
                action={formAction}
                isPending={isPending}
              />
            </div>
          </Section>
          <Section
            title={t('descriptions.2/headline')}
            variant='subsection'
          >
            <div className='flex flex-col gap-6'>
              {entries.map((guestbookEntry) => (
                <GuestbookCard
                  id={guestbookEntry.id}
                  key={guestbookEntry.id}
                  name={guestbookEntry.name}
                  message={guestbookEntry.message}
                  createdAt={guestbookEntry.created_at}
                  rating={guestbookEntry.rating}
                />
              ))}
            </div>
          </Section>
        </div>
      </Section>
    </ContentContainer>
  )
}
