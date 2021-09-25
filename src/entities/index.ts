import { StatBlockData } from '../types/StatBlockData';
import { bugbear } from './Bugbear';
import { krea } from './Krea (Fox)';
import { evilMage } from './Evil Mage';
import { goblin } from './Goblin';
import { nothic } from './Nothic';
import { redbrandRuffian } from './Redbrand Ruffian';
import { skeleton } from './Skeleton';

export const entities: StatBlockData[] = [
    krea,
    goblin,
    bugbear,
    redbrandRuffian,
    skeleton,
    evilMage,
    nothic
];
