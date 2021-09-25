import { StatBlockData } from '../types/StatBlockData';

const cultist: StatBlockData = {
    id: 'cultist',
    title: 'Cultist',
    description: 'Medium humanoid (any race), any non-good alignment',
    primaryStats: [
        { name: 'Armor Class', value: '12 (leather armor)' },
        { name: 'Hit Points', value: '9 (2d8)' },
        { name: 'Speed', value: '30 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 11 },
        { attribute: 'DEX', value: 12 },
        { attribute: 'CON', value: 10 },
        { attribute: 'INT', value: 10 },
        { attribute: 'WIS', value: 11 },
        { attribute: 'CHA', value: 10 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Deception +2, Religion +2' },
        { name: 'Senses', value: 'passive Perception 10' },
        { name: 'Languages', value: 'Any one language (usually Common)' },
        { name: 'Challenge', value: '1/8 (25 XP)' },
        { name: 'Proficiency Bonus', value: '+2' }
    ],
    blocks: [
        {
            texts: [
                '***Dark Devotion.*** The cultist has advantage on saving throws against being charmed or frightened.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Scimitar.*** *Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4 (1d6+1) slashing damage.'
            ]
        }
    ]
};

export default cultist;
