<script>
  const cols = [
    ['Listen',   [
      { label: 'Spotify', url: 'https://open.spotify.com/show/7qAjYVQdRf2pLIHGBF8g24' },
      { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/recompiled/id1791310095' },
      { label: 'Amazon Music', url: 'https://music.amazon.com/podcasts/5eb43634-df76-48a8-9fdc-b957a45ed6be/recompiled' },
      { label: 'Castbox', url: 'https://castbox.fm/vh/6434014' },
      { label: 'Goodpods', url: 'https://goodpods.com/podcasts/recompiled-622679' },
      { label: 'iHeartRadio', url: 'https://www.iheart.com/podcast/269-recompiled-259113325/' },
      { label: 'RSS feed', url: 'https://anchor.fm/s/ff612a4c/podcast/rss' }
    ]],
    ['The show', ['Episodes', 'Hosts', 'About']],
    ['Contact',  [
      { label: 'recompiledpodcast@gmail.com', url: 'mailto:recompiledpodcast@gmail.com' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/recompiled-podcast/' },
    ]],
  ];

  /** @param {string | { label?: string; url?: string }} item */
  function getLinkUrl(item) {
    if (typeof item === 'string') return '#';
    return item.url || '#';
  }

  /** @param {string | { label?: string; url?: string }} item */
  function getLinkLabel(item) {
    if (typeof item === 'string') return item;
    return item.label || item;
  }
</script>

<style>
  .footer {
    background: var(--bg);
    color: var(--fg-muted);
    border-top: 1px solid var(--border);
  }

  .footer-main {
    padding: 56px 24px 32px;
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .footer-logo {
    height: 30px;
  }

  .footer-lead {
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--fg-muted);
    margin-top: 14px;
    max-width: 280px;
    line-height: 1.55;
  }

  .footer-col-title {
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--fg);
    margin-bottom: 14px;
    font-weight: 600;
  }

  .footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-link {
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--fg-muted);
    border: 0;
  }

  .footer-meta {
    border-top: 1px solid var(--border);
    padding: 18px 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }

  .footer-copyright {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--fg-subtle);
    letter-spacing: 0.06em;
  }
</style>

<footer class="footer">
  <div class="content-shell footer-main">
    <div>
      <img src="../../assets/recompiled_podcast_logo.png" class="footer-logo" alt="Recompiled" />
      <p class="footer-lead">
        What are you doing at the bottom of the page? Just listen to our podcast already!
      </p>
    </div>
    {#each cols as [title, items] (title)}
      <div>
        <div class="footer-col-title">{title}</div>
        <ul class="footer-list">
          {#each items as i (getLinkLabel(i))}
            <li><a href={getLinkUrl(i)} target="_blank" rel="noopener noreferrer" class="footer-link">{getLinkLabel(i)}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  <div class="content-shell footer-meta">
    <div class="footer-copyright">© 2026 RECOMPILED</div>
  </div>
</footer>
