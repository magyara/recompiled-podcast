<script>
  import { SOCIAL_SVGS } from './data.js';

  export let host;
</script>

<article
  style="
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    display: flex; flex-direction: column; gap: 16px;
  "
>
  <div style="display:flex;gap:16px;align-items:center;">
    <img src={host.img} alt={host.name} style="width:64px;height:64px;border-radius:14px;flex-shrink:0;" />
    <div>
      <h3
        style="
          font-family: var(--font-display); font-weight: 600;
          font-size: 22px; letter-spacing: -0.02em;
          margin: 0; color: var(--fg);
        "
      >{host.name}</h3>
      <div
        style="
          font-family: var(--font-body); font-size: 13px; font-weight: 500;
          color: var(--fg-muted); margin-top: 2px;
        "
      >{host.role}</div>
    </div>
  </div>
  <p
    style="
      font-family: var(--font-body); font-size: 15px; line-height: 1.6;
      color: var(--fg-muted); margin: 0; text-wrap: pretty;
    "
  >{host.bio}</p>
  <div style="display:flex;gap:6px;">
    {#each host.links as [icon, href]}
      <a
        {href}
        aria-label={icon}
        style="
          width: 34px; height: 34px; border-radius: 8px;
          background: transparent; color: var(--fg-muted);
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          transition: all 120ms var(--ease-out);
        "
      >{@html SOCIAL_SVGS[icon] || SOCIAL_SVGS.link}</a>
    {/each}
  </div>
</article>
