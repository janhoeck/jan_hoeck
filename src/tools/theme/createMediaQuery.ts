export interface Breakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

export interface CreateMediaQueryFunction {
    down: string;
    up: string;
}

const defaultBreakpoints: Breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};

export const createMediaQuery = (key: keyof Breakpoints): CreateMediaQueryFunction => {
    return {
        up: `@media (min-width:${defaultBreakpoints[key]}px)`,
        down: `@media (max-width:${defaultBreakpoints[key]}px)`,
    };
};
