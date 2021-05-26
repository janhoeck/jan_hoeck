import React from 'react';
import { createContext, FunctionComponent, useContext, useState } from 'react';
import { useTheme } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import defaultBackgroundImage from './assets/node-js.jpg';

export type SectionsScrollerContextType = ReturnType<typeof useStore>;

const SectionsScrollerContext = createContext<SectionsScrollerContextType>({} as any);

const useStore = () => {
    const theme = useTheme<Theme>();

    const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
    const [color, setColor] = useState<string>(theme.palette.common.white);

    const [backgroundImage, setBackgroundImage] = useState<string>(defaultBackgroundImage);
    const [backgroundSize, setBackgroundSize] = useState<number>(120);

    return {
        activeSectionIndex,
        color,
        backgroundImage,
        backgroundSize,
        setColor,
        setBackgroundImage,
        setBackgroundSize,
        setActiveSectionIndex,
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
