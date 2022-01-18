import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../../../tools/theme/theme';
import { ClassesOverride } from '../../../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../../../tools/theme/mergeClasses';
import { Typography } from '../../../../components/Typography';

type ClassKeys = 'root' | 'backgroundImage' | 'content' | 'texts' | 'links';
const useStyles = createUseStyles<ClassKeys, ReferenceCardProps, Theme>(
    (theme) => ({
        root: {
            boxShadow: theme.palette.common.cardBoxShadow,
            width: 'auto',
            height: 450,
            overflow: 'hidden',
            position: 'relative',
        },
        backgroundImage: {
            backgroundImage: (props) => `url("${props.image}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.2)',
            },
            '&:hover $content': {
                display: 'block',
            },
        },
        content: {
            display: 'none',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(52,73,94,0.75)',
        },
        texts: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& *': {
                fontFamily: 'DINPro',
                color: theme.palette.common.white,
            },
        },
        links: {
            display: 'flex',
            gap: theme.spacing(2),
            flexWrap: 'wrap',
        },
    }),
    { name: 'ReferenceCard' }
);

export interface ReferenceCardProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
    image: string;
    githubUrl: string;
    liveDemoUrl?: string;
    title: string;
}

export const ReferenceCard = (props: ReferenceCardProps) => {
    const { className, classes: classesProp, githubUrl, liveDemoUrl, title } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)}>
            <div className={classes.backgroundImage}>
                <div className={classes.content}>
                    <div className={classes.texts}>
                        <Typography>{title}</Typography>
                        <div className={classes.links}>
                            <a href={githubUrl} target='_blank' rel='noreferrer'>
                                Github
                            </a>
                            {liveDemoUrl && (
                                <a href={liveDemoUrl} target='_blank' rel='noreferrer'>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
