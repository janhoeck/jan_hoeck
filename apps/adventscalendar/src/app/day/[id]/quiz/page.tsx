import { notFound } from 'next/navigation'
import React from 'react'

import {
  calendarTilesConfiguration,
  findItemByDay,
} from '../../../../../public/configuration/calendarTilesConfiguration'
import { InnerContent } from '../../../../components/InnerContent/InnerContent'
import { MainContent } from '../../../../components/MainContent/MainContent'
import { ViewFooter } from '../../../../components/ViewFooter/ViewFooter'
import { ViewHeader } from '../../../../components/ViewHeader/ViewHeader'
import { QuizViewContent } from './content'
import styles from './page.module.scss'

type Params = Promise<{ id: string }>

export function generateStaticParams() {
  return calendarTilesConfiguration
    .map((item) => {
      if (!item.quiz) {
        return undefined
      }
      return {
        id: item.day.toString(),
      }
    })
    .filter(Boolean)
}

export default async function QuizView({ params }: { params: Params }) {
  const { id } = await params
  const item = findItemByDay(Number.parseFloat(id))
  if (!item) {
    return notFound()
  }

  return (
    <MainContent className={styles.root}>
      <ViewHeader />
      <InnerContent innerClassName={styles.innerContent}>
        <QuizViewContent item={item} />
      </InnerContent>
      <ViewFooter />
    </MainContent>
  )
}
