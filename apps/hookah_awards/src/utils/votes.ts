import { Category, Vote } from '../types'

export const findVotedClipId = (votes: Vote[], categoryId: Category['id']) => {
  const vote = votes.find((vote) => vote.categoryId === categoryId)
  if (!vote) {
    return undefined
  }

  return vote.referenceId
}
