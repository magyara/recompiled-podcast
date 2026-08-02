<script>
  import '../app.css';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  injectAnalytics();
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/assets/favicon.png" />
</svelte:head>

<slot />