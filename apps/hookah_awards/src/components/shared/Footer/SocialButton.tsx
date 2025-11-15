import { Button } from '@jan_hoeck/ui'
import Link from 'next/link'
import { IconType } from 'react-icons'

export type SocialButtonProps = {
  href: string
  icon: IconType
}

export const SocialButton = (props: SocialButtonProps) => {
  const { href, icon: Icon } = props
  return (
    <Button
      as={Link}
      href={href}
      target='_blank'
      variant='outline'
      size='icon'
    >
      <Icon size={20} />
    </Button>
  )
}
