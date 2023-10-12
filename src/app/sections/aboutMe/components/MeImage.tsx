import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

export interface MeImageProps {
    className?: string
}

export const MeImage = (props: MeImageProps) => {
    const { className } = props

    return (
        <div className={twMerge(['relative h-60 w-60', 'md:h-72 md:w-72', className])}>
            <Image
                priority
                fill
                className='rounded-full border-4 border-solid border-white z-10'
                src='/jan_hoeck/assets/me.jpg'
                alt='Jan Höck'
            />
            <div
                className={twMerge([
                    'absolute w-full h-full rounded-full left-[-45px] bottom-[-30px] bg-primary-main',
                    'hidden lg:block',
                ])}
            />
        </div>
    )
}
