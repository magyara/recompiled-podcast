<script>
  import Nav from './Nav.svelte';
  import Hero from './Hero.svelte';
  import EpisodeList from './EpisodeList.svelte';
  import Hosts from './Hosts.svelte';
  import Subscribe from './Subscribe.svelte';
  import Footer from './Footer.svelte';
  import Player from './Player.svelte';
  import { EPISODES } from './data.js';

  let active = 'home';
  let nowPlaying = null;
  let isPlaying = false;

  function navigate(id) {
    active = id;
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  }

  function play(ep) {
    if (nowPlaying && nowPlaying.n === ep.n) {
      isPlaying = !isPlaying;
    } else {
      nowPlaying = ep;
      isPlaying = true;
    }
  }

  const onTogglePlay = () => { isPlaying = !isPlaying; };
  const closePlayer  = () => { nowPlaying = null; isPlaying = false; };
</script>

<Nav {active} onNavigate={navigate} />
<div id="home" style="padding-top:8px;">
  <Hero
    onListen={() => play(EPISODES[0])}
    onBrowse={() => navigate('episodes')}
  />
</div>
<div id="episodes">
  <EpisodeList onPlay={play} nowPlaying={isPlaying ? nowPlaying : null} />
</div>
<Hosts />
<Subscribe />
<Footer />
<Player
  episode={nowPlaying}
  {isPlaying}
  {onTogglePlay}
  onClose={closePlayer}
/>

<script context="module">
  // no-op; here for clarity that this is the page-level component
</script>
