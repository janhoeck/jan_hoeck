import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InnerContentProps {
  className?: string
  innerClassName?: string
}

export const InnerContent = ({ children, className, innerClassName }: PropsWithChildren<InnerContentProps>) => {
  return (
    <div className={twMerge('h-fit overflow-y-scroll pb-[20vh]', className)}>
      <div className={twMerge('container m-auto p-6', innerClassName)}>{children}</div>
    </div>
  )
}
