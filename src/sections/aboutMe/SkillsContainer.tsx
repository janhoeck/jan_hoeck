import React from 'react';
import { Typography } from '../../components/Typography';
import { Skills } from './components/skills/Skills';
import { createUseStyles } from 'react-jss';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import { Theme } from '../../tools/theme/theme';
import clsx from 'clsx';

type ClassKeys = 'root' | 'headline';
const useStyles = createUseStyles<ClassKeys, SkillsContainerProps, Theme>(
    (theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        headline: {
            marginBottom: theme.spacing(2),
        },
    }),
    { name: 'SkillsContainer' }
);

export interface SkillsContainerProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
}

export const SkillsContainer = (props: SkillsContainerProps) => {
    const { className, classes: classesProp } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)}>
            <Typography className={classes.headline} variant='subHeadlineBig'>
                SKILLS
            </Typography>
            <Skills />
        </div>
    );
};
