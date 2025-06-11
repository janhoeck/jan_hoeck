'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQuizContext } from '../../../../tools/context/QuizContext'
import styles from './page.module.scss'
import { Quiz } from './components/Quiz'
import React from 'react'
import CalendarTilesConfiguration from '../../../../tools/types/CalendarTileConfiguration'

export type QuizViewContentProps = {
  item: CalendarTilesConfiguration
}

export const QuizViewContent = (props: QuizViewContentProps) => {
  const { item } = props
  const router = useRouter()
  const searchParams = useSearchParams()
  const { solveQuiz } = useQuizContext()

  const handleFinishQuiz = () => {
    solveQuiz(item.day)
    router.push(`/day/${item.day}?${searchParams}`)
  }

  return (
    <div className={styles.quizContainer}>
      <Quiz quiz={item?.quiz || []} onAllCorrect={handleFinishQuiz} />
    </div>
  )
}
