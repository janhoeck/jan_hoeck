import React, { useEffect } from 'react';
import { Section } from '../../components/Section';
import clsx from 'clsx';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { SectionCaption, Timeline, TimelineItem, Typography, useSectionsScrollerContext } from '../../components';
import { shadeColor } from '../../tools/utils/ColorUtils';
import { useInView } from 'react-intersection-observer';

type ClassKey =
    | 'root'
    | 'headlineText'
    | 'headlineBackgroundText'
    | 'timeline'
    | 'timelineContainer'
    | 'timelineDot'
    | 'timelineLine'
    | 'timelineContent';
const useStyles = createUseStyles<ClassKey, TimelineSectionProps, Theme>(
    (theme) => ({
        root: {
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(2),
        },
        headlineText: {
            color: theme.palette.common.white,
        },
        headlineBackgroundText: {
            color: shadeColor(theme.palette.primary.main, 4),
        },
        timelineContainer: {
            marginTop: '10vh',
            padding: theme.spacing(3),
        },
        timeline: {},
        timelineDot: {
            backgroundColor: theme.palette.common.white,
        },
        timelineLine: {
            backgroundColor: theme.palette.primary.light,
        },
        timelineContent: {
            backgroundColor: theme.palette.common.white,
        },
    }),
    { name: 'TimelineSection' }
);

export interface TimelineSectionProps {
    className?: string;
}

export const TimelineSection = (props: TimelineSectionProps) => {
    const { className } = props;
    const classes = useStyles(props);

    const theme = useTheme<Theme>();
    const { setColor } = useSectionsScrollerContext();

    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setColor(theme.palette.common.white);
        }
    }, [theme, inView, setColor]);

    return (
        <Section className={clsx(className, classes.root)} ref={ref}>
            <SectionCaption
                classes={{
                    text: classes.headlineText,
                    backgroundText: classes.headlineBackgroundText,
                }}
            >
                Lebenslauf
            </SectionCaption>
            <div className={classes.timelineContainer}>
                <Timeline
                    className={classes.timeline}
                    classes={{
                        dot: classes.timelineDot,
                        line: classes.timelineLine,
                        content: classes.timelineContent,
                    }}
                >
                    <TimelineItem headline='Juli 2012 - Juli 2014'>
                        <Typography>Fachabitur im Bereich Informatik</Typography>
                        <Typography><i>Carl-Reuther-Berufskolleg Hennef</i></Typography>
                    </TimelineItem>
                    <TimelineItem headline='August 2014 - Februar 2016'>
                        <Typography>Ausbildung zum Fachinformatiker für Anwendungsentwicklung</Typography>
                        <Typography><i>FLOWFACT GmbH</i></Typography>
                    </TimelineItem>
                    <TimelineItem headline='Februar 2016 - jetzt'>
                        <Typography>Frontend React Entwickler</Typography>
                        <Typography><i>FLOWFACT GmbH</i></Typography>
                    </TimelineItem>
                </Timeline>
            </div>
        </Section>
    );
};
