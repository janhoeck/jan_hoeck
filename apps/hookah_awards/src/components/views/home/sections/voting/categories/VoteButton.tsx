import { checkVote } from '@/utils/check-vote'
import { Button } from '@jan_hoeck/ui'
import { useState } from 'react'

import { CategoryType } from '../../../../../../types'
import { useVotesContext } from '../context/VotesContext'

export type VoteButtonProps = {
  className?: string
  disabled?: boolean
  categoryId: string
  referenceId: string
  type: CategoryType
  label: (selected: boolean) => React.ReactNode
}

export const VoteButton = (props: VoteButtonProps) => {
  const { className, disabled, categoryId, referenceId, type, label } = props

  const [isVotePending, setVotePending] = useState<boolean>(false)
  const { votes, isLoading, createVote } = useVotesContext()

  const handleVoteButtonClick = async (event: MouseEvent) => {
    event.stopPropagation()

    setVotePending(true)
    await createVote(categoryId, referenceId, type)
    setVotePending(false)
  }

  const voted = checkVote(votes, referenceId)

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
