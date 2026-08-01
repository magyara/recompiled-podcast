<script>
  import EpisodeCard from './EpisodeCard.svelte';
  import { EPISODES, COVERS } from './data.js';

  export let episodes = /** @type {Array<Record<string, any>>} */ ([]);
  export let nowPlaying = /** @type {{ n: number } | null} */ (null);

  /** @type {Array<Record<string, any>>} */
  let episodesToRender;
  const itemsPerPage = 6;
  let currentPage = 0;
  /** @type {number[]} */
  let pageIndexes;

  $: episodesToRender = Array.isArray(episodes) && episodes.length ? episodes : EPISODES;
  $: totalPages = Math.ceil(episodesToRender.length / itemsPerPage);
  $: pageIndexes = Array.from({ length: totalPages }, (_, index) => index);
  $: startIndex = currentPage * itemsPerPage;
  $: endIndex = startIndex + itemsPerPage;
  $: paginatedEpisodes = episodesToRender.slice(startIndex, endIndex);

  /** @param {number} page */
  function goToPage(page) {
    currentPage = Math.max(0, Math.min(page, totalPages - 1));
  }

  /** @param {Record<string, any>} ep
   *  @param {number} index */
  function getCover(ep, index) {
    return typeof ep.cover === 'string' && ep.cover.length ? ep.cover : COVERS[index % COVERS.length];
  }
</script>

<style>
  .episodes {
    max-width: 1080px;
    margin: 0 auto;
    padding: clamp(64px, 9vw, 100px) 24px 40px;
  }

  .episodes-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 36px;
  }

  .episodes-title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(32px, 5vw, 48px);
    letter-spacing: -0.03em;
    line-height: 1.05;
    margin: 8px 0 0;
    color: var(--fg);
  }

  .episodes-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 36px;
  }

  .page-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--dot-border);
    background: var(--dot-bg);
    cursor: pointer;
    padding: 0;
    transition: all 150ms var(--ease-out);
  }
</style>

<section class="episodes">
  <header class="episodes-header">
    <div>
      <h2 class="episodes-title">Latest episodes</h2>
    </div>
  </header>
  <div class="episodes-grid">
    {#each paginatedEpisodes as ep, i (ep.n)}
      <EpisodeCard
        {ep}
        cover={getCover(ep, i)}
        isPlaying={Boolean(nowPlaying && nowPlaying.n === ep.n)}
      />
    {/each}
  </div>
  {#if totalPages > 1}
    <div class="pagination">
      {#each pageIndexes as i (i)}
        <button
          class="page-dot"
          on:click={() => goToPage(i)}
          style="--dot-border: {currentPage === i ? 'var(--brand)' : 'var(--border-strong)'}; --dot-bg: {currentPage === i ? 'var(--brand)' : 'transparent'};"
          aria-label="Page {i + 1}"
        ></button>
      {/each}
    </div>
  {/if}
</section>
