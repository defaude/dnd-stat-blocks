import { StatBlockData } from '../types/StatBlockData';

const fox: StatBlockData = {
    id: 'fox',
    title: 'Fox',
    description: 'Tiny beast, unaligned',
    primaryStats: [
        { name: 'Armor Class', value: '13' },
        { name: 'Hit Points', value: '5 (2d4)' },
        { name: 'Speed', value: '30 ft., burrow 5ft.' }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Perception +3, Stealth +5' },
        { name: 'Senses', value: 'Darkvision 60ft., passive Perception 13' },
        { name: 'Languages', value: 'none' },
        { name: 'Challenge', value: '1/8 (10 XP)' }
    ],
    attributes: [
        { attribute: 'STR', value: 2 },
        { attribute: 'DEX', value: 16 },
        { attribute: 'CON', value: 11 },
        { attribute: 'INT', value: 3 },
        { attribute: 'WIS', value: 13 },
        { attribute: 'CHA', value: 10 }
    ],
    blocks: [
        {
            texts: [
                '***Keen Hearing.*** The fox has advantage on Wisdom (Perception) checks that rely on hearing.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Bite.*** *Melee weapon attack:* +5 to hit, react 5 ft., one creature. *Hit:* 1d4 piercing damage.'
            ]
        }
    ]
};

export default fox;
