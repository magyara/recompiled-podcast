# Recompiled Podcast — Design System

A design system for **Recompiled**, a tech / engineering podcast hosted by two co-hosts. The product is a portfolio-style marketing site that doubles as the show's home: it pulls the most recent episodes from Spotify and includes a "meet the hosts" section. Mobile-first, modern, with a light + medium purple palette that leans developer-cool rather than feminine.

## Brand at a glance

- **Name:** Recompiled
- **Format:** Podcast about software, the work of engineering, and the systems we keep rewriting
- **Surfaces:** A single-page marketing/portfolio website (mobile-first), with episode embeds + host bios
- **Voice:** Sharp, plain-spoken, a little wry. Talks to engineers without talking down. No emoji.
- **Aesthetic:** Editorial dev-mag energy — dense typography, mono accents, deep violets with soft purple light, sharp 1px rules.

## Source materials

No codebase, Figma file, or screenshots were provided with the brief. The system below is built from the written description:

> "Recompiled Podcast: Portfolio website that is also mobile-friendly with a modern purple design. Displays most recent podcast episodes from Spotify. Includes area for about the two co-hosts. Modern website with light and medium purple color scheme. Not too feminine."

If a brand kit, logo, photography of the hosts, or an existing site URL exists, drop them into `assets/` (or share the source) and this system can be tightened to match.

## Index — what's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file. Brand overview, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Cross-compatible skill manifest so an agent can pick this up and design with it. |
| `colors_and_type.css` | All CSS custom properties — color, type, spacing, radius, shadow, motion. Import this file and you have the system. Includes light + dark modes. |
| `assets/` | `logo.svg`, `logo-dark.svg`, `logomark.svg`, host portrait placeholders, cover-art template. |
| `preview/` | 22 specimen cards that populate the Design System tab. |
| `ui_kits/website/` | High-fidelity recreation of the marketing site with JSX components and a click-thru `index.html`. |

### UI kits

- **`ui_kits/website/`** — the only product surface. A single-page marketing/portfolio site with hero, episode list (Spotify recents), host bios, subscribe block, and a sticky audio player. Modular JSX components, interactive `index.html`. See its own README for component-level usage.

### Fonts

All three families load from Google Fonts via `@import` at the top of `colors_and_type.css` — no local `.ttf`/`.woff` files are required:

- **Bricolage Grotesque** — display (variable, opsz + weight 400–800)
- **Manrope** — body (weights 400–800)
- **JetBrains Mono** — mono (weights 400–600)

If you need to vendor them for offline use, drop files in a `fonts/` folder and swap the `@import` for `@font-face` declarations.

---

---

## Content fundamentals

**Voice.** Two senior engineers in a kitchen, late. Direct, dry, occasionally salty. Confident enough to admit being wrong. Doesn't perform expertise — earns it by being specific.

**Person.** First-person plural for the show ("we"), second-person for the listener ("you"). Avoid the corporate "our team."

**Casing.**
- Display headlines: sentence case. ("The database we should have written")
- Eyebrows / labels: ALL-CAPS mono with a `// ` prefix or no prefix. ("// EP 042 · 47 MIN")
- Buttons: Title Case for actions, sentence case for everything else.
- Episode titles: sentence case, no terminal punctuation.

**Length.** Headlines under 8 words. Episode descriptions one or two short sentences — a hook, then a turn. No filler. If a sentence can be cut, cut it.

**Emoji.** None. Use mono labels, a `//` comment prefix, or a Lucide icon if a glyph is genuinely needed.

**Punctuation quirks.** Em-dashes are fine. Oxford commas on. Avoid exclamation points outside dialog. The brand voice rarely uses "!".

**Lexicon to lean into.** _rebuild, ship, rewrite, migrate, deploy, on-call, postmortem, in production, on Monday._ Use them literally — don't gesture at "tech" without naming it.

**Words to avoid.** _journey, magical, delight, unlock, supercharge, revolutionize, game-changer, leverage._ No "ultimate guide." No "let's dive in."

**Examples.**

> ✅ **Tagline:** "A podcast about engineering, rebuilt weekly."
> ✅ **Episode title:** "The database we should have written"
> ✅ **CTA:** "Listen on Spotify" / "All episodes" / "Subscribe via RSS"
> ✅ **Eyebrow:** `// EP 042 · 47 MIN · MAY 14`
> ✅ **Footer note:** "Recorded over a bad connection. Mixed in post."

> ❌ "Join us on an exciting journey through the world of software! 🚀"
> ❌ "Unlock the secrets of senior engineering."
> ❌ "The ULTIMATE Postgres migration guide!!!"

---

## Visual foundations

**Color.** A cool, blue-leaning violet (`#7c52ff`) is the primary, with a soft `violet-100` for tinted surfaces and a near-black `plum-950` (`#14082f`) for dark sections. Neutrals are violet-tinted plum greys — never pure `#888`. Light mode is the default; the site supports dark via `[data-theme="dark"]`.

