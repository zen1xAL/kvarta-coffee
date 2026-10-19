import { ROASTERY } from "@/data/coffee";
import { UI } from "@/styles/ui";

export function DeliverySection() {
  return (
    <section id="delivery" className={UI.section.cream}>
      <div className={UI.container}>
        <div className="max-w-2xl">
          <h2 className={UI.typography.headlineLight}>Доставка и самовывоз</h2>
          <p className={`mt-4 ${UI.typography.bodyLight}`}>
            Упаковываем каждую пачку сразу после обжарки, чтобы в пятницу утром она отправилась к
            вам.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className={UI.card.lightPanel}>
            <div>
              <span className={`block ${UI.typography.label} text-mocha`}>Курьер по Минску</span>
              <h3 className={`mt-2 ${UI.typography.title}`}>Доставка по пятницам</h3>
              <p className={`mt-4 ${UI.typography.bodyLight}`}>
                Развозим заказы курьером до двери каждую пятницу. Заказы, оформленные до среды
                20:00, попадают в ближайшую пятничную доставку.
              </p>
              <div className="mt-6 inline-flex items-center gap-2">
                <span className={UI.chip.note}>Бесплатно при заказе от 50 BYN</span>
              </div>
            </div>
            <p className="mt-8 border-t border-sand pt-4 text-xs text-mocha">
              При заказе до 50 BYN стоимость доставки — 6 BYN в пределах МКАД.
            </p>
          </div>

          <div className={UI.card.lightPanel}>
            <div>
              <span className={`block ${UI.typography.label} text-mocha`}>
                Мастерская и кофейня
              </span>
              <h3 className={`mt-2 ${UI.typography.title}`}>Самовывоз на Короля, 9</h3>
              <p className={`mt-4 ${UI.typography.bodyLight}`}>
                Вы можете забрать заказ лично в нашей мастерской, выпить чашку свежего фильтра и
                пообщаться с обжарщиками.
              </p>
              <div className="mt-6 space-y-2 text-sm font-medium text-bean">
                <p>📍 {ROASTERY.address}</p>
                <p>🕒 {ROASTERY.workingHours.weekdays}</p>
                <p>🕒 {ROASTERY.workingHours.weekends}</p>
              </div>
            </div>
            <p className="mt-8 border-t border-sand pt-4 text-xs text-mocha">
              Готовность к выдаче — каждую пятницу с 10:00.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
