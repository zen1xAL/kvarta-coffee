---
name: Crema & Nogal (Kvarta Edition)
description: Small-batch specialty coffee roaster; warm, dark, editorial landing built on ink and crema.
colors:
  crema: "#c8894a"
  caramel: "#dda463"
  roast: "#6b4226"
  bean: "#3e2616"
  mocha: "#5a4636"
  mocha-deep: "#6b5848"
  ink: "#141414"
  charcoal: "#2a2a2a"
  line: "#3a3a3a"
  line-strong: "#4a4a4a"
  cream: "#f4ece1"
  cream-dim: "#e6dccf"
  paper: "#fffaf3"
  oat: "#efe3d2"
  sand: "#e6d9c7"
  soft: "#d9cfc2"
  muted: "#bfb4a6"
  hairline: "#d8c7b1"
typography:
  display:
    fontFamily: "var(--font-serif), ui-serif, Georgia, serif"
    fontSize: "clamp(48px, 6.4vw, 92px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "var(--font-serif), ui-serif, Georgia, serif"
    fontSize: "clamp(36px, 4.4vw, 58px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "var(--font-serif), ui-serif, Georgia, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.05
  quote:
    fontFamily: "var(--font-serif), ui-serif, Georgia, serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  chip: "6px"
  control: "14px"
  inset: "16px"
  card: "22px"
  tile: "24px"
  panel: "28px"
  pill: "9999px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(64px, 8vw, 112px)"
  container: "1280px"
  stack-sm: "10px"
  stack-md: "14px"
  stack-lg: "24px"
  stack-xl: "28px"
components:
  button-primary:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 30px"
  button-primary-hover:
    backgroundColor: "{colors.caramel}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "15px 26px"
  chip-note:
    backgroundColor: "{colors.oat}"
    textColor: "{colors.bean}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  chip-origin:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  option-pill:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  option-pill-selected:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.ink}"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.bean}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  tab-selected:
    backgroundColor: "{colors.bean}"
    textColor: "{colors.cream}"
  input-pill:
    backgroundColor: "{colors.bean}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  card-product:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px 24px 26px"
  card-testimonial:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "32px"
  panel-dark:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.panel}"
    padding: "clamp(28px, 3.5vw, 44px)"
---

# Design System: Crema & Nogal (Kvarta Coffee Edition)

## Overview

**Creative North Star: "The Roastery at Dusk"**

The page is a roastery after hours: a near-black room (ink, charcoal, bean) lit by one warm source, the amber of fresh crema. Against that dark, the brand speaks in a confident editorial serif and lets copy breathe. Periodically the visitor steps into daylight: cream and paper sections where the practical work happens (choosing a bag, learning about freshness, reading delivery details). That dark/light alternation is the system's pulse; every section is one or the other, never a blend.

The mood is warm, dark and editorial. Density is generous: sections pad out to 112px, headlines balance across lines, body copy caps at ~30em. Expression lives in type, warm tone and soft geometry, not in ornament, imagery tricks or effects. The world is flat: depth is a change of surface tone, never a shadow.

Confirmed rejections: chain-café green and kraft-paper/chalkboard clichés; generic SaaS styling (drop-shadow cards, decorative gradients, blue CTAs, glassmorphism); rustic farmhouse kitsch (burlap, wood textures, bean doodles, script fonts).

**Key Characteristics:**

- Dark-first canvas (ink) with crema as the single warm light source.
- Strict section alternation between dark rooms and cream daylight.
- Playfair Display (`var(--font-serif)`) for voice, Manrope (`var(--font-sans)`) for everything functional.
- Flat surfaces; depth by tonal stepping and hairline borders.
- Soft, confident geometry: full pills for actions, 22–28px radii for containers.

## Colors

A coffee palette in the literal sense: every hue sits between roasted bean and steamed milk, with one amber accent.

### Primary

- **Crema Amber** (crema `#c8894a`): the light in the room. Primary buttons, announcement bar, logo mark, selected option pills, serif numerals in step lists and value props. The only saturated fill on a dark section.
- **Toasted Caramel** (caramel `#dda463`): crema's hover and highlight partner. Primary-button hover, the italic accent word in the hero headline, link hover on dark.

### Secondary

