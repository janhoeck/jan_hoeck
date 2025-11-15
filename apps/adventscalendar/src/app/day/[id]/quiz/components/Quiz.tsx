'use client'

import { Shaker, ShakerRef } from '@jan_hoeck/ui'
import React, { useMemo, useRef, useState } from 'react'

import { CheckboxQuizType, InputQuizType, QuizType } from '../../../../../tools/types/CalendarTileConfiguration'
import { CheckboxQuiz } from './CheckboxQuiz/CheckboxQuiz'
import { InputQuiz } from './InputQuiz/InputQuiz'
import styles from './quiz.module.scss'

export interface QuizProps {
  quiz: QuizType
  onAllCorrect: () => void
}

export const Quiz = (props: QuizProps) => {
  const { quiz, onAllCorrect } = props

  // starting with the first quiz
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0)
  const shakerRef = useRef<ShakerRef>(null)

  // The current quiz data
  const currentQuiz = useMemo(() => quiz[currentQuizIndex]!, [quiz, currentQuizIndex])
  const hasNextQuiz = useMemo(() => currentQuizIndex < quiz.length - 1, [currentQuizIndex, quiz])

  const handleCorrect = () => {
    if (hasNextQuiz) {
      setCurrentQuizIndex((currentQuizIndex) => currentQuizIndex + 1)
    } else {
      onAllCorrect()
    }
  }

  const handleIncorrect = () => {
    const { current } = shakerRef
    if (!current) {
      return
    }

    current.shake()
  }

  return (
    <Shaker ref={shakerRef}>
      <div className={styles.root}>
        <span className={styles.statusIndicator}>
          Frage {currentQuizIndex + 1} von {quiz.length}
        </span>
        <div className={styles.container}>
          <span className={styles.question}>{currentQuiz.question}</span>
          {currentQuiz.variant === 'input' ? (
            <InputQuiz
              key={currentQuiz.question}
              quiz={currentQuiz as InputQuizType}
              onCorrect={handleCorrect}
              onIncorrect={handleIncorrect}
            />
          ) : (
            <CheckboxQuiz
              key={currentQuiz.question}
              quiz={currentQuiz as CheckboxQuizType}
              onCorrect={handleCorrect}
              onIncorrect={handleIncorrect}
            />
          )}
        </div>
      </div>
    </Shaker>
  )
}
