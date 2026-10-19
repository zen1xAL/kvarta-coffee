import Link from "next/link";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className = "", showSubtitle = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex flex-col ${className}`}>
      <span className="font-serif text-2xl font-medium tracking-tight text-cream sm:text-[26px] leading-none">
        Кварта<span className="text-crema">.</span>
      </span>
      {showSubtitle && (
        <span className="mt-1 font-sans text-[11px] font-normal tracking-wider text-muted">
          минск · с 2019
        </span>
      )}
    </Link>
  );
}
