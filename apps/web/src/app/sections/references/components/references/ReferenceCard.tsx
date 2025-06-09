import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Typography } from '@jan_hoeck/ui'

export interface ReferenceCardProps {
  className?: string
  imageSrc: string
  githubUrl: string
  liveDemoUrl?: string
  title: string
}

export const ReferenceCard = (props: ReferenceCardProps) => {
  const { className, githubUrl, liveDemoUrl, title, imageSrc } = props

  return (
    <div className={twMerge('shadow-card h-[450px] overflow-hidden relative w-auto', className)}>
      <div
        className={twMerge([
          'group',
          'bg-cover bg-no-repeat bg-center w-full h-full transition-transform',
          'hover:scale-125',
        ])}
        style={{ backgroundImage: `url("${imageSrc}")` }}
      >
        <div
          className={twMerge([
            'hidden h-full w-full absolute top-0 left-0 bg-[rgba(52,73,94,0.75)]',
            'group-hover:block',
          ])}
        >
          <div className='absolute top-1/2 left-1/2 flex flex-col items-center -translate-x-1/2 -translate-y-1/2'>
            <Typography className='text-white'>{title}</Typography>
            <div className='flex gap-4 flex-wrap'>
              <a className='text-white underline' href={githubUrl} target='_blank' rel='noreferrer'>
                Github
              </a>
              {liveDemoUrl && (
                <a className='text-white underline' href={liveDemoUrl} target='_blank' rel='noreferrer'>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
