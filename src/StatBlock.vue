<template>
  <article class="stat-block">
    <section>
      <h1>{{ title }}</h1>
      <em>{{ description }}</em>
    </section>

    <section class="stats">
      <SingleStat v-for="(stat, index) in primaryStats" :key="index" :name="stat.name" :value="stat.value" />
    </section>

    <section class="stats">
      <div class="attributes">
        <SingleAttribute v-for="a in attributes" :key="a.attribute" :name="a.attribute" :value="a.value" />
      </div>
    </section>

    <section class="stats">
      <SingleStat v-for="(stat, index) in secondaryStats" :key="index" :name="stat.name" :value="stat.value" />
    </section>

    <section>
      <Block v-for="(block, index) in blocks" :key="index" :data="block" />
    </section>
  </article>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SingleStat from "./SingleStat.vue";
import SingleAttribute from "./SingleAttribute.vue";
import Block from "./Block.vue";

type Stat = { name: string; value: string; };

export default defineComponent({
  components: {Block, SingleAttribute, SingleStat},
  data() {
    return {
      title: "Kréa (Fox)",
      description: "Tiny beast, unaligned",
      primaryStats: [
        {name: "Armor Class", value: "13"},
        {name: "Hit Points", value: "5 (2d4)"},
        {name: "Speed", value: "30 ft., burrow 5ft."}
      ],
      secondaryStats: [
        {name: "Skills", value: "Perception +3, Stealth +5"},
        {name: "Senses", value: "Darkvision 60ft., passive Perception 13"},
        {name: "Languages", value: "none"},
        {name: "Challenge", value: "1/8 (10 XP)"}
      ],
      attributes: [
        {attribute: "STR", value: 2},
        {attribute: "DEX", value: 16},
        {attribute: "CON", value: 11},
        {attribute: "INT", value: 3},
        {attribute: "WIS", value: 13},
        {attribute: "CHA", value: 10}
      ],
      blocks: [
        {
          texts: [
            '***Keen Hearing.*** The fox has advantage on Wisdom (Perception) checks that rely on hearing.'
          ]
        },
        {
          heading: 'Actions',
          texts: [
            '***Bite.*** *Melee weapon attack:* +5 to hit, react 5 ft., one creature. *Hit:* 1d4 piercing damage.'
          ]
        }
      ]
    }
  }
});
</script>

<style lang="scss">
.stat-block {
  --red: #700601;
  background-image: url(/parchment.jpg);
  background-size: cover;
  box-shadow: 0 0 10px 1px silver;
  position: relative;
  padding: .5rem;
  max-width: 60em;
  border-top: 5px solid var(--red);
  border-bottom: 5px solid var(--red);
  border-radius: 10px;

  h1, h2 {
    font-family: serif;
    color: var(--red);
    font-variant: small-caps;
  }

  h1 {
    font-size: 2.4em;
    margin: .5rem 0;
  }

  h2 {
    font-size: 1.8em;
    border-bottom: 2px solid var(--red);
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