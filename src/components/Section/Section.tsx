import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SectionProps {
    className?: string;
    children: React.ReactElement | React.ReactElement[];
}

export const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
    const { children, className, ...restProps } = props;

    return (
        <div className={twMerge('relative overflow-hidden min-h-screen w-full', className)} ref={ref} {...restProps}>
            {children}
        </div>
    );
});
