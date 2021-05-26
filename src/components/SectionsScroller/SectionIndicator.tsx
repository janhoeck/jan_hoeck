import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import { useSectionsScrollerContext } from './SectionsScrollerContext';

interface UseStylesParameters extends SectionIndicatorProps {
    color: string;
}

type ClassKeys = 'root' | 'item' | 'active';
const useStyles = createUseStyles<ClassKeys, UseStylesParameters, Theme>(
    (theme) => ({
        root: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            listStyleType: 'none',
            '& > *:not(:last-child)': {
                marginBottom: theme.spacing(2),
            },
        },
        item: {
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: ({ color }) => color,
            transition: 'all .4s ease-out',
            cursor: 'pointer',
        },
        active: {
            width: 12,
            height: 12,
        },
    }),
    { name: 'SectionIndicator' }
);

export interface SectionIndicatorProps extends HTMLAttributes<HTMLUListElement> {
    classes?: ClassesOverride<ClassKeys>;
    sectionsCount: number;
    activeSectionIndex: number;
}

export const SectionIndicator = (props: SectionIndicatorProps) => {
    const { className, classes: classesProp, sectionsCount, activeSectionIndex } = props;

    const { color, setActiveSectionIndex } = useSectionsScrollerContext();
    const classes = mergeClasses(useStyles({ ...props, color }), classesProp);

    return (
        <ul className={clsx(className, classes.root)}>
            {new Array(sectionsCount).fill(true).map((_, index) => (
                <li
                    key={index}
                    className={clsx(classes.item, {
                        [classes.active]: index === activeSectionIndex,
                    })}
                    onClick={() => setActiveSectionIndex(index)}
                />
            ))}
        </ul>
    );
};
