import { createContext, useContext } from 'react'

import { CategoryType, Clip, Survey, Vote } from '../../../../../../../types'

export type CategoryContextType = {
  vote: Vote | undefined
  isLoading: boolean
  createVote: (referenceId: Clip['id'] | Survey['id'], type: CategoryType) => Promise<void>
}

export const CategoryContext = createContext<CategoryContextType>({
  vote: undefined,
  isLoading: true,
  createVote: () => Promise.resolve(),
})

export const useCategoryContext = () => {
  const context = useContext(CategoryContext)
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryContextProvider')
  }
  return context
}
