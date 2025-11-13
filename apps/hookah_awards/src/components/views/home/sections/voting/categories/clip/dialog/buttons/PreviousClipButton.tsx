import { Button } from '@jan_hoeck/ui'
import { GoChevronLeft } from 'react-icons/go'

export type PreviousClipButtonProps = {
  onClick?: () => void
}

export const PreviousClipButton = (props: PreviousClipButtonProps) => {
  const { onClick } = props
  return (
    <Button
      disabled={typeof onClick !== 'function'}
      variant='primary'
      onClick={onClick}
    >
      <GoChevronLeft size={20} />
    </Button>
  )
}
