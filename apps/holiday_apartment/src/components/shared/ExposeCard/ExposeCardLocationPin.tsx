import { LuMapPin } from 'react-icons/lu'

export type ExposeCardLocationPinProps = {
  city: string
}

export const ExposeCardLocationPin = ({ city }: ExposeCardLocationPinProps) => {
  return (
    <div className='text-foreground inline-flex items-center rounded-full border border-transparent bg-white/95 px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-white'>
      <LuMapPin
        size={16}
        className='mr-1'
      />
      {city}
    </div>
  )
}
