import React from 'react';
import { createContext, FunctionComponent, useContext, useState } from 'react';
import { useTheme } from 'react-jss';
import { Theme } from '../../tools/theme/theme';

type SectionsScrollerContextType = ReturnType<typeof useStore>;

const SectionsScrollerContext = createContext<SectionsScrollerContextType>({} as any);

const useStore = () => {
    const theme = useTheme<Theme>();
    const [color, setColor] = useState<string>(theme.palette.common.white);

    return {
        color,
        setColor,
    };
};

export const SectionsScrollerContextProvider: FunctionComponent = (props) => {
    const { children } = props;
    const store = useStore();

    return <SectionsScrollerContext.Provider value={store}>{children}</SectionsScrollerContext.Provider>;
};

export const useSectionsScrollerContext = () => {
    return useContext(SectionsScrollerContext);
};
