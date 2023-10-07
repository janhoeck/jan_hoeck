import React, { FunctionComponent, TouchEvent, useRef, useState, WheelEvent } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SectionsScrollerItemProps {
    className?: string;
    sectionIndex: number;
    sectionsCount: number;
    onSectionChange: (toIndex: number) => void;
}

export const SectionsScrollerItem: FunctionComponent<SectionsScrollerItemProps> = (props) => {
    const { children, className, sectionIndex, sectionsCount, onSectionChange } = props;
    const rootRef = useRef<HTMLDivElement>(null);

    const [lastTouchY, setLastTouchY] = useState<number | undefined>(undefined);

    const changeSection = (direction: 'up' | 'down') => {
        const { current } = rootRef;
        if (!current) {
            return;
        }

        const isScrollBarTop = current.scrollTop === 0;
        const isScrollBarBottom =
            Math.round(current.scrollHeight - current.clientHeight) === Math.round(current.scrollTop);

        // Just scroll up when the user scrolled up and the actual scrollbar is placed on top
        if (direction === 'up' && isScrollBarTop) {
            if (sectionIndex === 0) {
                return;
            }
            onSectionChange(sectionIndex - 1);
        }

        // Just scroll down when the user scrolled down and the actual scrollbar is placed on bottom
        if (direction === 'down' && isScrollBarBottom) {
            if (sectionIndex === sectionsCount - 1) {
                return;
            }
            onSectionChange(sectionIndex + 1);
        }
    };

    const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
        // scroll up is true, when deltaY is a negative number.
        const scrollUp = event.deltaY < 0;
        changeSection(scrollUp ? 'up' : 'down');
    };

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        setLastTouchY(event.touches[0].clientY);
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        const currentY = event.changedTouches[0].clientY;
        if (lastTouchY) {
            if (currentY > lastTouchY) {
                changeSection('up');
            } else if (currentY < lastTouchY) {
                changeSection('down');
            }
        }
        setLastTouchY(undefined);
    };

    return (
        <div
            className={twMerge('h-screen overflow-auto', className)}
            ref={rootRef}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
};
