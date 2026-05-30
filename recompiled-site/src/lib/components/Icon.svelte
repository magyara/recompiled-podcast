<script>
  export let name;
  export let size = 20;
  export let color = 'currentColor';

  // Mount-and-after-update hook: ensure Lucide rewrites the placeholder.
  import { afterUpdate, onMount } from 'svelte';
  const refresh = () => { if (window.lucide) window.lucide.createIcons(); };
  onMount(refresh);
  afterUpdate(refresh);
</script>

<i
  data-lucide={name}
  style="width:{size}px;height:{size}px;color:{color};display:inline-flex;"
></i>
