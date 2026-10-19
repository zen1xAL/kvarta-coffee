import { COFFEE_PRODUCTS } from "@/data/coffee";
import { CatalogCard } from "@/components/CatalogCard";
import { Reveal } from "@/components/Reveal";
import { UI } from "@/styles/ui";

export function CatalogSection() {
  return (
    <section id="catalog" className="bg-[#000000] py-20 sm:py-28 text-[#ffffff]">
      <div className={UI.container}>
        <Reveal>
          <div className="mb-14 max-w-xl">
            <span className="font-sans text-[11px] font-semibold tracking-[0.15em] text-[#808080] uppercase">
              АССОРТИМЕНТ
            </span>
            <h2 className="mt-3 font-serif text-[34px] font-light italic text-[#ffffff] sm:text-[40px]">
              Свежий урожай четверговой обжарки
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="space-y-16 md:space-y-24">
            <Reveal delay={0}>
              <CatalogCard item={COFFEE_PRODUCTS[0]} />
            </Reveal>
            <Reveal delay={100}>
              <CatalogCard item={COFFEE_PRODUCTS[2]} />
            </Reveal>
          </div>

          <div className="space-y-16 md:mt-20 md:space-y-24">
            <Reveal delay={100}>
              <CatalogCard item={COFFEE_PRODUCTS[1]} />
            </Reveal>
            <Reveal delay={200}>
              <CatalogCard item={COFFEE_PRODUCTS[3]} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
