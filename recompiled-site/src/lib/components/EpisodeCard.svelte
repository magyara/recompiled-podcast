<script>
  import Eyebrow from './Eyebrow.svelte';
  import Icon from './Icon.svelte';

  export let ep;
  export let cover;
  export let isPlaying = false;
  export let onPlay = () => {};
</script>

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
      background: {cover};
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-display); font-weight: 700; font-size: 22px;
      color: var(--brand-fg); letter-spacing: -0.02em;
    "
  >{ep.n}</div>
  <div style="flex:1;min-width:0;">
    <Eyebrow>EP {String(ep.n).padStart(3,'0')} &middot; {ep.dur} &middot; {ep.date}</Eyebrow>
    <h3
      style="
        font-family: var(--font-display); font-weight: 700;
        font-size: 20px; letter-spacing: -0.02em; line-height: 1.15;
        margin: 4px 0 6px; color: var(--fg); text-wrap: pretty;
      "
    >{ep.title}</h3>
    <p
      style="
        font-family: var(--font-body); font-size: 13px; line-height: 1.5;
        color: var(--fg-muted); margin: 0 0 10px; text-wrap: pretty;
      "
    >{ep.desc}</p>
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
  <button
    on:click={() => onPlay(ep)}
    aria-label={isPlaying ? 'Pause' : 'Play'}
    style="
      width: 40px; height: 40px; border-radius: 999px; flex-shrink: 0;
      background: {isPlaying ? 'var(--brand)' : 'var(--brand-soft)'};
      border: 0; color: {isPlaying ? '#fff' : 'var(--brand-fg)'}; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 120ms var(--ease-out);
    "
  >
    <Icon name={isPlaying ? 'pause' : 'play'} size={14} />
  </button>
</article>
