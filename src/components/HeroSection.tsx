import Image from "next/image";
import { UI } from "@/styles/ui";

export function HeroSection() {
  return (
    <section className={UI.section.ink}>
      <div className={UI.container}>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-7">
            <h1 className={UI.typography.display}>
              Кофе спешелти <span className="italic text-caramel">на 1–3 день</span> после обжарки в
              Минске
            </h1>
            <p className={`mt-6 max-w-xl ${UI.typography.body}`}>
              Маленькая мастерская на Короля, 9. Обжариваем партиями всего по 5 кг по четвергам, а
              по пятницам развозим свежее зерно по Минску.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <a href="#catalog" className={UI.button.primary}>
                Выбрать кофе
              </a>
              <a href="#freshness" className={UI.button.ghost}>
                Почему четверг?
              </a>
            </div>
            <div className="mt-10 flex w-full items-center gap-6 border-t border-charcoal pt-8 sm:mt-12">
              <div>
                <span className="block font-serif text-2xl font-medium text-crema">5 кг</span>
                <span className={UI.typography.label}>партия обжарки</span>
              </div>
              <div className="h-8 w-px bg-charcoal" />
              <div>
                <span className="block font-serif text-2xl font-medium text-crema">2019</span>
                <span className={UI.typography.label}>год основания</span>
              </div>
              <div className="h-8 w-px bg-charcoal" />
              <div>
                <span className="block font-serif text-2xl font-medium text-crema">1–3 дня</span>
                <span className={UI.typography.label}>срок до чашки</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-panel border border-charcoal bg-charcoal sm:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop"
                alt="Свежеобжаренный спешелти кофе Кварта"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
