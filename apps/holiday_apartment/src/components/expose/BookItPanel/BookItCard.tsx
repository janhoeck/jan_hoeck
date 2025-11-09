'use client'

import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { Button, Card, CardContent } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'
import { IoMailOutline } from 'react-icons/io5'

export type BookItPanelProps = {
  price: ExposeConfiguration['price']
}

export const BookItCard = (props: BookItPanelProps) => {
  const { price } = props
  const { perNight, cleaning } = price
  const t = useTranslations('pages.expose.bookIt')

  return (
    <Card withBorder>
      <CardContent className='space-y-6'>
        <div>
          <div className='text-3xl font-bold text-foreground mb-2'>
            {perNight}
            <span className='text-lg font-normal text-muted-foreground'> / Nacht</span>
          </div>
          <div className='text-sm text-muted-foreground'>Einmalige Reinigungskosten: {cleaning}</div>
        </div>
        <div className='space-y-4'>
          <Button fullWidth>
            <IoMailOutline size={16} />
            Anfrage
          </Button>
        </div>
        <div className='pt-6 border-t border-border space-y-4'>
          <h3 className='font-semibold text-foreground'>Kontakt</h3>
          <div className='space-y-3 text-sm'>
            <a
              href='mailto:info@solymarmenor.com'
              className='flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-mail w-4 h-4'
              >
                <rect
                  width='20'
                  height='16'
                  x='2'
                  y='4'
                  rx='2'
                ></rect>
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
              </svg>
              info@solymarmenor.com
            </a>
            <a
              href='tel:+34123456789'
              className='flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-phone w-4 h-4'
              >
                <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
              </svg>
              +34 123 456 789
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
