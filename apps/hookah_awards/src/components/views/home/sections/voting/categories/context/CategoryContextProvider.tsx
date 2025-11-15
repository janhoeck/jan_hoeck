'use client'

import { useSession } from '@/lib/auth-client'
import React, { useEffect, useState } from 'react'

import { Category, CategoryType, Clip, Survey, Vote } from '../../../../../../../types'
import { CategoryContext } from './CategoryContext'

export type CategoryContextProviderProps = {
  categoryId: Category['id']
  children: React.ReactNode
}

export const CategoryContextProvider = (props: CategoryContextProviderProps) => {
  const { categoryId, children } = props

  const [isLoading, setLoading] = useState<boolean>(true)
  const [vote, setVote] = useState<Vote | undefined>(undefined)
  const { data } = useSession()

  useEffect(() => {
    if (!data) {
      return
    }

    const loadVote = async () => {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/${categoryId}/vote`)
      if (!response.ok) {
        setLoading(false)
        return
      }

      if (response.status === 204) {
        setLoading(false)
        return
      }

      const vote = (await response.json()) as Vote
      setVote(vote)
      setLoading(false)
    }

    loadVote()
  }, [data, categoryId])

  const createVote = async (referenceId: Clip['id'] | Survey['id'], type: CategoryType) => {
    if (!data) {
      return
    }

    // Check to prevent voting for the same reference id again
    if (vote && vote.referenceId === referenceId) {
      return
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/${categoryId}/vote`, {
      method: 'POST',
      body: JSON.stringify({ referenceId, referenceType: type }),
    })

    if (!response.ok) {
      return
    }

    setVote({
      userId: data.user.id,
      categoryId,
      referenceId,
      referenceType: type,
      createdAt: new Date(),
    })
  }

  return <CategoryContext.Provider value={{ vote, isLoading, createVote }}>{children}</CategoryContext.Provider>
}
