import React from 'react';
import {createUseStyles} from 'react-jss';
import {Theme} from '../../tools/theme/theme';
import clsx from 'clsx';
import {ClassesOverride} from '../../tools/types/ReactJSSTypes';
import {mergeClasses} from '../../tools/theme/mergeClasses';

type ClassKeys = 'root' | 'noWrap' | Variant;
const useStyles = createUseStyles<ClassKeys, TypographyProps, Theme>((theme) => ({
    root: {
        fontFamily: 'DINPro',
        margin: 0,
        color: ({ color }) => theme.palette.text[color || 'primary']
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
    },
    noWrap: {
        whiteSpace: 'nowrap'
    }
}), { name: 'Typography' });

type Variant = 'headlineBig' | 'subHeadlineBig' | 'default';

export interface TypographyProps {
    classes?: ClassesOverride<ClassKeys>;
    className?: string;
    children: string;
    variant?: Variant,
    color?: keyof Theme['palette']['text'];
    noWrap?: boolean;
}

const componentMapping: Record<Variant, React.ElementType> = {
    headlineBig: 'h1',
    subHeadlineBig: 'h4',
    default: 'span'
}

export const Typography = (props: TypographyProps) => {
    const { className, classes: classesProp, children, variant = 'default', noWrap = false, color = 'primary' } = props;
    const classes = mergeClasses(useStyles({ ...props, color }), classesProp);

    const Component = componentMapping[variant];
    return (
        <Component className={clsx(className, classes.root, classes[variant], { [classes.noWrap]: noWrap })}>{children}</Component>
    )
}
