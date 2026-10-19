import { ROASTERY } from "@/data/coffee";
import { UI } from "@/styles/ui";

export function Footer() {
  return (
    <footer
      id="contacts"
      className="border-t border-[#1a1a1a] bg-[#000000] pt-16 pb-12 text-[#ffffff]"
    >
      <div className={UI.container}>
        <div className="grid gap-10 md:grid-cols-12">
          {/* Column 1: About the Workshop */}
          <div className="md:col-span-5 font-sans">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#808080]">
              О МАСТЕРСКОЙ
            </span>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-[#b3b3b3]">
              Маленькая мастерская спешелти кофе в Минске. Обжариваем партиями по 5 кг с 2019 года.
              Свежее зерно каждую пятницу на пике вкуса.
            </p>
          </div>

          {/* Column 2: Location & Hours */}
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

          {/* Column 3: Direct Contacts */}
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

        {/* Small copyright row */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1a1a1a] pt-8 font-sans text-[12px] text-[#808080] sm:flex-row">
          <p>© 2026 Мастерская «Кварта». Минск.</p>
          <p>Обжариваем по четвергам, доставляем по пятницам.</p>
        </div>

        {/* Giant logo «Кварта | 19» grouped together with straight vertical line matching Logo.tsx */}
        <div className="mt-14 overflow-hidden select-none border-t border-[#1a1a1a] pt-10 sm:mt-18">
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10">
            <span className="font-serif text-[clamp(44px,10vw,140px)] font-light italic leading-none tracking-tight text-[#ffffff]">
              Кварта
            </span>
            <span className="h-[clamp(36px,8.5vw,110px)] w-[2px] bg-white/30" />
            <span className="font-serif text-[clamp(44px,10vw,140px)] font-normal not-italic leading-none tracking-tight text-[#ffffff]">
              19
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
