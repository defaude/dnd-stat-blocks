import { StatData } from './StatData';
import { AttributeData } from './AttributeData';
import { BlockData } from './BlockData';

export type StatBlockData = {
    id: string;
    title: string;
    description: string;
    primaryStats: StatData[];
    secondaryStats: StatData[];
    attributes: AttributeData[];
    blocks: BlockData[];
};
