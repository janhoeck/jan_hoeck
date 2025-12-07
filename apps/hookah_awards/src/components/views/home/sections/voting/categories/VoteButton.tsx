import { Button } from '@jan_hoeck/ui'
import { useState } from 'react'

import { CategoryType, Clip, Survey } from '../../../../../../types'
import { useCategoryContext } from './context/CategoryContext'

export type VoteButtonProps = {
  className?: string
  disabled?: boolean
  referenceId: Clip['id'] | Survey['id']
  type: CategoryType
  label: (selected: boolean) => React.ReactNode
}

export const VoteButton = (props: VoteButtonProps) => {
  const { className, disabled, referenceId, type, label } = props

  const [isVotePending, setVotePending] = useState<boolean>(false)
  const { vote, isLoading, createVote } = useCategoryContext()

  const handleVoteButtonClick = async (event: MouseEvent) => {
    event.stopPropagation()

    setVotePending(true)
    await createVote(referenceId, type)
    setVotePending(false)
  }

  const voted = vote?.referenceId === referenceId

  return (
    <Button
      className={className}
      variant={voted ? 'primary' : 'outline'}
      disabled={disabled || isLoading || isVotePending}
      onClick={handleVoteButtonClick}
    >
      {label(voted)}
    </Button>
  )
}
