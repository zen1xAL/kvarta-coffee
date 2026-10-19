import { ROASTERY } from "@/data/coffee";

export function DeliverySection() {
  return (
    <section id="delivery" className="border-b border-sand bg-cream py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            Доставка и самовывоз
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mocha sm:text-lg">
            Упаковываем каждую пачку сразу после обжарки, чтобы в пятницу утром она отправилась к
            вам.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-panel border border-sand bg-paper p-8 sm:p-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-mocha">
                Курьер по Минску
              </span>
              <h3 className="mt-2 font-serif text-2xl font-medium text-bean sm:text-3xl">
                Доставка по пятницам
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mocha sm:text-base">
                Развозим заказы курьером до двери каждую пятницу. Заказы, оформленные до среды
                20:00, попадают в ближайшую пятничную доставку.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-pill bg-oat px-4 py-2 text-sm font-medium text-bean">
                <span>Бесплатно при заказе от 50 BYN</span>
              </div>
            </div>
            <p className="mt-8 border-t border-sand pt-4 text-xs text-mocha">
              При заказе до 50 BYN стоимость доставки — 6 BYN в пределах МКАД.
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-panel border border-sand bg-paper p-8 sm:p-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-mocha">
                Мастерская и кофейня
              </span>
              <h3 className="mt-2 font-serif text-2xl font-medium text-bean sm:text-3xl">
                Самовывоз на Короля, 9
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mocha sm:text-base">
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
