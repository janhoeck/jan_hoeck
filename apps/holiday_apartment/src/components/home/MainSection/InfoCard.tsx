import React from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

export type InfoCardProps = {
  icon: IconType
  title: string | number
  description: string
}

export const InfoCard = (props: InfoCardProps) => {
  const { title, description, icon: Icon } = props
  return (
    <div
      className={twMerge([
        'group animate-scale-in rounded-xl bg-white p-6 shadow-md transition-all duration-300',
        'hover:shadow-ocean hover:-translate-y-2',
        'md:p-8',
      ])}
    >
      <div className='from-ocean-deep to-ocean-light mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-r/hsl text-white transition-transform duration-300 group-hover:scale-110'>
        <Icon size={24} />
      </div>
      <h3 className='text-foreground mb-3 text-xl font-semibold'>{title}</h3>
      <p className='text-muted-foreground leading-relaxed'>{description}</p>
    </div>
  )
}
