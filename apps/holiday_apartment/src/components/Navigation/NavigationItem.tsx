'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, ButtonProps } from '../Button/Button'
import clsx from 'clsx'

export type NavigationItemProps = {
  children: string
  to: string
  fullWidth?: boolean
  centerText?: boolean
  onClick?: ButtonProps<typeof Link>['onClick']
}

export const NavigationItem = (props: NavigationItemProps) => {
  const { children, to, fullWidth = false, centerText = false, onClick } = props
  const pathname = usePathname()
  const isActive = pathname === to
  return (
    <Button
      scroll
      variant='ghost'
      as={Link}
      href={to}
      className={clsx([isActive && 'bg-cyan-100'])}
      fullWidth={fullWidth}
      centerText={centerText}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
