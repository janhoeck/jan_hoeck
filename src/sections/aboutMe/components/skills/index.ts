import { JavaLogo } from './JavaLogo';
import { ReactLogo } from './ReactLogo';
import { WebpackLogo } from './WebpackLogo';
import { TypescriptLogo } from './TypescriptLogo';
import { SkillItem } from '../../../../components/Skills/Skill';
import { NodeJSLogo } from './NodeJSLogo';

export const skills: SkillItem[] = [
    {
        component: NodeJSLogo,
        tooltip: 'NodeJS',
    },
    {
        component: ReactLogo,
        tooltip: 'React',
    },
    {
        component: WebpackLogo,
        tooltip: 'Webpack',
    },
    {
        component: TypescriptLogo,
        tooltip: 'Typescript 4+',
    },
    {
        component: JavaLogo,
        tooltip: 'Java',
    },
];
