import { DataContextProvider } from '@/components/contexts/data/DataContextProvider'
import { getCategories } from '@/lib/db/api/categories'
import { getClips } from '@/lib/db/api/clips'
import { getSurveys } from '@/lib/db/api/surveys'
import { getVotes } from '@/lib/db/api/votes'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default async function Layout(props: LayoutProps) {
  const { children } = props
  const [categories, clips, surveys, votes] = await Promise.all([getCategories(), getClips(), getSurveys(), getVotes()])

  return (
    <DataContextProvider
      categories={categories}
      clips={clips}
      surveys={surveys}
      votes={votes}
    >
      {children}
    </DataContextProvider>
  )
}
