import { ROASTERY } from "@/data/coffee";
import { UI } from "@/styles/ui";

const WORKSHOP_FACTS = [
  { label: "САМОВЫВОЗ", value: ROASTERY.address },
  { label: "ТЕЛЕФОН", value: ROASTERY.contacts.phone },
  { label: "БУДНИ", value: ROASTERY.workingHours.weekdays },
  { label: "ВЫХОДНЫЕ", value: ROASTERY.workingHours.weekends },
];

export function LeadFormNote() {
  return (
    <div className="flex flex-col lg:col-span-5">
      <span className={UI.typography.caption}>ПРЯМАЯ СВЯЗЬ С ОБЖАРЩИКАМИ</span>
      <h2 className={`${UI.typography.headingLg} mt-3`}>Оформить заказ или задать вопрос</h2>
      <p className="mt-4 font-sans text-[16px] leading-relaxed text-[#b3b3b3]">
        Напишите нам — поможем подобрать сорт и смолем зерно перед отправкой под ваш метод: турку,
        воронку V60, фильтр, гейзер или эспрессо.
      </p>

      <div className="mt-8 grid grid-cols-2 border-y border-[#242a27]">
        {WORKSHOP_FACTS.map((fact, idx) => (
          <div
            key={fact.label}
            className={`p-4 sm:p-5 ${idx % 2 === 0 ? "border-r border-[#242a27]" : ""} ${
              idx < 2 ? "border-b border-[#242a27]" : ""
            }`}
          >
            <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#808080]">
              {fact.label}
            </span>
            <span className="mt-1 block font-sans text-[13px] font-medium text-[#ffffff]">
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
