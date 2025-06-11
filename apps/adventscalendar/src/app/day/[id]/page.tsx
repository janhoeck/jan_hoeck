import React from 'react'
import { calendarTilesConfiguration, findItemByDay } from '../../../../public/configuration/calendarTilesConfiguration'
import { DayViewContent } from './content'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'
import { ViewHeader } from '../../../components/ViewHeader/ViewHeader'
import { ViewFooter } from '../../../components/ViewFooter/ViewFooter'
import { MainContent } from '../../../components/MainContent/MainContent'
import { InnerContent } from '../../../components/InnerContent/InnerContent'

type Params = Promise<{ id: string }>

export function generateStaticParams() {
  return calendarTilesConfiguration.map((item) => ({
    id: item.day.toString(),
  }))
}

export default async function DayView({ params }: { params: Params }) {
  const { id } = await params
  const item = findItemByDay(parseFloat(id))
  if (!item) {
    console.log('Item not found, calling notFound()')
    notFound()
  }

  return (
    <MainContent className={styles.root}>
      <ViewHeader className={styles.viewHeader} />
      <InnerContent>
        <DayViewContent item={item} />
      </InnerContent>
      <ViewFooter />
    </MainContent>
  )
}
