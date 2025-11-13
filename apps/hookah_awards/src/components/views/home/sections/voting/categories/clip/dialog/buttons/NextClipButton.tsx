import { Button } from '@jan_hoeck/ui'
import { GoChevronRight } from 'react-icons/go'

export type NextClipButtonProps = {
  onClick?: () => void
}

export const NextClipButton = (props: NextClipButtonProps) => {
  const { onClick } = props
  return (
    <Button
      disabled={typeof onClick !== 'function'}
      variant='primary'
      onClick={onClick}
    >
      <GoChevronRight size={20} />
    </Button>
  )
}
