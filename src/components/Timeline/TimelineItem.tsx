import React, { FunctionComponent, HTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { Theme } from '../../tools/theme/theme';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import { Typography } from '../Typography';
import { createMediaQuery } from '../../tools/theme/createMediaQuery';

type ClassKeys = 'root' | 'content' | 'lineContainer' | 'dot' | 'line' | 'lastItem' | 'headline';
const useStyles = createUseStyles<ClassKeys, TimelineItemProps, Theme>(
    (theme) => ({
        root: {
            display: 'flex',
            flexDirection: ({ alignment }) => (alignment === 'left' ? 'row-reverse' : 'row'),
            [createMediaQuery('sm').down]: {
                flexDirection: 'row !important',
            },
        },
        lastItem: {
            '& $line': {
                display: 'none',
            },
        },
        lineContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        content: {
            marginTop: 5,
            marginBottom: theme.spacing(2),
            marginLeft: ({ alignment }) => (alignment === 'right' ? theme.spacing(2) : undefined),
            marginRight: ({ alignment }) => (alignment === 'left' ? theme.spacing(2) : undefined),
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: ({ color }) => theme.palette.primary[color || 'main'],
            boxShadow: theme.palette.common.cardBoxShadow,
            padding: theme.spacing(2),
            maxWidth: 600,
            [createMediaQuery('sm').down]: {
                marginLeft: theme.spacing(2),
                marginRight: '0 !important',
            },
        },
        dot: ({ color }) => ({
            height: 17,
            width: 17,
            backgroundColor: theme.palette.primary[color || 'main'],
            borderRadius: '50%',
        }),
        line: ({ color }) => ({
            backgroundColor: theme.palette.primary[color || 'main'],
            flex: 1,
            width: 3,
        }),
        headline: ({ alignment }) => ({
            letterSpacing: 2,
            marginBottom: theme.spacing(1),
        }),
    }),
    { name: 'TimelineItem' }
);

export interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
    classes?: ClassesOverride<ClassKeys>;
    alignment?: 'left' | 'right';
    color?: keyof Theme['palette']['primary'];
    lastItem?: boolean;
    headline?: string;
}

export const TimelineItem: FunctionComponent<TimelineItemProps> = (props) => {
    const { className, classes: classesProp, children, alignment = 'right', color = 'main', lastItem = false, headline, ...restProps } = props;
    const classes = mergeClasses(useStyles({ ...props, alignment, color }), classesProp);

    return (
        <div
            className={clsx(className, classes.root, {
                [classes.lastItem]: lastItem,
            })}
            {...restProps}
        >
            <div className={classes.lineContainer}>
                <div className={classes.dot} />
                <div className={classes.line} />
            </div>
            <div className={classes.content}>
                {headline && (
                    <Typography className={classes.headline} variant='secondary'>
                        {headline}
                    </Typography>
                )}
                {children}
            </div>
        </div>
    );
};
