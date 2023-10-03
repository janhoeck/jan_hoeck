import React, { createElement, ElementType, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography';

export interface SkillItem {
    component: ElementType<HTMLAttributes<SVGElement>>;
    tooltip?: string;
    description?: string;
}

export interface SkillProps extends SkillItem {
    className?: string;
}

export const Skill = (props: SkillProps) => {
    const { className, component, tooltip, description } = props;

    return (
        <div className={clsx(className, 'shadow-card bg-white p-4 flex w-auto gap-4')} title={tooltip}>
            <div className='w-[45px] h-[45px] [&>svg]:w-[45px] [&>svg]:h-[45px]'>{createElement(component)}</div>
            {description && <Typography variant='secondary'>{description}</Typography>}
        </div>
    );
};
