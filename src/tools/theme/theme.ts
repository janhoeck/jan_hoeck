import colors from './colors'
import textColor from './textColor'

export const extend = {
    colors,
    textColor,
}
export const boxShadow = {
    card: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
}

const theme = {
    extend,
    boxShadow
}

export default theme
