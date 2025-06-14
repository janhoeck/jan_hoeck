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
    <div className={twMerge('shadow-card relative h-[450px] w-auto overflow-hidden', className)}>
      <div
        className={twMerge([
          'group',
          'h-full w-full bg-cover bg-center bg-no-repeat transition-transform',
          'hover:scale-125',
        ])}
        style={{ backgroundImage: `url("${imageSrc}")` }}
      >
        <div
          className={twMerge([
            'absolute left-0 top-0 hidden h-full w-full bg-[rgba(52,73,94,0.75)]',
            'group-hover:block',
          ])}
        >
          <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center'>
            <Typography className='text-white'>{title}</Typography>
            <div className='flex flex-wrap gap-4'>
              <a
                className='text-white underline'
                href={githubUrl}
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
              {liveDemoUrl && (
                <a
                  className='text-white underline'
                  href={liveDemoUrl}
                  target='_blank'
                  rel='noreferrer'
                >
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
