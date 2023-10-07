import React from 'react'
import clsx from 'clsx'
import { Skill, SkillItem } from './Skill'

export interface SkillsProps {
    className?: string
    skills: SkillItem[]
}

export const Skills = (props: SkillsProps) => {
    const { className, skills } = props

    return (
        <div className={clsx(className, 'grid gap-4 grid-cols-[repeat(auto-fit,77px)]')}>
            {skills.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}
        </div>
    )
}
