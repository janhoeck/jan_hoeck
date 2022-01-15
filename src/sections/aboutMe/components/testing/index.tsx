import { ReactComponent as CypressLogo } from './CypressLogo.svg';
import { ReactComponent as JestLogo } from './JestLogo.svg';
import { SkillItem } from '../../../../components/Skills/Skill';

export const testing: SkillItem[] = [
    {
        component: CypressLogo,
        tooltip: 'Cypress',
        description:
            'Eine Software sollte getestet sein. Und da habe ich einfach die Erfahrung gemacht, dass automatisierte Tests mit Cypress einfach am schönsten sind. Die Tests zu schreiben ist ein Kinderspiel und auch das debuggen geklingt damit ganz einfach.',
    },
    {
        component: JestLogo,
        tooltip: 'Jest',
        description: 'Mit der Hilfe Jest habe ich für meine Componente (oder auch normale Funktionen), Unittests geschrieben.',
    },
];