**Type.** Three families. **Bricolage Grotesque** (display, 600–800) for headlines and host names. **Manrope** (body, 400–700) for everything readable. **JetBrains Mono** (mono, 400–600) for eyebrows, episode numbers, timestamps, and code. Display tracks tight (`-0.03em`); body normal; mono slightly loose (`0.02em`) with `0.12em` on uppercase eyebrows.

**Spacing.** 4px base scale. Section padding `--space-20` (80px) desktop / `--space-12` (48px) mobile. Component padding lands on `--space-3 / 4 / 6`.

**Backgrounds.** Mostly flat — `--bg` (warm off-white) or `--bg-inverse` (plum-950). Dark heroes get one *single* radial purple glow in a corner (`radial-gradient(circle at 80% -20%, rgba(124,82,255,.45), transparent 60%)`); never two stacked gradients. Subtle 1px grid lines (`rgba(255,255,255,0.08)`) appear behind cover-art templates and on the dark hero. No textures, no noise, no hand-drawn illustrations.

**Imagery vibe.** Cool. If photographs of the hosts are added, they should be desaturated-warm with a violet tint in shadows; not warm-orange. Cover art is geometric (gradient grids, single glyphs), not photographic.

**Animation.** Restrained. `120ms` for hovers, `200ms` for state changes, `360ms` for entrances. Easing is `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`) almost always. A spring easing exists for play buttons. No bounces on layout. No parallax. Page transitions: cross-fade only.

**Hover.** Links: shift from `--brand` to `--brand-hover` (one step darker), 120ms. Buttons: 4% darker fill, no shadow change. Cards: border darkens to `--border-strong` and shadow steps up `sm → md`. No scale, no lift.

**Press.** 96% scale on buttons (`transform: scale(0.96)`), fill goes to `--violet-600`. No shadow.

**Focus.** A 4px `rgba(124,82,255,0.14)` ring with a 1.5px solid `--brand` border. Always visible — never `outline: none` without a replacement.

**Borders.** 1px solid `--border` (`#ebe7f3`) is the default. Brand-tinted borders (`--border-brand`) are reserved for highlighted cards and focused inputs. No double borders.

**Shadows.** Five steps: `xs` (1px hairline), `sm` (resting), `md` (hover), `lg` (modals / sticky players), and `glow-brand` (purple halo for primary CTAs and "Now playing"). All shadow colors use the deep violet `rgba(36, 16, 85, …)` — never grey.

**Corner radius.** `4 / 8 / 14 / 22 / 32 / pill`. Cards `14px`. Buttons & badges `999px` (pill). Avatars `14px` (rounded square, not circle). Inputs `10px`. Big hero cards `22px`.

**Transparency / blur.** Used only on the sticky player and modal scrims. Player background is `--plum-950` with a single radial highlight — no `backdrop-filter` blur on top of content.

**Layout.**
- Max content width `1080px`; max wide hero `1280px`; max prose `640px`.
- Mobile breakpoint < 640px; tablet 640–960; desktop 960+.
- 12-col grid with 24px gutters; collapses to single-col on mobile.
- Sticky elements: top nav (translucent on scroll, solid on dark), bottom player (always solid, full-bleed on mobile, max 720px centered on desktop).

**Cards.** White surface, 1px `--border`, `14px` radius, `--shadow-sm` resting → `--shadow-md` on hover. Inner padding `--space-4` (16px). No left-border accent stripes. No colored backgrounds except the explicit "tinted" and "inverse" variants.

**Protection gradients.** Only on the dark hero, fading the bottom into solid `--bg-inverse` so text remains readable over the radial glow.

---

## Iconography

**System.** [Lucide](https://lucide.dev) icons, loaded from CDN. Stroke `1.75`, round caps and joins, default size `20px` (`16px` inline-with-text, `24px` for buttons). Color follows surrounding text or `--brand` when emphasized.

**Why Lucide.** Stroke-based, neutral, generous coverage of media/podcast glyphs (`play`, `pause`, `headphones`, `mic`, `rss`, `volume-2`). Pairs well with Manrope without leaning illustrative.

**Loaded via CDN:**
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
<i data-lucide="play"></i>
```

**Icon container.** When an icon sits in its own surface (nav item, episode play button, host social link), wrap in a `40×40` rounded square (`--radius-md`) tinted `--brand-soft` with the icon in `--brand`. Solid-fill play buttons use `--brand` background, `#fff` icon.

**Custom marks.** The recompile glyph (the looping arrow + dot, see `assets/logomark.svg`) is the only proprietary mark. Use it as the app icon, favicon, OG image lockup, and the `//` companion mark in the hero. Don't redraw — copy from `assets/`.

**Emoji.** Not used in product UI, marketing copy, or social. (Hosts can be themselves on their personal feeds — the brand stays text + Lucide.)

**Unicode glyphs.** A few are part of the voice: `//` (comment prefix on mono eyebrows), `·` (mid-dot separator in metadata rows), `→` (rightward arrow on inline links — "Read transcript →"). No other special characters.



