<script>
  const cols = [
    ['Listen',   ['Spotify', 'Apple Podcasts', 'Overcast', 'Pocket Casts', 'RSS feed']],
    ['The show', ['Episodes', 'Transcripts', 'Hosts', 'Patreon']],
    ['Contact',  ['hello@recompiled.fm', 'Press kit', 'Sponsorship']],
  ];
</script>

<footer style="background:var(--bg);color:var(--fg-muted);border-top:1px solid var(--border);">
  <div
    style="
      max-width: 1080px; margin: 0 auto; padding: 56px 24px 32px;
      display: grid; gap: 32px;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    "
  >
    <div>
      <img src="../../assets/logo.svg" style="height:30px;" alt="Recompiled" />
      <p style="font-family:var(--font-body);font-size:13px;color:var(--fg-muted);margin-top:14px;max-width:280px;line-height:1.55;">
        A podcast about engineering, rebuilt weekly. Recorded over a bad connection. Mixed in post.
      </p>
    </div>
    {#each cols as [title, items]}
      <div>
        <div style="font-family:var(--font-body);font-size:13px;color:var(--fg);margin-bottom:14px;font-weight:600;">{title}</div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
          {#each items as i}
            <li><a href="#" style="font-family:var(--font-body);font-size:14px;color:var(--fg-muted);border:0;">{i}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  <div
    style="
      border-top: 1px solid var(--border);
      padding: 18px 24px;
      max-width: 1080px; margin: 0 auto;
      display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
    "
  >
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--fg-subtle);letter-spacing:0.06em;">© 2026 RECOMPILED</div>
  </div>
</footer>
