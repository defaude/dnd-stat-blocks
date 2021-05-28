<template>
  <article class="stat-block">
    <section>
      <h1>Kréa (Fox)</h1>
      <em>Tiny beast, unaligned</em>
    </section>

    <section class="stats">
      <div><strong>Armor Class</strong> 13</div>
      <div><strong>Hit Points</strong> 5 (2d4)</div>
      <div><strong>Speed</strong> 30ft., burrow 5ft.</div>
    </section>

    <section class="stats">
      <div class="attributes">
        <div><div><strong>STR</strong></div><div>2 (-4)</div></div>
        <div><div><strong>DEX</strong></div><div>16 (+3)</div></div>
        <div><div><strong>CON</strong></div><div>11 (+0)</div></div>
        <div><div><strong>INT</strong></div><div>3 (-4)</div></div>
        <div><div><strong>WIS</strong></div><div>13 (+1)</div></div>
        <div><div><strong>CHA</strong></div><div>10 (-2)</div></div>
      </div>
    </section>

    <section class="stats">
      <div><strong>Skills</strong> Perception +3, Stealth +5</div>
      <div><strong>Senses</strong> Darkvision 60ft., passive Perception 13</div>
      <div><strong>Languages</strong> none</div>
      <div><strong>Challenge</strong> 1/8 (10 XP)</div>
    </section>

    <section>
      <div><em><strong>Keen Hearing.</strong></em> The fox has advantage on Wisdom (Perception) checks that rely on hearing.</div>

      <h2>Actions</h2>

      <div><em><strong>Bite.</strong> Melee weapon attack:</em> T+5 to hit, reach 5 ft., one creature. <em>Hit:</em> 1d4 piercing damage.</div>
    </section>
  </article>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  }
}
</script>

<style lang="scss">
.stat-block {
  --red: #700601;
  background-image: url(/parchment.jpg);
  background-size: cover;
  box-shadow: 0 0 10px 1px silver;
  position: relative;
  padding: .5em;
  max-width: 960px;

  &::before, &::after {
    content: " ";
    position: absolute;
    top: -14px;
    left: -5px;
    right: -5px;
    height: 6px;
    border-top: 4px solid var(--red);
    border-right: 5px solid white;
    border-bottom: 4px solid var(--red);
    border-left: 5px solid white;
    background-image: url(/parchment.jpg);
    background-size: cover;
  }

  &::after {
    top: 100%;
  }

  h1, h2 {
    font-family: serif;
    color: var(--red);
    font-variant: small-caps;
  }

  h1 {
    font-size: 2.4em;
    margin: .5em 0;
  }

  h2 {
    font-size: 1.8em;
    border-bottom: 2px solid var(--red);
  }

  section {
    margin-bottom: 1.5em;

    &:not(:last-of-type) {
      padding-bottom: 1.5em;
      border-bottom: 3px solid var(--red);
    }

    &.stats {
      color: var(--red);
      font-size: 1.2em;
    }
  }

  .attributes {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0 3em;
  }
}
</style>