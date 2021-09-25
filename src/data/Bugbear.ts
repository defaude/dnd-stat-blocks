import { StatBlockData } from '../types/StatBlockData';

const bugbear: StatBlockData = {
    id: 'bugbear',
    title: 'Bugbear',
    description: 'Medium humanoid (goblinoid), chaotic evil',
    primaryStats: [
        { name: 'Armor Class', value: '16 (hide armor, shield)' },
        { name: 'Hit Points', value: '27 (5d8+5)' },
        { name: 'Speed', value: '30 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 15 },
        { attribute: 'DEX', value: 14 },
        { attribute: 'CON', value: 13 },
        { attribute: 'INT', value: 8 },
        { attribute: 'WIS', value: 11 },
        { attribute: 'CHA', value: 9 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Stealth +6, Survival +2' },
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 10' },
        { name: 'Languages', value: 'Common, Goblin' },
        { name: 'Challenge', value: '1 (200 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Brute.*** When the bugbear hits with a melee weapon attack, the attack deals one extra die of the weapon\'s damage to the target (included below).',
                '***Surprise Attack.*** If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Morningstar.*** *Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 11 (2d8+2) piercing damage.',
                '***Javelin.*** *Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 30 ft. / 120 ft., one target. *Hit:* 5 (1d6+2) piercing damage or 9 (2d6+2) piercing damage in melee.'
            ]
        },
        {
            texts: [
                'Bugbears are cruel and unruly humanoids that live to bully the weak and dislike being bossed around. Despite their intimidating builds, bugbears move with surprising stealth and are fond of setting ambushes.'
            ]
        }
    ]
};

export default bugbear;
