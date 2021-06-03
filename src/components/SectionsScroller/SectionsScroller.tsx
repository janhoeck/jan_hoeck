import React, { Children } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import clsx from 'clsx';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import { SectionIndicator } from './SectionIndicator';
import { SectionsScrollerContextProvider, SectionsScrollerContextType, useSectionsScrollerContext } from './SectionsScrollerContext';
import { SectionsScrollerItem } from './SectionsScrollerItem';

type ClassKeys = 'root' | 'content' | 'sectionIndicator';
const useStyles = createUseStyles<ClassKeys, SectionsScrollerProps & SectionsScrollerContextType, Theme>(
    (theme) => ({
        root: {
            position: 'relative',
            background: ({ backgroundImage }) => `#283339 url(${backgroundImage}) no-repeat center`,
            backgroundSize: ({ backgroundSize }) => backgroundSize,
            transition: 'background-size .5s ease-out',
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
    children: React.ReactElement | React.ReactElement[];
}

const SectionsScrollerInternal = (props: SectionsScrollerProps) => {
    const { children, className, classes: classesProp } = props;

    const context = useSectionsScrollerContext();
    const classes = mergeClasses(useStyles({ ...props, ...context }), classesProp);

    const { activeSectionIndex, setActiveSectionIndex } = context;
    const sectionsCount = Children.count(children);

    return (
        <div className={clsx(className, classes.root)}>
            <div className={classes.content} style={{ transform: `translate3d(0, -${activeSectionIndex * 100}vh, 0` }}>
                {Children.map(children, (child, index) => (
                    <SectionsScrollerItem key={index} sectionIndex={index} sectionsCount={sectionsCount} onSectionChange={setActiveSectionIndex}>
                        {React.cloneElement(child)}
                    </SectionsScrollerItem>
                ))}
            </div>
            <SectionIndicator className={classes.sectionIndicator} activeSectionIndex={activeSectionIndex} sectionsCount={sectionsCount} />
        </div>
    );
};

export const SectionsScroller = (props: SectionsScrollerProps) => (
    <SectionsScrollerContextProvider>
        <SectionsScrollerInternal {...props} />
    </SectionsScrollerContextProvider>
);
