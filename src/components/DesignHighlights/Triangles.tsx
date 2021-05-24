import React from 'react';
import { createUseStyles } from 'react-jss';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import clsx from 'clsx';
import { Theme } from '../../tools/theme/theme';
import { mergeClasses } from '../../tools/theme/mergeClasses';

type ClassKeys = 'root' | 'one' | 'two';
const useStyles = createUseStyles<ClassKeys, TrianglesProps, Theme>(
    (theme) => ({
        root: {
            position: 'relative',
            height: '10vh',
        },
        triangle: {
            width: '150vw',
            height: '20vh',
            position: 'absolute',
        },
        one: {
            backgroundColor: theme.palette.primary.light,
            transform: 'rotate(6deg)',
        },
        two: {
            backgroundColor: theme.palette.primary.main,
            transform: 'rotate(-6deg)',
        },
    }),
    { name: 'Triangles' }
);

export interface TrianglesProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
}

export const Triangles = (props: TrianglesProps) => {
    const { className, classes: classesProp } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)}>
            <div className={clsx(classes.one, classes.triangle)} />
            <div className={clsx(classes.two, classes.triangle)} />
        </div>
    );
};
