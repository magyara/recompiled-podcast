<script>
  import { onMount } from 'svelte';
  import Icon from './Icon.svelte';
  import Button from './Button.svelte';

  export let active = 'home';
  /** @type {(id: string) => void} */
  export let onNavigate = () => {};
  /** @type {() => void} */
  export let onListen = () => {};

  let scrolled = false;
  let mobileOpen = false;

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  const items = [
    ['episodes', 'Episodes'],
    ['hosts', 'Hosts'],
    ['about', 'About'],
  ];

  /** @param {string} id */
  function click(id) {
    /** @param {MouseEvent} e */
    return (e) => { e.preventDefault(); onNavigate(id); mobileOpen = false; };
  }
</script>

<nav
  class="nav-shell"
  style="--nav-bg: {scrolled ? 'rgba(250,249,253,0.82)' : 'transparent'}; --nav-blur: {scrolled ? 'saturate(180%) blur(12px)' : 'none'}; --nav-border: {scrolled ? 'var(--border)' : 'transparent'};"
>
  <div class="nav-inner">
    <a href="#home" on:click={click('home')} class="nav-brand">
      <img src="../../assets/recompiled_podcast_logo.png" alt="Recompiled" class="nav-logo" />
    </a>

    <div class="rc-nav-desktop">
      {#each items as [id, label] (id)}
        <a
          href={`#${id}`}
          on:click={click(id)}
          class="nav-link"
          style="--link-color: {active === id ? 'var(--brand)' : 'var(--fg)'};"
        >{label}</a>
      {/each}
      <span class="nav-divider"></span>
      <Button variant="primary" size="sm" icon="headphones" on:click={onListen}>Listen</Button>
    </div>

    <button
      class="rc-nav-mobile mobile-trigger"
      on:click={() => (mobileOpen = !mobileOpen)}
      aria-label="Menu"
    >
      <Icon name={mobileOpen ? 'x' : 'menu'} size={22} />
    </button>
  </div>

  {#if mobileOpen}
    <div class="mobile-menu">
      {#each items as [id, label] (id)}
        <a
          href={`#${id}`}
          on:click={click(id)}
          class="mobile-menu-link"
        >{label}</a>
      {/each}
      <div class="mobile-menu-button">
        <Button variant="primary" size="md" icon="headphones" on:click={onListen}>Listen on Spotify</Button>
      </div>
    </div>
  {/if}
</nav>

<style>
  .nav-shell {
    position: sticky;
    top: 0;
    z-index: 50;
    background: var(--nav-bg);
    backdrop-filter: var(--nav-blur);
    border-bottom: 1px solid var(--nav-border);
    transition: all 200ms var(--ease-out);
  }

  .nav-inner {
    max-width: var(--max-w-content);
    margin: 0 auto;
    padding: var(--space-4) clamp(var(--space-4), 4vw, var(--space-6));
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    border: 0;
    border-radius: var(--radius-md);
  }

  .nav-logo {
    height: 28px;
  }

  .rc-nav-desktop {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .nav-link {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: 500;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    border: 0;
    color: var(--link-color);
    transition:
      color 120ms var(--ease-out),
      background-color 120ms var(--ease-out);
    white-space: nowrap;
  }

  .nav-link:hover {
    background: color-mix(in srgb, var(--brand-soft) 70%, transparent);
  }

  .nav-link:focus-visible {
    box-shadow: 0 0 0 2px var(--focus-ring);
    outline: none;
  }

  .mobile-trigger {
    background: transparent;
    border: 0;
    padding: var(--space-2);
    cursor: pointer;
    color: var(--fg);
    border-radius: var(--radius-md);
  }

  .mobile-trigger:hover {
    background: var(--brand-soft);
  }

  .mobile-trigger:focus-visible {
    box-shadow: 0 0 0 2px var(--focus-ring);
    outline: none;
  }

  .nav-divider {
    width: 1px;
    height: 20px;
    background: var(--border);
    margin: 0 var(--space-2);
  }

  .rc-nav-mobile {
    display: none;
  }

  .mobile-menu {
    background: var(--bg-elevated);
    border-top: 1px solid var(--border);
    padding: var(--space-3) var(--space-6) var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .mobile-menu-link {
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: 500;
    color: var(--fg);
    padding: var(--space-3) var(--space-1);
    border: 0;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    transition: color 120ms var(--ease-out);
  }

  .mobile-menu-link:hover {
    color: var(--brand);
  }

  .mobile-menu-link:focus-visible {
    border-radius: var(--radius-sm);
    box-shadow: 0 0 0 2px var(--focus-ring);
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .nav-shell,
    .nav-link,
    .mobile-menu-link {
      transition: none;
    }
  }

  .mobile-menu-button {
    margin-top: var(--space-3);
  }

  @media (max-width: 720px) {
    .rc-nav-desktop {
      display: none;
    }

    .rc-nav-mobile {
      display: inline-flex;
    }

    .nav-inner {
      justify-content: space-between;
    }
  }
</style>
