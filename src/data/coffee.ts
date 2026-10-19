import type { CoffeeProduct, SubscriptionPlan, RoasteryData } from "@/types/coffee";

export type { CoffeeProduct, SubscriptionPlan, RoasteryData };

export const COFFEE_PRODUCTS: CoffeeProduct[] = [
  {
    id: "ethiopia-yirgacheffe",
    name: "Эфиопия — Иргачеффе",
    notes: ["Цветочный", "Бергамот", "Светлая обжарка"],
    roast: "светлая обжарка",
    weight: "250 г",
    price: 32,
    tag: "Урожай недели",
    tagVariant: "citron",
    image: "/images/kvarta-ethiopia-v2.png",
  },
  {
    id: "colombia-huila",
    name: "Колумбия — Уила",
    notes: ["Карамель", "Красное яблоко", "Средняя обжарка"],
    roast: "средняя обжарка",
    weight: "250 г",
    price: 29,
    tag: "Свежая обжарка",
    tagVariant: "lichen",
    image: "/images/kvarta-colombia-v2.png",
  },
  {
    id: "brazil-cerrado",
    name: "Бразилия — Серрадо",
    notes: ["Орех", "Шоколад", "Под эспрессо"],
    roast: "под эспрессо",
    weight: "250 г",
    price: 26,
    tag: "Четверговый батч",
    tagVariant: "citron",
    image: "/images/kvarta-brazil-v2.png",
  },
  {
    id: "drip-assorted",
    name: "Дрип-пакеты — Ассорти",
    notes: ["Эфиопия и Колумбия", "Фильтр-профиль", "Заваривание в чашке"],
    roast: "фильтр-обжарка",
    weight: "10 штук",
    price: 18,
    tag: "Фильтр / Дрипы",
    tagVariant: "lichen",
    image: "/images/kvarta-drip-v2.png",
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
    telegram: "@kvarta_coffee_2026_bot",
    instagram: "@kvarta.coffee",
  },
};

export const LEAD_INTERESTS = [
  { id: "subscription", label: "Подписка" },
  { id: "one-time", label: "Разовый заказ" },
  { id: "question", label: "Вопрос" },
] as const;

export type LeadInterestId = (typeof LEAD_INTERESTS)[number]["id"];
