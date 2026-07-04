<script>
  export let name;
  export let size = 20;

  const iconMap = {
    headphones: '/assets/headphones.svg',
    play: '/assets/play.svg',
    pause: '/assets/play.svg',
    menu: '/assets/headphones.svg',
    x: '/assets/headphones.svg'
  };

  $: src = iconMap[name] || '/assets/headphones.svg';
</script>

<img
  {src}
  alt=""
  aria-hidden="true"
  style="width:{size}px;height:{size}px;display:inline-block;object-fit:contain;"
/>
