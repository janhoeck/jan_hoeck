
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
        },
        primary: PaletteColor;
    }
}

const spacing = (value1: number, value2?: number, value3?: number, value4?: number) => {
    const calculate = (value?: number) => typeof value !== 'undefined' ? 8 * value : undefined;
    const spacings = [
        calculate(value1),
        calculate(value2),
        calculate(value3),
        calculate(value4),
    ];

    return spacings
        .filter((spacing) => typeof spacing !== 'undefined')
        .map((spacing) => `${spacing}px`)
        .join(' ');
}

export const theme: Theme = {
    spacing: spacing,
    palette: {
        common: {
            white: '#FFFFFF',
        },
        primary: {
            main: '#304652',
            dark: '#213038',
            light: '#6794ad',
            contrastColor: '#FFFFFF'
        }
    }
}
