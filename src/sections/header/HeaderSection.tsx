import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import clsx from 'clsx';

import image from './assets/node-js.jpg';
import { Section, Typography, useSectionsScrollerContext } from '../../components';
import { Theme } from '../../tools/theme/theme';
import { CgMouse } from 'react-icons/all';
import { addAlpha } from '../../tools/utils/ColorUtils';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';

type ClassKey = 'root' | 'headlineContainer' | 'headline' | 'scrollInformation';
const useStyles = createUseStyles<ClassKey, HeaderProps, Theme>(
    (theme) => ({
        root: {
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, rgba(51,51,51,0.2) 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '&:before': {
                height: '100%',
                width: '100%',
                content: '""',
                position: 'fixed',
                background: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: '120%',
                zIndex: -1,
                transition: 'background-size .5s ease-out',
            },
        },
        headlineContainer: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            color: 'rgba(255,255,255,0.8)',
            textTransform: 'uppercase',
        },
        headline: {
            margin: 0,
        },
        scrollInformation: {
            position: 'absolute',
            bottom: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            color: addAlpha(theme.palette.common.white, 0.5),
            alignItems: 'center',
            textTransform: 'uppercase',
            '& > svg': {
                marginBottom: theme.spacing(1),
                fontSize: '2rem',
            },
        },
    }),
    { name: 'HeaderSection' }
);

export interface HeaderProps {
    className?: string;
}

export const HeaderSection = (props: HeaderProps) => {
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
            <Fade duration={2000}>
                <div className={classes.headlineContainer}>
                    <Typography className={classes.headline} variant='headlineBig' color='contrastPrimary'>
                        Jan Höck
                    </Typography>
                    <Typography variant='subHeadlineBig' color='contrastPrimary'>
                        Senior Frontend Entwickler
                    </Typography>
                </div>
            </Fade>
            <div className={classes.scrollInformation}>
                <CgMouse />
                <Typography color='inherit' variant='secondary'>
                    Finde mehr heraus
                </Typography>
            </div>
        </Section>
    );
};
