import Image from "next/image";
import { COFFEE_PRODUCTS } from "@/data/coffee";

const PRODUCT_IMAGES: Record<string, string> = {
  "ethiopia-yirgacheffe":
    "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop",
  "colombia-huila":
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop",
  "brazil-cerrado":
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
  "drip-assorted":
    "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop",
};

export function CatalogSection() {
  return (
    <section id="catalog" className="border-b border-sand bg-cream py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            Свежий урожай этой недели
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mocha sm:text-lg">
            Обжариваем в четверг под заказ. Каждая пачка — с клапаном дегазации и датой обжарки.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COFFEE_PRODUCTS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-card border border-sand bg-paper p-6"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-control bg-oat">
                  <Image
                    src={PRODUCT_IMAGES[item.id] || item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className="absolute right-3 top-3 rounded-pill bg-ink/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-cream backdrop-blur-sm">
                    {item.weight}
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-mocha">
                    {item.roast}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-medium text-bean sm:text-2xl">
                    {item.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="rounded-pill bg-oat px-3 py-1 text-xs font-medium text-bean"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-sand pt-5">
                <span className="font-serif text-2xl font-medium text-bean">
                  {item.price} <span className="font-sans text-sm uppercase text-mocha">BYN</span>
                </span>
                <a
                  href="#lead-form"
                  data-lead-interest="разовый заказ"
                  data-lead-comment={`Заказ: ${item.name} (${item.weight})`}
                  className="rounded-pill bg-bean px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-roast"
                >
                  Выбрать
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
