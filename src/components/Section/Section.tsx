import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { Theme } from '../../tools/theme/theme';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';

type ClassKey = 'root';
const useStyles = createUseStyles<ClassKey, SectionProps, Theme>(
    {
        root: {
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh',
            width: '100%',
        },
    },
    { name: 'Section' }
);

export interface SectionProps {
    classes?: ClassesOverride<ClassKey>;
    className?: string;
    children: React.ReactElement | React.ReactElement[];
}

export const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
    const { children, className, classes: classesProp, ...restProps } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)} ref={ref} {...restProps}>
            {children}
        </div>
    );
});
