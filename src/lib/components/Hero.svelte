<script>
  import Button from "./Button.svelte";

  export let onListen = () => {};
</script>

<section class="hero">
  <div class="hero-inner content-shell">
    <h1 class="hero-title">
      A vaguely serious podcast about
      <span class="hero-title-accent">software engineering</span>.
    </h1>
    <p class="hero-copy">
      We take in the latest slop and drama about technology and engineering and
      recompile it into <i>different</i> slop and drama.
    </p>
    <div class="hero-actions">
      <Button
        variant="primary"
        bordered={true}
        size="lg"
        icon="play"
        iconName="play_banner"
        on:click={onListen}>Listen on Spotify</Button
      >
    </div>
  </div>
  <div class="hero-marquee" aria-hidden="true">
    <div class="hero-marquee-track">
      <span class="hero-marquee-item"
        >Code something fun today! <span class="hero-marquee-cat">(=^.^=)</span
        ></span
      >
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    background-image: url("/assets/ada_banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--bg-inverse);
    color: var(--fg);
    overflow: hidden;
    margin: 0;
    padding: clamp(44px, 8vw, 88px) 24px clamp(56px, 8vw, 92px);
    border-bottom: 1px solid var(--border);
  }

  .hero-inner {
    position: relative;
    max-width: 880px;
  }

  .hero-title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(44px, 8vw, 60px);
    line-height: 0.98;
    letter-spacing: -0.035em;
    margin: 18px 0 24px;
    color: var(--fg);
    text-wrap: balance;
    max-width: 820px;
  }

  .hero-title-accent {
    color: var(--on-surface-inverse-muted);
  }

  .hero-copy {
    font-family: var(--font-body);
    font-size: clamp(16px, 1.6vw, 19px);
    line-height: 1.55;
    color: var(--on-surface-inverse-muted);
    max-width: 600px;
    margin: 0;
    text-wrap: pretty;
  }

  .hero-actions {
    display: flex;
    gap: 10px;
    margin-top: 36px;
    flex-wrap: wrap;
  }

  .hero-marquee {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--plum-950);
    border-top: 1px solid color-mix(in srgb, var(--border) 38%, transparent);
    color: var(--fg-inverse);
    overflow: hidden;
    white-space: nowrap;
    padding: 10px 0;
    min-height: 22px;
  }

  .hero-marquee-track {
    position: relative;
    display: block;
    align-items: center;
    width: max-content;
    margin-left: 24px;
    animation: hero-marquee-bounce 20s linear infinite alternate;
    will-change: transform;
  }

  .hero-marquee-item {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    letter-spacing: 0.03em;
    color: var(--fg-inverse);
  }

  .hero-marquee-cat {
    color: var(--violet-200);
  }

  @keyframes hero-marquee-bounce {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(calc(100vw - 100% - 48px));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-marquee-track {
      animation: none;
    }
  }
</style>
