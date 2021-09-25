import { StatBlockData } from '../types/StatBlockData';

const giantSpider: StatBlockData = {
    id: 'giant-spider',
    title: 'Giant Spider',
    description: 'Large beast, unaligned',
    primaryStats: [
        { name: 'Armor Class', value: '14 (natural armor)' },
        { name: 'Hit Points', value: '26 (4d10+4)' },
        { name: 'Speed', value: '30 ft., climb 30ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 14 },
        { attribute: 'DEX', value: 16 },
        { attribute: 'CON', value: 12 },
        { attribute: 'INT', value: 2 },
        { attribute: 'WIS', value: 11 },
        { attribute: 'CHA', value: 4 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Stealth +7' },
        { name: 'Senses', value: 'Blindsight 10 ft., Darkvision 60 ft., passive Perception 10' },
        { name: 'Challenge', value: '1 (200 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Spider Climb.*** The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
                '***Web Sense.*** While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.',
                '***Web Walker.*** The spider ignores movement restrictions cause by webbing of any sort.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Bite.*** *Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8+3) piercing damage, and the target must make a DC 11 CON saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, and paralyzed while poisoned this way.',
                '***Web (Recharge 5-6).*** *Ranged Weapon Attack:* +5 to hit, range 30 ft. / 60 ft., one target. *Hit:* The target is restrained by webbing. As an action, the restrained target can make a DC 12 STR check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; 5 HP); vulnerable to fire damage; immune to bludgeoning, poison and psychic damage).'
            ]
        },
        {
            texts: [
                'Usually found underground, the lair of a giant spider is often festooned with webs holding helpless victims.'
            ]
        }
    ]
};

export default giantSpider;
