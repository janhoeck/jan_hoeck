import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { twMerge } from 'tailwind-merge'

export interface SocialProps {
    className?: string
}

export const Socials = (props: SocialProps) => {
    const { className } = props
    return (
        <div className={twMerge('flex items-center justify-center gap-2 text-primary', className)}>
            <a href='https://github.com/janhoeck' target='_blank' rel='noreferrer'>
                <FiGithub size={25} />
            </a>
            <a href='mailto:jan.hoeck@gmx.net'>
                <AiOutlineMail size={25} />
            </a>
            <a href='tel:+49017656790159'>
                <AiOutlinePhone size={25} />
            </a>
        </div>
    )
}
