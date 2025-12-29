import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@jan_hoeck/ui'
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
    <Card
      className={twMerge([
        'group animate-scale-in transition-all duration-300',
        'hover:shadow-ocean hover:-translate-y-2',
      ])}
    >
      <CardHeader>
        <div className='from-ocean-deep to-ocean-light flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-r/hsl text-white transition-transform duration-300 group-hover:scale-110'>
          <Icon size={24} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
