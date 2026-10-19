import { MapPin, Phone } from "lucide-react";
import { ROASTERY } from "@/data/coffee";
import { UI } from "@/styles/ui";

export function LeadFormNote() {
  return (
    <div className="flex flex-col lg:col-span-5">
      <h2 className={UI.typography.headline}>Оформить заказ или задать вопрос</h2>
      <p className={`mt-5 ${UI.typography.bodyDim}`}>
        Напишите нам — поможем подобрать сорт и смолем зерно прямо перед отправкой под ваш способ:
        турку, воронку V60, гейзерную моку или эспрессо-кофемашину.
      </p>

      <div className="mt-8 space-y-3 text-sm text-soft">
        <div className="flex items-center gap-2.5">
          <MapPin className="h-4 w-4 shrink-0 text-caramel" strokeWidth={1.75} />
          <span>{ROASTERY.address}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="h-4 w-4 shrink-0 text-caramel" strokeWidth={1.75} />
          <span>{ROASTERY.contacts.phone} · Пн–Вс 8:00–20:00</span>
        </div>
      </div>
    </div>
  );
}
