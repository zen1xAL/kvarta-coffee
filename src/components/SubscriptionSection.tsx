import { UI } from "@/styles/ui";

const SUBSCRIPTION_POINTS = [
  {
    title: "Две пачки по 250 г",
    desc: "Каждый месяц свежее зерно под ваш вкус и способ заваривания.",
  },
  {
    title: "Бесплатная доставка",
    desc: "Привозим курьером по Минску в пятницу прямо к вашей двери.",
  },
  {
    title: "Всегда на пике вкуса",
    desc: "Обжариваем в четверг — кофе у вас уже на 1–3 день после ростера.",
  },
];

export function SubscriptionSection() {
  return (
    <section id="subscription" className={UI.section.ink}>
      <div className={UI.container}>
        <div className={UI.card.darkPanel}>
          <div className="max-w-2xl">
            <h2 className={UI.typography.headline}>Подписка на свежий кофе</h2>
            <p className={`mt-4 ${UI.typography.bodyDim}`}>
              2 пачки по 250 г раз в месяц. Обжариваем в четверг и бесплатно привозим по Минску в
              пятницу
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {SUBSCRIPTION_POINTS.map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-lg font-medium text-cream">{item.title}</h3>
                <p className={`mt-1.5 ${UI.typography.bodySm}`}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl font-medium text-crema sm:text-5xl">54</span>
              <span className="font-serif text-2xl text-cream">BYN</span>
              <span className="font-sans text-sm text-soft">/ мес</span>
            </div>
            <a
              href="#lead-form"
              data-lead-interest="подписка"
              data-lead-comment="Подписка на свежий кофе (2 пачки по 250 г / мес за 54 BYN)"
              className={UI.button.primary}
            >
              Оформить подписку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
