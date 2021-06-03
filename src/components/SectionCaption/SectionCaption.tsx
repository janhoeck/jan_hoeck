import React from 'react';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import clsx from 'clsx';
import { createMediaQuery } from '../../tools/theme/createMediaQuery';
import { Typography } from '../Typography';

type ClassKeys = 'root' | 'backgroundText' | 'text';
const useStyles = createUseStyles<ClassKeys, SectionCaptionProps, Theme>(
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
            [createMediaQuery('xl').down]: {
                fontSize: 250,
            },
            [createMediaQuery('md').down]: {
                fontSize: 150,
                letterSpacing: 0,
            },
            [createMediaQuery('sm').down]: {
                fontSize: 120,
            },
        },
    },
    { name: 'SectionCaption' }
);

export interface SectionCaptionProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
    children: string;
}

export const SectionCaption = (props: SectionCaptionProps) => {
    const { children, className, classes: classesProp } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)}>
            <Typography noWrap className={classes.text} variant='headline'>
                {children}
            </Typography>
            <Typography className={classes.backgroundText} variant='headline' color='backgroundText'>
                {children}
            </Typography>
        </div>
    );
};
