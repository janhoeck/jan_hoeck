import { ReactComponent as CypressLogo } from './CypressLogo.svg';
import { ReactComponent as JestLogo } from './JestLogo.svg';
import { SkillItem } from '../../../../components/Skills/Skill';

export const testing: SkillItem[] = [
    {
        component: CypressLogo,
        tooltip: 'Cypress',
    },
    {
        component: JestLogo,
        tooltip: 'Jest',
    },
];
