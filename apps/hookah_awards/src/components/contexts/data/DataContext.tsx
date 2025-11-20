'use client'

import { createContext, useContext } from 'react'

import { Category, Clip, Survey, Vote } from '../../../types'

export type DataContextType = {
  categories: Category[]
  clips: Clip[]
  surveys: Survey[]
  votes: Vote[]

  addCategory: (category: Category) => void
  removeCategory: (categoryId: Category['id']) => void

  addClip: (clip: Clip) => void
  removeClip: (clipId: Clip['id']) => void

  addSurvey: (survey: Survey) => void
  removeSurvey: (surveyId: Survey['id']) => void
}

const noop = () => {}

export const DataContext = createContext<DataContextType>({
  categories: [],
  clips: [],
  surveys: [],
  votes: [],

  addCategory: noop,
  removeCategory: noop,

  addClip: noop,
  removeClip: noop,

  addSurvey: noop,
  removeSurvey: noop,
})

export const useDataContext = () => {
  return useContext(DataContext)
}
