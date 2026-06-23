<script>
  import { onMount } from 'svelte';
  import Icon from './Icon.svelte';
  import Button from './Button.svelte';

  export let active = 'home';
  export let onNavigate = () => {};
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

  function click(id) {
    return (e) => { e.preventDefault(); onNavigate(id); mobileOpen = false; };
  }
</script>

<nav
  style="
    position: sticky;
    top: 0;
    z-index: 50;
    background: {scrolled ? 'rgba(250,249,253,0.82)' : 'transparent'};
    backdrop-filter: {scrolled ? 'saturate(180%) blur(12px)' : 'none'};
    border-bottom: 1px solid {scrolled ? 'var(--border)' : 'transparent'};
    transition: all 200ms var(--ease-out);
  "
>
  <div style="max-width:1080px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;">
    <a href="#home" on:click={click('home')} style="display:flex;align-items:center;gap:10px;border:0;">
      <img src="../../assets/logo.svg" alt="Recompiled" style="height:30px;" />
    </a>

    <div class="rc-nav-desktop" style="display:flex;align-items:center;gap:4px;">
      {#each items as [id, label]}
        <a
          href={`#${id}`}
          on:click={click(id)}
          style="
            font-family: var(--font-body);
            font-size: 14px;
            font-weight: 500;
            color: {active === id ? 'var(--brand)' : 'var(--fg)'};
            padding: 8px 14px;
            border-radius: 8px;
            border: 0;
            transition: color 120ms var(--ease-out);
          "
        >{label}</a>
      {/each}
      <span style="width:1px;height:20px;background:var(--border);margin:0 10px;"></span>
      <Button variant="primary" size="sm" icon="headphones" on:click={onListen}>Listen</Button>
    </div>

    <button
      class="rc-nav-mobile"
      on:click={() => (mobileOpen = !mobileOpen)}
      aria-label="Menu"
      style="display:none;background:transparent;border:0;padding:8px;cursor:pointer;color:var(--fg);"
    >
      <Icon name={mobileOpen ? 'x' : 'menu'} size={22} />
    </button>
  </div>

  {#if mobileOpen}
    <div style="background:var(--bg-elevated);border-top:1px solid var(--border);padding:10px 24px 18px;display:flex;flex-direction:column;gap:4px;">
      {#each items as [id, label]}
        <a
          href={`#${id}`}
          on:click={click(id)}
          style="font-family:var(--font-body);font-size:16px;font-weight:500;color:var(--fg);padding:12px 4px;border:0;border-bottom:1px solid var(--border);"
        >{label}</a>
      {/each}
      <div style="margin-top:12px;">
        <Button variant="primary" size="md" icon="headphones" on:click={onListen}>Listen on Spotify</Button>
      </div>
    </div>
  {/if}
</nav>
