import { UI } from "@/styles/ui";

const SCHEDULE = [
  {
    day: "Четверг",
    title: "Обжарка микро-партиями под заказ",
    description:
      "Запускаем ростер только под собранные заказы партиями до 5 кг. Никакого складского хранения.",
  },
  {
    day: "Пятница",
    title: "Доставка до двери и самовывоз",
    description:
      "Курьер развозит свежие пачки по Минску, либо вы забираете их лично в мастерской на Короля, 9.",
  },
  {
    day: "Выходные",
    title: "Пик раскрытия букета в чашке",
    description:
      "1–3 день дегазации: идеальный баланс сочной ягодной кислотности, карамельной сладости и чистоты.",
  },
];

export function FreshnessSection() {
  return (
    <section id="freshness" className={UI.section.bean}>
      <div className={UI.container}>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Founder Story & Manifesto */}
          <div className="flex flex-col lg:col-span-6">
            <h2 className={UI.typography.headline}>Почему свежесть решает всё</h2>
            <blockquote className="mt-6 border-l-2 border-crema pl-5 font-quote italic text-cream">
              «Кофе полугодовой давности — это тень вкуса. Настоящий спешелти живёт первые недели, а
              пик букета наступает на 1–3 день после ростера.»
            </blockquote>
            <p className={`mt-6 ${UI.typography.bodyDim}`}>
              Мы — Аня и Дмитрий, бывшие бариста. В 2019 году открыли маленькую мастерскую на
              Короля, 9, потому что устали от лежалого зерна. Мы не производим кофе впрок — каждая
              пачка обжаривается персонально под заказы недели.
            </p>
            <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-wider text-muted">
              Аня и Дмитрий · основатели и обжарщики «Кварты»
            </p>
          </div>

          {/* Right: Open Vertical Schedule with Hairline Dividers */}
          <div className="divide-y divide-line-strong/50 border-y border-line-strong/50 lg:col-span-6">
            {SCHEDULE.map((item) => (
              <div key={item.day} className="py-7 first:pt-2 last:pb-2">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-caramel">
                  {item.day}
                </span>
                <h3 className={`mt-2 ${UI.typography.titleDark}`}>{item.title}</h3>
                <p className={`mt-2.5 ${UI.typography.bodyDim}`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
