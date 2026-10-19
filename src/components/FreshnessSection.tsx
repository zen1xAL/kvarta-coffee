export function FreshnessSection() {
  const steps = [
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

  return (
    <section id="freshness" className="border-b border-charcoal bg-bean py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-cream sm:text-5xl">
            Почему свежесть решает всё
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream-dim sm:text-xl">
            Мы — Аня и Дмитрий, бывшие бариста. В 2019 году открыли маленькую мастерскую в Минске,
            потому что устали от кофе полугодовой давности. Настоящий спешелти раскрывается в первые
            недели после ростера.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col justify-between rounded-card border border-line bg-charcoal/40 p-8"
            >
              <div>
                <span className="block font-serif text-4xl font-medium text-crema sm:text-5xl">
                  {step.num}
                </span>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-caramel">
                  {step.day}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-medium text-cream">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream-dim sm:text-[15px]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
