<script>
  import Chart from '$lib/components/Chart.svelte';
  import '$lib/styles/styles.css';
  import '@fontsource/abril-fatface';
  import '@fontsource/courier-prime';
</script>

<header><h1>Svelte Capsize Styling</h1></header>
<main class="content">
  <section class="with">
    <h2 class="heading">With Capsize</h2>
    <Chart --background-colour="hsl(336deg 85% 54%)" withCapsize={true} />
  </section>
  <section class="without">
    <h2 class="heading">Without Capsize</h2>
    <Chart --background-colour="hsl(340deg 70% 70%)" withCapsize={false} />
  </section>
</main>

<style>
  header {
    text-align: center;
    margin: var(--spacing-12) var(--spacing-6) var(--spacing-0);
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'with'
      'without';
    width: min(var(--max-width-full) - var(--spacing-12), var(--max-width-wrapper));
    overflow-x: hidden;
    margin: var(--spacing-0) auto var(--spacing-24);
    overflow-y: hidden;
  }

  .heading {
    width: var(--max-width-full);
    text-align: center;
  }
  .with,
  .without {
    margin: var(--spacing-6) auto;
    width: var(--max-width-full);
  }
  .with {
    grid-area: with;
  }
  .without {
    grid-area: without;
  }

  @media screen and (min-width: 64rem) {
    .content {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'with without';
    }

    .with,
    .without {
      margin: var(--spacing-0) auto;
    }
  }
</style>
