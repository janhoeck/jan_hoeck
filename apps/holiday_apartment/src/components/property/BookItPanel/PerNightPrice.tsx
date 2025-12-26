import { PriceConfig } from '@/types/PropertyConfiguration'
import { useTranslations } from 'next-intl'

export type PerNightPriceProps = {
  price: PriceConfig['perNight']
}

export const PerNightPrice = (props: PerNightPriceProps) => {
  const { price } = props
  const { normal: normalPrice, discount: discountPrice } = price
  const t = useTranslations('pages.property.bookIt')

  const today = new Date()
  const isDiscountPeriod = [9, 10, 11, 0, 1, 2].includes(today.getMonth())

  if (isDiscountPeriod) {
    return (
      <div className='text-3xl font-bold text-foreground mb-2 flex items-baseline gap-2'>
        <span className='line-through'>{normalPrice}</span>
        <span>{discountPrice}</span>
        <span className='text-lg font-normal text-muted-foreground'>
          {' / '}
          {t('perNight')}
        </span>
      </div>
    )
  }

  return (
    <div className='text-3xl font-bold text-foreground mb-2'>
      {normalPrice}
      <span className='text-lg font-normal text-muted-foreground'> / {t('perNight')}</span>
    </div>
  )
}
