import React, {FunctionComponent, HTMLAttributes} from 'react';
import {createUseStyles} from 'react-jss';
import clsx from 'clsx';
import {Theme} from '../../tools/theme/theme';
import { animated, useTransition, config } from 'react-spring';
import {ClassesOverride} from '../../tools/types/ReactJSSTypes';
import {mergeClasses} from '../../tools/theme/mergeClasses';

type ClassKeys = 'root' | 'content' | 'lineContainer' | 'dot' | 'line' | 'lastItem' | 'headline';
const useStyles = createUseStyles<ClassKeys, TimelineItemProps, Theme>((theme) => ({
    root: ({ alignment }) => ({
        display: 'flex',
        flexDirection: alignment === 'left' ? 'row-reverse' : 'row',
    }),
    lastItem: {
        '& $line': {
           display: 'none'
        }
    },
    lineContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    content: ({ alignment, color}) => ({
        marginTop: 5,
        marginBottom: theme.spacing(2),
        marginLeft: alignment === 'right' ? theme.spacing(2) : undefined,
        marginRight: alignment === 'left' ? theme.spacing(2) : undefined,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'justify',
        backgroundColor: theme.palette.primary[color || 'main'],
        padding: theme.spacing(2)
    }),
    dot: ({ color }) => ({
        height: 25,
        width: 25,
        backgroundColor: theme.palette.primary[color || 'main'],
        borderRadius: '50%'
    }),
    line: ({ color }) => ({
        backgroundColor: theme.palette.primary[color || 'main'],
        flex: 1,
        width: 3,
    }),
    headline: ({ alignment }) => ({
        fontSize: 12,
        letterSpacing: 2,
        marginBottom: theme.spacing(1)
    })
}), { name: 'TimelineItem' });

export interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
    classes?: ClassesOverride<ClassKeys>;
    alignment?: 'left' | 'right';
    color?: keyof Theme['palette']['primary'];
    lastItem?: boolean;
    headline?: string;
}

export const TimelineItem: FunctionComponent<TimelineItemProps> = (props) => {
    const {className, classes: classesProp, children, alignment = 'right', color = 'main', lastItem = false, headline, ...restProps} = props;
    const classes = mergeClasses(useStyles({ ...props, alignment, color }), classesProp);

    const transitions = useTransition(<>{children}</>, {
        config: config.gentle,
        from: alignment === 'left'
            ? { opacity: 0, transform: 'translate3d(-25%, 0px, 0px)' }
            : { opacity: 0, transform: 'translate3d(25%, 0px, 0px)' },
        enter: alignment === 'left'
            ? { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' }
            : { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' }
    });

    return (
        <div className={clsx(className, classes.root, { [classes.lastItem]: lastItem })} {...restProps}>
            <div className={classes.lineContainer}>
                <div className={classes.dot}/>
                <div className={classes.line}/>
            </div>
            {transitions((props, item) => (
                <animated.div className={classes.content} style={props}>
                    <span className={classes.headline}>{headline}</span>
                    {item}
                </animated.div>
            ))}
        </div>
    );
}
