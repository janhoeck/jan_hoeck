import Image from 'next/image'
import { Typography } from '@jan_hoeck/ui'
import { PropertySummaryType } from '@/types/ExposeConfiguration'
import { useTranslations } from 'next-intl'

const iconMapping: Record<PropertySummaryType, string> = {
  bed: 'bed.svg',
  bathroom: 'bathroom.svg',
  bedroom: 'bedroom.svg',
  group: 'group.svg',
}

export type PropertySummaryItemProps = {
  type: PropertySummaryType
  amount: number
}

export const PropertySummaryItem = (props: PropertySummaryItemProps) => {
  const { type, amount } = props
  const t = useTranslations('pages.expose.propertySummary')

  const path = `/svgs/${iconMapping[type]}`

  return (
    <div className='border-1 flex flex-col items-center gap-2 rounded-sm border-neutral-300 bg-white px-2 py-3 text-center'>
      <Image
        src={path}
        alt='Icon'
        height={55}
        width={55}
      />
      <div>
        <span className='rounded-full bg-teal-300 px-4 text-xs'>{amount}</span>
        <Typography variant='smallText'>{t(`labels.${type}`)}</Typography>
      </div>
    </div>
  )
}
