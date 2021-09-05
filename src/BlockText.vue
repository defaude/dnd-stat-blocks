<template>
  <div v-html="html"></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import marked from "marked";

export default defineComponent({
  name: 'BlockText',
  props: {
    value: {type: String, required: true}
  },
  computed: {
    html(): string {
      return marked(this.value);
    }
  }
});
</script>