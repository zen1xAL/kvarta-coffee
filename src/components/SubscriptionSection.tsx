import { SUBSCRIPTION_PLAN } from "@/data/coffee";

export function SubscriptionSection() {
  const perks = [
    "2 пачки свежего зерна по 250 г каждый месяц",
    "Бесплатная курьерская доставка по Минску в пятницу",
    "Каждый месяц — новые сорта и яркие вкусовые профили",
    "Можно поставить на паузу или отменить в любой момент",
  ];

  return (
    <section
      id="subscription"
      className="border-b border-charcoal bg-ink py-20 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-panel border border-line bg-charcoal p-7 sm:p-11 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-pill bg-bean px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-caramel">
                Регулярная доставка
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-cream sm:text-5xl">
                {SUBSCRIPTION_PLAN.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cream-dim sm:text-lg">
                Забудьте о закончившемся кофе. Раз в месяц мы привозим свежеобжаренную пару сортов
                прямо вам домой или в офис.
              </p>

              <ul className="mt-8 space-y-3.5">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-sm text-soft sm:text-base">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-crema" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start justify-between rounded-card border border-line bg-ink/70 p-8 lg:col-span-5">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  Стоимость подписки
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-medium text-crema sm:text-6xl">
                    {SUBSCRIPTION_PLAN.price}
                  </span>
                  <span className="font-serif text-2xl text-cream-dim">BYN</span>
                  <span className="text-sm text-muted">/ месяц</span>
                </div>
                <p className="mt-3 text-xs text-soft">
                  Включает {SUBSCRIPTION_PLAN.packageDetails} и бесплатную пятничную доставку.
                </p>
              </div>

              <div className="mt-8 w-full">
                <a
                  href="#lead-form"
                  data-lead-interest="подписка"
                  data-lead-comment="Оформление подписки на кофе (2 пачки по 250 г / мес)"
                  className="inline-flex w-full items-center justify-center rounded-pill bg-crema px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-caramel"
                >
                  Оформить подписку
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
