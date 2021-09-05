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
      title: 'Redbrand Ruffian',
      description: 'Medium humanoid (human), neutral evil',
      primaryStats: [
        { name: 'Armor Class', value: '14 (studded leather armor)' },
        { name: 'Hit Points', value: '16 (3d8+3)' },
        { name: 'Speed', value: '30 ft.' }
      ],
      attributes: [
        { attribute: 'STR', value: 11 },
        { attribute: 'DEX', value: 14 },
        { attribute: 'CON', value: 12 },
        { attribute: 'INT', value: 9 },
        { attribute: 'WIS', value: 9 },
        { attribute: 'CHA', value: 11 }
      ],
      secondaryStats: [
        { name: 'Skills', value: 'Intimidation +2' },
        { name: 'Senses', value: 'passive Perception 9' },
        { name: 'Languages', value: 'Common' },
        { name: 'Challenge', value: '1/2 (100 XP)' }
      ],
      blocks: [
        {
          heading: 'Actions',
          texts: [
            '***Multiattack.*** The ruffian makes two melee attacks.',
            '***Shortsword.*** *Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6+2) piercing damage.',
          ]
        },
        {
          texts: [
            'Redbrand ruffians are petty thugs and ruthless enforcers skilled at intimidation and violence. They work for money and have no scruples.'
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
