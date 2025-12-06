import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export type HeadlineProps = PropsWithChildren<{
  className?: string
}>

export const Headline = ({ children, className }: HeadlineProps) => (
  <h1 className={twMerge('text-6xl font-extrabold font-sans-pro uppercase mb-12 text-center', className)}>
    {children}
  </h1>
)
