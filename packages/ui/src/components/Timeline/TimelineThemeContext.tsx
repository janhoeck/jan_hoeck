import { createContext, PropsWithChildren, useContext } from 'react'

export type TimelineThemeContextType = {
  cardColor: `bg-${string}`
  lineColor: `bg-${string}`
  dotColor: `bg-${string}`
}

const TimelineThemeContext = createContext<TimelineThemeContextType>({
  cardColor: 'bg-white',
  lineColor: 'bg-white',
  dotColor: 'bg-white',
})

export const TimelineThemeContextProvider = ({ children, ...theme }: PropsWithChildren<TimelineThemeContextType>) => (
  <TimelineThemeContext.Provider value={theme}>{children}</TimelineThemeContext.Provider>
)

export const useTimelineTheme = () => {
  return useContext(TimelineThemeContext)
}
