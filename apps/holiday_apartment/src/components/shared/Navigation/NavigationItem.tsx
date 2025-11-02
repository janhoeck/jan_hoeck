'use client'

import { twMerge } from 'tailwind-merge'

export type NavigationItemProps = {
  children: string
  to: string
  fullWidth?: boolean
}

export const NavigationItem = (props: NavigationItemProps) => {
  const { children, to, fullWidth = false } = props
  return (
    <a
      href={to}
      className={twMerge([
        'text-muted-foreground rounded-md px-4 py-2 text-sm font-medium transition-colors',
        'hover:text-primary hover:bg-muted',
      ])}
    >
      {children}
    </a>
  )
}
