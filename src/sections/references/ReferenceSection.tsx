import React, { useEffect } from 'react';
import { Section } from '../../components/Section';
import clsx from 'clsx';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { SectionCaption, useSectionsScrollerContext } from '../../components';
import { shadeColor } from '../../tools/utils/ColorUtils';
import { useInView } from 'react-intersection-observer';

type ClassKey = 'root' | 'referencesContainer';
const useStyles = createUseStyles<ClassKey, ReferenceSectionProps, Theme>(
    (theme) => ({
        root: {
            backgroundColor: '#52303b',
            padding: theme.spacing(2),
        },
        referencesContainer: {
            marginTop: '10vh',
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
            <SectionCaption mainTextColor={theme.palette.common.white} backgroundTextColor={shadeColor('#52303b', 4)}>
                Referenzen
            </SectionCaption>
            <div className={classes.referencesContainer}></div>
        </Section>
    );
};
