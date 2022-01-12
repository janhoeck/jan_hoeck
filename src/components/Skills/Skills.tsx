import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import { Theme } from '../../tools/theme/theme';
import { Skill, SkillItem } from './Skill';

type ClassKeys = 'root';
const useStyles = createUseStyles<ClassKeys, SkillsProps, Theme>(
    (theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: theme.spacing(2),
        },
    }),
    { name: 'Skills' }
);

export interface SkillsProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
    skills: SkillItem[];
}

export const Skills = (props: SkillsProps) => {
    const { className, classes: classesProp, skills } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)}>
            {skills.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}
        </div>
    );
};
