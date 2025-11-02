'use client'

import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { Button, Typography } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import { Link } from '../../../i18n/navigation'

export type BookItPanelProps = {
  price: ExposeConfiguration['price']
}

export const BookItPanel = (props: BookItPanelProps) => {
  const { price } = props
  const { perNight, cleaning } = price
  const t = useTranslations('pages.expose.bookIt')

  return (
    <div
      className={twMerge([
        'flex gap-4 rounded-md border border-neutral-300 bg-white p-4',
        'flex-col items-baseline sm:flex-row sm:items-center sm:justify-between',
      ])}
    >
      <div>
        <div className='flex gap-1'>
          <Typography
            variant='heading'
            size={5}
          >
            {perNight}
          </Typography>
          <Typography>{t('perNight')}</Typography>
        </div>
        {cleaning && (
          <Typography variant='smallText'>
            {t('cleaning', {
              cleaning,
            })}
          </Typography>
        )}
      </div>
      <Button
        as={Link}
        href='/contact'
        variant='basic'
      >
        {t('contact')}
      </Button>
    </div>
  )
}
