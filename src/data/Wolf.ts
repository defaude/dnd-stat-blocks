import { StatBlockData } from '../types/StatBlockData';

const zombie: StatBlockData = {
    id: 'wolf',
    title: 'Wolf',
    description: 'Medium beast, unaligned',
    primaryStats: [
        { name: 'Armor Class', value: '13 (natural armor)' },
        { name: 'Hit Points', value: '11 (2d8+2)' },
        { name: 'Speed', value: '40 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 12 },
        { attribute: 'DEX', value: 15 },
        { attribute: 'CON', value: 12 },
        { attribute: 'INT', value: 3 },
        { attribute: 'WIS', value: 12 },
        { attribute: 'CHA', value: 6 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Perception +3, Stealth +4' },
        { name: 'Senses', value: 'passive Perception 13' },
        { name: 'Challenge', value: '1/4 (50 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Keen Hearing and Smell.*** The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
                '***Pack Tactics.*** The wolf has advantage on an attack roll against a creature if at least one of the wolf\'s allies is within 5 feet of the creature and the ally isn\'t incapacitated.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Bite.*** *Melee weapon attack:* +4 to hit, react 5 ft., one creature. *Hit:* 7 (2d4+2) piercing damage. If the target is a creature, it must succeed on a DC 11 STR saving throw or be knocked prone.'
            ]
        },
        {
            texts: [
                'Wolves are found in subarctic and temperate regions of the world, running in packs through hills and forests.'
            ]
        }
    ]
};

export default zombie;
