import Image from "next/image";

export function SubscriptionCoverGraphic() {
  return (
    <div className="relative flex min-h-[360px] w-full items-center justify-center sm:min-h-[440px]">
      {/* Studio podium ambient shadow */}
      <div className="absolute bottom-6 h-8 w-80 rounded-full bg-black/40 blur-2xl" />

      {/* Two-part Journal Box from Frame 4 of Assembly reference */}
      <div className="relative z-10 flex h-[260px] w-[310px] overflow-hidden rounded-[4px] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] sm:h-[310px] sm:w-[380px]">
        {/* Left Half: Clean White Editorial Sheet */}
        <div className="flex w-1/2 flex-col justify-between bg-[#ffffff] p-5 text-[#0e1311] sm:p-6">
          <div className="flex items-baseline justify-between border-b border-[#dfdbca] pb-2">
            <span className="font-serif text-[18px] font-normal italic sm:text-[20px]">
              Подписка
            </span>
            <span className="font-sans text-[9px] uppercase tracking-wider text-[#808080]">
              Выпуск
            </span>
          </div>

          <div className="my-auto py-2 text-center">
            <span className="font-serif text-[58px] font-light leading-none text-[#0e1311] sm:text-[76px]">
              01
            </span>
          </div>

          <div className="flex items-baseline justify-between border-t border-[#dfdbca] pt-2">
            <span className="font-serif text-[16px] font-normal italic sm:text-[18px]">Кварта</span>
            <span className="font-sans text-[10px] font-medium text-[#4d4a31]">2 × 250 г</span>
          </div>
        </div>

        {/* Right Half: Warm Coffee Photo Flush in Contact */}
        <div className="relative w-1/2 bg-[#1c120c]">
          <Image
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
            alt="Свежезаваренный кофе Кварта"
            fill
            sizes="(max-width: 640px) 155px, 190px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
