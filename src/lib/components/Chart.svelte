<script>
  import Line from '$lib/components/Line.svelte';

  /** @type {boolean} */
  export let withCapsize;

  const capHeights = [16, 20, 25, 31, 39, 48, 61];
</script>

<div class="container">
  <Line {withCapsize} capHeight={capHeights[6]}>E</Line>
  <Line {withCapsize} capHeight={capHeights[5]}>H S T</Line>
  <Line {withCapsize} capHeight={capHeights[4]}>K N C</Line>
  <Line {withCapsize} capHeight={capHeights[3]}>P J B S A</Line>
  <Line {withCapsize} capHeight={capHeights[2]}>T R S N O</Line>
  <Line {withCapsize} capHeight={capHeights[1]}>A S O T N</Line>
  <Line {withCapsize} capHeight={capHeights[0]}>Y F H S D</Line>
</div>

<style>
  .container {
    padding: var(--spacing-12) var(--spacing-4);
    background-color: var(--background-colour);
    width: var(--max-width-full);
    height: 100%;
  }
</style>
