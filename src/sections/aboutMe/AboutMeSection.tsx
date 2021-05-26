import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { MeImage } from './components/MeImage';
import clsx from 'clsx';
import { Section, SectionCaption, Typography, useSectionsScrollerContext } from '../../components';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';
import { createMediaQuery } from '../../tools/theme/createMediaQuery';
import { Skills } from './components/skills/Skills';
import { SkillsContainer } from './SkillsContainer';

type ClassKeys = 'root' | 'container' | 'content' | 'meImage' | 'text' | 'skillsContainer';
const useStyles = createUseStyles<ClassKeys, AboutMeSectionProps, Theme>(
    (theme) => ({
        root: {
            backgroundColor: theme.palette.common.white,
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
        },
        meImage: {
            marginRight: theme.spacing(6),
            [createMediaQuery('md').down]: {
                marginRight: 0,
                marginBottom: theme.spacing(6),
            },
        },
        text: {
            textAlign: 'justify',
            lineHeight: '32px',
            zIndex: 1,
            flex: '1 0',
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
    const { setColor, setBackgroundSize } = useSectionsScrollerContext();

    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setColor(theme.palette.primary.main);
            setBackgroundSize(105);
        }
    }, [theme, inView, setColor, setBackgroundSize]);

    return (
        <Section className={clsx(className, classes.root)} ref={ref}>
            <SectionCaption>Wer bin ich?</SectionCaption>
            <div className={classes.container}>
                <Fade triggerOnce direction='left'>
                    <MeImage className={classes.meImage} />
                </Fade>
                <div className={classes.content}>
                    <Fade triggerOnce direction='up'>
                        <Typography className={classes.text} color='secondary'>
                            Ich heiße Jan Höck und wurde am 17.01.1996 in Siegburg geboren. Ich habe eine Ausbildung zum Anwendungsentwicker
                            absolviert und arbeite seit dem in diesem Beruf. Doch wie kam ich dazu mich für diesen Berufsweg zu entscheiden? Als
                            meinen Freunden und mir mit 14 Jahren das Spielen von „Minecraft“ zu eintönig wurde, hatten wir die Idee es durch das
                            Programmieren von Erweiterungen abwechlunsgreicher zu gestalten. Problem dabei war nur, dass keiner von uns programmieren
                            konnte. Kurzer Hand haben wir angefangen Youtube-Videos zu diesem Thema zu schauen, die verschiedenen Herangehensweisen
                            erlernt und umgesetzt. Nachdem Aufbau eines Wissensfundus haben wir uns die kostenfrei zugängliche Serverdatei von
                            „Minecraft“ heruntergeladen und das Gelernte angewandt. Durch die verschiedenen, von uns programmierten Erweiterungen
                            haben wir es geschafft einen der größten deutschen Server aufzubauen. Andere Spieler:innen wurden auf uns aufmerksam und
                            unterstützten uns. Hierdurch haben wir zunehmend mehr Geld mit unseren Programmierungen verdient, sodass wir über unsere
                            Eltern ein eigenes Unternehmen anmelden mussten. So entdeckte ich mit 14 Jahren meine Leidenschaft für das Programmieren
                            und machte anschließend mein Hobby zu meinem Beruf.
                        </Typography>
                    </Fade>
                    <Fade triggerOnce direction='up'>
                        <SkillsContainer className={classes.skillsContainer} />
                    </Fade>
                </div>
            </div>
        </Section>
    );
};
