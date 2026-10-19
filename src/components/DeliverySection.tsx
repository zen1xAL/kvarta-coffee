import { MapPin, Clock, Truck, Coffee } from "lucide-react";
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

        {/* Editorial Spec-Grid with 1px sand dividers */}
        <div className="mt-12 overflow-hidden rounded-panel border border-sand bg-paper">
          <div className="grid divide-y divide-sand lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {/* Column 1: Courier */}
            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="flex items-center gap-2.5 text-roast">
                  <Truck className="h-5 w-5" strokeWidth={1.75} />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-mocha">
                    Курьер по пятницам
                  </span>
                </div>

                <h3 className={`mt-3 ${UI.typography.title}`}>Доставка до двери в Минске</h3>
                <p className={`mt-3 ${UI.typography.bodyLight}`}>
                  Развозим заказы курьером до двери каждую пятницу. Заказы, оформленные до среды
                  20:00, попадают в пятничный маршрут.
                </p>

                <div className="mt-6 space-y-3 border-t border-sand pt-5 text-sm text-bean">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-roast" strokeWidth={1.75} />
                    <span>Пятничный развоз с 10:00 до 18:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="h-4 w-4 shrink-0 text-roast" strokeWidth={1.75} />
                    <span>Зерно в 1–2 день после четверговой обжарки</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-sand pt-4">
                <span className={UI.chip.note}>Бесплатно от 50 BYN</span>
                <span className="ml-3 text-xs text-mocha">до 50 BYN — 6 BYN по Минску</span>
              </div>
            </div>

            {/* Column 2: Pickup */}
            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="flex items-center gap-2.5 text-roast">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-mocha">
                    Мастерская и кофейня
                  </span>
                </div>

                <h3 className={`mt-3 ${UI.typography.title}`}>Самовывоз на Короля, 9</h3>
                <p className={`mt-3 ${UI.typography.bodyLight}`}>
                  Вы можете забрать заказ лично, попробовать свежий фильтр недели и пообщаться с
                  обжарщиками о рецептах заваривания.
                </p>

                <div className="mt-6 space-y-3 border-t border-sand pt-5 text-sm text-bean">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-roast" strokeWidth={1.75} />
                    <span>{ROASTERY.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-roast" strokeWidth={1.75} />
                    <span>Будни: {ROASTERY.workingHours.weekdays}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-roast" strokeWidth={1.75} />
                    <span>Выходные: {ROASTERY.workingHours.weekends}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-sand pt-4">
                <span className={UI.chip.note}>Выдача с пятницы 10:00</span>
                <span className="ml-3 text-xs text-mocha">чашка фильтра в подарок</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
