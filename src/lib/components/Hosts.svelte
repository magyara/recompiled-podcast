<script>
  import HostCard from './HostCard.svelte';
  import { HOSTS } from './data.js';
</script>

<style>
  .hosts-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  .about-layout {
    display: grid;
    gap: clamp(20px, 4vw, 42px);
    grid-template-columns: minmax(0, 1fr) minmax(220px, 360px);
    align-items: start;
  }

  .about-text {
    max-width: var(--max-w-prose);
  }

  .about-copy + .about-copy {
    margin-top: 24px;
  }

  .about-warning {
    margin-top: 24px;
  }

  .about-divider {
    border: 0;
    height: 1px;
    background: var(--fg-muted);
    opacity: 0.12;
    margin: 20px 0;
    width: 100%;
  }

  .about-photo-wrap {
    position: relative;
    justify-self: end;
    width: min(100%, 340px);
    padding: 10px 10px 18px;
    background: color-mix(in srgb, var(--bg-elevated) 92%, var(--violet-50));
    border: 1px solid color-mix(in srgb, var(--border-strong) 82%, white);
    border-radius: 6px;
    box-shadow: 0 10px 30px -16px rgba(36, 16, 85, 0.45), 0 2px 6px rgba(36, 16, 85, 0.16);
    transform: rotate(2.2deg);
  }

  .about-photo {
    width: 100%;
    height: auto;
    display: block;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    object-fit: cover;
  }

  .about-photo-caption {
    margin-top: 10px;
    text-align: center;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--fg-muted);
    letter-spacing: 0.03em;
  }

  @media (max-width: 900px) {
    .about-layout {
      grid-template-columns: minmax(0, 1fr);
    }

    .about-photo-wrap {
      justify-self: start;
      transform: rotate(1deg);
      margin-top: 8px;
      width: min(100%, 320px);
    }
  }
</style>

<section id="hosts" class="section-shell">
  <header class="section-head">
    <h2 class="section-title">Meet the Hosts</h2>
    <p class="section-copy">
      We're qualified to talk about this stuff, I promise :D
    </p>
  </header>
  <div class="hosts-grid">
    {#each HOSTS as h (h.name)}
      <HostCard host={h} />
    {/each}
  </div>
</section>

<section id="about" class="section-shell">
  <div class="about-layout">
    <header class="section-head about-text">
      <h2 class="section-title">About</h2>
      <p class="section-copy about-copy">
        We got tired of gabbing just to each other and decided to post those opinions on the Internet for all to hear.
      </p>
      <p class="section-copy about-copy about-warning">
        <b>Warning: Episode content may include raw speculation about the future of AI, quacked out names of people we're talking about, cat noises in the background, and actually helpful content from real software engineers.</b>
      </p>
      <hr class="about-divider" />
      <p class="section-copy about-copy">
        Abi and Ariel met in undergrad where they both studied Computer Engineering. They bonded by chatting on the Rapid 50 bus after attending a self defense class hosted by the Society of Women Engineers. They've followed each other to two different universities, two different companies, and two different states. On the first Friday of each month, they catch up over Discord with their treasured "Girls Group" from undergrad.
      </p>
      <p class="section-copy about-copy">
        Both are graduate students enrolled in the Georgia Institute of Technology's Online Master of Science in Computer Science program with a specialization in Artificial Intelligence and will graduate within the next year or so.
      </p>
    </header>
    <aside class="about-photo-wrap" aria-label="Ariel and Abi">
      <img class="about-photo" src="/assets/ariel_and_abi.jpg" alt="Ariel and Abi together" loading="lazy" />
      <div class="about-photo-caption">Ariel + Abi</div>
    </aside>
  </div>
</section>
