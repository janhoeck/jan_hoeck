import { PropertySummaryType } from '../types'
import Image from 'next/image'
import { Typography } from '@jan_hoeck/ui'

const iconMapping: Record<PropertySummaryType, string> = {
  wlan: 'wlan.svg',
  pool: 'pool.svg',
  accessibility: 'wheelChair.svg',
  bed: 'bed.svg',
  bathroom: 'bathroom.svg',
  bedroom: 'bedroom.svg',
}

export type PropertySummaryItemProps = {
  type: PropertySummaryType
  description: string
}

export const PropertySummaryItem = (props: PropertySummaryItemProps) => {
  const { type, description } = props
  const path = `/svgs/${iconMapping[type]}`

  return (
    <div className='border-1 group flex flex-col items-center gap-2 rounded-sm border-neutral-300 bg-white px-2 py-3 text-center'>
      <Image
        className='transition-all group-hover:filter-none sm:grayscale'
        src={path}
        alt='Icon'
        height={55}
        width={55}
      />
      <Typography
        variant='smallText'
        className='text-center'
      >
        {description}
      </Typography>
    </div>
  )
}
