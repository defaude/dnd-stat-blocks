import { StatBlockData } from '../types/StatBlockData';

const youngGreenDragon: StatBlockData = {
    id: 'youngGreenDragon',
    title: 'Young Green Dragon',
    description: 'Large dragon, lawful evil',
    primaryStats: [
        { name: 'Armor Class', value: '18 (natural armor)' },
        { name: 'Hit Points', value: '136 (16d10+48)' },
        { name: 'Speed', value: '40 ft., fly 60 ft., swim 40 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 19 },
        { attribute: 'DEX', value: 12 },
        { attribute: 'CON', value: 17 },
        { attribute: 'INT', value: 16 },
        { attribute: 'WIS', value: 13 },
        { attribute: 'CHA', value: 15 }
    ],
    secondaryStats: [
        { name: 'Saving Throws', value: 'Dex +4, Con +6, Wis +4, Cha +5' },
        { name: 'Skills', value: 'Deception +5, Perception +7, Stealth +4' },
        { name: 'Damage Immunities', value: 'poison' },
        { name: 'Condition Immunities', value: 'poisoned' },
        { name: 'Senses', value: 'blindsight 30 ft., darkvision 120ft., passive Perception 17' },
        { name: 'Languages', value: 'Common, Draconic' },
        { name: 'Challenge', value: '8 (3900 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Amphibious.*** The dragon can breathe air and water.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Multiattack.*** The dragon makes three attacks: one with its bite and two with its claws.',
                '***Bite.*** *Melee weapon attack:* +7 to hit, react 10 ft., one target. *Hit:* 15 (2d10+4) piercing damage plus 7 (2d6) poision damage.',
                '***Claw.*** *Melee weapon attack:* +7 to hit, react 5 ft., one target. *Hit:* 11 (2d6+4) slashing damage.',
                '***Poison Breath (Recharge 5-6).*** The dragon exhales poisonous gas in a 30-foot cone. Each creature in the cone must make a DC 14 CON saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.'
            ]
        },
        {
            texts: [
                'Thoroughly evil, green dragons delight in subverting and corrupting the good-hearted. They prefer to dwell in ancient forests.'
            ]
        }
    ]
};

export default youngGreenDragon;
