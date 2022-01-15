import React, { createElement, ElementType, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import { Theme } from '../../tools/theme/theme';
import { Typography } from '../Typography';

type ClassKeys = 'root' | 'logo';
const useStyles = createUseStyles<ClassKeys, SkillProps, Theme>(
    (theme) => ({
        root: {
            boxShadow: theme.palette.common.cardBoxShadow,
            backgroundColor: theme.palette.common.white,
            padding: theme.spacing(2),
            display: 'flex',
            width: 'auto',
            gap: theme.spacing(2),
        },
        logo: {
            '& svg': {
                width: 45,
                height: 45,
            },
            width: 45,
            height: 45,
        },
    }),
    { name: 'Skill' }
);

export interface SkillItem {
    component: ElementType<HTMLAttributes<SVGElement>>;
    tooltip?: string;
    description?: string;
}

export interface SkillProps extends SkillItem {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
}

export const Skill = (props: SkillProps) => {
    const { className, classes: classesProp, component, tooltip, description } = props;
    const classes = mergeClasses(useStyles(props), classesProp);

    return (
        <div className={clsx(className, classes.root)} title={tooltip}>
            <div className={classes.logo}>{createElement(component)}</div>
            {description && <Typography variant='secondary'>{description}</Typography>}
        </div>
    );
};
