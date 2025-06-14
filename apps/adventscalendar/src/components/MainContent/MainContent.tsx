import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export type MainContentProps = React.HTMLAttributes<HTMLElement>

export const MainContent = (props: PropsWithChildren<MainContentProps>) => {
  const { children, className, ...restProps } = props
  return (
    <main
      className={twMerge('flex size-full flex-col overflow-hidden', className)}
      {...restProps}
    >
      {children}
    </main>
  )
}
