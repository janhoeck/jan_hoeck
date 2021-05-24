import React from 'react';
import meImage from '../assets/me.jpg';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../../tools/theme/theme';
import clsx from 'clsx';
import { LinesDesignHighlight } from '../../../components/DesignHighlights';

type ClassKeys = 'root' | 'image' | 'lines';
const useStyles = createUseStyles<ClassKeys, MeImageProps, Theme>(
    {
        root: {
            position: 'relative',
            overflow: 'hidden',
            width: 350,
            height: 350,
        },
        image: {
            width: 'inherit',
            height: 'inherit',
            clipPath: 'polygon(0 0, 100% 0%, 100% 77%, 0% 100%)',
            position: 'relative',
            zIndex: 1,
        },
        lines: {
            width: 'calc(100% - 10px)',
            position: 'absolute',
            bottom: 10,
        },
    },
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
            <LinesDesignHighlight className={classes.lines} />
        </div>
    );
};
