import React from 'react';
import meImage from '../assets/me.jpg';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../../tools/theme/theme';
import clsx from 'clsx';
import { createMediaQuery } from '../../../tools/theme/createMediaQuery';

type ClassKeys = 'root' | 'image' | 'highlight';
const useStyles = createUseStyles<ClassKeys, MeImageProps, Theme>(
    (theme) => ({
        root: {
            position: 'relative',
            width: 350,
            height: 350,
            [createMediaQuery('md').down]: {
                width: 250,
                height: 250,
                '& $highlight': {
                    display: 'none',
                },
            },
        },
        image: {
            width: 'inherit',
            height: 'inherit',
            borderRadius: '50%',
            border: `5px solid ${theme.palette.common.white}`,
            position: 'relative',
            zIndex: 1,
        },
        highlight: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            left: -45,
            bottom: -30,
        },
    }),
    { name: 'MeImage' }
);

export interface MeImageProps {
    className?: string;
}

export const MeImage = (props: MeImageProps) => {
    const { className } = props;
    const classes = useStyles(props);

    return (
        <div className={clsx(className, classes.root)}>
            <img className={classes.image} src={meImage} alt='Jan Höck' />
            <div className={classes.highlight} />
        </div>
    );
};
