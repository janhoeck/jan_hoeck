'use client'

import { createContext, useContext } from 'react'

import { Category, Clip, Survey } from '../../../types'

export type DataContextType = {
  categories: Category[]
  clips: Clip[]
  surveys: Survey[]

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
