<template>
  <StatBlock />
</template>

<script lang="ts">
import { StatBlockData } from "./types";
import StatBlock from "./StatBlock.vue";

export default {
  components: { StatBlock },

  setup() {
    const statBlock: StatBlockData = {
      color: "red"
    };

    return {
      statBlock
    };
  }
}
</script>
