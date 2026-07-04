<script>
  import Eyebrow from './Eyebrow.svelte';
  import Button from './Button.svelte';

  export let onListen = () => {};
  export let onBrowse = () => {};
</script>

<section
  style="
    position: relative;
    background-image: url('/assets/ada_banner.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--fg);
    overflow: hidden;
    margin: 0;
    padding: clamp(64px, 12vw, 140px) 24px clamp(80px, 14vw, 160px);
    border-bottom: 1px solid var(--border);
  "
>
  <div style="position:relative;max-width:880px;margin:0 auto;">

    <h1
      style="
        font-family: var(--font-display);
        font-weight: 700;
        font-size: clamp(44px, 8vw, 60px);
        line-height: 0.98;
        letter-spacing: -0.035em;
        margin: 18px 0 24px;
        color: var(--fg);
        text-wrap: balance;
        max-width: 820px;
      "
    >
      A vaugely serious podcast about <span style="color:var(--on-surface-inverse-muted);">software engineering</span>.
    </h1>
    <p
      style="
        font-family: var(--font-body);
        font-size: clamp(16px, 1.6vw, 19px);
        line-height: 1.55;
        color: var(--on-surface-inverse-muted);
        max-width: 600px;
        margin: 0;
        text-wrap: pretty;
      "
    >
      We take in the latest slop and drama about technology and engineering and recompile it into <i>different</i> slop and drama.
    </p>
    <div style="display:flex;gap:10px;margin-top:36px;flex-wrap:wrap;">
      <Button variant="primary" size="lg" icon="play" iconName="play_banner" on:click={onListen}>Listen on Spotify</Button>
      <Button variant="secondary" size="lg" on:click={onBrowse}>All episodes</Button>
    </div>
  </div>
</section>
