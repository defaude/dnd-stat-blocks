import { StatBlockData } from './types/StatBlockData';

// import all data files automatically
const glob = import.meta.globEager('./data/*.ts');

// map to an array each module's default export
export const entities: StatBlockData[] = Object.values(glob).map(e => e.default);
