import { StatBlockData } from '../types/StatBlockData';

const ogre: StatBlockData = {
    id: 'ogre',
    title: 'Ogre',
    description: 'Large giant, chaotic evil',
    primaryStats: [
        { name: 'Armor Class', value: '11 (hide armor)' },
        { name: 'Hit Points', value: '59 (7d10+21)' },
        { name: 'Speed', value: '40 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 19 },
        { attribute: 'DEX', value: 8 },
        { attribute: 'CON', value: 16 },
        { attribute: 'INT', value: 5 },
        { attribute: 'WIS', value: 7 },
        { attribute: 'CHA', value: 7 }
    ],
    secondaryStats: [
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 8' },
        { name: 'Languages', value: 'Common, Giant' },
        { name: 'Challenge', value: '2 (450 XP)' }
    ],
    blocks: [
        {
            heading: 'Actions',
            texts: [
                '***Greatclub.*** *Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13 (2d8+4) bludgeoning damage.',
                '***Javelin.*** *Melee or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 30 ft. / 120 ft., one target. *Hit:* 11 (2d6+4) piercing damage.'
            ]
        },
        {
            texts: [
                'Ogres are lazy, angry, ten-foot-tall giants that live by raiding and scavenging.'
            ]
        }
    ]
};

export default ogre;
