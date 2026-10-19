import type { LeadInterest } from "@/types/lead";

export const INTERESTS: { id: LeadInterest; label: string }[] = [
  { id: "подписка", label: "Подписка" },
  { id: "разовый заказ", label: "Разовый заказ" },
  { id: "вопрос", label: "Вопрос" },
];

export const FORM_CONFIG: Record<LeadInterest, { placeholder: string; buttonText: string }> = {
  подписка: {
    placeholder: "Адрес доставки в Минске, удобное время или пожелания по зерну",
    buttonText: "Оформить подписку — 54 BYN / мес",
  },
  "разовый заказ": {
    placeholder: "Сорт кофе, помол (фильтр, турка, эспрессо) или количество пачек",
    buttonText: "Оформить разовый заказ",
  },
  вопрос: {
    placeholder: "Задайте любой вопрос об обжарке, зерне, кофейне или сотрудничестве",
    buttonText: "Задать вопрос",
  },
};
