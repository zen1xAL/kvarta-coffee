import Image from "next/image";
import type { CoffeeProduct } from "@/data/coffee";
import { UI } from "@/styles/ui";

interface CatalogCardProps {
  item: CoffeeProduct;
}

export function CatalogCard({ item }: CatalogCardProps) {
  return (
    <article className={UI.card.product}>
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-control bg-oat">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>

        <div className="mt-4">
          <h3 className={UI.typography.title}>{item.name}</h3>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.notes.map((note) => (
              <span key={note} className={UI.chip.note}>
                {note}
              </span>
            ))}
          </div>

          <p className="mt-3 font-sans text-xs font-medium text-mocha">{item.weight}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-sand pt-4">
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
  );
}
