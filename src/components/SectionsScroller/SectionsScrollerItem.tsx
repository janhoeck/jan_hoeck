import React, { FunctionComponent, TouchEvent, useRef, useState, WheelEvent } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../tools/theme/theme';
import { ClassesOverride } from '../../tools/types/ReactJSSTypes';
import { mergeClasses } from '../../tools/theme/mergeClasses';
import clsx from 'clsx';

type ClassKeys = 'root';
const useStyles = createUseStyles<ClassKeys, SectionsScrollerItemProps, Theme>(
    {
        root: {
            height: '100vh',
            overflow: 'auto',
        },
    },
    { name: 'SectionsScrollerItem' }
);

export interface SectionsScrollerItemProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
    sectionIndex: number;
    sectionsCount: number;
    onSectionChange: (toIndex: number) => void;
}

export const SectionsScrollerItem: FunctionComponent<SectionsScrollerItemProps> = (props) => {
    const { children, className, classes: classesProp, sectionIndex, sectionsCount, onSectionChange } = props;
    const classes = mergeClasses(useStyles(props), classesProp);
    const rootRef = useRef<HTMLDivElement>(null);

    const [lastTouchY, setLastTouchY] = useState<number | undefined>(undefined);

    const changeSection = (direction: 'up' | 'down') => {
        const { current } = rootRef;
        if (!current) {
            return;
        }

        const isScrollBarTop = current.scrollTop === 0;
        const isScrollBarBottom = Math.round(current.scrollHeight - current.clientHeight) === Math.round(current.scrollTop);

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
            className={clsx(className, classes.root)}
            ref={rootRef}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
};
