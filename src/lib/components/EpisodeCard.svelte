<script>
  import Eyebrow from "./Eyebrow.svelte";
  import Icon from "./Icon.svelte";

  export let ep;
  export let cover;
  export let isPlaying = false;
  /** @type {(ep: any) => void} */
  export let onPlay = () => {};

  let isExpanded = false;
</script>

<article
  class="episode-card"
  style="
    background: var(--bg-elevated);
    border: 1px solid {isPlaying ? 'var(--border-brand)' : 'var(--border)'};
    border-radius: 14px;
    padding: 18px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 200ms var(--ease-out);
    box-shadow: 0 14px 28px -22px rgba(10, 6, 24, 0.85), 0 6px 12px rgba(10, 6, 24, 0.16);
  "
>
  <div
    style="
      width: 64px; height: 64px; border-radius: 10px; flex-shrink: 0;
      border: 1px solid color-mix(in srgb, var(--border-strong) 78%, white);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 6px 12px rgba(10, 6, 24, 0.2);
      background: {ep.cover && ep.cover.startsWith('http')
      ? 'transparent'
      : cover};
      background-image: {ep.cover && ep.cover.startsWith('http')
      ? `url('${ep.cover}')`
      : 'none'};
      background-size: cover;
      background-position: center;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-display); font-weight: 700; font-size: 22px;
      color: var(--bg); letter-spacing: -0.02em;
    "
  ></div>
  <div style="flex:1;min-width:0;">
    <Eyebrow
      >EP {String(ep.n).padStart(3, "0")} &middot; {ep.dur} &middot; {ep.date}</Eyebrow
    >
    <a
      class="episode-title-link"
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
      ">{ep.title}</a
    >
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
      {isExpanded ? "Show less" : "Show more"}
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
          ">{t}</span
        >
      {/each}
    </div>
  </div>
  <a
    href={ep.spotifyUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open episode on Spotify"
    on:click={() => onPlay(ep)}
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

<style>
  .episode-card {
    transform: translateY(0) scale(1);
    will-change: transform, box-shadow;
  }

  .episode-card:hover {
    transform: translateY(-5px) scale(1.012);
    box-shadow:
      0 22px 38px -24px rgba(10, 6, 24, 0.95),
      0 10px 20px rgba(10, 6, 24, 0.22);
  }

  .episode-card:focus-within {
    transform: translateY(-3px) scale(1.008);
    box-shadow:
      0 18px 30px -22px rgba(10, 6, 24, 0.9),
      0 8px 16px rgba(10, 6, 24, 0.2);
  }

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

  .episode-title-link {
    color: var(--fg);
  }

  .episode-title-link:hover {
    color: var(--brand);
  }

  @media (prefers-reduced-motion: reduce) {
    .episode-card,
    .episode-card:hover,
    .episode-card:focus-within {
      transform: none;
    }
  }
</style>
