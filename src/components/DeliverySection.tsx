import { UI } from "@/styles/ui";

const DELIVERY_CARDS = [
  {
    title: "Пятничный курьер",
    desc: "Развозим свежеобжаренное зерно по всему Минску каждую пятницу с 10:00 до 18:00 прямо к вашей двери.",
  },
  {
    title: "Бесплатно от 50 BYN",
    desc: "При заказе от двух пачек доставка по городу за наш счет. При заказе до 50 BYN — 6 BYN.",
  },
  {
    title: "Самовывоз на Короля, 9",
    desc: "Забирайте заказ лично из мастерской, знакомьтесь с обжарщиками и пробуйте чашку фильтра недели.",
  },
  {
    title: "Часы работы",
    desc: "Будни: 8:00–20:00. Выходные: 10:00–18:00. Всегда поможем подобрать сорт и смолем зерно перед вами.",
  },
];

export function DeliverySection() {
  return (
    <section id="delivery" className="bg-[#f6f7f2] py-20 sm:py-28 text-[#0e1311]">
      <div className={UI.container}>
        <div className="text-center">
          <h2 className="font-serif text-[32px] font-normal italic sm:text-[36px]">
            Доставка и самовывоз
          </h2>
          <p className="mt-1 font-sans text-[26px] font-normal tracking-tight text-[#0e1311] sm:text-[32px]">
            Минск, ул. Короля, 9
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {DELIVERY_CARDS.map((card) => (
            <div key={card.title} className="flex flex-col text-left">
              <h3 className="font-serif text-[20px] font-normal italic text-[#0e1311] sm:text-[22px]">
                {card.title}
              </h3>
              <p className="mt-3 font-sans text-[14px] leading-relaxed text-[#4d4a31]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
