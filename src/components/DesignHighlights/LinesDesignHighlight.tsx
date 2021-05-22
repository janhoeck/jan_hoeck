import React from 'react';
import clsx from 'clsx';
import {createUseStyles} from 'react-jss';
import {Theme} from '../../tools/theme/theme';

type ClassKeys = 'root';
const useStyles = createUseStyles<ClassKeys, LinesProps, Theme>((theme) => ({
    root: {
        background: `linear-gradient(${theme.palette.primary.light} .05em, transparent .05em)`,
        backgroundSize: '100% 5px',
        height: '100%',
        width: '100%'
    }
}), {name: 'LinesDesignHighlight'});

export interface LinesProps {
    className?: string;
}

export const LinesDesignHighlight = (props: LinesProps) => {
    const {className} = props;
    const classes = useStyles(props);

    return (
        <div className={clsx(className, classes.root)}/>
    );
};

LinesDesignHighlight.displayName = 'LinesDesignHighlight';
