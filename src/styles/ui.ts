export const UI = {
  section: {
    ink: "border-b border-charcoal bg-ink text-cream section-padding",
    charcoal: "border-b border-line bg-charcoal text-cream section-padding",
    bean: "border-b border-charcoal bg-bean text-cream section-padding",
    roast: "border-b border-charcoal bg-roast text-cream section-padding",
    cream: "border-b border-sand bg-cream text-ink section-padding",
  },
  container: "container-page",
  typography: {
    display: "font-display text-cream",
    headline: "font-headline text-cream",
    headlineLight: "font-headline text-ink",
    title: "font-title text-bean",
    titleDark: "font-title text-cream",
    quote: "font-quote text-cream-dim",
    body: "font-body text-soft",
    bodyLight: "font-body text-mocha",
    bodyDim: "font-body text-cream-dim",
    bodySm: "font-body-sm text-soft",
    bodySmLight: "font-body-sm text-mocha",
    label: "font-label text-muted",
  },
  button: {
    primary:
      "inline-flex items-center justify-center rounded-pill bg-crema px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-caramel",
    primarySm:
      "inline-flex items-center justify-center rounded-pill bg-crema px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-caramel",
    ghost:
      "inline-flex items-center justify-center rounded-pill border border-line-strong bg-transparent px-7 py-3.5 text-base font-medium text-cream transition-colors hover:border-crema",
    action:
      "inline-flex items-center justify-center rounded-pill bg-bean px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-roast",
  },
  card: {
    product: "flex flex-col justify-between rounded-card border border-sand bg-paper p-6 text-ink",
    darkPanel: "rounded-panel border border-line bg-charcoal p-7 sm:p-11 lg:p-14 text-cream",
    darkCard: "rounded-card border border-line bg-charcoal/40 p-8 text-cream",
    lightPanel:
      "flex flex-col justify-between rounded-panel border border-sand bg-paper p-8 sm:p-10 text-ink",
  },
  chip: {
    note: "rounded-pill bg-oat px-3 py-1 font-sans text-xs font-medium text-bean",
    origin:
      "rounded-pill bg-ink/80 px-2.5 py-1 font-sans text-[11px] font-medium tracking-wide text-cream backdrop-blur-sm",
    badge: "rounded-pill bg-bean px-3.5 py-1 font-label text-caramel",
  },
  optionPill: {
    base: "rounded-control border px-4 py-3 text-sm font-semibold capitalize transition-colors",
    active: "border-crema bg-crema text-ink",
    inactive: "border-line-strong bg-transparent text-cream hover:border-crema",
    selected: "border-crema bg-crema text-ink",
  },
  inputPill:
    "w-full rounded-pill border border-[#8a5c3c] bg-bean px-5 py-3.5 text-cream placeholder-[#bfa58a] focus:border-caramel focus:outline-none",
  field: {
    inputPill:
      "w-full rounded-pill border border-[#8a5c3c] bg-bean px-5 py-3.5 text-cream placeholder-[#bfa58a] focus:border-caramel focus:outline-none",
    textarea:
      "w-full rounded-control border border-[#8a5c3c] bg-bean px-5 py-3.5 text-cream placeholder-[#bfa58a] focus:border-caramel focus:outline-none",
    feedback: "rounded-control border border-caramel bg-bean p-4 text-sm text-soft",
  },
} as const;
