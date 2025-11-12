import { type IconType } from 'react-icons'

export type PropertyStatisticItemProps = {
  icon: IconType
  text: string
}

export const PropertyStatisticItem = (props: PropertyStatisticItemProps) => {
  const { icon: Icon, text } = props
  return (
    <div className='flex items-center gap-2'>
      <Icon
        size={20}
        className='text-primary'
      />
      <span className='text-sm font-medium'>{text}</span>
    </div>
  )
}
