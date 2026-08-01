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
  style="
    position: relative;
    background: var(--surface-inverse);
    color: var(--on-surface-inverse);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    display: flex; flex-direction: column; gap: 16px;
    overflow: hidden;
  "
>
  <div
    style="
        position: absolute; inset: 0;
        background: radial-gradient(circle at 90% -10%, var(--surface-inverse-glow), transparent 60%);
        pointer-events: none;
      "
  ></div>

  <img
    src={host.img}
    alt={host.name}
    style="width:300px;height:300px;border-radius:14px;align-self:center;border:1px solid var(--border);"
  />

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
