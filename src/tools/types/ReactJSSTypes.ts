import type { Classes } from 'jss';

export type ClassesOverride<T extends string> = Partial<Classes<T>>;
