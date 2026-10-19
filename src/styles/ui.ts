export const UI = {
  section: {
    dark: "border-b border-[#1a1a1a] bg-[#0e1311] text-[#ffffff] section-padding",
    manifesto: "border-t border-b border-[#1a1a1a] bg-[#0e1311] text-[#ffffff] section-padding",
    linen: "border-b border-[#dfdbca] bg-[#f6f7f2] text-[#0e1311] section-padding",
  },
  container: "container-page",
  typography: {
    display: "font-serif text-[34px] sm:text-[42px] font-light italic leading-[1.2] text-[#ffffff]",
    headingLg:
      "font-serif text-[28px] sm:text-[36px] font-light italic leading-[1.2] text-[#ffffff]",
    heading:
      "font-serif text-[24px] sm:text-[30px] font-normal italic leading-[1.25] text-[#ffffff]",
    headingLight:
      "font-serif text-[28px] sm:text-[36px] font-normal italic leading-[1.2] text-[#0e1311]",
    headingSm: "font-serif text-[21px] font-normal italic leading-[1.25] text-[#ffffff]",
    productTitle: "font-serif text-[24px] font-normal italic leading-[1.2] text-[#ffffff]",
    productTitleLight: "font-serif text-[24px] font-normal italic leading-[1.2] text-[#0e1311]",
    manifesto:
      "font-serif text-[26px] sm:text-[32px] md:text-[36px] font-light italic leading-[1.25] text-[#ffffff]",
    body: "font-sans text-[16px] font-normal leading-[1.5] text-[#b3b3b3]",
    bodyLight: "font-sans text-[16px] font-normal leading-[1.5] text-[#333333]",
    bodySm: "font-sans text-[14px] font-normal leading-[1.5] text-[#b3b3b3]",
    bodySmLight: "font-sans text-[14px] font-normal leading-[1.5] text-[#808080]",
    caption: "font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#b3b3b3]",
    captionDark: "font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#333333]",
    linkItalic:
      "font-serif text-[16px] font-normal italic text-[#ffffff] transition-colors hover:text-[#faf080] hover:underline",
  },
  badge: {
    citron:
      "inline-flex items-center rounded-[4px] bg-[#faf080] px-2 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#0e1311]",
    lichen:
      "inline-flex items-center rounded-[4px] bg-[#cadcac] px-2 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#0e1311]",
    gold: "inline-flex items-center rounded-[4px] border border-[#cfa53b] px-2 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#ffffff]",
  },
  pill: {
    price:
      "inline-flex items-center rounded-[60px] bg-[#f6f7f2] px-4 py-1.5 font-sans text-[13px] font-medium text-[#0e1311]",
  },
  button: {
    primary:
      "inline-flex items-center justify-center rounded-[4px] bg-[#f6f7f2] px-6 py-3.5 font-sans text-[14px] font-medium text-[#0e1311] transition-all duration-200 hover:bg-[#faf080] active:scale-[0.98]",
    primarySm:
      "inline-flex items-center justify-center rounded-[4px] bg-[#f6f7f2] px-4 py-2 font-sans text-[13px] font-medium text-[#0e1311] transition-all duration-200 hover:bg-[#faf080] active:scale-[0.98]",
    ghost:
      "inline-flex items-center justify-center rounded-[4px] border border-[#333333] bg-transparent px-5 py-3 font-sans text-[14px] font-medium text-[#ffffff] transition-all duration-200 hover:border-[#b3b3b3] hover:text-[#ffffff] active:scale-[0.98]",
  },
  card: {
    product:
      "flex flex-col justify-between rounded-[4px] border border-[#1a1a1a] bg-[#0e1311] p-5 text-[#ffffff]",
    panel: "rounded-[4px] border border-[#1a1a1a] bg-[#0e1311] p-6 sm:p-10 text-[#ffffff]",
    subscription: "rounded-[4px] border border-[#cfa53b] bg-[#1a1a1a] p-6 sm:p-10 text-[#ffffff]",
    linen: "rounded-[4px] border border-[#dfdbca] bg-[#f6f7f2] p-6 sm:p-10 text-[#0e1311]",
  },
  input:
    "w-full rounded-[4px] border border-[#333333] bg-[#1a1a1a] px-4 py-3 font-sans text-[15px] text-[#ffffff] placeholder-[#808080] focus:border-[#faf080] focus:outline-none",
  optionButton: {
    base: "rounded-[4px] border px-4 py-2.5 font-sans text-[13px] font-medium transition-colors",
    active: "border-[#faf080] bg-[#faf080] text-[#0e1311]",
    inactive:
      "border-[#333333] bg-[#1a1a1a] text-[#b3b3b3] hover:border-[#808080] hover:text-[#ffffff]",
  },
  field: {
    textarea:
      "w-full rounded-[4px] border border-[#333333] bg-[#1a1a1a] px-4 py-3 font-sans text-[15px] text-[#ffffff] placeholder-[#808080] focus:border-[#faf080] focus:outline-none",
    feedback:
      "rounded-[4px] border border-[#cfa53b] bg-[#1a1a1a] p-4 font-sans text-sm text-[#dfdbca]",
  },
} as const;
