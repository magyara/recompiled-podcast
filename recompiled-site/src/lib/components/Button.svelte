<script>
  import Icon from './Icon.svelte';

  export let variant = 'primary';   // primary | secondary | soft | ghost | inverse
  export let size = 'md';           // sm | md | lg
  export let icon = null;
  export let type = 'button';

  const variants = {
    primary:   'background:var(--brand);color:#fff;border:0;box-shadow:0 8px 24px -10px rgba(124,82,255,.55);',
    secondary: 'background:transparent;color:var(--border-strong);border:1.5px solid var(--border-strong);',
    soft:      'background:var(--brand-soft);color:var(--brand-fg);border:0;',
    ghost:     'background:transparent;color:var(--brand);border:0;padding:0;',
    inverse:   'background:#fff;color:var(--fg);border:0;',
  };
  const sizes = {
    sm: 'padding:8px 16px;font-size:13px;',
    md: 'padding:11px 20px;font-size:14px;',
    lg: 'padding:14px 26px;font-size:15px;',
  };

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
  `;
</script>

<button {type} class="rc-btn" style={style} on:click>
  {#if icon}<Icon name={icon} size={16} />{/if}
  <slot />
</button>
