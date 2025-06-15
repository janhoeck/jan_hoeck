'use client'
import { Button, ButtonProps } from '../Button/Button'
import { Link, usePathname } from '../../i18n/navigation'
import { twMerge } from 'tailwind-merge'

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
      className={twMerge([isActive && 'font-bold'])}
      fullWidth={fullWidth}
      centerText={centerText}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
