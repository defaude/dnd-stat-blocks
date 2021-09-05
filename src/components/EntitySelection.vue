<template>
  <select v-model="selected">
    <option :value="null" disabled>please select...</option>
    <option v-for="entity in entities" :key="entity.id" :value="entity.id">{{ entity.title }}</option>
  </select>
</template>

<script lang="ts">

import { defineComponent, PropType, ref, watch } from 'vue';
import { Entity } from '../types/Entity';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  props: {
    entities: { type: Array as PropType<Entity[]>, required: true }
  },

  setup() {
    const router = useRouter();
    const route = useRoute();

    const selected = ref<Entity | null>(route.params.id || null);

    watch(() => route.params.id, newId => {
      selected.value = newId;
    });

    watch(selected, newValue => {
      router.push(`/${newValue}`);
    });

    return { selected };
  }
});
</script>

<style scoped>
select {
  display: block;
  width: 80%;
  margin: 0 auto 1em;
  padding: .25em .5em;
}
</style>