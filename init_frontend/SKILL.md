---
name: recompiled-design
description: Use this skill to generate well-branded interfaces and assets for Recompiled (the engineering podcast), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** Recompiled — a podcast about engineering, rebuilt weekly. Two co-hosts. Voice is direct, dry, plain-spoken; no emoji.
- **Primary color:** `#7c52ff` (violet-500). Soft surfaces use `#ebe4ff` (violet-100). Dark surfaces use `#14082f` / `#0c0a1a` (plum-900/950).
- **Type:** Bricolage Grotesque (display), Manrope (body), JetBrains Mono (eyebrows / code / timestamps).
- **Icons:** Lucide via CDN, 1.75 stroke, 20px default.
- **Tokens:** all CSS vars in `colors_and_type.css` — import that one file and you have the full system.

## Files in this skill

- `README.md` — full brand bible: content fundamentals, visual foundations, iconography.
- `colors_and_type.css` — all design tokens as CSS custom properties (color, type, spacing, radius, shadow, motion, layout). Includes a dark mode at `[data-theme="dark"]`.
- `assets/` — `logo.svg`, `logo-dark.svg`, `logomark.svg`, host placeholder portraits, cover-art template.
- `preview/` — 22 specimen cards (colors, type, spacing, components, brand). Useful as a visual reference.
- `ui_kits/website/` — high-fidelity recreation of the marketing site, ready to lift components from. See its own README.

## Working rules

- Use Lucide icons; never invent SVG iconography from scratch.
- Use `eyebrow`-styled mono labels with a `// ` prefix for episode metadata, section labels, and timestamps.
- Display headlines: sentence case, tight tracking (`-0.03em`), heavy weight (700–800).
- One radial purple glow per dark hero — never stack gradients.
- Hover = filter brighten 96%, no scale. Press = 96% scale, deeper violet.
- Cards = 14px radius, 1px `--border`, white surface, `--shadow-sm` resting / `--shadow-md` hover.
- No emoji. No exclamation points outside dialog. No "journey / unlock / supercharge."
