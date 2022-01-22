import { ReactComponent as CypressLogo } from './CypressLogo.svg';
import { ReactComponent as JestLogo } from './JestLogo.svg';
import { ReactComponent as SeleniumLogo } from './SeleniumLogo.svg';
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
    {
        component: SeleniumLogo,
        tooltip: 'Selenium',
    },
];
