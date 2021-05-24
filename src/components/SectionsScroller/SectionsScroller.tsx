import React, { Children, FunctionComponent, useState, WheelEvent } from 'react';
import { RouteProps } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import clsx from 'clsx';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import { SectionIndicator } from './SectionIndicator';
import { SectionsScrollerContextProvider } from './SectionsScrollerContext';

type ClassKeys = 'root' | 'content' | 'sectionIndicator';
const useStyles = createUseStyles<ClassKeys, SectionsScrollerProps, Theme>(
    (theme) => ({
        root: {
            position: 'relative',
        },
        content: {
            height: '100vh',
            transition: 'transform 700ms ease 0s',
        },
        sectionIndicator: {
            position: 'absolute',
            right: theme.spacing(3),
            top: '50%',
        },
    }),
    { name: 'SectionsScroller' }
);

export interface SectionsScrollerProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
    children: React.ReactElement<RouteProps, 'Route'>[];
}

export const SectionsScroller: FunctionComponent<SectionsScrollerProps> = (props) => {
    const { children, className, classes: classesProp } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
        // scroll up is true, when deltaY is a negative number.
        const scrollUp = event.deltaY < 0;
        const scrollDown = !scrollUp;

        if (scrollUp) {
            if (activeIndex === 0) {
                return;
            }
            setActiveIndex((activeIndex) => activeIndex - 1);
        }

        if (scrollDown) {
            if (activeIndex === Children.count(children) - 1) {
                return;
            }
            setActiveIndex((activeIndex) => activeIndex + 1);
        }
    };

    return (
        <SectionsScrollerContextProvider>
            <div className={clsx(className, classes.root)} onWheel={handleWheel}>
                <div className={classes.content} style={{ transform: `translate3d(0, -${activeIndex * 100}vh, 0` }}>
                    {children}
                </div>
                <SectionIndicator className={classes.sectionIndicator} activeSectionIndex={activeIndex} sectionsCount={Children.count(children)} />
            </div>
        </SectionsScrollerContextProvider>
    );
};
