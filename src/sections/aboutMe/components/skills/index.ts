import { ReactComponent as JavaLogo } from './JavaLogo.svg'
import { ReactComponent as JavascriptLogo } from './JavascriptLogo.svg'
import { ReactComponent as TypescriptLogo } from './TypescriptLogo.svg'
import { SkillItem } from '../../../../components/Skills/Skill'
import { ReactComponent as NodeJSLogo } from './NodeJSLogo.svg'
import { ReactComponent as HTML5Logo } from './HTML5Logo.svg'
import { ReactComponent as CSS3Logo } from './CSS3Logo.svg'

export const skills: SkillItem[] = [
    {
        component: JavascriptLogo,
        tooltip: 'Javascript',
    },
    {
        component: NodeJSLogo,
        tooltip: 'NodeJS',
    },
    {
        component: TypescriptLogo,
        tooltip: 'Typescript 4+',
    },
    {
        component: HTML5Logo,
        tooltip: 'HTML 5',
    },
    {
        component: CSS3Logo,
        tooltip: 'CSS 3',
    },
    {
        component: JavaLogo,
        tooltip: 'Java',
    },
]
