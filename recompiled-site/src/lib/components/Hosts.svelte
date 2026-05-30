<script>
  import Eyebrow from './Eyebrow.svelte';
  import HostCard from './HostCard.svelte';
  import { HOSTS } from './data.js';
</script>

<section id="hosts" style="max-width:1080px;margin:0 auto;padding:clamp(64px,9vw,100px) 24px;">
  <header style="margin-bottom:36px;max-width:640px;">
    <Eyebrow>MEET THE HOSTS</Eyebrow>
    <h2
      style="
        font-family: var(--font-display); font-weight: 700;
        font-size: clamp(28px, 4.4vw, 44px); letter-spacing: -0.03em;
        line-height: 1.05; margin: 10px 0 14px; color: var(--fg); text-wrap: balance;
      "
    >Two engineers. One mic. A lot of opinions.</h2>
    <p style="font-family:var(--font-body);font-size:17px;line-height:1.55;color:var(--fg-muted);margin:0;text-wrap:pretty;">
      We&rsquo;ve shipped, broken, and rebuilt enough systems that we&rsquo;ve started agreeing with each other. The show is the record of when we don&rsquo;t.
    </p>
  </header>
  <div style="display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));">
    {#each HOSTS as h (h.name)}
      <HostCard host={h} />
    {/each}
  </div>
</section>
