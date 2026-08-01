<script>
  import Eyebrow from './Eyebrow.svelte';
  import Icon from './Icon.svelte';

  export let ep;
  export let cover;
  export let isPlaying = false;

  let isExpanded = false;

  /** @param {unknown} value */
  function toPlainText(value) {
    if (typeof value !== 'string') return '';
    return value
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }

  $: description = toPlainText(ep?.desc || '');
</script>

<style>
  :global(div > p) {
    overflow-wrap: break-word;
    word-break: break-word;
  }
  :global(div > p > a) {
    overflow-wrap: break-word;
    word-break: break-word;
  }
  a {
    text-decoration: none !important;
  }

  .episode-title:hover {
    color: var(--brand) !important;
  }

  .episode-card {
    background: var(--bg-elevated);
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 18px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 200ms var(--ease-out);
    box-shadow: none;
  }

  .episode-cover {
    width: 64px;
    height: 64px;
    border-radius: 10px;
    flex-shrink: 0;
    background: var(--cover-bg);
    background-image: var(--cover-image);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 22px;
    color: var(--bg);
    letter-spacing: -0.02em;
  }

  .episode-content {
    flex: 1;
    min-width: 0;
  }

  .episode-title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin: 4px 0 6px;
    color: var(--fg);
    text-wrap: pretty;
    display: block;
    border-bottom: none;
    transition: color 150ms var(--ease-out);
  }

  .episode-desc {
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 1.5;
    color: var(--fg-muted);
    margin: 0 0 10px;
    text-wrap: pretty;
    overflow-wrap: break-word;
    word-break: break-word;
    overflow: hidden;
    max-height: var(--desc-max-height);
    transition: max-height 200ms var(--ease-out);
  }

  .toggle-btn {
    background: none;
    border: none;
    color: var(--brand);
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    margin: -8px 0 0 0;
  }

  .tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .tag {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--fg-muted);
    background: transparent;
    border: 1px solid var(--border-strong);
    padding: 4px 10px;
    border-radius: 999px;
  }

  .episode-open {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    flex-shrink: 0;
    background: var(--brand-soft);
    border: 0;
    color: var(--brand-fg);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 120ms var(--ease-out);
  }
</style>

<article class="episode-card" style="--card-border: {isPlaying ? 'var(--border-brand)' : 'var(--border)'};">
  <div
    class="episode-cover"
    style="--cover-bg: {ep.cover && ep.cover.startsWith('http') ? 'transparent' : cover}; --cover-image: {ep.cover && ep.cover.startsWith('http') ? `url('${ep.cover}')` : 'none'};"
  ></div>
  <div class="episode-content">
    <Eyebrow>EP {String(ep.n).padStart(3,'0')} &middot; {ep.dur} &middot; {ep.date}</Eyebrow>
    <a
      class="episode-title"
      href={ep.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
    >{ep.title}</a>
    <p class="episode-desc" style="--desc-max-height: {isExpanded ? 'none' : '6.9em'};">
      {description}
    </p>
    <button class="toggle-btn" on:click={() => (isExpanded = !isExpanded)}>
      {isExpanded ? 'Show less' : 'Show more'}
    </button>
    <div class="tags">
      {#each ep.tags as t (`${ep.n}-${t}`)}
        <span class="tag">{t}</span>
      {/each}
    </div>
  </div>
  <a
    class="episode-open"
    href={ep.spotifyUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open episode on Spotify"
  >
    <Icon name="play" size={14} />
  </a>
</article>
