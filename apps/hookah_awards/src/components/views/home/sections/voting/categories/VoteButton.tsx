import { Button } from '@jan_hoeck/ui'
import { useState } from 'react'

import { CategoryType, Clip, Survey } from '../../../../../../types'
import { useCategoryContext } from './context/CategoryContext'

export type VoteButtonProps = {
  className?: string
  disabled?: boolean
  referenceId: Clip['id'] | Survey['id']
  type: CategoryType
  label: string
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

  return (
    <Button
      className={className}
      variant={vote?.referenceId === referenceId ? 'primary' : 'outline'}
      disabled={disabled || isLoading || isVotePending}
      onClick={handleVoteButtonClick}
    >
      {label}
    </Button>
  )
}
