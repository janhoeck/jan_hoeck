import React from 'react'
import { QuizViewContent } from './content'
import {
  calendarTilesConfiguration,
  findItemByDay,
} from '../../../../../public/configuration/calendarTilesConfiguration'
import styles from './page.module.scss'
import { ViewHeader } from '../../../../components/ViewHeader/ViewHeader'
import { InnerContent } from '../../../../components/InnerContent/InnerContent'
import { ViewFooter } from '../../../../components/ViewFooter/ViewFooter'
import { MainContent } from '../../../../components/MainContent/MainContent'
import { notFound } from 'next/navigation'

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
