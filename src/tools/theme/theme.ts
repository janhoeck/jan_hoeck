export interface PaletteColor {
    main: string;
    light: string;
    dark: string;
    contrastColor: string;
}

export interface Theme {
    spacing: (value1: number, value2?: number, value3?: number, value4?: number) => string;
    palette: {
        common: {
            white: string;
            cardBoxShadow: string;
        };
        primary: PaletteColor;
        text: {
            primary: string;
            secondary: string;
            backgroundText: string;
            contrastPrimary: string;
        };
    };
}

const spacing = (value1: number, value2?: number, value3?: number, value4?: number) => {
    const calculate = (value?: number) => (typeof value !== 'undefined' ? 8 * value : undefined);
    const spacings = [calculate(value1), calculate(value2), calculate(value3), calculate(value4)];

    return spacings
        .filter((spacing) => typeof spacing !== 'undefined')
        .map((spacing) => `${spacing}px`)
        .join(' ');
};

export const theme: Theme = {
    spacing: spacing,
    palette: {
        common: {
            white: '#FFFFFF',
            cardBoxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
        primary: {
            main: '#304652',
            dark: '#213038',
            light: '#6794ad',
            contrastColor: '#FFFFFF',
        },
        text: {
            primary: '#4d4d4d',
            secondary: '#999',
            contrastPrimary: 'rgba(255,255,255,0.8)',
            backgroundText: '#FAFAFA',
        },
    },
};
