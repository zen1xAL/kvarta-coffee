import Image from "next/image";
import { COFFEE_PRODUCTS } from "@/data/coffee";
import { UI } from "@/styles/ui";

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
    <section id="catalog" className={UI.section.cream}>
      <div className={UI.container}>
        <div className="max-w-2xl">
          <h2 className={UI.typography.headlineLight}>Свежий урожай этой недели</h2>
          <p className={`mt-4 ${UI.typography.bodyLight}`}>
            Обжариваем в четверг под заказ. Каждая пачка — с клапаном дегазации и датой обжарки.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COFFEE_PRODUCTS.map((item) => (
            <article key={item.id} className={UI.card.product}>
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-control bg-oat">
                  <Image
                    src={PRODUCT_IMAGES[item.id] || item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className={`absolute right-3 top-3 ${UI.chip.origin}`}>{item.weight}</span>
                </div>

                <div className="mt-5">
                  <span className={`block ${UI.typography.label} text-mocha`}>{item.roast}</span>
                  <h3 className={`mt-1 ${UI.typography.title}`}>{item.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.notes.map((note) => (
                      <span key={note} className={UI.chip.note}>
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-sand pt-5">
                <span className={UI.typography.title}>
                  {item.price} <span className="font-sans text-sm uppercase text-mocha">BYN</span>
                </span>
                <a
                  href="#lead-form"
                  data-lead-interest="разовый заказ"
                  data-lead-comment={`Заказ: ${item.name} (${item.weight})`}
                  className={UI.button.action}
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
