import { StatBlockData } from '../types/StatBlockData';

export const nothic: StatBlockData = {
    id: 'nothic',
    title: 'Nothic',
    description: 'Medium aberration, neutral evil',
    primaryStats: [
        { name: 'Armor Class', value: '15 (natural armor)' },
        { name: 'Hit Points', value: '45 (6d8+18)' },
        { name: 'Speed', value: '30 ft.' }
    ],
    attributes: [
        { attribute: 'STR', value: 14 },
        { attribute: 'DEX', value: 16 },
        { attribute: 'CON', value: 16 },
        { attribute: 'INT', value: 13 },
        { attribute: 'WIS', value: 10 },
        { attribute: 'CHA', value: 8 }
    ],
    secondaryStats: [
        { name: 'Skills', value: 'Arcana + 3, Insight +4, Perception +2, Stealth +5' },
        { name: 'Senses', value: 'truesight 120 ft., passive Perception 12' },
        { name: 'Languages', value: 'Undercommon' },
        { name: 'Challenge', value: '2 (450 XP)' }
    ],
    blocks: [
        {
            texts: [
                '***Keen Sight.*** The nothic has advantage on Wisdom (Perception) checks that rely on sight.'
            ]
        },
        {
            heading: 'Actions',
            texts: [
                '***Multiattack.*** The nothic makes two attacks with its claws.',
                '***Claws.*** *Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d6+3) slashing damage.',
                '***Rotting Gaze.*** The nothic chooses one creature within 30 feet of it that it can see. The target must succeed on a DC 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage.',
                '***Weird Insight.*** The nothic chooses one creature within 30 feet of it that it can see. The target must contest its Charisma (Deception) check against the nothic\'s Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the creature. The target automatically wins if it is immune to being charmed.'
            ]
        },
        {
            texts: [
                'Nothics were once wizards who dared to unlock magical secrets they couldn\'t fathom. Though gifted with strange cosmic insight that allows them to extract knowledge from other creatures, nothics are no longer the wizards the once were and have no memories of their previous lives.'
            ]
        }
    ]
};
