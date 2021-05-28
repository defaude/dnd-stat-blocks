<template>
  <article class="stat-block">
    <section>
      <h1>Gnome Squidling</h1>
      <em class="description">Small aberration, unaligned</em>
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
    top: -10px;
    left: -5px;
    right: -5px;
    height: 6px;
    border-top: 2px solid var(--red);
    border-right: 3px solid white;
    border-bottom: 2px solid var(--red);
    border-left: 3px solid white;
    background-image: url(/parchment.jpg);
    background-size: cover;
  }

  &::after {
    top: 100%;
  }

  h1 {
    font-family: serif;
    font-size: 1.8em;
    color: var(--red);
    font-variant: small-caps;
    margin: .5em 0;
  }
}
</style>