import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'headline' | 'subHeadline' | 'text' | 'secondary';

export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
    variant?: Variant;
    noWrap?: boolean;
}

const componentMapping: Record<Variant, React.ElementType> = {
    headline: 'h1',
    subHeadline: 'h4',
    text: 'span',
    secondary: 'span',
};

export const Typography: React.FunctionComponent<TypographyProps> = (props) => {
    const { className, children, variant = 'text', noWrap = false, ...restProps } = props;

    const styles: Record<Variant, string> = {
        headline: 'text-3xl tracking-normal sm:text-3xl sm:tracking-wider md:text-5xl md:tracking-widest xl:text-7xl',
        subHeadline: 'text-2xl sm:text-lg',
        text: 'text-lg',
        secondary: 'text-sm',
    };

    const Component = componentMapping[variant];
    return (
        <Component
            className={twMerge([`m-0 font-['DINPro']`, styles[variant], noWrap && 'truncate', className])}
            {...restProps}
        >
            {children}
        </Component>
    );
};
