'use client'

import { useDataContext } from '../DataContext'
import { SurveyTable } from './SurveyTable'

export const SurveyTableContainer = () => {
  const { surveys } = useDataContext()

  if (surveys.length === 0) {
    return <span className='text-muted-foreground'>Keine Umfragen vorhanden</span>
  }

  return <SurveyTable />
}
