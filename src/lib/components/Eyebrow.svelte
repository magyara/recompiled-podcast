<script>
  export let prefix = '';
  export let color = 'var(--brand)';
</script>

<div
  class="eyebrow"
  style="
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: {color};
    font-weight: 600;
  "
>{prefix ? `${prefix} ` : ''}<slot /></div>
