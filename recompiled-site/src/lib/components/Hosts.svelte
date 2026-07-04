<script>
  import Eyebrow from './Eyebrow.svelte';
  import HostCard from './HostCard.svelte';
  import { HOSTS } from './data.js';
</script>

<section id="hosts" style="max-width:1080px;margin:0 auto;padding:clamp(64px,9vw,100px) 24px;">
  <header style="margin-bottom:36px;max-width:640px;">
    <h2
      style="
        font-family: var(--font-display); font-weight: 700;
        font-size: clamp(28px, 4.4vw, 44px); letter-spacing: -0.03em;
        line-height: 1.05; margin: 10px 0 14px; color: var(--fg); text-wrap: balance;
      "
    >Meet the Hosts</h2>
    <p style="font-family:var(--font-body);font-size:17px;line-height:1.55;color:var(--fg-muted);margin:0;text-wrap:pretty;">
      We're qualified to talk about this stuff, I promise :D
    </p>
  </header>
  <div style="display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));">
    {#each HOSTS as h (h.name)}
      <HostCard host={h} />
    {/each}
  </div>
</section>

<section id="about" style="max-width:1080px;margin:0 auto;padding:clamp(64px,9vw,100px) 24px;">
  <header style="margin-bottom:36px;max-width:640px;">
    <h2
      style="
        font-family: var(--font-display); font-weight: 700;
        font-size: clamp(28px, 4.4vw, 44px); letter-spacing: -0.03em;
        line-height: 1.05; margin: 10px 0 14px; color: var(--fg); text-wrap: balance;
      "
    >About</h2>
    <p style="font-family:var(--font-body);font-size:17px;line-height:1.55;color:var(--fg-muted);margin:0;text-wrap:pretty;">
      We got tired of complaining just to each other and decided to post those opinions on the Internet for all to hear. <b>Warning: Episode content may include raw speculation about the future of technology, quacked out names of people we're talking about, cat noises in the background, and actually helpful content from real software engineers.</b>
    </p>
    <hr style="border:0;height:1px;background:var(--fg-muted);opacity:0.12;margin:20px 0;width:100%;" />
    <p style="font-family:var(--font-body);font-size:17px;line-height:1.55;color:var(--fg-muted);margin:24px 0 0;text-wrap:pretty;">
      Abi and Ariel met in undergrad where they both studied Computer Engineering. They bonded by chatting on the Rapid 50 bus after attending a self defense class hosted by the Society of Women Engineers. They've followed each other to two different universities, two different companies, and two different states. On the first Friday of each month, they catch up over Discord with their treasured “Girls Group” from undergrad. 
    </p>
    <p style="font-family:var(--font-body);font-size:17px;line-height:1.55;color:var(--fg-muted);margin:24px 0 0;text-wrap:pretty;">
      Both are graduate students enrolled in the Georgia Institute of Technology's Online Master of Science in Computer Science Program with a specialization in Artificial Intelligence and will graduate within the next year or so. 
    </p>
  </header>
</section>
