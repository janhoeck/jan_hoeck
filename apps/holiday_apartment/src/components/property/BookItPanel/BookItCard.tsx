'use client'

import { PropertyConfiguration } from '@/types/PropertyConfiguration'
import { Button, Card, CardContent } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'
import { PiEnvelopeOpenLight, PiPhoneCallLight } from 'react-icons/pi'

import { Link } from '../../../i18n/navigation'

export type BookItPanelProps = {
  price: PropertyConfiguration['price']
}

export const BookItCard = (props: BookItPanelProps) => {
  const { price } = props
  const { perNight, cleaning } = price
  const t = useTranslations('pages.property.bookIt')

  return (
    <Card withBorder>
      <CardContent className='space-y-6'>
        <div>
          <div className='text-3xl font-bold text-foreground mb-2'>
            {perNight}
            <span className='text-lg font-normal text-muted-foreground'> / {t('perNight')}</span>
          </div>
          <div className='text-sm text-muted-foreground'>{t('cleaning', { cleaning: cleaning ?? '' })}</div>
        </div>
        <div className='space-y-4'>
          <Button
            fullWidth
            as={Link}
            href='/contact'
          >
            <PiEnvelopeOpenLight size={16} />
            {t('contact')}
          </Button>
        </div>
        <div className='pt-6 border-t border-border space-y-4'>
          <div className='space-y-3 text-sm'>
            <a
              href='mailto:casas.marmenor@gmx.de'
              className='flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors'
            >
              <PiEnvelopeOpenLight size={20} />
              casas.marmenor@gmx.de
            </a>
            <a
              href='tel:+34 604 482 002'
              className='flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors'
            >
              <PiPhoneCallLight size={20} />
              +34 604 482 002
            </a>
            <a
              href='tel:+49 176 47 36 7 18'
              className='flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors'
            >
              <PiPhoneCallLight size={20} />
              +49 176 47 36 7 18
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
