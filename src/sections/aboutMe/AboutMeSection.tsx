import React from 'react';
import {Section} from '../../components';
import {createUseStyles} from 'react-jss';
import {Theme} from '../../tools/theme/theme';
import {MeImage} from './components/MeImage';
import clsx from 'clsx';
import {Typography} from '../../components';

type ClassKeys = 'root' | 'container' | 'meImage' | 'text' | 'headline' ;
const useStyles = createUseStyles<ClassKeys, AboutMeSectionProps, Theme>((theme) => ({
    root: {
        backgroundColor: 'white',
        height: 'auto',
        padding: theme.spacing(3),
        boxSizing: 'border-box'
    },
    headline: {
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        maxWidth: 1440,
        margin: '5vh auto'
    },
    meImage: {
        marginRight: theme.spacing(6),
    },
    text: {
        textAlign: 'justify',
        lineHeight: '32px',
        zIndex: 1,
        flex: '1 0'
    }
}), { name: 'AboutMeSection' });

export interface AboutMeSectionProps {
    className?: string;
}

export const AboutMeSection = (props: AboutMeSectionProps) => {
    const { className } = props;
    const classes = useStyles(props);

    return (
        <Section className={clsx(className, classes.root)}>
            <Typography variant='subHeadlineBig' className={classes.headline}>Wer bin ich?</Typography>
            <div className={classes.container}>
                <MeImage className={classes.meImage}/>
                <Typography className={classes.text} variant='default'>
                    Ich heiße Jan Höck und wurde am 17.01.1996 in Siegburg geboren.
                    Ich habe eine Ausbildung zum Anwendungsentwicker absolviert und arbeite seit dem in diesem Beruf.
                    Doch wie kam ich dazu mich für diesen Berufsweg zu entscheiden?
                    Als meinen Freunden und mir mit 14 Jahren das Spielen von „Minecraft“ zu eintönig wurde, hatten wir die Idee es durch das Programmieren von Erweiterungen abwechlunsgreicher zu gestalten.
                    Problem dabei war nur, dass keiner von uns programmieren konnte.
                    Kurzer Hand haben wir angefangen Youtube-Videos zu diesem Thema zu schauen, die verschiedenen Herangehensweisen erlernt und umgesetzt.
                    Nachdem Aufbau eines Wissensfundus haben wir uns die kostenfrei zugängliche Serverdatei von „Minecraft“ heruntergeladen und das Gelernte angewandt.
                    Durch die verschiedenen, von uns programmierten Erweiterungen haben wir es geschafft einen der größten deutschen Server aufzubauen. Andere Spieler*innen wurden auf uns aufmerksam und uns unterstützten uns.
                    Hierdurch haben wir zunehmend mehr Geld mit unseren Programmierungen verdient, sodass wir über unsere Eltern ein eigenes Unternehmen anmelden mussten.
                    So entdeckte ich mit 14 Jahren meine Leidenschaft für das Programmieren und machte anschließend mein Hobby zu meinem Beruf.
                </Typography>
            </div>
        </Section>
    )
}
