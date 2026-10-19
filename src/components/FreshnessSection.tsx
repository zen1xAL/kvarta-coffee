import Image from "next/image";

export function FreshnessSection() {
  return (
    <section id="freshness" className="border-t border-[#1a1a1a] bg-[#0e1311]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex min-h-[460px] flex-col justify-end p-8 sm:min-h-[540px] sm:p-14 lg:p-20">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1400&auto=format&fit=crop"
            alt="Обжарка кофе Кварта"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35" />

          <div className="relative z-10 max-w-lg">
            <span className="font-sans text-[12px] font-medium tracking-wider text-[#dfdbca] uppercase">
              Мастерская Ани и Дмитрия · с 2019 года
            </span>
            <p className="mt-4 font-serif text-[24px] font-light italic leading-snug text-[#ffffff] sm:text-[28px]">
              Обжариваем кофе в Минске каждый четверг микро-партиями по 5 кг, сохраняя ремесленный
              контроль за каждой секундой профайла.
            </p>
            <div className="mt-8">
              <a
                href="#catalog"
                className="inline-flex items-center rounded-[4px] bg-[#f6f7f2] px-5 py-2.5 font-sans text-xs font-medium text-[#0e1311] transition-colors hover:bg-[#ffffff]"
              >
                Выбрать зерно
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[460px] flex-col justify-end border-t border-[#1a1a1a] p-8 sm:min-h-[540px] sm:p-14 lg:border-t-0 lg:border-l lg:p-20">
          <Image
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1400&auto=format&fit=crop"
            alt="Пик свежести зерна Кварта"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35" />

          <div className="relative z-10 max-w-lg">
            <span className="font-sans text-[12px] font-medium tracking-wider text-[#dfdbca] uppercase">
              Пик вкуса · 1–3 день после ростера
            </span>
            <p className="mt-4 font-serif text-[24px] font-light italic leading-snug text-[#ffffff] sm:text-[28px]">
              Развозим свежие пачки курьером по Минску в пятницу, чтобы зерно раскрыло свой букет на
              1–3 день — на пике сладости и эфирных масел.
            </p>
            <div className="mt-8">
              <a
                href="#delivery"
                className="inline-flex items-center rounded-[4px] bg-[#f6f7f2] px-5 py-2.5 font-sans text-xs font-medium text-[#0e1311] transition-colors hover:bg-[#ffffff]"
              >
                Условия доставки
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
