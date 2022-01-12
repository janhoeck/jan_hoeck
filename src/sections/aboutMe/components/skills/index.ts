import { IntelliJLogo } from './IntelliJLogo';
import { JavaLogo } from './JavaLogo';
import { ReactLogo } from './ReactLogo';
import { WebpackLogo } from './WebpackLogo';
import { TypescriptLogo } from './TypescriptLogo';
import { SkillItem } from '../../../../components/Skills/Skill';

export const skills: SkillItem[] = [
    {
        component: IntelliJLogo,
        tooltip: 'IntelliJ',
        description: 'IntelliJ. Die IDE welche ich für alle meine Projekte benutzte.',
    },
    {
        component: JavaLogo,
        tooltip: 'Java',
        description:
            'Java ist die Programmiersprache mit der damals alles bei mir begann. Mit 14 Jahren habe ich viele Java Bücher gelesen um so mein Wissen zu erlangen. Auch heute versuche ich bei Java auf dem laufenden zu bleiben. Auch in Kotlin habe ich schon mal reingeschaut.',
    },
    {
        component: ReactLogo,
        tooltip: 'React 17',
        description:
            'Mit entwickle ich jetzt seit 5 Jahren. Das ist das Framework auf welches ich mich spezialisiert habe. Mein Wissen ist da sehr weit gefächert. Egal ob Hooks, Testing, Component-Bases-Pattern oder auch Monorepositories.',
    },
    {
        component: WebpackLogo,
        tooltip: 'Webpack 5',
        description:
            'Webpack habe ich sehr oft benutzt um meine Projekte zu bauen. Allerdings würde ich heutzutage auch andere Bundler (zB Snowpack) bevorzugen. Ich glaube das kommt immer ganz auf das Projekt an.',
    },
    {
        component: TypescriptLogo,
        tooltip: 'Typescript 4+',
        description:
            'Typescript ist einfach ein MUSS in der Javascript Welt. Es hilft einfach dabei, dass Projekt weiterhin stabil zu halten, sollte es mal größer werden.',
    },
];
