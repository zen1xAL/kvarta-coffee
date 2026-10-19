import { SubscriptionCoverGraphic } from "./SubscriptionCoverGraphic";
import { Reveal } from "@/components/Reveal";
import { UI } from "@/styles/ui";

export function SubscriptionSection() {
  return (
    <section id="subscription" className="bg-[#723824] py-16 sm:py-24 text-[#ffffff]">
      <div className={UI.container}>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0} className="flex flex-col items-start lg:col-span-7">
            <span className="font-sans text-[12px] font-medium tracking-wider text-[#dfdbca] uppercase">
              Подписка Кварта — Ежемесячный выпуск 01
            </span>

            <p className="mt-6 font-serif text-[26px] font-light italic leading-snug text-[#ffffff] sm:text-[32px]">
              «Подписка Кварта — это две свежие пачки по 250 г каждый месяц. Мы обжариваем зерно в
              четверг и бесплатно привозим его в пятницу домой или в офис в Минске»
            </p>

            <div className="mt-8 sm:mt-10">
              <a
                href="#lead-form"
                data-lead-interest="подписка"
                data-lead-comment="Подписка на свежий кофе (2 пачки по 250 г / мес за 54 BYN)"
                data-select-interest="подписка"
                data-select-coffee="Подписка на свежий кофе (2 пачки по 250 г / мес за 54 BYN)"
                className="inline-flex items-center rounded-[4px] bg-[#f6f7f2] px-6 py-3 font-sans text-xs font-medium text-[#0e1311] transition-all duration-200 hover:bg-[#ffffff] active:scale-[0.98]"
              >
                Оформить — 54 BYN / мес
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <SubscriptionCoverGraphic />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
