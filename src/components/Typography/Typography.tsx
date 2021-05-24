import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import clsx from 'clsx';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';

type ClassKeys = 'root' | 'noWrap' | Variant;
const useStyles = createUseStyles<ClassKeys, TypographyProps, Theme>(
    (theme) => ({
        root: {
            fontFamily: 'DINPro',
            margin: 0,
            color: ({ color }) => (color === 'inherit' ? 'inherit' : theme.palette.text[color || 'primary']),
        },
        headlineBig: {
            fontSize: 140,
            letterSpacing: 24,
        },
        subHeadlineBig: {
            fontSize: 30,
            letterSpacing: 14,
        },
        primary: {
            fontSize: 20,
        },
        secondary: {
            fontSize: 14,
        },
        noWrap: {
            whiteSpace: 'nowrap',
        },
    }),
    { name: 'Typography' }
);

type Variant = 'headlineBig' | 'subHeadlineBig' | 'primary' | 'secondary';

export interface TypographyProps {
    classes?: ClassesOverride<ClassKeys>;
    className?: string;
    children: string;
    variant?: Variant;
    color?: keyof Theme['palette']['text'] | 'inherit';
    noWrap?: boolean;
}

const componentMapping: Record<Variant, React.ElementType> = {
    headlineBig: 'h1',
    subHeadlineBig: 'h4',
    primary: 'span',
    secondary: 'span',
};

export const Typography = (props: TypographyProps) => {
    const { className, classes: classesProp, children, variant = 'primary', noWrap = false, color = 'primary' } = props;
    const classes = mergeClasses(useStyles({ ...props, color }), classesProp);

    const Component = componentMapping[variant];
    return (
        <Component
            className={clsx(className, classes.root, classes[variant], {
                [classes.noWrap]: noWrap,
            })}
        >
            {children}
        </Component>
    );
};
