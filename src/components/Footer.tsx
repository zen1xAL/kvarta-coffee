import { Logo } from "@/components/Logo";
import { ROASTERY } from "@/data/coffee";
import { UI } from "@/styles/ui";

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-[#1a1a1a] bg-[#000000] py-12 text-[#ffffff]">
      <div className={UI.container}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 font-sans">
            <Logo />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#b3b3b3]">
              Маленькая мастерская спешелти кофе в Минске. Обжариваем партиями по 5 кг с 2019 года.
              Свежее зерно каждую пятницу на пике вкуса.
            </p>
          </div>

          <div className="md:col-span-4 font-sans">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#808080]">
              МАСТЕРСКАЯ И КОФЕЙНЯ
            </span>
            <p className="mt-3 text-[14px] font-medium text-[#ffffff]">{ROASTERY.address}</p>
            <p className="mt-1 text-[14px] text-[#b3b3b3]">
              Будни: {ROASTERY.workingHours.weekdays}
            </p>
            <p className="mt-1 text-[14px] text-[#b3b3b3]">
              Выходные: {ROASTERY.workingHours.weekends}
            </p>
          </div>

          <div className="md:col-span-3 font-sans">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#808080]">
              СВЯЗЬ
            </span>
            <div className="mt-3 space-y-2 text-[14px]">
              <a
                href={`tel:${ROASTERY.contacts.phone.replace(/[^\d+]/g, "")}`}
                className="block text-[#ffffff] transition-colors hover:text-[#dfdbca]"
              >
                {ROASTERY.contacts.phone}
              </a>
              <a
                href={`https://t.me/${ROASTERY.contacts.telegram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="block text-[#b3b3b3] transition-colors hover:text-[#ffffff]"
              >
                Telegram {ROASTERY.contacts.telegram}
              </a>
              <a
                href={`https://instagram.com/${ROASTERY.contacts.instagram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="block text-[#b3b3b3] transition-colors hover:text-[#ffffff]"
              >
                Instagram {ROASTERY.contacts.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#1a1a1a] pt-6 font-sans text-[12px] text-[#808080] sm:flex-row">
          <p>© 2026 Мастерская «Кварта». Минск.</p>
          <p>Обжариваем по четвергам, доставляем по пятницам.</p>
        </div>
      </div>
    </footer>
  );
}
