import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { MeImage } from './components/MeImage';
import clsx from 'clsx';
import { Section, Typography, useSectionsScrollerContext } from '../../components';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';
import { createMediaQuery } from '../../tools/theme/createMediaQuery';
import { Skills } from '../../components/Skills/Skills';
import { skills } from './components/skills';
import { libraries } from './components/libraries';
import { testing } from './components/testing';

type ClassKeys = 'root' | 'container' | 'content' | 'meImage' | 'text' | 'skillsContainer';
const useStyles = createUseStyles<ClassKeys, AboutMeSectionProps, Theme>(
    (theme) => ({
        root: {
            backgroundColor: '#eae5e5',
            padding: theme.spacing(3),
        },
        container: {
            display: 'flex',
            maxWidth: 1440,
            margin: '5vh auto',
            [createMediaQuery('md').down]: {
                flexDirection: 'column',
                alignItems: 'center',
                margin: '5vh auto 10vh auto',
            },
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            '& > *:not(:last-child)': {
                marginBottom: theme.spacing(2),
            },
        },
        meImage: {
            marginRight: theme.spacing(6),
            [createMediaQuery('md').down]: {
                marginRight: 0,
                marginBottom: theme.spacing(6),
            },
        },
        text: {
            lineHeight: '32px',
        },
        skillsContainer: {
            marginTop: theme.spacing(2),
        },
    }),
    { name: 'AboutMeSection' }
);

export interface AboutMeSectionProps {
    className?: string;
}

export const AboutMeSection = (props: AboutMeSectionProps) => {
    const { className } = props;
    const classes = useStyles(props);

    const theme = useTheme<Theme>();
    const { setColor } = useSectionsScrollerContext();

    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setColor(theme.palette.primary.main);
        }
    }, [theme, inView, setColor]);

    return (
        <Section className={clsx(className, classes.root)} ref={ref}>
            <div className={classes.container}>
                <Fade triggerOnce direction='left'>
                    <MeImage className={classes.meImage} />
                </Fade>
                <Fade triggerOnce direction='up'>
                    <div className={classes.content}>
                        <Typography variant='subHeadline'>WER BIN ICH?</Typography>
                        <Typography className={classes.text} color='secondary'>
                            Ich heiße Jan Höck, wurde am 17.01.1996 geboren und komme aus der Nähe von Köln. Meine Leidenschaft ist die Programmierung.
                            Seit meinem 14. Lebensjahr entwickle ich Software und stelle mich seitdem technischen Herausforderungen.
                            <br/>
                            Doch wie begann alles?
                            <br/>
                            Ich war schon immer an Technik interessiert. In meinem Kinderzimmer habe ich das erste mal von Java gehört und fand es so interessant, dass ich mir
                            es kurzerhand selber beigebracht habe. Während meiner Ausbildung bin ich dann mit ReactJS
                            in Berührung gekommen. Von Backend zu Frontend! Nun spezialisiere ich mich seit guten 5 Jahren auf dieses Framework.
                            Mein Fokus liegt hierbei auf Web Performance, Best Practices und Design Standards.
                            <br/>
                            <br/>
                            Als Senior Frontend Entwickler habe ich schon viel Code gelesen und geschrieben. Ich bin vor viele Herausforderungen gestellt worden und musste Lösungen finden.
                            Dabei lag mein Blick immer auf die Skalierbar- und Wartbarkeit des Codes. Zudem ist es mir wichtig in einem funktionierenden Team zu arbeiten. Jeder Entwickler hat seine eigenen Erfahrungen,
                            seine eigenen Ansätze etwas zu lösen und eigene Stärken. Nur durch eine Kombination aus diesen Menschen und einem gewissen Freiraum, erschafft man gute Software.
                            <br/>
                            <br/>
                            Scroll gerne weiter runter, um zu meinen Referenzen zu gelangen. Ein Blick in den Code ist manchmal eindeutiger, als jede Beschreibung über mich selbst.
                        </Typography>
                        <Typography variant='subHeadline'>SKILLS</Typography>
                        <Skills skills={skills} />
                        <Typography variant='subHeadline'>3RD PARTY</Typography>
                        <Skills skills={libraries} />
                        <Typography variant='subHeadline'>TESTING</Typography>
                        <Skills skills={testing} />
                    </div>
                </Fade>
            </div>
        </Section>
    );
};
