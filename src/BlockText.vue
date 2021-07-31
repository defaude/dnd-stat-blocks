<template>
  <div v-html="html"></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {parseInline} from "marked";

export default defineComponent({
  name: 'BlockText',
  props: {
    value: {type: String, required: true}
  },
  computed: {
    html(): string {
      return parseInline(this.value);
    }
  }
});
</script>