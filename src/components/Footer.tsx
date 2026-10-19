import { ROASTERY } from "@/data/coffee";
import { Logo } from "@/components/Logo";
import { UI } from "@/styles/ui";

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-charcoal bg-ink py-16 text-cream">
      <div className={UI.container}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className={`mt-4 max-w-sm ${UI.typography.bodySm}`}>
              Маленькая мастерская спешелти кофе в Минске. Обжариваем партиями по 5 кг с 2019 года.
              Свежее зерно каждую пятницу.
            </p>
          </div>

          <div className="md:col-span-4">
            <span className={`block ${UI.typography.label}`}>Мастерская и кофейня</span>
            <p className="mt-3 text-sm font-medium text-cream">{ROASTERY.address}</p>
            <p className={`mt-1 ${UI.typography.bodySm}`}>
              Будни: {ROASTERY.workingHours.weekdays}
            </p>
            <p className={`mt-1 ${UI.typography.bodySm}`}>
              Выходные: {ROASTERY.workingHours.weekends}
            </p>
          </div>

          <div className="md:col-span-3">
            <span className={`block ${UI.typography.label}`}>Связь</span>
            <div className="mt-3 space-y-2 text-sm">
              <a
                href={`tel:${ROASTERY.contacts.phone.replace(/[^\d+]/g, "")}`}
                className="block text-cream transition-colors hover:text-caramel"
              >
                {ROASTERY.contacts.phone}
              </a>
              <a
                href={`https://t.me/${ROASTERY.contacts.telegram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="block text-soft transition-colors hover:text-caramel"
              >
                Telegram {ROASTERY.contacts.telegram}
              </a>
              <a
                href={`https://instagram.com/${ROASTERY.contacts.instagram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="block text-soft transition-colors hover:text-caramel"
              >
                Instagram {ROASTERY.contacts.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-charcoal pt-8 text-xs text-muted sm:flex-row">
          <p>© 2026 Мастерская «Кварта». Минск.</p>
          <p>Обжариваем по четвергам, доставляем по пятницам.</p>
        </div>
      </div>
    </footer>
  );
}
