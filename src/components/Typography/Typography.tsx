import React from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'headline' | 'subHeadline' | 'text' | 'secondary';
type Color = 'inherit' | 'primary' | 'secondary' | 'backgroundText' | 'contrastPrimary';

export interface TypographyProps {
    className?: string;
    variant?: Variant;
    color?: Color;
    noWrap?: boolean;
}

const componentMapping: Record<Variant, React.ElementType> = {
    headline: 'h1',
    subHeadline: 'h4',
    text: 'span',
    secondary: 'span',
};

export const Typography: React.FunctionComponent<TypographyProps> = (props) => {
    const { className, children, variant = 'text', noWrap = false, color = 'primary' } = props;

    const styles: Record<Variant, string> = {
        headline: 'text-[140px] tracking-[24px] xl:text-7xl sm:text-3xl sm:tracking-[10px]',
        subHeadline: 'text-2xl sm:text-lg',
        text: 'text-lg',
        secondary: 'text-sm',
    };

    const colorStyles: Record<Color, string> = {
        inherit: 'text-inherit',
        primary: 'text-primary',
        secondary: 'text-secondary',
        backgroundText: 'text-backgroundText',
        contrastPrimary: 'text-contrastPrimary',
    };

    const Component = componentMapping[variant];
    return (
        <Component className={twMerge(`m-0 font-['DINPro'] ${colorStyles[color]}`, styles[variant], noWrap && 'truncate', className)}>
            {children}
        </Component>
    );
};
