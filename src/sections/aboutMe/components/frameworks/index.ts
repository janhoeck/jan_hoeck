import { SkillItem } from '../../../../components/Skills/Skill'
import { ReactComponent as MuiLogo } from './MuiLogo.svg'
import { ReactComponent as ReactJSSLogo } from './ReactJSSLogo.svg'
import { ReactComponent as ReactLogo } from './ReactLogo.svg'
import { ReactComponent as WebpackLogo } from './WebpackLogo.svg'
import { ReactComponent as SpringBootLogo } from './SpringBootLogo.svg'
import { ReactComponent as jQueryLogo } from './jQueryLogo.svg'

export const frameworks: SkillItem[] = [
    {
        component: ReactLogo,
        tooltip: 'React',
    },
    {
        component: MuiLogo,
        tooltip: 'Mui 5',
    },
    {
        component: ReactJSSLogo,
        tooltip: 'react-jss',
    },
    {
        component: jQueryLogo,
        tooltip: 'jQuery',
    },
    {
        component: WebpackLogo,
        tooltip: 'Webpack',
    },
    {
        component: SpringBootLogo,
        tooltip: 'Spring Boot',
    },
]
