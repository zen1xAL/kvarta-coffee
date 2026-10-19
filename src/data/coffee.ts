export interface CoffeeProduct {
  id: string;
  name: string;
  notes: string[];
  roast: string;
  weight: string;
  price: number;
  image: string;
}

export interface SubscriptionPlan {
  title: string;
  description: string;
  price: number;
  period: string;
  packageDetails: string;
  freeDelivery: boolean;
}

export interface RoasteryData {
  name: string;
  city: string;
  address: string;
  batchSizeKg: number;
  foundedYear: number;
  founders: string;
  roastDay: string;
  deliveryDay: string;
  freshnessWindow: string;
  workingHours: { weekdays: string; weekends: string };
  deliveryTerms: { freeFromBYN: number; description: string };
  contacts: { phone: string; address: string; telegram: string; instagram: string };
}

export const COFFEE_PRODUCTS: CoffeeProduct[] = [
  {
    id: "ethiopia-yirgacheffe",
    name: "Эфиопия Иргачеффе",
    notes: ["цветочный", "бергамот"],
    roast: "светлая обжарка",
    weight: "250 г",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "colombia-huila",
    name: "Колумбия Уила",
    notes: ["карамель", "красное яблоко"],
    roast: "средняя обжарка",
    weight: "250 г",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "brazil-cerrado",
    name: "Бразилия Серрадо",
    notes: ["орех", "шоколад"],
    roast: "под эспрессо",
    weight: "250 г",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "drip-assorted",
    name: "Дрип-пакеты, ассорти",
    notes: ["ассорти сортов"],
    roast: "фильтр-обжарка",
    weight: "10 штук",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },
];

export const SUBSCRIPTION_PLAN: SubscriptionPlan = {
  title: "Подписка на свежий кофе",
  description:
    "2 пачки по 250 г раз в месяц. Обжариваем в четверг и бесплатно привозим по Минску в пятницу",
  price: 54,
  period: "в месяц",
  packageDetails: "2 пачки по 250 г",
  freeDelivery: true,
};

export const ROASTERY: RoasteryData = {
  name: "Обжарка Кварта",
  city: "Минск",
  address: "Минск, ул. Короля, 9",
  batchSizeKg: 5,
  foundedYear: 2019,
  founders: "Аня и Дмитрий (бывшие бариста)",
  roastDay: "четверг",
  deliveryDay: "пятница",
  freshnessWindow: "Зерно приходит к клиенту на 1-3 день после обжарки",
  workingHours: { weekdays: "пн-пт 8:00-20:00", weekends: "сб-вс 10:00-18:00" },
  deliveryTerms: {
    freeFromBYN: 50,
    description: "Доставка по Минску в пятницу, от 50 BYN бесплатно",
  },
  contacts: {
    phone: "+375 29 123-45-67",
    address: "Минск, ул. Короля, 9",
    telegram: "@kvarta_coffee",
    instagram: "@kvarta.coffee",
  },
};

export const LEAD_INTERESTS = [
  { id: "subscription", label: "Подписка" },
  { id: "one-time", label: "Разовый заказ" },
  { id: "question", label: "Вопрос" },
] as const;

export type LeadInterestId = (typeof LEAD_INTERESTS)[number]["id"];
