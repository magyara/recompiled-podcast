<script>
  import Icon from "./Icon.svelte";

  /** @type {'primary' | 'secondary' | 'soft' | 'ghost' | 'inverse'} */
  export let variant = "primary";
  /** @type {'sm' | 'md' | 'lg'} */
  export let size = "md";
  /** @type {string | null} */
  export let icon = null;
  /** @type {string | null} */
  export let iconName = null;
  /** @type {'button' | 'submit' | 'reset'} */
  export let type = "button";
  export let bordered = false;

  const variants =
    /** @type {Record<'primary' | 'secondary' | 'soft' | 'ghost' | 'inverse', string>} */ ({
      primary:
        "background:var(--brand);color:#fff;border:0;box-shadow:0 8px 24px -10px rgba(124,82,255,.55);",
      secondary:
        "background:transparent;color:var(--border-strong);border:1.5px solid var(--border-strong);",
      soft: "background:var(--brand-soft);color:var(--brand-fg);border:0;",
      ghost: "background:transparent;color:var(--brand);border:0;padding:0;",
      inverse: "background:#fff;color:var(--fg);border:0;",
    });
  const sizes = /** @type {Record<'sm' | 'md' | 'lg', string>} */ ({
    sm: "padding:8px 16px;font-size:13px;",
    md: "padding:11px 20px;font-size:14px;",
    lg: "padding:14px 26px;font-size:15px;",
  });

  $: style = `
    font-family: var(--font-body);
    font-weight: 600;
    border-radius: 999px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    transition: all 120ms var(--ease-out);
    ${sizes[size]}
    ${variants[variant]}
    ${
      bordered
        ? "border:3px solid color-mix(in srgb, var(--border-strong) 78%, white);"
        : ""
    }
  `;
</script>

<button {type} class="rc-btn" {style} on:click>
  {#if icon}<Icon name={iconName || icon} size={16} />{/if}
  <slot />
</button>
