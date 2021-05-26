import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import clsx from 'clsx';
import { Section, Typography, useSectionsScrollerContext } from '../../components';
import { Theme } from '../../tools/theme/theme';
import { CgMouse } from 'react-icons/all';
import { addAlpha } from '../../tools/utils/ColorUtils';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';

type ClassKey = 'root' | 'headlineContainer' | 'headline' | 'subHeadline' | 'scrollInformation';
const useStyles = createUseStyles<ClassKey, HeaderProps, Theme>(
    (theme) => ({
        root: {
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, rgba(51,51,51,0.2) 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        headlineContainer: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            color: theme.palette.common.white,
            textTransform: 'uppercase',
        },
        headline: {
            margin: 0,
        },
        subHeadline: {
            color: addAlpha(theme.palette.common.white, 0.5),
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
    const { setColor, setBackgroundSize } = useSectionsScrollerContext();

    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setColor(theme.palette.common.white);
            setBackgroundSize(140);
        }
    }, [theme, inView, setColor, setBackgroundSize]);

    return (
        <Section className={clsx(className, classes.root)} ref={ref}>
            <Fade duration={2000}>
                <div className={classes.headlineContainer}>
                    <Typography className={classes.headline} variant='headlineBig' color='contrastPrimary'>
                        Jan Höck
                    </Typography>
                    <Typography className={classes.subHeadline} variant='subHeadlineBig' color='contrastPrimary'>
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
