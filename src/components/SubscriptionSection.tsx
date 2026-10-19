import { SUBSCRIPTION_PLAN } from "@/data/coffee";
import { UI } from "@/styles/ui";

const PERKS = [
  "2 пачки свежего зерна по 250 г каждый месяц",
  "Бесплатная курьерская доставка по Минску в пятницу",
  "Каждый месяц — новые сорта и яркие вкусовые профили",
  "Можно поставить на паузу или отменить в любой момент",
];

export function SubscriptionSection() {
  return (
    <section id="subscription" className={UI.section.ink}>
      <div className={UI.container}>
        <div className={UI.card.darkPanel}>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <span className={`inline-block ${UI.chip.badge}`}>Регулярная доставка</span>
              <h2 className={`mt-4 ${UI.typography.headline}`}>{SUBSCRIPTION_PLAN.title}</h2>
              <p className={`mt-4 ${UI.typography.bodyDim}`}>
                Забудьте о закончившемся кофе. Раз в месяц мы привозим свежеобжаренную пару сортов
                прямо вам домой или в офис.
              </p>

              <ul className="mt-8 space-y-3.5">
                {PERKS.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-crema" />
                    <span className={UI.typography.bodySm}>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start justify-between rounded-card border border-line bg-ink/70 p-8 lg:col-span-5">
              <div>
                <span className={UI.typography.label}>Стоимость подписки</span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-medium text-crema sm:text-6xl">
                    {SUBSCRIPTION_PLAN.price}
                  </span>
                  <span className="font-serif text-2xl text-cream-dim">BYN</span>
                  <span className={UI.typography.label}>/ месяц</span>
                </div>
                <p className={`mt-3 text-xs ${UI.typography.bodySm}`}>
                  Включает {SUBSCRIPTION_PLAN.packageDetails} и бесплатную пятничную доставку.
                </p>
              </div>

              <div className="mt-8 w-full">
                <a
                  href="#lead-form"
                  data-lead-interest="подписка"
                  data-lead-comment="Оформление подписки на кофе (2 пачки по 250 г / мес)"
                  className={`w-full ${UI.button.primary}`}
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
