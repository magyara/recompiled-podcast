<script>
  import { onMount } from "svelte";
  import Icon from "./Icon.svelte";
  import Button from "./Button.svelte";

  export let active = "home";
  /** @type {(id: string) => void} */
  export let onNavigate = (_id) => {};
  /** @type {() => void} */
  export let onListen = () => {};

  let scrolled = false;
  let mobileOpen = false;

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const items = [
    ["episodes", "Episodes"],
    ["hosts", "Hosts"],
    ["about", "About"],
  ];

  /** @param {string} id */
  function click(id) {
    /** @param {MouseEvent} e */
    return (e) => {
      e.preventDefault();
      onNavigate(id);
      mobileOpen = false;
    };
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
  <div class="nav-inner">
    <a href="#home" on:click={click("home")} class="nav-brand">
      <img
        src="../../assets/recompiled_podcast_logo.png"
        alt="Recompiled"
        class="nav-logo"
      />
    </a>

    <div class="rc-nav-desktop">
      {#each items as [id, label] (id)}
        <a
          href={`#${id}`}
          on:click={click(id)}
          class="nav-link"
          style="color: {active === id ? 'var(--brand)' : 'var(--fg)'};"
          >{label}</a
        >
      {/each}
      <span class="nav-divider"></span>
      <Button variant="primary" size="sm" icon="headphones" on:click={onListen}
        >Listen</Button
      >
    </div>

    <button
      class="rc-nav-mobile"
      on:click={() => (mobileOpen = !mobileOpen)}
      aria-label="Menu"
      style="background:transparent;border:0;padding:8px;cursor:pointer;color:var(--fg);"
    >
      <Icon name={mobileOpen ? "x" : "menu"} size={22} />
    </button>
  </div>

  {#if mobileOpen}
    <div class="mobile-menu">
      {#each items as [id, label] (id)}
        <a href={`#${id}`} on:click={click(id)} class="mobile-menu-link"
          >{label}</a
        >
      {/each}
      <div class="mobile-menu-button">
        <Button
          variant="primary"
          size="md"
          icon="headphones"
          on:click={onListen}>Listen on Spotify</Button
        >
      </div>
    </div>
  {/if}
</nav>

<style>
  .nav-inner {
    max-width: 1080px;
    margin: 0 auto;
    padding: 14px clamp(16px, 4vw, 24px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 0;
  }

  .nav-logo {
    height: 30px;
  }

  .rc-nav-desktop {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .nav-link {
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    padding: 8px 14px;
    border-radius: 8px;
    border: 0;
    transition: color 120ms var(--ease-out);
    white-space: nowrap;
  }

  .nav-divider {
    width: 1px;
    height: 20px;
    background: var(--border);
    margin: 0 10px;
  }

  .rc-nav-mobile {
    display: none;
  }

  .mobile-menu {
    background: var(--bg-elevated);
    border-top: 1px solid var(--border);
    padding: 10px 24px 18px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .mobile-menu-link {
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 500;
    color: var(--fg);
    padding: 12px 4px;
    border: 0;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
  }

  .mobile-menu-button {
    margin-top: 12px;
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
