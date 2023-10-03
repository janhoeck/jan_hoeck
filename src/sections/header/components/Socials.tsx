import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../../tools/theme/theme';
import { ClassesOverride } from '../../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../../tools/theme/mergeClasses';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

type ClassKeys = 'root';
const useStyles = createUseStyles<ClassKeys, SocialProps, Theme>(
    (theme) => ({
        root: {
            display: 'flex',
            gap: theme.spacing(1),
            color: theme.palette.text.primary,
            alignItems: 'center',
            justifyContent: 'center',
        },
    }),
    { name: 'Socials' }
);

export interface SocialProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
}

export const Socials = (props: SocialProps) => {
    const { className, classes: classesProp } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(classes.root, className)}>
            <a href='https://github.com/janhoeck' target='_blank' rel='noreferrer'>
                <FiGithub size={25} />
            </a>
            <a href='mailto:jan.hoeck@gmx.net'>
                <AiOutlineMail size={25} />
            </a>
            <a href='tel:+49017656790159'>
                <AiOutlinePhone size={25} />
            </a>
        </div>
    );
};
