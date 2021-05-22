import React from 'react';
import {createUseStyles} from 'react-jss';
import {Theme} from '../../tools/theme/theme';
import clsx from 'clsx';
import {ClassesOverride} from '../../tools/types/ReactJSSTypes';
import {mergeClasses} from '../../tools/theme/mergeClasses';

type ClassKeys = 'root' | Variant;
const useStyles = createUseStyles<ClassKeys, TypographyProps, Theme>({
    root: {
        fontFamily: `'Roboto', sans-serif`
    },
    headlineBig: {
        fontSize: 140,
        letterSpacing: 24
    },
    subHeadlineBig: {
        fontSize: 30,
        letterSpacing: 14
    },
    default: {
        fontSize: 20
    }
}, { name: 'Typography' });

type Variant = 'headlineBig' | 'subHeadlineBig' | 'default';

export interface TypographyProps {
    classes?: ClassesOverride<ClassKeys>;
    className?: string;
    children: string;
    variant?: Variant
}

const componentMapping: Record<Variant, React.ElementType> = {
    headlineBig: 'h1',
    subHeadlineBig: 'h4',
    default: 'span'
}

export const Typography = (props: TypographyProps) => {
    const { className, classes: classesProp, children, variant = 'default' } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    const Component = componentMapping[variant];
    return (
        <Component className={clsx(className, classes.root, classes[variant])}>{children}</Component>
    )
}
