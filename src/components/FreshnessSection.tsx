import { UI } from "@/styles/ui";

const STEPS = [
  {
    num: "01",
    day: "Четверг",
    title: "Обжарка партиями по 5 кг",
    text: "Обжариваем только под подтвержденные заказы. Зерно не лежит на полках и не теряет яркие эфирные масла.",
  },
  {
    num: "02",
    day: "Пятница",
    title: "Доставка по Минску",
    text: "Курьер привозит свежие пачки прямо к двери, либо вы забираете их сами в мастерской на Короля, 9.",
  },
  {
    num: "03",
    day: "Выходные",
    title: "Пик раскрытия вкуса",
    text: "Кофе завершает дегазацию на 1–3 день. Именно в эти дни букет звучит максимально сочно, чисто и сладко.",
  },
];

export function FreshnessSection() {
  return (
    <section id="freshness" className={UI.section.bean}>
      <div className={UI.container}>
        <div className="max-w-3xl">
          <h2 className={UI.typography.headline}>Почему свежесть решает всё</h2>
          <p className={`mt-6 ${UI.typography.bodyDim}`}>
            Мы — Аня и Дмитрий, бывшие бариста. В 2019 году открыли маленькую мастерскую в Минске,
            потому что устали от кофе полугодовой давности. Настоящий спешелти раскрывается в первые
            недели после ростера.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.num} className={UI.card.darkCard}>
              <div>
                <span className="block font-serif text-4xl font-medium text-crema sm:text-5xl">
                  {step.num}
                </span>
                <span className={`mt-4 inline-block ${UI.typography.label} text-caramel`}>
                  {step.day}
                </span>
                <h3 className={`mt-2 ${UI.typography.titleDark}`}>{step.title}</h3>
                <p className={`mt-4 ${UI.typography.bodyDim}`}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
