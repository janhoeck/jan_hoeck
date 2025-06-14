import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

export interface SkillItem {
  imageSrc: string
  tooltip?: string
}

export interface SkillProps extends SkillItem {
  className?: string
}

export const Skill = (props: SkillProps) => {
  const { className, imageSrc, tooltip } = props

  return (
    <div
      className={twMerge('rounded-md bg-zinc-700 p-4', className)}
      title={tooltip}
    >
      <div className='relative h-12 w-12'>
        <Image
          fill
          src={imageSrc}
          alt={tooltip ?? ''}
        />
      </div>
    </div>
  )
}
