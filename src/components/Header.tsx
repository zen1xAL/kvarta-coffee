import { Logo } from "@/components/Logo";
import { UI } from "@/styles/ui";

const NAV_ITEMS = [
  { href: "#catalog", label: "Ассортимент" },
  { href: "#freshness", label: "Свежесть" },
  { href: "#subscription", label: "Подписка" },
  { href: "#delivery", label: "Доставка" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top Olive Announcement Bar */}
      <div className="bg-[#4d4a31] px-4 py-2 text-center font-sans text-[12px] text-[#f6f7f2]">
        Бесплатная пятничная доставка по Минску при заказе от 50 BYN
      </div>

      {/* Main Dark Header #0e1311 */}
      <div className="border-b border-[#1a1a1a] bg-[#0e1311]/95 backdrop-blur-md">
        <div className={`flex h-16 items-center justify-between ${UI.container}`}>
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[14px] font-medium text-[#ffffff] transition-colors hover:text-[#b3b3b3]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#lead-form"
            className="font-serif text-[15px] font-normal italic text-[#ffffff] transition-colors hover:text-[#dfdbca]"
          >
            Оформить заказ →
          </a>
        </div>
      </div>
    </header>
  );
}
