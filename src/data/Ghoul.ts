import { StatBlockData } from '../types/StatBlockData';

const ghoul: StatBlockData = {
    id: 'ghoul',
    title: 'Ghoul',
    description: 'Medium undead, chaotic evil',
    primaryStats: [
        { name: 'Armor Class', value: '12' },
        { name: 'Hit Points', value: '22 (5d8)' },
        { name: 'Speed', value: '30 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 13 },
        { attribute: 'DEX', value: 15 },
        { attribute: 'CON', value: 10 },
        { attribute: 'INT', value: 7 },
        { attribute: 'WIS', value: 10 },
        { attribute: 'CHA', value: 6 }
    ],
    secondaryStats: [
        { name: 'Damage Immunities', value: 'poison' },
        { name: 'Condition Immunities', value: 'poisoned' },
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 10' },
        { name: 'Challenge', value: '1 (200 XP)' }
    ],
    blocks: [
        {
            heading: 'Actions',
            texts: [
                '***Bite.*** *Melee weapon attack:* +2 to hit, react 5 ft., one target. *Hit:* 9 (2d6+2) piercing damage.',
                '***Claws.*** *Melee weapon attack:* +4 to hit, react 5 ft., one target. *Hit:* 7 (2d4+2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 CON saving throw or be paralyzed for 1 minute. The creature can repeat the saving throw at the end of its turns, ending the effect early on a success.'
            ]
        },
        {
            texts: [
                'Ghouls roam the night in packs, driven by an insatiable hunger for humanoid flesh. Like maggots or carrion beetles, they thrive in places rank with decay and death.'
            ]
        }
    ]
};

export default ghoul;
