import Image from "next/image";
import { UI } from "@/styles/ui";

const HERO_FEATURED = [
  {
    name: "Эфиопия Иргачеффе",
    action: "32 BYN · Выбрать сорт",
    interest: "разовый заказ",
    comment: "Заказ: Эфиопия — Иргачеффе (250 г)",
  },
  {
    name: "Колумбия Уила",
    action: "29 BYN · Выбрать сорт",
    interest: "разовый заказ",
    comment: "Заказ: Колумбия — Уила (250 г)",
  },
  {
    name: "Бразилия Серрадо",
    action: "26 BYN · Выбрать сорт",
    interest: "разовый заказ",
    comment: "Заказ: Бразилия — Серрадо (250 г)",
  },
  {
    name: "Дрип-пакеты ассорти",
    action: "18 BYN · 10 штук в боксе",
    interest: "разовый заказ",
    comment: "Заказ: Дрип-пакеты — Ассорти (10 шт)",
  },
  {
    name: "Подписка на кофе",
    action: "54 BYN в месяц",
    interest: "подписка",
    comment: "Подписка на свежий кофе (2 пачки по 250 г / мес за 54 BYN)",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#1a1a1a] bg-gradient-to-r from-[#4a1c0d] via-[#2e1108] to-[#0e1311] py-14 sm:py-20">
      <div className={UI.container}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: H1 Title + All 5 Featured Positions */}
          <div className="lg:col-span-6">
            <h1 className="font-serif text-[32px] font-light italic leading-[1.18] text-[#ffffff] sm:text-[40px]">
              Свежая обжарка кофе в Минске — зерно на 1–3 день после ростера
            </h1>

            <div className="mt-8">
              <span className="font-sans text-[11px] font-semibold tracking-[0.15em] text-[#dfdbca] uppercase">
                ИЗБРАННОЕ
              </span>

              <div className="mt-5 space-y-6">
                {HERO_FEATURED.map((item) => (
                  <div key={item.name}>
                    <a
                      href="#lead-form"
                      data-lead-interest={item.interest}
                      data-lead-comment={item.comment}
                      className="group inline-block"
                    >
                      <h2 className="font-serif text-[19px] font-light italic text-[#ffffff] transition-colors group-hover:text-[#dfdbca] sm:text-[21px]">
                        {item.name}
                      </h2>
                      <p className="mt-0.5 font-sans text-[13px] text-[#b3b3b3] transition-colors group-hover:text-[#ffffff]">
                        {item.action} →
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Studio Photo of Stacked Boxes */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px]">
              <Image
                src="/images/kvarta-hero-v2.png"
                alt="Студийное фото кофе Кварта"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
