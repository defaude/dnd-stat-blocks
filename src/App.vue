<template>
  <StatBlock :data="statBlock" />
</template>

<script lang="ts">
import { StatBlockData } from './types';
import StatBlock from './StatBlock.vue';

export default {
  components: { StatBlock },

  setup() {
    const statBlock: StatBlockData = {
      title: 'Skeleton',
      description: 'Medium undead, lawful evil',
      primaryStats: [
        { name: 'Armor Class', value: '13 (armor scraps)' },
        { name: 'Hit Points', value: '13 (2d8+4)' },
        { name: 'Speed', value: '30 ft.' }
      ],
      attributes: [
        { attribute: 'STR', value: 10 },
        { attribute: 'DEX', value: 14 },
        { attribute: 'CON', value: 15 },
        { attribute: 'INT', value: 6 },
        { attribute: 'WIS', value: 8 },
        { attribute: 'CHA', value: 5 }
      ],
      secondaryStats: [
        { name: 'Damage Vulnerabilities', value: 'bludgeoning' },
        { name: 'Damage Immunities', value: 'poison' },
        { name: 'Condition Immunities', value: 'poisoned' },
        { name: 'Senses', value: 'darkvision 60 ft., passive Perception 9' },
        { name: 'Languages', value: 'understands languages it knew in life but can\'t speak' },
        { name: 'Challenge', value: '1/4 (50 XP)' }
      ],
      blocks: [
        {
          heading: 'Actions',
          texts: [
            '***Shortsword.*** *Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6+2) piercing damage.',
            '***Shortbow.*** *Ranged Weapon Attack:* +4 to hit, range 80 ft. / 320 ft., one target. *Hit:* 5 (1d6+2) piercing damage.',
          ]
        },
        {
          texts: [
            'Assemblages of bones animated by dark magic, skeletons heed the summons of those who create them or rise of their own accord in places saturated with deathly magic.'
          ]
        }
      ]
    };

    return {
      statBlock
    };
  }
}
</script>

<style>
:root {
  --red: #700601;
}
</style>
