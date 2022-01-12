import { SkillItem } from '../../../../components/Skills/Skill';
import { MaterialUILogo } from './MaterialUILogo';
import { ReactJSSLogo } from './ReactJSSLogo';

export const libraries: SkillItem[] = [
    {
        component: MaterialUILogo,
        tooltip: 'Material-ui 5',
        description:
            'Mit dieser Component Library arbeite ich mittlerweile seit Tag 1. Die Codebase, die Community und die Dokumentation dieser Library sind einfach nur super! Durch das Theming ist alles einfach anpassbar und kombinierbar.',
    },
    {
        component: ReactJSSLogo,
        tooltip: 'react-jss',
        description:
            'Ein sehr sehr cooles Tool um CSS direkt einer Componente zugehörig zu schreiben. Habe ich wirklich lange und intensiv benutzt und lieben gelernt. Mit emotion oder styled-components habe ich auch schon Erfahrungen gesammelt.',
    },
];
