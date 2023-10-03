import React, { HTMLAttributes } from 'react';
import { useSectionsScrollerContext } from './SectionsScrollerContext';
import { twMerge } from 'tailwind-merge';

export interface SectionIndicatorProps extends HTMLAttributes<HTMLUListElement> {
    sectionsCount: number;
    activeSectionIndex: number;
}

export const SectionIndicator = (props: SectionIndicatorProps) => {
    const { className, sectionsCount, activeSectionIndex } = props;
    const { color, setActiveSectionIndex } = useSectionsScrollerContext();

    return (
        <ul className={twMerge('flex flex-col items-center list-none [&>*:not(:last-child)]:mb-4', className)}>
            {new Array(sectionsCount).fill(true).map((_, index) => (
                <li
                    key={index}
                    className={twMerge(
                        'w-[4px] h-[4px] rounded-full transition-all duration-300 cursor-pointer',
                        index === activeSectionIndex && 'w-[12px] h-[12px]'
                    )}
                    style={{ backgroundColor: color }}
                    onClick={() => setActiveSectionIndex(index)}
                />
            ))}
        </ul>
    );
};
