import { COFFEE_PRODUCTS } from "@/data/coffee";
import { CatalogCard } from "@/components/CatalogCard";
import { UI } from "@/styles/ui";

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
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
