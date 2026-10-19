import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Кварта — Обжарка спешелти кофе в Минске",
  description:
    "Маленькая мастерская в Минске. Обжариваем по четвергам партиями по 5 кг, доставляем по пятницам.",
  openGraph: {
    title: "Кварта — Свежеобжаренный кофе в Минске",
    description:
      "Свежая обжарка по четвергам, доставка по пятницам. Зерно от 26 BYN, подписка 54 BYN/мес.",
    locale: "ru_BY",
    type: "website",
    url: "https://kvarta-coffee.by",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Кварта — Обжарка кофе в Минске",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-cream font-sans">{children}</body>
    </html>
  );
}
