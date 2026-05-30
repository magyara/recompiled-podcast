<script>
  import Eyebrow from './Eyebrow.svelte';
  import Button from './Button.svelte';

  export let onListen = () => {};
  export let onBrowse = () => {};
</script>

<section
  style="
    position: relative;
    background: var(--bg-sunken);
    color: var(--fg);
    overflow: hidden;
    margin: 0;
    padding: clamp(64px, 12vw, 140px) 24px clamp(80px, 14vw, 160px);
    border-bottom: 1px solid var(--border);
  "
>
  <div style="position:relative;max-width:880px;margin:0 auto;">
    <Eyebrow>EP 042 · OUT NOW · MAY 14, 2026</Eyebrow>
    <h1
      style="
        font-family: var(--font-display);
        font-weight: 700;
        font-size: clamp(44px, 8vw, 92px);
        line-height: 0.98;
        letter-spacing: -0.035em;
        margin: 18px 0 24px;
        color: var(--fg);
        text-wrap: balance;
        max-width: 820px;
      "
    >
      A podcast about engineering, <span style="color:var(--brand);">rebuilt weekly</span>.
    </h1>
    <p
      style="
        font-family: var(--font-body);
        font-size: clamp(16px, 1.6vw, 19px);
        line-height: 1.55;
        color: var(--fg-muted);
        max-width: 600px;
        margin: 0;
        text-wrap: pretty;
      "
    >
      Two senior engineers, a microphone, and a pile of systems we keep rewriting. We talk about why we shipped that thing, why we&rsquo;d never ship it again, and what we&rsquo;d actually do on Monday.
    </p>
    <div style="display:flex;gap:10px;margin-top:36px;flex-wrap:wrap;">
      <Button variant="primary" size="lg" icon="play" on:click={onListen}>Listen on Spotify</Button>
      <Button variant="secondary" size="lg" on:click={onBrowse}>All episodes</Button>
    </div>
  </div>
</section>
