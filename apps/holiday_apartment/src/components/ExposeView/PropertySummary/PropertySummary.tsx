import { PropertySummaryItem } from '../types'
import { PropertySummaryItem as PropertySummaryItemComponent } from './PropertySummaryItem'
import { twMerge } from 'tailwind-merge'

export type PropertySummaryProps = {
  items: PropertySummaryItem[]
}

export const PropertySummary = (props: PropertySummaryProps) => {
  const { items } = props
  return (
    <div
      className={twMerge(['grid w-full grid-cols-[repeat(auto-fit,_95px)] gap-6', 'justify-start sm:justify-center'])}
    >
      {items.map((item) => (
        <PropertySummaryItemComponent
          key={item.type}
          type={item.type}
          description={item.description}
        />
      ))}
    </div>
  )
}
