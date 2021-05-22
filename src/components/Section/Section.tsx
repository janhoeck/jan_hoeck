import React, {HTMLAttributes} from 'react';
import {createUseStyles} from 'react-jss';
import clsx from 'clsx';
import {Theme} from '../../tools/theme/theme';
import {ClassesOverride} from '../../tools/types/ReactJSSTypes';
import {mergeClasses} from '../../tools/theme/mergeClasses';

type ClassKey = 'root';
const useStyles = createUseStyles<ClassKey, SectionProps<HTMLDivElement>, Theme>({
    root: {
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        width: '100%',
    },
}, { name: 'Section' });

export interface SectionProps<T extends HTMLElement> {
    classes?: ClassesOverride<ClassKey>;
    className?: string;
    component?: React.ElementType<HTMLAttributes<T>>;
}

export const Section: React.FunctionComponent<SectionProps<HTMLDivElement>> = (props) => {
    const { children, className, classes: classesProp, component = 'section', ...restProps } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    // Workaround to save it in a new variable. Otherwise you cannot render it.
    const Component = component;

    return (
        <Component className={clsx(className, classes.root)} {...restProps}>
            {children}
        </Component>
    );

}
