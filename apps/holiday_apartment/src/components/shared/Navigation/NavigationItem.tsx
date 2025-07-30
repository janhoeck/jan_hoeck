'use client'
import { Link } from '../../../i18n/navigation'
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'
import { Button, ButtonProps } from '@jan_hoeck/ui'

export type NavigationItemProps = {
  children: string
  to: string
  fullWidth?: boolean
  centerText?: boolean
  active?: boolean
  onClick?: ButtonProps<typeof Link>['onClick']
}

export const NavigationItem = forwardRef<HTMLAnchorElement, NavigationItemProps>((props, ref) => {
  const { children, to, fullWidth = false, centerText = false, active = false, onClick } = props
  return (
    <Button
      scroll
      ref={ref}
      variant='ghost'
      as={Link}
      href={to}
      className={twMerge([active && 'font-bold'])}
      fullWidth={fullWidth}
      centerText={centerText}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})

NavigationItem.displayName = 'NavigationItem'
