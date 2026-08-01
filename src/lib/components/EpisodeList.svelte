<script>
  import EpisodeCard from "./EpisodeCard.svelte";
  import { EPISODES, COVERS } from "./data.js";

  export let episodes =
    /** @type {{ n: number; title: string; desc: string; dur: string; date: string; tags: string[]; spotifyUrl: string; cover?: string }[]} */ ([]);
  /** @type {(ep: { n: number; title: string; desc: string; dur: string; date: string; tags: string[]; spotifyUrl: string; cover?: string }) => void} */
  export let onPlay = () => {};
  export let nowPlaying =
    /** @type {{ n: number; title: string; desc: string; dur: string; date: string; tags: string[]; spotifyUrl: string; cover?: string } | null} */ (
      null
    );

  const episodesToRender =
    /** @type {{ n: number; title: string; desc: string; dur: string; date: string; tags: string[]; spotifyUrl: string; cover?: string }[]} */ (
      episodes.length ? episodes : EPISODES
    );
  const itemsPerPage = 6;
  let currentPage = 0;

  $: totalPages = Math.ceil(episodesToRender.length / itemsPerPage);
  $: startIndex = currentPage * itemsPerPage;
  $: endIndex = startIndex + itemsPerPage;
  $: paginatedEpisodes = episodesToRender.slice(startIndex, endIndex);

  /** @param {number} page */
  function goToPage(page) {
    currentPage = Math.max(0, Math.min(page, totalPages - 1));
  }
</script>

<section
  style="max-width:1080px;margin:0 auto;padding:clamp(64px,9vw,100px) 24px 40px;"
>
  <header
    style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:36px;"
  >
    <div>
      <h2
        style="
          font-family: var(--font-display); font-weight: 700;
          font-size: clamp(32px, 5vw, 48px); letter-spacing: -0.03em;
          line-height: 1.05; margin: 8px 0 0; color: var(--fg);
        "
      >
        Latest episodes
      </h2>
    </div>
  </header>
  <div
    style="display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));"
  >
    {#each paginatedEpisodes as ep, i (ep.n)}
      <EpisodeCard
        {ep}
        cover={ep.cover || COVERS[i % COVERS.length]}
        isPlaying={nowPlaying?.n === ep.n}
        {onPlay}
      />
    {/each}
  </div>
  {#if totalPages > 1}
    <div style="display:flex;justify-content:center;gap:8px;margin-top:36px;">
      {#each Array(totalPages) as _, i}
        <button
          on:click={() => goToPage(i)}
          style="
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid {currentPage === i
            ? 'var(--brand)'
            : 'var(--border-strong)'};
            background: {currentPage === i ? 'var(--brand)' : 'transparent'};
            cursor: pointer;
            padding: 0;
            transition: all 150ms var(--ease-out);
          "
          aria-label="Page {i + 1}"
        ></button>
      {/each}
    </div>
  {/if}
</section>
