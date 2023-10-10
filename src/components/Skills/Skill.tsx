import React from 'react'
import { Typography } from '@/components'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

export interface SkillItem {
    imageSrc: string
    tooltip?: string
    description?: string
}

export interface SkillProps extends SkillItem {
    className?: string
}

export const Skill = (props: SkillProps) => {
    const { className, imageSrc, tooltip, description } = props

    return (
        <div className={twMerge('shadow-md bg-white p-4 flex w-auto gap-4', className)} title={tooltip}>
            <Image src={imageSrc} alt={tooltip ?? ''} height={45} width={45} />
            {description && <Typography variant='secondary'>{description}</Typography>}
        </div>
    )
}
