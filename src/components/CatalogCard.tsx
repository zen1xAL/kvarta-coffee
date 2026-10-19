import Image from "next/image";
import type { CoffeeProduct } from "@/types/coffee";

interface CatalogCardProps {
  item: CoffeeProduct;
}

export function CatalogCard({ item }: CatalogCardProps) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px] bg-[#efe3d2]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="mt-5 flex flex-col items-start text-left">
        <h3 className="font-serif text-[24px] font-normal italic text-[#ffffff] sm:text-[26px]">
          {item.name}
        </h3>

        <p className="mt-1.5 font-sans text-[14px] text-[#b3b3b3]">
          {item.notes.join(" + ")} · {item.weight}
        </p>

        <a
          href="#lead-form"
          data-lead-interest="разовый заказ"
          data-lead-comment={`Заказ: ${item.name} (${item.weight})`}
          className="mt-4 inline-flex items-center rounded-[4px] bg-[#f6f7f2] px-4 py-2 font-sans text-xs font-medium text-[#0e1311] transition-colors hover:bg-[#ffffff]"
        >
          Выбрать — {item.price} BYN
        </a>
      </div>
    </article>
  );
}
