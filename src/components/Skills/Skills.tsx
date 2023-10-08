import React from 'react'
import { Skill, SkillItem } from './Skill'
import { twMerge } from 'tailwind-merge'

export interface SkillsProps {
    className?: string
    skills: SkillItem[]
}

export const Skills = (props: SkillsProps) => {
    const { className, skills } = props

    return (
        <div className={twMerge('grid gap-4 grid-cols-[repeat(auto-fit,77px)]', className)}>
            {skills.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}
        </div>
    )
}
