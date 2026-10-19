import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-serif text-[22px] font-normal tracking-tight text-[#ffffff] transition-opacity hover:opacity-80 ${className}`}
    >
      <span className="italic">Кварта</span>
      <span className="font-light text-[#808080]">|</span>
      <span>19</span>
    </Link>
  );
}
