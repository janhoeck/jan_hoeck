'use client'
import { Button, ButtonProps } from '../Button/Button'
import clsx from 'clsx'
import { Link, usePathname } from '../../i18n/navigation'

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
      className={clsx([isActive && 'font-bold'])}
      fullWidth={fullWidth}
      centerText={centerText}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
