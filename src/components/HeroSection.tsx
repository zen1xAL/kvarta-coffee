import Image from "next/image";

export function HeroSection() {
  return (
    <section className="border-b border-charcoal bg-ink pb-20 pt-12 text-cream sm:pb-28 sm:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-7">
            <h1 className="font-serif text-4xl font-medium leading-[1.02] tracking-tight text-cream sm:text-6xl lg:text-[74px]">
              Кофе спешелти <span className="font-serif italic text-caramel">на 1–3 день</span>{" "}
              после обжарки в Минске
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft sm:text-xl">
              Маленькая мастерская на Короля, 9. Обжариваем партиями всего по 5 кг по четвергам, а
              по пятницам развозим свежее зерно по Минску.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center rounded-pill bg-crema px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-caramel"
              >
                Выбрать кофе
              </a>
              <a
                href="#freshness"
                className="inline-flex items-center justify-center rounded-pill border border-line-strong px-7 py-3.5 text-base font-medium text-cream transition-colors hover:border-crema"
              >
                Почему четверг?
              </a>
            </div>
            <div className="mt-10 flex w-full items-center gap-6 border-t border-charcoal pt-8 sm:mt-12">
              <div>
                <span className="block font-serif text-2xl font-medium text-crema">5 кг</span>
                <span className="text-xs uppercase tracking-wider text-muted">партия обжарки</span>
              </div>
              <div className="h-8 w-px bg-charcoal" />
              <div>
                <span className="block font-serif text-2xl font-medium text-crema">2019</span>
                <span className="text-xs uppercase tracking-wider text-muted">год основания</span>
              </div>
              <div className="h-8 w-px bg-charcoal" />
              <div>
                <span className="block font-serif text-2xl font-medium text-crema">1–3 дня</span>
                <span className="text-xs uppercase tracking-wider text-muted">срок до чашки</span>
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
