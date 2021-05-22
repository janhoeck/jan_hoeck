import React from 'react';
import {createUseStyles} from 'react-jss';
import clsx from 'clsx';

import image from './assets/node-js.jpg';
import {Section} from '../../components';
import {Theme} from '../../tools/theme/theme';
import {Typography} from '../../components';

type ClassKey = 'root' | 'headlineContainer' | 'headline';
const useStyles = createUseStyles<ClassKey, HeaderProps, Theme>((theme) => ({
    root: {
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, rgba(51,51,51,0.2) 100%)`,
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
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        color: 'rgba(255,255,255,0.8)',
        textTransform: 'uppercase',
    },
    headline: {
        margin: 0,
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
                <Typography className={classes.headline} variant='headlineBig' color='contrastPrimary'>Jan Höck</Typography>
                <Typography variant='subHeadlineBig' color='contrastPrimary'>Senior Frontend Entwickler</Typography>
            </div>
        </Section>
    )

}
