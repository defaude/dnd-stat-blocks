<template>
  <article class="stat-block">
    <section>
      <h1>{{ data.title }}</h1>
      <em>{{ data.description }}</em>
    </section>

    <section class="stats">
      <SingleStat v-for="(stat, index) in data.primaryStats" :key="index" :name="stat.name" :value="stat.value" />
    </section>

    <section class="stats">
      <div class="attributes">
        <SingleAttribute v-for="a in data.attributes" :key="a.attribute" :name="a.attribute" :value="a.value" />
      </div>
    </section>

    <section class="stats">
      <SingleStat v-for="(stat, index) in data.secondaryStats" :key="index" :name="stat.name" :value="stat.value" />
    </section>

    <section>
      <Block v-for="(block, index) in data.blocks" :key="index" :data="block" />
    </section>
  </article>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import SingleStat from "./SingleStat.vue";
import SingleAttribute from "./SingleAttribute.vue";
import Block from "./Block.vue";
import {StatBlockData} from "./types";

export default defineComponent({
  components: {Block, SingleAttribute, SingleStat},
  props: {
    data: {type: Object as PropType<StatBlockData>, required: true}
  }
});
</script>

<style lang="scss">
.stat-block {
  background-image: url(/parchment.jpg);
  background-size: cover;
  box-shadow: 0 0 10px 1px silver;
  position: relative;
  padding: .5rem;
  max-width: 60em;
  border-top: 5px solid var(--red);
  border-bottom: 5px solid var(--red);
  border-radius: 10px;

  h1 {
    font-family: serif;
    font-size: 2.4em;
    font-variant: small-caps;
    color: var(--red);
    margin: .5rem 0;
  }

  section {
    margin-bottom: 1.5rem;

    &:not(:last-of-type) {
      padding-bottom: 1.5rem;
      border-bottom: 3px solid var(--red);
    }

    &.stats {
      color: var(--red);
      font-size: 1.2em;
    }
  }

  .attributes {
    font-size: 1.3em;
    display: flex;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 640px) {
      font-size: 1em;
      flex-wrap: wrap;
    }
  }
}
</style>