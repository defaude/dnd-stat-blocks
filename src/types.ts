export type StatData = {
    name: string;
    value: string;
};

export type AttributeKey = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

export type AttributeData = {
    attribute: AttributeKey;
    value: number;
};

export type BlockData = {
    heading?: string;
    texts: string[];
}

export type StatBlockData = {
    title: string;
    description: string;
    primaryStats: StatData[];
    secondaryStats: StatData[];
    attributes: AttributeData[];
    blocks: BlockData[];
};