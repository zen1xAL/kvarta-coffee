import { Logo } from "@/components/Logo";
import { UI } from "@/styles/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal bg-ink/92 backdrop-blur-md">
      <div className={`flex h-20 items-center justify-between ${UI.container}`}>
        <Logo />

        <nav className="hidden items-center gap-8 text-[15px] text-cream md:flex">
          <a href="#catalog" className="transition-colors hover:text-caramel">
            Каталог
          </a>
          <a href="#freshness" className="transition-colors hover:text-caramel">
            Свежесть
          </a>
          <a href="#subscription" className="transition-colors hover:text-caramel">
            Подписка
          </a>
          <a href="#delivery" className="transition-colors hover:text-caramel">
            Доставка
          </a>
          <a href="#contacts" className="transition-colors hover:text-caramel">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#lead-form" className={UI.button.primarySm}>
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
