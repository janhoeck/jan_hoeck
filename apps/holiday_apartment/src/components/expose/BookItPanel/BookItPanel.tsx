'use client'
import { Button } from '@components/shared/Button/Button'
import { Typography } from '@jan_hoeck/ui'
import { Link } from '../../../i18n/navigation'
import { ExposeConfiguration } from '@components/expose/types'

export type BookItPanelProps = {
  price: ExposeConfiguration['price']
}

export const BookItPanel = (props: BookItPanelProps) => {
  const { price } = props
  const { perNight, cleaning } = price

  return (
    <div className='flex items-center justify-between gap-2 rounded-md border border-neutral-300 bg-white p-4'>
      <div>
        <div className='flex gap-1'>
          <Typography
            variant='heading'
            size={5}
          >
            {perNight}
          </Typography>
          <Typography>pro Nacht</Typography>
        </div>
        {cleaning && (
          <Typography variant='smallText'>zuzüglich einer Reinigungsgebühr von einmalig {cleaning}</Typography>
        )}
      </div>
      <Button
        as={Link}
        href='/contact'
        variant='basic'
      >
        Kontakt
      </Button>
    </div>
  )
}
