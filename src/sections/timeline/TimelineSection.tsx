import React from 'react';
import {Section} from '../../components/Section';
import clsx from 'clsx';
import {createUseStyles} from 'react-jss';
import {Theme} from '../../tools/theme/theme';
import {Typography, TimelineItem, Timeline} from '../../components';

type ClassKey = 'root' | 'triangleWhite' | 'timeline' | 'timelineContainer' | 'timelineDot' | 'timelineLine' | 'timelineContent';
const useStyles = createUseStyles<ClassKey, TimelineSectionProps, Theme>((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main
    },
    triangleWhite: {
        position: 'absolute',
        top: -150,
        left: 0,
        height: '20vh',
        width: '150%',
        backgroundColor: theme.palette.common.white,
        transform: 'rotate(4deg)'
    },
    timelineContainer: {
        marginTop: '10vh'
    },
    timeline: {

    },
    timelineDot: {
        backgroundColor: theme.palette.common.white
    },
    timelineLine: {

    },
    timelineContent: {
        backgroundColor: theme.palette.common.white
    }
}), { name: 'TimelineSection' });

export interface TimelineSectionProps {
    className?: string;
}

export const TimelineSection = (props: TimelineSectionProps) => {
    const { className } = props;
    const classes = useStyles(props);

    return (
        <Section className={clsx(className, classes.root)}>
            <div className={classes.triangleWhite}/>
            <div className={classes.timelineContainer}>
                <Timeline className={classes.timeline} classes={{ dot: classes.timelineDot, line: classes.timelineLine, content: classes.timelineContent }}>
                    <TimelineItem color='light' alignment='left' headline='2014 - 2016'>
                        <Typography>Ausbildung zum Fachinformatiker für Anwendungsentwicklung</Typography>
                        <Typography>FLOWFACT GmbH</Typography>
                    </TimelineItem>
                    <TimelineItem lastItem color='light' alignment='right' headline='2018 - 2020'>
                        <Typography>Das ist ein Test</Typography>
                    </TimelineItem>
                </Timeline>
            </div>
        </Section>
    );
}
