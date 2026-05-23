# Recompiled — Website UI kit (Svelte)

A Svelte 4 recreation of the marketing site. Mirrors the React version 1:1 — same tokens, same components, same interactions.

## What's here

```
ui_kits/website-svelte/
├─ index.html              # boots the app via in-browser Svelte compilation
├─ App.svelte              # root component
├─ Nav.svelte              # sticky top nav + mobile menu
├─ Hero.svelte             # light hero with eyebrow + tagline
├─ EpisodeList.svelte      # Spotify recents grid
├─ EpisodeCard.svelte      # single episode row
├─ Hosts.svelte            # two-host bio cards
├─ HostCard.svelte         # single host card
├─ Player.svelte           # sticky bottom audio player
├─ Subscribe.svelte        # bright-inverse subscribe panel
├─ Footer.svelte           # site footer
├─ Button.svelte           # button primitive
├─ Eyebrow.svelte          # mono eyebrow label
├─ Icon.svelte             # Lucide icon wrapper
└─ data.js                 # EPISODES + HOSTS sample data
```

## How it runs in the preview

The browser-side compiler in `index.html` fetches each `.svelte` file, compiles it via `svelte/compiler` from esm.sh, rewrites relative imports to blob URLs, and dynamically imports the root.

This is **for the preview only**. In a real SvelteKit / Vite project, you'd just drop these `.svelte` files into your `src/lib/components/` and `+page.svelte` and skip the compile loader entirely.

## Lifting into a real Svelte project

```bash
npm create svelte@latest recompiled-site
cd recompiled-site
# copy these files into src/lib/components/
# copy colors_and_type.css to src/app.css (or import in +layout.svelte)
# in src/routes/+page.svelte:
```

```svelte
<script>
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  /* ...etc */
</script>

<Nav />
<Hero />
<!-- ...etc -->
```

## Notes

- **Svelte 4 syntax** (no runes). If you want Svelte 5 with runes, ping me and I'll port — the component shape is the same, the reactivity declarations change.
- Same caveats as the React kit: no real Spotify integration, no real audio playback, subscribe form posts nowhere, Lucide icons via CDN.
