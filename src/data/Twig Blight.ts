import { StatBlockData } from '../types/StatBlockData';

const twigBlight: StatBlockData = {
    id: 'twigBlight',
    title: 'Twig Blight',
    description: 'Small plant, neutral evil',
    primaryStats: [
        { name: 'Armor Class', value: '13 (natural armor)' },
        { name: 'Hit Points', value: '4 (1d6+1)' },
        { name: 'Speed', value: '20 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 6 },
        { attribute: 'DEX', value: 13 },
        { attribute: 'CON', value: 12 },
        { attribute: 'INT', value: 4 },
        { attribute: 'WIS', value: 8 },
        { attribute: 'CHA', value: 3 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Stealth +3' },
        { name: 'Damage Vulnerabilities', value: 'fire' },
        { name: 'Condition Immunities', value: 'blinded, deafened' },
        { name: 'Senses', value: 'blindsight 60 ft. (blind beyond this radius), passive Perception 9' },
        { name: 'Languages', value: 'Understands Common but doesn\'t speak' },
        { name: 'Challenge', value: '1/8 (25 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***False Appearance.*** While the blight remains motionless, it is indistinguishable from a dead shrub.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Claws.*** *Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4+1) piercing damage.'
            ]
        },
        {
            texts: [
                'The skittering creature resembles a small, leafless, walking plant. Twig blights hide by rooting themselves among ordinary plants.'
            ]
        }
    ]
};

export default twigBlight;