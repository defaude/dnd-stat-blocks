import { StatBlockData } from '../types/StatBlockData';

export const goblin: StatBlockData = {
    id: 'goblin',
    title: 'Goblin',
    description: 'Small humanoid (goblinoid), neutral evil',
    primaryStats: [
        { name: 'Armor Class', value: '15 (leather armor, shield)' },
        { name: 'Hit Points', value: '7 (2d6)' },
        { name: 'Speed', value: '30 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 8 },
        { attribute: 'DEX', value: 14 },
        { attribute: 'CON', value: 10 },
        { attribute: 'INT', value: 10 },
        { attribute: 'WIS', value: 8 },
        { attribute: 'CHA', value: 8 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Stealth +6' },
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 9' },
        { name: 'Languages', value: 'Common, Goblin' },
        { name: 'Challenge', value: '1/4 (50 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Nimble Escape.*** The goblin can take the Disengage or Hide action as a bonus action on each of its turns.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Scimitar.*** *Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6+2) slashing damage.',
                '***Shortbow.*** *Ranged Weapon Attack:* +4 to hit, range 80 ft. / 320 ft., one target. *Hit:* 5 (1d6+2) piercing damage.'
            ]
        },
        {
            texts: [
                'Goblins are black-hearted, gather in overwhelming numbers, and crave power, which they abuse.'
            ]
        }
    ]
};
