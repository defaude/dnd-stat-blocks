import { StatBlockData } from '../types/StatBlockData';

const hobgoblin: StatBlockData = {
    id: 'hobgoblin',
    title: 'Hobgoblin',
    description: 'Medium humanoid (goblinoid), lawful evil',
    primaryStats: [
        { name: 'Armor Class', value: '18 (chain mail, shield)' },
        { name: 'Hit Points', value: '11 (2d8+2)' },
        { name: 'Speed', value: '30 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 13 },
        { attribute: 'DEX', value: 12 },
        { attribute: 'CON', value: 12 },
        { attribute: 'INT', value: 10 },
        { attribute: 'WIS', value: 10 },
        { attribute: 'CHA', value: 9 }
    ],
    secondaryStats: [
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 10' },
        { name: 'Languages', value: 'Common, Goblin' },
        { name: 'Challenge', value: '1/2 (100 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Martial Advantage.*** Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn\'t incapacitated.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Longsword.*** *Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8+1) slashing damage.',
                '***Longbow.*** *Ranged Weapon Attack:* +4 to hit, range 150 ft. / 600 ft., one target. *Hit:* 5 (1d8+1) piercing damage.'
            ]
        },
        {
            texts: [
                'Hobgoblins are cunning, disciplined warriors who crave conquest. They impose a strict military hierarchy and are often found in the company of goblins and bugbears.'
            ]
        }
    ]
};

export default hobgoblin;
