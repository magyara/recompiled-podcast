<script>
  import { SOCIAL_SVGS } from './data.js';

  export let host;
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

  <img src={host.img} alt={host.name} style="width:300px;height:300px;border-radius:14px;align-self:center;border:1px solid var(--border);" />

  <div>
    <h2>{host.name}</h2>
    <div
      style="
        font-family: var(--font-body); font-size: 13px; font-weight: 500;
        color: var(--on-surface-inverse-muted); margin-top: 2px;
      "
    >{host.role}</div>
  </div>
  <p
    style="
      font-family: var(--font-body); font-size: 15px; line-height: 1.6;
      color: var(--on-surface-inverse-muted); margin: 0; text-wrap: pretty;
    "
  >{host.bio}</p>
  <div style="display:flex;gap:6px;">
    {#each host.links as [icon, href]}
      <a
        {href}
        aria-label={icon}
        style="
          width: 34px; height: 34px; border-radius: 8px;
          background: transparent; color: var(--on-surface-inverse-muted);
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          transition: all 120ms var(--ease-out);
        "
      >{@html SOCIAL_SVGS[icon] || SOCIAL_SVGS.link}</a>
    {/each}
  </div>
</article>
