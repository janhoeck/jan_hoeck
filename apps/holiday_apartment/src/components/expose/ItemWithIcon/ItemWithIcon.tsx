import { Typography } from '@jan_hoeck/ui'
import { IconType } from 'react-icons'

export type ItemWithIconProps = {
  icon: IconType
  label: string
  description?: string
  strikeThrough?: boolean
}

export const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon: Icon, label, description, strikeThrough = false } = props
  return (
    <div className='flex items-center gap-2'>
      <div className='relative'>
        {strikeThrough && (
          <div
            className='absolute h-[2px] w-full origin-top-left rotate-45 transform-gpu bg-black'
            style={{ width: 'calc(100% * 1.414)' }}
          />
        )}
        <Icon size={25} />
      </div>
      <div>
        <Typography>{label}</Typography>
        {description && <Typography variant='smallText'>{description}</Typography>}
      </div>
    </div>
  )
}
