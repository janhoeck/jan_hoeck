import React from 'react'
import { SkillProps } from './Skill'
import { twMerge } from 'tailwind-merge'

export interface SkillsProps {
  className?: string
  children: React.ReactElement<SkillProps> | React.ReactElement<SkillProps>[]
}

export const Skills = (props: SkillsProps) => {
  const { className, children } = props

  return <div className={twMerge('grid gap-4 grid-cols-[repeat(auto-fit,77px)]', className)}>{children}</div>
}
