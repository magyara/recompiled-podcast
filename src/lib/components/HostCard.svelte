<script>
  import { SOCIAL_SVGS } from "./data.js";

  export let host;

  const socialSvgs = /** @type {Record<string, string>} */ (SOCIAL_SVGS);

  /** @param {string} icon */
  function renderSocialIcon(icon) {
    if (icon === "linkedin") {
      return `<img src="/assets/linkedin.svg" alt="" width="16" height="16" style="display:block;filter:brightness(0) invert(1);" />`;
    }

    if (icon === "github") {
      return `<img src="/assets/github.svg" alt="" width="16" height="16" style="display:block;filter:brightness(0) invert(1);" />`;
    }

    if (icon === "link") {
      return `<img src="/assets/user.svg" alt="" width="16" height="16" style="display:block;filter:brightness(0) invert(1);" />`;
    }

    if (icon === "art") {
      return `<img src="/assets/paint.svg" alt="" width="16" height="16" style="display:block;filter:brightness(0) invert(1);" />`;
    }

    return socialSvgs[icon] || socialSvgs.link || "";
  }
</script>

<article
  class="host-card"
  style="
    position: relative;
    background: var(--surface-inverse);
    color: var(--on-surface-inverse);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    display: flex; flex-direction: column; gap: 16px;
    overflow: hidden;
    box-shadow: 0 16px 36px -24px rgba(10, 6, 24, 0.78), 0 4px 12px rgba(10, 6, 24, 0.32);
  "
>
  <div
    style="
        position: absolute; inset: 0;
        background: radial-gradient(circle at 90% -10%, var(--surface-inverse-glow), transparent 60%);
        pointer-events: none;
      "
  ></div>

  <div
    class="host-photo-frame"
    style="
      align-self: center;
      width: min(100%, 316px);
      padding: 8px 8px 14px;
      border-radius: 8px;
      background: color-mix(in srgb, var(--bg-elevated) 88%, var(--violet-50));
      border: 1px solid color-mix(in srgb, var(--border-strong) 82%, white);
      box-shadow: 0 10px 28px -18px rgba(36, 16, 85, 0.58), 0 2px 6px rgba(36, 16, 85, 0.2);
      transform: rotate(-0.9deg);
    "
  >
    <img
      src={host.img}
      alt={host.name}
      style="width:100%;aspect-ratio:1/1;height:auto;border-radius:12px;display:block;border:1px solid var(--border);object-fit:cover;"
    />
  </div>

  <div>
    <h2>{host.name}</h2>
    <div
      style="
        font-family: var(--font-body); font-size: 13px; font-weight: 700;
        color: var(--on-surface-inverse-muted); margin-top: 2px;
      "
    >
      {host.role}
    </div>
  </div>
  <p
    style="
      font-family: var(--font-body); font-size: 15px; line-height: 1.6;
      color: var(--on-surface-inverse-muted); margin: 0; text-wrap: pretty;
      flex: 1;
    "
  >
    {host.bio}
  </p>
  <div
    style="display:flex;gap:6px;align-items:center;justify-content:flex-start;margin-top:auto;"
  >
    {#each host.links as [icon, href] (`${icon}:${href}`)}
      <a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={icon}
        style="
          width: 34px; height: 34px; border-radius: 8px;
          background: transparent; color: var(--on-surface-inverse-muted);
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          transition: all 120ms var(--ease-out);
          flex-shrink: 0;
        ">{@html renderSocialIcon(icon)}</a
      >
    {/each}
  </div>
</article>

<style>
  .host-card {
    transform: translateY(0) scale(1);
    will-change: transform, box-shadow;
    transition:
      transform 200ms var(--ease-out),
      box-shadow 200ms var(--ease-out);
  }

  .host-card:hover {
    transform: translateY(-5px) scale(1.012);
    box-shadow:
      0 22px 38px -24px rgba(10, 6, 24, 0.95),
      0 10px 20px rgba(10, 6, 24, 0.22);
  }

  .host-card:focus-within {
    transform: translateY(-3px) scale(1.008);
  }

  .host-photo-frame {
    transition:
      transform 200ms var(--ease-out),
      box-shadow 200ms var(--ease-out);
  }

  .host-card:hover .host-photo-frame,
  .host-card:focus-within .host-photo-frame {
    transform: rotate(-1.6deg) scale(1.01);
    box-shadow:
      0 16px 34px -18px rgba(36, 16, 85, 0.64),
      0 4px 10px rgba(36, 16, 85, 0.22);
  }

  @media (prefers-reduced-motion: reduce) {
    .host-card,
    .host-card:hover,
    .host-card:focus-within,
    .host-photo-frame,
    .host-card:hover .host-photo-frame,
    .host-card:focus-within .host-photo-frame {
      transform: none;
    }
  }
</style>
