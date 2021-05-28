<template>
  <h1>hello, world</h1>
  <p>color: {{ statBlock.color }}</p>
</template>

<script lang="ts">
import { StatBlock } from "./types";

export default {
  setup() {
    const statBlock: StatBlock = {
      color: "red"
    };

    return {
      statBlock
    };
  }
}
</script>