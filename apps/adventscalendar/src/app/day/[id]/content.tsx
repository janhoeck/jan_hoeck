'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

import { CalendarItem } from '../../../components/CalendarItem/CalendarItem'
import { ConfirmButton } from '../../../components/ConfirmButton/ConfirmButton'
import { useQuizContext } from '../../../tools/context/QuizContext'
import CalendarTilesConfiguration from '../../../tools/types/CalendarTileConfiguration'
import styles from './page.module.scss'

export type DayViewContentProps = {
  item: CalendarTilesConfiguration
}

export const DayViewContent = (props: DayViewContentProps) => {
  const { item } = props
  const { isQuizSolved } = useQuizContext()

  const router = useRouter()
  const searchParams = useSearchParams()

  const hasQuiz = Array.isArray(item.quiz) && item.quiz.length > 0

  useEffect(() => {
    if (hasQuiz && !isQuizSolved(item.day)) {
      router.push(`/day/${item.day}/quiz?${searchParams}`)
    }
  }, [item, hasQuiz, isQuizSolved, router, searchParams])

  if (hasQuiz && !isQuizSolved(item.day)) {
    return null
  }

  return (
    <>
      <CalendarItem
        className={styles.calenderItem}
        item={item}
      />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <span
            className={styles.text}
            color='textPrimary'
          >
            {item.text}
          </span>
          <ConfirmButton onClick={() => router.push(`/?${searchParams}`)}>Zurück zum Kalender</ConfirmButton>
        </div>
        <Image
          className={styles.image}
          src='/images/tree.png'
          width={150}
          height={650}
          alt='Bild'
        />
      </div>
    </>
  )
}
