import React, { createElement, ElementType, HTMLAttributes } from 'react'
import { Typography } from '../Typography'
import { twMerge } from 'tailwind-merge'

export interface SkillItem {
    component: ElementType<HTMLAttributes<SVGElement>>
    tooltip?: string
    description?: string
}

export interface SkillProps extends SkillItem {
    className?: string
}

export const Skill = (props: SkillProps) => {
    const { className, component, tooltip, description } = props

    return (
        <div className={twMerge('shadow-card bg-white p-4 flex w-auto gap-4', className)} title={tooltip}>
            <div className='w-[45px] h-[45px] [&>svg]:w-[45px] [&>svg]:h-[45px]'>{createElement(component)}</div>
            {description && <Typography variant='secondary'>{description}</Typography>}
        </div>
    )
}
