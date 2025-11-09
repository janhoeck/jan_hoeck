import { Button, type ButtonProps } from '@jan_hoeck/ui'
import Link from 'next/link'

export type NavigationItemProps = {
  children: string
  to: string
  fullWidth?: ButtonProps<'a'>['fullWidth']
}

export const NavigationItem = (props: NavigationItemProps) => {
  const { children, to, fullWidth } = props
  return (
    <Button
      as={Link}
      fullWidth={fullWidth}
      variant='ghost'
      href={to}
    >
      {children}
    </Button>
  )
}
