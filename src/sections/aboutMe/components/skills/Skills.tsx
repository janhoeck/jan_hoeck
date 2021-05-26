import React, { createElement, ElementType, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { ClassesOverride } from '../../../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../../../tools/theme/mergeClasses';
import { Theme } from '../../../../tools/theme/theme';
import { ReactLogo } from './logos/ReactLogo';
import { TypescriptLogo } from './logos/TypescriptLogo';
import { MaterialUILogo } from './logos/MaterialUILogo';
import { WebpackLogo } from './logos/WebpackLogo';
import { IntelliJLogo } from './logos/IntelliJLogo';

type ClassKeys = 'root' | 'skill';
const useStyles = createUseStyles<ClassKeys, SkillsProps, Theme>(
    (theme) => ({
        root: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 79px)',
            gridGap: theme.spacing(2),
        },
        skill: {
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            padding: theme.spacing(2),
            '& svg': {
                width: 45,
                height: 45,
            },
        },
    }),
    { name: 'Skills' }
);

export interface SkillsProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
}

const skillComponents: ElementType<HTMLAttributes<SVGElement>>[] = [ReactLogo, TypescriptLogo, MaterialUILogo, WebpackLogo, IntelliJLogo];

export const Skills = (props: SkillsProps) => {
    const { className, classes: classesProp } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)}>
            {skillComponents.map((skillComponent, index) => (
                <div className={classes.skill} key={index}>
                    {createElement(skillComponent)}
                </div>
            ))}
        </div>
    );
};
