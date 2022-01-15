import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import clsx from 'clsx';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import { createMediaQuery } from '../../tools/theme/createMediaQuery';

type ClassKeys = 'root' | 'noWrap' | Variant;
const useStyles = createUseStyles<ClassKeys, TypographyProps, Theme>(
    (theme) => ({
        root: {
            fontFamily: 'DINPro',
            margin: 0,
            color: ({ color }) => (color === 'inherit' ? 'inherit' : theme.palette.text[color || 'primary']),
        },
        headline: {
            fontSize: 140,
            letterSpacing: 24,
            [createMediaQuery('xl').down]: {
                fontSize: 80,
            },
            [createMediaQuery('sm').down]: {
                fontSize: '1em',
            },
        },
        subHeadline: {
            fontSize: 30,
            [createMediaQuery('sm').down]: {
                fontSize: 20,
            },
        },
        text: {
            fontSize: 20,
        },
        secondary: {
            fontSize: 14,
        },
        noWrap: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    }),
    { name: 'Typography' }
);

type Variant = 'headline' | 'subHeadline' | 'text' | 'secondary';

export interface TypographyProps {
    classes?: ClassesOverride<ClassKeys>;
    className?: string;
    children: string | React.ReactElement | React.ReactElement[];
    variant?: Variant;
    color?: keyof Theme['palette']['text'] | 'inherit';
    noWrap?: boolean;
}

const componentMapping: Record<Variant, React.ElementType> = {
    headline: 'h1',
    subHeadline: 'h4',
    text: 'span',
    secondary: 'span',
};

export const Typography = (props: TypographyProps) => {
    const { className, classes: classesProp, children, variant = 'text', noWrap = false, color = 'primary' } = props;
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
