<template>
  <h2 class="block-heading" v-if="data.heading">{{ data.heading }}</h2>
  <BlockText v-for="bt in data.texts" :key="bt" :value="bt" />
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import BlockText from "./BlockText.vue";

export type BlockData = {
  heading?: string;
  texts: string[];
}

export default defineComponent({
  name: 'Block',
  components: {BlockText},
  props: {
    data: {type: Object as PropType<BlockData>, required: true}
  }
});
</script>

<style>
.block-heading {
  font-family: serif;
  font-size: 1.8em;
  font-variant: small-caps;
  color: var(--red);
  border-bottom: 2px solid var(--red);
}
</style>