- **Medium Roast** (roast `#6b4226`): warm brown for structure on light surfaces and for the form/lead band.
- **Dark Bean** (bean `#3e2616`): deepest brown. The Story/Freshness section background, image-placeholder fill, primary text and selected tab fill on cream, step-number discs, form input fill.

### Neutral

- **Night Roast Ink** (ink `#141414`): page background, header (92% with blur), footer, text on cream sections and on crema fills.
- **Charcoal Hopper** (charcoal `#2a2a2a`): raised dark surface: subscription panel, pickup/delivery cards; also hairline dividers on ink.
- **Grinder Steel** (line `#3a3a3a`): dividers and borders on charcoal surfaces.
- **Burr Grey** (line-strong `#4a4a4a`): outline of ghost buttons and unselected option pills on dark.
- **Steamed Milk Cream** (cream `#f4ece1`): primary text on dark; background of light sections (Catalog, Pickup & Delivery).
- **Faded Cream** (cream-dim `#e6dccf`): long-form body copy on dark sections.
- **Paper Filter** (paper `#fffaf3`): card and panel surface inside cream sections.
- **Oat Milk** (oat `#efe3d2`): tasting-note chip fill.
- **Burlap Sand** (sand `#e6d9c7`): borders on paper cards, spec-grid gutters.
- **Foam** (soft `#d9cfc2`): secondary text on dark (hero lede, footer links).
- **Ash** (muted `#bfb4a6`): tertiary text on dark: captions, meta, labels.
- **Cocoa** (mocha `#5a4636`): secondary text on light surfaces.
- **Deep Cocoa** (mocha-deep `#6b5848`): small uppercase labels and fine print on paper.
- **Hairline** (hairline `#d8c7b1`): dividers on cream/light sections.

### Named Rules

**The One Light Rule.** Crema/caramel are the only saturated fills on dark sections. One crema button per cluster; everything else in the cluster is ghost or underline.

**The Daylight Rule.** Light sections use cream as the floor and paper for contained surfaces; text flips to ink/bean/mocha. Never put crema text on cream.

## Typography

**Display Font:** Playfair Display (loaded via `next/font/google` with `subsets: ['cyrillic', 'latin']`, weight 400–700 + italic, bound to CSS variable `--font-serif`)
**Body Font:** Manrope (loaded via `next/font/google` with `subsets: ['cyrillic', 'latin']`, weight 400–600, bound to CSS variable `--font-sans`)

**Character:** Playfair Display (`--font-serif`) is a high-contrast editorial serif with calligraphic italic; set at 500 with tight negative tracking it reads like a roaster's printed menu, not a template. Manrope (`--font-sans`) is a precise neo-grotesk that stays quiet in every functional role. The serif speaks, the sans serves. Prices, step counts and specs use `tabular-nums`.

### Hierarchy

- **Display** (500, clamp(48px, 6.4vw, 92px), 0.98, −0.03em): hero H1 only. Balanced wrap; one phrase switches to italic in caramel, same size.
- **Headline** (500, clamp(36px, 4.4vw, 58px), 1.02, −0.02em): every section H2, balanced wrap, ~13em max.
- **Title** (500, 28px, 1.05, −0.015em): product names, prices, value-prop titles (22px).
- **Quote** (serif, 21–22px, 1.45–1.5): founder story pull-quote (italic). Serif numerals in crema (22–30px) mark lists and steps.
- **Body** (400, 17px, 1.625): section ledes and story copy, max ~30–32em, `text-wrap: pretty`. 15–16px for card/step copy.
- **Label** (500, 12px, 0.1em, uppercase): data labels only (spec grid, pickup details, footer column titles). Never above a section heading.

### Named Rules

**The Headline-Stands-Alone Rule.** Sections open directly with the serif headline. No eyebrow/kicker above it, no decorative 01/02/03 numbering; the headline carries its own weight.

**The Serif Numeral Rule.** Ordinals and counts that structure content (freshness steps 1/2/3, prices in BYN) are set in `--font-serif`, crema on dark. Inline UI numbers stay sans.

## Layout

Single centered column: `container-page` caps at 1280px with a fluid gutter (clamp(20px, 4vw, 48px)). Sections stack full-bleed with fluid vertical padding (`section-y`, clamp(64px, 8vw, 112px)).

