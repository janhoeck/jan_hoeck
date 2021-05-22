import React from 'react';
import {createUseStyles} from 'react-jss';
import clsx from 'clsx';

import image from './assets/node-js.jpg';
import {Section} from '../../components';
import {Theme} from '../../tools/theme/theme';
import {Typography} from '../../components';

type ClassKey = 'root' | 'headlineContainer' | 'headline' | 'triangles' | 'triangleBlue' | 'triangleWhite';
const useStyles = createUseStyles<ClassKey, HeaderProps, Theme>((theme) => ({
    root: {
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, rgba(51,51,51,0.2) 100%)`,
        height: '70vh',
        '&:before': {
            height: '100%',
            width: '100%',
            content: '""',
            position: 'fixed',
            background: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
        }
    },
    headlineContainer: {
        position: 'absolute',
        textAlign: 'center',
        left: 0,
        top: '50%',
        transform: 'translateY(-100%)',
        display: 'block',
        width: '100%',
        color: 'rgba(255,255,255,0.8)',
        textTransform: 'uppercase',
    },
    headline: {
        margin: 0,
    },
    triangles: {
        position: 'absolute',
        width: '100%',
        height: '20vh',
        bottom: 0,
    },
    triangleBlue: {
        position: 'absolute',
        height: '20vh',
        width: '150%',
        backgroundColor: theme.palette.primary.main,
        transform: 'rotate(4deg) translateY(210px)'
    },
    triangleWhite: {
        position: 'absolute',
        left: -20,
        height: '20vh',
        width: '150%',
        backgroundColor: theme.palette.common.white,
        transform: 'rotate(-4deg) translateY(112px)'
    }
}), { name: 'HeaderSection' });

export interface HeaderProps {
    className?: string;
}

export const HeaderSection = (props: HeaderProps) => {
    const { className } = props;
    const classes = useStyles(props);

    return (
        <Section component='header' className={clsx(className, classes.root)}>
            <div className={classes.headlineContainer}>
                <Typography className={classes.headline} variant='headlineBig'>Jan Höck</Typography>
                <Typography variant='subHeadlineBig'>Senior Frontend Entwickler</Typography>
            </div>
            <div className={classes.triangles}>
                <div className={classes.triangleBlue}/>
                <div className={classes.triangleWhite}/>
            </div>
        </Section>
    )

}
