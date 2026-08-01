<script>
  const cols = [
    [
      "Listen",
      [
        {
          label: "Spotify",
          url: "https://open.spotify.com/show/7qAjYVQdRf2pLIHGBF8g24",
        },
        {
          label: "Apple Podcasts",
          url: "https://podcasts.apple.com/us/podcast/recompiled/id1791310095",
        },
        {
          label: "Amazon Music",
          url: "https://music.amazon.com/podcasts/5eb43634-df76-48a8-9fdc-b957a45ed6be/recompiled",
        },
        { label: "Castbox", url: "https://castbox.fm/vh/6434014" },
        {
          label: "Goodpods",
          url: "https://goodpods.com/podcasts/recompiled-622679",
        },
        {
          label: "iHeartRadio",
          url: "https://www.iheart.com/podcast/269-recompiled-259113325/",
        },
        { label: "RSS feed", url: "https://anchor.fm/s/ff612a4c/podcast/rss" },
      ],
    ],
    ["The show", ["Episodes", "Hosts", "About"]],
    [
      "Contact",
      [
        {
          label: "recompiledpodcast@gmail.com",
          url: "mailto:recompiledpodcast@gmail.com",
        },
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/company/recompiled-podcast/",
        },
      ],
    ],
  ];

  /** @param {string | { label?: string; url?: string }} item */
  function getLinkUrl(item) {
    if (typeof item === "string") return "#";
    return item.url || "#";
  }

  /** @param {string | { label?: string; url?: string }} item */
  function getLinkLabel(item) {
    if (typeof item === "string") return item;
    return item.label || item;
  }
</script>

<footer
  style="background:var(--bg);color:var(--fg-muted);border-top:1px solid var(--border);"
>
  <div
    style="
      max-width: 1080px; margin: 0 auto; padding: 56px 24px 32px;
      display: grid; gap: 32px;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    "
  >
    <div>
      <img
        src="../../assets/recompiled_podcast_logo.png"
        style="height:30px;"
        alt="Recompiled"
      />
      <p
        style="font-family:var(--font-body);font-size:13px;color:var(--fg-muted);margin-top:14px;max-width:280px;line-height:1.55;"
      >
        What are you doing at the bottom of the page? Just listen to our podcast
        already!
      </p>
    </div>
    {#each cols as [title, items] (title)}
      <div>
        <div
          style="font-family:var(--font-body);font-size:13px;color:var(--fg);margin-bottom:14px;font-weight:600;"
        >
          {title}
        </div>
        <ul
          style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;"
        >
          {#each items as i (getLinkLabel(i))}
            <li>
              <a
                href={getLinkUrl(i)}
                target="_blank"
                rel="noopener noreferrer"
                style="font-family:var(--font-body);font-size:14px;color:var(--fg-muted);border:0;"
                >{getLinkLabel(i)}</a
              >
            </li>
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
    <div
      style="font-family:var(--font-mono);font-size:11px;color:var(--fg-subtle);letter-spacing:0.06em;"
    >
      © 2026 RECOMPILED
    </div>
  </div>
</footer>
