<template>
  <EntitySelection :entities="entities"></EntitySelection>
  <StatBlock v-if="selectedStatBlock" :data="selectedStatBlock" />
  <p v-else>please select an entity</p>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import StatBlock from '../components/StatBlock.vue';
import { useRoute } from 'vue-router';
import { entities } from '../entities';
import EntitySelection from '../components/EntitySelection.vue';

export default defineComponent({
  components: {
    EntitySelection,
    StatBlock
  },

  setup() {
    const route = useRoute();

    const selectedStatBlock = computed(() => {
      const routeId = route.params.id;
      return entities.find(({ id }) => id === routeId);
    });

    return { entities, selectedStatBlock };
  }
});
</script>