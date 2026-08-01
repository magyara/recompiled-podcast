<script>
  /** @type {string} */
  export let name = "headphones";
  export let size = 20;

  const iconMap = /** @type {Record<string, string>} */ ({
    headphones: "/assets/headphones.svg",
    play: "/assets/play.svg",
    play_banner: "/assets/play_banner.svg",
    pause: "/assets/play.svg",
    menu: "/assets/menu.svg",
    x: "/assets/x.svg",
  });

  $: src = iconMap[name] || "/assets/headphones.svg";
</script>

<img
  {src}
  alt=""
  aria-hidden="true"
  style="width:{size}px;height:{size}px;display:inline-block;object-fit:contain;"
/>
