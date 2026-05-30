<script>
  import EpisodeCard from './EpisodeCard.svelte';
  import Eyebrow from './Eyebrow.svelte';
  import { EPISODES, COVERS } from './data.js';

  export let onPlay = () => {};
  export let nowPlaying = null;
</script>

<section style="max-width:1080px;margin:0 auto;padding:clamp(64px,9vw,100px) 24px 40px;">
  <header style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:36px;">
    <div>
      <Eyebrow>LATEST · PULLED FROM SPOTIFY</Eyebrow>
      <h2
        style="
          font-family: var(--font-display); font-weight: 700;
          font-size: clamp(32px, 5vw, 48px); letter-spacing: -0.03em;
          line-height: 1.05; margin: 8px 0 0; color: var(--fg);
        "
      >Latest episodes</h2>
    </div>
    <a href="#all" style="font-family:var(--font-body);font-weight:600;font-size:14px;color:var(--brand);border:0;">
      Browse the archive &rarr;
    </a>
  </header>
  <div style="display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(420px,1fr));">
    {#each EPISODES as ep, i (ep.n)}
      <EpisodeCard
        {ep}
        cover={COVERS[i % COVERS.length]}
        isPlaying={nowPlaying && nowPlaying.n === ep.n}
        {onPlay}
      />
    {/each}
  </div>
</section>
