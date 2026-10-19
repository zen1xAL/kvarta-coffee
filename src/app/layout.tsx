import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-id00-serif",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-gt-america-standard",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600"],
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
        url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
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
    <html lang="ru" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0e1311] text-[#ffffff] font-sans">
        {children}
      </body>
    </html>
  );
}
