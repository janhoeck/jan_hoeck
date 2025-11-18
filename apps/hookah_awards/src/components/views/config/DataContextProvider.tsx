'use client'

import { PropsWithChildren, useState } from 'react'

import { Category, Clip, Survey } from '../../../types'
import { DataContext } from './DataContext'

type InitialStoreData = {
  categories: Category[]
  clips: Clip[]
  surveys: Survey[]
}

function remove<T extends { id: string }>(elementId: string) {
  return (prevElements: T[]) => prevElements.filter((prevElement) => prevElement.id !== elementId)
}

function add<T>(element: T) {
  return (prevElements: T[]) => [...prevElements, element]
}

const useStore = (initialData: InitialStoreData) => {
  const [categories, setCategories] = useState<Category[]>(initialData.categories)
  const [clips, setClips] = useState<Clip[]>(initialData.clips)
  const [surveys, setSurveys] = useState<Survey[]>(initialData.surveys)

  const addCategory = (category: Category) => {
    setCategories(add(category))
  }

  const removeCategory = (categoryId: Category['id']) => {
    setCategories(remove(categoryId))
    setClips((prevClips) => prevClips.filter((clip) => clip.categoryId !== categoryId))
    setSurveys((prevSurveys) => prevSurveys.filter((survey) => survey.categoryId !== categoryId))
  }

  const addClip = (clip: Clip) => {
    setClips(add(clip))
  }

  const removeClip = (clipId: Clip['id']) => {
    setClips(remove(clipId))
  }

  const addSurvey = (survey: Survey) => {
    setSurveys(add(survey))
  }

  const removeSurvey = (surveyId: Survey['id']) => {
    setSurveys(remove(surveyId))
  }

  return {
    categories,
    clips,
    surveys,

    addCategory,
    removeCategory,

    addClip,
    removeClip,

    addSurvey,
    removeSurvey,
  }
}

export type DataContextProviderProps = PropsWithChildren<{
  categories: Category[]
  clips: Clip[]
  surveys: Survey[]
}>

export const DataContextProvider = ({ children, categories, clips, surveys }: DataContextProviderProps) => {
  const store = useStore({ categories, clips, surveys })
  return <DataContext.Provider value={store}>{children}</DataContext.Provider>
}
