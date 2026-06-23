<script>
  import Eyebrow from './Eyebrow.svelte';
  import Icon from './Icon.svelte';

  export let ep;
  export let cover;
  export let isPlaying = false;
  export let onPlay = () => {};

  let isExpanded = false;
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
</style>

<article
  style="
    background: var(--bg-elevated);
    border: 1px solid {isPlaying ? 'var(--border-brand)' : 'var(--border)'};
    border-radius: 14px;
    padding: 18px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 200ms var(--ease-out);
    box-shadow: none;
  "
>
  <div
    style="
      width: 64px; height: 64px; border-radius: 10px; flex-shrink: 0;
      background: {ep.cover && ep.cover.startsWith('http') ? 'transparent' : cover};
      background-image: {ep.cover && ep.cover.startsWith('http') ? `url('${ep.cover}')` : 'none'};
      background-size: cover;
      background-position: center;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-display); font-weight: 700; font-size: 22px;
      color: var(--bg); letter-spacing: -0.02em;
    "
  ></div>
  <div style="flex:1;min-width:0;">
    <Eyebrow>EP {String(ep.n).padStart(3,'0')} &middot; {ep.dur} &middot; {ep.date}</Eyebrow>
    <a
      href={ep.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      style="
        font-family: var(--font-display); font-weight: 700;
        font-size: 20px; letter-spacing: -0.02em; line-height: 1.15;
        margin: 4px 0 6px; color: var(--fg); text-wrap: pretty;
        display: block;
        text-decoration: none;
        border-bottom: none;
        transition: color 150ms var(--ease-out);
      "
      on:mouseenter={(e) => e.target.style.color = 'var(--brand)'}
      on:mouseleave={(e) => e.target.style.color = 'var(--fg)'}
    >{ep.title}</a>
    <div
      style="
        font-family: var(--font-body); font-size: 13px; line-height: 1.5;
        color: var(--fg-muted); margin: 0 0 10px; text-wrap: pretty;
        overflow-wrap: break-word;
        word-break: break-word;
        overflow: hidden;
        max-height: {isExpanded ? 'none' : '6.9em'};
        transition: max-height 200ms var(--ease-out);
      "
    >
      {@html ep.desc}
    </div>
    <button
      on:click={() => (isExpanded = !isExpanded)}
      style="
        background: none;
        border: none;
        color: var(--brand);
        font-family: var(--font-body);
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        padding: 0;
        margin: -8px 0 0 0;
      "
    >
      {isExpanded ? 'Show less' : 'Show more'}
    </button>
    <div style="display:flex;gap:6px;flex-wrap:wrap;">
      {#each ep.tags as t}
        <span
          style="
            font-family: var(--font-mono);
            font-size: 11px;
            color: var(--fg-muted);
            background: transparent;
            border: 1px solid var(--border-strong);
            padding: 4px 10px;
            border-radius: 999px;
          "
        >{t}</span>
      {/each}
    </div>
  </div>
  <a
    href={ep.spotifyUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open episode on Spotify"
    style="
      width: 40px; height: 40px; border-radius: 999px; flex-shrink: 0;
      background: var(--brand-soft);
      border: 0; color: var(--brand-fg); cursor: pointer;
      display: inline-flex; align-items: center; justify-content: center;
      transition: all 120ms var(--ease-out);
      text-decoration: none;
    "
  >
    <Icon name="play" size={14} />
  </a>
</article>
