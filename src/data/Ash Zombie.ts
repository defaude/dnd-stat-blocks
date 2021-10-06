import { StatBlockData } from '../types/StatBlockData';

const ashZombie: StatBlockData = {
    id: 'ashZombie',
    title: 'Ash Zombie',
    description: 'Medium undead, neutral evil',
    primaryStats: [
        { name: 'Armor Class', value: '8' },
        { name: 'Hit Points', value: '22 (3d8+9)' },
        { name: 'Speed', value: '20 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 13 },
        { attribute: 'DEX', value: 6 },
        { attribute: 'CON', value: 16 },
        { attribute: 'INT', value: 3 },
        { attribute: 'WIS', value: 6 },
        { attribute: 'CHA', value: 5 }
    ],
    secondaryStats: [
        { name: 'Saving Throws', value: 'Wis +0' },
        { name: 'Damage Immunities', value: 'poison' },
        { name: 'Condition Immunities', value: 'poisoned' },
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 13' },
        { name: 'Challenge', value: '1/4 (50 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Undead Fortitude.*** If damage reduces the zombie to 0 hit points, it can make a CON saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 HP instead.',
                '***Ash Puff.*** The first time the zombie takes damage, any living creature within 5 feet of the zombie must succeed on a DC 10 CON saving throw or gain disadvantage on attack rolls, saving throws, and ability checks for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on it early with a successful save.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Slam.*** *Melee weapon attack:* +3 to hit, react 5 ft., one target. *Hit:* 4 (1d6+1) bludgeoning damage.'
            ]
        },
        {
            texts: [
                'Zombies are corpses imbued with a semblance of lice, retaining no vestige of their former selves.'
            ]
        }
    ]
};

export default ashZombie;