Grids use `repeat(auto-fit, minmax(min(100%, N), 1fr))` with N = 220px (value props), 280px (product cards), 360px (two-column splits). Gaps are fluid clamps (clamp(32px, 5vw, 72px) between split columns, clamp(20px, 2.5vw, 32px) between cards).

## Elevation & Depth

Fully flat. No `box-shadow` anywhere in the system. Depth is conveyed by stepping surface tone (ink → charcoal on dark; cream → paper on light; bean for the warm "back room") and by 1px hairline borders (charcoal/line on dark, sand on light). The only translucency is the sticky header: ink at 92% with a medium backdrop blur.

## Shapes

Soft, confident geometry with no sharp corners. Actions and small tags are full pills (9999px). Containers scale their radius with their size: 14px for option controls, 16px for inset spec grids, 22px for cards, 24px for image tiles, 28px for large panels and hero frames. Images are always clipped inside a rounded frame.

## Components

### Buttons

- **Shape:** full pill (9999px).
- **Primary:** crema fill (`#c8894a`), ink text (`#141414`), 600 weight. Sizes: 16px/30px pad at 16px text (hero), 13px/22px at 15px (card), 10px/20px at 14px (header).
- **Hover:** fill shifts to caramel (`#dda463`), 150ms color transition. No lift, no shadow.
- **Ghost:** transparent, line-strong (`#4a4a4a`) 1px border, cream text (`#f4ece1`); border turns crema on hover.

### Chips

- **Tasting note:** oat fill (`#efe3d2`), bean text (`#3e2616`), 13px, pill.
- **Origin/Weight tag:** ink fill (`#141414`), cream text (`#f4ece1`), 12px with 0.06em tracking, pill.

### Option Pills (Lead Form Interest Selection)

Radio-group buttons for form interest choices (`подписка`, `разовый заказ`, `вопрос`). 14px radius, 1px `#4a4a4a` border, transparent, cream semibold 15px text; selected state (`aria-checked`) fills crema (`#c8894a`) with ink text (`#141414`).

### Cards / Containers

- **Product card:** paper surface (`#fffaf3`), 22px radius, 1px sand (`#e6d9c7`) border, 4:3 image on top clipped to the card, 24px internal padding. Price in bean (`#3e2616`) using `--font-serif`.
- **Dark panel (Subscription 54 BYN/мес):** charcoal (`#2a2a2a`), 28px radius, fluid padding clamp(28px, 3.5vw, 44px) with line-colored divider (`#3a3a3a`).
- **Light panel (Pickup & Delivery):** paper (`#fffaf3`), 28px radius, sand border (`#e6d9c7`), fluid padding.

### Inputs / Fields (Lead Form)

Bean fill (`#3e2616`), 1px `#8a5c3c` border, cream text (`#f4ece1`), warm `#bfa58a` placeholder, 15px/22px pad, 16px–22px radius (or pill for single-line inputs). Focus shifts the border to caramel (`#dda463`) with no glow.

### Navigation

Sticky header, ink (`#141414`) at 92% + backdrop blur, charcoal (`#2a2a2a`) bottom hairline. Logo left (crema circle mark + serif wordmark «Кварта» 22px); links right in 15px cream, caramel on hover, ending with a small primary pill CTA.

## Do's and Don'ts

### Do:

- **Do** alternate dark (`ink`/`charcoal`/`bean`) and light (`cream`) sections; every section commits to one.
- **Do** use `crema` as the single warm accent on dark, with `caramel` for hover and highlight.
- **Do** open every section with the `--font-serif` headline alone; no eyebrow above it.
- **Do** build elevation from tone steps and 1px hairlines (`sand` on light, `charcoal`/`line` on dark).
- **Do** use full pills for actions and tags, and 22–28px radii for containers.

### Don't:

- **Don't** add box-shadows, glows, glassmorphism (beyond the header blur) or decorative gradients.
- **Don't** use blue, purple, or green hues anywhere.
- **Don't** use `crema` or `caramel` text on `cream`/`paper` backgrounds; use `roast` or `bean`.
- **Don't** introduce sharp-cornered cards or square buttons.
