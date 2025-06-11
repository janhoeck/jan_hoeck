'use client'
import React, { PropsWithChildren } from 'react'
import { useCurrentDate } from '../useCurrentDate'

const CalendarContext = React.createContext<ReturnType<typeof useStore>>({} as any)

const useStore = () => {
  const currentDate = useCurrentDate()

  return {
    currentDate,
  }
}

export const CalendarContextProvider = ({ children }: PropsWithChildren) => {
  const store = useStore()
  return <CalendarContext.Provider value={store}>{children}</CalendarContext.Provider>
}

export const useCalendarContext = () => {
  return React.useContext(CalendarContext)
}
