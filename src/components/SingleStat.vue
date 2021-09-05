<template>
  <div class="single-stat">
    <strong>{{ name }}</strong> {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleStat',
  props: {
    name: { type: String, required: true },
    value: { type: String, required: true }
  }
});
</script>

<style>
.single-stat {
  margin: 0.3em 0;
}
</style>