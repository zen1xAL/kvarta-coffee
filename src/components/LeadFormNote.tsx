import { MapPin, Phone } from "lucide-react";
import { ROASTERY } from "@/data/coffee";
import { UI } from "@/styles/ui";

export function LeadFormNote() {
  return (
    <div className="flex flex-col lg:col-span-5">
      <span className={UI.typography.caption}>ПРЯМАЯ СВЯЗЬ С ОБЖАРЩИКАМИ</span>
      <h2 className={`${UI.typography.headingLg} mt-3`}>Оформить заказ или задать вопрос</h2>
      <p className="mt-4 font-sans text-[16px] leading-relaxed text-[#b3b3b3]">
        Напишите нам — поможем подобрать сорт и смолем зерно перед отправкой под ваш метод: турку,
        воронку V60, фильтр, гейзер или эспрессо.
      </p>

      <div className="mt-8 space-y-3 font-sans text-[14px] text-[#b3b3b3]">
        <div className="flex items-center gap-2.5">
          <MapPin className="h-4 w-4 shrink-0 text-[#cadcac]" strokeWidth={1.75} />
          <span>{ROASTERY.address}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="h-4 w-4 shrink-0 text-[#cadcac]" strokeWidth={1.75} />
          <span>
            {ROASTERY.contacts.phone} · {ROASTERY.workingHours.weekdays},{" "}
            {ROASTERY.workingHours.weekends}
          </span>
        </div>
      </div>
    </div>
  );
}
