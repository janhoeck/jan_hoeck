import React from 'react';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { Typography, TypographyProps } from './Typography';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import clsx from 'clsx';

type ClassKeys = 'root' | 'backgroundText' | 'text';
const useStyles = createUseStyles<ClassKeys, BackgroundTypographyProps, Theme>(
    {
        root: {
            position: 'relative',
            textTransform: 'uppercase',
            textAlign: 'center',
        },
        text: {
            position: 'relative',
            zIndex: 1,
        },
        backgroundText: {
            position: 'absolute',
            width: '500vw',
            height: '120%',
            margin: 0,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 300,
            zIndex: 0,
        },
    },
    { name: 'BackgroundTypography' }
);

export interface BackgroundTypographyProps extends Omit<TypographyProps, 'classes'> {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
}

export const BackgroundTypography = (props: BackgroundTypographyProps) => {
    const { children, className, classes: classesProp, variant } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)}>
            <Typography variant={variant} className={classes.text}>
                {children}
            </Typography>
            <Typography noWrap className={classes.backgroundText} variant={variant} color='backgroundText'>
                {children}
            </Typography>
        </div>
    );
};
