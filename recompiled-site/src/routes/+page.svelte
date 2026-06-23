<script>
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import EpisodeList from '$lib/components/EpisodeList.svelte';
  import Hosts from '$lib/components/Hosts.svelte';
  import Player from '$lib/components/Player.svelte';
  import Subscribe from '$lib/components/Subscribe.svelte';
  import Footer from '$lib/components/Footer.svelte';

  export let data;
</script>

<Nav />
<Hero />
<EpisodeList episodes={data.episodes} />
<Hosts />
<Player />
<!-- <Subscribe /> -->
<Footer />