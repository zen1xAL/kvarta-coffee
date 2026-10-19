# Assembly Coffee London (Kvarta Minsk Localization) — Style Reference

> Embers in a dark roastery. A near-black canvas (#0e1311) with warm, low-lit product photography and italic serif labels — the feeling of a specialty coffee menu printed in a midnight zine.

**Theme:** dark

Assembly Coffee's visual system reads like an editorial magazine printed on black paper. The interface is overwhelmingly dark — near-black canvases (#0e1311) carry everything — interrupted only by dark-lit product photography and hairline typography in white (#ffffff). Two type families do all the work: a geometric sans (`var(--font-gt-america-standard)`, Inter) for UI scaffolding, navigation, and metadata, and a refined serif (`var(--font-id00-serif)`, Cormorant Garamond / Playfair Display) for product names, section labels, and editorial copy, almost always in italic, which turns a functional list into a curated index. The palette is almost monochromatic: chromatic vocabulary is rationed to badge fills (citron `#faf080`, lichen green `#cadcac`, antique gold `#cfa53b`) and the occasional warm-tinted linen surface (`#f6f7f2`). Components are thin, sharp-cornered (`4px` radius), and rely on `1px` borders (`#1a1a1a`, `#333333`, `#dfdbca`) rather than shadows or fills for separation.

## Tokens — Colors

| Name         | Value     | Token                  | Role                                                                                                                 |
| ------------ | --------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Obsidian     | `#0e1311` | `--color-obsidian`     | Primary canvas — page backgrounds, hero sections, card surfaces. Near-black with a faint green undertone             |
| Pure Black   | `#000000` | `--color-pure-black`   | Deepest surface, borders, and type                                                                                   |
| Ash Charcoal | `#1a1a1a` | `--color-ash-charcoal` | Secondary surface and 1px border tone — nav, dividers, product card borders                                          |
| Graphite     | `#333333` | `--color-graphite`     | Mid-neutral for secondary borders, input borders, and card outlines                                                  |
| Stone Gray   | `#808080` | `--color-stone-gray`   | Image placeholder and muted tone                                                                                     |
| Silver       | `#b3b3b3` | `--color-silver`       | Secondary/muted text on dark surfaces (tasting notes, descriptions, captions)                                        |
| Bone         | `#ffffff` | `--color-bone`         | Primary text on dark canvases, inverted surfaces                                                                     |
| Linen        | `#f6f7f2` | `--color-linen`        | Warm off-white surface for price pill backgrounds (`60px` radius), inverted sections, and primary form submit button |
| Sand Khaki   | `#dfdbca` | `--color-sand-khaki`   | Hairline borders, dividers, and card edges on light/inverted surfaces                                                |
| Lichen Green | `#cadcac` | `--color-lichen-green` | Editorial tag badge fill (e.g., «Свежая обжарка», «Фильтр / Дрипы») with `#0e1311` text                              |
| Citron       | `#faf080` | `--color-citron`       | Editorial tag badge fill (e.g., «Урожай недели», «Четверговый батч») with `#0e1311` text                             |
| Antique Gold | `#cfa53b` | `--color-antique-gold` | Accent 1px stroke/border for subscription or special-release badges                                                  |
| Olive Bark   | `#4d4a31` | `--color-olive-bark`   | Top announcement bar background — deep earthy green-brown                                                            |

## Tokens — Typography

### GT America Standard (Localized via `Inter` with Cyrillic) · `--font-gt-america-standard`

- **Weights:** 300, 400, 500, 600
- **Role:** The UI workhorse: navigation labels, body copy, metadata, tasting notes, footer text, form fields. Weight 400 for body, 500 for nav items, 600 sparingly for tiny 11px uppercase labels like `'АССОРТИМЕНТ НЕДЕЛИ'`.

### ID00 Serif (Localized via `Cormorant_Garamond` or `Playfair_Display` with Cyrillic) · `--font-id00-serif`

- **Weights:** 300, 400 (almost always `italic`)
- **Role:** The editorial voice: product names, section headings, `'Выбрать →'` links, and the founder manifesto copy. Almost always set in `italic` — this is the signature move that makes the site read as a curated coffee journal rather than a template store.

### Type Scale

- `caption`: `11px`, line-height `1.5`, uppercase tracking `0.08em` (`--text-caption`)
- `body`: `16px`, line-height `1.5` (`--text-body`)
- `subheading`: `18px`, line-height `1.4` (`--text-subheading`)
- `heading-sm`: `21px`, line-height `1.25` (`--text-heading-sm`)
- `heading`: `30px`, line-height `1.25` (`--text-heading`)
- `heading-lg`: `36px`, line-height `1.2` (`--text-heading-lg`)
- `display`: `42px`, line-height `1.2` (`--text-display`)

## Tokens — Spacing & Shapes

- **Page max-width:** `1400px`
- **Section gap / vertical padding:** `80px` (`--spacing-80`)
- **Card padding:** `20px` (`--spacing-20`)
- **Border Radius:**
  - `nav`, `cards`, `badges`, `inputs`, `buttons`: **`4px`** (`rounded-[4px]`)
  - `pricePills`: **`60px`** (`rounded-[60px]`) — reserved EXCLUSIVELY for the Linen (`#f6f7f2`) price pill (`32 BYN · 250 г`).

## Components (Localized for «Кварта», Минск)

### 1. Announcement Bar

Full-bleed bar at the very top, `olive-bark` (`#4d4a31`) background with `linen` (`#f6f7f2`) text. Sans `11–13px`, centered, single line:
`Обжарка каждый четверг партиями по 5 кг · Доставка по Минску в пятницу (бесплатно от 50 BYN) · Самовывоз: ул. Короля, 9`

### 2. Primary Header / Nav

Sticky dark header on `#0e1311`, `border-b border-[#1a1a1a]`.

- Left: typographic mark `Кварта` in bone serif italic (`21px`) + tiny index `19` (since 2019) in superscript/caption.
- Center: nav items in Sans `14px` weight `500` (`Ассортимент`, `Свежесть`, `Подписка`, `Доставка`, `Заявка`), separated by a vertical `1px` hairline (`#1a1a1a`).
- Right: typographic italic serif action link `Оформить заказ →` or `4px` ghost button (`border border-[#333333]`).

### 3. Editorial Hero (Two-Column Split: 35% Left Index + 65% Right Studio Photograph)

- **Left Column (Featured Index):** On `#0e1311`, `'СВЕЖАЯ ОБЖАРКА · МИНСК'` label in Sans `11px` uppercase letter-spaced at top + main italic serif title (`42px`). Below it, a vertical stack of 4 typographic index entries (Эфиопия Иргачеффе, Колумбия Уила, Бразилия Серрадо, Подписка 54 BYN) — each entry has name in Serif Italic `21px` `#ffffff` and subtext (`32 BYN · Заказать →`) in Sans `13px` `#b3b3b3`, separated by `32–40px` vertical spacing and `1px` `#1a1a1a` hairlines. No cards!
- **Right Column (Studio Photograph):** Large low-key dark-lit coffee photograph (`4px` radius) over a subtle warm ember/charcoal backdrop (`#1a1a1a`), no text overlay.

### 4. Editorial Manifesto Block (Аня и Дмитрий · Почему свежесть важна)

Full-width `#0e1311` section, `80px` vertical padding, `border-t border-[#1a1a1a]`.

- Large Serif Italic `30–36px` (`#ffffff`, weight `300–400`, line-height `1.2`) manifesto prose:
  _«Мы — Аня и Дмитрий, бывшие бариста. С 2019 года обжариваем кофе в Минске микро-партиями по 5 кг каждый четверг, чтобы в пятницу зерно было у вас — на 1–3 день после ростера, на пике эфирных масел и сладости.»_
- Below the prose: a sharp 3-column architectural strip (`border-t border-b border-[#1a1a1a]`, divided by `1px` `#1a1a1a` vertical hairlines, `0px/4px` radius) detailing **Четверг (Обжарка 5 кг)**, **Пятница (Развоз по Минску)**, **1–3 день (Пик вкуса в чашке)** with `#faf080` Citron / `#cadcac` Lichen micro-badges (`4px` radius).

### 5. Product Card Grid (Catalog — 4 items)

4-column or 2x2 grid on `#0e1311` with `1px` border in `#1a1a1a` and `4px` radius (`padding: 20px`).

- **Top Tag Badge:** Small `4px` radius badge (`padding: 4px 8px`, Sans `11px` weight `500` uppercase `#0e1311` text) on `#faf080` (Citron) or `#cadcac` (Lichen Green) or `#cfa53b` stroke.
- **Visual:** Low-key, dark-studio coffee imagery (`4px` radius, slightly desaturated warm dark mood — NO white backgrounds, NO hands holding cappuccinos, NO third-party white bags).
- **Title:** Product name in Serif Italic `24px` `#ffffff` (weight `400`).
- **Tasting Notes:** Sans `14px` `#b3b3b3` (e.g., `цветочный, бергамот, светлая обжарка · 250 г`).
- **Bottom Row:**
  - Bottom-left: **Price Pill** (`60px` radius, `#f6f7f2` Linen background, `padding: 6px 16px`, Sans `13px` weight `500` `#0e1311` text: `32 BYN`).
  - Bottom-right: Typographic link in Serif Italic `16px` `#ffffff` (`Выбрать →` with underline on hover).

### 6. Subscription & Delivery Sections

- **Subscription (`54 BYN / мес`):** Framed architectural block on `#0e1311` / `#1a1a1a` with `1px` `#cfa53b` (Antique Gold) or `#dfdbca` (Sand Khaki) hairline border and `4px` radius. Editorial badge `#faf080` (`ПОДПИСКА`), Serif Italic `36px` heading, Sans `16px` `#b3b3b3` copy, Price Pill (`54 BYN / мес · 2 × 250 г`), and action button.
- **Delivery & Pickup (`Минск, ул. Короля, 9`):** Inverted warm `Linen` (`#f6f7f2`) section (as allowed by Assembly Coffee's _Linen Invert_ rule for rare light sections!) with `#0e1311` text and `1px` `#dfdbca` (Sand Khaki) hairlines, contrasting with the dark gallery sections.

### 7. Lead Form Section

On `#0e1311` canvas with `1px` `#1a1a1a` border:

- Left column: Serif Italic `36px` `#ffffff` heading + `#b3b3b3` Sans copy & workshop details.
- Right column: Sharp `4px` radius inputs (`bg-[#1a1a1a] border border-[#333333] text-[#ffffff] placeholder-[#808080] rounded-[4px]`), `4px` radius interest selector buttons (`Подписка`, `Разовый заказ`, `Вопрос`), and primary submit button (`bg-[#f6f7f2] text-[#0e1311] hover:bg-[#faf080] rounded-[4px] font-medium`).

## Do's and Don'ts

- **Do** set all headlines and product names in **Serif Italic** (`font-serif italic font-normal`, weight 300–400). Never bold 700!
- **Do** keep radii strictly at **`4px`** for cards, badges, inputs, and buttons. Reserve `60px` radius ONLY for the `#f6f7f2` Price Pill.
- **Do** use badge colors (`#faf080` Citron, `#cadcac` Lichen Green, `#cfa53b` Antique Gold) sparingly for `4px` editorial tags.
- **Don't** use `22px` or `28px` rounded cards or `9999px` pill inputs.
- **Don't** place bright white stock photos of third-party coffee bags or cappuccinos on dark cards.
