<script>
  import Icon from './Icon.svelte';

  export let episode = null;
  export let isPlaying = false;
  export let onTogglePlay = () => {};
  export let onClose = () => {};

  let progress = 0.18;

  function scrub(e) {
    const r = e.currentTarget.getBoundingClientRect();
    progress = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  }

  function fmt(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  }
</script>

{#if episode}
  <div
    style="
      position: fixed;
      left: 16px; right: 16px; bottom: 16px;
      max-width: 720px; margin: 0 auto;
      background: var(--bg-elevated);
      color: var(--fg);
      border-radius: 16px;
      padding: 12px 14px;
      display: flex; gap: 14px; align-items: center;
      border: 1px solid var(--border);
      box-shadow: 0 24px 48px -16px rgba(36,16,85,0.18), 0 4px 12px rgba(36,16,85,0.06);
      z-index: 100;
    "
  >
    <div
      style="
        width: 44px; height: 44px; border-radius: 10px; flex-shrink: 0;
        background: var(--brand-soft);
        display: flex; align-items: center; justify-content: center;
        font-family: var(--font-display); font-weight: 700; font-size: 16px;
        color: var(--brand-fg); letter-spacing: -0.02em;
      "
    >{episode.n}</div>
    <div style="flex:1;min-width:0;">
      <div
        style="
          font-family: var(--font-display); font-weight: 600; font-size: 14px; color: var(--fg);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        "
      >{episode.title}</div>
      <div style="display:flex;align-items:center;gap:10px;margin-top:6px;">
        <span style="font-family:var(--font-mono);font-size:10px;color:var(--fg-subtle);">
          {fmt(progress * 47 * 60)}
        </span>
        <div
          on:click={scrub}
          on:keydown
          role="slider"
          aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(progress * 100)}
          tabindex="0"
          style="flex:1;height:4px;background:var(--brand-soft);border-radius:99px;cursor:pointer;position:relative;"
        >
          <div style="width:{progress * 100}%;height:100%;background:var(--brand);border-radius:99px;"></div>
        </div>
        <span style="font-family:var(--font-mono);font-size:10px;color:var(--fg-subtle);">47:21</span>
      </div>
    </div>
    <button
      on:click={onTogglePlay}
      aria-label={isPlaying ? 'Pause' : 'Play'}
      style="
        width: 44px; height: 44px; border-radius: 999px;
        background: var(--brand); border: 0; color: #fff; cursor: pointer;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      "
    >
      <Icon name={isPlaying ? 'pause' : 'play'} size={16} color="#fff" />
    </button>
    <button
      on:click={onClose}
      aria-label="Close"
      style="
        width: 32px; height: 32px; border-radius: 999px;
        background: transparent; border: 0; color: var(--fg-muted); cursor: pointer;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      "
    >
      <Icon name="x" size={14} />
    </button>
  </div>
{/if}
