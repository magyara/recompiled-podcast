<script>
  export let host;

  /** @param {string} icon */
  function getSocialIconSrc(icon) {
    const iconMap = /** @type {Record<string, string>} */ ({
      linkedin: '/assets/linkedin.svg',
      github: '/assets/github.svg',
      link: '/assets/user.svg',
      art: '/assets/paint.svg'
    });

    return iconMap[icon] || iconMap.link;
  }
</script>

<style>
  .host-card {
    position: relative;
    background: var(--surface-inverse);
    color: var(--on-surface-inverse);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    overflow: hidden;
    transition:
      transform var(--dur-base) var(--ease-out),
      box-shadow var(--dur-base) var(--ease-out);
  }

  .host-card-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 90% -10%, var(--surface-inverse-glow), transparent 60%);
    pointer-events: none;
  }

  .host-card-image {
    width: 300px;
    height: 300px;
    border-radius: var(--radius-lg);
    align-self: center;
    border: 1px solid var(--border);
  }

  .host-card-name {
    margin: 0;
    line-height: var(--leading-snug);
  }

  .host-card-role {
    font-family: var(--font-body);
    font-size: var(--text-xs);
    font-weight: 700;
    color: var(--on-surface-inverse-muted);
    margin-top: 2px;
  }

  .host-card-bio {
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.6;
    color: var(--on-surface-inverse-muted);
    margin: 0;
    text-wrap: pretty;
    flex: 1;
  }

  .host-card-links {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: flex-start;
    margin-top: auto;
  }

  .host-card-link {
    width: 34px;
    height: 34px;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--on-surface-inverse-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    transition: all 120ms var(--ease-out);
    flex-shrink: 0;
  }

  .host-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .host-card-link:hover {
    background: color-mix(in srgb, var(--on-surface-inverse) 12%, transparent);
    border-color: color-mix(in srgb, var(--on-surface-inverse) 36%, var(--border));
  }

  .host-card-link:focus-visible {
    box-shadow: 0 0 0 2px var(--focus-ring);
    outline: none;
  }

  .host-card-link-icon {
    display: block;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 640px) {
    .host-card {
      padding: var(--space-5);
    }

    .host-card-image {
      width: 100%;
      max-width: 300px;
      height: auto;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .host-card,
    .host-card-link {
      transition: none;
    }

    .host-card:hover {
      transform: none;
    }
  }
</style>

<article class="host-card">
  <div class="host-card-glow"></div>

  <img src={host.img} alt={host.name} class="host-card-image" />

  <div>
    <h2 class="host-card-name">{host.name}</h2>
    <div class="host-card-role">{host.role}</div>
  </div>
  <p class="host-card-bio">{host.bio}</p>
  <div class="host-card-links">
    {#each host.links as [icon, href] (`${icon}:${href}`)}
      <a
        class="host-card-link"
        {href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={icon}
      ><img src={getSocialIconSrc(icon)} alt="" width="16" height="16" class="host-card-link-icon" /></a>
    {/each}
  </div>
</article>
