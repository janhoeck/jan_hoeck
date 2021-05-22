import React, {HTMLAttributes} from 'react';
import {TimelineItemProps} from './TimelineItem';
import {createUseStyles} from 'react-jss';
import clsx from 'clsx';
import {Theme} from '../../tools/theme/theme';
import {ClassesOverride} from '../../tools/types/ReactJSSTypes';
import {mergeClasses} from '../../tools/theme/mergeClasses';

type ClassKey = 'root' | 'dot' | 'line' | 'content';
const useStyles = createUseStyles<ClassKey, TimelineProps, Theme>({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > div': {
            width: '50%'
        },
        '& > div:nth-child(1)': {
            alignSelf: 'flex-start',
            marginLeft: 12.5,
        },
        '& > div:nth-child(2)': {
            alignSelf: 'flex-end',
            marginRight: 12.5,
        }
    },
    dot: {},
    line: {},
    content: {}
}, { name: 'Timeline' });

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
    classes?: ClassesOverride<ClassKey>;
    children: React.ReactElement<TimelineItemProps, 'Timeline'> | React.ReactElement<TimelineItemProps, 'Timeline'>[];
}

export const Timeline = (props: TimelineProps) => {
    const { className, classes: classesProp, children, ...restProps } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)} {...restProps}>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    classes: {
                        dot: classes.dot,
                        line: classes.line,
                        content: classes.content
                    }
                })
            })}
        </div>
    );
}
