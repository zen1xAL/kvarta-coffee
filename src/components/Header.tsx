import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal bg-ink/92 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="h-3.5 w-3.5 rounded-full bg-crema transition-transform group-hover:scale-110" />
          <span className="font-serif text-2xl font-medium tracking-tight text-cream">Кварта</span>
        </Link>

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
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-pill bg-crema px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-caramel"
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
