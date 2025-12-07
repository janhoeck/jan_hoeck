'use client'

import { useSession } from '@/lib/auth-client'
import React, { useEffect, useState } from 'react'

import { CategoryType, Vote } from '../../../../../../types'
import { VotesContext } from './VotesContext'

export type VotesContextProviderProps = {
  children: React.ReactNode
}

export const VotesContextProvider = (props: VotesContextProviderProps) => {
  const { children } = props

  const [isLoading, setLoading] = useState<boolean>(true)
  const [votes, setVotes] = useState<Vote[]>([])
  const { data } = useSession()

  useEffect(() => {
    if (!data) {
      return
    }

    const loadVotes = async () => {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/votes`)
      if (!response.ok) {
        setLoading(false)
        return
      }

      if (response.status === 204) {
        setLoading(false)
        return
      }

      const votes = (await response.json()) as Vote[]
      setVotes(votes)
      setLoading(false)
    }

    loadVotes()
  }, [data])

  const createVote = async (categoryId: string, referenceId: string, type: CategoryType) => {
    if (!data) {
      return
    }

    const alreadyVotedForReference = votes.some((vote) => vote.referenceId === referenceId)
    // Check to prevent voting for the same reference id again
    if (alreadyVotedForReference) {
      return
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/${categoryId}/vote`, {
      method: 'POST',
      body: JSON.stringify({ referenceId, referenceType: type }),
    })

    if (!response.ok) {
      return
    }

    setVotes((prevVotes) => {
      const voteIndex = prevVotes.findIndex((vote) => vote.categoryId === categoryId)

      if (voteIndex !== -1) {
        // Update existing vote for the same category
        const updatedVotes = [...prevVotes]
        updatedVotes[voteIndex]!.referenceId = referenceId
        return updatedVotes
      }

      return [
        ...prevVotes,
        {
          userId: data.user.id,
          categoryId,
          referenceId,
          referenceType: type,
          createdAt: new Date(),
        },
      ]
    })
  }

  return <VotesContext.Provider value={{ votes, isLoading, createVote }}>{children}</VotesContext.Provider>
}
