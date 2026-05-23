# Recompiled — Website UI kit

A high-fidelity recreation of the Recompiled podcast portfolio site. It is the single product surface in this design system.

## What's here

```
ui_kits/website/
├─ index.html       # interactive click-thru of the full page
├─ Tokens.jsx       # JS handle to a subset of design tokens
├─ Primitives.jsx   # Button, Eyebrow, Badge, Tag, Icon
├─ Nav.jsx          # Sticky top nav, mobile hamburger
├─ Hero.jsx         # Dark hero with radial glow + grid
├─ EpisodeList.jsx  # "Latest episodes" Spotify grid
├─ Hosts.jsx        # Two-host bio cards
├─ Player.jsx       # Bottom sticky audio player
└─ Footer.jsx       # Subscribe + footer columns
```

## Interactive demo

`index.html` boots the full site with these working interactions:

- Click **Listen on Spotify** in the hero → starts EP 042 in the sticky player.
- Click any episode's play button → that card highlights with a violet glow, and the bottom player loads it.
- Click the play button again → toggles play/pause.
- Scrub the progress bar in the player.
- Close the player to dismiss it entirely.
- Submit the subscribe form → confirmation state.
- Click nav items → smooth-scrolls to that section.
- Resize below 760px → nav collapses to a hamburger menu.

## Components — quick reference

```jsx
<Button variant="primary|secondary|soft|ghost|inverse" size="sm|md|lg" icon="play">Listen</Button>
<Eyebrow>EP 042 · 47 MIN · MAY 14</Eyebrow>   // // is added automatically
<Badge tone="brand|solid|outline|success">NEW</Badge>
<Tag>postgres</Tag>
<Icon name="play" size={20} />                 // Lucide
```

## How to extend

- **Add an episode:** push onto `EPISODES` in `EpisodeList.jsx`. The cover gradient cycles from `COVERS`.
- **Add a host:** push onto `HOSTS` in `Hosts.jsx`. Use an SVG placeholder until real portraits are supplied.
- **Wire up Spotify:** the `EPISODES` array is the only data source. Replace it with a fetch from the Spotify episodes endpoint server-side.

## Notes for a real build

- This kit is intentionally lo-fi on functionality. No audio is actually loaded; the player just runs a fake progress bar.
- The "subscribe" form posts nowhere.
- Icons load from the Lucide CDN. For production, vendor the SVGs or use the npm package.
- Fonts are loaded from Google Fonts (Bricolage Grotesque, Manrope, JetBrains Mono).
