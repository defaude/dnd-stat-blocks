import { StatBlockData } from '../types/StatBlockData';

const orc: StatBlockData = {
    id: 'orc',
    title: 'Orc',
    description: 'Medium humanoid (orc), chaotic evil',
    primaryStats: [
        { name: 'Armor Class', value: '13 (hide armor)' },
        { name: 'Hit Points', value: '15 (2d8+6)' },
        { name: 'Speed', value: '30 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 16 },
        { attribute: 'DEX', value: 12 },
        { attribute: 'CON', value: 16 },
        { attribute: 'INT', value: 7 },
        { attribute: 'WIS', value: 11 },
        { attribute: 'CHA', value: 10 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Intimidation +2' },
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 10' },
        { name: 'Languages', value: 'Common, Orc' },
        { name: 'Challenge', value: '1/2 (100 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Aggressive.*** As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Greataxe.*** *Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 9 (1d12+3) slashing damage.',
                '***Javelin.*** *Melee or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 30 ft. / 120 ft., one target. *Hit:* 6 (1d6+3) piercing damage.'
            ]
        },
        {
            texts: [
                'Orcs are renowned for their barbarism. They have stooped postures, low foreheads, and piglike faces with prominent lower canines that resemble a boar\'s tusks.'
            ]
        }
    ]
};

export default orc;
