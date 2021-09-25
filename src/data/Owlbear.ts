import { StatBlockData } from '../types/StatBlockData';

const owlbear: StatBlockData = {
    id: 'owlbear',
    title: 'Owlbear',
    description: 'Large monstrosity, unaligned',
    primaryStats: [
        { name: 'Armor Class', value: '13 (natural armor)' },
        { name: 'Hit Points', value: '59 (7d10+21)' },
        { name: 'Speed', value: '40 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 20 },
        { attribute: 'DEX', value: 12 },
        { attribute: 'CON', value: 17 },
        { attribute: 'INT', value: 3 },
        { attribute: 'WIS', value: 12 },
        { attribute: 'CHA', value: 7 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Perception +3' },
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 13' },
        { name: 'Challenge', value: '3 (700 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Keen Sight and Smell.*** The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Multiattack.*** The owlbear makes two attacks, one with its beak and one with its claws.',
                '***Beak.*** *Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 10 (1d10+5) piercing damage.',
                '***Claws.*** *Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 14 (2d8+5) slashing damage.'
            ]
        },
        {
            texts: [
                'The owlbear\'s reputation for ferocity, stubbornness, and sheer ill temper makes it one of the most feared predators of the wild. There is little, if anything, that a hungry owlbear fears.'
            ]
        }
    ]
};

export default owlbear;
