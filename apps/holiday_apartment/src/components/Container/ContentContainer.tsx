import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type ContentContainerProps = {
  children: ReactNode
  className?: string
}

export const ContentContainer = (props: ContentContainerProps) => {
  const { children, className } = props
  return (
    <div className={twMerge('flex justify-center', className)}>
      <div className='container mx-6 mb-[10vh] overflow-hidden'>{children}</div>
    </div>
  )
}
