import React, {Children, FunctionComponent, WheelEvent, useEffect, useMemo, useState} from 'react';
import {Switch, useLocation, useHistory, RouteProps, Link} from 'react-router-dom';
import {createUseStyles} from 'react-jss';
import {Theme} from '../../tools/theme/theme';
import clsx from 'clsx';
import {ClassesOverride} from '../../tools/types/ReactJSSTypes';
import {mergeClasses} from '../../tools/theme/mergeClasses';
import { animated, useTransition } from 'react-spring';

type ClassKeys = 'root' | 'pageIndicatorContainer' | 'pageIndicatorItem' | 'pageIndicatorItemActive';
const useStyles = createUseStyles<ClassKeys, PageScrollContainerProps, Theme>((theme) => ({
    root: {
        position: 'relative',
        overflow: 'hidden'
    },
    pageIndicatorContainer: {
        position: 'absolute',
        right: theme.spacing(3),
        top: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        listStyleType: 'none',
        '& > *:not(:last-child)': {
            marginBottom: theme.spacing(2)
        }
    },
    pageIndicatorItem: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        backgroundColor: theme.palette.common.white
    },
    pageIndicatorItemActive: {
        width: 10,
        height: 10
    }
}), { name: 'PageScrollContainer' });

export interface PageScrollContainerProps {
    className?: string;
    classes?: ClassesOverride<ClassKeys>;
    children: React.ReactElement<RouteProps, 'Route'>[];
}

export const PageScrollContainer: FunctionComponent<PageScrollContainerProps> = (props) => {
    const { children, className, classes: classesProp } = props;
    const classes = mergeClasses(useStyles(props), classesProp);
    const location = useLocation();
    const history = useHistory();

    const activeRoute = location.pathname;
    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', overflow: 'hidden' },
        enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)', overflow: 'hidden' },
        leave: { opacity: 0, transform: 'translate3d(0,-50%,0)', overflow: 'hidden' },
    });

    const routes = useMemo<string[]>(() => {
        return Children.map(children, (child) => {
            return child.props.path as string;
        })
    }, [children]);

    const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
        // scroll up is true, when deltaY is a negative number.
        const scrollUp = event.deltaY < 0;
        const scrollDown = !scrollUp;

        const currentRouteIndex = routes.findIndex((route) => route === activeRoute);
        if(scrollUp) {
            if(currentRouteIndex === 0) {
                return;
            }

            history.push({ pathname: routes[currentRouteIndex - 1]});
        }

        if(scrollDown) {
            if(currentRouteIndex === routes.length - 1) {
                return;
            }

            history.push({ pathname: routes[currentRouteIndex + 1]});
        }
    }

    return (
        <div className={clsx(className, classes.root)} onWheel={handleWheel}>
            {transitions((style, location) => (
                <animated.div style={style}>
                    <Switch location={location}>
                        {children}
                    </Switch>
                </animated.div>
            ))}
            <ul className={classes.pageIndicatorContainer}>
                {Children.map(children, (child) => (
                    <Link key={child.props.path as string} to={{ pathname: child.props.path as string }}>
                        <li className={clsx(classes.pageIndicatorItem, {[classes.pageIndicatorItemActive]: child.props.path === activeRoute})}/>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
