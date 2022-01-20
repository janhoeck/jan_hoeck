import React, { useEffect } from 'react';
import { Section } from '../../components/Section';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { SectionCaption, useSectionsScrollerContext } from '../../components';
import { shadeColor } from '../../tools/utils/ColorUtils';
import { useInView } from 'react-intersection-observer';
import { AdventscalendarReference, SlotReference, WorkingTimeReference } from './components/references/specific';
import { Fade } from 'react-awesome-reveal';

type ClassKey = 'root' | 'referencesContainer';
const useStyles = createUseStyles<ClassKey, ReferenceSectionProps, Theme>(
    (theme) => ({
        root: {
            backgroundColor: '#9cb8b3',
            padding: theme.spacing(2),
        },
        referencesContainer: {
            marginTop: '10vh',
            padding: '0 10%',
            display: 'grid',
            gridGap: theme.spacing(4),
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 400px))',
            justifyContent: 'center',
        },
    }),
    { name: 'ReferenceSection' }
);

export interface ReferenceSectionProps {
    className?: string;
}

export const ReferenceSection = (props: ReferenceSectionProps) => {
    const { className } = props;
    const classes = useStyles(props);

    const { setColor } = useSectionsScrollerContext();

    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setColor('#efedce');
        }
    }, [inView, setColor]);

    return (
        <Section className={clsx(className, classes.root)} ref={ref}>
            <SectionCaption mainTextColor='#efedce' backgroundTextColor={shadeColor('#9cb8b3', 4)}>
                Referenzen
            </SectionCaption>
            <div className={classes.referencesContainer}>
                <Fade triggerOnce direction='left'>
                    <AdventscalendarReference />
                </Fade>
                <Fade triggerOnce direction='up'>
                    <SlotReference />
                </Fade>
                <Fade triggerOnce direction='right'>
                    <WorkingTimeReference />
                </Fade>
            </div>
        </Section>
    );
};
