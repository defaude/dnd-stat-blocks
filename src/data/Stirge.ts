import { StatBlockData } from '../types/StatBlockData';

const stirge: StatBlockData = {
    id: 'stirge',
    title: 'Stirge',
    description: 'Tiny beast, unaligned',
    primaryStats: [
        { name: 'Armor Class', value: '14 (natural armor)' },
        { name: 'Hit Points', value: '2 (1d4)' },
        { name: 'Speed', value: '10 ft., fly 40 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 4 },
        { attribute: 'DEX', value: 16 },
        { attribute: 'CON', value: 11 },
        { attribute: 'INT', value: 2 },
        { attribute: 'WIS', value: 8 },
        { attribute: 'CHA', value: 6 }
    ],
    secondaryStats: [
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 9' },
        { name: 'Challenge', value: '1/8 (25 XP)' }
    ],
    blocks: [
        {
            heading: 'Actions',
            texts: [
                '***Blood Drain.*** *Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5 (1d4+3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn\'t attack. Instead, at the start of each of the stirge\'s turns, the target loses 5 (1d4+3) hit points due to blood loss.\n\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.'
            ]
        },
        {
            texts: [
                'A stirge is a winged pest that feeds on the blood of living creatures, drawing sustenance through its proboscis, which it uses to pierce a victim\'s flesh while clutching onto its prey with hooked claws.'
            ]
        }
    ]
};

export default stirge;