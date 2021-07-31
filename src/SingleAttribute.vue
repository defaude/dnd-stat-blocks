<template>
  <div class="attribute">
    <div><strong>{{ name }}</strong></div>
    <div>{{ value }} ({{ modifier }})</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

function getModifier(input: number): number {
  return Math.floor((input - 10) / 2);
}

export default defineComponent({
  name: 'SingleAttribute',
  props: {
    name: {type: String, required: true},
    value: {type: Number, required: true}
  },
  computed: {
    modifierValue(): number {
      return getModifier(this.value);
    },
    modifier(): string {
      if (this.modifierValue >= 0) {
        return `+${this.modifierValue}`;
      } else {
        return `${this.modifierValue}`
      }
    }
  }
});
</script>

<style>
.attribute {
  margin: .5rem 1rem;
}
</style>