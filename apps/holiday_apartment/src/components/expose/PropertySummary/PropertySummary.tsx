import { PropertySummaryItem } from '../types'
import { PropertySummaryItem as PropertySummaryItemComponent } from './PropertySummaryItem'
import { twMerge } from 'tailwind-merge'

export type PropertySummaryProps = {
  items: PropertySummaryItem[]
}

export const PropertySummary = (props: PropertySummaryProps) => {
  const { items } = props
  return (
    <div className={twMerge(['grid w-full grid-cols-[repeat(auto-fit,_95px)] justify-center gap-4'])}>
      {items.map((item) => (
        <PropertySummaryItemComponent
          key={item.type}
          type={item.type}
          amount={item.amount}
        />
      ))}
    </div>
  )
}
