import React, { createContext, FunctionComponent, useContext, useState } from 'react'
import colors from '../../tools/theme/colors'

export type SectionsScrollerContextType = ReturnType<typeof useStore>

const SectionsScrollerContext = createContext<SectionsScrollerContextType>({} as any)

const useStore = () => {
    const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0)
    const [color, setColor] = useState<string>(colors.white)

    return {
        activeSectionIndex,
        color,
        setColor,
        setActiveSectionIndex,
    }
}

export const SectionsScrollerContextProvider: FunctionComponent = (props) => {
    const { children } = props
    const store = useStore()

    return <SectionsScrollerContext.Provider value={store}>{children}</SectionsScrollerContext.Provider>
}

export const useSectionsScrollerContext = () => {
    return useContext(SectionsScrollerContext)
}
