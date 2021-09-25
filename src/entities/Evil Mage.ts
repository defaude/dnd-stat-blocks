import { StatBlockData } from '../types/StatBlockData';

export const evilMage: StatBlockData = {
    id: 'evil-mage',
    title: 'Evil Mage',
    description: 'Medium humanoid (human), lawful evil',
    primaryStats: [
        { name: 'Armor Class', value: '12' },
        { name: 'Hit Points', value: '22 (5d8)' },
        { name: 'Speed', value: '30 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 9 },
        { attribute: 'DEX', value: 14 },
        { attribute: 'CON', value: 11 },
        { attribute: 'INT', value: 17 },
        { attribute: 'WIS', value: 12 },
        { attribute: 'CHA', value: 11 }
    ],
    secondaryStats: [
        { name: 'Saving throws', value: 'Int +5, Wis +3' },
        { name: 'Skills', value: 'Arcana +5, History +5' },
        { name: 'Senses', value: 'passive Perception 11' },
        { name: 'Languages', value: 'Common, Draconic, Dwarvish, Elvish' },
        { name: 'Challenge', value: '1 (200 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Spellcasting.*** The mage is a 4th-level spellcaster that uses Intelligence as its spellcasting ability (spell save DC 13; +5 to hit with spell attacks). The mage knows the following spells from the wizard\'s spell list:\n- Cantrips (at will): light, mage hand, shocking grasp\n- 1st Level (4 slots): *charm person, magic missile*\n- 2nd Level (3 slots): *hold person, misty step*'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Quarterstaff.*** *Melee Weapon Attack:* +1 to hit, reach 5 ft., one target. *Hit:* 3 (1d8-1) bludgeoning damage.'
            ]
        },
        {
            texts: [
                'Evil mages hunger for arcane power and dwell in isolated places, where they can perform terrible magical experiments without interference.'
            ]
        }
    ]
};
