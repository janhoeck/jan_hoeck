'use client'
import React, { useRef } from 'react'
import { CalendarItemGrid, CalendarItemGridRef } from '../components/CalendarItem/CalendarItemGrid'
import CalendarTilesConfiguration from '../tools/types/CalendarTileConfiguration'
import { ADMIN_QUERY_PARAM, canAccessDay } from '../tools/utils/AdventsCalendarUtil'
import { ViewHeader } from '../components/ViewHeader/ViewHeader'
import { InnerContent } from '../components/InnerContent/InnerContent'
import { ViewFooter } from '../components/ViewFooter/ViewFooter'
import { MainContent } from '../components/MainContent/MainContent'
import { useItemDatabase } from '../tools/context/ItemsDatabaseContext'
import { calendarTilesConfiguration } from '../../public/configuration/calendarTilesConfiguration'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCalendarContext } from '../tools/context/CalendarContext'

const items = calendarTilesConfiguration

const CalendarView = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { openedDays, checkOpened, saveOpenedDay } = useItemDatabase()
  const { currentDate } = useCalendarContext()

  const timeoutId = useRef<NodeJS.Timeout>(null)

  const calendarItemGridRef = useRef<CalendarItemGridRef>(null)

  const handleItemClick = (item: CalendarTilesConfiguration) => {
    const { current: api } = calendarItemGridRef
    if (!api) {
      return
    }

    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    if (!searchParams.get(ADMIN_QUERY_PARAM) && !canAccessDay(currentDate, item.day)) {
      api.shakeItem(item)
      console.error('You cannot redirect to that page, yet')
      return
    }

    // If this day was already opened, we directly redirect.
    if (checkOpened(item.day)) {
      // redirect to the day view
      router.push(`/day/${item.day}?${searchParams}`)
      return
    }

    timeoutId.current = setTimeout(() => {
      timeoutId.current = null

      saveOpenedDay(item.day)
      // redirect to the day view
      router.push(`/day/${item.day}?${searchParams}`)
    }, 750)
  }

  return (
    <MainContent className='bg-green-900'>
      <ViewHeader />
      <InnerContent>
        <CalendarItemGrid
          ref={calendarItemGridRef}
          items={items}
          alreadyOpenedDays={openedDays}
          onItemClick={handleItemClick}
        />
      </InnerContent>
      <ViewFooter />
    </MainContent>
  )
}

export default CalendarView
